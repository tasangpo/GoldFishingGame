!function(){var t={9662:function(t,n,e){var r=e(7854),o=e(614),i=e(6330),s=r.TypeError;t.exports=function(t){if(o(t))return t;throw s(i(t)+" is not a function")}},9670:function(t,n,e){var r=e(7854),o=e(111),i=r.String,s=r.TypeError;t.exports=function(t){if(o(t))return t;throw s(i(t)+" is not an object")}},8533:function(t,n,e){"use strict";var r=e(2092).forEach,o=e(9341)("forEach");t.exports=o?[].forEach:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}},1318:function(t,n,e){var r=e(5656),o=e(1400),i=e(6244),s=function(t){return function(n,e,s){var a,u=r(n),c=i(u),f=o(s,c);if(t&&e!=e){for(;c>f;)if((a=u[f++])!=a)return!0}else for(;c>f;f++)if((t||f in u)&&u[f]===e)return t||f||0;return!t&&-1}};t.exports={includes:s(!0),indexOf:s(!1)}},2092:function(t,n,e){var r=e(9974),o=e(1702),i=e(8361),s=e(7908),a=e(6244),u=e(5417),c=o([].push),f=function(t){var n=1==t,e=2==t,o=3==t,f=4==t,l=6==t,h=7==t,p=5==t||l;return function(v,g,d,y){for(var m,b,w=s(v),x=i(w),S=r(g,d),k=a(x),O=0,j=y||u,E=n?j(v,k):e||h?j(v,0):void 0;k>O;O++)if((p||O in x)&&(b=S(m=x[O],O,w),t))if(n)E[O]=b;else if(b)switch(t){case 3:return!0;case 5:return m;case 6:return O;case 2:c(E,m)}else switch(t){case 4:return!1;case 7:c(E,m)}return l?-1:o||f?f:E}};t.exports={forEach:f(0),map:f(1),filter:f(2),some:f(3),every:f(4),find:f(5),findIndex:f(6),filterReject:f(7)}},1194:function(t,n,e){var r=e(7293),o=e(5112),i=e(7392),s=o("species");t.exports=function(t){return i>=51||!r((function(){var n=[];return(n.constructor={})[s]=function(){return{foo:1}},1!==n[t](Boolean).foo}))}},9341:function(t,n,e){"use strict";var r=e(7293);t.exports=function(t,n){var e=[][t];return!!e&&r((function(){e.call(null,n||function(){throw 1},1)}))}},7475:function(t,n,e){var r=e(7854),o=e(3157),i=e(4411),s=e(111),a=e(5112)("species"),u=r.Array;t.exports=function(t){var n;return o(t)&&(n=t.constructor,(i(n)&&(n===u||o(n.prototype))||s(n)&&null===(n=n[a]))&&(n=void 0)),void 0===n?u:n}},5417:function(t,n,e){var r=e(7475);t.exports=function(t,n){return new(r(t))(0===n?0:n)}},4326:function(t,n,e){var r=e(1702),o=r({}.toString),i=r("".slice);t.exports=function(t){return i(o(t),8,-1)}},648:function(t,n,e){var r=e(7854),o=e(1694),i=e(614),s=e(4326),a=e(5112)("toStringTag"),u=r.Object,c="Arguments"==s(function(){return arguments}());t.exports=o?s:function(t){var n,e,r;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(e=function(t,n){try{return t[n]}catch(t){}}(n=u(t),a))?e:c?s(n):"Object"==(r=s(n))&&i(n.callee)?"Arguments":r}},9920:function(t,n,e){var r=e(2597),o=e(3887),i=e(1236),s=e(3070);t.exports=function(t,n){for(var e=o(n),a=s.f,u=i.f,c=0;c<e.length;c++){var f=e[c];r(t,f)||a(t,f,u(n,f))}}},8880:function(t,n,e){var r=e(9781),o=e(3070),i=e(9114);t.exports=r?function(t,n,e){return o.f(t,n,i(1,e))}:function(t,n,e){return t[n]=e,t}},9114:function(t){t.exports=function(t,n){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:n}}},6135:function(t,n,e){"use strict";var r=e(4948),o=e(3070),i=e(9114);t.exports=function(t,n,e){var s=r(n);s in t?o.f(t,s,i(0,e)):t[s]=e}},9781:function(t,n,e){var r=e(7293);t.exports=!r((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},317:function(t,n,e){var r=e(7854),o=e(111),i=r.document,s=o(i)&&o(i.createElement);t.exports=function(t){return s?i.createElement(t):{}}},8324:function(t){t.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}},8509:function(t,n,e){var r=e(317)("span").classList,o=r&&r.constructor&&r.constructor.prototype;t.exports=o===Object.prototype?void 0:o},8113:function(t,n,e){var r=e(5005);t.exports=r("navigator","userAgent")||""},7392:function(t,n,e){var r,o,i=e(7854),s=e(8113),a=i.process,u=i.Deno,c=a&&a.versions||u&&u.version,f=c&&c.v8;f&&(o=(r=f.split("."))[0]>0&&r[0]<4?1:+(r[0]+r[1])),!o&&s&&(!(r=s.match(/Edge\/(\d+)/))||r[1]>=74)&&(r=s.match(/Chrome\/(\d+)/))&&(o=+r[1]),t.exports=o},748:function(t){t.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},2109:function(t,n,e){var r=e(7854),o=e(1236).f,i=e(8880),s=e(1320),a=e(3505),u=e(9920),c=e(4705);t.exports=function(t,n){var e,f,l,h,p,v=t.target,g=t.global,d=t.stat;if(e=g?r:d?r[v]||a(v,{}):(r[v]||{}).prototype)for(f in n){if(h=n[f],l=t.noTargetGet?(p=o(e,f))&&p.value:e[f],!c(g?f:v+(d?".":"#")+f,t.forced)&&void 0!==l){if(typeof h==typeof l)continue;u(h,l)}(t.sham||l&&l.sham)&&i(h,"sham",!0),s(e,f,h,t)}}},7293:function(t){t.exports=function(t){try{return!!t()}catch(t){return!0}}},9974:function(t,n,e){var r=e(1702),o=e(9662),i=r(r.bind);t.exports=function(t,n){return o(t),void 0===n?t:i?i(t,n):function(){return t.apply(n,arguments)}}},6916:function(t){var n=Function.prototype.call;t.exports=n.bind?n.bind(n):function(){return n.apply(n,arguments)}},6530:function(t,n,e){var r=e(9781),o=e(2597),i=Function.prototype,s=r&&Object.getOwnPropertyDescriptor,a=o(i,"name"),u=a&&"something"===function(){}.name,c=a&&(!r||r&&s(i,"name").configurable);t.exports={EXISTS:a,PROPER:u,CONFIGURABLE:c}},1702:function(t){var n=Function.prototype,e=n.bind,r=n.call,o=e&&e.bind(r);t.exports=e?function(t){return t&&o(r,t)}:function(t){return t&&function(){return r.apply(t,arguments)}}},5005:function(t,n,e){var r=e(7854),o=e(614),i=function(t){return o(t)?t:void 0};t.exports=function(t,n){return arguments.length<2?i(r[t]):r[t]&&r[t][n]}},8173:function(t,n,e){var r=e(9662);t.exports=function(t,n){var e=t[n];return null==e?void 0:r(e)}},7854:function(t,n,e){var r=function(t){return t&&t.Math==Math&&t};t.exports=r("object"==typeof globalThis&&globalThis)||r("object"==typeof window&&window)||r("object"==typeof self&&self)||r("object"==typeof e.g&&e.g)||function(){return this}()||Function("return this")()},2597:function(t,n,e){var r=e(1702),o=e(7908),i=r({}.hasOwnProperty);t.exports=Object.hasOwn||function(t,n){return i(o(t),n)}},3501:function(t){t.exports={}},4664:function(t,n,e){var r=e(9781),o=e(7293),i=e(317);t.exports=!r&&!o((function(){return 7!=Object.defineProperty(i("div"),"a",{get:function(){return 7}}).a}))},8361:function(t,n,e){var r=e(7854),o=e(1702),i=e(7293),s=e(4326),a=r.Object,u=o("".split);t.exports=i((function(){return!a("z").propertyIsEnumerable(0)}))?function(t){return"String"==s(t)?u(t,""):a(t)}:a},2788:function(t,n,e){var r=e(1702),o=e(614),i=e(5465),s=r(Function.toString);o(i.inspectSource)||(i.inspectSource=function(t){return s(t)}),t.exports=i.inspectSource},9909:function(t,n,e){var r,o,i,s=e(8536),a=e(7854),u=e(1702),c=e(111),f=e(8880),l=e(2597),h=e(5465),p=e(6200),v=e(3501),g="Object already initialized",d=a.TypeError,y=a.WeakMap;if(s||h.state){var m=h.state||(h.state=new y),b=u(m.get),w=u(m.has),x=u(m.set);r=function(t,n){if(w(m,t))throw new d(g);return n.facade=t,x(m,t,n),n},o=function(t){return b(m,t)||{}},i=function(t){return w(m,t)}}else{var S=p("state");v[S]=!0,r=function(t,n){if(l(t,S))throw new d(g);return n.facade=t,f(t,S,n),n},o=function(t){return l(t,S)?t[S]:{}},i=function(t){return l(t,S)}}t.exports={set:r,get:o,has:i,enforce:function(t){return i(t)?o(t):r(t,{})},getterFor:function(t){return function(n){var e;if(!c(n)||(e=o(n)).type!==t)throw d("Incompatible receiver, "+t+" required");return e}}}},3157:function(t,n,e){var r=e(4326);t.exports=Array.isArray||function(t){return"Array"==r(t)}},614:function(t){t.exports=function(t){return"function"==typeof t}},4411:function(t,n,e){var r=e(1702),o=e(7293),i=e(614),s=e(648),a=e(5005),u=e(2788),c=function(){},f=[],l=a("Reflect","construct"),h=/^\s*(?:class|function)\b/,p=r(h.exec),v=!h.exec(c),g=function(t){if(!i(t))return!1;try{return l(c,f,t),!0}catch(t){return!1}};t.exports=!l||o((function(){var t;return g(g.call)||!g(Object)||!g((function(){t=!0}))||t}))?function(t){if(!i(t))return!1;switch(s(t)){case"AsyncFunction":case"GeneratorFunction":case"AsyncGeneratorFunction":return!1}return v||!!p(h,u(t))}:g},4705:function(t,n,e){var r=e(7293),o=e(614),i=/#|\.prototype\./,s=function(t,n){var e=u[a(t)];return e==f||e!=c&&(o(n)?r(n):!!n)},a=s.normalize=function(t){return String(t).replace(i,".").toLowerCase()},u=s.data={},c=s.NATIVE="N",f=s.POLYFILL="P";t.exports=s},111:function(t,n,e){var r=e(614);t.exports=function(t){return"object"==typeof t?null!==t:r(t)}},1913:function(t){t.exports=!1},2190:function(t,n,e){var r=e(7854),o=e(5005),i=e(614),s=e(7976),a=e(3307),u=r.Object;t.exports=a?function(t){return"symbol"==typeof t}:function(t){var n=o("Symbol");return i(n)&&s(n.prototype,u(t))}},6244:function(t,n,e){var r=e(7466);t.exports=function(t){return r(t.length)}},133:function(t,n,e){var r=e(7392),o=e(7293);t.exports=!!Object.getOwnPropertySymbols&&!o((function(){var t=Symbol();return!String(t)||!(Object(t)instanceof Symbol)||!Symbol.sham&&r&&r<41}))},8536:function(t,n,e){var r=e(7854),o=e(614),i=e(2788),s=r.WeakMap;t.exports=o(s)&&/native code/.test(i(s))},3070:function(t,n,e){var r=e(7854),o=e(9781),i=e(4664),s=e(9670),a=e(4948),u=r.TypeError,c=Object.defineProperty;n.f=o?c:function(t,n,e){if(s(t),n=a(n),s(e),i)try{return c(t,n,e)}catch(t){}if("get"in e||"set"in e)throw u("Accessors not supported");return"value"in e&&(t[n]=e.value),t}},1236:function(t,n,e){var r=e(9781),o=e(6916),i=e(5296),s=e(9114),a=e(5656),u=e(4948),c=e(2597),f=e(4664),l=Object.getOwnPropertyDescriptor;n.f=r?l:function(t,n){if(t=a(t),n=u(n),f)try{return l(t,n)}catch(t){}if(c(t,n))return s(!o(i.f,t,n),t[n])}},8006:function(t,n,e){var r=e(6324),o=e(748).concat("length","prototype");n.f=Object.getOwnPropertyNames||function(t){return r(t,o)}},5181:function(t,n){n.f=Object.getOwnPropertySymbols},7976:function(t,n,e){var r=e(1702);t.exports=r({}.isPrototypeOf)},6324:function(t,n,e){var r=e(1702),o=e(2597),i=e(5656),s=e(1318).indexOf,a=e(3501),u=r([].push);t.exports=function(t,n){var e,r=i(t),c=0,f=[];for(e in r)!o(a,e)&&o(r,e)&&u(f,e);for(;n.length>c;)o(r,e=n[c++])&&(~s(f,e)||u(f,e));return f}},1956:function(t,n,e){var r=e(6324),o=e(748);t.exports=Object.keys||function(t){return r(t,o)}},5296:function(t,n){"use strict";var e={}.propertyIsEnumerable,r=Object.getOwnPropertyDescriptor,o=r&&!e.call({1:2},1);n.f=o?function(t){var n=r(this,t);return!!n&&n.enumerable}:e},288:function(t,n,e){"use strict";var r=e(1694),o=e(648);t.exports=r?{}.toString:function(){return"[object "+o(this)+"]"}},2140:function(t,n,e){var r=e(7854),o=e(6916),i=e(614),s=e(111),a=r.TypeError;t.exports=function(t,n){var e,r;if("string"===n&&i(e=t.toString)&&!s(r=o(e,t)))return r;if(i(e=t.valueOf)&&!s(r=o(e,t)))return r;if("string"!==n&&i(e=t.toString)&&!s(r=o(e,t)))return r;throw a("Can't convert object to primitive value")}},3887:function(t,n,e){var r=e(5005),o=e(1702),i=e(8006),s=e(5181),a=e(9670),u=o([].concat);t.exports=r("Reflect","ownKeys")||function(t){var n=i.f(a(t)),e=s.f;return e?u(n,e(t)):n}},1320:function(t,n,e){var r=e(7854),o=e(614),i=e(2597),s=e(8880),a=e(3505),u=e(2788),c=e(9909),f=e(6530).CONFIGURABLE,l=c.get,h=c.enforce,p=String(String).split("String");(t.exports=function(t,n,e,u){var c,l=!!u&&!!u.unsafe,v=!!u&&!!u.enumerable,g=!!u&&!!u.noTargetGet,d=u&&void 0!==u.name?u.name:n;o(e)&&("Symbol("===String(d).slice(0,7)&&(d="["+String(d).replace(/^Symbol\(([^)]*)\)/,"$1")+"]"),(!i(e,"name")||f&&e.name!==d)&&s(e,"name",d),(c=h(e)).source||(c.source=p.join("string"==typeof d?d:""))),t!==r?(l?!g&&t[n]&&(v=!0):delete t[n],v?t[n]=e:s(t,n,e)):v?t[n]=e:a(n,e)})(Function.prototype,"toString",(function(){return o(this)&&l(this).source||u(this)}))},4488:function(t,n,e){var r=e(7854).TypeError;t.exports=function(t){if(null==t)throw r("Can't call method on "+t);return t}},3505:function(t,n,e){var r=e(7854),o=Object.defineProperty;t.exports=function(t,n){try{o(r,t,{value:n,configurable:!0,writable:!0})}catch(e){r[t]=n}return n}},6200:function(t,n,e){var r=e(2309),o=e(9711),i=r("keys");t.exports=function(t){return i[t]||(i[t]=o(t))}},5465:function(t,n,e){var r=e(7854),o=e(3505),i="__core-js_shared__",s=r[i]||o(i,{});t.exports=s},2309:function(t,n,e){var r=e(1913),o=e(5465);(t.exports=function(t,n){return o[t]||(o[t]=void 0!==n?n:{})})("versions",[]).push({version:"3.19.2",mode:r?"pure":"global",copyright:"© 2021 Denis Pushkarev (zloirock.ru)"})},1400:function(t,n,e){var r=e(9303),o=Math.max,i=Math.min;t.exports=function(t,n){var e=r(t);return e<0?o(e+n,0):i(e,n)}},5656:function(t,n,e){var r=e(8361),o=e(4488);t.exports=function(t){return r(o(t))}},9303:function(t){var n=Math.ceil,e=Math.floor;t.exports=function(t){var r=+t;return r!=r||0===r?0:(r>0?e:n)(r)}},7466:function(t,n,e){var r=e(9303),o=Math.min;t.exports=function(t){return t>0?o(r(t),9007199254740991):0}},7908:function(t,n,e){var r=e(7854),o=e(4488),i=r.Object;t.exports=function(t){return i(o(t))}},7593:function(t,n,e){var r=e(7854),o=e(6916),i=e(111),s=e(2190),a=e(8173),u=e(2140),c=e(5112),f=r.TypeError,l=c("toPrimitive");t.exports=function(t,n){if(!i(t)||s(t))return t;var e,r=a(t,l);if(r){if(void 0===n&&(n="default"),e=o(r,t,n),!i(e)||s(e))return e;throw f("Can't convert object to primitive value")}return void 0===n&&(n="number"),u(t,n)}},4948:function(t,n,e){var r=e(7593),o=e(2190);t.exports=function(t){var n=r(t,"string");return o(n)?n:n+""}},1694:function(t,n,e){var r={};r[e(5112)("toStringTag")]="z",t.exports="[object z]"===String(r)},6330:function(t,n,e){var r=e(7854).String;t.exports=function(t){try{return r(t)}catch(t){return"Object"}}},9711:function(t,n,e){var r=e(1702),o=0,i=Math.random(),s=r(1..toString);t.exports=function(t){return"Symbol("+(void 0===t?"":t)+")_"+s(++o+i,36)}},3307:function(t,n,e){var r=e(133);t.exports=r&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},5112:function(t,n,e){var r=e(7854),o=e(2309),i=e(2597),s=e(9711),a=e(133),u=e(3307),c=o("wks"),f=r.Symbol,l=f&&f.for,h=u?f:f&&f.withoutSetter||s;t.exports=function(t){if(!i(c,t)||!a&&"string"!=typeof c[t]){var n="Symbol."+t;a&&i(f,t)?c[t]=f[t]:c[t]=u&&l?l(n):h(n)}return c[t]}},561:function(t,n,e){"use strict";var r=e(2109),o=e(7854),i=e(1400),s=e(9303),a=e(6244),u=e(7908),c=e(5417),f=e(6135),l=e(1194)("splice"),h=o.TypeError,p=Math.max,v=Math.min,g=9007199254740991,d="Maximum allowed length exceeded";r({target:"Array",proto:!0,forced:!l},{splice:function(t,n){var e,r,o,l,y,m,b=u(this),w=a(b),x=i(t,w),S=arguments.length;if(0===S?e=r=0:1===S?(e=0,r=w-x):(e=S-2,r=v(p(s(n),0),w-x)),w+e-r>g)throw h(d);for(o=c(b,r),l=0;l<r;l++)(y=x+l)in b&&f(o,l,b[y]);if(o.length=r,e<r){for(l=x;l<w-r;l++)m=l+e,(y=l+r)in b?b[m]=b[y]:delete b[m];for(l=w;l>w-r+e;l--)delete b[l-1]}else if(e>r)for(l=w-r;l>x;l--)m=l+e-1,(y=l+r-1)in b?b[m]=b[y]:delete b[m];for(l=0;l<e;l++)b[l+x]=arguments[l+2];return b.length=w-r+e,o}})},7941:function(t,n,e){var r=e(2109),o=e(7908),i=e(1956);r({target:"Object",stat:!0,forced:e(7293)((function(){i(1)}))},{keys:function(t){return i(o(t))}})},1539:function(t,n,e){var r=e(1694),o=e(1320),i=e(288);r||o(Object.prototype,"toString",i,{unsafe:!0})},4747:function(t,n,e){var r=e(7854),o=e(8324),i=e(8509),s=e(8533),a=e(8880),u=function(t){if(t&&t.forEach!==s)try{a(t,"forEach",s)}catch(n){t.forEach=s}};for(var c in o)o[c]&&u(r[c]&&r[c].prototype);u(i)}},n={};function e(r){var o=n[r];if(void 0!==o)return o.exports;var i=n[r]={exports:{}};return t[r](i,i.exports,e),i.exports}e.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),function(){"use strict";function t(t,n){for(var e=0;e<n.length;e++){var r=n[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}e(1539),e(4747),e(561);var n=function(){function n(t){!function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(this,n),this.game=t.game,this.pos=t.pos,this.width=50,this.height=15}var e,r;return e=n,(r=[{key:"endPosY",value:function(){return this.pos[1]+=this.height}},{key:"draw",value:function(t){var n=new Image;n.src="src/images/rope.png",t.drawImage(n,this.pos[0],this.pos[1],this.width,this.height)}},{key:"move",value:function(t){this.height+=15,this.draw(t),600===this.height&&this.game.lines.shift()}}])&&t(e.prototype,r),n}();function r(t,n){for(var e=0;e<n.length;e++){var r=n[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var o=[450,50],i=function(){function t(n){!function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(this,t),this.pos=o,this.width=200,this.height=75,this.game=n.game}var e,i;return e=t,(i=[{key:"draw",value:function(t){var n=new Image;n.src="src/images/boat.png",t.drawImage(n,this.pos[0],this.pos[1],this.width,this.height)}},{key:"power",value:function(t){this.pos[0]+=15*t[0],this.pos[0]<0?this.pos[0]=0:this.pos[0]>900&&(this.pos[0]=900)}},{key:"castLine",value:function(){this.game.lines.shift();var t=[this.pos[0]+75,this.pos[1]+55],e=new n({game:this.game,pos:t});this.game.addLine(e)}}])&&r(e.prototype,i),t}();function s(t,n){for(var e=0;e<n.length;e++){var r=n[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var a=function(){function t(n){!function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(this,t),this.pos=n.pos,this.vel=n.vel,this.width=100,this.height=50,this.game=n.game,this.img=new Image}var n,e;return n=t,(e=[{key:"draw",value:function(t){this.vel[0]>0?this.img.src="src/images/shark.png":this.vel[0]<0?this.img.src="src/images/shark_flipped.png":this.img.src="src/images/shark_vertical.png",t.drawImage(this.img,this.pos[0],this.pos[1],this.width,this.height)}},{key:"move",value:function(t){this.pos[0]+=this.vel[0],this.pos[1]+=this.vel[1],(this.pos[0]<0||this.pos[0]>t.canvas.width-this.width)&&(this.vel[0]*=-1)}}])&&s(n.prototype,e),t}();function u(t,n){for(var e=0;e<n.length;e++){var r=n[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var c=function(){function t(n){!function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(this,t),this.width=50,this.height=25,this.pos=n.pos,this.game=n.game}var n,e;return n=t,(e=[{key:"draw",value:function(t){var n=new Image;n.src="src/images/gold.png",t.drawImage(n,this.pos[0],this.pos[1],this.width,this.height)}}])&&u(n.prototype,e),t}();function f(t,n){for(var e=0;e<n.length;e++){var r=n[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var l=1e3,h=function(){function t(){!function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(this,t),this.sharks=[],this.golds=[],this.players=[],this.lines=[],this.level=1,this.addSharks(),this.addGolds()}var n,e;return n=t,(e=[{key:"addSharks",value:function(){for(var t=5*this.level;this.sharks.length<t;){var n=this.randomPosition(l,600),e=new a({pos:n,game:this,vel:[5*Math.random()+2,0]});e.pos[1]>125&&e.pos[1]<450&&e.pos[0]>e.width&&e.pos[0]<l-e.width&&this.sharks.push(e)}}},{key:"addGolds",value:function(){for(;this.golds.length<5;){var t=this.randomPosition(l,600),n=new c({pos:t,game:this});n.pos[0]>50&&n.pos[0]<950&&n.pos[1]>450&&n.pos[1]<550&&this.golds.push(n)}}},{key:"addPlayer",value:function(){var t=new i({game:this});return this.players.push(t),t}},{key:"addLine",value:function(t){this.lines.push(t)}},{key:"draw",value:function(t){this.updateStats();var n=new Image,e=new Image;n.src="src/images/stars.png",e.src="src/images/jellyfish.jpg",t.drawImage(n,0,0,1e3,100),t.drawImage(e,0,100,1e3,500),this.drawSharks(t),this.drawGolds(t),this.players.length&&this.players[0].draw(t),this.lines.length&&this.lines[this.lines.length-1].move(t),this.goldCollision(),this.sharkCollision()}},{key:"randomPosition",value:function(t,n){return[t*Math.random(),n*Math.random()]}},{key:"drawSharks",value:function(t){this.sharks.forEach((function(n){n.draw(t)}))}},{key:"drawGolds",value:function(t){this.golds.forEach((function(n){n.draw(t)}))}},{key:"updateStats",value:function(){document.getElementById("level").innerText="Level: ".concat(this.level),document.getElementById("gold").innerText="Gold Remaining: ".concat(this.golds.length)}},{key:"moveSharks",value:function(t){var n=this.players;this.sharks.forEach((function(e){e.pos[1]<100?(n.shift(),document.getElementById("game-over").style.visibility="visible",window.clearInterval(1)):e.move(t)})),this.draw(t),this.golds.length||(this.level+=1,this.addSharks(),this.addGolds())}},{key:"goldCollision",value:function(){if(this.lines.length){var t=this.lines[0],n=this.lines,e=t.pos[0]+25,r=this.golds;this.golds.forEach((function(o){if(e>o.pos[0]&&e<o.pos[0]+50&&t.height>o.pos[1]-t.pos[1]+20){var i=r.indexOf(o);r.splice(i,1),n.shift()}}))}}},{key:"sharkCollision",value:function(){if(this.lines.length){var t=this.lines,n=t[0],e=n.pos[0]+25;this.sharks.forEach((function(r){n.height>r.pos[1]-n.pos[1]+20&&e>r.pos[0]&&e<r.pos[0]+r.width&&(t.shift(),r.img.src="src/images/shark_vertical.png",r.vel=[0,-5])}))}}}])&&f(n.prototype,e),t}();function p(t,n){for(var e=0;e<n.length;e++){var r=n[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}e(7941);var v={a:[-1,0],d:[1,0]},g=function(){function t(n,e){!function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(this,t),this.ctx=e,this.game=n,this.player=this.game.addPlayer(),this.start=this.start.bind(this)}var n,e;return n=t,(e=[{key:"start",value:function(){this.bindKeyHandlers();var t=this.game.moveSharks.bind(this.game,this.ctx);setInterval(t,20)}},{key:"bindKeyHandlers",value:function(){var t=this.player;Object.keys(v).forEach((function(n){var e=v[n];key(n,(function(){t.power(e)}))})),key("space",(function(){t.castLine()}))}}])&&p(n.prototype,e),t}(),d=g;window.GameView=d,document.addEventListener("DOMContentLoaded",(function(){var t=document.getElementById("game-canvas").getContext("2d"),n=new h,e=new d(n,t);document.getElementById("start-btn").addEventListener("click",(function(){e.start()}))}))}()}();
//# sourceMappingURL=main.js.map