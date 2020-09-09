goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__38346){
var map__38347 = p__38346;
var map__38347__$1 = (((((!((map__38347 == null))))?(((((map__38347.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38347.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38347):map__38347);
var m = map__38347__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38347__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38347__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__4126__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return [(function (){var temp__5735__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5735__auto__)){
var ns = temp__5735__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__38351_38562 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__38352_38563 = null;
var count__38353_38564 = (0);
var i__38354_38565 = (0);
while(true){
if((i__38354_38565 < count__38353_38564)){
var f_38566 = chunk__38352_38563.cljs$core$IIndexed$_nth$arity$2(null,i__38354_38565);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_38566], 0));


var G__38567 = seq__38351_38562;
var G__38568 = chunk__38352_38563;
var G__38569 = count__38353_38564;
var G__38570 = (i__38354_38565 + (1));
seq__38351_38562 = G__38567;
chunk__38352_38563 = G__38568;
count__38353_38564 = G__38569;
i__38354_38565 = G__38570;
continue;
} else {
var temp__5735__auto___38571 = cljs.core.seq(seq__38351_38562);
if(temp__5735__auto___38571){
var seq__38351_38572__$1 = temp__5735__auto___38571;
if(cljs.core.chunked_seq_QMARK_(seq__38351_38572__$1)){
var c__4556__auto___38573 = cljs.core.chunk_first(seq__38351_38572__$1);
var G__38574 = cljs.core.chunk_rest(seq__38351_38572__$1);
var G__38575 = c__4556__auto___38573;
var G__38576 = cljs.core.count(c__4556__auto___38573);
var G__38577 = (0);
seq__38351_38562 = G__38574;
chunk__38352_38563 = G__38575;
count__38353_38564 = G__38576;
i__38354_38565 = G__38577;
continue;
} else {
var f_38578 = cljs.core.first(seq__38351_38572__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_38578], 0));


var G__38579 = cljs.core.next(seq__38351_38572__$1);
var G__38580 = null;
var G__38581 = (0);
var G__38582 = (0);
seq__38351_38562 = G__38579;
chunk__38352_38563 = G__38580;
count__38353_38564 = G__38581;
i__38354_38565 = G__38582;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_38583 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4126__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_38583], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_38583)))?cljs.core.second(arglists_38583):arglists_38583)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__38358_38585 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__38359_38586 = null;
var count__38360_38587 = (0);
var i__38361_38588 = (0);
while(true){
if((i__38361_38588 < count__38360_38587)){
var vec__38374_38589 = chunk__38359_38586.cljs$core$IIndexed$_nth$arity$2(null,i__38361_38588);
var name_38590 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38374_38589,(0),null);
var map__38377_38591 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38374_38589,(1),null);
var map__38377_38592__$1 = (((((!((map__38377_38591 == null))))?(((((map__38377_38591.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38377_38591.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38377_38591):map__38377_38591);
var doc_38593 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38377_38592__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_38594 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38377_38592__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_38590], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_38594], 0));

if(cljs.core.truth_(doc_38593)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_38593], 0));
} else {
}


var G__38595 = seq__38358_38585;
var G__38596 = chunk__38359_38586;
var G__38597 = count__38360_38587;
var G__38598 = (i__38361_38588 + (1));
seq__38358_38585 = G__38595;
chunk__38359_38586 = G__38596;
count__38360_38587 = G__38597;
i__38361_38588 = G__38598;
continue;
} else {
var temp__5735__auto___38599 = cljs.core.seq(seq__38358_38585);
if(temp__5735__auto___38599){
var seq__38358_38600__$1 = temp__5735__auto___38599;
if(cljs.core.chunked_seq_QMARK_(seq__38358_38600__$1)){
var c__4556__auto___38601 = cljs.core.chunk_first(seq__38358_38600__$1);
var G__38602 = cljs.core.chunk_rest(seq__38358_38600__$1);
var G__38603 = c__4556__auto___38601;
var G__38604 = cljs.core.count(c__4556__auto___38601);
var G__38605 = (0);
seq__38358_38585 = G__38602;
chunk__38359_38586 = G__38603;
count__38360_38587 = G__38604;
i__38361_38588 = G__38605;
continue;
} else {
var vec__38379_38606 = cljs.core.first(seq__38358_38600__$1);
var name_38607 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38379_38606,(0),null);
var map__38382_38608 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38379_38606,(1),null);
var map__38382_38609__$1 = (((((!((map__38382_38608 == null))))?(((((map__38382_38608.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38382_38608.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38382_38608):map__38382_38608);
var doc_38610 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38382_38609__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_38611 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38382_38609__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_38607], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_38611], 0));

if(cljs.core.truth_(doc_38610)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_38610], 0));
} else {
}


var G__38612 = cljs.core.next(seq__38358_38600__$1);
var G__38613 = null;
var G__38614 = (0);
var G__38615 = (0);
seq__38358_38585 = G__38612;
chunk__38359_38586 = G__38613;
count__38360_38587 = G__38614;
i__38361_38588 = G__38615;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5735__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5735__auto__)){
var fnspec = temp__5735__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__38386 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__38387 = null;
var count__38388 = (0);
var i__38389 = (0);
while(true){
if((i__38389 < count__38388)){
var role = chunk__38387.cljs$core$IIndexed$_nth$arity$2(null,i__38389);
var temp__5735__auto___38616__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___38616__$1)){
var spec_38617 = temp__5735__auto___38616__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_38617)], 0));
} else {
}


var G__38618 = seq__38386;
var G__38619 = chunk__38387;
var G__38620 = count__38388;
var G__38621 = (i__38389 + (1));
seq__38386 = G__38618;
chunk__38387 = G__38619;
count__38388 = G__38620;
i__38389 = G__38621;
continue;
} else {
var temp__5735__auto____$1 = cljs.core.seq(seq__38386);
if(temp__5735__auto____$1){
var seq__38386__$1 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__38386__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__38386__$1);
var G__38622 = cljs.core.chunk_rest(seq__38386__$1);
var G__38623 = c__4556__auto__;
var G__38624 = cljs.core.count(c__4556__auto__);
var G__38625 = (0);
seq__38386 = G__38622;
chunk__38387 = G__38623;
count__38388 = G__38624;
i__38389 = G__38625;
continue;
} else {
var role = cljs.core.first(seq__38386__$1);
var temp__5735__auto___38626__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___38626__$2)){
var spec_38627 = temp__5735__auto___38626__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_38627)], 0));
} else {
}


var G__38628 = cljs.core.next(seq__38386__$1);
var G__38629 = null;
var G__38630 = (0);
var G__38631 = (0);
seq__38386 = G__38628;
chunk__38387 = G__38629;
count__38388 = G__38630;
i__38389 = G__38631;
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
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol(null,"ExceptionInfo","ExceptionInfo",294935087,null):(((t instanceof Error))?cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("js",t.name):null
))], null),(function (){var temp__5735__auto__ = cljs.core.ex_message(t);
if(cljs.core.truth_(temp__5735__auto__)){
var msg = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = cljs.core.ex_data(t);
if(cljs.core.truth_(temp__5735__auto__)){
var ed = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})()], 0));
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__38632 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__38633 = cljs.core.ex_cause(t);
via = G__38632;
t = G__38633;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek(via);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5735__auto__ = cljs.core.ex_message(root);
if(cljs.core.truth_(temp__5735__auto__)){
var root_msg = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = cljs.core.ex_data(root);
if(cljs.core.truth_(temp__5735__auto__)){
var data = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(o));
if(cljs.core.truth_(temp__5735__auto__)){
var phase = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})()], 0));
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__38395 = datafied_throwable;
var map__38395__$1 = (((((!((map__38395 == null))))?(((((map__38395.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38395.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38395):map__38395);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38395__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38395__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__38395__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__38396 = cljs.core.last(via);
var map__38396__$1 = (((((!((map__38396 == null))))?(((((map__38396.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38396.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38396):map__38396);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38396__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38396__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38396__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__38397 = data;
var map__38397__$1 = (((((!((map__38397 == null))))?(((((map__38397.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38397.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38397):map__38397);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38397__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38397__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38397__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__38398 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__38398__$1 = (((((!((map__38398 == null))))?(((((map__38398.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38398.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38398):map__38398);
var top_data = map__38398__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38398__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__38420 = phase;
var G__38420__$1 = (((G__38420 instanceof cljs.core.Keyword))?G__38420.fqn:null);
switch (G__38420__$1) {
case "read-source":
var map__38428 = data;
var map__38428__$1 = (((((!((map__38428 == null))))?(((((map__38428.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38428.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38428):map__38428);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38428__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38428__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__38430 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__38430__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__38430,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__38430);
var G__38430__$2 = (cljs.core.truth_((function (){var fexpr__38431 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__38431.cljs$core$IFn$_invoke$arity$1 ? fexpr__38431.cljs$core$IFn$_invoke$arity$1(source) : fexpr__38431.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__38430__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__38430__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__38430__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__38430__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__38438 = top_data;
var G__38438__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__38438,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__38438);
var G__38438__$2 = (cljs.core.truth_((function (){var fexpr__38444 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__38444.cljs$core$IFn$_invoke$arity$1 ? fexpr__38444.cljs$core$IFn$_invoke$arity$1(source) : fexpr__38444.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__38438__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__38438__$1);
var G__38438__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__38438__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__38438__$2);
var G__38438__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__38438__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__38438__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__38438__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__38438__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__38448 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38448,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38448,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38448,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38448,(3),null);
var G__38459 = top_data;
var G__38459__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__38459,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__38459);
var G__38459__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__38459__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__38459__$1);
var G__38459__$3 = (cljs.core.truth_((function (){var and__4115__auto__ = source__$1;
if(cljs.core.truth_(and__4115__auto__)){
return method;
} else {
return and__4115__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__38459__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__38459__$2);
var G__38459__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__38459__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__38459__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__38459__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__38459__$4;
}

break;
case "execution":
var vec__38476 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38476,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38476,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38476,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38476,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__38394_SHARP_){
var or__4126__auto__ = (p1__38394_SHARP_ == null);
if(or__4126__auto__){
return or__4126__auto__;
} else {
var fexpr__38480 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__38480.cljs$core$IFn$_invoke$arity$1 ? fexpr__38480.cljs$core$IFn$_invoke$arity$1(p1__38394_SHARP_) : fexpr__38480.call(null,p1__38394_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4126__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return line;
}
})();
var G__38488 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__38488__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__38488,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__38488);
var G__38488__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__38488__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__38488__$1);
var G__38488__$3 = (cljs.core.truth_((function (){var or__4126__auto__ = fn;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var and__4115__auto__ = source__$1;
if(cljs.core.truth_(and__4115__auto__)){
return method;
} else {
return and__4115__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__38488__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4126__auto__ = fn;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__38488__$2);
var G__38488__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__38488__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__38488__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__38488__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__38488__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__38420__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__38513){
var map__38514 = p__38513;
var map__38514__$1 = (((((!((map__38514 == null))))?(((((map__38514.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38514.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38514):map__38514);
var triage_data = map__38514__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38514__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38514__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38514__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38514__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38514__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38514__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38514__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38514__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4126__auto__ = source;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4126__auto__ = line;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__4126__auto__ = class$;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__38520 = phase;
var G__38520__$1 = (((G__38520 instanceof cljs.core.Keyword))?G__38520.fqn:null);
switch (G__38520__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__38521 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__38522 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__38523 = loc;
var G__38524 = (cljs.core.truth_(spec)?(function (){var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__38526_38645 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__38527_38646 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__38528_38647 = true;
var _STAR_print_fn_STAR__temp_val__38529_38648 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__38528_38647);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__38529_38648);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__38503_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__38503_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__38527_38646);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__38526_38645);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__38521,G__38522,G__38523,G__38524) : format.call(null,G__38521,G__38522,G__38523,G__38524));

break;
case "macroexpansion":
var G__38531 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__38532 = cause_type;
var G__38533 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__38534 = loc;
var G__38535 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__38531,G__38532,G__38533,G__38534,G__38535) : format.call(null,G__38531,G__38532,G__38533,G__38534,G__38535));

break;
case "compile-syntax-check":
var G__38536 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__38537 = cause_type;
var G__38538 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__38539 = loc;
var G__38540 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__38536,G__38537,G__38538,G__38539,G__38540) : format.call(null,G__38536,G__38537,G__38538,G__38539,G__38540));

break;
case "compilation":
var G__38541 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__38542 = cause_type;
var G__38543 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__38544 = loc;
var G__38545 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__38541,G__38542,G__38543,G__38544,G__38545) : format.call(null,G__38541,G__38542,G__38543,G__38544,G__38545));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__38546 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__38547 = symbol;
var G__38548 = loc;
var G__38549 = (function (){var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__38550_38649 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__38551_38650 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__38552_38651 = true;
var _STAR_print_fn_STAR__temp_val__38553_38652 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__38552_38651);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__38553_38652);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__38504_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__38504_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__38551_38650);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__38550_38649);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__38546,G__38547,G__38548,G__38549) : format.call(null,G__38546,G__38547,G__38548,G__38549));
} else {
var G__38554 = "Execution error%s at %s(%s).\n%s\n";
var G__38555 = cause_type;
var G__38556 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__38557 = loc;
var G__38558 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__38554,G__38555,G__38556,G__38557,G__38558) : format.call(null,G__38554,G__38555,G__38556,G__38557,G__38558));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__38520__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
