// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r=Number.POSITIVE_INFINITY,n=r;var t=function(r){return 0===r&&1/r===n};var u=function(r){return r!=r},e=Number.NEGATIVE_INFINITY,I=t,N=u,a=e,f=r;var i=function(r,n){var t,u,e,i;if(2===(t=arguments.length))return N(r)||N(n)?NaN:r===f||n===f?f:r===n&&0===r?I(r)?r:n:r>n?r:n;for(u=a,i=0;i<t;i++){if(N(e=arguments[i])||e===f)return e;(e>u||e===u&&0===e&&I(e))&&(u=e)}return u};export{i as default};
//# sourceMappingURL=mod.js.map
