if(!lt.util.load.provided_QMARK_('lt.plugins.color-picker')) {
goog.provide('lt.plugins.color_picker');
goog.require('cljs.core');
goog.require('lt.util.cljs');
goog.require('lt.util.js');
goog.require('lt.objs.tabs');
goog.require('lt.objs.notifos');
goog.require('lt.objs.notifos');
goog.require('lt.objs.editor.pool');
goog.require('lt.util.cljs');
goog.require('lt.objs.command');
goog.require('lt.objs.editor');
goog.require('lt.object');
goog.require('lt.object');
goog.require('lt.objs.tabs');
goog.require('lt.objs.editor');
goog.require('lt.util.js');
goog.require('lt.objs.editor.pool');
goog.require('lt.objs.command');
lt.plugins.color_picker.add_color_to_line = (function add_color_to_line(this$,color){return lt.objs.editor.insert_at_cursor.call(null,this$,color);
});
lt.plugins.color_picker.x_offset = (function x_offset(cursor){return lt.util.cljs.js__GT_clj.call(null,cursor).call(null,"left");
});
lt.plugins.color_picker.color_wheel = (function color_wheel(this$,line){var e__8100__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",1123684643),[cljs.core.str("width: 90%; margin-left: auto; margin-right: auto;")].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1017479852),"color",new cljs.core.Keyword(null,"style","style",1123684643),"width: 100%; height: 45px"], null)], null)], null));var seq__8190_8207 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change","change",3947235106),(function (event){var color = event.target.value;lt.object.raise.call(null,this$,new cljs.core.Keyword(null,"close-picker","close-picker",2593612149));
lt.plugins.color_picker.add_color_to_line.call(null,this$,color);
return lt.object.raise.call(null,this$,new cljs.core.Keyword(null,"focus!","focus!",4039653819));
})], null)));var chunk__8191_8208 = null;var count__8192_8209 = 0;var i__8193_8210 = 0;while(true){
if((i__8193_8210 < count__8192_8209))
{var vec__8194_8211 = cljs.core._nth.call(null,chunk__8191_8208,i__8193_8210);var ev__8101__auto___8212 = cljs.core.nth.call(null,vec__8194_8211,0,null);var func__8102__auto___8213 = cljs.core.nth.call(null,vec__8194_8211,1,null);lt.util.dom.on.call(null,e__8100__auto__,ev__8101__auto___8212,func__8102__auto___8213);
{
var G__8214 = seq__8190_8207;
var G__8215 = chunk__8191_8208;
var G__8216 = count__8192_8209;
var G__8217 = (i__8193_8210 + 1);
seq__8190_8207 = G__8214;
chunk__8191_8208 = G__8215;
count__8192_8209 = G__8216;
i__8193_8210 = G__8217;
continue;
}
} else
{var temp__4092__auto___8218 = cljs.core.seq.call(null,seq__8190_8207);if(temp__4092__auto___8218)
{var seq__8190_8219__$1 = temp__4092__auto___8218;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8190_8219__$1))
{var c__7486__auto___8220 = cljs.core.chunk_first.call(null,seq__8190_8219__$1);{
var G__8221 = cljs.core.chunk_rest.call(null,seq__8190_8219__$1);
var G__8222 = c__7486__auto___8220;
var G__8223 = cljs.core.count.call(null,c__7486__auto___8220);
var G__8224 = 0;
seq__8190_8207 = G__8221;
chunk__8191_8208 = G__8222;
count__8192_8209 = G__8223;
i__8193_8210 = G__8224;
continue;
}
} else
{var vec__8195_8225 = cljs.core.first.call(null,seq__8190_8219__$1);var ev__8101__auto___8226 = cljs.core.nth.call(null,vec__8195_8225,0,null);var func__8102__auto___8227 = cljs.core.nth.call(null,vec__8195_8225,1,null);lt.util.dom.on.call(null,e__8100__auto__,ev__8101__auto___8226,func__8102__auto___8227);
{
var G__8228 = cljs.core.next.call(null,seq__8190_8219__$1);
var G__8229 = null;
var G__8230 = 0;
var G__8231 = 0;
seq__8190_8207 = G__8228;
chunk__8191_8208 = G__8229;
count__8192_8209 = G__8230;
i__8193_8210 = G__8231;
continue;
}
}
} else
{}
}
break;
}
return e__8100__auto__;
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.color-picker","color-picker-open","lt.plugins.color-picker/color-picker-open",2372444216),new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"user","user",1017503549),new cljs.core.Keyword(null,"desc","desc",1016984067),"Open the color picker",new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"open-picker","open-picker",3741874403),null], null), null),new cljs.core.Keyword(null,"reaction","reaction",4441361819),(function (this$){return lt.objs.editor.operation.call(null,lt.objs.editor.__GT_cm_ed.call(null,this$),(function (){var prev = lt.objs.editor.__GT_cm_ed.call(null,this$).getScrollInfo();var map__8196 = lt.objs.editor.__GT_cursor.call(null,this$);var map__8196__$1 = ((cljs.core.seq_QMARK_.call(null,map__8196))?cljs.core.apply.call(null,cljs.core.hash_map,map__8196):map__8196);var line = cljs.core.get.call(null,map__8196__$1,new cljs.core.Keyword(null,"line","line",1017226086));var temp__4092__auto___8232 = new cljs.core.Keyword(null,"color-picker","color-picker",1908847018).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$));if(cljs.core.truth_(temp__4092__auto___8232))
{var picker_8233 = temp__4092__auto___8232;lt.objs.editor.remove_line_widget.call(null,this$,picker_8233);
} else
{}
return lt.object.merge_BANG_.call(null,this$,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color-picker","color-picker",1908847018),lt.objs.editor.line_widget.call(null,this$,line,lt.plugins.color_picker.color_wheel.call(null,this$,line))], null));
}));
}));
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.color-picker","color-picker-close","lt.plugins.color-picker/color-picker-close",3298306260),new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"user","user",1017503549),new cljs.core.Keyword(null,"desc","desc",1016984067),"Close the color picker",new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"close-picker","close-picker",2593612149),null,new cljs.core.Keyword(null,"move","move",1017261891),null], null), null),new cljs.core.Keyword(null,"reaction","reaction",4441361819),(function (this$){return lt.objs.editor.operation.call(null,lt.objs.editor.__GT_cm_ed.call(null,this$),(function (){var temp__4092__auto__ = new cljs.core.Keyword(null,"color-picker","color-picker",1908847018).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$));if(cljs.core.truth_(temp__4092__auto__))
{var picker = temp__4092__auto__;return lt.objs.editor.remove_line_widget.call(null,this$,picker);
} else
{return null;
}
}));
}));
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword("lt.plugins.color-picker","color-picker-open","lt.plugins.color-picker/color-picker-open",2372444216),new cljs.core.Keyword(null,"desc","desc",1016984067),"Open the color picker",new cljs.core.Keyword(null,"exec","exec",1017031683),(function (){var temp__4092__auto__ = lt.objs.editor.pool.last_active.call(null);if(cljs.core.truth_(temp__4092__auto__))
{var ed = temp__4092__auto__;return lt.object.raise.call(null,ed,new cljs.core.Keyword(null,"open-picker","open-picker",3741874403));
} else
{return null;
}
})], null));
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword("lt.plugins.color-picker","color-picker-close","lt.plugins.color-picker/color-picker-close",3298306260),new cljs.core.Keyword(null,"desc","desc",1016984067),"Close the currently open color picker",new cljs.core.Keyword(null,"exec","exec",1017031683),cljs.core.partial.call(null,lt.plugins.color_picker.close_picker)], null));
}

//# sourceMappingURL=color picker_compiled.js.map