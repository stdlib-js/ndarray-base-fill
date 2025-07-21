"use strict";var u=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var s=u(function(g,i){
var n=require('@stdlib/ndarray-base-assert-is-scalar-mostly-safe-compatible/dist'),o=require('@stdlib/ndarray-base-broadcast-scalar/dist'),v=require('@stdlib/ndarray-base-dtype/dist'),c=require('@stdlib/ndarray-base-shape/dist'),p=require('@stdlib/ndarray-base-order/dist'),q=require('@stdlib/ndarray-base-assign/dist'),l=require('@stdlib/error-tools-fmtprodmsg/dist');function y(e,r){var a,t;if(a=v(e),!n(r,a))throw new TypeError(l('213Hg',a,r));t=o(r,a,c(e),p(e)),q([t,e])}i.exports=y
});var d=s();module.exports=d;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
