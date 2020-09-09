goog.provide('shadow.remote.runtime.tap_support');
shadow.remote.runtime.tap_support.tap_subscribe = (function shadow$remote$runtime$tap_support$tap_subscribe(p__33921,p__33922){
var map__33923 = p__33921;
var map__33923__$1 = (((((!((map__33923 == null))))?(((((map__33923.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33923.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33923):map__33923);
var svc = map__33923__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33923__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33923__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33923__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__33924 = p__33922;
var map__33924__$1 = (((((!((map__33924 == null))))?(((((map__33924.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33924.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33924):map__33924);
var msg = map__33924__$1;
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33924__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var summary = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33924__$1,new cljs.core.Keyword(null,"summary","summary",380847952));
var history = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33924__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__33924__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(subs_ref,cljs.core.assoc,from,msg);

if(cljs.core.truth_(history)){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-subscribed","tap-subscribed",-1882247432),new cljs.core.Keyword(null,"history","history",-247395220),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (oid){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"oid","oid",-768692334),oid,new cljs.core.Keyword(null,"summary","summary",380847952),shadow.remote.runtime.obj_support.obj_describe_STAR_(obj_support,oid)], null);
}),shadow.remote.runtime.obj_support.get_tap_history(obj_support,num)))], null));
} else {
return null;
}
});
shadow.remote.runtime.tap_support.tap_unsubscribe = (function shadow$remote$runtime$tap_support$tap_unsubscribe(p__33934,p__33935){
var map__33937 = p__33934;
var map__33937__$1 = (((((!((map__33937 == null))))?(((((map__33937.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33937.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33937):map__33937);
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33937__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var map__33938 = p__33935;
var map__33938__$1 = (((((!((map__33938 == null))))?(((((map__33938.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33938.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33938):map__33938);
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33938__$1,new cljs.core.Keyword(null,"from","from",1815293044));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,from);
});
shadow.remote.runtime.tap_support.request_tap_history = (function shadow$remote$runtime$tap_support$request_tap_history(p__33951,p__33952){
var map__33954 = p__33951;
var map__33954__$1 = (((((!((map__33954 == null))))?(((((map__33954.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33954.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33954):map__33954);
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33954__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33954__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__33955 = p__33952;
var map__33955__$1 = (((((!((map__33955 == null))))?(((((map__33955.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33955.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33955):map__33955);
var msg = map__33955__$1;
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__33955__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
var tap_ids = shadow.remote.runtime.obj_support.get_tap_history(obj_support,num);
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-history","tap-history",-282803347),new cljs.core.Keyword(null,"oids","oids",-1580877688),tap_ids], null));
});
shadow.remote.runtime.tap_support.tool_disconnect = (function shadow$remote$runtime$tap_support$tool_disconnect(p__33964,tid){
var map__33967 = p__33964;
var map__33967__$1 = (((((!((map__33967 == null))))?(((((map__33967.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33967.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33967):map__33967);
var svc = map__33967__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33967__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,tid);
});
shadow.remote.runtime.tap_support.start = (function shadow$remote$runtime$tap_support$start(runtime,obj_support){
var subs_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var tap_fn = (function shadow$remote$runtime$tap_support$start_$_runtime_tap(obj){
if((!((obj == null)))){
var oid = shadow.remote.runtime.obj_support.register(obj_support,obj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"tap","tap",-1086702463)], null));
var seq__33977 = cljs.core.seq(cljs.core.deref(subs_ref));
var chunk__33978 = null;
var count__33979 = (0);
var i__33980 = (0);
while(true){
if((i__33980 < count__33979)){
var vec__33992 = chunk__33978.cljs$core$IIndexed$_nth$arity$2(null,i__33980);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33992,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33992,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__34017 = seq__33977;
var G__34018 = chunk__33978;
var G__34019 = count__33979;
var G__34020 = (i__33980 + (1));
seq__33977 = G__34017;
chunk__33978 = G__34018;
count__33979 = G__34019;
i__33980 = G__34020;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__33977);
if(temp__5735__auto__){
var seq__33977__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__33977__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__33977__$1);
var G__34021 = cljs.core.chunk_rest(seq__33977__$1);
var G__34022 = c__4556__auto__;
var G__34023 = cljs.core.count(c__4556__auto__);
var G__34024 = (0);
seq__33977 = G__34021;
chunk__33978 = G__34022;
count__33979 = G__34023;
i__33980 = G__34024;
continue;
} else {
var vec__33996 = cljs.core.first(seq__33977__$1);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33996,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33996,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__34025 = cljs.core.next(seq__33977__$1);
var G__34026 = null;
var G__34027 = (0);
var G__34028 = (0);
seq__33977 = G__34025;
chunk__33978 = G__34026;
count__33979 = G__34027;
i__33980 = G__34028;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
});
var svc = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229),obj_support,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461),tap_fn,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911),subs_ref], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tap-subscribe","tap-subscribe",411179050),(function (p1__33971_SHARP_){
return shadow.remote.runtime.tap_support.tap_subscribe(svc,p1__33971_SHARP_);
}),new cljs.core.Keyword(null,"tap-unsubscribe","tap-unsubscribe",1183890755),(function (p1__33972_SHARP_){
return shadow.remote.runtime.tap_support.tap_unsubscribe(svc,p1__33972_SHARP_);
}),new cljs.core.Keyword(null,"request-tap-history","request-tap-history",-670837812),(function (p1__33973_SHARP_){
return shadow.remote.runtime.tap_support.request_tap_history(svc,p1__33973_SHARP_);
})], null),new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366),(function (p1__33974_SHARP_){
return shadow.remote.runtime.tap_support.tool_disconnect(svc,p1__33974_SHARP_);
})], null));

cljs.core.add_tap(tap_fn);

return svc;
});
shadow.remote.runtime.tap_support.stop = (function shadow$remote$runtime$tap_support$stop(p__34002){
var map__34003 = p__34002;
var map__34003__$1 = (((((!((map__34003 == null))))?(((((map__34003.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34003.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34003):map__34003);
var svc = map__34003__$1;
var tap_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34003__$1,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34003__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
cljs.core.remove_tap(tap_fn);

return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674));
});

//# sourceMappingURL=shadow.remote.runtime.tap_support.js.map
