(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{RXBc:function(t,e,r){"use strict";r.r(e);var n=r("DZdY"),o=r("q1tI"),a=r.n(o),i=(r("E9XD"),r("7O5W")),l=r("17x9"),c=r.n(l);function s(t){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function f(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function u(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function p(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?u(Object(r),!0).forEach((function(e){f(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function b(t,e){if(null==t)return{};var r,n,o=function(t,e){if(null==t)return{};var r,n,o={},a=Object.keys(t);for(n=0;n<a.length;n++)r=a[n],e.indexOf(r)>=0||(o[r]=t[r]);return o}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(n=0;n<a.length;n++)r=a[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(o[r]=t[r])}return o}function y(t){return function(t){if(Array.isArray(t)){for(var e=0,r=new Array(t.length);e<t.length;e++)r[e]=t[e];return r}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function m(t){return e=t,(e-=0)==e?t:(t=t.replace(/[\-_\s]+(.)?/g,(function(t,e){return e?e.toUpperCase():""}))).substr(0,1).toLowerCase()+t.substr(1);var e}function d(t){return t.split(";").map((function(t){return t.trim()})).filter((function(t){return t})).reduce((function(t,e){var r,n=e.indexOf(":"),o=m(e.slice(0,n)),a=e.slice(n+1).trim();return o.startsWith("webkit")?t[(r=o,r.charAt(0).toUpperCase()+r.slice(1))]=a:t[o]=a,t}),{})}var O=!1;try{O=!0}catch(E){}function g(t){return i.parse.icon?i.parse.icon(t):null===t?null:"object"===s(t)&&t.prefix&&t.iconName?t:Array.isArray(t)&&2===t.length?{prefix:t[0],iconName:t[1]}:"string"==typeof t?{prefix:"fas",iconName:t}:void 0}function v(t,e){return Array.isArray(e)&&e.length>0||!Array.isArray(e)&&e?f({},t,e):{}}function h(t){var e=t.forwardedRef,r=b(t,["forwardedRef"]),n=r.icon,o=r.mask,a=r.symbol,l=r.className,c=r.title,s=r.titleId,u=g(n),m=v("classes",[].concat(y(function(t){var e,r=t.spin,n=t.pulse,o=t.fixedWidth,a=t.inverse,i=t.border,l=t.listItem,c=t.flip,s=t.size,u=t.rotation,p=t.pull,b=(f(e={"fa-spin":r,"fa-pulse":n,"fa-fw":o,"fa-inverse":a,"fa-border":i,"fa-li":l,"fa-flip-horizontal":"horizontal"===c||"both"===c,"fa-flip-vertical":"vertical"===c||"both"===c},"fa-".concat(s),null!=s),f(e,"fa-rotate-".concat(u),null!=u&&0!==u),f(e,"fa-pull-".concat(p),null!=p),f(e,"fa-swap-opacity",t.swapOpacity),e);return Object.keys(b).map((function(t){return b[t]?t:null})).filter((function(t){return t}))}(r)),y(l.split(" ")))),d=v("transform","string"==typeof r.transform?i.parse.transform(r.transform):r.transform),j=v("mask",g(o)),x=Object(i.icon)(u,p({},m,{},d,{},j,{symbol:a,title:c,titleId:s}));if(!x)return function(){var t;!O&&console&&"function"==typeof console.error&&(t=console).error.apply(t,arguments)}("Could not find icon",u),null;var k=x.abstract,S={ref:e};return Object.keys(r).forEach((function(t){h.defaultProps.hasOwnProperty(t)||(S[t]=r[t])})),w(k[0],S)}h.displayName="FontAwesomeIcon",h.propTypes={border:c.a.bool,className:c.a.string,mask:c.a.oneOfType([c.a.object,c.a.array,c.a.string]),fixedWidth:c.a.bool,inverse:c.a.bool,flip:c.a.oneOf(["horizontal","vertical","both"]),icon:c.a.oneOfType([c.a.object,c.a.array,c.a.string]),listItem:c.a.bool,pull:c.a.oneOf(["right","left"]),pulse:c.a.bool,rotation:c.a.oneOf([0,90,180,270]),size:c.a.oneOf(["lg","xs","sm","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:c.a.bool,symbol:c.a.oneOfType([c.a.bool,c.a.string]),title:c.a.string,transform:c.a.oneOfType([c.a.string,c.a.object]),swapOpacity:c.a.bool},h.defaultProps={border:!1,className:"",mask:null,fixedWidth:!1,inverse:!1,flip:null,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,symbol:!1,title:"",transform:null,swapOpacity:!1};var w=function t(e,r){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if("string"==typeof r)return r;var o=(r.children||[]).map((function(r){return t(e,r)})),a=Object.keys(r.attributes||{}).reduce((function(t,e){var n=r.attributes[e];switch(e){case"class":t.attrs.className=n,delete r.attributes.class;break;case"style":t.attrs.style=d(n);break;default:0===e.indexOf("aria-")||0===e.indexOf("data-")?t.attrs[e.toLowerCase()]=n:t.attrs[m(e)]=n}return t}),{attrs:{}}),i=n.style,l=void 0===i?{}:i,c=b(n,["style"]);return a.attrs.style=p({},a.attrs.style,{},l),e.apply(void 0,[r.tag,p({},a.attrs,{},c)].concat(y(o)))}.bind(null,a.a.createElement),j=r("8tEE"),x=r("M7K5"),k=r("vrFN"),S=r("AeFk");var A=Object(n.a)("div",{target:"eogqopf1",label:"Wrapper"})({name:"1c2ifk6",styles:"display:flex;flex-direction:column;justify-content:center;align-items:center;flex-grow:1;text-align:center;h1{margin:20px 0 5px;}h2{margin:10px 0 5px;}.link-list{list-style:none;margin:32px 0 10px;padding:0;font-size:32px;--color-github:#6f42c1;--color-gitlab:#fa7035;--color-twitter:#1da1f2;--color-linkedin:#2977c9;}"}),P=Object(n.a)("li",{target:"eogqopf0",label:"Item"})("display:inline;margin:0 10px;a{transition:1s ease color;color:var(--color-text);&:hover,&:focus{color:var(--color-",(function(t){return t.title.toLowerCase()}),");transition:none;}&::after{width:0;}}"),N=[{to:"https://github.com/sylvaindns/",icon:j.a,title:"GitHub"},{to:"https://gitlab.com//sylvainDNS/",icon:j.b,title:"GitLab"},{to:"https://twitter.com/sylvaindenyse/",icon:j.d,title:"Twitter"},{to:"https://www.linkedin.com/in/sylvain-denyse/",icon:j.c,title:"LinkedIn"}];e.default=function(){return Object(S.c)(A,null,Object(S.c)(k.a,{title:"Welcome!"}),Object(S.c)(x.a,null),Object(S.c)("h1",null,"Sylvain DENYSE"),Object(S.c)("h2",null,"Full Stack Web Developer"),Object(S.c)("ul",{className:"link-list"},N.map((function(t,e){var r=t.to,n=t.icon,o=t.title;return Object(S.c)(P,{key:"index-page-links-list-"+e,title:o},Object(S.c)("a",{href:r,title:o,target:"_blank",rel:"noreferrer"},Object(S.c)(h,{icon:n})))}))))}}}]);
//# sourceMappingURL=component---src-pages-index-js-c4be28f29e5b3eef90c9.js.map