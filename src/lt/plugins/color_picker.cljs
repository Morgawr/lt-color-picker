(ns lt.plugins.color-picker
  (:require [lt.object :as object]
            [lt.objs.tabs :as tabs]
            [lt.objs.command :as cmd]
            [lt.objs.notifos :as notifos]
            [lt.objs.editor :as editor]
            [lt.objs.editor.pool :as pool]
            [lt.util.js :as util])
  (:use [lt.util.cljs :only [js->clj]])
  (:require-macros [lt.macros :refer [defui behavior]]))


(defn add-color-to-line [this color]
  (editor/insert-at-cursor this color))

(defn x-offset [cursor]
  ((js->clj cursor) "left"))

;; TODO - figure out how to get absolute position for cursor so we can render
;; the color picker in the right way
(defui color-wheel [this line]; cursor]
  [:div {:style (str "width: 90%; margin-left: auto; margin-right: auto;")}
   [:input {:type "color"
            :style "width: 100%; height: 45px"}]]
  :change (fn [event]
            (let [color (.-value (.-target event))]
              (object/raise this :close-picker)
              (add-color-to-line this color)
              (object/raise this :focus!))))

(object/behavior* ::color-picker-open
                  :type :user
                  :desc "Open the color picker"
                  :triggers #{:open-picker}
                  :reaction (fn [this]
                              (editor/operation (editor/->cm-ed this)
                                                (fn []
                                                  (let [prev (.getScrollInfo (editor/->cm-ed this))
                                                        {:keys [line]} (editor/->cursor this)]
                                                        ;coords (.cursorCoords (editor/->cm-ed this))]
                                                    (when-let [picker (:color-picker @this)]
                                                      (editor/remove-line-widget this picker))
                                                    (object/merge! this
                                                                   {:color-picker (editor/line-widget this
                                                                                                      line
                                                                                                      (color-wheel this line))}))))))

(object/behavior* ::color-picker-close
                  :type :user
                  :desc "Close the color picker"
                  :triggers #{:close-picker :move}
                  :reaction (fn [this]
                              (editor/operation (editor/->cm-ed this)
                                                (fn []
                                                  (when-let [picker (:color-picker @this)]
                                                    (editor/remove-line-widget this picker))))))

(cmd/command {:command ::color-picker-open
              :desc "Open the color picker"
              :exec (fn []
                      (when-let [ed (pool/last-active)]
                        (object/raise ed :open-picker)))})

(cmd/command {:command ::color-picker-close
              :desc "Close the currently open color picker"
              :exec (partial close-picker) })
