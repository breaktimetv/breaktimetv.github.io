!function(t,e){"use strict";var n=GLOBAL.WebModule.exports(t,e);n.extend(GLOBAL,n[5]),n.extend(GLOBAL,n[6]),n.extend(GLOBAL,n[7]),"undefined"!=typeof module&&(module.exports=n)}("ES",function(a,t,e,n){"use strict";var r=null,i={repository:"https://github.com/uupaa/ES.js",extend:function t(e,n,r){a.BENCHMARK||($valid($type(n,"Object"),t,"constructors"),$valid($type(r,"Boolean|omit"),t,"override"));r=r||!1;for(var i in n)i in e||(e[i]=n[i]),u(e[i],n[i]);function u(t,e){for(var n in e)if("prototype"===n)for(var r in n in t||(t[n]={}),e[n])o(t[n],r,e[n][r]);else o(t,n,e[n])}function o(t,e,n){!r&&e in t||Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:!0,value:n})}},5:{Object:{keys:function(t){var e,n=[],r=0;if("hasOwnProperty"in t)for(e in t)t.hasOwnProperty(e)&&(n[r++]=e);else for(e in t)n[r++]=e;return n},create:f,defineProperty:l,defineProperties:c,seal:function(t){return t},freeze:function(t){return t},isFrozen:function(){return!1},isSealed:function(){return!1},isExtensible:function(){return!0},preventExtensions:function(t){return t}},String:{prototype:{trim:function(){return this.replace(/^\s+/,"").replace(/\s+$/,"")}}},Date:{now:function(){return+new Date},prototype:{toJSON:function(){var t=this.getUTCFullYear(),e=this.getUTCMonth()+1,n=this.getUTCDate(),r=this.getUTCHours(),i=this.getUTCMinutes(),u=this.getUTCSeconds(),o=this.getUTCMilliseconds();return t+"-"+(e<10?"0":"")+e+"-"+(n<10?"0":"")+n+"T"+(r<10?"0":"")+r+":"+(i<10?"0":"")+i+":"+(u<10?"0":"")+u+"."+("00"+o).slice(-3)+"Z"}}},Function:{prototype:{bind:function(t){var e=this,n=Array.prototype.slice.call(arguments,1),r=function(){},i=function(){return e.apply(this instanceof r?this:t,Array.prototype.concat.call(n,Array.prototype.slice.call(arguments)))};return r.prototype=e.prototype,i.prototype=new r,i}}},JSON:{parse:function(t){var e=t.trim().replace(/"(\\.|[^"\\])*"/g,"");if(/[^,:{}\[\]0-9\.\-+Eaeflnr-u \n\r\t]/.test(e))throw new SyntaxError("Unexpected token:"+t);return new Function("return "+t)()},stringify:function(t){return v(t,0)}},Array:{isArray:function(t){return"[object Array]"===Object.prototype.toString.call(t)},prototype:{indexOf:function(t,e){var n=e||0,r=this.length;for(n=n<0?n+r:n;n<r;++n)if(n in this&&this[n]===t)return n;return-1},lastIndexOf:function(t,e){var n=e,r=this.length;n=n<0?n+r+1:r;for(;0<=--n;)if(n in this&&this[n]===t)return n;return-1},forEach:function(t,e){for(var n=0,r=this.length;n<r;++n)n in this&&t.call(e,this[n],n,this)},map:function(t,e){for(var n=[],r=0,i=this.length;r<i;++r)r in this&&(n[r]=t.call(e,this[r],r,this));return n},some:function(t,e){for(var n=0,r=this.length;n<r;++n)if(n in this&&t.call(e,this[n],n,this))return!0;return!1},every:function(t,e){for(var n=0,r=this.length;n<r;++n)if(n in this&&!t.call(e,this[n],n,this))return!1;return!0},filter:function(t,e){for(var n,r=[],i=0,u=this.length;i<u;++i)i in this&&(n=this[i],t.call(e,n,i,this)&&r.push(n));return r},reduce:function(t,e){if(!a.BENCHMARK&&!this.length&&void 0===e)throw new TypeError("Reduce of empty array with no initial value");var n=e,r=0,i=this.length;if(void 0===n)for(;r<i;++r)if(r in this){n=this[r++];break}for(;r<i;++r)r in this&&(n=t(n,this[r],r,this));return n},reduceRight:function(t,e){if(!a.BENCHMARK&&!this.length&&void 0===e)throw new TypeError("Reduce of empty array with no initial value");var n=e,r=this.length-1;if(void 0===n)for(;0<=r;--r)if(r in this){n=this[r--];break}for(;0<=r;--r)r in this&&(n=t(n,this[r],r,this));return n}}}},6:{Object:{assign:function(t){for(var e=arguments,n=1,r=e.length;n<r;++n){var i=e[n];if(i)for(var u=Object.keys(i),o=0,a=u.length;o<a;++o){var s=u[o],h=Object.getOwnPropertyDescriptor(i,s);h&&h.enumerable&&(t[s]=i[s])}}return t},is:function(t,e){if(typeof t!=typeof e)return!1;if(isNaN(t))return isNaN(e);return 0!==t||0!==e?t===e:1/t==1/e}},Array:{of:function(){return Array.prototype.slice.call(arguments)},from:function(t,e,n){if(!e)return[].slice.call(t);for(var r=n||null,i=[],u=0,o=t.length;u<o;++u)i.push(e.call(r,t[u],u,t));return i},prototype:{entries:function(){return new d(this,g)},keys:function(){return new d(this,y)},fill:function(t,e,n){e>>=0,n=void 0===n?this.length:n>>0;for(var r=this.length,i=e<0?Math.max(e+r,0):Math.min(e,r),u=n<0?Math.max(n+r,0):Math.min(n,r);i<u;++i)this[i]=t;return this},find:function(t,e){var n=this.findIndex(t,e);return-1===n?void 0:this[n]},findIndex:function(t,e){for(var n=0,r=this.length;n<r;++n){var i=t.call(e,this[n],n,this);if(i)return n}return-1},values:function(){return new d(this,_)},copyWithin:function(t,e,n){t>>=0,e>>=0,n=void 0===n?this.length:n>>0;var r=this.length,i=t<0?Math.max(t+r,0):Math.min(t,r),u=e<0?Math.max(e+r,0):Math.min(e,r),o=n<0?Math.max(n+r,0):Math.min(n,r),a=Math.min(o-u,r-i);if(u<i&&i<u+a)for(;0<a;--u,--i,--a)u in this?this[i]=this[u]:delete this[i];else for(;0<a;++u,++i,--a)u in this?this[i]=this[u]:delete this[i];return this}}},String:{fromCodePoint:function(){for(var t=arguments,e=[],n=0,r=t.length;n<r;++n){var i=t[n];if(i<65536)e.push(i);else{var u=i-65536;e.push(55296+(u>>10),56320+(1023&u))}}return String.fromCharCode.apply(null,e)},prototype:{repeat:function(t){return t|=0,this.length&&0<t?new Array(t+1).join(this):""},codePointAt:function(t){t=t||0;var e=this.length,n=this.charCodeAt(t);if(isNaN(n))return;if(n<55296||56319<n||e<=t+1)return n;var r=this.charCodeAt(t+1);if(r<56320||57343<r)return n;return 1024*(n-55296)+r-56320+65536},has:x,includes:x,startsWith:function(t,e){return e=e||0,this.lastIndexOf(t,e)===e},endsWith:function(t,e){var n=(e||this.length)-t.length,r=this.lastIndexOf(t);return-1!==r&&r===n}}},Number:{isNaN:function(t){return"number"==typeof t&&t!=t},isFinite:function(t){return"number"==typeof t&&isFinite(t)},isInteger:function(t){return"number"==typeof t&&isFinite(t)&&Math.floor(t)===t},isSafeInteger:function(t){return"number"==typeof t&&isFinite(t)&&Math.floor(t)===t&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER},parseInt:a.parseInt,parseFloat:a.parseFloat,NaN:a.NaN,EPSILON:2220446049250313e-31,MAX_VALUE:17976931348623157e292,MIN_VALUE:5e-324,MAX_SAFE_INTEGER:9007199254740991,MIN_SAFE_INTEGER:-9007199254740991,POSITIVE_INFINITY:1/0,NEGATIVE_INFINITY:-1/0},Math:{acosh:function(t){return Math.log(t+Math.sqrt(t*t-1))},asinh:function(t){return t===-1/0?t:Math.log(t+Math.sqrt(t*t+1))},atanh:function(t){return Math.log((1+t)/(1-t))/2},cbrt:function(t){var e=Math.pow(Math.abs(t),1/3);return t<0?-e:e},clz32:function(t){var e=Number(t)>>>0;return e?32-e.toString(2).length:32},cosh:function(t){var e=Math.exp(t);return(e+1/e)/2},expm1:function(t){return Math.exp(t)-1},fround:function(t){return new Float32Array([t])[0]},hypot:function(){var t=arguments,e=0;if(0===t.length)return 0;for(var n=0,r=t.length;n<r;++n){var i=t[n];if(i===1/0||i===-1/0)return 1/0;if(isNaN(i))return NaN;e+=i*i}return Math.sqrt(e)},imul:function(t,e){var n=65535&t,r=65535&e;return n*r+((t>>>16&65535)*r+n*(e>>>16&65535)<<16>>>0)|0},log10:function(t){return Math.log(t)/Math.LN10},log1p:function(t){return Math.log(1+t)},log2:function(t){return Math.log(t)/Math.LN2},sign:function(t){var e=Number(t);return 0===e||isNaN(e)?e:0<e?1:-1},sinh:function(t){var e=Math.exp(t);return(e-1/e)/2},tanh:function(t){{if(t===1/0)return 1;if(t===-1/0)return-1}var e=Math.exp(2*t);return(e-1)/(e+1)},trunc:function(t){return t<0?Math.ceil(t):Math.floor(t)},LOG2E:1.442,LOG10E:.4342944819032518},Set:u,WeakSet:o,Map:s,WeakMap:h},7:{Object:{values:function(t){for(var e=Object.keys(t),n=0,r=e.length,i=new Array(r);n<r;++n)i[n]=t[e[n]];return i},entries:function(t){for(var e=Object.keys(t),n=0,r=e.length,i=new Array(r);n<r;++n)i[n]=[e[n],t[e[n]]];return i},prototype:{}},Array:{prototype:{has:j,includes:j}}},x:{Object:{toArray:function(t){return Array.prototype.slice.call(t)}},Array:{toObject:function(n){return Object.keys(n).reduce(function(t,e){return t[e]=n[e],t},{})},prototype:{flatten:function(){return Array.prototype.concat.apply([],this)}}}}};function u(t){(function(t){this._value=[];var e=this;if(Array.isArray(t))t.forEach(function(t){e.add(t)});else if(t&&t.next)for(var n=null;(n=t.next())&&!n.done;)this.add(n.value)}).call(this,t)}function o(t){(function(t){this._value=[];var e=this;if(Array.isArray(t))t.forEach(function(t){e.add(t)});else if(t&&t.next)for(var n=null;(n=t.next())&&!n.done;)this.add(n.value)}).call(this,t)}function s(t){(function(t){this._index=[],this._value=[];var e=this;if(Array.isArray(t))t.forEach(function(t){e.set(t[0],t[1])});else if(t&&t.next)for(var n=null;(n=t.next())&&!n.done;)this.set(n.value[0],n.value[1])}).call(this,t)}function h(t){(function(t){this._index=[],this._value=[];var e=this;if(Array.isArray(t))t.forEach(function(t){e.set(t[0],t[1])});else if(t&&t.next)for(var n=null;(n=t.next())&&!n.done;)this.set(n.value[0],n.value[1])}).call(this,t)}function f(t,e){function n(){}n.prototype=t;var r=new n;return e&&Object.defineProperties(r,e),r}function l(t,e,n){return r&&t.nodeType?r(t,e,n):("value"in n&&(t[e]=n.value),n.get&&t.__defineGetter__&&t.__defineGetter__(e,n.get),n.set&&t.__defineSetter__&&t.__defineSetter__(e,n.set),t)}function c(t,e){for(var n in e)Object.defineProperty(t,n,e[n]);return t}function v(t,e){if(100<=e)throw new TypeError("Converting circular structure to JSON");switch(Object.prototype.toString.call(t)){case"[object Null]":return"null";case"[object Boolean]":case"[object Number]":return""+t;case"[object Date]":return t.toJSON();case"[object String]":return'"'+p(t)+'"';case"[object Array]":return"["+function(t,e){for(var n=[],r=0,i=t.length;r<i;++r)n.push(v(t[r],e+1));return n}(t,e).join(",")+"]";case"[object Object]":return"{"+function(t,e){for(var n=[],r=Object.keys(t),i=0,u=r.length;i<u;++i)n.push('"'+p(r[i])+'":'+v(t[r[i]],e+1));return n}(t,e).join(",")+"}"}return""}function p(t){var e={"\b":"\\b","\t":"\\t","\n":"\\n","\f":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"};return t.replace(/(?:[\b\t\n\f\r\"]|\\)/g,function(t){return e[t]}).replace(/(?:[\x00-\x1f])/g,function(t){return"\\u00"+("0"+t.charCodeAt(0).toString(16)).slice(-2)})}function d(t,e){this._data=t,this._cursor=-1,this.next=e}function y(){var t=++this._cursor;return t>=this._data.length?{value:void 0,done:!0}:{value:t,done:!1}}function _(){var t=++this._cursor;return t>=this._data.length?{value:void 0,done:!0}:{value:this._data[t],done:!1}}function g(){var t=++this._cursor;return t>=this._data.length?{value:void 0,done:!0}:{value:[t,this._data[t]],done:!1}}function x(t,e){return 0<=this.indexOf(t,e)}function b(t,e,n){var r=this;this._keys=t,this._values=e,this.next=n,this._cursor=-1,a.Symbol&&(this[a.Symbol.iterator]=function(){return r})}function O(){var t=++this._cursor;return t>=this._keys.length?{value:void 0,done:!0}:{value:this._keys[t],done:!1}}function N(){var t=++this._cursor;return t>=this._keys.length?{value:void 0,done:!0}:{value:this._values[t],done:!1}}function M(){var t=++this._cursor;return t>=this._keys.length?{value:void 0,done:!0}:{value:[this._keys[t],this._values[t]],done:!1}}function A(){return new b(this._value,this._value,M)}function m(){return new b(this._index,this._value,M)}function j(t,e){e=e||0;var n=this.length;if(0===n)return!1;var r=0;if(0<=e?r=e:(r=e+n)<0&&(r=0),t==t){for(;r<n;++r)if(this[r]===t)return!0}else{if(!isNaN(t))throw TypeError("Unsupported type");for(;r<n;++r)if(isNaN(this[r]))return!0}return!1}return Object.defineProperty&&!Object.defineProperties&&(r=Object.defineProperty,Object.defineProperty=l,Object.defineProperties=c),void 0===Function.prototype.name&&Object.defineProperty(Function.prototype,"name",{configurable:!0,enumerable:!1,get:function(){return this.toString().split(" ")[1].split(/[^\w$]/)[0]}}),"i"!==/a/i.flags&&Object.defineProperty(RegExp.prototype,"flags",{configurable:!0,enumerable:!1,get:function(){return this.toString().match(/[gimuy]*$/)[0]}}),u.prototype=(Object.create||f)(u,{constructor:{value:u},size:{get:function(){return this._value.length}},add:{value:function(t){return this._value.push(t),this}},has:{value:function(t){return 0<=this._value.indexOf(t)}},values:{value:function(){return new b(this._value,this._value,N)}},entries:{value:A},forEach:{value:function(t,e){e=e||null;for(var n=0,r=this.size;n<r;++n)t.call(e,this._value[n],this._value[n],this)}},delete:{value:function(t){var e=this._value.indexOf(t);if(e<0)return!1;return this._value.splice(e,1),!0}},clear:{value:function(){this._value=[]}},"@@iterator":{value:A}}),o.prototype=(Object.create||f)(o,{constructor:{value:o},add:{value:function(t){return this._value.push(t),this}},has:{value:function(t){return 0<=this._value.indexOf(t)}},delete:{value:function(t){var e=this._value.indexOf(t);if(e<0)return!1;return this._value.splice(e,1),!0}}}),s.prototype=(Object.create||f)(s,{constructor:{value:s},size:{get:function(){return this._index.length}},get:{value:function(t){var e=this._index.indexOf(t);if(e<0)return;return this._value[e]}},set:{value:function(t,e){var n=this._index.indexOf(t);n<0?(this._index.push(t),this._value.push(e)):this._value[n]=e}},has:{value:function(t){return 0<=this._index.indexOf(t)}},keys:{value:function(){return new b(this._index,this._value,O)}},values:{value:function(){return new b(this._index,this._value,N)}},entries:{value:m},forEach:{value:function(t,e){e=e||null;for(var n=0,r=this.size;n<r;++n)t.call(e,this._value[n],this._index[n],this)}},delete:{value:function(t){var e=this._index.indexOf(t);if(e<0)return!1;return this._index.splice(e,1),this._value.splice(e,1),!0}},clear:{value:function(){this._index=[],this._value=[]}},"@@iterator":{value:m}}),h.prototype=(Object.create||f)(h,{constructor:{value:h},get:{value:function(t,e){var n=this._index.indexOf(t);if(n<0)return e;return this._value[n]}},set:{value:function(t,e){var n=this._index.indexOf(t);n<0?(this._index.push(t),this._value.push(e)):this._value[n]=e}},has:{value:function(t){return 0<=this._index.indexOf(t)}},delete:{value:function(t){var e=this._index.indexOf(t);if(e<0)return!1;return this._index.splice(e,1),this._value.splice(e,1),!0}}}),i});

