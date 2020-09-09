goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__4742__auto__ = [];
var len__4736__auto___37409 = arguments.length;
var i__4737__auto___37410 = (0);
while(true){
if((i__4737__auto___37410 < len__4736__auto___37409)){
args__4742__auto__.push((arguments[i__4737__auto___37410]));

var G__37411 = (i__4737__auto___37410 + (1));
i__4737__auto___37410 = G__37411;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%cshadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('')], null),args)));
}
}));

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq37238){
var G__37239 = cljs.core.first(seq37238);
var seq37238__$1 = cljs.core.next(seq37238);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__37239,seq37238__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__37254 = cljs.core.seq(sources);
var chunk__37255 = null;
var count__37256 = (0);
var i__37257 = (0);
while(true){
if((i__37257 < count__37256)){
var map__37276 = chunk__37255.cljs$core$IIndexed$_nth$arity$2(null,i__37257);
var map__37276__$1 = (((((!((map__37276 == null))))?(((((map__37276.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37276.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37276):map__37276);
var src = map__37276__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37276__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37276__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37276__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37276__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e37281){var e_37412 = e37281;
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_37412);

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_37412.message)].join('')));
}

var G__37413 = seq__37254;
var G__37414 = chunk__37255;
var G__37415 = count__37256;
var G__37416 = (i__37257 + (1));
seq__37254 = G__37413;
chunk__37255 = G__37414;
count__37256 = G__37415;
i__37257 = G__37416;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__37254);
if(temp__5735__auto__){
var seq__37254__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37254__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__37254__$1);
var G__37417 = cljs.core.chunk_rest(seq__37254__$1);
var G__37418 = c__4556__auto__;
var G__37419 = cljs.core.count(c__4556__auto__);
var G__37420 = (0);
seq__37254 = G__37417;
chunk__37255 = G__37418;
count__37256 = G__37419;
i__37257 = G__37420;
continue;
} else {
var map__37282 = cljs.core.first(seq__37254__$1);
var map__37282__$1 = (((((!((map__37282 == null))))?(((((map__37282.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37282.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37282):map__37282);
var src = map__37282__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37282__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37282__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37282__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37282__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e37284){var e_37421 = e37284;
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_37421);

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_37421.message)].join('')));
}

var G__37422 = cljs.core.next(seq__37254__$1);
var G__37423 = null;
var G__37424 = (0);
var G__37425 = (0);
seq__37254 = G__37422;
chunk__37255 = G__37423;
count__37256 = G__37424;
i__37257 = G__37425;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return null;
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (){
return shadow.cljs.devtools.client.browser.do_js_load(sources);
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__37285 = cljs.core.seq(js_requires);
var chunk__37286 = null;
var count__37287 = (0);
var i__37288 = (0);
while(true){
if((i__37288 < count__37287)){
var js_ns = chunk__37286.cljs$core$IIndexed$_nth$arity$2(null,i__37288);
var require_str_37426 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_37426);


var G__37427 = seq__37285;
var G__37428 = chunk__37286;
var G__37429 = count__37287;
var G__37430 = (i__37288 + (1));
seq__37285 = G__37427;
chunk__37286 = G__37428;
count__37287 = G__37429;
i__37288 = G__37430;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__37285);
if(temp__5735__auto__){
var seq__37285__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37285__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__37285__$1);
var G__37431 = cljs.core.chunk_rest(seq__37285__$1);
var G__37432 = c__4556__auto__;
var G__37433 = cljs.core.count(c__4556__auto__);
var G__37434 = (0);
seq__37285 = G__37431;
chunk__37286 = G__37432;
count__37287 = G__37433;
i__37288 = G__37434;
continue;
} else {
var js_ns = cljs.core.first(seq__37285__$1);
var require_str_37435 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_37435);


var G__37436 = cljs.core.next(seq__37285__$1);
var G__37437 = null;
var G__37438 = (0);
var G__37439 = (0);
seq__37285 = G__37436;
chunk__37286 = G__37437;
count__37287 = G__37438;
i__37288 = G__37439;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__37293){
var map__37294 = p__37293;
var map__37294__$1 = (((((!((map__37294 == null))))?(((((map__37294.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37294.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37294):map__37294);
var msg = map__37294__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37294__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37294__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__4529__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__37296(s__37297){
return (new cljs.core.LazySeq(null,(function (){
var s__37297__$1 = s__37297;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__37297__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var map__37303 = cljs.core.first(xs__6292__auto__);
var map__37303__$1 = (((((!((map__37303 == null))))?(((((map__37303.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37303.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37303):map__37303);
var src = map__37303__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37303__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37303__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__4525__auto__ = ((function (s__37297__$1,map__37303,map__37303__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__37294,map__37294__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__37296_$_iter__37298(s__37299){
return (new cljs.core.LazySeq(null,((function (s__37297__$1,map__37303,map__37303__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__37294,map__37294__$1,msg,info,reload_info){
return (function (){
var s__37299__$1 = s__37299;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__37299__$1);
if(temp__5735__auto____$1){
var s__37299__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__37299__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__37299__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__37301 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__37300 = (0);
while(true){
if((i__37300 < size__4528__auto__)){
var warning = cljs.core._nth(c__4527__auto__,i__37300);
cljs.core.chunk_append(b__37301,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__37440 = (i__37300 + (1));
i__37300 = G__37440;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__37301),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__37296_$_iter__37298(cljs.core.chunk_rest(s__37299__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__37301),null);
}
} else {
var warning = cljs.core.first(s__37299__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__37296_$_iter__37298(cljs.core.rest(s__37299__$2)));
}
} else {
return null;
}
break;
}
});})(s__37297__$1,map__37303,map__37303__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__37294,map__37294__$1,msg,info,reload_info))
,null,null));
});})(s__37297__$1,map__37303,map__37303__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__37294,map__37294__$1,msg,info,reload_info))
;
var fs__4526__auto__ = cljs.core.seq(iterys__4525__auto__(warnings));
if(fs__4526__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4526__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__37296(cljs.core.rest(s__37297__$1)));
} else {
var G__37441 = cljs.core.rest(s__37297__$1);
s__37297__$1 = G__37441;
continue;
}
} else {
var G__37442 = cljs.core.rest(s__37297__$1);
s__37297__$1 = G__37442;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(info));
})()));
var seq__37306_37443 = cljs.core.seq(warnings);
var chunk__37307_37444 = null;
var count__37308_37445 = (0);
var i__37309_37446 = (0);
while(true){
if((i__37309_37446 < count__37308_37445)){
var map__37314_37447 = chunk__37307_37444.cljs$core$IIndexed$_nth$arity$2(null,i__37309_37446);
var map__37314_37448__$1 = (((((!((map__37314_37447 == null))))?(((((map__37314_37447.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37314_37447.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37314_37447):map__37314_37447);
var w_37449 = map__37314_37448__$1;
var msg_37450__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37314_37448__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_37451 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37314_37448__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_37452 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37314_37448__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_37453 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37314_37448__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_37453)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_37451),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_37452),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_37450__$1)].join(''));


var G__37454 = seq__37306_37443;
var G__37455 = chunk__37307_37444;
var G__37456 = count__37308_37445;
var G__37457 = (i__37309_37446 + (1));
seq__37306_37443 = G__37454;
chunk__37307_37444 = G__37455;
count__37308_37445 = G__37456;
i__37309_37446 = G__37457;
continue;
} else {
var temp__5735__auto___37458 = cljs.core.seq(seq__37306_37443);
if(temp__5735__auto___37458){
var seq__37306_37459__$1 = temp__5735__auto___37458;
if(cljs.core.chunked_seq_QMARK_(seq__37306_37459__$1)){
var c__4556__auto___37460 = cljs.core.chunk_first(seq__37306_37459__$1);
var G__37461 = cljs.core.chunk_rest(seq__37306_37459__$1);
var G__37462 = c__4556__auto___37460;
var G__37463 = cljs.core.count(c__4556__auto___37460);
var G__37464 = (0);
seq__37306_37443 = G__37461;
chunk__37307_37444 = G__37462;
count__37308_37445 = G__37463;
i__37309_37446 = G__37464;
continue;
} else {
var map__37316_37465 = cljs.core.first(seq__37306_37459__$1);
var map__37316_37466__$1 = (((((!((map__37316_37465 == null))))?(((((map__37316_37465.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37316_37465.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37316_37465):map__37316_37465);
var w_37467 = map__37316_37466__$1;
var msg_37468__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37316_37466__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_37469 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37316_37466__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_37470 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37316_37466__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_37471 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37316_37466__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_37471)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_37469),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_37470),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_37468__$1)].join(''));


var G__37472 = cljs.core.next(seq__37306_37459__$1);
var G__37473 = null;
var G__37474 = (0);
var G__37475 = (0);
seq__37306_37443 = G__37472;
chunk__37307_37444 = G__37473;
count__37308_37445 = G__37474;
i__37309_37446 = G__37475;
continue;
}
} else {
}
}
break;
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = shadow.cljs.devtools.client.env.filter_reload_sources(info,reload_info);
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__37292_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__37292_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
}));
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[rel_new,"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())))){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$)){
return new$;
} else {
return false;
}
} else {
return false;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__37320){
var map__37321 = p__37320;
var map__37321__$1 = (((((!((map__37321 == null))))?(((((map__37321.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37321.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37321):map__37321);
var msg = map__37321__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37321__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var seq__37323 = cljs.core.seq(updates);
var chunk__37325 = null;
var count__37326 = (0);
var i__37327 = (0);
while(true){
if((i__37327 < count__37326)){
var path = chunk__37325.cljs$core$IIndexed$_nth$arity$2(null,i__37327);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__37353_37476 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__37356_37477 = null;
var count__37357_37478 = (0);
var i__37358_37479 = (0);
while(true){
if((i__37358_37479 < count__37357_37478)){
var node_37480 = chunk__37356_37477.cljs$core$IIndexed$_nth$arity$2(null,i__37358_37479);
var path_match_37481 = shadow.cljs.devtools.client.browser.match_paths(node_37480.getAttribute("href"),path);
if(cljs.core.truth_(path_match_37481)){
var new_link_37482 = (function (){var G__37363 = node_37480.cloneNode(true);
G__37363.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_37481),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__37363;
})();
(new_link_37482.onload = ((function (seq__37353_37476,chunk__37356_37477,count__37357_37478,i__37358_37479,seq__37323,chunk__37325,count__37326,i__37327,new_link_37482,path_match_37481,node_37480,path,map__37321,map__37321__$1,msg,updates){
return (function (){
return goog.dom.removeNode(node_37480);
});})(seq__37353_37476,chunk__37356_37477,count__37357_37478,i__37358_37479,seq__37323,chunk__37325,count__37326,i__37327,new_link_37482,path_match_37481,node_37480,path,map__37321,map__37321__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_37481], 0));

goog.dom.insertSiblingAfter(new_link_37482,node_37480);


var G__37483 = seq__37353_37476;
var G__37484 = chunk__37356_37477;
var G__37485 = count__37357_37478;
var G__37486 = (i__37358_37479 + (1));
seq__37353_37476 = G__37483;
chunk__37356_37477 = G__37484;
count__37357_37478 = G__37485;
i__37358_37479 = G__37486;
continue;
} else {
var G__37487 = seq__37353_37476;
var G__37488 = chunk__37356_37477;
var G__37489 = count__37357_37478;
var G__37490 = (i__37358_37479 + (1));
seq__37353_37476 = G__37487;
chunk__37356_37477 = G__37488;
count__37357_37478 = G__37489;
i__37358_37479 = G__37490;
continue;
}
} else {
var temp__5735__auto___37491 = cljs.core.seq(seq__37353_37476);
if(temp__5735__auto___37491){
var seq__37353_37492__$1 = temp__5735__auto___37491;
if(cljs.core.chunked_seq_QMARK_(seq__37353_37492__$1)){
var c__4556__auto___37493 = cljs.core.chunk_first(seq__37353_37492__$1);
var G__37494 = cljs.core.chunk_rest(seq__37353_37492__$1);
var G__37495 = c__4556__auto___37493;
var G__37496 = cljs.core.count(c__4556__auto___37493);
var G__37497 = (0);
seq__37353_37476 = G__37494;
chunk__37356_37477 = G__37495;
count__37357_37478 = G__37496;
i__37358_37479 = G__37497;
continue;
} else {
var node_37498 = cljs.core.first(seq__37353_37492__$1);
var path_match_37499 = shadow.cljs.devtools.client.browser.match_paths(node_37498.getAttribute("href"),path);
if(cljs.core.truth_(path_match_37499)){
var new_link_37500 = (function (){var G__37364 = node_37498.cloneNode(true);
G__37364.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_37499),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__37364;
})();
(new_link_37500.onload = ((function (seq__37353_37476,chunk__37356_37477,count__37357_37478,i__37358_37479,seq__37323,chunk__37325,count__37326,i__37327,new_link_37500,path_match_37499,node_37498,seq__37353_37492__$1,temp__5735__auto___37491,path,map__37321,map__37321__$1,msg,updates){
return (function (){
return goog.dom.removeNode(node_37498);
});})(seq__37353_37476,chunk__37356_37477,count__37357_37478,i__37358_37479,seq__37323,chunk__37325,count__37326,i__37327,new_link_37500,path_match_37499,node_37498,seq__37353_37492__$1,temp__5735__auto___37491,path,map__37321,map__37321__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_37499], 0));

goog.dom.insertSiblingAfter(new_link_37500,node_37498);


var G__37501 = cljs.core.next(seq__37353_37492__$1);
var G__37502 = null;
var G__37503 = (0);
var G__37504 = (0);
seq__37353_37476 = G__37501;
chunk__37356_37477 = G__37502;
count__37357_37478 = G__37503;
i__37358_37479 = G__37504;
continue;
} else {
var G__37505 = cljs.core.next(seq__37353_37492__$1);
var G__37506 = null;
var G__37507 = (0);
var G__37508 = (0);
seq__37353_37476 = G__37505;
chunk__37356_37477 = G__37506;
count__37357_37478 = G__37507;
i__37358_37479 = G__37508;
continue;
}
}
} else {
}
}
break;
}


var G__37509 = seq__37323;
var G__37510 = chunk__37325;
var G__37511 = count__37326;
var G__37512 = (i__37327 + (1));
seq__37323 = G__37509;
chunk__37325 = G__37510;
count__37326 = G__37511;
i__37327 = G__37512;
continue;
} else {
var G__37513 = seq__37323;
var G__37514 = chunk__37325;
var G__37515 = count__37326;
var G__37516 = (i__37327 + (1));
seq__37323 = G__37513;
chunk__37325 = G__37514;
count__37326 = G__37515;
i__37327 = G__37516;
continue;
}
} else {
var temp__5735__auto__ = cljs.core.seq(seq__37323);
if(temp__5735__auto__){
var seq__37323__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37323__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__37323__$1);
var G__37517 = cljs.core.chunk_rest(seq__37323__$1);
var G__37518 = c__4556__auto__;
var G__37519 = cljs.core.count(c__4556__auto__);
var G__37520 = (0);
seq__37323 = G__37517;
chunk__37325 = G__37518;
count__37326 = G__37519;
i__37327 = G__37520;
continue;
} else {
var path = cljs.core.first(seq__37323__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__37365_37521 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__37368_37522 = null;
var count__37369_37523 = (0);
var i__37370_37524 = (0);
while(true){
if((i__37370_37524 < count__37369_37523)){
var node_37525 = chunk__37368_37522.cljs$core$IIndexed$_nth$arity$2(null,i__37370_37524);
var path_match_37526 = shadow.cljs.devtools.client.browser.match_paths(node_37525.getAttribute("href"),path);
if(cljs.core.truth_(path_match_37526)){
var new_link_37527 = (function (){var G__37375 = node_37525.cloneNode(true);
G__37375.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_37526),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__37375;
})();
(new_link_37527.onload = ((function (seq__37365_37521,chunk__37368_37522,count__37369_37523,i__37370_37524,seq__37323,chunk__37325,count__37326,i__37327,new_link_37527,path_match_37526,node_37525,path,seq__37323__$1,temp__5735__auto__,map__37321,map__37321__$1,msg,updates){
return (function (){
return goog.dom.removeNode(node_37525);
});})(seq__37365_37521,chunk__37368_37522,count__37369_37523,i__37370_37524,seq__37323,chunk__37325,count__37326,i__37327,new_link_37527,path_match_37526,node_37525,path,seq__37323__$1,temp__5735__auto__,map__37321,map__37321__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_37526], 0));

goog.dom.insertSiblingAfter(new_link_37527,node_37525);


var G__37528 = seq__37365_37521;
var G__37529 = chunk__37368_37522;
var G__37530 = count__37369_37523;
var G__37531 = (i__37370_37524 + (1));
seq__37365_37521 = G__37528;
chunk__37368_37522 = G__37529;
count__37369_37523 = G__37530;
i__37370_37524 = G__37531;
continue;
} else {
var G__37532 = seq__37365_37521;
var G__37533 = chunk__37368_37522;
var G__37534 = count__37369_37523;
var G__37535 = (i__37370_37524 + (1));
seq__37365_37521 = G__37532;
chunk__37368_37522 = G__37533;
count__37369_37523 = G__37534;
i__37370_37524 = G__37535;
continue;
}
} else {
var temp__5735__auto___37536__$1 = cljs.core.seq(seq__37365_37521);
if(temp__5735__auto___37536__$1){
var seq__37365_37537__$1 = temp__5735__auto___37536__$1;
if(cljs.core.chunked_seq_QMARK_(seq__37365_37537__$1)){
var c__4556__auto___37538 = cljs.core.chunk_first(seq__37365_37537__$1);
var G__37539 = cljs.core.chunk_rest(seq__37365_37537__$1);
var G__37540 = c__4556__auto___37538;
var G__37541 = cljs.core.count(c__4556__auto___37538);
var G__37542 = (0);
seq__37365_37521 = G__37539;
chunk__37368_37522 = G__37540;
count__37369_37523 = G__37541;
i__37370_37524 = G__37542;
continue;
} else {
var node_37543 = cljs.core.first(seq__37365_37537__$1);
var path_match_37544 = shadow.cljs.devtools.client.browser.match_paths(node_37543.getAttribute("href"),path);
if(cljs.core.truth_(path_match_37544)){
var new_link_37545 = (function (){var G__37376 = node_37543.cloneNode(true);
G__37376.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_37544),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__37376;
})();
(new_link_37545.onload = ((function (seq__37365_37521,chunk__37368_37522,count__37369_37523,i__37370_37524,seq__37323,chunk__37325,count__37326,i__37327,new_link_37545,path_match_37544,node_37543,seq__37365_37537__$1,temp__5735__auto___37536__$1,path,seq__37323__$1,temp__5735__auto__,map__37321,map__37321__$1,msg,updates){
return (function (){
return goog.dom.removeNode(node_37543);
});})(seq__37365_37521,chunk__37368_37522,count__37369_37523,i__37370_37524,seq__37323,chunk__37325,count__37326,i__37327,new_link_37545,path_match_37544,node_37543,seq__37365_37537__$1,temp__5735__auto___37536__$1,path,seq__37323__$1,temp__5735__auto__,map__37321,map__37321__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_37544], 0));

goog.dom.insertSiblingAfter(new_link_37545,node_37543);


var G__37546 = cljs.core.next(seq__37365_37537__$1);
var G__37547 = null;
var G__37548 = (0);
var G__37549 = (0);
seq__37365_37521 = G__37546;
chunk__37368_37522 = G__37547;
count__37369_37523 = G__37548;
i__37370_37524 = G__37549;
continue;
} else {
var G__37550 = cljs.core.next(seq__37365_37537__$1);
var G__37551 = null;
var G__37552 = (0);
var G__37553 = (0);
seq__37365_37521 = G__37550;
chunk__37368_37522 = G__37551;
count__37369_37523 = G__37552;
i__37370_37524 = G__37553;
continue;
}
}
} else {
}
}
break;
}


var G__37554 = cljs.core.next(seq__37323__$1);
var G__37555 = null;
var G__37556 = (0);
var G__37557 = (0);
seq__37323 = G__37554;
chunk__37325 = G__37555;
count__37326 = G__37556;
i__37327 = G__37557;
continue;
} else {
var G__37558 = cljs.core.next(seq__37323__$1);
var G__37559 = null;
var G__37560 = (0);
var G__37561 = (0);
seq__37323 = G__37558;
chunk__37325 = G__37559;
count__37326 = G__37560;
i__37327 = G__37561;
continue;
}
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("undefined",typeof(module))){
return eval(js);
} else {
return (0,eval)(js);;
}
});
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(runtime,p__37377){
var map__37378 = p__37377;
var map__37378__$1 = (((((!((map__37378 == null))))?(((((map__37378.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37378.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37378):map__37378);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37378__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
return shadow.cljs.devtools.client.shared.load_sources(runtime,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535).cljs$core$IFn$_invoke$arity$1(repl_state))),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return shadow.cljs.devtools.client.browser.devtools_msg("ready!");
}));
});
shadow.cljs.devtools.client.browser.client_info = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"host","host",-1558485167),(cljs.core.truth_(goog.global.document)?new cljs.core.Keyword(null,"browser","browser",828191719):new cljs.core.Keyword(null,"browser-worker","browser-worker",1638998282)),new cljs.core.Keyword(null,"user-agent","user-agent",1220426212),[(cljs.core.truth_(goog.userAgent.OPERA)?"Opera":(cljs.core.truth_(goog.userAgent.product.CHROME)?"Chrome":(cljs.core.truth_(goog.userAgent.IE)?"MSIE":(cljs.core.truth_(goog.userAgent.EDGE)?"Edge":(cljs.core.truth_(goog.userAgent.GECKO)?"Firefox":(cljs.core.truth_(goog.userAgent.SAFARI)?"Safari":(cljs.core.truth_(goog.userAgent.WEBKIT)?"Webkit":null)))))))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.VERSION)," [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.PLATFORM),"]"].join(''),new cljs.core.Keyword(null,"dom","dom",-1236537922),(!((goog.global.document == null)))], null);
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_was_welcome_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_was_welcome_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
if(((shadow.cljs.devtools.client.env.enabled) && ((shadow.cljs.devtools.client.env.worker_client_id > (0))))){
(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$_js_eval$arity$2 = (function (this$,code){
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(code);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$2 = (function (this$,p__37380){
var map__37381 = p__37380;
var map__37381__$1 = (((((!((map__37381 == null))))?(((((map__37381.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37381.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37381):map__37381);
var _ = map__37381__$1;
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37381__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(js);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__37383,done,error){
var map__37384 = p__37383;
var map__37384__$1 = (((((!((map__37384 == null))))?(((((map__37384.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37384.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37384):map__37384);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37384__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__37386,done,error){
var map__37387 = p__37386;
var map__37387__$1 = (((((!((map__37387 == null))))?(((((map__37387.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37387.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37387):map__37387);
var msg = map__37387__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37387__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37387__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37387__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__37389){
var map__37390 = p__37389;
var map__37390__$1 = (((((!((map__37390 == null))))?(((((map__37390.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37390.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37390):map__37390);
var src = map__37390__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37390__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__4115__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__4115__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__37392 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__37392) : done.call(null,G__37392));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__37393){
var map__37394 = p__37393;
var map__37394__$1 = (((((!((map__37394 == null))))?(((((map__37394.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37394.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37394):map__37394);
var msg__$1 = map__37394__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37394__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e37396){var ex = e37396;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__37397){
var map__37398 = p__37397;
var map__37398__$1 = (((((!((map__37398 == null))))?(((((map__37398.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37398.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37398):map__37398);
var env = map__37398__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37398__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var svc = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125),(function (){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,true);

shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.env.patch_goog_BANG_();

return shadow.cljs.devtools.client.browser.devtools_msg(["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"state-ref","state-ref",2127874952).cljs$core$IFn$_invoke$arity$1(runtime))))," ready!"].join(''));
}),new cljs.core.Keyword(null,"on-disconnect","on-disconnect",-809021814),(function (e){
if(cljs.core.truth_(cljs.core.deref(shadow.cljs.devtools.client.browser.ws_was_welcome_ref))){
shadow.cljs.devtools.client.hud.connection_error("The Websocket connection was closed!");

return cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-reconnect","on-reconnect",1239988702),(function (e){
return shadow.cljs.devtools.client.hud.connection_error("Reconnecting ...");
}),new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"access-denied","access-denied",959449406),(function (msg){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);

return shadow.cljs.devtools.client.hud.connection_error(["Stale Output! Your loaded JS was not produced by the running shadow-cljs instance."," Is the watch for this build running?"].join(''));
}),new cljs.core.Keyword(null,"cljs-runtime-init","cljs-runtime-init",1305890232),(function (msg){
return shadow.cljs.devtools.client.browser.repl_init(runtime,msg);
}),new cljs.core.Keyword(null,"cljs-asset-update","cljs-asset-update",1224093028),(function (p__37400){
var map__37401 = p__37400;
var map__37401__$1 = (((((!((map__37401 == null))))?(((((map__37401.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37401.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37401):map__37401);
var msg = map__37401__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37401__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
return shadow.cljs.devtools.client.browser.handle_asset_update(msg);
}),new cljs.core.Keyword(null,"cljs-build-configure","cljs-build-configure",-2089891268),(function (msg){
return null;
}),new cljs.core.Keyword(null,"cljs-build-start","cljs-build-start",-725781241),(function (msg){
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-start","build-start",-959649480)));
}),new cljs.core.Keyword(null,"cljs-build-complete","cljs-build-complete",273626153),(function (msg){
var msg__$1 = shadow.cljs.devtools.client.env.add_warnings_to_info(msg);
shadow.cljs.devtools.client.hud.hud_warnings(msg__$1);

shadow.cljs.devtools.client.browser.handle_build_complete(runtime,msg__$1);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-complete","build-complete",-501868472)));
}),new cljs.core.Keyword(null,"cljs-build-failure","cljs-build-failure",1718154990),(function (msg){
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-failure","build-failure",-2107487466)));
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__37403){
var map__37404 = p__37403;
var map__37404__$1 = (((((!((map__37404 == null))))?(((((map__37404.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37404.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37404):map__37404);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37404__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37404__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-disconnect","client-disconnect",640227957),event_op)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(client_id,shadow.cljs.devtools.client.env.worker_client_id)))){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was stopped!");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-connect","client-connect",-1113973888),event_op)){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was restarted. Reload required!");
} else {
return null;
}
}
})], null)], null));

return svc;
}),(function (p__37406){
var map__37407 = p__37406;
var map__37407__$1 = (((((!((map__37407 == null))))?(((((map__37407.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37407.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37407):map__37407);
var svc = map__37407__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37407__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
