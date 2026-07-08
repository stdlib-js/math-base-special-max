"use strict";var a=function(e,r){return function(){try{return r||e((r={exports:{}}).exports,r),r.exports}catch(s){throw (r=0, s)}};};var n=a(function(c,u){
var f=require('@stdlib/math-base-assert-is-positive-zero/dist'),t=require('@stdlib/math-base-assert-is-nan/dist'),i=require('@stdlib/constants-float64-pinf/dist');function o(e,r){return t(e)||t(r)?NaN:e===i||r===i?i:e===r&&e===0?f(e)?e:r:e>r?e:r}u.exports=o
});var v=n();module.exports=v;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
