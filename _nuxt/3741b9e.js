(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{233:function(e,t,r){var content=r(236);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(47).default)("7c1e2610",content,!0,{sourceMap:!1})},234:function(e,t,r){"use strict";r.r(t);var n=r(1).a.extend({}),o=(r(235),r(20)),component=Object(o.a)(n,(function(){var e=this.$createElement;this._self._c;return this._m(0)}),[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"container"},[t("hr",{staticClass:"hr"})])}],!1,null,"673eb3fa",null);t.default=component.exports;installComponents(component,{Hr:r(234).default})},235:function(e,t,r){"use strict";r(233)},236:function(e,t,r){(t=r(46)(!1)).push([e.i,".container[data-v-673eb3fa]{margin:4rem 0}.hr[data-v-673eb3fa]{border:none;border-bottom:.5rem dotted #0b6a0b}",""]),e.exports=t},238:function(e,t,r){var content=r(245);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(47).default)("10db0362",content,!0,{sourceMap:!1})},242:function(e,t,r){var n=r(2),o=r(243),l=r(77);n({target:"Array",proto:!0},{fill:o}),l("fill")},243:function(e,t,r){"use strict";var n=r(21),o=r(106),l=r(12);e.exports=function(e){for(var t=n(this),r=l(t.length),c=arguments.length,v=o(c>1?arguments[1]:void 0,r),f=c>2?arguments[2]:void 0,h=void 0===f?r:o(f,r);h>v;)t[v++]=e;return t}},244:function(e,t,r){"use strict";r(238)},245:function(e,t,r){(t=r(46)(!1)).push([e.i,".board[data-v-c26aaa94]{background-color:#0b6a0b;border:1rem solid #063c06}.board-cell[data-v-c26aaa94]{align-items:center;border:.1rem solid #063c06;justify-content:center}.board-cell[data-v-c26aaa94],.board-row[data-v-c26aaa94]{display:flex}.button[data-v-c26aaa94]{background-color:#faf9f8;border:thin solid #063c06;border-radius:.25rem;color:#063c06;cursor:pointer;display:block;font-size:1.2rem;margin:1rem 0;outline:none;padding:.4rem 1rem}.button[data-v-c26aaa94]:hover{background-color:#edebe9}.button[data-v-c26aaa94]:focus{box-shadow:0 0 .1rem #063c06}.button[data-v-c26aaa94]:active{background-color:#c8c6c4}.container[data-v-c26aaa94]{margin:4rem 0}.disk-dark[data-v-c26aaa94]{background-color:#201f1e;border-radius:50%;display:block;height:79%;width:79%}.disk-light[data-v-c26aaa94]{background-color:#faf9f8;border:.1rem solid #0b6a0b;border-radius:50%;display:block;height:76%;width:76%}.info-computer[data-v-c26aaa94]{align-items:center;display:flex;flex-direction:row-reverse;padding:0 1rem 1rem}.info-computer-cell[data-v-c26aaa94]{align-items:center;display:flex;justify-content:center}.info-computer-label[data-v-c26aaa94]{font-size:1.2rem;margin-right:1rem}.info-player[data-v-c26aaa94]{padding:1rem 1rem 0}.info-player[data-v-c26aaa94],.info-player-cell[data-v-c26aaa94]{align-items:center;display:flex}.info-player-cell[data-v-c26aaa94]{justify-content:center}.info-player-label[data-v-c26aaa94]{font-size:1.2rem;margin-left:1rem}.tools[data-v-c26aaa94]{display:flex}.tools-item[data-v-c26aaa94]{margin-right:1rem}.value[data-v-c26aaa94]{color:#fce100;cursor:default;font-size:1.4rem}",""]),e.exports=t},248:function(e,t,r){"use strict";r.r(t);r(59);var n=r(1);r(107),r(242),r(48),r(32),r(164),r(165),r(49),r(166),r(58),r(33),r(167);function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){for(var i=0;i<t.length;i++){var r=t[i];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function c(e,t,r){return t&&l(e.prototype,t),r&&l(e,r),e}var v=function e(){o(this,e)},f="None",h="Dark",d="Light",m=function(){function e(t,r,n){o(this,e),this._board=t,this._turn=r,this._value=n,this._count={None:t.filter((function(e){return e===f})).length,Dark:t.filter((function(e){return e===h})).length,Light:t.filter((function(e){return e===d})).length}}return c(e,[{key:"count",value:function(){return this._count}},{key:"evaluate",value:function(){for(var t=new Array(e.size*e.size).fill(null),i=0;i<e.size;i++)for(var r=0;r<e.size;r++)if(e.isReversible(this._board,this._turn,i,r)){var n=e.dfs(this.put(i,r));t[e.pos(i,r)]=n[this._turn]-n[this._turn===h?d:h]}return new e(this._board,this.turn(),t)}},{key:"get",value:function(t,r){return this._board[e.pos(t,r)]}},{key:"put",value:function(t,r){if(!e.isReversible(this._board,this._turn,t,r))throw new v;var n=Array.from(this._board);e.reverse(n,this._turn,t,r);var o=this._turn===h?e.isReversibleSome(n,d)?d:e.isReversibleSome(n,h)?h:f:e.isReversibleSome(n,h)?h:e.isReversibleSome(n,d)?d:f;return new e(n,o,new Array(e.size*e.size).fill(null))}},{key:"toString",value:function(){for(var e=[f,h,d],t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),r=this._board.concat(this._turn).map((function(t){return BigInt(e.indexOf(t))})).reduce((function(t,r){return BigInt(e.length)*t+r}),BigInt(0)),n=[];r>BigInt(0);r/=BigInt(t.length))n.push(t[r%BigInt(t.length)]);return n.reverse().join("")}},{key:"turn",value:function(){return this._turn}},{key:"value",value:function(t,r){return this._value[e.pos(t,r)]}}],[{key:"fromString",value:function(t){for(var r=this,n="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),o=[f,h,d],l=t.split("").map((function(e){return BigInt(n.indexOf(e))})).reduce((function(e,t){return BigInt(n.length)*e+t}),BigInt(0)),c=[];l>BigInt(0);l/=BigInt(o.length))c.push(o[l%BigInt(o.length)]);return c.reverse(),new e(new Array(this.size*this.size).fill(f).map((function(e,t){return t-r.size*r.size+c.length-1>=0?c[t-r.size*r.size+c.length-1]:e})),c[c.length-1],new Array(this.size*this.size).fill(null))}},{key:"initialize",value:function(){var t=new Array(this.size*this.size).fill(f);return t[this.pos(this.size/2-1,this.size/2-1)]=d,t[this.pos(this.size/2-1,this.size/2)]=h,t[this.pos(this.size/2,this.size/2-1)]=h,t[this.pos(this.size/2,this.size/2)]=d,new e(t,h,new Array(this.size*this.size).fill(null))}},{key:"dfs",value:function(e){if(e._turn===f)return{None:0,Dark:e._count.Dark+(e._count.Dark>e._count.Light?e._count.None:0),Light:e._count.Light+(e._count.Light>e._count.Dark?e._count.None:0)};for(var t={None:0,Dark:-1,Light:-1},i=0;i<this.size;i++)for(var r=0;r<this.size;r++)if(this.isReversible(e._board,e._turn,i,r)){var n=this.dfs(e.put(i,r));t[e._turn]<n[e._turn]&&(t=n)}return t}},{key:"isReversible",value:function(e,t,r,n){if(e[this.pos(r,n)]!==f)return!1;for(var o=[-1,-1,-1,0,0,1,1,1],l=[-1,0,1,-1,1,-1,0,1],i=0;i<8;i++)if(this.isReversibleDelta(e,t,r,n,o[i],l[i]))return!0;return!1}},{key:"isReversibleDelta",value:function(e,t,r,n,o,l){for(var i=r+o,c=n+l,v=0;i>=0&&i<this.size&&c>=0&&c<this.size;i+=o,c+=l,v++){if(e[this.pos(i,c)]===f)return!1;if(e[this.pos(i,c)]===t)return 0!==v}return!1}},{key:"isReversibleSome",value:function(e,t){for(var i=0;i<this.size;i++)for(var r=0;r<this.size;r++)if(this.isReversible(e,t,i,r))return!0;return!1}},{key:"pos",value:function(e,t){return this.size*e+t}},{key:"reverse",value:function(e,t,r,n){for(var o=[-1,-1,-1,0,0,1,1,1],l=[-1,0,1,-1,1,-1,0,1],i=0;i<8;i++)this.isReversibleDelta(e,t,r,n,o[i],l[i])&&this.reverseDelta(e,t,r,n,o[i],l[i]);e[this.pos(r,n)]=t}},{key:"reverseDelta",value:function(e,t,r,n,o,l){for(var i=r+o,c=n+l;i>=0&&i<this.size&&c>=0&&c<this.size&&e[this.pos(i,c)]!==t;i+=o,c+=l)e[this.pos(i,c)]=t}}]),e}();m.size=8;var y=function(){function e(){o(this,e)}return c(e,null,[{key:"put",value:function(e){for(var t=e.evaluate(),r=-1,n=-1,o=-1/0,i=0;i<m.size;i++)for(var l=0;l<m.size;l++){var c=t.value(i,l);null!==c&&c>o&&(r=i,n=l,o=c)}return t.put(r,n)}},{key:"putRoughly",value:function(e){for(var t=this.weight();;)try{var p=t[Math.floor(Math.random()*t.length)];return e.put(p.y,p.x)}catch(e){}}},{key:"weight",value:function(){for(var e=[],i=0;i<m.size;i++)for(var t=0;t<m.size;t++)for(var r=0===i&&0===t||0===i&&t===m.size-1||i===m.size-1&&0===t||i===m.size-1&&t===m.size-1?5:1===i&&1===t||1===i&&t===m.size-2||i===m.size-2&&1===t||i===m.size-2&&t===m.size-2?1:3,n=0;n<r;n++)e.push({y:i,x:t});return e}}]),e}(),_=n.a.extend({data:function(){var e=this.$route.params.id,t=m.fromString(e).evaluate();return{cellSize:0,id:e,readonly:!1,reversi:t,reversiSize:m.size,showValue:!1,timeout:500,timeoutId:0,turnComputer:"Dark"===t.turn()?"Light":"Dark",turnPlayer:t.turn()}},mounted:function(){this.cellSize=this.$refs.board.clientWidth/this.reversiSize},methods:{hide:function(){this.showValue=!1},put:function(e,t){var r=this;if(!this.readonly){try{this.reversi=this.reversi.put(e,t).evaluate()}catch(e){return}!function e(){r.reversi.turn()===r.turnPlayer?r.readonly=!1:"None"===r.reversi.turn()?r.readonly=!0:(r.readonly=!0,r.timeoutId=window.setTimeout((function(){r.reversi=y.put(r.reversi).evaluate(),e()}),r.timeout))}()}},reload:function(){window.clearTimeout(this.timeoutId),this.reversi=m.fromString(this.id).evaluate(),this.readonly=!1},show:function(){this.showValue=!0}}}),z=(r(244),r(20)),component=Object(z.a)(_,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"container"},[r("div",{staticClass:"info-computer"},[r("div",{staticClass:"info-computer-cell",style:{width:e.cellSize/2+"px",height:e.cellSize/2+"px"}},["Dark"===e.turnComputer?r("span",{staticClass:"disk-dark"}):e._e(),e._v(" "),"Light"===e.turnComputer?r("span",{staticClass:"disk-light"}):e._e()]),e._v(" "),r("div",{staticClass:"info-computer-label"},[e._v("Computer")]),e._v(" "),r("div",{staticClass:"info-computer-label"},[e._v(e._s(e.reversi.count()[e.turnComputer]))])]),e._v(" "),r("div",{ref:"board",staticClass:"board"},e._l(e.reversiSize,(function(i){return r("div",{key:i,staticClass:"board-row"},e._l(e.reversiSize,(function(t){return r("div",{key:t,staticClass:"board-cell",style:{width:e.cellSize+"px",height:e.cellSize+"px"},on:{click:function(r){return e.put(i-1,t-1)}}},["Dark"===e.reversi.get(i-1,t-1)?r("span",{staticClass:"disk-dark"}):e._e(),e._v(" "),"Light"===e.reversi.get(i-1,t-1)?r("span",{staticClass:"disk-light"}):e._e(),e._v(" "),e.showValue?r("span",{staticClass:"value"},[e._v(e._s(e.reversi.value(i-1,t-1)))]):e._e()])})),0)})),0),e._v(" "),r("div",{staticClass:"info-player"},[r("div",{staticClass:"info-player-cell",style:{width:e.cellSize/2+"px",height:e.cellSize/2+"px"}},["Dark"===e.turnPlayer?r("span",{staticClass:"disk-dark"}):e._e(),e._v(" "),"Light"===e.turnPlayer?r("span",{staticClass:"disk-light"}):e._e()]),e._v(" "),r("div",{staticClass:"info-player-label"},[e._v("Player")]),e._v(" "),r("div",{staticClass:"info-player-label"},[e._v(e._s(e.reversi.count()[e.turnPlayer]))])]),e._v(" "),r("Hr"),e._v(" "),r("div",{staticClass:"tools"},[r("button",{staticClass:"button tools-item",on:{click:function(t){return e.reload()}}},[e._v("Reload")]),e._v(" "),e.showValue?r("button",{staticClass:"button tools-item",on:{click:function(t){return e.hide()}}},[e._v("\n      Hide value\n    ")]):e._e(),e._v(" "),e.showValue?e._e():r("button",{staticClass:"button tools-item",on:{click:function(t){return e.show()}}},[e._v("\n      Show value\n    ")])])],1)}),[],!1,null,"c26aaa94",null);t.default=component.exports;installComponents(component,{Hr:r(234).default})}}]);