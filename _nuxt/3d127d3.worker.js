!function(t){var n={};function r(e){if(n[e])return n[e].exports;var o=n[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=t,r.c=n,r.d=function(t,n,e){r.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:e})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,n){if(1&n&&(t=r(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(r.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var o in t)r.d(e,o,function(n){return t[n]}.bind(null,o));return e},r.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(n,"a",n),n},r.o=function(object,t){return Object.prototype.hasOwnProperty.call(object,t)},r.p="/reversi-problem/_nuxt/",r(r.s=104)}([function(t,n,r){var e=r(2),o=r(39),c=r(4),f=r(40),l=r(47),v=r(66),h=o("wks"),y=e.Symbol,d=v?y:y&&y.withoutSetter||f;t.exports=function(t){return c(h,t)||(l&&c(y,t)?h[t]=y[t]:h[t]=d("Symbol."+t)),h[t]}},function(t,n){t.exports=function(t){try{return!!t()}catch(t){return!0}}},function(t,n,r){(function(n){var r=function(t){return t&&t.Math==Math&&t};t.exports=r("object"==typeof globalThis&&globalThis)||r("object"==typeof window&&window)||r("object"==typeof self&&self)||r("object"==typeof n&&n)||function(){return this}()||Function("return this")()}).call(this,r(57))},function(t,n,r){var e=r(2),o=r(34).f,c=r(7),f=r(21),l=r(22),v=r(60),h=r(65);t.exports=function(t,source){var n,r,y,d,x,m=t.target,w=t.global,S=t.stat;if(n=w?e:S?e[m]||l(m,{}):(e[m]||{}).prototype)for(r in source){if(d=source[r],y=t.noTargetGet?(x=o(n,r))&&x.value:n[r],!h(w?r:m+(S?".":"#")+r,t.forced)&&void 0!==y){if(typeof d==typeof y)continue;v(d,y)}(t.sham||y&&y.sham)&&c(d,"sham",!0),f(n,r,d,t)}}},function(t,n){var r={}.hasOwnProperty;t.exports=function(t,n){return r.call(t,n)}},function(t,n,r){var e=r(6);t.exports=function(t){if(!e(t))throw TypeError(String(t)+" is not an object");return t}},function(t,n){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,n,r){var e=r(9),o=r(11),c=r(13);t.exports=e?function(object,t,n){return o.f(object,t,c(1,n))}:function(object,t,n){return object[t]=n,object}},function(t,n,r){var e=r(28),o=Math.min;t.exports=function(t){return t>0?o(e(t),9007199254740991):0}},function(t,n,r){var e=r(1);t.exports=!e((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},function(t,n){var r={}.toString;t.exports=function(t){return r.call(t).slice(8,-1)}},function(t,n,r){var e=r(9),o=r(35),c=r(5),f=r(20),l=Object.defineProperty;n.f=e?l:function(t,n,r){if(c(t),n=f(n,!0),c(r),o)try{return l(t,n,r)}catch(t){}if("get"in r||"set"in r)throw TypeError("Accessors not supported");return"value"in r&&(t[n]=r.value),t}},function(t,n,r){var e=r(16);t.exports=function(t){return Object(e(t))}},function(t,n){t.exports=function(t,n){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:n}}},function(t,n,r){var e=r(15),o=r(16);t.exports=function(t){return e(o(t))}},function(t,n,r){var e=r(1),o=r(10),c="".split;t.exports=e((function(){return!Object("z").propertyIsEnumerable(0)}))?function(t){return"String"==o(t)?c.call(t,""):Object(t)}:Object},function(t,n){t.exports=function(t){if(null==t)throw TypeError("Can't call method on "+t);return t}},function(t,n,r){var e=r(9),o=r(1),c=r(4),f=Object.defineProperty,l={},v=function(t){throw t};t.exports=function(t,n){if(c(l,t))return l[t];n||(n={});var r=[][t],h=!!c(n,"ACCESSORS")&&n.ACCESSORS,y=c(n,0)?n[0]:v,d=c(n,1)?n[1]:void 0;return l[t]=!!r&&!o((function(){if(h&&!e)return!0;var t={length:-1};h?f(t,1,{enumerable:!0,get:v}):t[1]=1,r.call(t,y,d)}))}},function(t,n){t.exports={}},function(t,n,r){"use strict";var e,o,c=r(90),f=r(91),l=RegExp.prototype.exec,v=String.prototype.replace,h=l,y=(e=/a/,o=/b*/g,l.call(e,"a"),l.call(o,"a"),0!==e.lastIndex||0!==o.lastIndex),d=f.UNSUPPORTED_Y||f.BROKEN_CARET,x=void 0!==/()??/.exec("")[1];(y||x||d)&&(h=function(t){var n,r,e,i,o=this,f=d&&o.sticky,h=c.call(o),source=o.source,m=0,w=t;return f&&(-1===(h=h.replace("y","")).indexOf("g")&&(h+="g"),w=String(t).slice(o.lastIndex),o.lastIndex>0&&(!o.multiline||o.multiline&&"\n"!==t[o.lastIndex-1])&&(source="(?: "+source+")",w=" "+w,m++),r=new RegExp("^(?:"+source+")",h)),x&&(r=new RegExp("^"+source+"$(?!\\s)",h)),y&&(n=o.lastIndex),e=l.call(f?r:o,w),f?e?(e.input=e.input.slice(m),e[0]=e[0].slice(m),e.index=o.lastIndex,o.lastIndex+=e[0].length):o.lastIndex=0:y&&e&&(o.lastIndex=o.global?e.index+e[0].length:n),x&&e&&e.length>1&&v.call(e[0],r,(function(){for(i=1;i<arguments.length-2;i++)void 0===arguments[i]&&(e[i]=void 0)})),e}),t.exports=h},function(t,n,r){var e=r(6);t.exports=function(input,t){if(!e(input))return input;var n,r;if(t&&"function"==typeof(n=input.toString)&&!e(r=n.call(input)))return r;if("function"==typeof(n=input.valueOf)&&!e(r=n.call(input)))return r;if(!t&&"function"==typeof(n=input.toString)&&!e(r=n.call(input)))return r;throw TypeError("Can't convert object to primitive value")}},function(t,n,r){var e=r(2),o=r(7),c=r(4),f=r(22),l=r(37),v=r(38),h=v.get,y=v.enforce,d=String(String).split("String");(t.exports=function(t,n,r,l){var v,h=!!l&&!!l.unsafe,x=!!l&&!!l.enumerable,m=!!l&&!!l.noTargetGet;"function"==typeof r&&("string"!=typeof n||c(r,"name")||o(r,"name",n),(v=y(r)).source||(v.source=d.join("string"==typeof n?n:""))),t!==e?(h?!m&&t[n]&&(x=!0):delete t[n],x?t[n]=r:o(t,n,r)):x?t[n]=r:f(n,r)})(Function.prototype,"toString",(function(){return"function"==typeof this&&h(this).source||l(this)}))},function(t,n,r){var e=r(2),o=r(7);t.exports=function(t,n){try{o(e,t,n)}catch(r){e[t]=n}return n}},function(t,n,r){var e=r(2),o=r(22),c=e["__core-js_shared__"]||o("__core-js_shared__",{});t.exports=c},function(t,n,r){var e=r(39),o=r(40),c=e("keys");t.exports=function(t){return c[t]||(c[t]=o(t))}},function(t,n){t.exports=!1},function(t,n){t.exports={}},function(t,n,r){var path=r(62),e=r(2),o=function(t){return"function"==typeof t?t:void 0};t.exports=function(t,n){return arguments.length<2?o(path[t])||o(e[t]):path[t]&&path[t][n]||e[t]&&e[t][n]}},function(t,n){var r=Math.ceil,e=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?e:r)(t)}},function(t,n){t.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},function(t,n,r){var e=r(1),o=r(0),c=r(31),f=o("species");t.exports=function(t){return c>=51||!e((function(){var n=[];return(n.constructor={})[f]=function(){return{foo:1}},1!==n[t](Boolean).foo}))}},function(t,n,r){var e,o,c=r(2),f=r(67),l=c.process,v=l&&l.versions,h=v&&v.v8;h?o=(e=h.split("."))[0]+e[1]:f&&(!(e=f.match(/Edge\/(\d+)/))||e[1]>=74)&&(e=f.match(/Chrome\/(\d+)/))&&(o=e[1]),t.exports=o&&+o},function(t,n){t.exports=function(t){if("function"!=typeof t)throw TypeError(String(t)+" is not a function");return t}},function(t,n,r){"use strict";var e=r(1);t.exports=function(t,n){var r=[][t];return!!r&&e((function(){r.call(null,n||function(){throw 1},1)}))}},function(t,n,r){var e=r(9),o=r(58),c=r(13),f=r(14),l=r(20),v=r(4),h=r(35),y=Object.getOwnPropertyDescriptor;n.f=e?y:function(t,n){if(t=f(t),n=l(n,!0),h)try{return y(t,n)}catch(t){}if(v(t,n))return c(!o.f.call(t,n),t[n])}},function(t,n,r){var e=r(9),o=r(1),c=r(36);t.exports=!e&&!o((function(){return 7!=Object.defineProperty(c("div"),"a",{get:function(){return 7}}).a}))},function(t,n,r){var e=r(2),o=r(6),c=e.document,f=o(c)&&o(c.createElement);t.exports=function(t){return f?c.createElement(t):{}}},function(t,n,r){var e=r(23),o=Function.toString;"function"!=typeof e.inspectSource&&(e.inspectSource=function(t){return o.call(t)}),t.exports=e.inspectSource},function(t,n,r){var e,o,c,f=r(59),l=r(2),v=r(6),h=r(7),y=r(4),d=r(23),x=r(24),m=r(26),w=l.WeakMap;if(f){var S=d.state||(d.state=new w),O=S.get,_=S.has,E=S.set;e=function(t,n){return n.facade=t,E.call(S,t,n),n},o=function(t){return O.call(S,t)||{}},c=function(t){return _.call(S,t)}}else{var z=x("state");m[z]=!0,e=function(t,n){return n.facade=t,h(t,z,n),n},o=function(t){return y(t,z)?t[z]:{}},c=function(t){return y(t,z)}}t.exports={set:e,get:o,has:c,enforce:function(t){return c(t)?o(t):e(t,{})},getterFor:function(t){return function(n){var r;if(!v(n)||(r=o(n)).type!==t)throw TypeError("Incompatible receiver, "+t+" required");return r}}}},function(t,n,r){var e=r(25),o=r(23);(t.exports=function(t,n){return o[t]||(o[t]=void 0!==n?n:{})})("versions",[]).push({version:"3.7.0",mode:e?"pure":"global",copyright:"© 2020 Denis Pushkarev (zloirock.ru)"})},function(t,n){var r=0,e=Math.random();t.exports=function(t){return"Symbol("+String(void 0===t?"":t)+")_"+(++r+e).toString(36)}},function(t,n,r){var e=r(4),o=r(14),c=r(42).indexOf,f=r(26);t.exports=function(object,t){var n,r=o(object),i=0,l=[];for(n in r)!e(f,n)&&e(r,n)&&l.push(n);for(;t.length>i;)e(r,n=t[i++])&&(~c(l,n)||l.push(n));return l}},function(t,n,r){var e=r(14),o=r(8),c=r(43),f=function(t){return function(n,r,f){var l,v=e(n),h=o(v.length),y=c(f,h);if(t&&r!=r){for(;h>y;)if((l=v[y++])!=l)return!0}else for(;h>y;y++)if((t||y in v)&&v[y]===r)return t||y||0;return!t&&-1}};t.exports={includes:f(!0),indexOf:f(!1)}},function(t,n,r){var e=r(28),o=Math.max,c=Math.min;t.exports=function(t,n){var r=e(t);return r<0?o(r+n,0):c(r,n)}},function(t,n,r){var e=r(10);t.exports=Array.isArray||function(t){return"Array"==e(t)}},function(t,n,r){"use strict";var e=r(20),o=r(11),c=r(13);t.exports=function(object,t,n){var r=e(t);r in object?o.f(object,r,c(0,n)):object[r]=n}},function(t,n,r){var e=r(6),o=r(44),c=r(0)("species");t.exports=function(t,n){var r;return o(t)&&("function"!=typeof(r=t.constructor)||r!==Array&&!o(r.prototype)?e(r)&&null===(r=r[c])&&(r=void 0):r=void 0),new(void 0===r?Array:r)(0===n?0:n)}},function(t,n,r){var e=r(1);t.exports=!!Object.getOwnPropertySymbols&&!e((function(){return!String(Symbol())}))},function(t,n,r){var e,o=r(5),c=r(71),f=r(29),l=r(26),html=r(73),v=r(36),h=r(24),y=h("IE_PROTO"),d=function(){},x=function(content){return"<script>"+content+"<\/script>"},m=function(){try{e=document.domain&&new ActiveXObject("htmlfile")}catch(t){}var t,iframe;m=e?function(t){t.write(x("")),t.close();var n=t.parentWindow.Object;return t=null,n}(e):((iframe=v("iframe")).style.display="none",html.appendChild(iframe),iframe.src=String("javascript:"),(t=iframe.contentWindow.document).open(),t.write(x("document.F=Object")),t.close(),t.F);for(var n=f.length;n--;)delete m.prototype[f[n]];return m()};l[y]=!0,t.exports=Object.create||function(t,n){var r;return null!==t?(d.prototype=o(t),r=new d,d.prototype=null,r[y]=t):r=m(),void 0===n?r:c(r,n)}},function(t,n,r){var e=r(50),o=r(15),c=r(12),f=r(8),l=r(46),v=[].push,h=function(t){var n=1==t,r=2==t,h=3==t,y=4==t,d=6==t,x=5==t||d;return function(m,w,S,O){for(var _,E,z=c(m),j=o(z),A=e(w,S,3),R=f(j.length),I=0,k=O||l,P=n?k(m,R):r?k(m,0):void 0;R>I;I++)if((x||I in j)&&(E=A(_=j[I],I,z),t))if(n)P[I]=E;else if(E)switch(t){case 3:return!0;case 5:return _;case 6:return I;case 2:v.call(P,_)}else if(y)return!1;return d?-1:h||y?y:P}};t.exports={forEach:h(0),map:h(1),filter:h(2),some:h(3),every:h(4),find:h(5),findIndex:h(6)}},function(t,n,r){var e=r(32);t.exports=function(t,n,r){if(e(t),void 0===n)return t;switch(r){case 0:return function(){return t.call(n)};case 1:return function(a){return t.call(n,a)};case 2:return function(a,b){return t.call(n,a,b)};case 3:return function(a,b,r){return t.call(n,a,b,r)}}return function(){return t.apply(n,arguments)}}},function(t,n,r){"use strict";var e=r(3),o=r(19);e({target:"RegExp",proto:!0,forced:/./.exec!==o},{exec:o})},function(t,n,r){var e=r(28),o=r(16),c=function(t){return function(n,r){var c,f,l=String(o(n)),v=e(r),h=l.length;return v<0||v>=h?t?"":void 0:(c=l.charCodeAt(v))<55296||c>56319||v+1===h||(f=l.charCodeAt(v+1))<56320||f>57343?t?l.charAt(v):c:t?l.slice(v,v+2):f-56320+(c-55296<<10)+65536}};t.exports={codeAt:c(!1),charAt:c(!0)}},function(t,n,r){"use strict";var e,o,c,f=r(54),l=r(7),v=r(4),h=r(0),y=r(25),d=h("iterator"),x=!1;[].keys&&("next"in(c=[].keys())?(o=f(f(c)))!==Object.prototype&&(e=o):x=!0),null==e&&(e={}),y||v(e,d)||l(e,d,(function(){return this})),t.exports={IteratorPrototype:e,BUGGY_SAFARI_ITERATORS:x}},function(t,n,r){var e=r(4),o=r(12),c=r(24),f=r(95),l=c("IE_PROTO"),v=Object.prototype;t.exports=f?Object.getPrototypeOf:function(t){return t=o(t),e(t,l)?t[l]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?v:null}},function(t,n,r){var e=r(11).f,o=r(4),c=r(0)("toStringTag");t.exports=function(t,n,r){t&&!o(t=r?t:t.prototype,c)&&e(t,c,{configurable:!0,value:n})}},function(t,n,r){"use strict";var e=r(3),o=r(1),c=r(44),f=r(6),l=r(12),v=r(8),h=r(45),y=r(46),d=r(30),x=r(0),m=r(31),w=x("isConcatSpreadable"),S=m>=51||!o((function(){var t=[];return t[w]=!1,t.concat()[0]!==t})),O=d("concat"),_=function(t){if(!f(t))return!1;var n=t[w];return void 0!==n?!!n:c(t)};e({target:"Array",proto:!0,forced:!S||!O},{concat:function(t){var i,n,r,e,o,c=l(this),f=y(c,0),d=0;for(i=-1,r=arguments.length;i<r;i++)if(_(o=-1===i?c:arguments[i])){if(d+(e=v(o.length))>9007199254740991)throw TypeError("Maximum allowed index exceeded");for(n=0;n<e;n++,d++)n in o&&h(f,d,o[n])}else{if(d>=9007199254740991)throw TypeError("Maximum allowed index exceeded");h(f,d++,o)}return f.length=d,f}})},function(t,n){var g;g=function(){return this}();try{g=g||new Function("return this")()}catch(t){"object"==typeof window&&(g=window)}t.exports=g},function(t,n,r){"use strict";var e={}.propertyIsEnumerable,o=Object.getOwnPropertyDescriptor,c=o&&!e.call({1:2},1);n.f=c?function(t){var n=o(this,t);return!!n&&n.enumerable}:e},function(t,n,r){var e=r(2),o=r(37),c=e.WeakMap;t.exports="function"==typeof c&&/native code/.test(o(c))},function(t,n,r){var e=r(4),o=r(61),c=r(34),f=r(11);t.exports=function(t,source){for(var n=o(source),r=f.f,l=c.f,i=0;i<n.length;i++){var v=n[i];e(t,v)||r(t,v,l(source,v))}}},function(t,n,r){var e=r(27),o=r(63),c=r(64),f=r(5);t.exports=e("Reflect","ownKeys")||function(t){var n=o.f(f(t)),r=c.f;return r?n.concat(r(t)):n}},function(t,n,r){var e=r(2);t.exports=e},function(t,n,r){var e=r(41),o=r(29).concat("length","prototype");n.f=Object.getOwnPropertyNames||function(t){return e(t,o)}},function(t,n){n.f=Object.getOwnPropertySymbols},function(t,n,r){var e=r(1),o=/#|\.prototype\./,c=function(t,n){var r=data[f(t)];return r==v||r!=l&&("function"==typeof n?e(n):!!n)},f=c.normalize=function(t){return String(t).replace(o,".").toLowerCase()},data=c.data={},l=c.NATIVE="N",v=c.POLYFILL="P";t.exports=c},function(t,n,r){var e=r(47);t.exports=e&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},function(t,n,r){var e=r(27);t.exports=e("navigator","userAgent")||""},function(t,n,r){var e=r(3),o=r(69),c=r(70);e({target:"Array",proto:!0},{fill:o}),c("fill")},function(t,n,r){"use strict";var e=r(12),o=r(43),c=r(8);t.exports=function(t){for(var n=e(this),r=c(n.length),f=arguments.length,l=o(f>1?arguments[1]:void 0,r),v=f>2?arguments[2]:void 0,h=void 0===v?r:o(v,r);h>l;)n[l++]=t;return n}},function(t,n,r){var e=r(0),o=r(48),c=r(11),f=e("unscopables"),l=Array.prototype;null==l[f]&&c.f(l,f,{configurable:!0,value:o(null)}),t.exports=function(t){l[f][t]=!0}},function(t,n,r){var e=r(9),o=r(11),c=r(5),f=r(72);t.exports=e?Object.defineProperties:function(t,n){c(t);for(var r,e=f(n),l=e.length,v=0;l>v;)o.f(t,r=e[v++],n[r]);return t}},function(t,n,r){var e=r(41),o=r(29);t.exports=Object.keys||function(t){return e(t,o)}},function(t,n,r){var e=r(27);t.exports=e("document","documentElement")},function(t,n,r){"use strict";var e=r(3),o=r(49).filter,c=r(30),f=r(17),l=c("filter"),v=f("filter");e({target:"Array",proto:!0,forced:!l||!v},{filter:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}})},function(t,n,r){var e=r(3),o=r(76);e({target:"Array",stat:!0,forced:!r(83)((function(t){Array.from(t)}))},{from:o})},function(t,n,r){"use strict";var e=r(50),o=r(12),c=r(77),f=r(79),l=r(8),v=r(45),h=r(80);t.exports=function(t){var n,r,y,d,x,m,w=o(t),S="function"==typeof this?this:Array,O=arguments.length,_=O>1?arguments[1]:void 0,E=void 0!==_,z=h(w),j=0;if(E&&(_=e(_,O>2?arguments[2]:void 0,2)),null==z||S==Array&&f(z))for(r=new S(n=l(w.length));n>j;j++)m=E?_(w[j],j):w[j],v(r,j,m);else for(x=(d=z.call(w)).next,r=new S;!(y=x.call(d)).done;j++)m=E?c(d,_,[y.value,j],!0):y.value,v(r,j,m);return r.length=j,r}},function(t,n,r){var e=r(5),o=r(78);t.exports=function(t,n,r,c){try{return c?n(e(r)[0],r[1]):n(r)}catch(n){throw o(t),n}}},function(t,n,r){var e=r(5);t.exports=function(t){var n=t.return;if(void 0!==n)return e(n.call(t)).value}},function(t,n,r){var e=r(0),o=r(18),c=e("iterator"),f=Array.prototype;t.exports=function(t){return void 0!==t&&(o.Array===t||f[c]===t)}},function(t,n,r){var e=r(81),o=r(18),c=r(0)("iterator");t.exports=function(t){if(null!=t)return t[c]||t["@@iterator"]||o[e(t)]}},function(t,n,r){var e=r(82),o=r(10),c=r(0)("toStringTag"),f="Arguments"==o(function(){return arguments}());t.exports=e?o:function(t){var n,r,e;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(r=function(t,n){try{return t[n]}catch(t){}}(n=Object(t),c))?r:f?o(n):"Object"==(e=o(n))&&"function"==typeof n.callee?"Arguments":e}},function(t,n,r){var e={};e[r(0)("toStringTag")]="z",t.exports="[object z]"===String(e)},function(t,n,r){var e=r(0)("iterator"),o=!1;try{var c=0,f={next:function(){return{done:!!c++}},return:function(){o=!0}};f[e]=function(){return this},Array.from(f,(function(){throw 2}))}catch(t){}t.exports=function(t,n){if(!n&&!o)return!1;var r=!1;try{var object={};object[e]=function(){return{next:function(){return{done:r=!0}}}},t(object)}catch(t){}return r}},function(t,n,r){"use strict";var e=r(3),o=r(42).indexOf,c=r(33),f=r(17),l=[].indexOf,v=!!l&&1/[1].indexOf(1,-0)<0,h=c("indexOf"),y=f("indexOf",{ACCESSORS:!0,1:0});e({target:"Array",proto:!0,forced:v||!h||!y},{indexOf:function(t){return v?l.apply(this,arguments)||0:o(this,t,arguments.length>1?arguments[1]:void 0)}})},function(t,n,r){"use strict";var e=r(3),o=r(15),c=r(14),f=r(33),l=[].join,v=o!=Object,h=f("join",",");e({target:"Array",proto:!0,forced:v||!h},{join:function(t){return l.call(c(this),void 0===t?",":t)}})},function(t,n,r){"use strict";var e=r(3),o=r(49).map,c=r(30),f=r(17),l=c("map"),v=f("map");e({target:"Array",proto:!0,forced:!l||!v},{map:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}})},function(t,n,r){"use strict";var e=r(3),o=r(88).left,c=r(33),f=r(17),l=r(31),v=r(89),h=c("reduce"),y=f("reduce",{1:0});e({target:"Array",proto:!0,forced:!h||!y||!v&&l>79&&l<83},{reduce:function(t){return o(this,t,arguments.length,arguments.length>1?arguments[1]:void 0)}})},function(t,n,r){var e=r(32),o=r(12),c=r(15),f=r(8),l=function(t){return function(n,r,l,v){e(r);var h=o(n),y=c(h),d=f(h.length),x=t?d-1:0,i=t?-1:1;if(l<2)for(;;){if(x in y){v=y[x],x+=i;break}if(x+=i,t?x<0:d<=x)throw TypeError("Reduce of empty array with no initial value")}for(;t?x>=0:d>x;x+=i)x in y&&(v=r(v,y[x],x,h));return v}};t.exports={left:l(!1),right:l(!0)}},function(t,n,r){var e=r(10),o=r(2);t.exports="process"==e(o.process)},function(t,n,r){"use strict";var e=r(5);t.exports=function(){var t=e(this),n="";return t.global&&(n+="g"),t.ignoreCase&&(n+="i"),t.multiline&&(n+="m"),t.dotAll&&(n+="s"),t.unicode&&(n+="u"),t.sticky&&(n+="y"),n}},function(t,n,r){"use strict";var e=r(1);function o(s,t){return RegExp(s,t)}n.UNSUPPORTED_Y=e((function(){var t=o("a","y");return t.lastIndex=2,null!=t.exec("abcd")})),n.BROKEN_CARET=e((function(){var t=o("^r","gy");return t.lastIndex=2,null!=t.exec("str")}))},function(t,n,r){"use strict";var e=r(52).charAt,o=r(38),c=r(93),f=o.set,l=o.getterFor("String Iterator");c(String,"String",(function(t){f(this,{type:"String Iterator",string:String(t),index:0})}),(function(){var t,n=l(this),r=n.string,o=n.index;return o>=r.length?{value:void 0,done:!0}:(t=e(r,o),n.index+=t.length,{value:t,done:!1})}))},function(t,n,r){"use strict";var e=r(3),o=r(94),c=r(54),f=r(96),l=r(55),v=r(7),h=r(21),y=r(0),d=r(25),x=r(18),m=r(53),w=m.IteratorPrototype,S=m.BUGGY_SAFARI_ITERATORS,O=y("iterator"),_=function(){return this};t.exports=function(t,n,r,y,m,E,z){o(r,n,y);var j,A,R,I=function(t){if(t===m&&M)return M;if(!S&&t in T)return T[t];switch(t){case"keys":case"values":case"entries":return function(){return new r(this,t)}}return function(){return new r(this)}},k=n+" Iterator",P=!1,T=t.prototype,C=T[O]||T["@@iterator"]||m&&T[m],M=!S&&C||I(m),D="Array"==n&&T.entries||C;if(D&&(j=c(D.call(new t)),w!==Object.prototype&&j.next&&(d||c(j)===w||(f?f(j,w):"function"!=typeof j[O]&&v(j,O,_)),l(j,k,!0,!0),d&&(x[k]=_))),"values"==m&&C&&"values"!==C.name&&(P=!0,M=function(){return C.call(this)}),d&&!z||T[O]===M||v(T,O,M),x[n]=M,m)if(A={values:I("values"),keys:E?M:I("keys"),entries:I("entries")},z)for(R in A)(S||P||!(R in T))&&h(T,R,A[R]);else e({target:n,proto:!0,forced:S||P},A);return A}},function(t,n,r){"use strict";var e=r(53).IteratorPrototype,o=r(48),c=r(13),f=r(55),l=r(18),v=function(){return this};t.exports=function(t,n,r){var h=n+" Iterator";return t.prototype=o(e,{next:c(1,r)}),f(t,h,!1,!0),l[h]=v,t}},function(t,n,r){var e=r(1);t.exports=!e((function(){function t(){}return t.prototype.constructor=null,Object.getPrototypeOf(new t)!==t.prototype}))},function(t,n,r){var e=r(5),o=r(97);t.exports=Object.setPrototypeOf||("__proto__"in{}?function(){var t,n=!1,r={};try{(t=Object.getOwnPropertyDescriptor(Object.prototype,"__proto__").set).call(r,[]),n=r instanceof Array}catch(t){}return function(r,c){return e(r),o(c),n?t.call(r,c):r.__proto__=c,r}}():void 0)},function(t,n,r){var e=r(6);t.exports=function(t){if(!e(t)&&null!==t)throw TypeError("Can't set "+String(t)+" as a prototype");return t}},function(t,n,r){"use strict";var e=r(99),o=r(100),c=r(5),f=r(16),l=r(101),v=r(102),h=r(8),y=r(103),d=r(19),x=r(1),m=[].push,w=Math.min,S=!x((function(){return!RegExp(4294967295,"y")}));e("split",2,(function(t,n,r){var e;return e="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(t,r){var e=String(f(this)),c=void 0===r?4294967295:r>>>0;if(0===c)return[];if(void 0===t)return[e];if(!o(t))return n.call(e,t,c);for(var l,v,h,output=[],y=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),x=0,w=new RegExp(t.source,y+"g");(l=d.call(w,e))&&!((v=w.lastIndex)>x&&(output.push(e.slice(x,l.index)),l.length>1&&l.index<e.length&&m.apply(output,l.slice(1)),h=l[0].length,x=v,output.length>=c));)w.lastIndex===l.index&&w.lastIndex++;return x===e.length?!h&&w.test("")||output.push(""):output.push(e.slice(x)),output.length>c?output.slice(0,c):output}:"0".split(void 0,0).length?function(t,r){return void 0===t&&0===r?[]:n.call(this,t,r)}:n,[function(n,r){var o=f(this),c=null==n?void 0:n[t];return void 0!==c?c.call(n,o,r):e.call(String(o),n,r)},function(t,o){var f=r(e,t,this,o,e!==n);if(f.done)return f.value;var d=c(t),x=String(this),m=l(d,RegExp),O=d.unicode,_=(d.ignoreCase?"i":"")+(d.multiline?"m":"")+(d.unicode?"u":"")+(S?"y":"g"),E=new m(S?d:"^(?:"+d.source+")",_),z=void 0===o?4294967295:o>>>0;if(0===z)return[];if(0===x.length)return null===y(E,x)?[x]:[];for(var p=0,q=0,j=[];q<x.length;){E.lastIndex=S?q:0;var A,R=y(E,S?x:x.slice(q));if(null===R||(A=w(h(E.lastIndex+(S?0:q)),x.length))===p)q=v(x,q,O);else{if(j.push(x.slice(p,q)),j.length===z)return j;for(var i=1;i<=R.length-1;i++)if(j.push(R[i]),j.length===z)return j;q=p=A}}return j.push(x.slice(p)),j}]}),!S)},function(t,n,r){"use strict";r(51);var e=r(21),o=r(1),c=r(0),f=r(19),l=r(7),v=c("species"),h=!o((function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")})),y="$0"==="a".replace(/./,"$0"),d=c("replace"),x=!!/./[d]&&""===/./[d]("a","$0"),m=!o((function(){var t=/(?:)/,n=t.exec;t.exec=function(){return n.apply(this,arguments)};var r="ab".split(t);return 2!==r.length||"a"!==r[0]||"b"!==r[1]}));t.exports=function(t,n,r,d){var w=c(t),S=!o((function(){var n={};return n[w]=function(){return 7},7!=""[t](n)})),O=S&&!o((function(){var n=!1,r=/a/;return"split"===t&&((r={}).constructor={},r.constructor[v]=function(){return r},r.flags="",r[w]=/./[w]),r.exec=function(){return n=!0,null},r[w](""),!n}));if(!S||!O||"replace"===t&&(!h||!y||x)||"split"===t&&!m){var _=/./[w],E=r(w,""[t],(function(t,n,r,e,o){return n.exec===f?S&&!o?{done:!0,value:_.call(n,r,e)}:{done:!0,value:t.call(r,n,e)}:{done:!1}}),{REPLACE_KEEPS_$0:y,REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE:x}),z=E[0],j=E[1];e(String.prototype,t,z),e(RegExp.prototype,w,2==n?function(t,n){return j.call(t,this,n)}:function(t){return j.call(t,this)})}d&&l(RegExp.prototype[w],"sham",!0)}},function(t,n,r){var e=r(6),o=r(10),c=r(0)("match");t.exports=function(t){var n;return e(t)&&(void 0!==(n=t[c])?!!n:"RegExp"==o(t))}},function(t,n,r){var e=r(5),o=r(32),c=r(0)("species");t.exports=function(t,n){var r,f=e(t).constructor;return void 0===f||null==(r=e(f)[c])?n:o(r)}},function(t,n,r){"use strict";var e=r(52).charAt;t.exports=function(t,n,r){return n+(r?e(t,n).length:1)}},function(t,n,r){var e=r(10),o=r(19);t.exports=function(t,n){var r=t.exec;if("function"==typeof r){var c=r.call(t,n);if("object"!=typeof c)throw TypeError("RegExp exec method returned something other than an Object or null");return c}if("RegExp"!==e(t))throw TypeError("RegExp#exec called on incompatible receiver");return o.call(t,n)}},function(t,n,r){"use strict";function e(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}function o(t,n){for(var i=0;i<n.length;i++){var r=n[i];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function c(t,n,r){return n&&o(t.prototype,n),r&&o(t,r),t}r.r(n);r(56),r(68),r(74),r(75),r(84),r(85),r(86),r(87),r(51),r(92),r(98);var f=function t(){e(this,t)},l="None",v="Dark",h="Light",y=function(){function t(n,r,o){e(this,t),this._board=n,this._turn=r,this._value=o,this._count={None:n.filter((function(t){return t===l})).length,Dark:n.filter((function(t){return t===v})).length,Light:n.filter((function(t){return t===h})).length}}return c(t,[{key:"count",value:function(){return this._count}},{key:"evaluate",value:function(){for(var n=new Array(t.size*t.size).fill(null),i=0;i<t.size;i++)for(var r=0;r<t.size;r++)if(t.isReversible(this._board,this._turn,i,r)){var e=t.dfs(this.put(i,r));n[t.pos(i,r)]=e[this._turn]-e[this._turn===v?h:v]}return new t(this._board,this.turn(),n)}},{key:"get",value:function(n,r){return this._board[t.pos(n,r)]}},{key:"put",value:function(n,r){if(!t.isReversible(this._board,this._turn,n,r))throw new f;var e=Array.from(this._board);t.reverse(e,this._turn,n,r);var o=this._turn===v?t.isReversibleSome(e,h)?h:t.isReversibleSome(e,v)?v:l:t.isReversibleSome(e,v)?v:t.isReversibleSome(e,h)?h:l;return new t(e,o,new Array(t.size*t.size).fill(null))}},{key:"toString",value:function(){for(var t=[l,v,h],n="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),r=this._board.concat(this._turn).map((function(n){return BigInt(t.indexOf(n))})).reduce((function(n,r){return BigInt(t.length)*n+r}),BigInt(0)),e=[];r>BigInt(0);r/=BigInt(n.length))e.push(n[r%BigInt(n.length)]);return e.reverse().join("")}},{key:"turn",value:function(){return this._turn}},{key:"value",value:function(n,r){return this._value[t.pos(n,r)]}}],[{key:"fromString",value:function(n){for(var r=this,e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),o=[l,v,h],c=n.split("").map((function(t){return BigInt(e.indexOf(t))})).reduce((function(t,n){return BigInt(e.length)*t+n}),BigInt(0)),f=[];c>BigInt(0);c/=BigInt(o.length))f.push(o[c%BigInt(o.length)]);return f.reverse(),new t(new Array(this.size*this.size).fill(l).map((function(t,n){return n-r.size*r.size+f.length-1>=0?f[n-r.size*r.size+f.length-1]:t})),f[f.length-1],new Array(this.size*this.size).fill(null))}},{key:"initialize",value:function(){var n=new Array(this.size*this.size).fill(l);return n[this.pos(this.size/2-1,this.size/2-1)]=h,n[this.pos(this.size/2-1,this.size/2)]=v,n[this.pos(this.size/2,this.size/2-1)]=v,n[this.pos(this.size/2,this.size/2)]=h,new t(n,v,new Array(this.size*this.size).fill(null))}},{key:"dfs",value:function(t){if(t._turn===l)return{None:0,Dark:t._count.Dark+(t._count.Dark>t._count.Light?t._count.None:0),Light:t._count.Light+(t._count.Light>t._count.Dark?t._count.None:0)};for(var n={None:0,Dark:-1,Light:-1},i=0;i<this.size;i++)for(var r=0;r<this.size;r++)if(this.isReversible(t._board,t._turn,i,r)){var e=this.dfs(t.put(i,r));n[t._turn]<e[t._turn]&&(n=e)}return n}},{key:"isReversible",value:function(t,n,r,e){if(t[this.pos(r,e)]!==l)return!1;for(var o=[-1,-1,-1,0,0,1,1,1],c=[-1,0,1,-1,1,-1,0,1],i=0;i<8;i++)if(this.isReversibleDelta(t,n,r,e,o[i],c[i]))return!0;return!1}},{key:"isReversibleDelta",value:function(t,n,r,e,o,c){for(var i=r+o,f=e+c,v=0;i>=0&&i<this.size&&f>=0&&f<this.size;i+=o,f+=c,v++){if(t[this.pos(i,f)]===l)return!1;if(t[this.pos(i,f)]===n)return 0!==v}return!1}},{key:"isReversibleSome",value:function(t,n){for(var i=0;i<this.size;i++)for(var r=0;r<this.size;r++)if(this.isReversible(t,n,i,r))return!0;return!1}},{key:"pos",value:function(t,n){return this.size*t+n}},{key:"reverse",value:function(t,n,r,e){for(var o=[-1,-1,-1,0,0,1,1,1],c=[-1,0,1,-1,1,-1,0,1],i=0;i<8;i++)this.isReversibleDelta(t,n,r,e,o[i],c[i])&&this.reverseDelta(t,n,r,e,o[i],c[i]);t[this.pos(r,e)]=n}},{key:"reverseDelta",value:function(t,n,r,e,o,c){for(var i=r+o,f=e+c;i>=0&&i<this.size&&f>=0&&f<this.size&&t[this.pos(i,f)]!==n;i+=o,f+=c)t[this.pos(i,f)]=n}}]),t}();y.size=8;var d=function(){function t(){e(this,t)}return c(t,null,[{key:"put",value:function(t){for(var n=t.evaluate(),r=-1,e=-1,o=-1/0,i=0;i<y.size;i++)for(var c=0;c<y.size;c++){var f=n.value(i,c);null!==f&&f>o&&(r=i,e=c,o=f)}return n.put(r,e)}},{key:"putRoughly",value:function(t){for(var n=this.weight();;)try{var p=n[Math.floor(Math.random()*n.length)];return t.put(p.y,p.x)}catch(t){}}},{key:"weight",value:function(){for(var t=[],i=0;i<y.size;i++)for(var n=0;n<y.size;n++)for(var r=0===i&&0===n||0===i&&n===y.size-1||i===y.size-1&&0===n||i===y.size-1&&n===y.size-1?5:1===i&&1===n||1===i&&n===y.size-2||i===y.size-2&&1===n||i===y.size-2&&n===y.size-2?1:3,e=0;e<r;e++)t.push({y:i,x:n});return t}}]),t}(),x=function(){function t(){e(this,t)}return c(t,null,[{key:"generate",value:function(t,n,r){for(;;){for(var e=this.base(t).evaluate(),o=0,c=0,i=0;i<y.size;i++)for(var f=0;f<y.size;f++){var l=e.value(i,f);null!==l&&l>0&&(o++,c=Math.max(c,l))}if(o>=1&&o<=n&&c<=r)return e}}},{key:"base",value:function(t){for(var n=y.initialize(),i=0;i<y.size*y.size-t-4;i++)n=d.putRoughly(n);return n}}]),t}();n.default=class{};addEventListener("message",t=>{postMessage(x.generate(t.data[0],t.data[1],t.data[2]).toString())})}]);