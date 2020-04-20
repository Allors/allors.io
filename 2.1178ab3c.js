/*! For license information please see 2.1178ab3c.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{174:function(t,e,n){"use strict";var r=n(1),o=n(0),i=n.n(o),a=n(167),c=(n(201),n(202),n(75),n(86),n(203),n(204),n(169)),l=n.n(c),s={plain:{backgroundColor:"#2a2734",color:"#9a86fd"},styles:[{types:["comment","prolog","doctype","cdata","punctuation"],style:{color:"#6c6783"}},{types:["namespace"],style:{opacity:.7}},{types:["tag","operator","number"],style:{color:"#e09142"}},{types:["property","function"],style:{color:"#9a86fd"}},{types:["tag-id","selector","atrule-id"],style:{color:"#eeebff"}},{types:["attr-name"],style:{color:"#c4b9fe"}},{types:["boolean","string","entity","url","attr-value","keyword","control","directive","unit","statement","regex","at-rule","placeholder","variable"],style:{color:"#ffcc99"}},{types:["deleted"],style:{textDecorationLine:"line-through"}},{types:["inserted"],style:{textDecorationLine:"underline"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["important"],style:{color:"#c4b9fe"}}]},u={Prism:n(53).a,theme:s};function f(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function p(){return(p=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}var h=/\r\n|\r|\n/,y=function(t){0===t.length?t.push({types:["plain"],content:"",empty:!0}):1===t.length&&""===t[0].content&&(t[0].empty=!0)},d=function(t,e){var n=t.length;return n>0&&t[n-1]===e?t:t.concat(e)},g=function(t,e){var n=t.plain,r=Object.create(null),o=t.styles.reduce((function(t,n){var r=n.languages,o=n.style;return r&&!r.includes(e)||n.types.forEach((function(e){var n=p({},t[e],o);t[e]=n})),t}),r);return o.root=n,o.plain=p({},n,{backgroundColor:null}),o};function m(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&-1===e.indexOf(r)&&(n[r]=t[r]);return n}var v=function(t){function e(){for(var e=this,n=[],r=arguments.length;r--;)n[r]=arguments[r];t.apply(this,n),f(this,"getThemeDict",(function(t){if(void 0!==e.themeDict&&t.theme===e.prevTheme&&t.language===e.prevLanguage)return e.themeDict;e.prevTheme=t.theme,e.prevLanguage=t.language;var n=t.theme?g(t.theme,t.language):void 0;return e.themeDict=n})),f(this,"getLineProps",(function(t){var n=t.key,r=t.className,o=t.style,i=p({},m(t,["key","className","style","line"]),{className:"token-line",style:void 0,key:void 0}),a=e.getThemeDict(e.props);return void 0!==a&&(i.style=a.plain),void 0!==o&&(i.style=void 0!==i.style?p({},i.style,o):o),void 0!==n&&(i.key=n),r&&(i.className+=" "+r),i})),f(this,"getStyleForToken",(function(t){var n=t.types,r=t.empty,o=n.length,i=e.getThemeDict(e.props);if(void 0!==i){if(1===o&&"plain"===n[0])return r?{display:"inline-block"}:void 0;if(1===o&&!r)return i[n[0]];var a=r?{display:"inline-block"}:{},c=n.map((function(t){return i[t]}));return Object.assign.apply(Object,[a].concat(c))}})),f(this,"getTokenProps",(function(t){var n=t.key,r=t.className,o=t.style,i=t.token,a=p({},m(t,["key","className","style","token"]),{className:"token "+i.types.join(" "),children:i.content,style:e.getStyleForToken(i),key:void 0});return void 0!==o&&(a.style=void 0!==a.style?p({},a.style,o):o),void 0!==n&&(a.key=n),r&&(a.className+=" "+r),a}))}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.render=function(){var t=this.props,e=t.Prism,n=t.language,r=t.code,o=t.children,i=this.getThemeDict(this.props),a=e.languages[n];return o({tokens:function(t){for(var e=[[]],n=[t],r=[0],o=[t.length],i=0,a=0,c=[],l=[c];a>-1;){for(;(i=r[a]++)<o[a];){var s=void 0,u=e[a],f=n[a][i];if("string"==typeof f?(u=a>0?u:["plain"],s=f):(u=d(u,f.type),f.alias&&(u=d(u,f.alias)),s=f.content),"string"==typeof s){var p=s.split(h),g=p.length;c.push({types:u,content:p[0]});for(var m=1;m<g;m++)y(c),l.push(c=[]),c.push({types:u,content:p[m]})}else a++,e.push(u),n.push(s),r.push(0),o.push(s.length)}a--,e.pop(),n.pop(),r.pop(),o.pop()}return y(c),l}(void 0!==a?e.tokenize(r,a,n):[r]),className:"prism-code language-"+n,style:void 0!==i?i.root:{},getLineProps:this.getLineProps,getTokenProps:this.getTokenProps})},e}(o.Component),b=n(211),k=n.n(b),E=n(209),x=n.n(E),j=n(210),w=n.n(j),T=n(166),O=n(176),S=n(141),_=n.n(S),A=/{([\d,-]+)}/,C=function(t){void 0===t&&(t=["js","jsBlock","jsx","python","html"]);var e={js:{start:"\\/\\/",end:""},jsBlock:{start:"\\/\\*",end:"\\*\\/"},jsx:{start:"\\{\\s*\\/\\*",end:"\\*\\/\\s*\\}"},python:{start:"#",end:""},html:{start:"\x3c!--",end:"--\x3e"}},n=["highlight-next-line","highlight-start","highlight-end"].join("|"),r=t.map((function(t){return"(?:"+e[t].start+"\\s*("+n+")\\s*"+e[t].end+")"})).join("|");return new RegExp("^\\s*(?:"+r+")\\s*$")},N=/title=".*"/,P=function(t){var e=t.children,n=t.className,a=t.metastring,c=Object(T.a)().siteConfig.themeConfig.prism,s=void 0===c?{}:c,f=Object(o.useState)(!1),p=f[0],h=f[1],y=Object(o.useState)(!1),d=y[0],g=y[1];Object(o.useEffect)((function(){g(!0)}),[]);var m=Object(o.useRef)(null),b=Object(o.useRef)(null),E=[],j="",S=Object(O.a)().isDarkTheme,P=s.theme||k.a,L=s.darkTheme||P,R=S?L:P;if(a&&A.test(a)){var F=a.match(A)[1];E=w.a.parse(F).filter((function(t){return t>0}))}a&&N.test(a)&&(j=a.match(N)[0].split("title=")[1].replace(/"+/g,"")),Object(o.useEffect)((function(){var t;return b.current&&(t=new x.a(b.current,{target:function(){return m.current}})),function(){t&&t.destroy()}}),[b.current,m.current]);var I=n&&n.replace(/language-/,"");!I&&s.defaultLanguage&&(I=s.defaultLanguage);var B=e.replace(/\n$/,"");if(0===E.length&&void 0!==I){for(var M,D="",H=function(t){switch(t){case"js":case"javascript":case"ts":case"typescript":return C(["js","jsBlock"]);case"jsx":case"tsx":return C(["js","jsBlock","jsx"]);case"html":return C(["js","jsBlock","html"]);case"python":case"py":return C(["python"]);default:return C()}}(I),$=e.replace(/\n$/,"").split("\n"),q=0;q<$.length;){var z=q+1,W=$[q].match(H);if(null!==W){switch(W.slice(1).reduce((function(t,e){return t||e}),void 0)){case"highlight-next-line":D+=z+",";break;case"highlight-start":M=z;break;case"highlight-end":D+=M+"-"+(z-1)+","}$.splice(q,1)}else q+=1}E=w.a.parse(D),B=$.join("\n")}var J=function(){window.getSelection().empty(),h(!0),setTimeout((function(){return h(!1)}),2e3)};return i.a.createElement(v,Object(r.a)({},u,{key:d,theme:R,code:B,language:I}),(function(t){var e,n,o=t.className,a=t.style,c=t.tokens,s=t.getLineProps,u=t.getTokenProps;return i.a.createElement(i.a.Fragment,null,j&&i.a.createElement("div",{style:a,className:_.a.codeBlockTitle},j),i.a.createElement("div",{className:_.a.codeBlockContent},i.a.createElement("button",{ref:b,type:"button","aria-label":"Copy code to clipboard",className:l()(_.a.copyButton,(e={},e[_.a.copyButtonWithTitle]=j,e)),onClick:J},p?"Copied":"Copy"),i.a.createElement("div",{tabIndex:"0",className:l()(o,_.a.codeBlock,(n={},n[_.a.codeBlockWithTitle]=j,n))},i.a.createElement("div",{ref:m,className:_.a.codeBlockLines,style:a},c.map((function(t,e){1===t.length&&""===t[0].content&&(t[0].content="\n");var n=s({line:t,key:e});return E.includes(e+1)&&(n.className=n.className+" docusaurus-highlight-code-line"),i.a.createElement("div",Object(r.a)({key:e},n),t.map((function(t,e){return i.a.createElement("span",Object(r.a)({key:e},u({token:t,key:e})))})))}))))))}))},L=n(9),R=(n(142),n(143)),F=n.n(R),I=function(t){return function(e){var n,r=e.id,o=Object(L.a)(e,["id"]),a=Object(T.a)().siteConfig,c=(a=void 0===a?{}:a).themeConfig,s=(c=void 0===c?{}:c).navbar,u=(s=void 0===s?{}:s).hideOnScroll,f=void 0!==u&&u;return r?i.a.createElement(t,o,i.a.createElement("a",{"aria-hidden":"true",tabIndex:"-1",className:l()("anchor",(n={},n[F.a.enhancedAnchor]=!f,n)),id:r}),i.a.createElement("a",{"aria-hidden":"true",tabIndex:"-1",className:"hash-link",href:"#"+r,title:"Direct link to heading"},"#"),o.children):i.a.createElement(t,o)}},B=n(144),M=n.n(B);e.a={code:function(t){var e=t.children;return"string"==typeof e?i.a.createElement(P,t):e},a:function(t){return/\.[^./]+$/.test(t.href)?i.a.createElement("a",t):i.a.createElement(a.a,t)},pre:function(t){return i.a.createElement("div",Object(r.a)({className:M.a.mdxCodeBlock},t))},h1:I("h1"),h2:I("h2"),h3:I("h3"),h4:I("h4"),h5:I("h5"),h6:I("h6")}},201:function(t,e,n){"use strict";var r=n(12),o=n(83)(!0);r(r.P,"Array",{includes:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}}),n(77)("includes")},202:function(t,e,n){"use strict";var r=n(12),o=n(180);r(r.P+r.F*n(181)("includes"),"String",{includes:function(t){return!!~o(this,t,"includes").indexOf(t,arguments.length>1?arguments[1]:void 0)}})},203:function(t,e,n){"use strict";var r=n(8),o=n(24),i=n(55),a=n(56);n(57)("match",1,(function(t,e,n,c){return[function(n){var r=t(this),o=null==n?void 0:n[e];return void 0!==o?o.call(n,r):new RegExp(n)[e](String(r))},function(t){var e=c(n,t,this);if(e.done)return e.value;var l=r(t),s=String(this);if(!l.global)return a(l,s);var u=l.unicode;l.lastIndex=0;for(var f,p=[],h=0;null!==(f=a(l,s));){var y=String(f[0]);p[h]=y,""===y&&(l.lastIndex=i(s,o(l.lastIndex),u)),h++}return 0===h?null:p}]}))},204:function(t,e,n){var r=n(5),o=n(205),i=n(25).f,a=n(208).f,c=n(76),l=n(79),s=r.RegExp,u=s,f=s.prototype,p=/a/g,h=/a/g,y=new s(p)!==p;if(n(10)&&(!y||n(14)((function(){return h[n(2)("match")]=!1,s(p)!=p||s(h)==h||"/a/i"!=s(p,"i")})))){s=function(t,e){var n=this instanceof s,r=c(t),i=void 0===e;return!n&&r&&t.constructor===s&&i?t:o(y?new u(r&&!i?t.source:t,e):u((r=t instanceof s)?t.source:t,r&&i?l.call(t):e),n?this:f,s)};for(var d=function(t){t in s||i(s,t,{configurable:!0,get:function(){return u[t]},set:function(e){u[t]=e}})},g=a(u),m=0;g.length>m;)d(g[m++]);f.constructor=s,s.prototype=f,n(15)(r,"RegExp",s)}n(85)("RegExp")},205:function(t,e,n){var r=n(13),o=n(206).set;t.exports=function(t,e,n){var i,a=e.constructor;return a!==n&&"function"==typeof a&&(i=a.prototype)!==n.prototype&&r(i)&&o&&o(t,i),t}},206:function(t,e,n){var r=n(13),o=n(8),i=function(t,e){if(o(t),!r(e)&&null!==e)throw TypeError(e+": can't set as prototype!")};t.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(t,e,r){try{(r=n(26)(Function.call,n(207).f(Object.prototype,"__proto__").set,2))(t,[]),e=!(t instanceof Array)}catch(o){e=!0}return function(t,n){return i(t,n),e?t.__proto__=n:r(t,n),t}}({},!1):void 0),check:i}},207:function(t,e,n){var r=n(61),o=n(58),i=n(32),a=n(81),c=n(31),l=n(80),s=Object.getOwnPropertyDescriptor;e.f=n(10)?s:function(t,e){if(t=i(t),e=a(e,!0),l)try{return s(t,e)}catch(n){}if(c(t,e))return o(!r.f.call(t,e),t[e])}},208:function(t,e,n){var r=n(82),o=n(60).concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return r(t,o)}},209:function(t,e,n){var r;r=function(){return function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=6)}([function(t,e){t.exports=function(t){var e;if("SELECT"===t.nodeName)t.focus(),e=t.value;else if("INPUT"===t.nodeName||"TEXTAREA"===t.nodeName){var n=t.hasAttribute("readonly");n||t.setAttribute("readonly",""),t.select(),t.setSelectionRange(0,t.value.length),n||t.removeAttribute("readonly"),e=t.value}else{t.hasAttribute("contenteditable")&&t.focus();var r=window.getSelection(),o=document.createRange();o.selectNodeContents(t),r.removeAllRanges(),r.addRange(o),e=r.toString()}return e}},function(t,e){function n(){}n.prototype={on:function(t,e,n){var r=this.e||(this.e={});return(r[t]||(r[t]=[])).push({fn:e,ctx:n}),this},once:function(t,e,n){var r=this;function o(){r.off(t,o),e.apply(n,arguments)}return o._=e,this.on(t,o,n)},emit:function(t){for(var e=[].slice.call(arguments,1),n=((this.e||(this.e={}))[t]||[]).slice(),r=0,o=n.length;r<o;r++)n[r].fn.apply(n[r].ctx,e);return this},off:function(t,e){var n=this.e||(this.e={}),r=n[t],o=[];if(r&&e)for(var i=0,a=r.length;i<a;i++)r[i].fn!==e&&r[i].fn._!==e&&o.push(r[i]);return o.length?n[t]=o:delete n[t],this}},t.exports=n,t.exports.TinyEmitter=n},function(t,e,n){var r=n(3),o=n(4);t.exports=function(t,e,n){if(!t&&!e&&!n)throw new Error("Missing required arguments");if(!r.string(e))throw new TypeError("Second argument must be a String");if(!r.fn(n))throw new TypeError("Third argument must be a Function");if(r.node(t))return function(t,e,n){return t.addEventListener(e,n),{destroy:function(){t.removeEventListener(e,n)}}}(t,e,n);if(r.nodeList(t))return function(t,e,n){return Array.prototype.forEach.call(t,(function(t){t.addEventListener(e,n)})),{destroy:function(){Array.prototype.forEach.call(t,(function(t){t.removeEventListener(e,n)}))}}}(t,e,n);if(r.string(t))return function(t,e,n){return o(document.body,t,e,n)}(t,e,n);throw new TypeError("First argument must be a String, HTMLElement, HTMLCollection, or NodeList")}},function(t,e){e.node=function(t){return void 0!==t&&t instanceof HTMLElement&&1===t.nodeType},e.nodeList=function(t){var n=Object.prototype.toString.call(t);return void 0!==t&&("[object NodeList]"===n||"[object HTMLCollection]"===n)&&"length"in t&&(0===t.length||e.node(t[0]))},e.string=function(t){return"string"==typeof t||t instanceof String},e.fn=function(t){return"[object Function]"===Object.prototype.toString.call(t)}},function(t,e,n){var r=n(5);function o(t,e,n,r,o){var a=i.apply(this,arguments);return t.addEventListener(n,a,o),{destroy:function(){t.removeEventListener(n,a,o)}}}function i(t,e,n,o){return function(n){n.delegateTarget=r(n.target,e),n.delegateTarget&&o.call(t,n)}}t.exports=function(t,e,n,r,i){return"function"==typeof t.addEventListener?o.apply(null,arguments):"function"==typeof n?o.bind(null,document).apply(null,arguments):("string"==typeof t&&(t=document.querySelectorAll(t)),Array.prototype.map.call(t,(function(t){return o(t,e,n,r,i)})))}},function(t,e){if("undefined"!=typeof Element&&!Element.prototype.matches){var n=Element.prototype;n.matches=n.matchesSelector||n.mozMatchesSelector||n.msMatchesSelector||n.oMatchesSelector||n.webkitMatchesSelector}t.exports=function(t,e){for(;t&&9!==t.nodeType;){if("function"==typeof t.matches&&t.matches(e))return t;t=t.parentNode}}},function(t,e,n){"use strict";n.r(e);var r=n(0),o=n.n(r),i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},a=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),c=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.resolveOptions(e),this.initSelection()}return a(t,[{key:"resolveOptions",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.action=t.action,this.container=t.container,this.emitter=t.emitter,this.target=t.target,this.text=t.text,this.trigger=t.trigger,this.selectedText=""}},{key:"initSelection",value:function(){this.text?this.selectFake():this.target&&this.selectTarget()}},{key:"selectFake",value:function(){var t=this,e="rtl"==document.documentElement.getAttribute("dir");this.removeFake(),this.fakeHandlerCallback=function(){return t.removeFake()},this.fakeHandler=this.container.addEventListener("click",this.fakeHandlerCallback)||!0,this.fakeElem=document.createElement("textarea"),this.fakeElem.style.fontSize="12pt",this.fakeElem.style.border="0",this.fakeElem.style.padding="0",this.fakeElem.style.margin="0",this.fakeElem.style.position="absolute",this.fakeElem.style[e?"right":"left"]="-9999px";var n=window.pageYOffset||document.documentElement.scrollTop;this.fakeElem.style.top=n+"px",this.fakeElem.setAttribute("readonly",""),this.fakeElem.value=this.text,this.container.appendChild(this.fakeElem),this.selectedText=o()(this.fakeElem),this.copyText()}},{key:"removeFake",value:function(){this.fakeHandler&&(this.container.removeEventListener("click",this.fakeHandlerCallback),this.fakeHandler=null,this.fakeHandlerCallback=null),this.fakeElem&&(this.container.removeChild(this.fakeElem),this.fakeElem=null)}},{key:"selectTarget",value:function(){this.selectedText=o()(this.target),this.copyText()}},{key:"copyText",value:function(){var t=void 0;try{t=document.execCommand(this.action)}catch(e){t=!1}this.handleResult(t)}},{key:"handleResult",value:function(t){this.emitter.emit(t?"success":"error",{action:this.action,text:this.selectedText,trigger:this.trigger,clearSelection:this.clearSelection.bind(this)})}},{key:"clearSelection",value:function(){this.trigger&&this.trigger.focus(),document.activeElement.blur(),window.getSelection().removeAllRanges()}},{key:"destroy",value:function(){this.removeFake()}},{key:"action",set:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"copy";if(this._action=t,"copy"!==this._action&&"cut"!==this._action)throw new Error('Invalid "action" value, use either "copy" or "cut"')},get:function(){return this._action}},{key:"target",set:function(t){if(void 0!==t){if(!t||"object"!==(void 0===t?"undefined":i(t))||1!==t.nodeType)throw new Error('Invalid "target" value, use a valid Element');if("copy"===this.action&&t.hasAttribute("disabled"))throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');if("cut"===this.action&&(t.hasAttribute("readonly")||t.hasAttribute("disabled")))throw new Error('Invalid "target" attribute. You can\'t cut text from elements with "readonly" or "disabled" attributes');this._target=t}},get:function(){return this._target}}]),t}(),l=n(1),s=n.n(l),u=n(2),f=n.n(u),p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},h=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),y=function(t){function e(t,n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e);var r=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}(this,(e.__proto__||Object.getPrototypeOf(e)).call(this));return r.resolveOptions(n),r.listenClick(t),r}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,t),h(e,[{key:"resolveOptions",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.action="function"==typeof t.action?t.action:this.defaultAction,this.target="function"==typeof t.target?t.target:this.defaultTarget,this.text="function"==typeof t.text?t.text:this.defaultText,this.container="object"===p(t.container)?t.container:document.body}},{key:"listenClick",value:function(t){var e=this;this.listener=f()(t,"click",(function(t){return e.onClick(t)}))}},{key:"onClick",value:function(t){var e=t.delegateTarget||t.currentTarget;this.clipboardAction&&(this.clipboardAction=null),this.clipboardAction=new c({action:this.action(e),target:this.target(e),text:this.text(e),container:this.container,trigger:e,emitter:this})}},{key:"defaultAction",value:function(t){return d("action",t)}},{key:"defaultTarget",value:function(t){var e=d("target",t);if(e)return document.querySelector(e)}},{key:"defaultText",value:function(t){return d("text",t)}},{key:"destroy",value:function(){this.listener.destroy(),this.clipboardAction&&(this.clipboardAction.destroy(),this.clipboardAction=null)}}],[{key:"isSupported",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:["copy","cut"],e="string"==typeof t?[t]:t,n=!!document.queryCommandSupported;return e.forEach((function(t){n=n&&!!document.queryCommandSupported(t)})),n}}]),e}(s.a);function d(t,e){var n="data-clipboard-"+t;if(e.hasAttribute(n))return e.getAttribute(n)}e.default=y}]).default},t.exports=r()},210:function(t,e){t.exports.parse=function(t){var e=t.split(",").map((function(t){return function(t){if(/^-?\d+$/.test(t))return parseInt(t,10);var e;if(e=t.match(/^(-?\d+)(-|\.\.\.?|\u2025|\u2026|\u22EF)(-?\d+)$/)){var n=e[1],r=e[2],o=e[3];if(n&&o){var i=[],a=(n=parseInt(n))<(o=parseInt(o))?1:-1;"-"!=r&&".."!=r&&"\u2025"!=r||(o+=a);for(var c=n;c!=o;c+=a)i.push(c);return i}}return[]}(t)}));return 0===e.length?[]:1===e.length?Array.isArray(e[0])?e[0]:e:e.reduce((function(t,e){return Array.isArray(t)||(t=[t]),Array.isArray(e)||(e=[e]),t.concat(e)}))}},211:function(t,e){t.exports={plain:{color:"#bfc7d5",backgroundColor:"#292d3e"},styles:[{types:["comment"],style:{color:"rgb(105, 112, 152)",fontStyle:"italic"}},{types:["string"],style:{color:"rgb(195, 232, 141)"}},{types:["number"],style:{color:"rgb(247, 140, 108)"}},{types:["builtin","char","constant","function"],style:{color:"rgb(130, 170, 255)"}},{types:["punctuation","selector"],style:{color:"rgb(199, 146, 234)"}},{types:["variable"],style:{color:"rgb(191, 199, 213)"}},{types:["class-name","attr-name"],style:{color:"rgb(255, 203, 107)"}},{types:["tag"],style:{color:"rgb(255, 85, 114)"}},{types:["operator"],style:{color:"rgb(137, 221, 255)"}},{types:["boolean"],style:{color:"rgb(255, 88, 116)"}},{types:["keyword"],style:{fontStyle:"italic"}},{types:["doctype"],style:{color:"rgb(199, 146, 234)",fontStyle:"italic"}},{types:["namespace"],style:{color:"rgb(178, 204, 214)"}},{types:["url"],style:{color:"rgb(221, 221, 221)"}}]}}}]);