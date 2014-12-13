if(!lt.util.load.provided_QMARK_('lt.plugins.color-picker')) {
goog.provide('lt.plugins.color_picker');
goog.require('cljs.core');
goog.require('lt.util.js');
goog.require('lt.objs.tabs');
goog.require('lt.util.cljs');
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
lt.plugins.color_picker.color_wheel = (function color_wheel(this$,line){var e__7762__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",1123684643),[cljs.core.str("width: 90%; margin-left: auto; margin-right: auto;")].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1017479852),"color",new cljs.core.Keyword(null,"style","style",1123684643),"width: 100%; height: 45px"], null)], null)], null));var seq__7852_7869 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change","change",3947235106),((function (e__7762__auto__){
return (function (event){var color = event.target.value;lt.object.raise.call(null,this$,new cljs.core.Keyword(null,"close-picker","close-picker",2593612149));
lt.plugins.color_picker.add_color_to_line.call(null,this$,color);
return lt.object.raise.call(null,this$,new cljs.core.Keyword(null,"focus!","focus!",4039653819));
});})(e__7762__auto__))
], null)));var chunk__7853_7870 = null;var count__7854_7871 = 0;var i__7855_7872 = 0;while(true){
if((i__7855_7872 < count__7854_7871))
{var vec__7856_7873 = cljs.core._nth.call(null,chunk__7853_7870,i__7855_7872);var ev__7763__auto___7874 = cljs.core.nth.call(null,vec__7856_7873,0,null);var func__7764__auto___7875 = cljs.core.nth.call(null,vec__7856_7873,1,null);lt.util.dom.on.call(null,e__7762__auto__,ev__7763__auto___7874,func__7764__auto___7875);
{
var G__7876 = seq__7852_7869;
var G__7877 = chunk__7853_7870;
var G__7878 = count__7854_7871;
var G__7879 = (i__7855_7872 + 1);
seq__7852_7869 = G__7876;
chunk__7853_7870 = G__7877;
count__7854_7871 = G__7878;
i__7855_7872 = G__7879;
continue;
}
} else
{var temp__4092__auto___7880 = cljs.core.seq.call(null,seq__7852_7869);if(temp__4092__auto___7880)
{var seq__7852_7881__$1 = temp__4092__auto___7880;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7852_7881__$1))
{var c__7119__auto___7882 = cljs.core.chunk_first.call(null,seq__7852_7881__$1);{
var G__7883 = cljs.core.chunk_rest.call(null,seq__7852_7881__$1);
var G__7884 = c__7119__auto___7882;
var G__7885 = cljs.core.count.call(null,c__7119__auto___7882);
var G__7886 = 0;
seq__7852_7869 = G__7883;
chunk__7853_7870 = G__7884;
count__7854_7871 = G__7885;
i__7855_7872 = G__7886;
continue;
}
} else
{var vec__7857_7887 = cljs.core.first.call(null,seq__7852_7881__$1);var ev__7763__auto___7888 = cljs.core.nth.call(null,vec__7857_7887,0,null);var func__7764__auto___7889 = cljs.core.nth.call(null,vec__7857_7887,1,null);lt.util.dom.on.call(null,e__7762__auto__,ev__7763__auto___7888,func__7764__auto___7889);
{
var G__7890 = cljs.core.next.call(null,seq__7852_7881__$1);
var G__7891 = null;
var G__7892 = 0;
var G__7893 = 0;
seq__7852_7869 = G__7890;
chunk__7853_7870 = G__7891;
count__7854_7871 = G__7892;
i__7855_7872 = G__7893;
continue;
}
}
} else
{}
}
break;
}
return e__7762__auto__;
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.color-picker","color-picker-open","lt.plugins.color-picker/color-picker-open",2372444216),new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"user","user",1017503549),new cljs.core.Keyword(null,"desc","desc",1016984067),"Open the color picker",new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"open-picker","open-picker",3741874403),null], null), null),new cljs.core.Keyword(null,"reaction","reaction",4441361819),(function (this$){return lt.objs.editor.operation.call(null,lt.objs.editor.__GT_cm_ed.call(null,this$),(function (){var prev = lt.objs.editor.__GT_cm_ed.call(null,this$).getScrollInfo();var map__7858 = lt.objs.editor.__GT_cursor.call(null,this$);var map__7858__$1 = ((cljs.core.seq_QMARK_.call(null,map__7858))?cljs.core.apply.call(null,cljs.core.hash_map,map__7858):map__7858);var line = cljs.core.get.call(null,map__7858__$1,new cljs.core.Keyword(null,"line","line",1017226086));var temp__4092__auto___7894 = new cljs.core.Keyword(null,"color-picker","color-picker",1908847018).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$));if(cljs.core.truth_(temp__4092__auto___7894))
{var picker_7895 = temp__4092__auto___7894;lt.objs.editor.remove_line_widget.call(null,this$,picker_7895);
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
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword("lt.plugins.color-picker","color-picker-close","lt.plugins.color-picker/color-picker-close",3298306260),new cljs.core.Keyword(null,"desc","desc",1016984067),"Close the currently open color picker",new cljs.core.Keyword(null,"exec","exec",1017031683),(function (){var temp__4092__auto__ = lt.objs.editor.pool.last_active.call(null);if(cljs.core.truth_(temp__4092__auto__))
{var ed = temp__4092__auto__;return lt.object.raise.call(null,ed,new cljs.core.Keyword(null,"close-picker","close-picker",2593612149));
} else
{return null;
}
})], null));
}

//# sourceMappingURL=color picker_compiled.js.map