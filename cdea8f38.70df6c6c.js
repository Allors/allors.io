(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{100:function(e,t,r){"use strict";var n=r(0),o=r(20);t.a=function(){var e=Object(n.useContext)(o.a);if(null===e)throw new Error("Docusaurus context not provided");return e}},101:function(e,t,r){"use strict";r.d(t,"b",(function(){return i})),r.d(t,"a",(function(){return a}));var n=r(100),o=r(102);function i(){var e=Object(n.a)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,r=void 0===t?"/":t,i=e.url;return{withBaseUrl:function(e,t){return function(e,t,r,n){var i=void 0===n?{}:n,a=i.forcePrependBaseUrl,c=void 0!==a&&a,u=i.absolute,l=void 0!==u&&u;if(!r)return r;if(r.startsWith("#"))return r;if(Object(o.b)(r))return r;if(c)return t+r;var s=!r.startsWith(t)?t+r.replace(/^\//,""):r;return l?e+s:s}(i,r,e,t)}}}function a(e,t){return void 0===t&&(t={}),(0,i().withBaseUrl)(e,t)}},102:function(e,t,r){"use strict";function n(e){return!0===/^(\w*:|\/\/)/.test(e)}function o(e){return void 0!==e&&!n(e)}r.d(t,"b",(function(){return n})),r.d(t,"a",(function(){return o}))},105:function(e,t,r){"use strict";r.d(t,"a",(function(){return c}));var n=r(21),o=r(4),i=r(0),a=r.n(i),c=function(e){Object(o.a)(t,e);Object(n.a)(t);function t(t){var r;return(r=e.call(this,t)||this).txtAlign="center",r.txtPadding="30px",r.borderRadius="10px",r.bgColor="#25c2a0",r}return t.prototype.render=function(){return a.a.createElement("div",{style:{textAlign:this.txtAlign,padding:this.txtPadding,backgroundColor:this.bgColor,borderRadius:this.borderRadius}},a.a.createElement("h1",null,this.props.title))},t}(a.a.Component)},89:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return u})),r.d(t,"rightToc",(function(){return l})),r.d(t,"default",(function(){return f}));var n=r(1),o=r(6),i=(r(0),r(99)),a=(r(101),r(105)),c={id:"Overview",title:"Overview",hide_title:!0},u={unversionedId:"Platform/DerivationInV2/Overview",id:"Platform/DerivationInV2/Overview",isDocsHomePage:!1,title:"Overview",source:"@site/docs/Platform/DerivationInV2/Overview.mdx",permalink:"/docs/Platform/DerivationInV2/Overview",editUrl:"https://github.com/allors/allors.io/edit/master/docs/Platform/DerivationInV2/Overview.mdx",sidebar:"Allors",previous:{title:"Overview",permalink:"/docs/Platform/Overview/Allors"},next:{title:"Derivation",permalink:"/docs/Platform/DerivationInV2/Derivation"}},l=[],s={rightToc:l};function f(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},s,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)(a.a,{title:"Overview of Allors v2",mdxType:"Header"}))}f.isMDXComponent=!0},99:function(e,t,r){"use strict";r.d(t,"a",(function(){return f})),r.d(t,"b",(function(){return v}));var n=r(0),o=r.n(n);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=o.a.createContext({}),s=function(e){var t=o.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c({},t,{},e)),r},f=function(e){var t=s(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=Object(n.forwardRef)((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,a=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),f=s(r),d=n,v=f["".concat(a,".").concat(d)]||f[d]||p[d]||i;return r?o.a.createElement(v,c({ref:t},l,{components:r})):o.a.createElement(v,c({ref:t},l))}));function v(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,a=new Array(i);a[0]=d;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:n,a[1]=c;for(var l=2;l<i;l++)a[l]=r[l];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);