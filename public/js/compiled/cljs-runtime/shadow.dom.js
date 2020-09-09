goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_35815 = (function (this$){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (shadow.dom._to_dom[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4429__auto__.call(null,this$));
} else {
var m__4426__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4426__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
});
shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
return shadow$dom$IElement$_to_dom$dyn_35815(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_35819 = (function (this$){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (shadow.dom._to_svg[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4429__auto__.call(null,this$));
} else {
var m__4426__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4426__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
});
shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
return shadow$dom$SVGElement$_to_svg$dyn_35819(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__35018 = coll;
var G__35019 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__35018,G__35019) : shadow.dom.lazy_native_coll_seq.call(null,G__35018,G__35019));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__4126__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"shadow.dom/NativeColl");
}));

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__35032 = arguments.length;
switch (G__35032) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__35039 = arguments.length;
switch (G__35039) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__35046 = arguments.length;
switch (G__35046) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__35053 = arguments.length;
switch (G__35053) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__35062 = arguments.length;
switch (G__35062) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
return goog.dom.contains(document,shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
return goog.dom.contains(shadow.dom.dom_node(parent),shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
return goog.dom.classlist.add(shadow.dom.dom_node(el),cls);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
return goog.dom.classlist.remove(shadow.dom.dom_node(el),cls);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__35073 = arguments.length;
switch (G__35073) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
return goog.dom.classlist.toggle(shadow.dom.dom_node(el),cls);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__4126__auto__ = (!((typeof document !== 'undefined')));
if(or__4126__auto__){
return or__4126__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e35083){if((e35083 instanceof Object)){
var e = e35083;
return console.log("didnt support attachEvent",el,e);
} else {
throw e35083;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__4126__auto__ = (!((typeof document !== 'undefined')));
if(or__4126__auto__){
return or__4126__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__35092 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__35093 = null;
var count__35094 = (0);
var i__35095 = (0);
while(true){
if((i__35095 < count__35094)){
var el = chunk__35093.cljs$core$IIndexed$_nth$arity$2(null,i__35095);
var handler_35860__$1 = ((function (seq__35092,chunk__35093,count__35094,i__35095,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__35092,chunk__35093,count__35094,i__35095,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_35860__$1);


var G__35862 = seq__35092;
var G__35863 = chunk__35093;
var G__35864 = count__35094;
var G__35865 = (i__35095 + (1));
seq__35092 = G__35862;
chunk__35093 = G__35863;
count__35094 = G__35864;
i__35095 = G__35865;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__35092);
if(temp__5735__auto__){
var seq__35092__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35092__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__35092__$1);
var G__35867 = cljs.core.chunk_rest(seq__35092__$1);
var G__35868 = c__4556__auto__;
var G__35869 = cljs.core.count(c__4556__auto__);
var G__35870 = (0);
seq__35092 = G__35867;
chunk__35093 = G__35868;
count__35094 = G__35869;
i__35095 = G__35870;
continue;
} else {
var el = cljs.core.first(seq__35092__$1);
var handler_35871__$1 = ((function (seq__35092,chunk__35093,count__35094,i__35095,el,seq__35092__$1,temp__5735__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__35092,chunk__35093,count__35094,i__35095,el,seq__35092__$1,temp__5735__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_35871__$1);


var G__35873 = cljs.core.next(seq__35092__$1);
var G__35874 = null;
var G__35875 = (0);
var G__35876 = (0);
seq__35092 = G__35873;
chunk__35093 = G__35874;
count__35094 = G__35875;
i__35095 = G__35876;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__35115 = arguments.length;
switch (G__35115) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
return shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(ev),handler__$1);
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
return shadow.dom.dom_listen_remove(shadow.dom.dom_node(el),cljs.core.name(ev),handler);
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__35125 = cljs.core.seq(events);
var chunk__35126 = null;
var count__35127 = (0);
var i__35128 = (0);
while(true){
if((i__35128 < count__35127)){
var vec__35137 = chunk__35126.cljs$core$IIndexed$_nth$arity$2(null,i__35128);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35137,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35137,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__35886 = seq__35125;
var G__35887 = chunk__35126;
var G__35888 = count__35127;
var G__35889 = (i__35128 + (1));
seq__35125 = G__35886;
chunk__35126 = G__35887;
count__35127 = G__35888;
i__35128 = G__35889;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__35125);
if(temp__5735__auto__){
var seq__35125__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35125__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__35125__$1);
var G__35890 = cljs.core.chunk_rest(seq__35125__$1);
var G__35891 = c__4556__auto__;
var G__35892 = cljs.core.count(c__4556__auto__);
var G__35893 = (0);
seq__35125 = G__35890;
chunk__35126 = G__35891;
count__35127 = G__35892;
i__35128 = G__35893;
continue;
} else {
var vec__35142 = cljs.core.first(seq__35125__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35142,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35142,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__35895 = cljs.core.next(seq__35125__$1);
var G__35896 = null;
var G__35897 = (0);
var G__35898 = (0);
seq__35125 = G__35895;
chunk__35126 = G__35896;
count__35127 = G__35897;
i__35128 = G__35898;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__35148 = cljs.core.seq(styles);
var chunk__35149 = null;
var count__35150 = (0);
var i__35151 = (0);
while(true){
if((i__35151 < count__35150)){
var vec__35161 = chunk__35149.cljs$core$IIndexed$_nth$arity$2(null,i__35151);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35161,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35161,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__35901 = seq__35148;
var G__35902 = chunk__35149;
var G__35903 = count__35150;
var G__35904 = (i__35151 + (1));
seq__35148 = G__35901;
chunk__35149 = G__35902;
count__35150 = G__35903;
i__35151 = G__35904;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__35148);
if(temp__5735__auto__){
var seq__35148__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35148__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__35148__$1);
var G__35905 = cljs.core.chunk_rest(seq__35148__$1);
var G__35907 = c__4556__auto__;
var G__35908 = cljs.core.count(c__4556__auto__);
var G__35909 = (0);
seq__35148 = G__35905;
chunk__35149 = G__35907;
count__35150 = G__35908;
i__35151 = G__35909;
continue;
} else {
var vec__35166 = cljs.core.first(seq__35148__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35166,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35166,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__35912 = cljs.core.next(seq__35148__$1);
var G__35913 = null;
var G__35914 = (0);
var G__35915 = (0);
seq__35148 = G__35912;
chunk__35149 = G__35913;
count__35150 = G__35914;
i__35151 = G__35915;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__35171_35916 = key;
var G__35171_35917__$1 = (((G__35171_35916 instanceof cljs.core.Keyword))?G__35171_35916.fqn:null);
switch (G__35171_35917__$1) {
case "id":
(el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "class":
(el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "for":
(el.htmlFor = value);

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_35937 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__4126__auto__ = goog.string.startsWith(ks_35937,"data-");
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return goog.string.startsWith(ks_35937,"aria-");
}
})())){
el.setAttribute(ks_35937,value);
} else {
(el[ks_35937] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
return goog.dom.classlist.contains(shadow.dom.dom_node(el),cls);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__35189){
var map__35190 = p__35189;
var map__35190__$1 = (((((!((map__35190 == null))))?(((((map__35190.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35190.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35190):map__35190);
var props = map__35190__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35190__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__35194 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35194,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35194,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35194,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__35198 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__35198,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__35198;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__35204 = arguments.length;
switch (G__35204) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5735__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5735__auto__)){
var n = temp__5735__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5735__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5735__auto__)){
var n = temp__5735__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__35216){
var vec__35217 = p__35216;
var seq__35218 = cljs.core.seq(vec__35217);
var first__35219 = cljs.core.first(seq__35218);
var seq__35218__$1 = cljs.core.next(seq__35218);
var nn = first__35219;
var first__35219__$1 = cljs.core.first(seq__35218__$1);
var seq__35218__$2 = cljs.core.next(seq__35218__$1);
var np = first__35219__$1;
var nc = seq__35218__$2;
var node = vec__35217;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__35222 = nn;
var G__35223 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__35222,G__35223) : create_fn.call(null,G__35222,G__35223));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__35225 = nn;
var G__35226 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__35225,G__35226) : create_fn.call(null,G__35225,G__35226));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__35228 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35228,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35228,(1),null);
var seq__35232_35976 = cljs.core.seq(node_children);
var chunk__35233_35977 = null;
var count__35234_35978 = (0);
var i__35235_35979 = (0);
while(true){
if((i__35235_35979 < count__35234_35978)){
var child_struct_35981 = chunk__35233_35977.cljs$core$IIndexed$_nth$arity$2(null,i__35235_35979);
var children_35983 = shadow.dom.dom_node(child_struct_35981);
if(cljs.core.seq_QMARK_(children_35983)){
var seq__35272_35984 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_35983));
var chunk__35274_35985 = null;
var count__35275_35986 = (0);
var i__35276_35987 = (0);
while(true){
if((i__35276_35987 < count__35275_35986)){
var child_35988 = chunk__35274_35985.cljs$core$IIndexed$_nth$arity$2(null,i__35276_35987);
if(cljs.core.truth_(child_35988)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_35988);


var G__35989 = seq__35272_35984;
var G__35990 = chunk__35274_35985;
var G__35991 = count__35275_35986;
var G__35992 = (i__35276_35987 + (1));
seq__35272_35984 = G__35989;
chunk__35274_35985 = G__35990;
count__35275_35986 = G__35991;
i__35276_35987 = G__35992;
continue;
} else {
var G__35993 = seq__35272_35984;
var G__35994 = chunk__35274_35985;
var G__35995 = count__35275_35986;
var G__35996 = (i__35276_35987 + (1));
seq__35272_35984 = G__35993;
chunk__35274_35985 = G__35994;
count__35275_35986 = G__35995;
i__35276_35987 = G__35996;
continue;
}
} else {
var temp__5735__auto___35997 = cljs.core.seq(seq__35272_35984);
if(temp__5735__auto___35997){
var seq__35272_35999__$1 = temp__5735__auto___35997;
if(cljs.core.chunked_seq_QMARK_(seq__35272_35999__$1)){
var c__4556__auto___36000 = cljs.core.chunk_first(seq__35272_35999__$1);
var G__36001 = cljs.core.chunk_rest(seq__35272_35999__$1);
var G__36002 = c__4556__auto___36000;
var G__36003 = cljs.core.count(c__4556__auto___36000);
var G__36004 = (0);
seq__35272_35984 = G__36001;
chunk__35274_35985 = G__36002;
count__35275_35986 = G__36003;
i__35276_35987 = G__36004;
continue;
} else {
var child_36005 = cljs.core.first(seq__35272_35999__$1);
if(cljs.core.truth_(child_36005)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_36005);


var G__36007 = cljs.core.next(seq__35272_35999__$1);
var G__36008 = null;
var G__36009 = (0);
var G__36010 = (0);
seq__35272_35984 = G__36007;
chunk__35274_35985 = G__36008;
count__35275_35986 = G__36009;
i__35276_35987 = G__36010;
continue;
} else {
var G__36011 = cljs.core.next(seq__35272_35999__$1);
var G__36012 = null;
var G__36013 = (0);
var G__36014 = (0);
seq__35272_35984 = G__36011;
chunk__35274_35985 = G__36012;
count__35275_35986 = G__36013;
i__35276_35987 = G__36014;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_35983);
}


var G__36016 = seq__35232_35976;
var G__36017 = chunk__35233_35977;
var G__36018 = count__35234_35978;
var G__36019 = (i__35235_35979 + (1));
seq__35232_35976 = G__36016;
chunk__35233_35977 = G__36017;
count__35234_35978 = G__36018;
i__35235_35979 = G__36019;
continue;
} else {
var temp__5735__auto___36020 = cljs.core.seq(seq__35232_35976);
if(temp__5735__auto___36020){
var seq__35232_36021__$1 = temp__5735__auto___36020;
if(cljs.core.chunked_seq_QMARK_(seq__35232_36021__$1)){
var c__4556__auto___36023 = cljs.core.chunk_first(seq__35232_36021__$1);
var G__36024 = cljs.core.chunk_rest(seq__35232_36021__$1);
var G__36025 = c__4556__auto___36023;
var G__36026 = cljs.core.count(c__4556__auto___36023);
var G__36027 = (0);
seq__35232_35976 = G__36024;
chunk__35233_35977 = G__36025;
count__35234_35978 = G__36026;
i__35235_35979 = G__36027;
continue;
} else {
var child_struct_36029 = cljs.core.first(seq__35232_36021__$1);
var children_36030 = shadow.dom.dom_node(child_struct_36029);
if(cljs.core.seq_QMARK_(children_36030)){
var seq__35291_36031 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_36030));
var chunk__35293_36032 = null;
var count__35294_36033 = (0);
var i__35295_36034 = (0);
while(true){
if((i__35295_36034 < count__35294_36033)){
var child_36037 = chunk__35293_36032.cljs$core$IIndexed$_nth$arity$2(null,i__35295_36034);
if(cljs.core.truth_(child_36037)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_36037);


var G__36041 = seq__35291_36031;
var G__36042 = chunk__35293_36032;
var G__36043 = count__35294_36033;
var G__36044 = (i__35295_36034 + (1));
seq__35291_36031 = G__36041;
chunk__35293_36032 = G__36042;
count__35294_36033 = G__36043;
i__35295_36034 = G__36044;
continue;
} else {
var G__36045 = seq__35291_36031;
var G__36046 = chunk__35293_36032;
var G__36047 = count__35294_36033;
var G__36048 = (i__35295_36034 + (1));
seq__35291_36031 = G__36045;
chunk__35293_36032 = G__36046;
count__35294_36033 = G__36047;
i__35295_36034 = G__36048;
continue;
}
} else {
var temp__5735__auto___36050__$1 = cljs.core.seq(seq__35291_36031);
if(temp__5735__auto___36050__$1){
var seq__35291_36052__$1 = temp__5735__auto___36050__$1;
if(cljs.core.chunked_seq_QMARK_(seq__35291_36052__$1)){
var c__4556__auto___36054 = cljs.core.chunk_first(seq__35291_36052__$1);
var G__36055 = cljs.core.chunk_rest(seq__35291_36052__$1);
var G__36056 = c__4556__auto___36054;
var G__36057 = cljs.core.count(c__4556__auto___36054);
var G__36058 = (0);
seq__35291_36031 = G__36055;
chunk__35293_36032 = G__36056;
count__35294_36033 = G__36057;
i__35295_36034 = G__36058;
continue;
} else {
var child_36062 = cljs.core.first(seq__35291_36052__$1);
if(cljs.core.truth_(child_36062)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_36062);


var G__36063 = cljs.core.next(seq__35291_36052__$1);
var G__36064 = null;
var G__36065 = (0);
var G__36066 = (0);
seq__35291_36031 = G__36063;
chunk__35293_36032 = G__36064;
count__35294_36033 = G__36065;
i__35295_36034 = G__36066;
continue;
} else {
var G__36068 = cljs.core.next(seq__35291_36052__$1);
var G__36069 = null;
var G__36070 = (0);
var G__36071 = (0);
seq__35291_36031 = G__36068;
chunk__35293_36032 = G__36069;
count__35294_36033 = G__36070;
i__35295_36034 = G__36071;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_36030);
}


var G__36077 = cljs.core.next(seq__35232_36021__$1);
var G__36078 = null;
var G__36079 = (0);
var G__36080 = (0);
seq__35232_35976 = G__36077;
chunk__35233_35977 = G__36078;
count__35234_35978 = G__36079;
i__35235_35979 = G__36080;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
return goog.dom.removeChildren(shadow.dom.dom_node(node));
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__35321 = cljs.core.seq(node);
var chunk__35322 = null;
var count__35323 = (0);
var i__35324 = (0);
while(true){
if((i__35324 < count__35323)){
var n = chunk__35322.cljs$core$IIndexed$_nth$arity$2(null,i__35324);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__36089 = seq__35321;
var G__36090 = chunk__35322;
var G__36091 = count__35323;
var G__36092 = (i__35324 + (1));
seq__35321 = G__36089;
chunk__35322 = G__36090;
count__35323 = G__36091;
i__35324 = G__36092;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__35321);
if(temp__5735__auto__){
var seq__35321__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35321__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__35321__$1);
var G__36096 = cljs.core.chunk_rest(seq__35321__$1);
var G__36097 = c__4556__auto__;
var G__36098 = cljs.core.count(c__4556__auto__);
var G__36099 = (0);
seq__35321 = G__36096;
chunk__35322 = G__36097;
count__35323 = G__36098;
i__35324 = G__36099;
continue;
} else {
var n = cljs.core.first(seq__35321__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__36100 = cljs.core.next(seq__35321__$1);
var G__36101 = null;
var G__36102 = (0);
var G__36103 = (0);
seq__35321 = G__36100;
chunk__35322 = G__36101;
count__35323 = G__36102;
i__35324 = G__36103;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
return goog.dom.replaceNode(shadow.dom.dom_node(new$),shadow.dom.dom_node(old));
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__35332 = arguments.length;
switch (G__35332) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__35336 = arguments.length;
switch (G__35336) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__35341 = arguments.length;
switch (G__35341) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__4126__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__4742__auto__ = [];
var len__4736__auto___36131 = arguments.length;
var i__4737__auto___36132 = (0);
while(true){
if((i__4737__auto___36132 < len__4736__auto___36131)){
args__4742__auto__.push((arguments[i__4737__auto___36132]));

var G__36133 = (i__4737__auto___36132 + (1));
i__4737__auto___36132 = G__36133;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__35355_36137 = cljs.core.seq(nodes);
var chunk__35357_36138 = null;
var count__35358_36139 = (0);
var i__35359_36140 = (0);
while(true){
if((i__35359_36140 < count__35358_36139)){
var node_36141 = chunk__35357_36138.cljs$core$IIndexed$_nth$arity$2(null,i__35359_36140);
fragment.appendChild(shadow.dom._to_dom(node_36141));


var G__36143 = seq__35355_36137;
var G__36144 = chunk__35357_36138;
var G__36145 = count__35358_36139;
var G__36146 = (i__35359_36140 + (1));
seq__35355_36137 = G__36143;
chunk__35357_36138 = G__36144;
count__35358_36139 = G__36145;
i__35359_36140 = G__36146;
continue;
} else {
var temp__5735__auto___36147 = cljs.core.seq(seq__35355_36137);
if(temp__5735__auto___36147){
var seq__35355_36148__$1 = temp__5735__auto___36147;
if(cljs.core.chunked_seq_QMARK_(seq__35355_36148__$1)){
var c__4556__auto___36149 = cljs.core.chunk_first(seq__35355_36148__$1);
var G__36150 = cljs.core.chunk_rest(seq__35355_36148__$1);
var G__36151 = c__4556__auto___36149;
var G__36152 = cljs.core.count(c__4556__auto___36149);
var G__36153 = (0);
seq__35355_36137 = G__36150;
chunk__35357_36138 = G__36151;
count__35358_36139 = G__36152;
i__35359_36140 = G__36153;
continue;
} else {
var node_36155 = cljs.core.first(seq__35355_36148__$1);
fragment.appendChild(shadow.dom._to_dom(node_36155));


var G__36156 = cljs.core.next(seq__35355_36148__$1);
var G__36157 = null;
var G__36158 = (0);
var G__36159 = (0);
seq__35355_36137 = G__36156;
chunk__35357_36138 = G__36157;
count__35358_36139 = G__36158;
i__35359_36140 = G__36159;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq35353){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq35353));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__35368_36162 = cljs.core.seq(scripts);
var chunk__35369_36163 = null;
var count__35370_36164 = (0);
var i__35371_36165 = (0);
while(true){
if((i__35371_36165 < count__35370_36164)){
var vec__35388_36168 = chunk__35369_36163.cljs$core$IIndexed$_nth$arity$2(null,i__35371_36165);
var script_tag_36169 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35388_36168,(0),null);
var script_body_36170 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35388_36168,(1),null);
eval(script_body_36170);


var G__36174 = seq__35368_36162;
var G__36175 = chunk__35369_36163;
var G__36176 = count__35370_36164;
var G__36177 = (i__35371_36165 + (1));
seq__35368_36162 = G__36174;
chunk__35369_36163 = G__36175;
count__35370_36164 = G__36176;
i__35371_36165 = G__36177;
continue;
} else {
var temp__5735__auto___36181 = cljs.core.seq(seq__35368_36162);
if(temp__5735__auto___36181){
var seq__35368_36184__$1 = temp__5735__auto___36181;
if(cljs.core.chunked_seq_QMARK_(seq__35368_36184__$1)){
var c__4556__auto___36185 = cljs.core.chunk_first(seq__35368_36184__$1);
var G__36188 = cljs.core.chunk_rest(seq__35368_36184__$1);
var G__36189 = c__4556__auto___36185;
var G__36190 = cljs.core.count(c__4556__auto___36185);
var G__36191 = (0);
seq__35368_36162 = G__36188;
chunk__35369_36163 = G__36189;
count__35370_36164 = G__36190;
i__35371_36165 = G__36191;
continue;
} else {
var vec__35396_36193 = cljs.core.first(seq__35368_36184__$1);
var script_tag_36194 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35396_36193,(0),null);
var script_body_36195 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35396_36193,(1),null);
eval(script_body_36195);


var G__36196 = cljs.core.next(seq__35368_36184__$1);
var G__36197 = null;
var G__36198 = (0);
var G__36199 = (0);
seq__35368_36162 = G__36196;
chunk__35369_36163 = G__36197;
count__35370_36164 = G__36198;
i__35371_36165 = G__36199;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__35401){
var vec__35402 = p__35401;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35402,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35402,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
return goog.dom.getAncestorByClass(shadow.dom.dom_node(el),cls);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__35413 = arguments.length;
switch (G__35413) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag));
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag),cljs.core.name(cls));
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
return goog.dom.forms.getValue(shadow.dom.dom_node(dom));
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
return goog.dom.forms.setValue(shadow.dom.dom_node(dom),value);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__35438 = cljs.core.seq(style_keys);
var chunk__35439 = null;
var count__35440 = (0);
var i__35441 = (0);
while(true){
if((i__35441 < count__35440)){
var it = chunk__35439.cljs$core$IIndexed$_nth$arity$2(null,i__35441);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__36208 = seq__35438;
var G__36209 = chunk__35439;
var G__36210 = count__35440;
var G__36211 = (i__35441 + (1));
seq__35438 = G__36208;
chunk__35439 = G__36209;
count__35440 = G__36210;
i__35441 = G__36211;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__35438);
if(temp__5735__auto__){
var seq__35438__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35438__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__35438__$1);
var G__36214 = cljs.core.chunk_rest(seq__35438__$1);
var G__36215 = c__4556__auto__;
var G__36216 = cljs.core.count(c__4556__auto__);
var G__36217 = (0);
seq__35438 = G__36214;
chunk__35439 = G__36215;
count__35440 = G__36216;
i__35441 = G__36217;
continue;
} else {
var it = cljs.core.first(seq__35438__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__36219 = cljs.core.next(seq__35438__$1);
var G__36220 = null;
var G__36221 = (0);
var G__36222 = (0);
seq__35438 = G__36219;
chunk__35439 = G__36220;
count__35440 = G__36221;
i__35441 = G__36222;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k35448,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__35460 = k35448;
var G__35460__$1 = (((G__35460 instanceof cljs.core.Keyword))?G__35460.fqn:null);
switch (G__35460__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k35448,else__4383__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__35465){
var vec__35466 = p__35465;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35466,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35466,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#shadow.dom.Coordinate{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__35447){
var self__ = this;
var G__35447__$1 = this;
return (new cljs.core.RecordIter((0),G__35447__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
})(this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this35449,other35450){
var self__ = this;
var this35449__$1 = this;
return (((!((other35450 == null)))) && ((this35449__$1.constructor === other35450.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this35449__$1.x,other35450.x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this35449__$1.y,other35450.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this35449__$1.__extmap,other35450.__extmap)));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__35447){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__35479 = cljs.core.keyword_identical_QMARK_;
var expr__35480 = k__4388__auto__;
if(cljs.core.truth_((pred__35479.cljs$core$IFn$_invoke$arity$2 ? pred__35479.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__35480) : pred__35479.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__35480)))){
return (new shadow.dom.Coordinate(G__35447,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__35479.cljs$core$IFn$_invoke$arity$2 ? pred__35479.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__35480) : pred__35479.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__35480)))){
return (new shadow.dom.Coordinate(self__.x,G__35447,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__35447),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__35447){
var self__ = this;
var this__4379__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__35447,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4386__auto__,(0)),cljs.core._nth(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__35452){
var extmap__4419__auto__ = (function (){var G__35489 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__35452,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__35452)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__35489);
} else {
return G__35489;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__35452),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__35452),null,cljs.core.not_empty(extmap__4419__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = goog.style.getPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = goog.style.getClientPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = goog.style.getPageOffset(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k35526,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__35537 = k35526;
var G__35537__$1 = (((G__35537 instanceof cljs.core.Keyword))?G__35537.fqn:null);
switch (G__35537__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k35526,else__4383__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__35547){
var vec__35549 = p__35547;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35549,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35549,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#shadow.dom.Size{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__35525){
var self__ = this;
var G__35525__$1 = this;
return (new cljs.core.RecordIter((0),G__35525__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
})(this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this35527,other35528){
var self__ = this;
var this35527__$1 = this;
return (((!((other35528 == null)))) && ((this35527__$1.constructor === other35528.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this35527__$1.w,other35528.w)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this35527__$1.h,other35528.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this35527__$1.__extmap,other35528.__extmap)));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__35525){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__35594 = cljs.core.keyword_identical_QMARK_;
var expr__35595 = k__4388__auto__;
if(cljs.core.truth_((pred__35594.cljs$core$IFn$_invoke$arity$2 ? pred__35594.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__35595) : pred__35594.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__35595)))){
return (new shadow.dom.Size(G__35525,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__35594.cljs$core$IFn$_invoke$arity$2 ? pred__35594.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__35595) : pred__35594.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__35595)))){
return (new shadow.dom.Size(self__.w,G__35525,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__35525),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__35525){
var self__ = this;
var this__4379__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__35525,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4386__auto__,(0)),cljs.core._nth(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__35529){
var extmap__4419__auto__ = (function (){var G__35612 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__35529,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__35529)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__35612);
} else {
return G__35612;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__35529),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__35529),null,cljs.core.not_empty(extmap__4419__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj(goog.style.getSize(shadow.dom.dom_node(el)));
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__4610__auto__ = opts;
var l__4611__auto__ = a__4610__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__4611__auto__)){
var G__36302 = (i + (1));
var G__36303 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__36302;
ret = G__36303;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__35632){
var vec__35633 = p__35632;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35633,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35633,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__35642 = arguments.length;
switch (G__35642) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingAfter(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingBefore(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5733__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5733__auto__)){
var child = temp__5733__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__36311 = ps;
var G__36312 = (i + (1));
el__$1 = G__36311;
i = G__36312;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
return goog.dom.getParentElement(shadow.dom.dom_node(el));
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
return goog.dom.getNextElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
return goog.dom.getPreviousElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__35658 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35658,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35658,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35658,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__35664_36328 = cljs.core.seq(props);
var chunk__35665_36329 = null;
var count__35666_36330 = (0);
var i__35667_36331 = (0);
while(true){
if((i__35667_36331 < count__35666_36330)){
var vec__35675_36332 = chunk__35665_36329.cljs$core$IIndexed$_nth$arity$2(null,i__35667_36331);
var k_36333 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35675_36332,(0),null);
var v_36334 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35675_36332,(1),null);
el.setAttributeNS((function (){var temp__5735__auto__ = cljs.core.namespace(k_36333);
if(cljs.core.truth_(temp__5735__auto__)){
var ns = temp__5735__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_36333),v_36334);


var G__36337 = seq__35664_36328;
var G__36338 = chunk__35665_36329;
var G__36339 = count__35666_36330;
var G__36340 = (i__35667_36331 + (1));
seq__35664_36328 = G__36337;
chunk__35665_36329 = G__36338;
count__35666_36330 = G__36339;
i__35667_36331 = G__36340;
continue;
} else {
var temp__5735__auto___36342 = cljs.core.seq(seq__35664_36328);
if(temp__5735__auto___36342){
var seq__35664_36343__$1 = temp__5735__auto___36342;
if(cljs.core.chunked_seq_QMARK_(seq__35664_36343__$1)){
var c__4556__auto___36344 = cljs.core.chunk_first(seq__35664_36343__$1);
var G__36346 = cljs.core.chunk_rest(seq__35664_36343__$1);
var G__36347 = c__4556__auto___36344;
var G__36348 = cljs.core.count(c__4556__auto___36344);
var G__36349 = (0);
seq__35664_36328 = G__36346;
chunk__35665_36329 = G__36347;
count__35666_36330 = G__36348;
i__35667_36331 = G__36349;
continue;
} else {
var vec__35682_36351 = cljs.core.first(seq__35664_36343__$1);
var k_36352 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35682_36351,(0),null);
var v_36353 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35682_36351,(1),null);
el.setAttributeNS((function (){var temp__5735__auto____$1 = cljs.core.namespace(k_36352);
if(cljs.core.truth_(temp__5735__auto____$1)){
var ns = temp__5735__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_36352),v_36353);


var G__36354 = cljs.core.next(seq__35664_36343__$1);
var G__36355 = null;
var G__36356 = (0);
var G__36357 = (0);
seq__35664_36328 = G__36354;
chunk__35665_36329 = G__36355;
count__35666_36330 = G__36356;
i__35667_36331 = G__36357;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__35695 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35695,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35695,(1),null);
var seq__35700_36366 = cljs.core.seq(node_children);
var chunk__35702_36367 = null;
var count__35703_36368 = (0);
var i__35704_36369 = (0);
while(true){
if((i__35704_36369 < count__35703_36368)){
var child_struct_36370 = chunk__35702_36367.cljs$core$IIndexed$_nth$arity$2(null,i__35704_36369);
if((!((child_struct_36370 == null)))){
if(typeof child_struct_36370 === 'string'){
var text_36372 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_36372),child_struct_36370].join(''));
} else {
var children_36373 = shadow.dom.svg_node(child_struct_36370);
if(cljs.core.seq_QMARK_(children_36373)){
var seq__35735_36375 = cljs.core.seq(children_36373);
var chunk__35737_36376 = null;
var count__35738_36377 = (0);
var i__35739_36378 = (0);
while(true){
if((i__35739_36378 < count__35738_36377)){
var child_36379 = chunk__35737_36376.cljs$core$IIndexed$_nth$arity$2(null,i__35739_36378);
if(cljs.core.truth_(child_36379)){
node.appendChild(child_36379);


var G__36381 = seq__35735_36375;
var G__36382 = chunk__35737_36376;
var G__36383 = count__35738_36377;
var G__36384 = (i__35739_36378 + (1));
seq__35735_36375 = G__36381;
chunk__35737_36376 = G__36382;
count__35738_36377 = G__36383;
i__35739_36378 = G__36384;
continue;
} else {
var G__36385 = seq__35735_36375;
var G__36386 = chunk__35737_36376;
var G__36387 = count__35738_36377;
var G__36388 = (i__35739_36378 + (1));
seq__35735_36375 = G__36385;
chunk__35737_36376 = G__36386;
count__35738_36377 = G__36387;
i__35739_36378 = G__36388;
continue;
}
} else {
var temp__5735__auto___36389 = cljs.core.seq(seq__35735_36375);
if(temp__5735__auto___36389){
var seq__35735_36390__$1 = temp__5735__auto___36389;
if(cljs.core.chunked_seq_QMARK_(seq__35735_36390__$1)){
var c__4556__auto___36391 = cljs.core.chunk_first(seq__35735_36390__$1);
var G__36392 = cljs.core.chunk_rest(seq__35735_36390__$1);
var G__36393 = c__4556__auto___36391;
var G__36394 = cljs.core.count(c__4556__auto___36391);
var G__36395 = (0);
seq__35735_36375 = G__36392;
chunk__35737_36376 = G__36393;
count__35738_36377 = G__36394;
i__35739_36378 = G__36395;
continue;
} else {
var child_36397 = cljs.core.first(seq__35735_36390__$1);
if(cljs.core.truth_(child_36397)){
node.appendChild(child_36397);


var G__36398 = cljs.core.next(seq__35735_36390__$1);
var G__36399 = null;
var G__36400 = (0);
var G__36401 = (0);
seq__35735_36375 = G__36398;
chunk__35737_36376 = G__36399;
count__35738_36377 = G__36400;
i__35739_36378 = G__36401;
continue;
} else {
var G__36403 = cljs.core.next(seq__35735_36390__$1);
var G__36404 = null;
var G__36405 = (0);
var G__36406 = (0);
seq__35735_36375 = G__36403;
chunk__35737_36376 = G__36404;
count__35738_36377 = G__36405;
i__35739_36378 = G__36406;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_36373);
}
}


var G__36408 = seq__35700_36366;
var G__36409 = chunk__35702_36367;
var G__36410 = count__35703_36368;
var G__36411 = (i__35704_36369 + (1));
seq__35700_36366 = G__36408;
chunk__35702_36367 = G__36409;
count__35703_36368 = G__36410;
i__35704_36369 = G__36411;
continue;
} else {
var G__36412 = seq__35700_36366;
var G__36413 = chunk__35702_36367;
var G__36414 = count__35703_36368;
var G__36415 = (i__35704_36369 + (1));
seq__35700_36366 = G__36412;
chunk__35702_36367 = G__36413;
count__35703_36368 = G__36414;
i__35704_36369 = G__36415;
continue;
}
} else {
var temp__5735__auto___36416 = cljs.core.seq(seq__35700_36366);
if(temp__5735__auto___36416){
var seq__35700_36417__$1 = temp__5735__auto___36416;
if(cljs.core.chunked_seq_QMARK_(seq__35700_36417__$1)){
var c__4556__auto___36418 = cljs.core.chunk_first(seq__35700_36417__$1);
var G__36419 = cljs.core.chunk_rest(seq__35700_36417__$1);
var G__36420 = c__4556__auto___36418;
var G__36421 = cljs.core.count(c__4556__auto___36418);
var G__36422 = (0);
seq__35700_36366 = G__36419;
chunk__35702_36367 = G__36420;
count__35703_36368 = G__36421;
i__35704_36369 = G__36422;
continue;
} else {
var child_struct_36423 = cljs.core.first(seq__35700_36417__$1);
if((!((child_struct_36423 == null)))){
if(typeof child_struct_36423 === 'string'){
var text_36424 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_36424),child_struct_36423].join(''));
} else {
var children_36426 = shadow.dom.svg_node(child_struct_36423);
if(cljs.core.seq_QMARK_(children_36426)){
var seq__35751_36427 = cljs.core.seq(children_36426);
var chunk__35753_36428 = null;
var count__35754_36429 = (0);
var i__35755_36430 = (0);
while(true){
if((i__35755_36430 < count__35754_36429)){
var child_36431 = chunk__35753_36428.cljs$core$IIndexed$_nth$arity$2(null,i__35755_36430);
if(cljs.core.truth_(child_36431)){
node.appendChild(child_36431);


var G__36432 = seq__35751_36427;
var G__36433 = chunk__35753_36428;
var G__36434 = count__35754_36429;
var G__36435 = (i__35755_36430 + (1));
seq__35751_36427 = G__36432;
chunk__35753_36428 = G__36433;
count__35754_36429 = G__36434;
i__35755_36430 = G__36435;
continue;
} else {
var G__36436 = seq__35751_36427;
var G__36437 = chunk__35753_36428;
var G__36438 = count__35754_36429;
var G__36439 = (i__35755_36430 + (1));
seq__35751_36427 = G__36436;
chunk__35753_36428 = G__36437;
count__35754_36429 = G__36438;
i__35755_36430 = G__36439;
continue;
}
} else {
var temp__5735__auto___36440__$1 = cljs.core.seq(seq__35751_36427);
if(temp__5735__auto___36440__$1){
var seq__35751_36441__$1 = temp__5735__auto___36440__$1;
if(cljs.core.chunked_seq_QMARK_(seq__35751_36441__$1)){
var c__4556__auto___36442 = cljs.core.chunk_first(seq__35751_36441__$1);
var G__36443 = cljs.core.chunk_rest(seq__35751_36441__$1);
var G__36444 = c__4556__auto___36442;
var G__36445 = cljs.core.count(c__4556__auto___36442);
var G__36446 = (0);
seq__35751_36427 = G__36443;
chunk__35753_36428 = G__36444;
count__35754_36429 = G__36445;
i__35755_36430 = G__36446;
continue;
} else {
var child_36447 = cljs.core.first(seq__35751_36441__$1);
if(cljs.core.truth_(child_36447)){
node.appendChild(child_36447);


var G__36448 = cljs.core.next(seq__35751_36441__$1);
var G__36449 = null;
var G__36450 = (0);
var G__36451 = (0);
seq__35751_36427 = G__36448;
chunk__35753_36428 = G__36449;
count__35754_36429 = G__36450;
i__35755_36430 = G__36451;
continue;
} else {
var G__36452 = cljs.core.next(seq__35751_36441__$1);
var G__36453 = null;
var G__36454 = (0);
var G__36455 = (0);
seq__35751_36427 = G__36452;
chunk__35753_36428 = G__36453;
count__35754_36429 = G__36454;
i__35755_36430 = G__36455;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_36426);
}
}


var G__36456 = cljs.core.next(seq__35700_36417__$1);
var G__36457 = null;
var G__36458 = (0);
var G__36459 = (0);
seq__35700_36366 = G__36456;
chunk__35702_36367 = G__36457;
count__35703_36368 = G__36458;
i__35704_36369 = G__36459;
continue;
} else {
var G__36460 = cljs.core.next(seq__35700_36417__$1);
var G__36461 = null;
var G__36462 = (0);
var G__36463 = (0);
seq__35700_36366 = G__36460;
chunk__35702_36367 = G__36461;
count__35703_36368 = G__36462;
i__35704_36369 = G__36463;
continue;
}
}
} else {
}
}
break;
}

return node;
});
goog.object.set(shadow.dom.SVGElement,"string",true);

goog.object.set(shadow.dom._to_svg,"string",(function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
}));

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

goog.object.set(shadow.dom.SVGElement,"null",true);

goog.object.set(shadow.dom._to_svg,"null",(function (_){
return null;
}));
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__4742__auto__ = [];
var len__4736__auto___36474 = arguments.length;
var i__4737__auto___36475 = (0);
while(true){
if((i__4737__auto___36475 < len__4736__auto___36474)){
args__4742__auto__.push((arguments[i__4737__auto___36475]));

var G__36476 = (i__4737__auto___36475 + (1));
i__4737__auto___36475 = G__36476;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq35774){
var G__35775 = cljs.core.first(seq35774);
var seq35774__$1 = cljs.core.next(seq35774);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__35775,seq35774__$1);
}));

/**
 * returns a channel for events on el
 * transform-fn should be a (fn [e el] some-val) where some-val will be put on the chan
 * once-or-cleanup handles the removal of the event handler
 * - true: remove after one event
 * - false: never removed
 * - chan: remove on msg/close
 */
shadow.dom.event_chan = (function shadow$dom$event_chan(var_args){
var G__35784 = arguments.length;
switch (G__35784) {
case 2:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2 = (function (el,event){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,null,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3 = (function (el,event,xf){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,xf,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4 = (function (el,event,xf,once_or_cleanup){
var buf = cljs.core.async.sliding_buffer((1));
var chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,xf);
var event_fn = (function shadow$dom$event_fn(e){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,e);

if(once_or_cleanup === true){
shadow.dom.remove_event_handler(el,event,shadow$dom$event_fn);

return cljs.core.async.close_BANG_(chan);
} else {
return null;
}
});
shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(event),event_fn);

if(cljs.core.truth_((function (){var and__4115__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__4115__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__4115__auto__;
}
})())){
var c__32206__auto___36485 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32207__auto__ = (function (){var switch__31997__auto__ = (function (state_35796){
var state_val_35797 = (state_35796[(1)]);
if((state_val_35797 === (1))){
var state_35796__$1 = state_35796;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35796__$1,(2),once_or_cleanup);
} else {
if((state_val_35797 === (2))){
var inst_35793 = (state_35796[(2)]);
var inst_35794 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_35796__$1 = (function (){var statearr_35800 = state_35796;
(statearr_35800[(7)] = inst_35793);

return statearr_35800;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_35796__$1,inst_35794);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__31998__auto__ = null;
var shadow$dom$state_machine__31998__auto____0 = (function (){
var statearr_35802 = [null,null,null,null,null,null,null,null];
(statearr_35802[(0)] = shadow$dom$state_machine__31998__auto__);

(statearr_35802[(1)] = (1));

return statearr_35802;
});
var shadow$dom$state_machine__31998__auto____1 = (function (state_35796){
while(true){
var ret_value__31999__auto__ = (function (){try{while(true){
var result__32000__auto__ = switch__31997__auto__(state_35796);
if(cljs.core.keyword_identical_QMARK_(result__32000__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32000__auto__;
}
break;
}
}catch (e35803){var ex__32001__auto__ = e35803;
var statearr_35804_36490 = state_35796;
(statearr_35804_36490[(2)] = ex__32001__auto__);


if(cljs.core.seq((state_35796[(4)]))){
var statearr_35805_36491 = state_35796;
(statearr_35805_36491[(1)] = cljs.core.first((state_35796[(4)])));

} else {
throw ex__32001__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__31999__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36492 = state_35796;
state_35796 = G__36492;
continue;
} else {
return ret_value__31999__auto__;
}
break;
}
});
shadow$dom$state_machine__31998__auto__ = function(state_35796){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__31998__auto____0.call(this);
case 1:
return shadow$dom$state_machine__31998__auto____1.call(this,state_35796);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__31998__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__31998__auto____0;
shadow$dom$state_machine__31998__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__31998__auto____1;
return shadow$dom$state_machine__31998__auto__;
})()
})();
var state__32208__auto__ = (function (){var statearr_35808 = f__32207__auto__();
(statearr_35808[(6)] = c__32206__auto___36485);

return statearr_35808;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32208__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
