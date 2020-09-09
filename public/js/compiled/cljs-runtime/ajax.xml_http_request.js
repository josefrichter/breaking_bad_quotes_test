goog.provide('ajax.xml_http_request');
ajax.xml_http_request.ready_state = (function ajax$xml_http_request$ready_state(e){
var G__26918 = e.target.readyState;
var fexpr__26917 = new cljs.core.PersistentArrayMap(null, 5, [(0),new cljs.core.Keyword(null,"not-initialized","not-initialized",-1937378906),(1),new cljs.core.Keyword(null,"connection-established","connection-established",-1403749733),(2),new cljs.core.Keyword(null,"request-received","request-received",2110590540),(3),new cljs.core.Keyword(null,"processing-request","processing-request",-264947221),(4),new cljs.core.Keyword(null,"response-ready","response-ready",245208276)], null);
return (fexpr__26917.cljs$core$IFn$_invoke$arity$1 ? fexpr__26917.cljs$core$IFn$_invoke$arity$1(G__26918) : fexpr__26917.call(null,G__26918));
});
ajax.xml_http_request.append = (function ajax$xml_http_request$append(current,next){
if(cljs.core.truth_(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current),", ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(next)].join('');
} else {
return next;
}
});
ajax.xml_http_request.process_headers = (function ajax$xml_http_request$process_headers(header_str){
if(cljs.core.truth_(header_str)){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (headers,header_line){
if(cljs.core.truth_(goog.string.isEmptyOrWhitespace(header_line))){
return headers;
} else {
var key_value = goog.string.splitLimit(header_line,": ",(2));
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(headers,(key_value[(0)]),ajax.xml_http_request.append,(key_value[(1)]));
}
}),cljs.core.PersistentArrayMap.EMPTY,header_str.split("\r\n"));
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
});
ajax.xml_http_request.xmlhttprequest = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core._STAR_target_STAR_,"nodejs"))?(function (){var xmlhttprequest = require("xmlhttprequest").XMLHttpRequest;
goog.object.set(global,"XMLHttpRequest",xmlhttprequest);

return xmlhttprequest;
})():window.XMLHttpRequest);
(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxImpl$ = cljs.core.PROTOCOL_SENTINEL);

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxImpl$_js_ajax_request$arity$3 = (function (this$,p__26925,handler){
var map__26926 = p__26925;
var map__26926__$1 = (((((!((map__26926 == null))))?(((((map__26926.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26926.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26926):map__26926);
var uri = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26926__$1,new cljs.core.Keyword(null,"uri","uri",-774711847));
var method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26926__$1,new cljs.core.Keyword(null,"method","method",55703592));
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26926__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26926__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var timeout = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__26926__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318),(0));
var with_credentials = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__26926__$1,new cljs.core.Keyword(null,"with-credentials","with-credentials",-1163127235),false);
var response_format = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26926__$1,new cljs.core.Keyword(null,"response-format","response-format",1664465322));
var this$__$1 = this;
(this$__$1.withCredentials = with_credentials);

(this$__$1.onreadystatechange = (function (p1__26923_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"response-ready","response-ready",245208276),ajax.xml_http_request.ready_state(p1__26923_SHARP_))){
return (handler.cljs$core$IFn$_invoke$arity$1 ? handler.cljs$core$IFn$_invoke$arity$1(this$__$1) : handler.call(null,this$__$1));
} else {
return null;
}
}));

this$__$1.open(method,uri,true);

(this$__$1.timeout = timeout);

var temp__5735__auto___27036 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(response_format);
if(cljs.core.truth_(temp__5735__auto___27036)){
var response_type_27037 = temp__5735__auto___27036;
(this$__$1.responseType = cljs.core.name(response_type_27037));
} else {
}

var seq__26938_27039 = cljs.core.seq(headers);
var chunk__26940_27040 = null;
var count__26941_27041 = (0);
var i__26942_27042 = (0);
while(true){
if((i__26942_27042 < count__26941_27041)){
var vec__26978_27043 = chunk__26940_27040.cljs$core$IIndexed$_nth$arity$2(null,i__26942_27042);
var k_27044 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26978_27043,(0),null);
var v_27045 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26978_27043,(1),null);
this$__$1.setRequestHeader(k_27044,v_27045);


var G__27047 = seq__26938_27039;
var G__27048 = chunk__26940_27040;
var G__27049 = count__26941_27041;
var G__27050 = (i__26942_27042 + (1));
seq__26938_27039 = G__27047;
chunk__26940_27040 = G__27048;
count__26941_27041 = G__27049;
i__26942_27042 = G__27050;
continue;
} else {
var temp__5735__auto___27051 = cljs.core.seq(seq__26938_27039);
if(temp__5735__auto___27051){
var seq__26938_27052__$1 = temp__5735__auto___27051;
if(cljs.core.chunked_seq_QMARK_(seq__26938_27052__$1)){
var c__4556__auto___27053 = cljs.core.chunk_first(seq__26938_27052__$1);
var G__27054 = cljs.core.chunk_rest(seq__26938_27052__$1);
var G__27055 = c__4556__auto___27053;
var G__27056 = cljs.core.count(c__4556__auto___27053);
var G__27057 = (0);
seq__26938_27039 = G__27054;
chunk__26940_27040 = G__27055;
count__26941_27041 = G__27056;
i__26942_27042 = G__27057;
continue;
} else {
var vec__26986_27059 = cljs.core.first(seq__26938_27052__$1);
var k_27060 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26986_27059,(0),null);
var v_27061 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26986_27059,(1),null);
this$__$1.setRequestHeader(k_27060,v_27061);


var G__27069 = cljs.core.next(seq__26938_27052__$1);
var G__27070 = null;
var G__27071 = (0);
var G__27072 = (0);
seq__26938_27039 = G__27069;
chunk__26940_27040 = G__27070;
count__26941_27041 = G__27071;
i__26942_27042 = G__27072;
continue;
}
} else {
}
}
break;
}

this$__$1.send((function (){var or__4126__auto__ = body;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return "";
}
})());

return this$__$1;
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxRequest$ = cljs.core.PROTOCOL_SENTINEL);

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxRequest$_abort$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.abort();
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$ = cljs.core.PROTOCOL_SENTINEL);

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_body$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.response;
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_status$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.status;
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_status_text$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.statusText;
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_get_all_headers$arity$1 = (function (this$){
var this$__$1 = this;
return ajax.xml_http_request.process_headers(this$__$1.getAllResponseHeaders());
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_get_response_header$arity$2 = (function (this$,header){
var this$__$1 = this;
return this$__$1.getResponseHeader(header);
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_was_aborted$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),this$__$1.readyState);
}));

//# sourceMappingURL=ajax.xml_http_request.js.map
