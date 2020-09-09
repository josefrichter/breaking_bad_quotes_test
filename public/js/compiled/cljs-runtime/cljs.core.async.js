goog.provide('cljs.core.async');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__32318 = arguments.length;
switch (G__32318) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32325 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32325 = (function (f,blockable,meta32326){
this.f = f;
this.blockable = blockable;
this.meta32326 = meta32326;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32325.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32327,meta32326__$1){
var self__ = this;
var _32327__$1 = this;
return (new cljs.core.async.t_cljs$core$async32325(self__.f,self__.blockable,meta32326__$1));
}));

(cljs.core.async.t_cljs$core$async32325.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32327){
var self__ = this;
var _32327__$1 = this;
return self__.meta32326;
}));

(cljs.core.async.t_cljs$core$async32325.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32325.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async32325.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async32325.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async32325.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta32326","meta32326",-625814937,null)], null);
}));

(cljs.core.async.t_cljs$core$async32325.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32325.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32325");

(cljs.core.async.t_cljs$core$async32325.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async32325");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32325.
 */
cljs.core.async.__GT_t_cljs$core$async32325 = (function cljs$core$async$__GT_t_cljs$core$async32325(f__$1,blockable__$1,meta32326){
return (new cljs.core.async.t_cljs$core$async32325(f__$1,blockable__$1,meta32326));
});

}

return (new cljs.core.async.t_cljs$core$async32325(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__32355 = arguments.length;
switch (G__32355) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__32372 = arguments.length;
switch (G__32372) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__32388 = arguments.length;
switch (G__32388) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_35013 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_35013) : fn1.call(null,val_35013));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_35013) : fn1.call(null,val_35013));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__32407 = arguments.length;
switch (G__32407) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5733__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5733__auto__)){
var ret = temp__5733__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5733__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5733__auto__)){
var retb = temp__5733__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4613__auto___35015 = n;
var x_35016 = (0);
while(true){
if((x_35016 < n__4613__auto___35015)){
(a[x_35016] = x_35016);

var G__35017 = (x_35016 + (1));
x_35016 = G__35017;
continue;
} else {
}
break;
}

goog.array.shuffle(a);

return a;
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32425 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32425 = (function (flag,meta32426){
this.flag = flag;
this.meta32426 = meta32426;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32425.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32427,meta32426__$1){
var self__ = this;
var _32427__$1 = this;
return (new cljs.core.async.t_cljs$core$async32425(self__.flag,meta32426__$1));
}));

(cljs.core.async.t_cljs$core$async32425.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32427){
var self__ = this;
var _32427__$1 = this;
return self__.meta32426;
}));

(cljs.core.async.t_cljs$core$async32425.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32425.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async32425.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async32425.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async32425.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta32426","meta32426",2099204659,null)], null);
}));

(cljs.core.async.t_cljs$core$async32425.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32425.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32425");

(cljs.core.async.t_cljs$core$async32425.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async32425");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32425.
 */
cljs.core.async.__GT_t_cljs$core$async32425 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async32425(flag__$1,meta32426){
return (new cljs.core.async.t_cljs$core$async32425(flag__$1,meta32426));
});

}

return (new cljs.core.async.t_cljs$core$async32425(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32441 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32441 = (function (flag,cb,meta32442){
this.flag = flag;
this.cb = cb;
this.meta32442 = meta32442;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32441.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32443,meta32442__$1){
var self__ = this;
var _32443__$1 = this;
return (new cljs.core.async.t_cljs$core$async32441(self__.flag,self__.cb,meta32442__$1));
}));

(cljs.core.async.t_cljs$core$async32441.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32443){
var self__ = this;
var _32443__$1 = this;
return self__.meta32442;
}));

(cljs.core.async.t_cljs$core$async32441.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32441.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async32441.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async32441.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async32441.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta32442","meta32442",-422501927,null)], null);
}));

(cljs.core.async.t_cljs$core$async32441.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32441.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32441");

(cljs.core.async.t_cljs$core$async32441.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async32441");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32441.
 */
cljs.core.async.__GT_t_cljs$core$async32441 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async32441(flag__$1,cb__$1,meta32442){
return (new cljs.core.async.t_cljs$core$async32441(flag__$1,cb__$1,meta32442));
});

}

return (new cljs.core.async.t_cljs$core$async32441(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__32462_SHARP_){
var G__32473 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__32462_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__32473) : fret.call(null,G__32473));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__32463_SHARP_){
var G__32475 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__32463_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__32475) : fret.call(null,G__32475));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__4126__auto__ = wport;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return port;
}
})()], null));
} else {
var G__35028 = (i + (1));
i = G__35028;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4126__auto__ = ret;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5735__auto__ = (function (){var and__4115__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__4115__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__4115__auto__;
}
})();
if(cljs.core.truth_(temp__5735__auto__)){
var got = temp__5735__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___35030 = arguments.length;
var i__4737__auto___35031 = (0);
while(true){
if((i__4737__auto___35031 < len__4736__auto___35030)){
args__4742__auto__.push((arguments[i__4737__auto___35031]));

var G__35033 = (i__4737__auto___35031 + (1));
i__4737__auto___35031 = G__35033;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__32495){
var map__32496 = p__32495;
var map__32496__$1 = (((((!((map__32496 == null))))?(((((map__32496.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32496.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32496):map__32496);
var opts = map__32496__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq32489){
var G__32490 = cljs.core.first(seq32489);
var seq32489__$1 = cljs.core.next(seq32489);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__32490,seq32489__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__32534 = arguments.length;
switch (G__32534) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__32206__auto___35040 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32207__auto__ = (function (){var switch__31997__auto__ = (function (state_32590){
var state_val_32591 = (state_32590[(1)]);
if((state_val_32591 === (7))){
var inst_32576 = (state_32590[(2)]);
var state_32590__$1 = state_32590;
var statearr_32592_35041 = state_32590__$1;
(statearr_32592_35041[(2)] = inst_32576);

(statearr_32592_35041[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32591 === (1))){
var state_32590__$1 = state_32590;
var statearr_32593_35042 = state_32590__$1;
(statearr_32593_35042[(2)] = null);

(statearr_32593_35042[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32591 === (4))){
var inst_32556 = (state_32590[(7)]);
var inst_32556__$1 = (state_32590[(2)]);
var inst_32557 = (inst_32556__$1 == null);
var state_32590__$1 = (function (){var statearr_32594 = state_32590;
(statearr_32594[(7)] = inst_32556__$1);

return statearr_32594;
})();
if(cljs.core.truth_(inst_32557)){
var statearr_32595_35044 = state_32590__$1;
(statearr_32595_35044[(1)] = (5));

} else {
var statearr_32596_35045 = state_32590__$1;
(statearr_32596_35045[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32591 === (13))){
var state_32590__$1 = state_32590;
var statearr_32598_35047 = state_32590__$1;
(statearr_32598_35047[(2)] = null);

(statearr_32598_35047[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32591 === (6))){
var inst_32556 = (state_32590[(7)]);
var state_32590__$1 = state_32590;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32590__$1,(11),to,inst_32556);
} else {
if((state_val_32591 === (3))){
var inst_32578 = (state_32590[(2)]);
var state_32590__$1 = state_32590;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32590__$1,inst_32578);
} else {
if((state_val_32591 === (12))){
var state_32590__$1 = state_32590;
var statearr_32600_35048 = state_32590__$1;
(statearr_32600_35048[(2)] = null);

(statearr_32600_35048[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32591 === (2))){
var state_32590__$1 = state_32590;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32590__$1,(4),from);
} else {
if((state_val_32591 === (11))){
var inst_32566 = (state_32590[(2)]);
var state_32590__$1 = state_32590;
if(cljs.core.truth_(inst_32566)){
var statearr_32605_35049 = state_32590__$1;
(statearr_32605_35049[(1)] = (12));

} else {
var statearr_32606_35050 = state_32590__$1;
(statearr_32606_35050[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32591 === (9))){
var state_32590__$1 = state_32590;
var statearr_32607_35052 = state_32590__$1;
(statearr_32607_35052[(2)] = null);

(statearr_32607_35052[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32591 === (5))){
var state_32590__$1 = state_32590;
if(cljs.core.truth_(close_QMARK_)){
var statearr_32608_35054 = state_32590__$1;
(statearr_32608_35054[(1)] = (8));

} else {
var statearr_32609_35055 = state_32590__$1;
(statearr_32609_35055[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32591 === (14))){
var inst_32574 = (state_32590[(2)]);
var state_32590__$1 = state_32590;
var statearr_32610_35056 = state_32590__$1;
(statearr_32610_35056[(2)] = inst_32574);

(statearr_32610_35056[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32591 === (10))){
var inst_32563 = (state_32590[(2)]);
var state_32590__$1 = state_32590;
var statearr_32611_35057 = state_32590__$1;
(statearr_32611_35057[(2)] = inst_32563);

(statearr_32611_35057[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32591 === (8))){
var inst_32560 = cljs.core.async.close_BANG_(to);
var state_32590__$1 = state_32590;
var statearr_32612_35058 = state_32590__$1;
(statearr_32612_35058[(2)] = inst_32560);

(statearr_32612_35058[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__31998__auto__ = null;
var cljs$core$async$state_machine__31998__auto____0 = (function (){
var statearr_32613 = [null,null,null,null,null,null,null,null];
(statearr_32613[(0)] = cljs$core$async$state_machine__31998__auto__);

(statearr_32613[(1)] = (1));

return statearr_32613;
});
var cljs$core$async$state_machine__31998__auto____1 = (function (state_32590){
while(true){
var ret_value__31999__auto__ = (function (){try{while(true){
var result__32000__auto__ = switch__31997__auto__(state_32590);
if(cljs.core.keyword_identical_QMARK_(result__32000__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32000__auto__;
}
break;
}
}catch (e32614){var ex__32001__auto__ = e32614;
var statearr_32615_35060 = state_32590;
(statearr_32615_35060[(2)] = ex__32001__auto__);


if(cljs.core.seq((state_32590[(4)]))){
var statearr_32616_35065 = state_32590;
(statearr_32616_35065[(1)] = cljs.core.first((state_32590[(4)])));

} else {
throw ex__32001__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__31999__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35066 = state_32590;
state_32590 = G__35066;
continue;
} else {
return ret_value__31999__auto__;
}
break;
}
});
cljs$core$async$state_machine__31998__auto__ = function(state_32590){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31998__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31998__auto____1.call(this,state_32590);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__31998__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31998__auto____0;
cljs$core$async$state_machine__31998__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31998__auto____1;
return cljs$core$async$state_machine__31998__auto__;
})()
})();
var state__32208__auto__ = (function (){var statearr_32617 = f__32207__auto__();
(statearr_32617[(6)] = c__32206__auto___35040);

return statearr_32617;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32208__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process = (function (p__32622){
var vec__32623 = p__32622;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32623,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32623,(1),null);
var job = vec__32623;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__32206__auto___35069 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32207__auto__ = (function (){var switch__31997__auto__ = (function (state_32630){
var state_val_32631 = (state_32630[(1)]);
if((state_val_32631 === (1))){
var state_32630__$1 = state_32630;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32630__$1,(2),res,v);
} else {
if((state_val_32631 === (2))){
var inst_32627 = (state_32630[(2)]);
var inst_32628 = cljs.core.async.close_BANG_(res);
var state_32630__$1 = (function (){var statearr_32642 = state_32630;
(statearr_32642[(7)] = inst_32627);

return statearr_32642;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_32630__$1,inst_32628);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__31998__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__31998__auto____0 = (function (){
var statearr_32650 = [null,null,null,null,null,null,null,null];
(statearr_32650[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__31998__auto__);

(statearr_32650[(1)] = (1));

return statearr_32650;
});
var cljs$core$async$pipeline_STAR__$_state_machine__31998__auto____1 = (function (state_32630){
while(true){
var ret_value__31999__auto__ = (function (){try{while(true){
var result__32000__auto__ = switch__31997__auto__(state_32630);
if(cljs.core.keyword_identical_QMARK_(result__32000__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32000__auto__;
}
break;
}
}catch (e32655){var ex__32001__auto__ = e32655;
var statearr_32660_35074 = state_32630;
(statearr_32660_35074[(2)] = ex__32001__auto__);


if(cljs.core.seq((state_32630[(4)]))){
var statearr_32661_35075 = state_32630;
(statearr_32661_35075[(1)] = cljs.core.first((state_32630[(4)])));

} else {
throw ex__32001__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__31999__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35076 = state_32630;
state_32630 = G__35076;
continue;
} else {
return ret_value__31999__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__31998__auto__ = function(state_32630){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__31998__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__31998__auto____1.call(this,state_32630);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__31998__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__31998__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__31998__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__31998__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__31998__auto__;
})()
})();
var state__32208__auto__ = (function (){var statearr_32669 = f__32207__auto__();
(statearr_32669[(6)] = c__32206__auto___35069);

return statearr_32669;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32208__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__32677){
var vec__32681 = p__32677;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32681,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32681,(1),null);
var job = vec__32681;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__4613__auto___35077 = n;
var __35078 = (0);
while(true){
if((__35078 < n__4613__auto___35077)){
var G__32688_35079 = type;
var G__32688_35080__$1 = (((G__32688_35079 instanceof cljs.core.Keyword))?G__32688_35079.fqn:null);
switch (G__32688_35080__$1) {
case "compute":
var c__32206__auto___35082 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__35078,c__32206__auto___35082,G__32688_35079,G__32688_35080__$1,n__4613__auto___35077,jobs,results,process,async){
return (function (){
var f__32207__auto__ = (function (){var switch__31997__auto__ = ((function (__35078,c__32206__auto___35082,G__32688_35079,G__32688_35080__$1,n__4613__auto___35077,jobs,results,process,async){
return (function (state_32701){
var state_val_32702 = (state_32701[(1)]);
if((state_val_32702 === (1))){
var state_32701__$1 = state_32701;
var statearr_32704_35084 = state_32701__$1;
(statearr_32704_35084[(2)] = null);

(statearr_32704_35084[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32702 === (2))){
var state_32701__$1 = state_32701;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32701__$1,(4),jobs);
} else {
if((state_val_32702 === (3))){
var inst_32699 = (state_32701[(2)]);
var state_32701__$1 = state_32701;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32701__$1,inst_32699);
} else {
if((state_val_32702 === (4))){
var inst_32691 = (state_32701[(2)]);
var inst_32692 = process(inst_32691);
var state_32701__$1 = state_32701;
if(cljs.core.truth_(inst_32692)){
var statearr_32705_35085 = state_32701__$1;
(statearr_32705_35085[(1)] = (5));

} else {
var statearr_32706_35086 = state_32701__$1;
(statearr_32706_35086[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32702 === (5))){
var state_32701__$1 = state_32701;
var statearr_32707_35087 = state_32701__$1;
(statearr_32707_35087[(2)] = null);

(statearr_32707_35087[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32702 === (6))){
var state_32701__$1 = state_32701;
var statearr_32708_35090 = state_32701__$1;
(statearr_32708_35090[(2)] = null);

(statearr_32708_35090[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32702 === (7))){
var inst_32697 = (state_32701[(2)]);
var state_32701__$1 = state_32701;
var statearr_32711_35091 = state_32701__$1;
(statearr_32711_35091[(2)] = inst_32697);

(statearr_32711_35091[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__35078,c__32206__auto___35082,G__32688_35079,G__32688_35080__$1,n__4613__auto___35077,jobs,results,process,async))
;
return ((function (__35078,switch__31997__auto__,c__32206__auto___35082,G__32688_35079,G__32688_35080__$1,n__4613__auto___35077,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__31998__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__31998__auto____0 = (function (){
var statearr_32715 = [null,null,null,null,null,null,null];
(statearr_32715[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__31998__auto__);

(statearr_32715[(1)] = (1));

return statearr_32715;
});
var cljs$core$async$pipeline_STAR__$_state_machine__31998__auto____1 = (function (state_32701){
while(true){
var ret_value__31999__auto__ = (function (){try{while(true){
var result__32000__auto__ = switch__31997__auto__(state_32701);
if(cljs.core.keyword_identical_QMARK_(result__32000__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32000__auto__;
}
break;
}
}catch (e32717){var ex__32001__auto__ = e32717;
var statearr_32718_35096 = state_32701;
(statearr_32718_35096[(2)] = ex__32001__auto__);


if(cljs.core.seq((state_32701[(4)]))){
var statearr_32719_35097 = state_32701;
(statearr_32719_35097[(1)] = cljs.core.first((state_32701[(4)])));

} else {
throw ex__32001__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__31999__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35098 = state_32701;
state_32701 = G__35098;
continue;
} else {
return ret_value__31999__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__31998__auto__ = function(state_32701){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__31998__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__31998__auto____1.call(this,state_32701);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__31998__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__31998__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__31998__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__31998__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__31998__auto__;
})()
;})(__35078,switch__31997__auto__,c__32206__auto___35082,G__32688_35079,G__32688_35080__$1,n__4613__auto___35077,jobs,results,process,async))
})();
var state__32208__auto__ = (function (){var statearr_32720 = f__32207__auto__();
(statearr_32720[(6)] = c__32206__auto___35082);

return statearr_32720;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32208__auto__);
});})(__35078,c__32206__auto___35082,G__32688_35079,G__32688_35080__$1,n__4613__auto___35077,jobs,results,process,async))
);


break;
case "async":
var c__32206__auto___35099 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__35078,c__32206__auto___35099,G__32688_35079,G__32688_35080__$1,n__4613__auto___35077,jobs,results,process,async){
return (function (){
var f__32207__auto__ = (function (){var switch__31997__auto__ = ((function (__35078,c__32206__auto___35099,G__32688_35079,G__32688_35080__$1,n__4613__auto___35077,jobs,results,process,async){
return (function (state_32733){
var state_val_32734 = (state_32733[(1)]);
if((state_val_32734 === (1))){
var state_32733__$1 = state_32733;
var statearr_32738_35101 = state_32733__$1;
(statearr_32738_35101[(2)] = null);

(statearr_32738_35101[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32734 === (2))){
var state_32733__$1 = state_32733;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32733__$1,(4),jobs);
} else {
if((state_val_32734 === (3))){
var inst_32731 = (state_32733[(2)]);
var state_32733__$1 = state_32733;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32733__$1,inst_32731);
} else {
if((state_val_32734 === (4))){
var inst_32723 = (state_32733[(2)]);
var inst_32724 = async(inst_32723);
var state_32733__$1 = state_32733;
if(cljs.core.truth_(inst_32724)){
var statearr_32746_35102 = state_32733__$1;
(statearr_32746_35102[(1)] = (5));

} else {
var statearr_32747_35103 = state_32733__$1;
(statearr_32747_35103[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32734 === (5))){
var state_32733__$1 = state_32733;
var statearr_32748_35105 = state_32733__$1;
(statearr_32748_35105[(2)] = null);

(statearr_32748_35105[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32734 === (6))){
var state_32733__$1 = state_32733;
var statearr_32752_35106 = state_32733__$1;
(statearr_32752_35106[(2)] = null);

(statearr_32752_35106[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32734 === (7))){
var inst_32729 = (state_32733[(2)]);
var state_32733__$1 = state_32733;
var statearr_32753_35109 = state_32733__$1;
(statearr_32753_35109[(2)] = inst_32729);

(statearr_32753_35109[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__35078,c__32206__auto___35099,G__32688_35079,G__32688_35080__$1,n__4613__auto___35077,jobs,results,process,async))
;
return ((function (__35078,switch__31997__auto__,c__32206__auto___35099,G__32688_35079,G__32688_35080__$1,n__4613__auto___35077,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__31998__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__31998__auto____0 = (function (){
var statearr_32757 = [null,null,null,null,null,null,null];
(statearr_32757[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__31998__auto__);

(statearr_32757[(1)] = (1));

return statearr_32757;
});
var cljs$core$async$pipeline_STAR__$_state_machine__31998__auto____1 = (function (state_32733){
while(true){
var ret_value__31999__auto__ = (function (){try{while(true){
var result__32000__auto__ = switch__31997__auto__(state_32733);
if(cljs.core.keyword_identical_QMARK_(result__32000__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32000__auto__;
}
break;
}
}catch (e32758){var ex__32001__auto__ = e32758;
var statearr_32759_35114 = state_32733;
(statearr_32759_35114[(2)] = ex__32001__auto__);


if(cljs.core.seq((state_32733[(4)]))){
var statearr_32760_35116 = state_32733;
(statearr_32760_35116[(1)] = cljs.core.first((state_32733[(4)])));

} else {
throw ex__32001__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__31999__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35117 = state_32733;
state_32733 = G__35117;
continue;
} else {
return ret_value__31999__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__31998__auto__ = function(state_32733){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__31998__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__31998__auto____1.call(this,state_32733);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__31998__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__31998__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__31998__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__31998__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__31998__auto__;
})()
;})(__35078,switch__31997__auto__,c__32206__auto___35099,G__32688_35079,G__32688_35080__$1,n__4613__auto___35077,jobs,results,process,async))
})();
var state__32208__auto__ = (function (){var statearr_32764 = f__32207__auto__();
(statearr_32764[(6)] = c__32206__auto___35099);

return statearr_32764;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32208__auto__);
});})(__35078,c__32206__auto___35099,G__32688_35079,G__32688_35080__$1,n__4613__auto___35077,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__32688_35080__$1)].join('')));

}

var G__35118 = (__35078 + (1));
__35078 = G__35118;
continue;
} else {
}
break;
}

var c__32206__auto___35119 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32207__auto__ = (function (){var switch__31997__auto__ = (function (state_32788){
var state_val_32789 = (state_32788[(1)]);
if((state_val_32789 === (7))){
var inst_32784 = (state_32788[(2)]);
var state_32788__$1 = state_32788;
var statearr_32793_35120 = state_32788__$1;
(statearr_32793_35120[(2)] = inst_32784);

(statearr_32793_35120[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32789 === (1))){
var state_32788__$1 = state_32788;
var statearr_32797_35121 = state_32788__$1;
(statearr_32797_35121[(2)] = null);

(statearr_32797_35121[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32789 === (4))){
var inst_32768 = (state_32788[(7)]);
var inst_32768__$1 = (state_32788[(2)]);
var inst_32769 = (inst_32768__$1 == null);
var state_32788__$1 = (function (){var statearr_32798 = state_32788;
(statearr_32798[(7)] = inst_32768__$1);

return statearr_32798;
})();
if(cljs.core.truth_(inst_32769)){
var statearr_32800_35123 = state_32788__$1;
(statearr_32800_35123[(1)] = (5));

} else {
var statearr_32801_35124 = state_32788__$1;
(statearr_32801_35124[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32789 === (6))){
var inst_32773 = (state_32788[(8)]);
var inst_32768 = (state_32788[(7)]);
var inst_32773__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_32774 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_32776 = [inst_32768,inst_32773__$1];
var inst_32777 = (new cljs.core.PersistentVector(null,2,(5),inst_32774,inst_32776,null));
var state_32788__$1 = (function (){var statearr_32803 = state_32788;
(statearr_32803[(8)] = inst_32773__$1);

return statearr_32803;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32788__$1,(8),jobs,inst_32777);
} else {
if((state_val_32789 === (3))){
var inst_32786 = (state_32788[(2)]);
var state_32788__$1 = state_32788;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32788__$1,inst_32786);
} else {
if((state_val_32789 === (2))){
var state_32788__$1 = state_32788;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32788__$1,(4),from);
} else {
if((state_val_32789 === (9))){
var inst_32781 = (state_32788[(2)]);
var state_32788__$1 = (function (){var statearr_32804 = state_32788;
(statearr_32804[(9)] = inst_32781);

return statearr_32804;
})();
var statearr_32805_35132 = state_32788__$1;
(statearr_32805_35132[(2)] = null);

(statearr_32805_35132[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32789 === (5))){
var inst_32771 = cljs.core.async.close_BANG_(jobs);
var state_32788__$1 = state_32788;
var statearr_32806_35136 = state_32788__$1;
(statearr_32806_35136[(2)] = inst_32771);

(statearr_32806_35136[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32789 === (8))){
var inst_32773 = (state_32788[(8)]);
var inst_32779 = (state_32788[(2)]);
var state_32788__$1 = (function (){var statearr_32808 = state_32788;
(statearr_32808[(10)] = inst_32779);

return statearr_32808;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32788__$1,(9),results,inst_32773);
} else {
return null;
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__31998__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__31998__auto____0 = (function (){
var statearr_32809 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_32809[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__31998__auto__);

(statearr_32809[(1)] = (1));

return statearr_32809;
});
var cljs$core$async$pipeline_STAR__$_state_machine__31998__auto____1 = (function (state_32788){
while(true){
var ret_value__31999__auto__ = (function (){try{while(true){
var result__32000__auto__ = switch__31997__auto__(state_32788);
if(cljs.core.keyword_identical_QMARK_(result__32000__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32000__auto__;
}
break;
}
}catch (e32810){var ex__32001__auto__ = e32810;
var statearr_32811_35145 = state_32788;
(statearr_32811_35145[(2)] = ex__32001__auto__);


if(cljs.core.seq((state_32788[(4)]))){
var statearr_32812_35146 = state_32788;
(statearr_32812_35146[(1)] = cljs.core.first((state_32788[(4)])));

} else {
throw ex__32001__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__31999__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35147 = state_32788;
state_32788 = G__35147;
continue;
} else {
return ret_value__31999__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__31998__auto__ = function(state_32788){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__31998__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__31998__auto____1.call(this,state_32788);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__31998__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__31998__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__31998__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__31998__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__31998__auto__;
})()
})();
var state__32208__auto__ = (function (){var statearr_32814 = f__32207__auto__();
(statearr_32814[(6)] = c__32206__auto___35119);

return statearr_32814;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32208__auto__);
}));


var c__32206__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32207__auto__ = (function (){var switch__31997__auto__ = (function (state_32853){
var state_val_32854 = (state_32853[(1)]);
if((state_val_32854 === (7))){
var inst_32849 = (state_32853[(2)]);
var state_32853__$1 = state_32853;
var statearr_32858_35155 = state_32853__$1;
(statearr_32858_35155[(2)] = inst_32849);

(statearr_32858_35155[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32854 === (20))){
var state_32853__$1 = state_32853;
var statearr_32859_35159 = state_32853__$1;
(statearr_32859_35159[(2)] = null);

(statearr_32859_35159[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32854 === (1))){
var state_32853__$1 = state_32853;
var statearr_32860_35160 = state_32853__$1;
(statearr_32860_35160[(2)] = null);

(statearr_32860_35160[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32854 === (4))){
var inst_32818 = (state_32853[(7)]);
var inst_32818__$1 = (state_32853[(2)]);
var inst_32819 = (inst_32818__$1 == null);
var state_32853__$1 = (function (){var statearr_32864 = state_32853;
(statearr_32864[(7)] = inst_32818__$1);

return statearr_32864;
})();
if(cljs.core.truth_(inst_32819)){
var statearr_32866_35164 = state_32853__$1;
(statearr_32866_35164[(1)] = (5));

} else {
var statearr_32867_35165 = state_32853__$1;
(statearr_32867_35165[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32854 === (15))){
var inst_32831 = (state_32853[(8)]);
var state_32853__$1 = state_32853;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32853__$1,(18),to,inst_32831);
} else {
if((state_val_32854 === (21))){
var inst_32844 = (state_32853[(2)]);
var state_32853__$1 = state_32853;
var statearr_32868_35169 = state_32853__$1;
(statearr_32868_35169[(2)] = inst_32844);

(statearr_32868_35169[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32854 === (13))){
var inst_32846 = (state_32853[(2)]);
var state_32853__$1 = (function (){var statearr_32871 = state_32853;
(statearr_32871[(9)] = inst_32846);

return statearr_32871;
})();
var statearr_32872_35170 = state_32853__$1;
(statearr_32872_35170[(2)] = null);

(statearr_32872_35170[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32854 === (6))){
var inst_32818 = (state_32853[(7)]);
var state_32853__$1 = state_32853;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32853__$1,(11),inst_32818);
} else {
if((state_val_32854 === (17))){
var inst_32839 = (state_32853[(2)]);
var state_32853__$1 = state_32853;
if(cljs.core.truth_(inst_32839)){
var statearr_32875_35172 = state_32853__$1;
(statearr_32875_35172[(1)] = (19));

} else {
var statearr_32876_35173 = state_32853__$1;
(statearr_32876_35173[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32854 === (3))){
var inst_32851 = (state_32853[(2)]);
var state_32853__$1 = state_32853;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32853__$1,inst_32851);
} else {
if((state_val_32854 === (12))){
var inst_32828 = (state_32853[(10)]);
var state_32853__$1 = state_32853;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32853__$1,(14),inst_32828);
} else {
if((state_val_32854 === (2))){
var state_32853__$1 = state_32853;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32853__$1,(4),results);
} else {
if((state_val_32854 === (19))){
var state_32853__$1 = state_32853;
var statearr_32878_35174 = state_32853__$1;
(statearr_32878_35174[(2)] = null);

(statearr_32878_35174[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32854 === (11))){
var inst_32828 = (state_32853[(2)]);
var state_32853__$1 = (function (){var statearr_32880 = state_32853;
(statearr_32880[(10)] = inst_32828);

return statearr_32880;
})();
var statearr_32881_35175 = state_32853__$1;
(statearr_32881_35175[(2)] = null);

(statearr_32881_35175[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32854 === (9))){
var state_32853__$1 = state_32853;
var statearr_32884_35176 = state_32853__$1;
(statearr_32884_35176[(2)] = null);

(statearr_32884_35176[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32854 === (5))){
var state_32853__$1 = state_32853;
if(cljs.core.truth_(close_QMARK_)){
var statearr_32885_35177 = state_32853__$1;
(statearr_32885_35177[(1)] = (8));

} else {
var statearr_32887_35178 = state_32853__$1;
(statearr_32887_35178[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32854 === (14))){
var inst_32831 = (state_32853[(8)]);
var inst_32831__$1 = (state_32853[(2)]);
var inst_32832 = (inst_32831__$1 == null);
var inst_32833 = cljs.core.not(inst_32832);
var state_32853__$1 = (function (){var statearr_32889 = state_32853;
(statearr_32889[(8)] = inst_32831__$1);

return statearr_32889;
})();
if(inst_32833){
var statearr_32890_35179 = state_32853__$1;
(statearr_32890_35179[(1)] = (15));

} else {
var statearr_32891_35180 = state_32853__$1;
(statearr_32891_35180[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32854 === (16))){
var state_32853__$1 = state_32853;
var statearr_32895_35181 = state_32853__$1;
(statearr_32895_35181[(2)] = false);

(statearr_32895_35181[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32854 === (10))){
var inst_32825 = (state_32853[(2)]);
var state_32853__$1 = state_32853;
var statearr_32896_35182 = state_32853__$1;
(statearr_32896_35182[(2)] = inst_32825);

(statearr_32896_35182[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32854 === (18))){
var inst_32836 = (state_32853[(2)]);
var state_32853__$1 = state_32853;
var statearr_32897_35183 = state_32853__$1;
(statearr_32897_35183[(2)] = inst_32836);

(statearr_32897_35183[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32854 === (8))){
var inst_32822 = cljs.core.async.close_BANG_(to);
var state_32853__$1 = state_32853;
var statearr_32899_35184 = state_32853__$1;
(statearr_32899_35184[(2)] = inst_32822);

(statearr_32899_35184[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__31998__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__31998__auto____0 = (function (){
var statearr_32900 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_32900[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__31998__auto__);

(statearr_32900[(1)] = (1));

return statearr_32900;
});
var cljs$core$async$pipeline_STAR__$_state_machine__31998__auto____1 = (function (state_32853){
while(true){
var ret_value__31999__auto__ = (function (){try{while(true){
var result__32000__auto__ = switch__31997__auto__(state_32853);
if(cljs.core.keyword_identical_QMARK_(result__32000__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32000__auto__;
}
break;
}
}catch (e32901){var ex__32001__auto__ = e32901;
var statearr_32902_35185 = state_32853;
(statearr_32902_35185[(2)] = ex__32001__auto__);


if(cljs.core.seq((state_32853[(4)]))){
var statearr_32903_35186 = state_32853;
(statearr_32903_35186[(1)] = cljs.core.first((state_32853[(4)])));

} else {
throw ex__32001__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__31999__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35187 = state_32853;
state_32853 = G__35187;
continue;
} else {
return ret_value__31999__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__31998__auto__ = function(state_32853){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__31998__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__31998__auto____1.call(this,state_32853);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__31998__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__31998__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__31998__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__31998__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__31998__auto__;
})()
})();
var state__32208__auto__ = (function (){var statearr_32912 = f__32207__auto__();
(statearr_32912[(6)] = c__32206__auto__);

return statearr_32912;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32208__auto__);
}));

return c__32206__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__32929 = arguments.length;
switch (G__32929) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__32973 = arguments.length;
switch (G__32973) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__32985 = arguments.length;
switch (G__32985) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__32206__auto___35206 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32207__auto__ = (function (){var switch__31997__auto__ = (function (state_33013){
var state_val_33014 = (state_33013[(1)]);
if((state_val_33014 === (7))){
var inst_33009 = (state_33013[(2)]);
var state_33013__$1 = state_33013;
var statearr_33017_35207 = state_33013__$1;
(statearr_33017_35207[(2)] = inst_33009);

(statearr_33017_35207[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33014 === (1))){
var state_33013__$1 = state_33013;
var statearr_33018_35208 = state_33013__$1;
(statearr_33018_35208[(2)] = null);

(statearr_33018_35208[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33014 === (4))){
var inst_32990 = (state_33013[(7)]);
var inst_32990__$1 = (state_33013[(2)]);
var inst_32991 = (inst_32990__$1 == null);
var state_33013__$1 = (function (){var statearr_33019 = state_33013;
(statearr_33019[(7)] = inst_32990__$1);

return statearr_33019;
})();
if(cljs.core.truth_(inst_32991)){
var statearr_33020_35213 = state_33013__$1;
(statearr_33020_35213[(1)] = (5));

} else {
var statearr_33022_35214 = state_33013__$1;
(statearr_33022_35214[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33014 === (13))){
var state_33013__$1 = state_33013;
var statearr_33026_35215 = state_33013__$1;
(statearr_33026_35215[(2)] = null);

(statearr_33026_35215[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33014 === (6))){
var inst_32990 = (state_33013[(7)]);
var inst_32996 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_32990) : p.call(null,inst_32990));
var state_33013__$1 = state_33013;
if(cljs.core.truth_(inst_32996)){
var statearr_33027_35220 = state_33013__$1;
(statearr_33027_35220[(1)] = (9));

} else {
var statearr_33029_35221 = state_33013__$1;
(statearr_33029_35221[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33014 === (3))){
var inst_33011 = (state_33013[(2)]);
var state_33013__$1 = state_33013;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33013__$1,inst_33011);
} else {
if((state_val_33014 === (12))){
var state_33013__$1 = state_33013;
var statearr_33033_35224 = state_33013__$1;
(statearr_33033_35224[(2)] = null);

(statearr_33033_35224[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33014 === (2))){
var state_33013__$1 = state_33013;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33013__$1,(4),ch);
} else {
if((state_val_33014 === (11))){
var inst_32990 = (state_33013[(7)]);
var inst_33000 = (state_33013[(2)]);
var state_33013__$1 = state_33013;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33013__$1,(8),inst_33000,inst_32990);
} else {
if((state_val_33014 === (9))){
var state_33013__$1 = state_33013;
var statearr_33038_35227 = state_33013__$1;
(statearr_33038_35227[(2)] = tc);

(statearr_33038_35227[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33014 === (5))){
var inst_32993 = cljs.core.async.close_BANG_(tc);
var inst_32994 = cljs.core.async.close_BANG_(fc);
var state_33013__$1 = (function (){var statearr_33041 = state_33013;
(statearr_33041[(8)] = inst_32993);

return statearr_33041;
})();
var statearr_33046_35236 = state_33013__$1;
(statearr_33046_35236[(2)] = inst_32994);

(statearr_33046_35236[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33014 === (14))){
var inst_33007 = (state_33013[(2)]);
var state_33013__$1 = state_33013;
var statearr_33048_35237 = state_33013__$1;
(statearr_33048_35237[(2)] = inst_33007);

(statearr_33048_35237[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33014 === (10))){
var state_33013__$1 = state_33013;
var statearr_33053_35244 = state_33013__$1;
(statearr_33053_35244[(2)] = fc);

(statearr_33053_35244[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33014 === (8))){
var inst_33002 = (state_33013[(2)]);
var state_33013__$1 = state_33013;
if(cljs.core.truth_(inst_33002)){
var statearr_33061_35246 = state_33013__$1;
(statearr_33061_35246[(1)] = (12));

} else {
var statearr_33066_35249 = state_33013__$1;
(statearr_33066_35249[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__31998__auto__ = null;
var cljs$core$async$state_machine__31998__auto____0 = (function (){
var statearr_33072 = [null,null,null,null,null,null,null,null,null];
(statearr_33072[(0)] = cljs$core$async$state_machine__31998__auto__);

(statearr_33072[(1)] = (1));

return statearr_33072;
});
var cljs$core$async$state_machine__31998__auto____1 = (function (state_33013){
while(true){
var ret_value__31999__auto__ = (function (){try{while(true){
var result__32000__auto__ = switch__31997__auto__(state_33013);
if(cljs.core.keyword_identical_QMARK_(result__32000__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32000__auto__;
}
break;
}
}catch (e33073){var ex__32001__auto__ = e33073;
var statearr_33074_35250 = state_33013;
(statearr_33074_35250[(2)] = ex__32001__auto__);


if(cljs.core.seq((state_33013[(4)]))){
var statearr_33075_35251 = state_33013;
(statearr_33075_35251[(1)] = cljs.core.first((state_33013[(4)])));

} else {
throw ex__32001__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__31999__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35252 = state_33013;
state_33013 = G__35252;
continue;
} else {
return ret_value__31999__auto__;
}
break;
}
});
cljs$core$async$state_machine__31998__auto__ = function(state_33013){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31998__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31998__auto____1.call(this,state_33013);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__31998__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31998__auto____0;
cljs$core$async$state_machine__31998__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31998__auto____1;
return cljs$core$async$state_machine__31998__auto__;
})()
})();
var state__32208__auto__ = (function (){var statearr_33079 = f__32207__auto__();
(statearr_33079[(6)] = c__32206__auto___35206);

return statearr_33079;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32208__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__32206__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32207__auto__ = (function (){var switch__31997__auto__ = (function (state_33132){
var state_val_33133 = (state_33132[(1)]);
if((state_val_33133 === (7))){
var inst_33124 = (state_33132[(2)]);
var state_33132__$1 = state_33132;
var statearr_33140_35253 = state_33132__$1;
(statearr_33140_35253[(2)] = inst_33124);

(statearr_33140_35253[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33133 === (1))){
var inst_33089 = init;
var inst_33091 = inst_33089;
var state_33132__$1 = (function (){var statearr_33141 = state_33132;
(statearr_33141[(7)] = inst_33091);

return statearr_33141;
})();
var statearr_33146_35260 = state_33132__$1;
(statearr_33146_35260[(2)] = null);

(statearr_33146_35260[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33133 === (4))){
var inst_33098 = (state_33132[(8)]);
var inst_33098__$1 = (state_33132[(2)]);
var inst_33108 = (inst_33098__$1 == null);
var state_33132__$1 = (function (){var statearr_33152 = state_33132;
(statearr_33152[(8)] = inst_33098__$1);

return statearr_33152;
})();
if(cljs.core.truth_(inst_33108)){
var statearr_33154_35265 = state_33132__$1;
(statearr_33154_35265[(1)] = (5));

} else {
var statearr_33157_35266 = state_33132__$1;
(statearr_33157_35266[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33133 === (6))){
var inst_33112 = (state_33132[(9)]);
var inst_33091 = (state_33132[(7)]);
var inst_33098 = (state_33132[(8)]);
var inst_33112__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_33091,inst_33098) : f.call(null,inst_33091,inst_33098));
var inst_33114 = cljs.core.reduced_QMARK_(inst_33112__$1);
var state_33132__$1 = (function (){var statearr_33169 = state_33132;
(statearr_33169[(9)] = inst_33112__$1);

return statearr_33169;
})();
if(inst_33114){
var statearr_33170_35267 = state_33132__$1;
(statearr_33170_35267[(1)] = (8));

} else {
var statearr_33171_35268 = state_33132__$1;
(statearr_33171_35268[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33133 === (3))){
var inst_33126 = (state_33132[(2)]);
var state_33132__$1 = state_33132;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33132__$1,inst_33126);
} else {
if((state_val_33133 === (2))){
var state_33132__$1 = state_33132;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33132__$1,(4),ch);
} else {
if((state_val_33133 === (9))){
var inst_33112 = (state_33132[(9)]);
var inst_33091 = inst_33112;
var state_33132__$1 = (function (){var statearr_33174 = state_33132;
(statearr_33174[(7)] = inst_33091);

return statearr_33174;
})();
var statearr_33175_35269 = state_33132__$1;
(statearr_33175_35269[(2)] = null);

(statearr_33175_35269[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33133 === (5))){
var inst_33091 = (state_33132[(7)]);
var state_33132__$1 = state_33132;
var statearr_33181_35270 = state_33132__$1;
(statearr_33181_35270[(2)] = inst_33091);

(statearr_33181_35270[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33133 === (10))){
var inst_33122 = (state_33132[(2)]);
var state_33132__$1 = state_33132;
var statearr_33182_35278 = state_33132__$1;
(statearr_33182_35278[(2)] = inst_33122);

(statearr_33182_35278[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33133 === (8))){
var inst_33112 = (state_33132[(9)]);
var inst_33116 = cljs.core.deref(inst_33112);
var state_33132__$1 = state_33132;
var statearr_33185_35279 = state_33132__$1;
(statearr_33185_35279[(2)] = inst_33116);

(statearr_33185_35279[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$reduce_$_state_machine__31998__auto__ = null;
var cljs$core$async$reduce_$_state_machine__31998__auto____0 = (function (){
var statearr_33188 = [null,null,null,null,null,null,null,null,null,null];
(statearr_33188[(0)] = cljs$core$async$reduce_$_state_machine__31998__auto__);

(statearr_33188[(1)] = (1));

return statearr_33188;
});
var cljs$core$async$reduce_$_state_machine__31998__auto____1 = (function (state_33132){
while(true){
var ret_value__31999__auto__ = (function (){try{while(true){
var result__32000__auto__ = switch__31997__auto__(state_33132);
if(cljs.core.keyword_identical_QMARK_(result__32000__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32000__auto__;
}
break;
}
}catch (e33190){var ex__32001__auto__ = e33190;
var statearr_33191_35280 = state_33132;
(statearr_33191_35280[(2)] = ex__32001__auto__);


if(cljs.core.seq((state_33132[(4)]))){
var statearr_33192_35281 = state_33132;
(statearr_33192_35281[(1)] = cljs.core.first((state_33132[(4)])));

} else {
throw ex__32001__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__31999__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35282 = state_33132;
state_33132 = G__35282;
continue;
} else {
return ret_value__31999__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__31998__auto__ = function(state_33132){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__31998__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__31998__auto____1.call(this,state_33132);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__31998__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__31998__auto____0;
cljs$core$async$reduce_$_state_machine__31998__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__31998__auto____1;
return cljs$core$async$reduce_$_state_machine__31998__auto__;
})()
})();
var state__32208__auto__ = (function (){var statearr_33194 = f__32207__auto__();
(statearr_33194[(6)] = c__32206__auto__);

return statearr_33194;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32208__auto__);
}));

return c__32206__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__32206__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32207__auto__ = (function (){var switch__31997__auto__ = (function (state_33203){
var state_val_33204 = (state_33203[(1)]);
if((state_val_33204 === (1))){
var inst_33198 = cljs.core.async.reduce(f__$1,init,ch);
var state_33203__$1 = state_33203;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33203__$1,(2),inst_33198);
} else {
if((state_val_33204 === (2))){
var inst_33200 = (state_33203[(2)]);
var inst_33201 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_33200) : f__$1.call(null,inst_33200));
var state_33203__$1 = state_33203;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33203__$1,inst_33201);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__31998__auto__ = null;
var cljs$core$async$transduce_$_state_machine__31998__auto____0 = (function (){
var statearr_33208 = [null,null,null,null,null,null,null];
(statearr_33208[(0)] = cljs$core$async$transduce_$_state_machine__31998__auto__);

(statearr_33208[(1)] = (1));

return statearr_33208;
});
var cljs$core$async$transduce_$_state_machine__31998__auto____1 = (function (state_33203){
while(true){
var ret_value__31999__auto__ = (function (){try{while(true){
var result__32000__auto__ = switch__31997__auto__(state_33203);
if(cljs.core.keyword_identical_QMARK_(result__32000__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32000__auto__;
}
break;
}
}catch (e33209){var ex__32001__auto__ = e33209;
var statearr_33210_35289 = state_33203;
(statearr_33210_35289[(2)] = ex__32001__auto__);


if(cljs.core.seq((state_33203[(4)]))){
var statearr_33211_35290 = state_33203;
(statearr_33211_35290[(1)] = cljs.core.first((state_33203[(4)])));

} else {
throw ex__32001__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__31999__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35297 = state_33203;
state_33203 = G__35297;
continue;
} else {
return ret_value__31999__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__31998__auto__ = function(state_33203){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__31998__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__31998__auto____1.call(this,state_33203);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__31998__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__31998__auto____0;
cljs$core$async$transduce_$_state_machine__31998__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__31998__auto____1;
return cljs$core$async$transduce_$_state_machine__31998__auto__;
})()
})();
var state__32208__auto__ = (function (){var statearr_33212 = f__32207__auto__();
(statearr_33212[(6)] = c__32206__auto__);

return statearr_33212;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32208__auto__);
}));

return c__32206__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan_BANG_ = (function cljs$core$async$onto_chan_BANG_(var_args){
var G__33228 = arguments.length;
switch (G__33228) {
case 2:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__32206__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32207__auto__ = (function (){var switch__31997__auto__ = (function (state_33259){
var state_val_33260 = (state_33259[(1)]);
if((state_val_33260 === (7))){
var inst_33240 = (state_33259[(2)]);
var state_33259__$1 = state_33259;
var statearr_33264_35299 = state_33259__$1;
(statearr_33264_35299[(2)] = inst_33240);

(statearr_33264_35299[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33260 === (1))){
var inst_33234 = cljs.core.seq(coll);
var inst_33235 = inst_33234;
var state_33259__$1 = (function (){var statearr_33265 = state_33259;
(statearr_33265[(7)] = inst_33235);

return statearr_33265;
})();
var statearr_33266_35300 = state_33259__$1;
(statearr_33266_35300[(2)] = null);

(statearr_33266_35300[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33260 === (4))){
var inst_33235 = (state_33259[(7)]);
var inst_33238 = cljs.core.first(inst_33235);
var state_33259__$1 = state_33259;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33259__$1,(7),ch,inst_33238);
} else {
if((state_val_33260 === (13))){
var inst_33253 = (state_33259[(2)]);
var state_33259__$1 = state_33259;
var statearr_33273_35301 = state_33259__$1;
(statearr_33273_35301[(2)] = inst_33253);

(statearr_33273_35301[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33260 === (6))){
var inst_33243 = (state_33259[(2)]);
var state_33259__$1 = state_33259;
if(cljs.core.truth_(inst_33243)){
var statearr_33274_35302 = state_33259__$1;
(statearr_33274_35302[(1)] = (8));

} else {
var statearr_33275_35303 = state_33259__$1;
(statearr_33275_35303[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33260 === (3))){
var inst_33257 = (state_33259[(2)]);
var state_33259__$1 = state_33259;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33259__$1,inst_33257);
} else {
if((state_val_33260 === (12))){
var state_33259__$1 = state_33259;
var statearr_33277_35304 = state_33259__$1;
(statearr_33277_35304[(2)] = null);

(statearr_33277_35304[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33260 === (2))){
var inst_33235 = (state_33259[(7)]);
var state_33259__$1 = state_33259;
if(cljs.core.truth_(inst_33235)){
var statearr_33278_35305 = state_33259__$1;
(statearr_33278_35305[(1)] = (4));

} else {
var statearr_33279_35306 = state_33259__$1;
(statearr_33279_35306[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33260 === (11))){
var inst_33250 = cljs.core.async.close_BANG_(ch);
var state_33259__$1 = state_33259;
var statearr_33280_35307 = state_33259__$1;
(statearr_33280_35307[(2)] = inst_33250);

(statearr_33280_35307[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33260 === (9))){
var state_33259__$1 = state_33259;
if(cljs.core.truth_(close_QMARK_)){
var statearr_33284_35308 = state_33259__$1;
(statearr_33284_35308[(1)] = (11));

} else {
var statearr_33285_35309 = state_33259__$1;
(statearr_33285_35309[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33260 === (5))){
var inst_33235 = (state_33259[(7)]);
var state_33259__$1 = state_33259;
var statearr_33286_35312 = state_33259__$1;
(statearr_33286_35312[(2)] = inst_33235);

(statearr_33286_35312[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33260 === (10))){
var inst_33255 = (state_33259[(2)]);
var state_33259__$1 = state_33259;
var statearr_33287_35313 = state_33259__$1;
(statearr_33287_35313[(2)] = inst_33255);

(statearr_33287_35313[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33260 === (8))){
var inst_33235 = (state_33259[(7)]);
var inst_33245 = cljs.core.next(inst_33235);
var inst_33235__$1 = inst_33245;
var state_33259__$1 = (function (){var statearr_33288 = state_33259;
(statearr_33288[(7)] = inst_33235__$1);

return statearr_33288;
})();
var statearr_33289_35314 = state_33259__$1;
(statearr_33289_35314[(2)] = null);

(statearr_33289_35314[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__31998__auto__ = null;
var cljs$core$async$state_machine__31998__auto____0 = (function (){
var statearr_33290 = [null,null,null,null,null,null,null,null];
(statearr_33290[(0)] = cljs$core$async$state_machine__31998__auto__);

(statearr_33290[(1)] = (1));

return statearr_33290;
});
var cljs$core$async$state_machine__31998__auto____1 = (function (state_33259){
while(true){
var ret_value__31999__auto__ = (function (){try{while(true){
var result__32000__auto__ = switch__31997__auto__(state_33259);
if(cljs.core.keyword_identical_QMARK_(result__32000__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32000__auto__;
}
break;
}
}catch (e33293){var ex__32001__auto__ = e33293;
var statearr_33295_35319 = state_33259;
(statearr_33295_35319[(2)] = ex__32001__auto__);


if(cljs.core.seq((state_33259[(4)]))){
var statearr_33296_35320 = state_33259;
(statearr_33296_35320[(1)] = cljs.core.first((state_33259[(4)])));

} else {
throw ex__32001__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__31999__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35325 = state_33259;
state_33259 = G__35325;
continue;
} else {
return ret_value__31999__auto__;
}
break;
}
});
cljs$core$async$state_machine__31998__auto__ = function(state_33259){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31998__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31998__auto____1.call(this,state_33259);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__31998__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31998__auto____0;
cljs$core$async$state_machine__31998__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31998__auto____1;
return cljs$core$async$state_machine__31998__auto__;
})()
})();
var state__32208__auto__ = (function (){var statearr_33298 = f__32207__auto__();
(statearr_33298[(6)] = c__32206__auto__);

return statearr_33298;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32208__auto__);
}));

return c__32206__auto__;
}));

(cljs.core.async.onto_chan_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan_BANG_ = (function cljs$core$async$to_chan_BANG_(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});
/**
 * Deprecated - use onto-chan!
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__33306 = arguments.length;
switch (G__33306) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,close_QMARK_);
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - use to-chan!
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
return cljs.core.async.to_chan_BANG_(coll);
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_35327 = (function (_){
var x__4428__auto__ = (((_ == null))?null:_);
var m__4429__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4429__auto__.call(null,_));
} else {
var m__4426__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4426__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_35327(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_35330 = (function (m,ch,close_QMARK_){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4429__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__4426__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4426__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_35330(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_35333 = (function (m,ch){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4429__auto__.call(null,m,ch));
} else {
var m__4426__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4426__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_35333(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_35334 = (function (m){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4429__auto__.call(null,m));
} else {
var m__4426__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4426__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_35334(m);
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async33335 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33335 = (function (ch,cs,meta33336){
this.ch = ch;
this.cs = cs;
this.meta33336 = meta33336;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async33335.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33337,meta33336__$1){
var self__ = this;
var _33337__$1 = this;
return (new cljs.core.async.t_cljs$core$async33335(self__.ch,self__.cs,meta33336__$1));
}));

(cljs.core.async.t_cljs$core$async33335.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33337){
var self__ = this;
var _33337__$1 = this;
return self__.meta33336;
}));

(cljs.core.async.t_cljs$core$async33335.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33335.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async33335.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33335.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async33335.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async33335.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async33335.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta33336","meta33336",-569000296,null)], null);
}));

(cljs.core.async.t_cljs$core$async33335.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async33335.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33335");

(cljs.core.async.t_cljs$core$async33335.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async33335");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33335.
 */
cljs.core.async.__GT_t_cljs$core$async33335 = (function cljs$core$async$mult_$___GT_t_cljs$core$async33335(ch__$1,cs__$1,meta33336){
return (new cljs.core.async.t_cljs$core$async33335(ch__$1,cs__$1,meta33336));
});

}

return (new cljs.core.async.t_cljs$core$async33335(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__32206__auto___35337 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32207__auto__ = (function (){var switch__31997__auto__ = (function (state_33502){
var state_val_33503 = (state_33502[(1)]);
if((state_val_33503 === (7))){
var inst_33498 = (state_33502[(2)]);
var state_33502__$1 = state_33502;
var statearr_33504_35338 = state_33502__$1;
(statearr_33504_35338[(2)] = inst_33498);

(statearr_33504_35338[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33503 === (20))){
var inst_33400 = (state_33502[(7)]);
var inst_33412 = cljs.core.first(inst_33400);
var inst_33413 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33412,(0),null);
var inst_33414 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33412,(1),null);
var state_33502__$1 = (function (){var statearr_33506 = state_33502;
(statearr_33506[(8)] = inst_33413);

return statearr_33506;
})();
if(cljs.core.truth_(inst_33414)){
var statearr_33507_35340 = state_33502__$1;
(statearr_33507_35340[(1)] = (22));

} else {
var statearr_33508_35342 = state_33502__$1;
(statearr_33508_35342[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33503 === (27))){
var inst_33442 = (state_33502[(9)]);
var inst_33449 = (state_33502[(10)]);
var inst_33357 = (state_33502[(11)]);
var inst_33444 = (state_33502[(12)]);
var inst_33449__$1 = cljs.core._nth(inst_33442,inst_33444);
var inst_33450 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_33449__$1,inst_33357,done);
var state_33502__$1 = (function (){var statearr_33509 = state_33502;
(statearr_33509[(10)] = inst_33449__$1);

return statearr_33509;
})();
if(cljs.core.truth_(inst_33450)){
var statearr_33510_35343 = state_33502__$1;
(statearr_33510_35343[(1)] = (30));

} else {
var statearr_33511_35344 = state_33502__$1;
(statearr_33511_35344[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33503 === (1))){
var state_33502__$1 = state_33502;
var statearr_33512_35345 = state_33502__$1;
(statearr_33512_35345[(2)] = null);

(statearr_33512_35345[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33503 === (24))){
var inst_33400 = (state_33502[(7)]);
var inst_33419 = (state_33502[(2)]);
var inst_33420 = cljs.core.next(inst_33400);
var inst_33370 = inst_33420;
var inst_33371 = null;
var inst_33372 = (0);
var inst_33373 = (0);
var state_33502__$1 = (function (){var statearr_33513 = state_33502;
(statearr_33513[(13)] = inst_33371);

(statearr_33513[(14)] = inst_33372);

(statearr_33513[(15)] = inst_33373);

(statearr_33513[(16)] = inst_33419);

(statearr_33513[(17)] = inst_33370);

return statearr_33513;
})();
var statearr_33514_35346 = state_33502__$1;
(statearr_33514_35346[(2)] = null);

(statearr_33514_35346[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33503 === (39))){
var state_33502__$1 = state_33502;
var statearr_33518_35347 = state_33502__$1;
(statearr_33518_35347[(2)] = null);

(statearr_33518_35347[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33503 === (4))){
var inst_33357 = (state_33502[(11)]);
var inst_33357__$1 = (state_33502[(2)]);
var inst_33358 = (inst_33357__$1 == null);
var state_33502__$1 = (function (){var statearr_33519 = state_33502;
(statearr_33519[(11)] = inst_33357__$1);

return statearr_33519;
})();
if(cljs.core.truth_(inst_33358)){
var statearr_33520_35348 = state_33502__$1;
(statearr_33520_35348[(1)] = (5));

} else {
var statearr_33521_35349 = state_33502__$1;
(statearr_33521_35349[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33503 === (15))){
var inst_33371 = (state_33502[(13)]);
var inst_33372 = (state_33502[(14)]);
var inst_33373 = (state_33502[(15)]);
var inst_33370 = (state_33502[(17)]);
var inst_33396 = (state_33502[(2)]);
var inst_33397 = (inst_33373 + (1));
var tmp33515 = inst_33371;
var tmp33516 = inst_33372;
var tmp33517 = inst_33370;
var inst_33370__$1 = tmp33517;
var inst_33371__$1 = tmp33515;
var inst_33372__$1 = tmp33516;
var inst_33373__$1 = inst_33397;
var state_33502__$1 = (function (){var statearr_33522 = state_33502;
(statearr_33522[(18)] = inst_33396);

(statearr_33522[(13)] = inst_33371__$1);

(statearr_33522[(14)] = inst_33372__$1);

(statearr_33522[(15)] = inst_33373__$1);

(statearr_33522[(17)] = inst_33370__$1);

return statearr_33522;
})();
var statearr_33523_35350 = state_33502__$1;
(statearr_33523_35350[(2)] = null);

(statearr_33523_35350[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33503 === (21))){
var inst_33423 = (state_33502[(2)]);
var state_33502__$1 = state_33502;
var statearr_33530_35351 = state_33502__$1;
(statearr_33530_35351[(2)] = inst_33423);

(statearr_33530_35351[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33503 === (31))){
var inst_33449 = (state_33502[(10)]);
var inst_33453 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_33449);
var state_33502__$1 = state_33502;
var statearr_33532_35352 = state_33502__$1;
(statearr_33532_35352[(2)] = inst_33453);

(statearr_33532_35352[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33503 === (32))){
var inst_33443 = (state_33502[(19)]);
var inst_33442 = (state_33502[(9)]);
var inst_33444 = (state_33502[(12)]);
var inst_33441 = (state_33502[(20)]);
var inst_33455 = (state_33502[(2)]);
var inst_33456 = (inst_33444 + (1));
var tmp33525 = inst_33443;
var tmp33526 = inst_33442;
var tmp33527 = inst_33441;
var inst_33441__$1 = tmp33527;
var inst_33442__$1 = tmp33526;
var inst_33443__$1 = tmp33525;
var inst_33444__$1 = inst_33456;
var state_33502__$1 = (function (){var statearr_33533 = state_33502;
(statearr_33533[(19)] = inst_33443__$1);

(statearr_33533[(9)] = inst_33442__$1);

(statearr_33533[(21)] = inst_33455);

(statearr_33533[(12)] = inst_33444__$1);

(statearr_33533[(20)] = inst_33441__$1);

return statearr_33533;
})();
var statearr_33534_35354 = state_33502__$1;
(statearr_33534_35354[(2)] = null);

(statearr_33534_35354[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33503 === (40))){
var inst_33471 = (state_33502[(22)]);
var inst_33475 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_33471);
var state_33502__$1 = state_33502;
var statearr_33538_35356 = state_33502__$1;
(statearr_33538_35356[(2)] = inst_33475);

(statearr_33538_35356[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33503 === (33))){
var inst_33462 = (state_33502[(23)]);
var inst_33464 = cljs.core.chunked_seq_QMARK_(inst_33462);
var state_33502__$1 = state_33502;
if(inst_33464){
var statearr_33539_35361 = state_33502__$1;
(statearr_33539_35361[(1)] = (36));

} else {
var statearr_33540_35362 = state_33502__$1;
(statearr_33540_35362[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33503 === (13))){
var inst_33386 = (state_33502[(24)]);
var inst_33393 = cljs.core.async.close_BANG_(inst_33386);
var state_33502__$1 = state_33502;
var statearr_33541_35363 = state_33502__$1;
(statearr_33541_35363[(2)] = inst_33393);

(statearr_33541_35363[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33503 === (22))){
var inst_33413 = (state_33502[(8)]);
var inst_33416 = cljs.core.async.close_BANG_(inst_33413);
var state_33502__$1 = state_33502;
var statearr_33545_35364 = state_33502__$1;
(statearr_33545_35364[(2)] = inst_33416);

(statearr_33545_35364[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33503 === (36))){
var inst_33462 = (state_33502[(23)]);
var inst_33466 = cljs.core.chunk_first(inst_33462);
var inst_33467 = cljs.core.chunk_rest(inst_33462);
var inst_33468 = cljs.core.count(inst_33466);
var inst_33441 = inst_33467;
var inst_33442 = inst_33466;
var inst_33443 = inst_33468;
var inst_33444 = (0);
var state_33502__$1 = (function (){var statearr_33546 = state_33502;
(statearr_33546[(19)] = inst_33443);

(statearr_33546[(9)] = inst_33442);

(statearr_33546[(12)] = inst_33444);

(statearr_33546[(20)] = inst_33441);

return statearr_33546;
})();
var statearr_33547_35365 = state_33502__$1;
(statearr_33547_35365[(2)] = null);

(statearr_33547_35365[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33503 === (41))){
var inst_33462 = (state_33502[(23)]);
var inst_33477 = (state_33502[(2)]);
var inst_33478 = cljs.core.next(inst_33462);
var inst_33441 = inst_33478;
var inst_33442 = null;
var inst_33443 = (0);
var inst_33444 = (0);
var state_33502__$1 = (function (){var statearr_33551 = state_33502;
(statearr_33551[(19)] = inst_33443);

(statearr_33551[(9)] = inst_33442);

(statearr_33551[(25)] = inst_33477);

(statearr_33551[(12)] = inst_33444);

(statearr_33551[(20)] = inst_33441);

return statearr_33551;
})();
var statearr_33552_35366 = state_33502__$1;
(statearr_33552_35366[(2)] = null);

(statearr_33552_35366[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33503 === (43))){
var state_33502__$1 = state_33502;
var statearr_33553_35367 = state_33502__$1;
(statearr_33553_35367[(2)] = null);

(statearr_33553_35367[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33503 === (29))){
var inst_33486 = (state_33502[(2)]);
var state_33502__$1 = state_33502;
var statearr_33562_35372 = state_33502__$1;
(statearr_33562_35372[(2)] = inst_33486);

(statearr_33562_35372[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33503 === (44))){
var inst_33495 = (state_33502[(2)]);
var state_33502__$1 = (function (){var statearr_33564 = state_33502;
(statearr_33564[(26)] = inst_33495);

return statearr_33564;
})();
var statearr_33569_35378 = state_33502__$1;
(statearr_33569_35378[(2)] = null);

(statearr_33569_35378[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33503 === (6))){
var inst_33433 = (state_33502[(27)]);
var inst_33432 = cljs.core.deref(cs);
var inst_33433__$1 = cljs.core.keys(inst_33432);
var inst_33434 = cljs.core.count(inst_33433__$1);
var inst_33435 = cljs.core.reset_BANG_(dctr,inst_33434);
var inst_33440 = cljs.core.seq(inst_33433__$1);
var inst_33441 = inst_33440;
var inst_33442 = null;
var inst_33443 = (0);
var inst_33444 = (0);
var state_33502__$1 = (function (){var statearr_33570 = state_33502;
(statearr_33570[(27)] = inst_33433__$1);

(statearr_33570[(19)] = inst_33443);

(statearr_33570[(9)] = inst_33442);

(statearr_33570[(12)] = inst_33444);

(statearr_33570[(20)] = inst_33441);

(statearr_33570[(28)] = inst_33435);

return statearr_33570;
})();
var statearr_33582_35380 = state_33502__$1;
(statearr_33582_35380[(2)] = null);

(statearr_33582_35380[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33503 === (28))){
var inst_33462 = (state_33502[(23)]);
var inst_33441 = (state_33502[(20)]);
var inst_33462__$1 = cljs.core.seq(inst_33441);
var state_33502__$1 = (function (){var statearr_33583 = state_33502;
(statearr_33583[(23)] = inst_33462__$1);

return statearr_33583;
})();
if(inst_33462__$1){
var statearr_33584_35384 = state_33502__$1;
(statearr_33584_35384[(1)] = (33));

} else {
var statearr_33587_35386 = state_33502__$1;
(statearr_33587_35386[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33503 === (25))){
var inst_33443 = (state_33502[(19)]);
var inst_33444 = (state_33502[(12)]);
var inst_33446 = (inst_33444 < inst_33443);
var inst_33447 = inst_33446;
var state_33502__$1 = state_33502;
if(cljs.core.truth_(inst_33447)){
var statearr_33589_35392 = state_33502__$1;
(statearr_33589_35392[(1)] = (27));

} else {
var statearr_33590_35393 = state_33502__$1;
(statearr_33590_35393[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33503 === (34))){
var state_33502__$1 = state_33502;
var statearr_33591_35394 = state_33502__$1;
(statearr_33591_35394[(2)] = null);

(statearr_33591_35394[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33503 === (17))){
var state_33502__$1 = state_33502;
var statearr_33593_35395 = state_33502__$1;
(statearr_33593_35395[(2)] = null);

(statearr_33593_35395[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33503 === (3))){
var inst_33500 = (state_33502[(2)]);
var state_33502__$1 = state_33502;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33502__$1,inst_33500);
} else {
if((state_val_33503 === (12))){
var inst_33428 = (state_33502[(2)]);
var state_33502__$1 = state_33502;
var statearr_33596_35399 = state_33502__$1;
(statearr_33596_35399[(2)] = inst_33428);

(statearr_33596_35399[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33503 === (2))){
var state_33502__$1 = state_33502;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33502__$1,(4),ch);
} else {
if((state_val_33503 === (23))){
var state_33502__$1 = state_33502;
var statearr_33597_35400 = state_33502__$1;
(statearr_33597_35400[(2)] = null);

(statearr_33597_35400[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33503 === (35))){
var inst_33484 = (state_33502[(2)]);
var state_33502__$1 = state_33502;
var statearr_33598_35405 = state_33502__$1;
(statearr_33598_35405[(2)] = inst_33484);

(statearr_33598_35405[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33503 === (19))){
var inst_33400 = (state_33502[(7)]);
var inst_33404 = cljs.core.chunk_first(inst_33400);
var inst_33405 = cljs.core.chunk_rest(inst_33400);
var inst_33406 = cljs.core.count(inst_33404);
var inst_33370 = inst_33405;
var inst_33371 = inst_33404;
var inst_33372 = inst_33406;
var inst_33373 = (0);
var state_33502__$1 = (function (){var statearr_33601 = state_33502;
(statearr_33601[(13)] = inst_33371);

(statearr_33601[(14)] = inst_33372);

(statearr_33601[(15)] = inst_33373);

(statearr_33601[(17)] = inst_33370);

return statearr_33601;
})();
var statearr_33602_35406 = state_33502__$1;
(statearr_33602_35406[(2)] = null);

(statearr_33602_35406[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33503 === (11))){
var inst_33400 = (state_33502[(7)]);
var inst_33370 = (state_33502[(17)]);
var inst_33400__$1 = cljs.core.seq(inst_33370);
var state_33502__$1 = (function (){var statearr_33604 = state_33502;
(statearr_33604[(7)] = inst_33400__$1);

return statearr_33604;
})();
if(inst_33400__$1){
var statearr_33607_35407 = state_33502__$1;
(statearr_33607_35407[(1)] = (16));

} else {
var statearr_33608_35408 = state_33502__$1;
(statearr_33608_35408[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33503 === (9))){
var inst_33430 = (state_33502[(2)]);
var state_33502__$1 = state_33502;
var statearr_33609_35410 = state_33502__$1;
(statearr_33609_35410[(2)] = inst_33430);

(statearr_33609_35410[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33503 === (5))){
var inst_33368 = cljs.core.deref(cs);
var inst_33369 = cljs.core.seq(inst_33368);
var inst_33370 = inst_33369;
var inst_33371 = null;
var inst_33372 = (0);
var inst_33373 = (0);
var state_33502__$1 = (function (){var statearr_33613 = state_33502;
(statearr_33613[(13)] = inst_33371);

(statearr_33613[(14)] = inst_33372);

(statearr_33613[(15)] = inst_33373);

(statearr_33613[(17)] = inst_33370);

return statearr_33613;
})();
var statearr_33614_35414 = state_33502__$1;
(statearr_33614_35414[(2)] = null);

(statearr_33614_35414[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33503 === (14))){
var state_33502__$1 = state_33502;
var statearr_33615_35415 = state_33502__$1;
(statearr_33615_35415[(2)] = null);

(statearr_33615_35415[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33503 === (45))){
var inst_33492 = (state_33502[(2)]);
var state_33502__$1 = state_33502;
var statearr_33618_35417 = state_33502__$1;
(statearr_33618_35417[(2)] = inst_33492);

(statearr_33618_35417[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33503 === (26))){
var inst_33433 = (state_33502[(27)]);
var inst_33488 = (state_33502[(2)]);
var inst_33489 = cljs.core.seq(inst_33433);
var state_33502__$1 = (function (){var statearr_33620 = state_33502;
(statearr_33620[(29)] = inst_33488);

return statearr_33620;
})();
if(inst_33489){
var statearr_33621_35419 = state_33502__$1;
(statearr_33621_35419[(1)] = (42));

} else {
var statearr_33622_35420 = state_33502__$1;
(statearr_33622_35420[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33503 === (16))){
var inst_33400 = (state_33502[(7)]);
var inst_33402 = cljs.core.chunked_seq_QMARK_(inst_33400);
var state_33502__$1 = state_33502;
if(inst_33402){
var statearr_33623_35423 = state_33502__$1;
(statearr_33623_35423[(1)] = (19));

} else {
var statearr_33624_35425 = state_33502__$1;
(statearr_33624_35425[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33503 === (38))){
var inst_33481 = (state_33502[(2)]);
var state_33502__$1 = state_33502;
var statearr_33625_35427 = state_33502__$1;
(statearr_33625_35427[(2)] = inst_33481);

(statearr_33625_35427[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33503 === (30))){
var state_33502__$1 = state_33502;
var statearr_33626_35428 = state_33502__$1;
(statearr_33626_35428[(2)] = null);

(statearr_33626_35428[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33503 === (10))){
var inst_33371 = (state_33502[(13)]);
var inst_33373 = (state_33502[(15)]);
var inst_33385 = cljs.core._nth(inst_33371,inst_33373);
var inst_33386 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33385,(0),null);
var inst_33387 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33385,(1),null);
var state_33502__$1 = (function (){var statearr_33630 = state_33502;
(statearr_33630[(24)] = inst_33386);

return statearr_33630;
})();
if(cljs.core.truth_(inst_33387)){
var statearr_33631_35429 = state_33502__$1;
(statearr_33631_35429[(1)] = (13));

} else {
var statearr_33632_35430 = state_33502__$1;
(statearr_33632_35430[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33503 === (18))){
var inst_33426 = (state_33502[(2)]);
var state_33502__$1 = state_33502;
var statearr_33634_35431 = state_33502__$1;
(statearr_33634_35431[(2)] = inst_33426);

(statearr_33634_35431[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33503 === (42))){
var state_33502__$1 = state_33502;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33502__$1,(45),dchan);
} else {
if((state_val_33503 === (37))){
var inst_33471 = (state_33502[(22)]);
var inst_33357 = (state_33502[(11)]);
var inst_33462 = (state_33502[(23)]);
var inst_33471__$1 = cljs.core.first(inst_33462);
var inst_33472 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_33471__$1,inst_33357,done);
var state_33502__$1 = (function (){var statearr_33637 = state_33502;
(statearr_33637[(22)] = inst_33471__$1);

return statearr_33637;
})();
if(cljs.core.truth_(inst_33472)){
var statearr_33638_35432 = state_33502__$1;
(statearr_33638_35432[(1)] = (39));

} else {
var statearr_33639_35433 = state_33502__$1;
(statearr_33639_35433[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33503 === (8))){
var inst_33372 = (state_33502[(14)]);
var inst_33373 = (state_33502[(15)]);
var inst_33375 = (inst_33373 < inst_33372);
var inst_33376 = inst_33375;
var state_33502__$1 = state_33502;
if(cljs.core.truth_(inst_33376)){
var statearr_33643_35434 = state_33502__$1;
(statearr_33643_35434[(1)] = (10));

} else {
var statearr_33644_35435 = state_33502__$1;
(statearr_33644_35435[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mult_$_state_machine__31998__auto__ = null;
var cljs$core$async$mult_$_state_machine__31998__auto____0 = (function (){
var statearr_33645 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33645[(0)] = cljs$core$async$mult_$_state_machine__31998__auto__);

(statearr_33645[(1)] = (1));

return statearr_33645;
});
var cljs$core$async$mult_$_state_machine__31998__auto____1 = (function (state_33502){
while(true){
var ret_value__31999__auto__ = (function (){try{while(true){
var result__32000__auto__ = switch__31997__auto__(state_33502);
if(cljs.core.keyword_identical_QMARK_(result__32000__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32000__auto__;
}
break;
}
}catch (e33646){var ex__32001__auto__ = e33646;
var statearr_33647_35442 = state_33502;
(statearr_33647_35442[(2)] = ex__32001__auto__);


if(cljs.core.seq((state_33502[(4)]))){
var statearr_33648_35443 = state_33502;
(statearr_33648_35443[(1)] = cljs.core.first((state_33502[(4)])));

} else {
throw ex__32001__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__31999__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35444 = state_33502;
state_33502 = G__35444;
continue;
} else {
return ret_value__31999__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__31998__auto__ = function(state_33502){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__31998__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__31998__auto____1.call(this,state_33502);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__31998__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__31998__auto____0;
cljs$core$async$mult_$_state_machine__31998__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__31998__auto____1;
return cljs$core$async$mult_$_state_machine__31998__auto__;
})()
})();
var state__32208__auto__ = (function (){var statearr_33649 = f__32207__auto__();
(statearr_33649[(6)] = c__32206__auto___35337);

return statearr_33649;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32208__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__33654 = arguments.length;
switch (G__33654) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_35453 = (function (m,ch){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4429__auto__.call(null,m,ch));
} else {
var m__4426__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4426__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_35453(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_35457 = (function (m,ch){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4429__auto__.call(null,m,ch));
} else {
var m__4426__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4426__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_35457(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_35464 = (function (m){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4429__auto__.call(null,m));
} else {
var m__4426__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4426__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_35464(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_35469 = (function (m,state_map){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4429__auto__.call(null,m,state_map));
} else {
var m__4426__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4426__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_35469(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_35470 = (function (m,mode){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4429__auto__.call(null,m,mode));
} else {
var m__4426__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4426__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_35470(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___35472 = arguments.length;
var i__4737__auto___35473 = (0);
while(true){
if((i__4737__auto___35473 < len__4736__auto___35472)){
args__4742__auto__.push((arguments[i__4737__auto___35473]));

var G__35474 = (i__4737__auto___35473 + (1));
i__4737__auto___35473 = G__35474;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((3) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4743__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__33674){
var map__33676 = p__33674;
var map__33676__$1 = (((((!((map__33676 == null))))?(((((map__33676.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33676.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33676):map__33676);
var opts = map__33676__$1;
var statearr_33680_35475 = state;
(statearr_33680_35475[(1)] = cont_block);


var temp__5735__auto__ = cljs.core.async.do_alts((function (val){
var statearr_33681_35476 = state;
(statearr_33681_35476[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5735__auto__)){
var cb = temp__5735__auto__;
var statearr_33686_35477 = state;
(statearr_33686_35477[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq33669){
var G__33670 = cljs.core.first(seq33669);
var seq33669__$1 = cljs.core.next(seq33669);
var G__33671 = cljs.core.first(seq33669__$1);
var seq33669__$2 = cljs.core.next(seq33669__$1);
var G__33672 = cljs.core.first(seq33669__$2);
var seq33669__$3 = cljs.core.next(seq33669__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__33670,G__33671,G__33672,seq33669__$3);
}));

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((1)));
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async33691 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33691 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta33692){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta33692 = meta33692;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async33691.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33693,meta33692__$1){
var self__ = this;
var _33693__$1 = this;
return (new cljs.core.async.t_cljs$core$async33691(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta33692__$1));
}));

(cljs.core.async.t_cljs$core$async33691.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33693){
var self__ = this;
var _33693__$1 = this;
return self__.meta33692;
}));

(cljs.core.async.t_cljs$core$async33691.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33691.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async33691.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33691.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async33691.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async33691.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async33691.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async33691.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async33691.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta33692","meta33692",-1025809691,null)], null);
}));

(cljs.core.async.t_cljs$core$async33691.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async33691.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33691");

(cljs.core.async.t_cljs$core$async33691.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async33691");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33691.
 */
cljs.core.async.__GT_t_cljs$core$async33691 = (function cljs$core$async$mix_$___GT_t_cljs$core$async33691(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta33692){
return (new cljs.core.async.t_cljs$core$async33691(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta33692));
});

}

return (new cljs.core.async.t_cljs$core$async33691(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__32206__auto___35508 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32207__auto__ = (function (){var switch__31997__auto__ = (function (state_33827){
var state_val_33829 = (state_33827[(1)]);
if((state_val_33829 === (7))){
var inst_33734 = (state_33827[(2)]);
var state_33827__$1 = state_33827;
var statearr_33838_35513 = state_33827__$1;
(statearr_33838_35513[(2)] = inst_33734);

(statearr_33838_35513[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33829 === (20))){
var inst_33746 = (state_33827[(7)]);
var state_33827__$1 = state_33827;
var statearr_33841_35523 = state_33827__$1;
(statearr_33841_35523[(2)] = inst_33746);

(statearr_33841_35523[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33829 === (27))){
var state_33827__$1 = state_33827;
var statearr_33849_35524 = state_33827__$1;
(statearr_33849_35524[(2)] = null);

(statearr_33849_35524[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33829 === (1))){
var inst_33720 = (state_33827[(8)]);
var inst_33720__$1 = calc_state();
var inst_33722 = (inst_33720__$1 == null);
var inst_33723 = cljs.core.not(inst_33722);
var state_33827__$1 = (function (){var statearr_33850 = state_33827;
(statearr_33850[(8)] = inst_33720__$1);

return statearr_33850;
})();
if(inst_33723){
var statearr_33851_35530 = state_33827__$1;
(statearr_33851_35530[(1)] = (2));

} else {
var statearr_33852_35531 = state_33827__$1;
(statearr_33852_35531[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33829 === (24))){
var inst_33772 = (state_33827[(9)]);
var inst_33781 = (state_33827[(10)]);
var inst_33800 = (state_33827[(11)]);
var inst_33800__$1 = (inst_33772.cljs$core$IFn$_invoke$arity$1 ? inst_33772.cljs$core$IFn$_invoke$arity$1(inst_33781) : inst_33772.call(null,inst_33781));
var state_33827__$1 = (function (){var statearr_33854 = state_33827;
(statearr_33854[(11)] = inst_33800__$1);

return statearr_33854;
})();
if(cljs.core.truth_(inst_33800__$1)){
var statearr_33855_35533 = state_33827__$1;
(statearr_33855_35533[(1)] = (29));

} else {
var statearr_33856_35535 = state_33827__$1;
(statearr_33856_35535[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33829 === (4))){
var inst_33737 = (state_33827[(2)]);
var state_33827__$1 = state_33827;
if(cljs.core.truth_(inst_33737)){
var statearr_33857_35538 = state_33827__$1;
(statearr_33857_35538[(1)] = (8));

} else {
var statearr_33858_35539 = state_33827__$1;
(statearr_33858_35539[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33829 === (15))){
var inst_33766 = (state_33827[(2)]);
var state_33827__$1 = state_33827;
if(cljs.core.truth_(inst_33766)){
var statearr_33864_35540 = state_33827__$1;
(statearr_33864_35540[(1)] = (19));

} else {
var statearr_33865_35546 = state_33827__$1;
(statearr_33865_35546[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33829 === (21))){
var inst_33771 = (state_33827[(12)]);
var inst_33771__$1 = (state_33827[(2)]);
var inst_33772 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_33771__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_33773 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_33771__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_33774 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_33771__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_33827__$1 = (function (){var statearr_33867 = state_33827;
(statearr_33867[(13)] = inst_33773);

(statearr_33867[(9)] = inst_33772);

(statearr_33867[(12)] = inst_33771__$1);

return statearr_33867;
})();
return cljs.core.async.ioc_alts_BANG_(state_33827__$1,(22),inst_33774);
} else {
if((state_val_33829 === (31))){
var inst_33808 = (state_33827[(2)]);
var state_33827__$1 = state_33827;
if(cljs.core.truth_(inst_33808)){
var statearr_33868_35572 = state_33827__$1;
(statearr_33868_35572[(1)] = (32));

} else {
var statearr_33871_35573 = state_33827__$1;
(statearr_33871_35573[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33829 === (32))){
var inst_33780 = (state_33827[(14)]);
var state_33827__$1 = state_33827;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33827__$1,(35),out,inst_33780);
} else {
if((state_val_33829 === (33))){
var inst_33771 = (state_33827[(12)]);
var inst_33746 = inst_33771;
var state_33827__$1 = (function (){var statearr_33876 = state_33827;
(statearr_33876[(7)] = inst_33746);

return statearr_33876;
})();
var statearr_33877_35577 = state_33827__$1;
(statearr_33877_35577[(2)] = null);

(statearr_33877_35577[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33829 === (13))){
var inst_33746 = (state_33827[(7)]);
var inst_33755 = inst_33746.cljs$lang$protocol_mask$partition0$;
var inst_33756 = (inst_33755 & (64));
var inst_33757 = inst_33746.cljs$core$ISeq$;
var inst_33758 = (cljs.core.PROTOCOL_SENTINEL === inst_33757);
var inst_33759 = ((inst_33756) || (inst_33758));
var state_33827__$1 = state_33827;
if(cljs.core.truth_(inst_33759)){
var statearr_33878_35578 = state_33827__$1;
(statearr_33878_35578[(1)] = (16));

} else {
var statearr_33879_35580 = state_33827__$1;
(statearr_33879_35580[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33829 === (22))){
var inst_33780 = (state_33827[(14)]);
var inst_33781 = (state_33827[(10)]);
var inst_33779 = (state_33827[(2)]);
var inst_33780__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33779,(0),null);
var inst_33781__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33779,(1),null);
var inst_33782 = (inst_33780__$1 == null);
var inst_33783 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_33781__$1,change);
var inst_33784 = ((inst_33782) || (inst_33783));
var state_33827__$1 = (function (){var statearr_33884 = state_33827;
(statearr_33884[(14)] = inst_33780__$1);

(statearr_33884[(10)] = inst_33781__$1);

return statearr_33884;
})();
if(cljs.core.truth_(inst_33784)){
var statearr_33885_35581 = state_33827__$1;
(statearr_33885_35581[(1)] = (23));

} else {
var statearr_33886_35582 = state_33827__$1;
(statearr_33886_35582[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33829 === (36))){
var inst_33771 = (state_33827[(12)]);
var inst_33746 = inst_33771;
var state_33827__$1 = (function (){var statearr_33887 = state_33827;
(statearr_33887[(7)] = inst_33746);

return statearr_33887;
})();
var statearr_33888_35583 = state_33827__$1;
(statearr_33888_35583[(2)] = null);

(statearr_33888_35583[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33829 === (29))){
var inst_33800 = (state_33827[(11)]);
var state_33827__$1 = state_33827;
var statearr_33890_35584 = state_33827__$1;
(statearr_33890_35584[(2)] = inst_33800);

(statearr_33890_35584[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33829 === (6))){
var state_33827__$1 = state_33827;
var statearr_33891_35585 = state_33827__$1;
(statearr_33891_35585[(2)] = false);

(statearr_33891_35585[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33829 === (28))){
var inst_33793 = (state_33827[(2)]);
var inst_33794 = calc_state();
var inst_33746 = inst_33794;
var state_33827__$1 = (function (){var statearr_33892 = state_33827;
(statearr_33892[(15)] = inst_33793);

(statearr_33892[(7)] = inst_33746);

return statearr_33892;
})();
var statearr_33894_35589 = state_33827__$1;
(statearr_33894_35589[(2)] = null);

(statearr_33894_35589[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33829 === (25))){
var inst_33822 = (state_33827[(2)]);
var state_33827__$1 = state_33827;
var statearr_33897_35591 = state_33827__$1;
(statearr_33897_35591[(2)] = inst_33822);

(statearr_33897_35591[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33829 === (34))){
var inst_33820 = (state_33827[(2)]);
var state_33827__$1 = state_33827;
var statearr_33898_35592 = state_33827__$1;
(statearr_33898_35592[(2)] = inst_33820);

(statearr_33898_35592[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33829 === (17))){
var state_33827__$1 = state_33827;
var statearr_33899_35593 = state_33827__$1;
(statearr_33899_35593[(2)] = false);

(statearr_33899_35593[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33829 === (3))){
var state_33827__$1 = state_33827;
var statearr_33900_35597 = state_33827__$1;
(statearr_33900_35597[(2)] = false);

(statearr_33900_35597[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33829 === (12))){
var inst_33824 = (state_33827[(2)]);
var state_33827__$1 = state_33827;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33827__$1,inst_33824);
} else {
if((state_val_33829 === (2))){
var inst_33720 = (state_33827[(8)]);
var inst_33726 = inst_33720.cljs$lang$protocol_mask$partition0$;
var inst_33727 = (inst_33726 & (64));
var inst_33728 = inst_33720.cljs$core$ISeq$;
var inst_33729 = (cljs.core.PROTOCOL_SENTINEL === inst_33728);
var inst_33730 = ((inst_33727) || (inst_33729));
var state_33827__$1 = state_33827;
if(cljs.core.truth_(inst_33730)){
var statearr_33901_35600 = state_33827__$1;
(statearr_33901_35600[(1)] = (5));

} else {
var statearr_33902_35602 = state_33827__$1;
(statearr_33902_35602[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33829 === (23))){
var inst_33780 = (state_33827[(14)]);
var inst_33788 = (inst_33780 == null);
var state_33827__$1 = state_33827;
if(cljs.core.truth_(inst_33788)){
var statearr_33906_35603 = state_33827__$1;
(statearr_33906_35603[(1)] = (26));

} else {
var statearr_33907_35604 = state_33827__$1;
(statearr_33907_35604[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33829 === (35))){
var inst_33811 = (state_33827[(2)]);
var state_33827__$1 = state_33827;
if(cljs.core.truth_(inst_33811)){
var statearr_33908_35605 = state_33827__$1;
(statearr_33908_35605[(1)] = (36));

} else {
var statearr_33909_35606 = state_33827__$1;
(statearr_33909_35606[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33829 === (19))){
var inst_33746 = (state_33827[(7)]);
var inst_33768 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_33746);
var state_33827__$1 = state_33827;
var statearr_33910_35607 = state_33827__$1;
(statearr_33910_35607[(2)] = inst_33768);

(statearr_33910_35607[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33829 === (11))){
var inst_33746 = (state_33827[(7)]);
var inst_33752 = (inst_33746 == null);
var inst_33753 = cljs.core.not(inst_33752);
var state_33827__$1 = state_33827;
if(inst_33753){
var statearr_33914_35608 = state_33827__$1;
(statearr_33914_35608[(1)] = (13));

} else {
var statearr_33915_35609 = state_33827__$1;
(statearr_33915_35609[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33829 === (9))){
var inst_33720 = (state_33827[(8)]);
var state_33827__$1 = state_33827;
var statearr_33916_35613 = state_33827__$1;
(statearr_33916_35613[(2)] = inst_33720);

(statearr_33916_35613[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33829 === (5))){
var state_33827__$1 = state_33827;
var statearr_33917_35614 = state_33827__$1;
(statearr_33917_35614[(2)] = true);

(statearr_33917_35614[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33829 === (14))){
var state_33827__$1 = state_33827;
var statearr_33918_35615 = state_33827__$1;
(statearr_33918_35615[(2)] = false);

(statearr_33918_35615[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33829 === (26))){
var inst_33781 = (state_33827[(10)]);
var inst_33790 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_33781);
var state_33827__$1 = state_33827;
var statearr_33919_35616 = state_33827__$1;
(statearr_33919_35616[(2)] = inst_33790);

(statearr_33919_35616[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33829 === (16))){
var state_33827__$1 = state_33827;
var statearr_33920_35617 = state_33827__$1;
(statearr_33920_35617[(2)] = true);

(statearr_33920_35617[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33829 === (38))){
var inst_33816 = (state_33827[(2)]);
var state_33827__$1 = state_33827;
var statearr_33925_35618 = state_33827__$1;
(statearr_33925_35618[(2)] = inst_33816);

(statearr_33925_35618[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33829 === (30))){
var inst_33773 = (state_33827[(13)]);
var inst_33772 = (state_33827[(9)]);
var inst_33781 = (state_33827[(10)]);
var inst_33803 = cljs.core.empty_QMARK_(inst_33772);
var inst_33804 = (inst_33773.cljs$core$IFn$_invoke$arity$1 ? inst_33773.cljs$core$IFn$_invoke$arity$1(inst_33781) : inst_33773.call(null,inst_33781));
var inst_33805 = cljs.core.not(inst_33804);
var inst_33806 = ((inst_33803) && (inst_33805));
var state_33827__$1 = state_33827;
var statearr_33928_35619 = state_33827__$1;
(statearr_33928_35619[(2)] = inst_33806);

(statearr_33928_35619[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33829 === (10))){
var inst_33720 = (state_33827[(8)]);
var inst_33742 = (state_33827[(2)]);
var inst_33743 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_33742,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_33744 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_33742,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_33745 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_33742,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_33746 = inst_33720;
var state_33827__$1 = (function (){var statearr_33930 = state_33827;
(statearr_33930[(16)] = inst_33745);

(statearr_33930[(17)] = inst_33743);

(statearr_33930[(7)] = inst_33746);

(statearr_33930[(18)] = inst_33744);

return statearr_33930;
})();
var statearr_33931_35620 = state_33827__$1;
(statearr_33931_35620[(2)] = null);

(statearr_33931_35620[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33829 === (18))){
var inst_33763 = (state_33827[(2)]);
var state_33827__$1 = state_33827;
var statearr_33932_35621 = state_33827__$1;
(statearr_33932_35621[(2)] = inst_33763);

(statearr_33932_35621[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33829 === (37))){
var state_33827__$1 = state_33827;
var statearr_33933_35622 = state_33827__$1;
(statearr_33933_35622[(2)] = null);

(statearr_33933_35622[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33829 === (8))){
var inst_33720 = (state_33827[(8)]);
var inst_33739 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_33720);
var state_33827__$1 = state_33827;
var statearr_33936_35623 = state_33827__$1;
(statearr_33936_35623[(2)] = inst_33739);

(statearr_33936_35623[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mix_$_state_machine__31998__auto__ = null;
var cljs$core$async$mix_$_state_machine__31998__auto____0 = (function (){
var statearr_33946 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33946[(0)] = cljs$core$async$mix_$_state_machine__31998__auto__);

(statearr_33946[(1)] = (1));

return statearr_33946;
});
var cljs$core$async$mix_$_state_machine__31998__auto____1 = (function (state_33827){
while(true){
var ret_value__31999__auto__ = (function (){try{while(true){
var result__32000__auto__ = switch__31997__auto__(state_33827);
if(cljs.core.keyword_identical_QMARK_(result__32000__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32000__auto__;
}
break;
}
}catch (e33947){var ex__32001__auto__ = e33947;
var statearr_33949_35629 = state_33827;
(statearr_33949_35629[(2)] = ex__32001__auto__);


if(cljs.core.seq((state_33827[(4)]))){
var statearr_33950_35630 = state_33827;
(statearr_33950_35630[(1)] = cljs.core.first((state_33827[(4)])));

} else {
throw ex__32001__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__31999__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35631 = state_33827;
state_33827 = G__35631;
continue;
} else {
return ret_value__31999__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__31998__auto__ = function(state_33827){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__31998__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__31998__auto____1.call(this,state_33827);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__31998__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__31998__auto____0;
cljs$core$async$mix_$_state_machine__31998__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__31998__auto____1;
return cljs$core$async$mix_$_state_machine__31998__auto__;
})()
})();
var state__32208__auto__ = (function (){var statearr_33953 = f__32207__auto__();
(statearr_33953[(6)] = c__32206__auto___35508);

return statearr_33953;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32208__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_35643 = (function (p,v,ch,close_QMARK_){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4429__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__4426__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4426__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_35643(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_35644 = (function (p,v,ch){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4429__auto__.call(null,p,v,ch));
} else {
var m__4426__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4426__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_35644(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_35647 = (function() {
var G__35648 = null;
var G__35648__1 = (function (p){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4429__auto__.call(null,p));
} else {
var m__4426__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4426__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__35648__2 = (function (p,v){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4429__auto__.call(null,p,v));
} else {
var m__4426__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4426__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__35648 = function(p,v){
switch(arguments.length){
case 1:
return G__35648__1.call(this,p);
case 2:
return G__35648__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__35648.cljs$core$IFn$_invoke$arity$1 = G__35648__1;
G__35648.cljs$core$IFn$_invoke$arity$2 = G__35648__2;
return G__35648;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__34009 = arguments.length;
switch (G__34009) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_35647(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_35647(p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__34012 = arguments.length;
switch (G__34012) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__4126__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__34010_SHARP_){
if(cljs.core.truth_((p1__34010_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__34010_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__34010_SHARP_.call(null,topic)))){
return p1__34010_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__34010_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async34014 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34014 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta34015){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta34015 = meta34015;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async34014.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34016,meta34015__$1){
var self__ = this;
var _34016__$1 = this;
return (new cljs.core.async.t_cljs$core$async34014(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta34015__$1));
}));

(cljs.core.async.t_cljs$core$async34014.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34016){
var self__ = this;
var _34016__$1 = this;
return self__.meta34015;
}));

(cljs.core.async.t_cljs$core$async34014.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34014.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async34014.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34014.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async34014.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5735__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5735__auto__)){
var m = temp__5735__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async34014.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async34014.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async34014.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta34015","meta34015",1936013158,null)], null);
}));

(cljs.core.async.t_cljs$core$async34014.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async34014.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34014");

(cljs.core.async.t_cljs$core$async34014.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async34014");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34014.
 */
cljs.core.async.__GT_t_cljs$core$async34014 = (function cljs$core$async$__GT_t_cljs$core$async34014(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta34015){
return (new cljs.core.async.t_cljs$core$async34014(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta34015));
});

}

return (new cljs.core.async.t_cljs$core$async34014(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__32206__auto___35674 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32207__auto__ = (function (){var switch__31997__auto__ = (function (state_34100){
var state_val_34101 = (state_34100[(1)]);
if((state_val_34101 === (7))){
var inst_34096 = (state_34100[(2)]);
var state_34100__$1 = state_34100;
var statearr_34102_35678 = state_34100__$1;
(statearr_34102_35678[(2)] = inst_34096);

(statearr_34102_35678[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34101 === (20))){
var state_34100__$1 = state_34100;
var statearr_34103_35679 = state_34100__$1;
(statearr_34103_35679[(2)] = null);

(statearr_34103_35679[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34101 === (1))){
var state_34100__$1 = state_34100;
var statearr_34104_35680 = state_34100__$1;
(statearr_34104_35680[(2)] = null);

(statearr_34104_35680[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34101 === (24))){
var inst_34079 = (state_34100[(7)]);
var inst_34088 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_34079);
var state_34100__$1 = state_34100;
var statearr_34105_35681 = state_34100__$1;
(statearr_34105_35681[(2)] = inst_34088);

(statearr_34105_35681[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34101 === (4))){
var inst_34031 = (state_34100[(8)]);
var inst_34031__$1 = (state_34100[(2)]);
var inst_34032 = (inst_34031__$1 == null);
var state_34100__$1 = (function (){var statearr_34106 = state_34100;
(statearr_34106[(8)] = inst_34031__$1);

return statearr_34106;
})();
if(cljs.core.truth_(inst_34032)){
var statearr_34107_35685 = state_34100__$1;
(statearr_34107_35685[(1)] = (5));

} else {
var statearr_34108_35686 = state_34100__$1;
(statearr_34108_35686[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34101 === (15))){
var inst_34073 = (state_34100[(2)]);
var state_34100__$1 = state_34100;
var statearr_34109_35687 = state_34100__$1;
(statearr_34109_35687[(2)] = inst_34073);

(statearr_34109_35687[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34101 === (21))){
var inst_34093 = (state_34100[(2)]);
var state_34100__$1 = (function (){var statearr_34110 = state_34100;
(statearr_34110[(9)] = inst_34093);

return statearr_34110;
})();
var statearr_34111_35690 = state_34100__$1;
(statearr_34111_35690[(2)] = null);

(statearr_34111_35690[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34101 === (13))){
var inst_34055 = (state_34100[(10)]);
var inst_34057 = cljs.core.chunked_seq_QMARK_(inst_34055);
var state_34100__$1 = state_34100;
if(inst_34057){
var statearr_34112_35692 = state_34100__$1;
(statearr_34112_35692[(1)] = (16));

} else {
var statearr_34113_35694 = state_34100__$1;
(statearr_34113_35694[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34101 === (22))){
var inst_34085 = (state_34100[(2)]);
var state_34100__$1 = state_34100;
if(cljs.core.truth_(inst_34085)){
var statearr_34117_35698 = state_34100__$1;
(statearr_34117_35698[(1)] = (23));

} else {
var statearr_34118_35699 = state_34100__$1;
(statearr_34118_35699[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34101 === (6))){
var inst_34081 = (state_34100[(11)]);
var inst_34079 = (state_34100[(7)]);
var inst_34031 = (state_34100[(8)]);
var inst_34079__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_34031) : topic_fn.call(null,inst_34031));
var inst_34080 = cljs.core.deref(mults);
var inst_34081__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_34080,inst_34079__$1);
var state_34100__$1 = (function (){var statearr_34119 = state_34100;
(statearr_34119[(11)] = inst_34081__$1);

(statearr_34119[(7)] = inst_34079__$1);

return statearr_34119;
})();
if(cljs.core.truth_(inst_34081__$1)){
var statearr_34120_35709 = state_34100__$1;
(statearr_34120_35709[(1)] = (19));

} else {
var statearr_34121_35716 = state_34100__$1;
(statearr_34121_35716[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34101 === (25))){
var inst_34090 = (state_34100[(2)]);
var state_34100__$1 = state_34100;
var statearr_34125_35717 = state_34100__$1;
(statearr_34125_35717[(2)] = inst_34090);

(statearr_34125_35717[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34101 === (17))){
var inst_34055 = (state_34100[(10)]);
var inst_34064 = cljs.core.first(inst_34055);
var inst_34065 = cljs.core.async.muxch_STAR_(inst_34064);
var inst_34066 = cljs.core.async.close_BANG_(inst_34065);
var inst_34067 = cljs.core.next(inst_34055);
var inst_34041 = inst_34067;
var inst_34042 = null;
var inst_34043 = (0);
var inst_34044 = (0);
var state_34100__$1 = (function (){var statearr_34126 = state_34100;
(statearr_34126[(12)] = inst_34043);

(statearr_34126[(13)] = inst_34066);

(statearr_34126[(14)] = inst_34042);

(statearr_34126[(15)] = inst_34044);

(statearr_34126[(16)] = inst_34041);

return statearr_34126;
})();
var statearr_34127_35718 = state_34100__$1;
(statearr_34127_35718[(2)] = null);

(statearr_34127_35718[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34101 === (3))){
var inst_34098 = (state_34100[(2)]);
var state_34100__$1 = state_34100;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34100__$1,inst_34098);
} else {
if((state_val_34101 === (12))){
var inst_34075 = (state_34100[(2)]);
var state_34100__$1 = state_34100;
var statearr_34128_35720 = state_34100__$1;
(statearr_34128_35720[(2)] = inst_34075);

(statearr_34128_35720[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34101 === (2))){
var state_34100__$1 = state_34100;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34100__$1,(4),ch);
} else {
if((state_val_34101 === (23))){
var state_34100__$1 = state_34100;
var statearr_34132_35721 = state_34100__$1;
(statearr_34132_35721[(2)] = null);

(statearr_34132_35721[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34101 === (19))){
var inst_34081 = (state_34100[(11)]);
var inst_34031 = (state_34100[(8)]);
var inst_34083 = cljs.core.async.muxch_STAR_(inst_34081);
var state_34100__$1 = state_34100;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34100__$1,(22),inst_34083,inst_34031);
} else {
if((state_val_34101 === (11))){
var inst_34055 = (state_34100[(10)]);
var inst_34041 = (state_34100[(16)]);
var inst_34055__$1 = cljs.core.seq(inst_34041);
var state_34100__$1 = (function (){var statearr_34133 = state_34100;
(statearr_34133[(10)] = inst_34055__$1);

return statearr_34133;
})();
if(inst_34055__$1){
var statearr_34135_35723 = state_34100__$1;
(statearr_34135_35723[(1)] = (13));

} else {
var statearr_34137_35730 = state_34100__$1;
(statearr_34137_35730[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34101 === (9))){
var inst_34077 = (state_34100[(2)]);
var state_34100__$1 = state_34100;
var statearr_34138_35731 = state_34100__$1;
(statearr_34138_35731[(2)] = inst_34077);

(statearr_34138_35731[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34101 === (5))){
var inst_34038 = cljs.core.deref(mults);
var inst_34039 = cljs.core.vals(inst_34038);
var inst_34040 = cljs.core.seq(inst_34039);
var inst_34041 = inst_34040;
var inst_34042 = null;
var inst_34043 = (0);
var inst_34044 = (0);
var state_34100__$1 = (function (){var statearr_34139 = state_34100;
(statearr_34139[(12)] = inst_34043);

(statearr_34139[(14)] = inst_34042);

(statearr_34139[(15)] = inst_34044);

(statearr_34139[(16)] = inst_34041);

return statearr_34139;
})();
var statearr_34140_35732 = state_34100__$1;
(statearr_34140_35732[(2)] = null);

(statearr_34140_35732[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34101 === (14))){
var state_34100__$1 = state_34100;
var statearr_34146_35733 = state_34100__$1;
(statearr_34146_35733[(2)] = null);

(statearr_34146_35733[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34101 === (16))){
var inst_34055 = (state_34100[(10)]);
var inst_34059 = cljs.core.chunk_first(inst_34055);
var inst_34060 = cljs.core.chunk_rest(inst_34055);
var inst_34061 = cljs.core.count(inst_34059);
var inst_34041 = inst_34060;
var inst_34042 = inst_34059;
var inst_34043 = inst_34061;
var inst_34044 = (0);
var state_34100__$1 = (function (){var statearr_34147 = state_34100;
(statearr_34147[(12)] = inst_34043);

(statearr_34147[(14)] = inst_34042);

(statearr_34147[(15)] = inst_34044);

(statearr_34147[(16)] = inst_34041);

return statearr_34147;
})();
var statearr_34148_35734 = state_34100__$1;
(statearr_34148_35734[(2)] = null);

(statearr_34148_35734[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34101 === (10))){
var inst_34043 = (state_34100[(12)]);
var inst_34042 = (state_34100[(14)]);
var inst_34044 = (state_34100[(15)]);
var inst_34041 = (state_34100[(16)]);
var inst_34049 = cljs.core._nth(inst_34042,inst_34044);
var inst_34050 = cljs.core.async.muxch_STAR_(inst_34049);
var inst_34051 = cljs.core.async.close_BANG_(inst_34050);
var inst_34052 = (inst_34044 + (1));
var tmp34141 = inst_34043;
var tmp34142 = inst_34042;
var tmp34143 = inst_34041;
var inst_34041__$1 = tmp34143;
var inst_34042__$1 = tmp34142;
var inst_34043__$1 = tmp34141;
var inst_34044__$1 = inst_34052;
var state_34100__$1 = (function (){var statearr_34149 = state_34100;
(statearr_34149[(12)] = inst_34043__$1);

(statearr_34149[(14)] = inst_34042__$1);

(statearr_34149[(17)] = inst_34051);

(statearr_34149[(15)] = inst_34044__$1);

(statearr_34149[(16)] = inst_34041__$1);

return statearr_34149;
})();
var statearr_34150_35744 = state_34100__$1;
(statearr_34150_35744[(2)] = null);

(statearr_34150_35744[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34101 === (18))){
var inst_34070 = (state_34100[(2)]);
var state_34100__$1 = state_34100;
var statearr_34151_35745 = state_34100__$1;
(statearr_34151_35745[(2)] = inst_34070);

(statearr_34151_35745[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34101 === (8))){
var inst_34043 = (state_34100[(12)]);
var inst_34044 = (state_34100[(15)]);
var inst_34046 = (inst_34044 < inst_34043);
var inst_34047 = inst_34046;
var state_34100__$1 = state_34100;
if(cljs.core.truth_(inst_34047)){
var statearr_34153_35747 = state_34100__$1;
(statearr_34153_35747[(1)] = (10));

} else {
var statearr_34154_35748 = state_34100__$1;
(statearr_34154_35748[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__31998__auto__ = null;
var cljs$core$async$state_machine__31998__auto____0 = (function (){
var statearr_34156 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34156[(0)] = cljs$core$async$state_machine__31998__auto__);

(statearr_34156[(1)] = (1));

return statearr_34156;
});
var cljs$core$async$state_machine__31998__auto____1 = (function (state_34100){
while(true){
var ret_value__31999__auto__ = (function (){try{while(true){
var result__32000__auto__ = switch__31997__auto__(state_34100);
if(cljs.core.keyword_identical_QMARK_(result__32000__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32000__auto__;
}
break;
}
}catch (e34157){var ex__32001__auto__ = e34157;
var statearr_34158_35749 = state_34100;
(statearr_34158_35749[(2)] = ex__32001__auto__);


if(cljs.core.seq((state_34100[(4)]))){
var statearr_34159_35750 = state_34100;
(statearr_34159_35750[(1)] = cljs.core.first((state_34100[(4)])));

} else {
throw ex__32001__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__31999__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35757 = state_34100;
state_34100 = G__35757;
continue;
} else {
return ret_value__31999__auto__;
}
break;
}
});
cljs$core$async$state_machine__31998__auto__ = function(state_34100){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31998__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31998__auto____1.call(this,state_34100);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__31998__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31998__auto____0;
cljs$core$async$state_machine__31998__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31998__auto____1;
return cljs$core$async$state_machine__31998__auto__;
})()
})();
var state__32208__auto__ = (function (){var statearr_34160 = f__32207__auto__();
(statearr_34160[(6)] = c__32206__auto___35674);

return statearr_34160;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32208__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__34162 = arguments.length;
switch (G__34162) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__34178 = arguments.length;
switch (G__34178) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__34186 = arguments.length;
switch (G__34186) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
var c__32206__auto___35769 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32207__auto__ = (function (){var switch__31997__auto__ = (function (state_34259){
var state_val_34261 = (state_34259[(1)]);
if((state_val_34261 === (7))){
var state_34259__$1 = state_34259;
var statearr_34265_35771 = state_34259__$1;
(statearr_34265_35771[(2)] = null);

(statearr_34265_35771[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34261 === (1))){
var state_34259__$1 = state_34259;
var statearr_34268_35772 = state_34259__$1;
(statearr_34268_35772[(2)] = null);

(statearr_34268_35772[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34261 === (4))){
var inst_34208 = (state_34259[(7)]);
var inst_34209 = (state_34259[(8)]);
var inst_34211 = (inst_34209 < inst_34208);
var state_34259__$1 = state_34259;
if(cljs.core.truth_(inst_34211)){
var statearr_34275_35773 = state_34259__$1;
(statearr_34275_35773[(1)] = (6));

} else {
var statearr_34277_35776 = state_34259__$1;
(statearr_34277_35776[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34261 === (15))){
var inst_34242 = (state_34259[(9)]);
var inst_34248 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_34242);
var state_34259__$1 = state_34259;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34259__$1,(17),out,inst_34248);
} else {
if((state_val_34261 === (13))){
var inst_34242 = (state_34259[(9)]);
var inst_34242__$1 = (state_34259[(2)]);
var inst_34243 = cljs.core.some(cljs.core.nil_QMARK_,inst_34242__$1);
var state_34259__$1 = (function (){var statearr_34283 = state_34259;
(statearr_34283[(9)] = inst_34242__$1);

return statearr_34283;
})();
if(cljs.core.truth_(inst_34243)){
var statearr_34286_35777 = state_34259__$1;
(statearr_34286_35777[(1)] = (14));

} else {
var statearr_34287_35778 = state_34259__$1;
(statearr_34287_35778[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34261 === (6))){
var state_34259__$1 = state_34259;
var statearr_34290_35779 = state_34259__$1;
(statearr_34290_35779[(2)] = null);

(statearr_34290_35779[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34261 === (17))){
var inst_34250 = (state_34259[(2)]);
var state_34259__$1 = (function (){var statearr_34302 = state_34259;
(statearr_34302[(10)] = inst_34250);

return statearr_34302;
})();
var statearr_34303_35780 = state_34259__$1;
(statearr_34303_35780[(2)] = null);

(statearr_34303_35780[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34261 === (3))){
var inst_34255 = (state_34259[(2)]);
var state_34259__$1 = state_34259;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34259__$1,inst_34255);
} else {
if((state_val_34261 === (12))){
var _ = (function (){var statearr_34309 = state_34259;
(statearr_34309[(4)] = cljs.core.rest((state_34259[(4)])));

return statearr_34309;
})();
var state_34259__$1 = state_34259;
var ex34300 = (state_34259__$1[(2)]);
var statearr_34312_35783 = state_34259__$1;
(statearr_34312_35783[(5)] = ex34300);


if((ex34300 instanceof Object)){
var statearr_34316_35785 = state_34259__$1;
(statearr_34316_35785[(1)] = (11));

(statearr_34316_35785[(5)] = null);

} else {
throw ex34300;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34261 === (2))){
var inst_34207 = cljs.core.reset_BANG_(dctr,cnt);
var inst_34208 = cnt;
var inst_34209 = (0);
var state_34259__$1 = (function (){var statearr_34321 = state_34259;
(statearr_34321[(11)] = inst_34207);

(statearr_34321[(7)] = inst_34208);

(statearr_34321[(8)] = inst_34209);

return statearr_34321;
})();
var statearr_34327_35786 = state_34259__$1;
(statearr_34327_35786[(2)] = null);

(statearr_34327_35786[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34261 === (11))){
var inst_34218 = (state_34259[(2)]);
var inst_34219 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_34259__$1 = (function (){var statearr_34330 = state_34259;
(statearr_34330[(12)] = inst_34218);

return statearr_34330;
})();
var statearr_34332_35788 = state_34259__$1;
(statearr_34332_35788[(2)] = inst_34219);

(statearr_34332_35788[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34261 === (9))){
var inst_34209 = (state_34259[(8)]);
var _ = (function (){var statearr_34334 = state_34259;
(statearr_34334[(4)] = cljs.core.cons((12),(state_34259[(4)])));

return statearr_34334;
})();
var inst_34228 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_34209) : chs__$1.call(null,inst_34209));
var inst_34229 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_34209) : done.call(null,inst_34209));
var inst_34230 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_34228,inst_34229);
var ___$1 = (function (){var statearr_34336 = state_34259;
(statearr_34336[(4)] = cljs.core.rest((state_34259[(4)])));

return statearr_34336;
})();
var state_34259__$1 = state_34259;
var statearr_34338_35798 = state_34259__$1;
(statearr_34338_35798[(2)] = inst_34230);

(statearr_34338_35798[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34261 === (5))){
var inst_34240 = (state_34259[(2)]);
var state_34259__$1 = (function (){var statearr_34341 = state_34259;
(statearr_34341[(13)] = inst_34240);

return statearr_34341;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34259__$1,(13),dchan);
} else {
if((state_val_34261 === (14))){
var inst_34245 = cljs.core.async.close_BANG_(out);
var state_34259__$1 = state_34259;
var statearr_34343_35799 = state_34259__$1;
(statearr_34343_35799[(2)] = inst_34245);

(statearr_34343_35799[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34261 === (16))){
var inst_34253 = (state_34259[(2)]);
var state_34259__$1 = state_34259;
var statearr_34346_35801 = state_34259__$1;
(statearr_34346_35801[(2)] = inst_34253);

(statearr_34346_35801[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34261 === (10))){
var inst_34209 = (state_34259[(8)]);
var inst_34233 = (state_34259[(2)]);
var inst_34234 = (inst_34209 + (1));
var inst_34209__$1 = inst_34234;
var state_34259__$1 = (function (){var statearr_34348 = state_34259;
(statearr_34348[(14)] = inst_34233);

(statearr_34348[(8)] = inst_34209__$1);

return statearr_34348;
})();
var statearr_34350_35806 = state_34259__$1;
(statearr_34350_35806[(2)] = null);

(statearr_34350_35806[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34261 === (8))){
var inst_34238 = (state_34259[(2)]);
var state_34259__$1 = state_34259;
var statearr_34353_35807 = state_34259__$1;
(statearr_34353_35807[(2)] = inst_34238);

(statearr_34353_35807[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__31998__auto__ = null;
var cljs$core$async$state_machine__31998__auto____0 = (function (){
var statearr_34355 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34355[(0)] = cljs$core$async$state_machine__31998__auto__);

(statearr_34355[(1)] = (1));

return statearr_34355;
});
var cljs$core$async$state_machine__31998__auto____1 = (function (state_34259){
while(true){
var ret_value__31999__auto__ = (function (){try{while(true){
var result__32000__auto__ = switch__31997__auto__(state_34259);
if(cljs.core.keyword_identical_QMARK_(result__32000__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32000__auto__;
}
break;
}
}catch (e34356){var ex__32001__auto__ = e34356;
var statearr_34359_35809 = state_34259;
(statearr_34359_35809[(2)] = ex__32001__auto__);


if(cljs.core.seq((state_34259[(4)]))){
var statearr_34362_35810 = state_34259;
(statearr_34362_35810[(1)] = cljs.core.first((state_34259[(4)])));

} else {
throw ex__32001__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__31999__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35812 = state_34259;
state_34259 = G__35812;
continue;
} else {
return ret_value__31999__auto__;
}
break;
}
});
cljs$core$async$state_machine__31998__auto__ = function(state_34259){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31998__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31998__auto____1.call(this,state_34259);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__31998__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31998__auto____0;
cljs$core$async$state_machine__31998__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31998__auto____1;
return cljs$core$async$state_machine__31998__auto__;
})()
})();
var state__32208__auto__ = (function (){var statearr_34365 = f__32207__auto__();
(statearr_34365[(6)] = c__32206__auto___35769);

return statearr_34365;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32208__auto__);
}));


return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__34368 = arguments.length;
switch (G__34368) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__32206__auto___35814 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32207__auto__ = (function (){var switch__31997__auto__ = (function (state_34407){
var state_val_34408 = (state_34407[(1)]);
if((state_val_34408 === (7))){
var inst_34380 = (state_34407[(7)]);
var inst_34381 = (state_34407[(8)]);
var inst_34380__$1 = (state_34407[(2)]);
var inst_34381__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34380__$1,(0),null);
var inst_34382 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34380__$1,(1),null);
var inst_34383 = (inst_34381__$1 == null);
var state_34407__$1 = (function (){var statearr_34413 = state_34407;
(statearr_34413[(7)] = inst_34380__$1);

(statearr_34413[(8)] = inst_34381__$1);

(statearr_34413[(9)] = inst_34382);

return statearr_34413;
})();
if(cljs.core.truth_(inst_34383)){
var statearr_34414_35817 = state_34407__$1;
(statearr_34414_35817[(1)] = (8));

} else {
var statearr_34415_35818 = state_34407__$1;
(statearr_34415_35818[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34408 === (1))){
var inst_34370 = cljs.core.vec(chs);
var inst_34371 = inst_34370;
var state_34407__$1 = (function (){var statearr_34416 = state_34407;
(statearr_34416[(10)] = inst_34371);

return statearr_34416;
})();
var statearr_34417_35820 = state_34407__$1;
(statearr_34417_35820[(2)] = null);

(statearr_34417_35820[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34408 === (4))){
var inst_34371 = (state_34407[(10)]);
var state_34407__$1 = state_34407;
return cljs.core.async.ioc_alts_BANG_(state_34407__$1,(7),inst_34371);
} else {
if((state_val_34408 === (6))){
var inst_34402 = (state_34407[(2)]);
var state_34407__$1 = state_34407;
var statearr_34418_35821 = state_34407__$1;
(statearr_34418_35821[(2)] = inst_34402);

(statearr_34418_35821[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34408 === (3))){
var inst_34404 = (state_34407[(2)]);
var state_34407__$1 = state_34407;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34407__$1,inst_34404);
} else {
if((state_val_34408 === (2))){
var inst_34371 = (state_34407[(10)]);
var inst_34373 = cljs.core.count(inst_34371);
var inst_34374 = (inst_34373 > (0));
var state_34407__$1 = state_34407;
if(cljs.core.truth_(inst_34374)){
var statearr_34420_35822 = state_34407__$1;
(statearr_34420_35822[(1)] = (4));

} else {
var statearr_34421_35823 = state_34407__$1;
(statearr_34421_35823[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34408 === (11))){
var inst_34371 = (state_34407[(10)]);
var inst_34395 = (state_34407[(2)]);
var tmp34419 = inst_34371;
var inst_34371__$1 = tmp34419;
var state_34407__$1 = (function (){var statearr_34422 = state_34407;
(statearr_34422[(11)] = inst_34395);

(statearr_34422[(10)] = inst_34371__$1);

return statearr_34422;
})();
var statearr_34423_35824 = state_34407__$1;
(statearr_34423_35824[(2)] = null);

(statearr_34423_35824[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34408 === (9))){
var inst_34381 = (state_34407[(8)]);
var state_34407__$1 = state_34407;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34407__$1,(11),out,inst_34381);
} else {
if((state_val_34408 === (5))){
var inst_34400 = cljs.core.async.close_BANG_(out);
var state_34407__$1 = state_34407;
var statearr_34425_35828 = state_34407__$1;
(statearr_34425_35828[(2)] = inst_34400);

(statearr_34425_35828[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34408 === (10))){
var inst_34398 = (state_34407[(2)]);
var state_34407__$1 = state_34407;
var statearr_34428_35829 = state_34407__$1;
(statearr_34428_35829[(2)] = inst_34398);

(statearr_34428_35829[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34408 === (8))){
var inst_34380 = (state_34407[(7)]);
var inst_34381 = (state_34407[(8)]);
var inst_34371 = (state_34407[(10)]);
var inst_34382 = (state_34407[(9)]);
var inst_34390 = (function (){var cs = inst_34371;
var vec__34376 = inst_34380;
var v = inst_34381;
var c = inst_34382;
return (function (p1__34366_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__34366_SHARP_);
});
})();
var inst_34391 = cljs.core.filterv(inst_34390,inst_34371);
var inst_34371__$1 = inst_34391;
var state_34407__$1 = (function (){var statearr_34430 = state_34407;
(statearr_34430[(10)] = inst_34371__$1);

return statearr_34430;
})();
var statearr_34431_35831 = state_34407__$1;
(statearr_34431_35831[(2)] = null);

(statearr_34431_35831[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__31998__auto__ = null;
var cljs$core$async$state_machine__31998__auto____0 = (function (){
var statearr_34433 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34433[(0)] = cljs$core$async$state_machine__31998__auto__);

(statearr_34433[(1)] = (1));

return statearr_34433;
});
var cljs$core$async$state_machine__31998__auto____1 = (function (state_34407){
while(true){
var ret_value__31999__auto__ = (function (){try{while(true){
var result__32000__auto__ = switch__31997__auto__(state_34407);
if(cljs.core.keyword_identical_QMARK_(result__32000__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32000__auto__;
}
break;
}
}catch (e34434){var ex__32001__auto__ = e34434;
var statearr_34435_35833 = state_34407;
(statearr_34435_35833[(2)] = ex__32001__auto__);


if(cljs.core.seq((state_34407[(4)]))){
var statearr_34436_35834 = state_34407;
(statearr_34436_35834[(1)] = cljs.core.first((state_34407[(4)])));

} else {
throw ex__32001__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__31999__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35836 = state_34407;
state_34407 = G__35836;
continue;
} else {
return ret_value__31999__auto__;
}
break;
}
});
cljs$core$async$state_machine__31998__auto__ = function(state_34407){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31998__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31998__auto____1.call(this,state_34407);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__31998__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31998__auto____0;
cljs$core$async$state_machine__31998__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31998__auto____1;
return cljs$core$async$state_machine__31998__auto__;
})()
})();
var state__32208__auto__ = (function (){var statearr_34437 = f__32207__auto__();
(statearr_34437[(6)] = c__32206__auto___35814);

return statearr_34437;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32208__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__34439 = arguments.length;
switch (G__34439) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__32206__auto___35840 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32207__auto__ = (function (){var switch__31997__auto__ = (function (state_34466){
var state_val_34467 = (state_34466[(1)]);
if((state_val_34467 === (7))){
var inst_34448 = (state_34466[(7)]);
var inst_34448__$1 = (state_34466[(2)]);
var inst_34449 = (inst_34448__$1 == null);
var inst_34450 = cljs.core.not(inst_34449);
var state_34466__$1 = (function (){var statearr_34468 = state_34466;
(statearr_34468[(7)] = inst_34448__$1);

return statearr_34468;
})();
if(inst_34450){
var statearr_34469_35841 = state_34466__$1;
(statearr_34469_35841[(1)] = (8));

} else {
var statearr_34473_35843 = state_34466__$1;
(statearr_34473_35843[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34467 === (1))){
var inst_34442 = (0);
var state_34466__$1 = (function (){var statearr_34475 = state_34466;
(statearr_34475[(8)] = inst_34442);

return statearr_34475;
})();
var statearr_34477_35846 = state_34466__$1;
(statearr_34477_35846[(2)] = null);

(statearr_34477_35846[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34467 === (4))){
var state_34466__$1 = state_34466;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34466__$1,(7),ch);
} else {
if((state_val_34467 === (6))){
var inst_34461 = (state_34466[(2)]);
var state_34466__$1 = state_34466;
var statearr_34481_35852 = state_34466__$1;
(statearr_34481_35852[(2)] = inst_34461);

(statearr_34481_35852[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34467 === (3))){
var inst_34463 = (state_34466[(2)]);
var inst_34464 = cljs.core.async.close_BANG_(out);
var state_34466__$1 = (function (){var statearr_34483 = state_34466;
(statearr_34483[(9)] = inst_34463);

return statearr_34483;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_34466__$1,inst_34464);
} else {
if((state_val_34467 === (2))){
var inst_34442 = (state_34466[(8)]);
var inst_34445 = (inst_34442 < n);
var state_34466__$1 = state_34466;
if(cljs.core.truth_(inst_34445)){
var statearr_34484_35854 = state_34466__$1;
(statearr_34484_35854[(1)] = (4));

} else {
var statearr_34485_35856 = state_34466__$1;
(statearr_34485_35856[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34467 === (11))){
var inst_34442 = (state_34466[(8)]);
var inst_34453 = (state_34466[(2)]);
var inst_34454 = (inst_34442 + (1));
var inst_34442__$1 = inst_34454;
var state_34466__$1 = (function (){var statearr_34490 = state_34466;
(statearr_34490[(10)] = inst_34453);

(statearr_34490[(8)] = inst_34442__$1);

return statearr_34490;
})();
var statearr_34491_35858 = state_34466__$1;
(statearr_34491_35858[(2)] = null);

(statearr_34491_35858[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34467 === (9))){
var state_34466__$1 = state_34466;
var statearr_34492_35859 = state_34466__$1;
(statearr_34492_35859[(2)] = null);

(statearr_34492_35859[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34467 === (5))){
var state_34466__$1 = state_34466;
var statearr_34494_35861 = state_34466__$1;
(statearr_34494_35861[(2)] = null);

(statearr_34494_35861[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34467 === (10))){
var inst_34458 = (state_34466[(2)]);
var state_34466__$1 = state_34466;
var statearr_34496_35866 = state_34466__$1;
(statearr_34496_35866[(2)] = inst_34458);

(statearr_34496_35866[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34467 === (8))){
var inst_34448 = (state_34466[(7)]);
var state_34466__$1 = state_34466;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34466__$1,(11),out,inst_34448);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__31998__auto__ = null;
var cljs$core$async$state_machine__31998__auto____0 = (function (){
var statearr_34497 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_34497[(0)] = cljs$core$async$state_machine__31998__auto__);

(statearr_34497[(1)] = (1));

return statearr_34497;
});
var cljs$core$async$state_machine__31998__auto____1 = (function (state_34466){
while(true){
var ret_value__31999__auto__ = (function (){try{while(true){
var result__32000__auto__ = switch__31997__auto__(state_34466);
if(cljs.core.keyword_identical_QMARK_(result__32000__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32000__auto__;
}
break;
}
}catch (e34500){var ex__32001__auto__ = e34500;
var statearr_34503_35879 = state_34466;
(statearr_34503_35879[(2)] = ex__32001__auto__);


if(cljs.core.seq((state_34466[(4)]))){
var statearr_34507_35880 = state_34466;
(statearr_34507_35880[(1)] = cljs.core.first((state_34466[(4)])));

} else {
throw ex__32001__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__31999__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35885 = state_34466;
state_34466 = G__35885;
continue;
} else {
return ret_value__31999__auto__;
}
break;
}
});
cljs$core$async$state_machine__31998__auto__ = function(state_34466){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31998__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31998__auto____1.call(this,state_34466);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__31998__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31998__auto____0;
cljs$core$async$state_machine__31998__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31998__auto____1;
return cljs$core$async$state_machine__31998__auto__;
})()
})();
var state__32208__auto__ = (function (){var statearr_34510 = f__32207__auto__();
(statearr_34510[(6)] = c__32206__auto___35840);

return statearr_34510;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32208__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async34519 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34519 = (function (f,ch,meta34520){
this.f = f;
this.ch = ch;
this.meta34520 = meta34520;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async34519.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34521,meta34520__$1){
var self__ = this;
var _34521__$1 = this;
return (new cljs.core.async.t_cljs$core$async34519(self__.f,self__.ch,meta34520__$1));
}));

(cljs.core.async.t_cljs$core$async34519.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34521){
var self__ = this;
var _34521__$1 = this;
return self__.meta34520;
}));

(cljs.core.async.t_cljs$core$async34519.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34519.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async34519.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async34519.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34519.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async34534 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34534 = (function (f,ch,meta34520,_,fn1,meta34535){
this.f = f;
this.ch = ch;
this.meta34520 = meta34520;
this._ = _;
this.fn1 = fn1;
this.meta34535 = meta34535;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async34534.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34536,meta34535__$1){
var self__ = this;
var _34536__$1 = this;
return (new cljs.core.async.t_cljs$core$async34534(self__.f,self__.ch,self__.meta34520,self__._,self__.fn1,meta34535__$1));
}));

(cljs.core.async.t_cljs$core$async34534.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34536){
var self__ = this;
var _34536__$1 = this;
return self__.meta34535;
}));

(cljs.core.async.t_cljs$core$async34534.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34534.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async34534.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async34534.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__34515_SHARP_){
var G__34543 = (((p1__34515_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__34515_SHARP_) : self__.f.call(null,p1__34515_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__34543) : f1.call(null,G__34543));
});
}));

(cljs.core.async.t_cljs$core$async34534.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta34520","meta34520",-24261430,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async34519","cljs.core.async/t_cljs$core$async34519",-1574069270,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta34535","meta34535",453150187,null)], null);
}));

(cljs.core.async.t_cljs$core$async34534.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async34534.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34534");

(cljs.core.async.t_cljs$core$async34534.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async34534");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34534.
 */
cljs.core.async.__GT_t_cljs$core$async34534 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async34534(f__$1,ch__$1,meta34520__$1,___$2,fn1__$1,meta34535){
return (new cljs.core.async.t_cljs$core$async34534(f__$1,ch__$1,meta34520__$1,___$2,fn1__$1,meta34535));
});

}

return (new cljs.core.async.t_cljs$core$async34534(self__.f,self__.ch,self__.meta34520,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4115__auto__ = ret;
if(cljs.core.truth_(and__4115__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4115__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__34547 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__34547) : self__.f.call(null,G__34547));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async34519.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34519.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async34519.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta34520","meta34520",-24261430,null)], null);
}));

(cljs.core.async.t_cljs$core$async34519.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async34519.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34519");

(cljs.core.async.t_cljs$core$async34519.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async34519");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34519.
 */
cljs.core.async.__GT_t_cljs$core$async34519 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async34519(f__$1,ch__$1,meta34520){
return (new cljs.core.async.t_cljs$core$async34519(f__$1,ch__$1,meta34520));
});

}

return (new cljs.core.async.t_cljs$core$async34519(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async34548 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34548 = (function (f,ch,meta34549){
this.f = f;
this.ch = ch;
this.meta34549 = meta34549;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async34548.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34550,meta34549__$1){
var self__ = this;
var _34550__$1 = this;
return (new cljs.core.async.t_cljs$core$async34548(self__.f,self__.ch,meta34549__$1));
}));

(cljs.core.async.t_cljs$core$async34548.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34550){
var self__ = this;
var _34550__$1 = this;
return self__.meta34549;
}));

(cljs.core.async.t_cljs$core$async34548.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34548.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async34548.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34548.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async34548.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34548.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async34548.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta34549","meta34549",-1943449197,null)], null);
}));

(cljs.core.async.t_cljs$core$async34548.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async34548.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34548");

(cljs.core.async.t_cljs$core$async34548.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async34548");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34548.
 */
cljs.core.async.__GT_t_cljs$core$async34548 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async34548(f__$1,ch__$1,meta34549){
return (new cljs.core.async.t_cljs$core$async34548(f__$1,ch__$1,meta34549));
});

}

return (new cljs.core.async.t_cljs$core$async34548(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async34564 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34564 = (function (p,ch,meta34565){
this.p = p;
this.ch = ch;
this.meta34565 = meta34565;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async34564.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34566,meta34565__$1){
var self__ = this;
var _34566__$1 = this;
return (new cljs.core.async.t_cljs$core$async34564(self__.p,self__.ch,meta34565__$1));
}));

(cljs.core.async.t_cljs$core$async34564.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34566){
var self__ = this;
var _34566__$1 = this;
return self__.meta34565;
}));

(cljs.core.async.t_cljs$core$async34564.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34564.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async34564.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async34564.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34564.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async34564.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34564.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async34564.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta34565","meta34565",83515094,null)], null);
}));

(cljs.core.async.t_cljs$core$async34564.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async34564.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34564");

(cljs.core.async.t_cljs$core$async34564.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async34564");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34564.
 */
cljs.core.async.__GT_t_cljs$core$async34564 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async34564(p__$1,ch__$1,meta34565){
return (new cljs.core.async.t_cljs$core$async34564(p__$1,ch__$1,meta34565));
});

}

return (new cljs.core.async.t_cljs$core$async34564(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__34581 = arguments.length;
switch (G__34581) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__32206__auto___35998 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32207__auto__ = (function (){var switch__31997__auto__ = (function (state_34605){
var state_val_34606 = (state_34605[(1)]);
if((state_val_34606 === (7))){
var inst_34601 = (state_34605[(2)]);
var state_34605__$1 = state_34605;
var statearr_34608_36006 = state_34605__$1;
(statearr_34608_36006[(2)] = inst_34601);

(statearr_34608_36006[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34606 === (1))){
var state_34605__$1 = state_34605;
var statearr_34610_36015 = state_34605__$1;
(statearr_34610_36015[(2)] = null);

(statearr_34610_36015[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34606 === (4))){
var inst_34586 = (state_34605[(7)]);
var inst_34586__$1 = (state_34605[(2)]);
var inst_34587 = (inst_34586__$1 == null);
var state_34605__$1 = (function (){var statearr_34611 = state_34605;
(statearr_34611[(7)] = inst_34586__$1);

return statearr_34611;
})();
if(cljs.core.truth_(inst_34587)){
var statearr_34612_36022 = state_34605__$1;
(statearr_34612_36022[(1)] = (5));

} else {
var statearr_34613_36028 = state_34605__$1;
(statearr_34613_36028[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34606 === (6))){
var inst_34586 = (state_34605[(7)]);
var inst_34592 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_34586) : p.call(null,inst_34586));
var state_34605__$1 = state_34605;
if(cljs.core.truth_(inst_34592)){
var statearr_34615_36035 = state_34605__$1;
(statearr_34615_36035[(1)] = (8));

} else {
var statearr_34616_36036 = state_34605__$1;
(statearr_34616_36036[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34606 === (3))){
var inst_34603 = (state_34605[(2)]);
var state_34605__$1 = state_34605;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34605__$1,inst_34603);
} else {
if((state_val_34606 === (2))){
var state_34605__$1 = state_34605;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34605__$1,(4),ch);
} else {
if((state_val_34606 === (11))){
var inst_34595 = (state_34605[(2)]);
var state_34605__$1 = state_34605;
var statearr_34618_36049 = state_34605__$1;
(statearr_34618_36049[(2)] = inst_34595);

(statearr_34618_36049[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34606 === (9))){
var state_34605__$1 = state_34605;
var statearr_34619_36051 = state_34605__$1;
(statearr_34619_36051[(2)] = null);

(statearr_34619_36051[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34606 === (5))){
var inst_34589 = cljs.core.async.close_BANG_(out);
var state_34605__$1 = state_34605;
var statearr_34620_36059 = state_34605__$1;
(statearr_34620_36059[(2)] = inst_34589);

(statearr_34620_36059[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34606 === (10))){
var inst_34598 = (state_34605[(2)]);
var state_34605__$1 = (function (){var statearr_34622 = state_34605;
(statearr_34622[(8)] = inst_34598);

return statearr_34622;
})();
var statearr_34623_36072 = state_34605__$1;
(statearr_34623_36072[(2)] = null);

(statearr_34623_36072[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34606 === (8))){
var inst_34586 = (state_34605[(7)]);
var state_34605__$1 = state_34605;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34605__$1,(11),out,inst_34586);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__31998__auto__ = null;
var cljs$core$async$state_machine__31998__auto____0 = (function (){
var statearr_34624 = [null,null,null,null,null,null,null,null,null];
(statearr_34624[(0)] = cljs$core$async$state_machine__31998__auto__);

(statearr_34624[(1)] = (1));

return statearr_34624;
});
var cljs$core$async$state_machine__31998__auto____1 = (function (state_34605){
while(true){
var ret_value__31999__auto__ = (function (){try{while(true){
var result__32000__auto__ = switch__31997__auto__(state_34605);
if(cljs.core.keyword_identical_QMARK_(result__32000__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32000__auto__;
}
break;
}
}catch (e34625){var ex__32001__auto__ = e34625;
var statearr_34626_36083 = state_34605;
(statearr_34626_36083[(2)] = ex__32001__auto__);


if(cljs.core.seq((state_34605[(4)]))){
var statearr_34627_36084 = state_34605;
(statearr_34627_36084[(1)] = cljs.core.first((state_34605[(4)])));

} else {
throw ex__32001__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__31999__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36085 = state_34605;
state_34605 = G__36085;
continue;
} else {
return ret_value__31999__auto__;
}
break;
}
});
cljs$core$async$state_machine__31998__auto__ = function(state_34605){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31998__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31998__auto____1.call(this,state_34605);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__31998__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31998__auto____0;
cljs$core$async$state_machine__31998__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31998__auto____1;
return cljs$core$async$state_machine__31998__auto__;
})()
})();
var state__32208__auto__ = (function (){var statearr_34628 = f__32207__auto__();
(statearr_34628[(6)] = c__32206__auto___35998);

return statearr_34628;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32208__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__34630 = arguments.length;
switch (G__34630) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__32206__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32207__auto__ = (function (){var switch__31997__auto__ = (function (state_34701){
var state_val_34702 = (state_34701[(1)]);
if((state_val_34702 === (7))){
var inst_34697 = (state_34701[(2)]);
var state_34701__$1 = state_34701;
var statearr_34703_36094 = state_34701__$1;
(statearr_34703_36094[(2)] = inst_34697);

(statearr_34703_36094[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34702 === (20))){
var inst_34663 = (state_34701[(7)]);
var inst_34678 = (state_34701[(2)]);
var inst_34679 = cljs.core.next(inst_34663);
var inst_34645 = inst_34679;
var inst_34646 = null;
var inst_34647 = (0);
var inst_34648 = (0);
var state_34701__$1 = (function (){var statearr_34704 = state_34701;
(statearr_34704[(8)] = inst_34647);

(statearr_34704[(9)] = inst_34646);

(statearr_34704[(10)] = inst_34678);

(statearr_34704[(11)] = inst_34645);

(statearr_34704[(12)] = inst_34648);

return statearr_34704;
})();
var statearr_34705_36109 = state_34701__$1;
(statearr_34705_36109[(2)] = null);

(statearr_34705_36109[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34702 === (1))){
var state_34701__$1 = state_34701;
var statearr_34706_36113 = state_34701__$1;
(statearr_34706_36113[(2)] = null);

(statearr_34706_36113[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34702 === (4))){
var inst_34634 = (state_34701[(13)]);
var inst_34634__$1 = (state_34701[(2)]);
var inst_34635 = (inst_34634__$1 == null);
var state_34701__$1 = (function (){var statearr_34707 = state_34701;
(statearr_34707[(13)] = inst_34634__$1);

return statearr_34707;
})();
if(cljs.core.truth_(inst_34635)){
var statearr_34708_36118 = state_34701__$1;
(statearr_34708_36118[(1)] = (5));

} else {
var statearr_34709_36119 = state_34701__$1;
(statearr_34709_36119[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34702 === (15))){
var state_34701__$1 = state_34701;
var statearr_34713_36121 = state_34701__$1;
(statearr_34713_36121[(2)] = null);

(statearr_34713_36121[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34702 === (21))){
var state_34701__$1 = state_34701;
var statearr_34715_36122 = state_34701__$1;
(statearr_34715_36122[(2)] = null);

(statearr_34715_36122[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34702 === (13))){
var inst_34647 = (state_34701[(8)]);
var inst_34646 = (state_34701[(9)]);
var inst_34645 = (state_34701[(11)]);
var inst_34648 = (state_34701[(12)]);
var inst_34657 = (state_34701[(2)]);
var inst_34659 = (inst_34648 + (1));
var tmp34710 = inst_34647;
var tmp34711 = inst_34646;
var tmp34712 = inst_34645;
var inst_34645__$1 = tmp34712;
var inst_34646__$1 = tmp34711;
var inst_34647__$1 = tmp34710;
var inst_34648__$1 = inst_34659;
var state_34701__$1 = (function (){var statearr_34716 = state_34701;
(statearr_34716[(8)] = inst_34647__$1);

(statearr_34716[(14)] = inst_34657);

(statearr_34716[(9)] = inst_34646__$1);

(statearr_34716[(11)] = inst_34645__$1);

(statearr_34716[(12)] = inst_34648__$1);

return statearr_34716;
})();
var statearr_34717_36128 = state_34701__$1;
(statearr_34717_36128[(2)] = null);

(statearr_34717_36128[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34702 === (22))){
var state_34701__$1 = state_34701;
var statearr_34718_36129 = state_34701__$1;
(statearr_34718_36129[(2)] = null);

(statearr_34718_36129[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34702 === (6))){
var inst_34634 = (state_34701[(13)]);
var inst_34643 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_34634) : f.call(null,inst_34634));
var inst_34644 = cljs.core.seq(inst_34643);
var inst_34645 = inst_34644;
var inst_34646 = null;
var inst_34647 = (0);
var inst_34648 = (0);
var state_34701__$1 = (function (){var statearr_34719 = state_34701;
(statearr_34719[(8)] = inst_34647);

(statearr_34719[(9)] = inst_34646);

(statearr_34719[(11)] = inst_34645);

(statearr_34719[(12)] = inst_34648);

return statearr_34719;
})();
var statearr_34720_36130 = state_34701__$1;
(statearr_34720_36130[(2)] = null);

(statearr_34720_36130[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34702 === (17))){
var inst_34663 = (state_34701[(7)]);
var inst_34671 = cljs.core.chunk_first(inst_34663);
var inst_34672 = cljs.core.chunk_rest(inst_34663);
var inst_34673 = cljs.core.count(inst_34671);
var inst_34645 = inst_34672;
var inst_34646 = inst_34671;
var inst_34647 = inst_34673;
var inst_34648 = (0);
var state_34701__$1 = (function (){var statearr_34721 = state_34701;
(statearr_34721[(8)] = inst_34647);

(statearr_34721[(9)] = inst_34646);

(statearr_34721[(11)] = inst_34645);

(statearr_34721[(12)] = inst_34648);

return statearr_34721;
})();
var statearr_34722_36142 = state_34701__$1;
(statearr_34722_36142[(2)] = null);

(statearr_34722_36142[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34702 === (3))){
var inst_34699 = (state_34701[(2)]);
var state_34701__$1 = state_34701;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34701__$1,inst_34699);
} else {
if((state_val_34702 === (12))){
var inst_34687 = (state_34701[(2)]);
var state_34701__$1 = state_34701;
var statearr_34723_36154 = state_34701__$1;
(statearr_34723_36154[(2)] = inst_34687);

(statearr_34723_36154[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34702 === (2))){
var state_34701__$1 = state_34701;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34701__$1,(4),in$);
} else {
if((state_val_34702 === (23))){
var inst_34695 = (state_34701[(2)]);
var state_34701__$1 = state_34701;
var statearr_34724_36160 = state_34701__$1;
(statearr_34724_36160[(2)] = inst_34695);

(statearr_34724_36160[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34702 === (19))){
var inst_34682 = (state_34701[(2)]);
var state_34701__$1 = state_34701;
var statearr_34725_36161 = state_34701__$1;
(statearr_34725_36161[(2)] = inst_34682);

(statearr_34725_36161[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34702 === (11))){
var inst_34663 = (state_34701[(7)]);
var inst_34645 = (state_34701[(11)]);
var inst_34663__$1 = cljs.core.seq(inst_34645);
var state_34701__$1 = (function (){var statearr_34726 = state_34701;
(statearr_34726[(7)] = inst_34663__$1);

return statearr_34726;
})();
if(inst_34663__$1){
var statearr_34727_36166 = state_34701__$1;
(statearr_34727_36166[(1)] = (14));

} else {
var statearr_34728_36167 = state_34701__$1;
(statearr_34728_36167[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34702 === (9))){
var inst_34689 = (state_34701[(2)]);
var inst_34690 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_34701__$1 = (function (){var statearr_34729 = state_34701;
(statearr_34729[(15)] = inst_34689);

return statearr_34729;
})();
if(cljs.core.truth_(inst_34690)){
var statearr_34730_36178 = state_34701__$1;
(statearr_34730_36178[(1)] = (21));

} else {
var statearr_34731_36179 = state_34701__$1;
(statearr_34731_36179[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34702 === (5))){
var inst_34637 = cljs.core.async.close_BANG_(out);
var state_34701__$1 = state_34701;
var statearr_34732_36182 = state_34701__$1;
(statearr_34732_36182[(2)] = inst_34637);

(statearr_34732_36182[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34702 === (14))){
var inst_34663 = (state_34701[(7)]);
var inst_34669 = cljs.core.chunked_seq_QMARK_(inst_34663);
var state_34701__$1 = state_34701;
if(inst_34669){
var statearr_34733_36186 = state_34701__$1;
(statearr_34733_36186[(1)] = (17));

} else {
var statearr_34734_36187 = state_34701__$1;
(statearr_34734_36187[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34702 === (16))){
var inst_34685 = (state_34701[(2)]);
var state_34701__$1 = state_34701;
var statearr_34735_36192 = state_34701__$1;
(statearr_34735_36192[(2)] = inst_34685);

(statearr_34735_36192[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34702 === (10))){
var inst_34646 = (state_34701[(9)]);
var inst_34648 = (state_34701[(12)]);
var inst_34654 = cljs.core._nth(inst_34646,inst_34648);
var state_34701__$1 = state_34701;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34701__$1,(13),out,inst_34654);
} else {
if((state_val_34702 === (18))){
var inst_34663 = (state_34701[(7)]);
var inst_34676 = cljs.core.first(inst_34663);
var state_34701__$1 = state_34701;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34701__$1,(20),out,inst_34676);
} else {
if((state_val_34702 === (8))){
var inst_34647 = (state_34701[(8)]);
var inst_34648 = (state_34701[(12)]);
var inst_34650 = (inst_34648 < inst_34647);
var inst_34651 = inst_34650;
var state_34701__$1 = state_34701;
if(cljs.core.truth_(inst_34651)){
var statearr_34736_36200 = state_34701__$1;
(statearr_34736_36200[(1)] = (10));

} else {
var statearr_34737_36201 = state_34701__$1;
(statearr_34737_36201[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__31998__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__31998__auto____0 = (function (){
var statearr_34738 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34738[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__31998__auto__);

(statearr_34738[(1)] = (1));

return statearr_34738;
});
var cljs$core$async$mapcat_STAR__$_state_machine__31998__auto____1 = (function (state_34701){
while(true){
var ret_value__31999__auto__ = (function (){try{while(true){
var result__32000__auto__ = switch__31997__auto__(state_34701);
if(cljs.core.keyword_identical_QMARK_(result__32000__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32000__auto__;
}
break;
}
}catch (e34739){var ex__32001__auto__ = e34739;
var statearr_34740_36202 = state_34701;
(statearr_34740_36202[(2)] = ex__32001__auto__);


if(cljs.core.seq((state_34701[(4)]))){
var statearr_34741_36204 = state_34701;
(statearr_34741_36204[(1)] = cljs.core.first((state_34701[(4)])));

} else {
throw ex__32001__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__31999__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36205 = state_34701;
state_34701 = G__36205;
continue;
} else {
return ret_value__31999__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__31998__auto__ = function(state_34701){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__31998__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__31998__auto____1.call(this,state_34701);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__31998__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__31998__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__31998__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__31998__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__31998__auto__;
})()
})();
var state__32208__auto__ = (function (){var statearr_34742 = f__32207__auto__();
(statearr_34742[(6)] = c__32206__auto__);

return statearr_34742;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32208__auto__);
}));

return c__32206__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__34744 = arguments.length;
switch (G__34744) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__34747 = arguments.length;
switch (G__34747) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__34751 = arguments.length;
switch (G__34751) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__32206__auto___36225 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32207__auto__ = (function (){var switch__31997__auto__ = (function (state_34775){
var state_val_34776 = (state_34775[(1)]);
if((state_val_34776 === (7))){
var inst_34770 = (state_34775[(2)]);
var state_34775__$1 = state_34775;
var statearr_34778_36231 = state_34775__$1;
(statearr_34778_36231[(2)] = inst_34770);

(statearr_34778_36231[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34776 === (1))){
var inst_34752 = null;
var state_34775__$1 = (function (){var statearr_34779 = state_34775;
(statearr_34779[(7)] = inst_34752);

return statearr_34779;
})();
var statearr_34780_36232 = state_34775__$1;
(statearr_34780_36232[(2)] = null);

(statearr_34780_36232[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34776 === (4))){
var inst_34755 = (state_34775[(8)]);
var inst_34755__$1 = (state_34775[(2)]);
var inst_34756 = (inst_34755__$1 == null);
var inst_34757 = cljs.core.not(inst_34756);
var state_34775__$1 = (function (){var statearr_34781 = state_34775;
(statearr_34781[(8)] = inst_34755__$1);

return statearr_34781;
})();
if(inst_34757){
var statearr_34782_36233 = state_34775__$1;
(statearr_34782_36233[(1)] = (5));

} else {
var statearr_34783_36234 = state_34775__$1;
(statearr_34783_36234[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34776 === (6))){
var state_34775__$1 = state_34775;
var statearr_34784_36239 = state_34775__$1;
(statearr_34784_36239[(2)] = null);

(statearr_34784_36239[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34776 === (3))){
var inst_34772 = (state_34775[(2)]);
var inst_34773 = cljs.core.async.close_BANG_(out);
var state_34775__$1 = (function (){var statearr_34785 = state_34775;
(statearr_34785[(9)] = inst_34772);

return statearr_34785;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_34775__$1,inst_34773);
} else {
if((state_val_34776 === (2))){
var state_34775__$1 = state_34775;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34775__$1,(4),ch);
} else {
if((state_val_34776 === (11))){
var inst_34755 = (state_34775[(8)]);
var inst_34764 = (state_34775[(2)]);
var inst_34752 = inst_34755;
var state_34775__$1 = (function (){var statearr_34786 = state_34775;
(statearr_34786[(10)] = inst_34764);

(statearr_34786[(7)] = inst_34752);

return statearr_34786;
})();
var statearr_34787_36245 = state_34775__$1;
(statearr_34787_36245[(2)] = null);

(statearr_34787_36245[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34776 === (9))){
var inst_34755 = (state_34775[(8)]);
var state_34775__$1 = state_34775;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34775__$1,(11),out,inst_34755);
} else {
if((state_val_34776 === (5))){
var inst_34752 = (state_34775[(7)]);
var inst_34755 = (state_34775[(8)]);
var inst_34759 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_34755,inst_34752);
var state_34775__$1 = state_34775;
if(inst_34759){
var statearr_34789_36246 = state_34775__$1;
(statearr_34789_36246[(1)] = (8));

} else {
var statearr_34790_36247 = state_34775__$1;
(statearr_34790_36247[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34776 === (10))){
var inst_34767 = (state_34775[(2)]);
var state_34775__$1 = state_34775;
var statearr_34791_36251 = state_34775__$1;
(statearr_34791_36251[(2)] = inst_34767);

(statearr_34791_36251[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34776 === (8))){
var inst_34752 = (state_34775[(7)]);
var tmp34788 = inst_34752;
var inst_34752__$1 = tmp34788;
var state_34775__$1 = (function (){var statearr_34792 = state_34775;
(statearr_34792[(7)] = inst_34752__$1);

return statearr_34792;
})();
var statearr_34794_36254 = state_34775__$1;
(statearr_34794_36254[(2)] = null);

(statearr_34794_36254[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__31998__auto__ = null;
var cljs$core$async$state_machine__31998__auto____0 = (function (){
var statearr_34795 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_34795[(0)] = cljs$core$async$state_machine__31998__auto__);

(statearr_34795[(1)] = (1));

return statearr_34795;
});
var cljs$core$async$state_machine__31998__auto____1 = (function (state_34775){
while(true){
var ret_value__31999__auto__ = (function (){try{while(true){
var result__32000__auto__ = switch__31997__auto__(state_34775);
if(cljs.core.keyword_identical_QMARK_(result__32000__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32000__auto__;
}
break;
}
}catch (e34796){var ex__32001__auto__ = e34796;
var statearr_34797_36258 = state_34775;
(statearr_34797_36258[(2)] = ex__32001__auto__);


if(cljs.core.seq((state_34775[(4)]))){
var statearr_34799_36259 = state_34775;
(statearr_34799_36259[(1)] = cljs.core.first((state_34775[(4)])));

} else {
throw ex__32001__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__31999__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36260 = state_34775;
state_34775 = G__36260;
continue;
} else {
return ret_value__31999__auto__;
}
break;
}
});
cljs$core$async$state_machine__31998__auto__ = function(state_34775){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31998__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31998__auto____1.call(this,state_34775);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__31998__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31998__auto____0;
cljs$core$async$state_machine__31998__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31998__auto____1;
return cljs$core$async$state_machine__31998__auto__;
})()
})();
var state__32208__auto__ = (function (){var statearr_34800 = f__32207__auto__();
(statearr_34800[(6)] = c__32206__auto___36225);

return statearr_34800;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32208__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__34802 = arguments.length;
switch (G__34802) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__32206__auto___36265 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32207__auto__ = (function (){var switch__31997__auto__ = (function (state_34840){
var state_val_34841 = (state_34840[(1)]);
if((state_val_34841 === (7))){
var inst_34836 = (state_34840[(2)]);
var state_34840__$1 = state_34840;
var statearr_34844_36269 = state_34840__$1;
(statearr_34844_36269[(2)] = inst_34836);

(statearr_34844_36269[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34841 === (1))){
var inst_34803 = (new Array(n));
var inst_34804 = inst_34803;
var inst_34805 = (0);
var state_34840__$1 = (function (){var statearr_34845 = state_34840;
(statearr_34845[(7)] = inst_34804);

(statearr_34845[(8)] = inst_34805);

return statearr_34845;
})();
var statearr_34846_36271 = state_34840__$1;
(statearr_34846_36271[(2)] = null);

(statearr_34846_36271[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34841 === (4))){
var inst_34808 = (state_34840[(9)]);
var inst_34808__$1 = (state_34840[(2)]);
var inst_34809 = (inst_34808__$1 == null);
var inst_34810 = cljs.core.not(inst_34809);
var state_34840__$1 = (function (){var statearr_34847 = state_34840;
(statearr_34847[(9)] = inst_34808__$1);

return statearr_34847;
})();
if(inst_34810){
var statearr_34848_36272 = state_34840__$1;
(statearr_34848_36272[(1)] = (5));

} else {
var statearr_34849_36274 = state_34840__$1;
(statearr_34849_36274[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34841 === (15))){
var inst_34830 = (state_34840[(2)]);
var state_34840__$1 = state_34840;
var statearr_34850_36278 = state_34840__$1;
(statearr_34850_36278[(2)] = inst_34830);

(statearr_34850_36278[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34841 === (13))){
var state_34840__$1 = state_34840;
var statearr_34851_36279 = state_34840__$1;
(statearr_34851_36279[(2)] = null);

(statearr_34851_36279[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34841 === (6))){
var inst_34805 = (state_34840[(8)]);
var inst_34826 = (inst_34805 > (0));
var state_34840__$1 = state_34840;
if(cljs.core.truth_(inst_34826)){
var statearr_34852_36280 = state_34840__$1;
(statearr_34852_36280[(1)] = (12));

} else {
var statearr_34853_36281 = state_34840__$1;
(statearr_34853_36281[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34841 === (3))){
var inst_34838 = (state_34840[(2)]);
var state_34840__$1 = state_34840;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34840__$1,inst_34838);
} else {
if((state_val_34841 === (12))){
var inst_34804 = (state_34840[(7)]);
var inst_34828 = cljs.core.vec(inst_34804);
var state_34840__$1 = state_34840;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34840__$1,(15),out,inst_34828);
} else {
if((state_val_34841 === (2))){
var state_34840__$1 = state_34840;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34840__$1,(4),ch);
} else {
if((state_val_34841 === (11))){
var inst_34820 = (state_34840[(2)]);
var inst_34821 = (new Array(n));
var inst_34804 = inst_34821;
var inst_34805 = (0);
var state_34840__$1 = (function (){var statearr_34854 = state_34840;
(statearr_34854[(7)] = inst_34804);

(statearr_34854[(8)] = inst_34805);

(statearr_34854[(10)] = inst_34820);

return statearr_34854;
})();
var statearr_34855_36286 = state_34840__$1;
(statearr_34855_36286[(2)] = null);

(statearr_34855_36286[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34841 === (9))){
var inst_34804 = (state_34840[(7)]);
var inst_34818 = cljs.core.vec(inst_34804);
var state_34840__$1 = state_34840;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34840__$1,(11),out,inst_34818);
} else {
if((state_val_34841 === (5))){
var inst_34808 = (state_34840[(9)]);
var inst_34813 = (state_34840[(11)]);
var inst_34804 = (state_34840[(7)]);
var inst_34805 = (state_34840[(8)]);
var inst_34812 = (inst_34804[inst_34805] = inst_34808);
var inst_34813__$1 = (inst_34805 + (1));
var inst_34814 = (inst_34813__$1 < n);
var state_34840__$1 = (function (){var statearr_34857 = state_34840;
(statearr_34857[(11)] = inst_34813__$1);

(statearr_34857[(12)] = inst_34812);

return statearr_34857;
})();
if(cljs.core.truth_(inst_34814)){
var statearr_34859_36287 = state_34840__$1;
(statearr_34859_36287[(1)] = (8));

} else {
var statearr_34860_36288 = state_34840__$1;
(statearr_34860_36288[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34841 === (14))){
var inst_34833 = (state_34840[(2)]);
var inst_34834 = cljs.core.async.close_BANG_(out);
var state_34840__$1 = (function (){var statearr_34862 = state_34840;
(statearr_34862[(13)] = inst_34833);

return statearr_34862;
})();
var statearr_34863_36290 = state_34840__$1;
(statearr_34863_36290[(2)] = inst_34834);

(statearr_34863_36290[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34841 === (10))){
var inst_34824 = (state_34840[(2)]);
var state_34840__$1 = state_34840;
var statearr_34866_36293 = state_34840__$1;
(statearr_34866_36293[(2)] = inst_34824);

(statearr_34866_36293[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34841 === (8))){
var inst_34813 = (state_34840[(11)]);
var inst_34804 = (state_34840[(7)]);
var tmp34861 = inst_34804;
var inst_34804__$1 = tmp34861;
var inst_34805 = inst_34813;
var state_34840__$1 = (function (){var statearr_34869 = state_34840;
(statearr_34869[(7)] = inst_34804__$1);

(statearr_34869[(8)] = inst_34805);

return statearr_34869;
})();
var statearr_34871_36295 = state_34840__$1;
(statearr_34871_36295[(2)] = null);

(statearr_34871_36295[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__31998__auto__ = null;
var cljs$core$async$state_machine__31998__auto____0 = (function (){
var statearr_34876 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34876[(0)] = cljs$core$async$state_machine__31998__auto__);

(statearr_34876[(1)] = (1));

return statearr_34876;
});
var cljs$core$async$state_machine__31998__auto____1 = (function (state_34840){
while(true){
var ret_value__31999__auto__ = (function (){try{while(true){
var result__32000__auto__ = switch__31997__auto__(state_34840);
if(cljs.core.keyword_identical_QMARK_(result__32000__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32000__auto__;
}
break;
}
}catch (e34878){var ex__32001__auto__ = e34878;
var statearr_34879_36297 = state_34840;
(statearr_34879_36297[(2)] = ex__32001__auto__);


if(cljs.core.seq((state_34840[(4)]))){
var statearr_34880_36298 = state_34840;
(statearr_34880_36298[(1)] = cljs.core.first((state_34840[(4)])));

} else {
throw ex__32001__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__31999__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36299 = state_34840;
state_34840 = G__36299;
continue;
} else {
return ret_value__31999__auto__;
}
break;
}
});
cljs$core$async$state_machine__31998__auto__ = function(state_34840){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31998__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31998__auto____1.call(this,state_34840);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__31998__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31998__auto____0;
cljs$core$async$state_machine__31998__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31998__auto____1;
return cljs$core$async$state_machine__31998__auto__;
})()
})();
var state__32208__auto__ = (function (){var statearr_34882 = f__32207__auto__();
(statearr_34882[(6)] = c__32206__auto___36265);

return statearr_34882;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32208__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__34890 = arguments.length;
switch (G__34890) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__32206__auto___36306 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32207__auto__ = (function (){var switch__31997__auto__ = (function (state_34948){
var state_val_34949 = (state_34948[(1)]);
if((state_val_34949 === (7))){
var inst_34944 = (state_34948[(2)]);
var state_34948__$1 = state_34948;
var statearr_34950_36309 = state_34948__$1;
(statearr_34950_36309[(2)] = inst_34944);

(statearr_34950_36309[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34949 === (1))){
var inst_34902 = [];
var inst_34903 = inst_34902;
var inst_34904 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_34948__$1 = (function (){var statearr_34953 = state_34948;
(statearr_34953[(7)] = inst_34903);

(statearr_34953[(8)] = inst_34904);

return statearr_34953;
})();
var statearr_34954_36310 = state_34948__$1;
(statearr_34954_36310[(2)] = null);

(statearr_34954_36310[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34949 === (4))){
var inst_34907 = (state_34948[(9)]);
var inst_34907__$1 = (state_34948[(2)]);
var inst_34908 = (inst_34907__$1 == null);
var inst_34909 = cljs.core.not(inst_34908);
var state_34948__$1 = (function (){var statearr_34955 = state_34948;
(statearr_34955[(9)] = inst_34907__$1);

return statearr_34955;
})();
if(inst_34909){
var statearr_34956_36313 = state_34948__$1;
(statearr_34956_36313[(1)] = (5));

} else {
var statearr_34959_36314 = state_34948__$1;
(statearr_34959_36314[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34949 === (15))){
var inst_34937 = (state_34948[(2)]);
var state_34948__$1 = state_34948;
var statearr_34962_36316 = state_34948__$1;
(statearr_34962_36316[(2)] = inst_34937);

(statearr_34962_36316[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34949 === (13))){
var state_34948__$1 = state_34948;
var statearr_34963_36317 = state_34948__$1;
(statearr_34963_36317[(2)] = null);

(statearr_34963_36317[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34949 === (6))){
var inst_34903 = (state_34948[(7)]);
var inst_34932 = inst_34903.length;
var inst_34933 = (inst_34932 > (0));
var state_34948__$1 = state_34948;
if(cljs.core.truth_(inst_34933)){
var statearr_34964_36319 = state_34948__$1;
(statearr_34964_36319[(1)] = (12));

} else {
var statearr_34965_36320 = state_34948__$1;
(statearr_34965_36320[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34949 === (3))){
var inst_34946 = (state_34948[(2)]);
var state_34948__$1 = state_34948;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34948__$1,inst_34946);
} else {
if((state_val_34949 === (12))){
var inst_34903 = (state_34948[(7)]);
var inst_34935 = cljs.core.vec(inst_34903);
var state_34948__$1 = state_34948;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34948__$1,(15),out,inst_34935);
} else {
if((state_val_34949 === (2))){
var state_34948__$1 = state_34948;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34948__$1,(4),ch);
} else {
if((state_val_34949 === (11))){
var inst_34907 = (state_34948[(9)]);
var inst_34911 = (state_34948[(10)]);
var inst_34924 = (state_34948[(2)]);
var inst_34925 = [];
var inst_34926 = inst_34925.push(inst_34907);
var inst_34903 = inst_34925;
var inst_34904 = inst_34911;
var state_34948__$1 = (function (){var statearr_34966 = state_34948;
(statearr_34966[(11)] = inst_34924);

(statearr_34966[(12)] = inst_34926);

(statearr_34966[(7)] = inst_34903);

(statearr_34966[(8)] = inst_34904);

return statearr_34966;
})();
var statearr_34967_36345 = state_34948__$1;
(statearr_34967_36345[(2)] = null);

(statearr_34967_36345[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34949 === (9))){
var inst_34903 = (state_34948[(7)]);
var inst_34922 = cljs.core.vec(inst_34903);
var state_34948__$1 = state_34948;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34948__$1,(11),out,inst_34922);
} else {
if((state_val_34949 === (5))){
var inst_34907 = (state_34948[(9)]);
var inst_34911 = (state_34948[(10)]);
var inst_34904 = (state_34948[(8)]);
var inst_34911__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_34907) : f.call(null,inst_34907));
var inst_34912 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_34911__$1,inst_34904);
var inst_34913 = cljs.core.keyword_identical_QMARK_(inst_34904,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_34914 = ((inst_34912) || (inst_34913));
var state_34948__$1 = (function (){var statearr_34968 = state_34948;
(statearr_34968[(10)] = inst_34911__$1);

return statearr_34968;
})();
if(cljs.core.truth_(inst_34914)){
var statearr_34969_36359 = state_34948__$1;
(statearr_34969_36359[(1)] = (8));

} else {
var statearr_34970_36363 = state_34948__$1;
(statearr_34970_36363[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34949 === (14))){
var inst_34940 = (state_34948[(2)]);
var inst_34942 = cljs.core.async.close_BANG_(out);
var state_34948__$1 = (function (){var statearr_34972 = state_34948;
(statearr_34972[(13)] = inst_34940);

return statearr_34972;
})();
var statearr_34973_36365 = state_34948__$1;
(statearr_34973_36365[(2)] = inst_34942);

(statearr_34973_36365[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34949 === (10))){
var inst_34930 = (state_34948[(2)]);
var state_34948__$1 = state_34948;
var statearr_34974_36371 = state_34948__$1;
(statearr_34974_36371[(2)] = inst_34930);

(statearr_34974_36371[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34949 === (8))){
var inst_34903 = (state_34948[(7)]);
var inst_34907 = (state_34948[(9)]);
var inst_34911 = (state_34948[(10)]);
var inst_34916 = inst_34903.push(inst_34907);
var tmp34971 = inst_34903;
var inst_34903__$1 = tmp34971;
var inst_34904 = inst_34911;
var state_34948__$1 = (function (){var statearr_34975 = state_34948;
(statearr_34975[(7)] = inst_34903__$1);

(statearr_34975[(14)] = inst_34916);

(statearr_34975[(8)] = inst_34904);

return statearr_34975;
})();
var statearr_34976_36380 = state_34948__$1;
(statearr_34976_36380[(2)] = null);

(statearr_34976_36380[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__31998__auto__ = null;
var cljs$core$async$state_machine__31998__auto____0 = (function (){
var statearr_34979 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34979[(0)] = cljs$core$async$state_machine__31998__auto__);

(statearr_34979[(1)] = (1));

return statearr_34979;
});
var cljs$core$async$state_machine__31998__auto____1 = (function (state_34948){
while(true){
var ret_value__31999__auto__ = (function (){try{while(true){
var result__32000__auto__ = switch__31997__auto__(state_34948);
if(cljs.core.keyword_identical_QMARK_(result__32000__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32000__auto__;
}
break;
}
}catch (e34980){var ex__32001__auto__ = e34980;
var statearr_34981_36396 = state_34948;
(statearr_34981_36396[(2)] = ex__32001__auto__);


if(cljs.core.seq((state_34948[(4)]))){
var statearr_34982_36402 = state_34948;
(statearr_34982_36402[(1)] = cljs.core.first((state_34948[(4)])));

} else {
throw ex__32001__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__31999__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36407 = state_34948;
state_34948 = G__36407;
continue;
} else {
return ret_value__31999__auto__;
}
break;
}
});
cljs$core$async$state_machine__31998__auto__ = function(state_34948){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31998__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31998__auto____1.call(this,state_34948);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__31998__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31998__auto____0;
cljs$core$async$state_machine__31998__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31998__auto____1;
return cljs$core$async$state_machine__31998__auto__;
})()
})();
var state__32208__auto__ = (function (){var statearr_34983 = f__32207__auto__();
(statearr_34983[(6)] = c__32206__auto___36306);

return statearr_34983;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32208__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
