(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[64],{7166:function(e,n){var t;!function(){"use strict";var r={}.hasOwnProperty;function i(){for(var e=[],n=0;n<arguments.length;n++){var t=arguments[n];if(t){var a=typeof t;if("string"===a||"number"===a)e.push(this&&this[t]||t);else if(Array.isArray(t))e.push(i.apply(this,t));else if("object"===a)if(t.toString===Object.prototype.toString)for(var s in t)r.call(t,s)&&t[s]&&e.push(this&&this[s]||s);else e.push(t.toString())}}return e.join(" ")}e.exports?(i.default=i,e.exports=i):void 0===(t=function(){return i}.apply(n,[]))||(e.exports=t)}()},6043:function(e,n,t){"use strict";t.d(n,{Z:function(){return i}});var r=t(5893);function i(e){var n=e.src,t=e.type,i=void 0===t?"image/webp":t,a=e.fallback,s=e.alt;return(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)("picture",{children:[(0,r.jsx)("source",{srcSet:n,type:i}),(0,r.jsx)("img",{src:a,alt:s})]})})}},3216:function(e,n,t){"use strict";function r(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function i(e){return function(e){if(Array.isArray(e))return r(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,n){if(e){if("string"===typeof e)return r(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?r(e,n):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}t.r(n),t.d(n,{AnimatedLetters:function(){return _},BannerRowBottom:function(){return g},BannerRowCenter:function(){return v},BannerRowTop:function(){return p},default:function(){return h}});var a=t(7294),s=t(2329),o=t(7166),c=t.n(o),l=t(3614),u=t.n(l),d=t(5893),f=c().bind(u()),m={animate:{transition:{delayChildren:.4,staggerChildren:.1}}},x={initial:{y:400},animate:{y:0,transition:{ease:[.6,.01,-.05,.95],duration:1}}};function h(){var e=(0,a.useState)(!1),n=e[0],t=e[1];return(0,a.useEffect)((function(){setTimeout((function(){t(!0)}),2e3)}),[]),(0,d.jsx)(d.Fragment,{children:(0,d.jsxs)(s.E.div,{className:f("banner"),children:[(0,d.jsx)(p,{title:"brand"}),(0,d.jsx)(v,{title:"experience",playMarquee:n}),(0,d.jsx)(g,{title:"studio"})]})})}function _(e){var n=e.title,t=e.disabled;return(0,d.jsx)(d.Fragment,{children:(0,d.jsx)(s.E.span,{className:f("row-title"),variants:t?null:m,initial:"initial",animate:"animate",children:i(n).map((function(e){return(0,d.jsx)(s.E.span,{className:f("row-letter"),variants:t?null:x,children:e})}))})})}function p(e){var n=e.title;return(0,d.jsx)(d.Fragment,{children:(0,d.jsxs)("div",{className:f("banner-row"),children:[(0,d.jsx)("div",{className:f("row-col"),children:(0,d.jsx)(_,{title:n})}),(0,d.jsx)(s.E.div,{initial:{opacity:0,y:80},animate:{opacity:1,y:0},transition:{ease:"easeInOut",delay:1,duration:.4},className:f("row-col"),children:(0,d.jsx)("span",{className:f("row-message"),children:"We are specialised in setting up the foundation of your brand and setting you up for success."})})]})})}function v(e){var n=e.title,t=e.playMarquee;return(0,d.jsx)(d.Fragment,{children:(0,d.jsx)("div",{className:f("banner-row","marquee","".concat(t&&"animate")),children:(0,d.jsxs)("div",{className:f("marquee__inner"),children:[(0,d.jsx)(_,{title:n,disabled:!0}),(0,d.jsx)(_,{title:n}),(0,d.jsx)(_,{title:n,disabled:!0}),(0,d.jsx)(_,{title:n,disabled:!0})]})})})}function g(e){var n=e.title;return(0,d.jsx)(d.Fragment,{children:(0,d.jsxs)("div",{className:f("banner-row","center"),children:[(0,d.jsxs)(s.E.div,{initial:{scale:0},animate:{scale:1},transition:{ease:[.6,.01,-.05,.95],duration:1,delay:1},className:f("scroll"),children:[(0,d.jsx)(s.E.span,{initial:{opacity:0},animate:{opacity:1},transition:{ease:"easeInOut",duration:1,delay:1.8},children:"scroll"}),(0,d.jsx)(s.E.span,{initial:{opacity:0},animate:{opacity:1},transition:{ease:"easeInOut",duration:1,delay:1.8},children:"down"})]}),(0,d.jsx)(_,{title:n})]})})}},895:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return d}});var r=t(2329),i=t(7166),a=t.n(i),s=t(3614),o=t.n(s),c=t(5893),l=a().bind(o()),u={initial:{y:-100,opacity:0},animate:{y:0,opacity:1}};function d(){return(0,c.jsx)(c.Fragment,{children:(0,c.jsx)(r.E.div,{initial:"initial",animate:"animate",transition:{ease:"easeInOut",duration:1,delay:.6},variants:u,className:l("header"),children:(0,c.jsxs)("div",{className:l("header-inner"),children:[(0,c.jsx)("div",{className:l("logo"),children:"Ollie"}),(0,c.jsxs)("nav",{className:l("nav"),children:[(0,c.jsx)("li",{children:(0,c.jsx)("a",{href:"/design",children:"Design"})}),(0,c.jsx)("li",{children:(0,c.jsx)("a",{href:"/strategy",children:"Strategy"})}),(0,c.jsx)("li",{children:(0,c.jsx)("a",{href:"/cases",children:"Cases"})}),(0,c.jsx)("li",{children:(0,c.jsx)("a",{href:"/about",children:"About"})}),(0,c.jsx)("li",{children:(0,c.jsx)("a",{href:"/why",children:"Why work with us"})})]}),(0,c.jsx)("div",{className:l("contact"),children:(0,c.jsx)("a",{href:"/contact",children:"Let's work together"})}),(0,c.jsxs)("div",{className:l("hamburger-menu"),children:[(0,c.jsx)("span",{}),(0,c.jsx)("span",{})]})]})})})}},5745:function(e,n,t){"use strict";t.r(n),t.d(n,{ImageBlock:function(){return h},default:function(){return x}});var r=t(2329),i=t(7166),a=t.n(i),s=t(6043),o=t(3614),c=t.n(o),l=t(5893),u=a().bind(c()),d={show:{transition:{staggerChildren:.35}}},f={hidden:{opacity:0,y:200},show:{opacity:1,y:0,transition:{ease:[.6,.01,-.05,.95],duration:1.6}}},m={hidden:{opacity:0,y:200},show:{opacity:1,y:0,transition:{ease:[.6,.01,-.05,.95],duration:1.6}},exit:{opacity:0,y:-200,transition:{ease:"easeInOut",duration:.8}}};function x(e){var n=e.setLoading;return(0,l.jsx)(l.Fragment,{children:(0,l.jsx)(r.E.div,{className:c().loader,children:(0,l.jsxs)(r.E.div,{initial:"hidden",animate:"show",exit:"exit",variants:d,onAnimationComplete:function(){return n(!1)},className:c().loaderInner,children:[(0,l.jsx)(h,{variants:m,id:"image-1"}),(0,l.jsx)(r.E.div,{variants:f,className:u("transition-image"),children:(0,l.jsx)(r.E.img,{layoutId:"main-image-1",src:"/src/projects/images/2/image-2.webp"})}),(0,l.jsx)(h,{variants:m,id:"image-3"}),(0,l.jsx)(h,{variants:m,id:"image-4"}),(0,l.jsx)(h,{variants:m,id:"image-5"})]})})})}function h(e){var n=e.id,t=e.variants;return(0,l.jsx)(l.Fragment,{children:(0,l.jsx)(r.E.div,{variants:t,className:u("imageBlock","".concat(n)),children:(0,l.jsx)(s.Z,{src:"/src/projects/images/2/".concat(n,".webp"),fallback:"/src/projects/images/2/".concat(n,".jpg"),alt:n})})})}},264:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return h}});var r=t(7294),i=t(1190),a=t(2329),s=t(7166),o=t.n(s),c=t(5745),l=t(895),u=t(3614),d=t.n(u),f=t(3216),m=t(5893),x=o().bind(d());function h(){var e=(0,r.useState)(!0),n=e[0],t=e[1];return(0,r.useEffect)((function(){n?document.querySelector("body").classList.add(x("loading"),"projects02"):document.querySelector("body").classList.remove(x("loading"))}),[n]),(0,m.jsx)(m.Fragment,{children:(0,m.jsx)(i.M,{children:n?(0,m.jsx)(a.E.div,{children:(0,m.jsx)(c.default,{setLoading:t})},"loader"):(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(l.default,{}),(0,m.jsx)(f.default,{}),!n&&(0,m.jsx)("div",{className:x("transition-image","final"),children:(0,m.jsx)(a.E.img,{transition:{ease:[.6,.01,-.05,.9],duration:1.6},src:"/src/projects/images/2/image-2.webp",layoutId:"main-image-1"})})]})})})}},2181:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/projects/2",function(){return t(264)}])},3614:function(e){e.exports={projects02:"Index_projects02___eiH9",header:"Index_header__SldP1","header-inner":"Index_header-inner__55Rvu",logo:"Index_logo__SLOyd",nav:"Index_nav__frSfK",contact:"Index_contact__pA1DP","hamburger-menu":"Index_hamburger-menu__aDCU8",banner:"Index_banner__aFma5","banner-row":"Index_banner-row__KXeAX",center:"Index_center__HPerU","row-letter":"Index_row-letter__USwfY",right:"Index_right__e2Hfp","row-title":"Index_row-title__BdjpO","row-col":"Index_row-col__fyRlw","row-message":"Index_row-message__Oigdt",scroll:"Index_scroll___ElDo","transition-image":"Index_transition-image__Ki0By",final:"Index_final__35_SL",marquee:"Index_marquee__8078i",animate:"Index_animate__pZFY6",marquee__inner:"Index_marquee__inner__ftaYt","marquee-lg":"Index_marquee-lg__l9v3C",loading:"Index_loading__OZkyg",loader:"Index_loader__ouc4X",loaderInner:"Index_loaderInner__GAjtR",imageBlock:"Index_imageBlock__ByJ1P","image-1":"Index_image-1__he6Rg","image-3":"Index_image-3__xq47A","image-4":"Index_image-4___EYSx","image-5":"Index_image-5__1mpsv"}},1190:function(e,n,t){"use strict";t.d(n,{M:function(){return p}});var r=t(655),i=t(7294),a=t(9304),s=t(4735),o=t(8868);function c(){var e=(0,i.useRef)(!1);return(0,o.L)((function(){return e.current=!0,function(){e.current=!1}}),[]),e}var l=t(240),u=t(6681),d=t(6316),f=function(e){var n=e.children,t=e.initial,a=e.isPresent,s=e.onExitComplete,o=e.custom,c=e.presenceAffectsLayout,f=(0,u.h)(m),x=(0,d.M)(),h=(0,i.useMemo)((function(){return{id:x,initial:t,isPresent:a,custom:o,onExitComplete:function(e){var n,t;f.set(e,!0);try{for(var i=(0,r.XA)(f.values()),a=i.next();!a.done;a=i.next()){if(!a.value)return}}catch(o){n={error:o}}finally{try{a&&!a.done&&(t=i.return)&&t.call(i)}finally{if(n)throw n.error}}null===s||void 0===s||s()},register:function(e){return f.set(e,!1),function(){return f.delete(e)}}}}),c?void 0:[a]);return(0,i.useMemo)((function(){f.forEach((function(e,n){return f.set(n,!1)}))}),[a]),i.useEffect((function(){!a&&!f.size&&(null===s||void 0===s||s())}),[a]),i.createElement(l.O.Provider,{value:h},n)};function m(){return new Map}var x=t(5364),h=t(5411),_=function(e){return e.key||""};var p=function(e){var n=e.children,t=e.custom,l=e.initial,u=void 0===l||l,d=e.onExitComplete,m=e.exitBeforeEnter,p=e.presenceAffectsLayout,v=void 0===p||p,g=(0,r.CR)(function(){var e=c(),n=(0,r.CR)((0,i.useState)(0),2),t=n[0],a=n[1],o=(0,i.useCallback)((function(){e.current&&a(t+1)}),[t]);return[(0,i.useCallback)((function(){return s.ZP.postRender(o)}),[o]),t]}(),1),j=g[0],y=(0,i.useContext)(x.p).forceRender;y&&(j=y);var w=c(),b=function(e){var n=[];return i.Children.forEach(e,(function(e){(0,i.isValidElement)(e)&&n.push(e)})),n}(n),I=b,E=new Set,N=(0,i.useRef)(I),A=(0,i.useRef)(new Map).current,C=(0,i.useRef)(!0);if((0,o.L)((function(){C.current=!1,function(e,n){e.forEach((function(e){var t=_(e);n.set(t,e)}))}(b,A),N.current=I})),(0,h.z)((function(){C.current=!0,A.clear(),E.clear()})),C.current)return i.createElement(i.Fragment,null,I.map((function(e){return i.createElement(f,{key:_(e),isPresent:!0,initial:!!u&&void 0,presenceAffectsLayout:v},e)})));I=(0,r.ev)([],(0,r.CR)(I),!1);for(var S=N.current.map(_),k=b.map(_),O=S.length,R=0;R<O;R++){var F=S[R];-1===k.indexOf(F)&&E.add(F)}return m&&E.size&&(I=[]),E.forEach((function(e){if(-1===k.indexOf(e)){var n=A.get(e);if(n){var r=S.indexOf(e);I.splice(r,0,i.createElement(f,{key:_(n),isPresent:!1,onExitComplete:function(){A.delete(e),E.delete(e);var n=N.current.findIndex((function(n){return n.key===e}));if(N.current.splice(n,1),!E.size){if(N.current=b,!1===w.current)return;j(),d&&d()}},custom:t,presenceAffectsLayout:v},n))}}})),I=I.map((function(e){var n=e.key;return E.has(n)?e:i.createElement(f,{key:_(e),isPresent:!0,presenceAffectsLayout:v},e)})),"production"!==a.O&&m&&I.length>1&&console.warn("You're attempting to animate multiple children within AnimatePresence, but its exitBeforeEnter prop is set to true. This will lead to odd visual behaviour."),i.createElement(i.Fragment,null,E.size?I:I.map((function(e){return(0,i.cloneElement)(e)})))}}},function(e){e.O(0,[774,888,179],(function(){return n=2181,e(e.s=n);var n}));var n=e.O();_N_E=n}]);