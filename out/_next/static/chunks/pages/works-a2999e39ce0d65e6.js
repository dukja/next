(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[547],{8516:function(e,t,n){"use strict";n.d(t,{Z:function(){return o}});var i=n(2329),r=n(5893);function o(e){var t=e.scaleX;return console.log("scaleX",t),(0,r.jsx)(r.Fragment,{children:(0,r.jsx)("div",{className:"progressBar",children:(0,r.jsx)(i.E.div,{className:"indicator",style:{scaleX:t,originX:0}})})})}},6201:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return p}});var i=n(7294),r=n(4184),o=n.n(r),c=n(3074),a=n(1932),s=n(1958),l=n(5893);function d(){var e=(0,s.Z)(),t=e.element,n=e.elemSize,r=(0,i.useContext)(a.x).setBottom;return(0,i.useEffect)((function(){t.current&&r(n)}),[n]),(0,l.jsx)(l.Fragment,{children:(0,l.jsx)("div",{className:"pagePading t-caption footer",ref:t,children:"Dukyeon Ha"})})}function p(e){var t=e.children,n=e.pageWraperStyle,r=e.topSpacing,a=e.bottomSpacing;(0,i.useEffect)((function(){document.getElementById("__next").classList.add("mainStyle")}));var s=o()("pageWraper",n);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)("div",{className:"dark-ink-higher siteWrap mainStyle",children:[(0,l.jsx)(c.Z,{}),(0,l.jsx)("div",{className:s,style:{paddingTop:"".concat(r,"px"),paddingBottom:"".concat(a,"px")},children:t}),(0,l.jsx)(d,{})]}),(0,l.jsx)("div",{className:"bg"})]})}},4280:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return b}});var i,r,o,c,a,s,l=n(1383),d=n(7294),p=n(990),u=n(4184),h=n.n(u),f=n(4141),m=n(2329),x=n(6963),v=n(8516),g=n(6201),j=n(5893),k=[{co:"\uce74\ud39824",project:"Cafe24",text:"Design System",link:"https://www.cafe24.com/",hover:"#006EB8"},{co:"\ud30c\uc2a4\ud1a0",project:"FASSTO",text:"Homepage UI",link:"https://www.fassto.ai/",hover:"#00855B"},{co:"\ud30c\uc2a4\ud1a0",project:"FASSTO Self",text:"Fulfillment Service UI",link:"https://www.fasstoself.com/",hover:"#00B480"},{co:"\ud30c\uc2a4\ud1a0",project:"FASSTO App",text:"Fulfillment App UI",link:"https://play.google.com/store/apps/details?id=ai.fassto.fms.app.com.android&hl=ko&gl=US",hover:"#00855B"},{co:"\ud55c\uc704\ub4dc\uc815\ubcf4\uae30\uc220",project:"hdaas",text:"Server Virtualization  Dashboard UI",link:"https://sellec.kr/theme/basic/hdaas/www/php/dashboard-v1.php",hover:"#E8820D"},{co:"\ub124\uc774\ubc84",project:"NAVER Office",text:"Cloud Office UI",link:"https://office.naver.com/",hover:"#03C75A"},{co:"\ucf54\ub514\uc2a4\ud398\uc774\uc2a4",project:"Incheon Airport",text:"Cloud Office App UI",link:"/images/Incheon-Airport.pdf",hover:"#00AAB4"},{co:"\ucf54\ub514\uc2a4\ud398\uc774\uc2a4",project:"Incheon Airport",text:"Airbeacon Admin UI",link:"https://sellec.kr/theme/basic/airbeacon/dashBoardList.html#",hover:"#00AAB4"},{co:"\ucf54\ub514\uc2a4\ud398\uc774\uc2a4",project:"Incheon Airport",text:"Node Admin UI",link:"/images/node.png",hover:"#EC641F"}],w={select:{opacity:1,scale:1},unSelect:{opacity:.4,scale:.9},visible:function(e){return{scale:1}}},N=(0,f.ZP)(m.E.div)(i||(i=(0,l.Z)(["\n  "," \n"])),(function(e){return e.index%2===0?(0,f.iv)(r||(r=(0,l.Z)(["\n    height: 240px;\n    width: 200px;\n    .img:hover{\n      background-color: "," !important\n  "])),k[e.index].hover&&k[e.index].hover):(0,f.iv)(o||(o=(0,l.Z)(["\n    height: 320px;\n    width: 280px;\n    .img:hover{\n      background-color: "," !important\n  "])),k[e.index].hover&&k[e.index].hover)})),S=f.ZP.div(c||(c=(0,l.Z)(["\n  "," \n"])),(function(e){return e.index%2===0?(0,f.iv)(a||(a=(0,l.Z)(["\n    bottom: -24px;\n  "]))):(0,f.iv)(s||(s=(0,l.Z)(["\n    top: -24px;\n  "])))}));function b(){var e=(0,d.useRef)(),t=(0,d.useRef)(),n=p.p8.utils.selector(t),i=p.p8.utils.selector(t),r=p.p8.utils.selector(t),o=(0,x.B)(t).scrollXProgress,c=(0,d.useState)(),a=c[0],s=c[1],l=(0,d.useState)(),u=l[0],f=l[1];(0,d.useEffect)((function(){e.current=p.p8.timeline().from(n(".imgWrap"),{height:0,opacity:0,stagger:.2,duration:.8,ease:"cubic-bezier(0, 0.55, 0.45, 1)",transformOrigin:"left bottom"}).from(r(".data"),{opacity:0,duration:.8})}),[]);(0,d.useEffect)((function(){o.onChange((function(){f(o.get()),p.p8.fromTo(i(".img"),{scale:1.05},{scale:1})}))}),[u]);var b=function(e){s(e)},A=h()("t-metadata-sm project");return(0,j.jsx)(j.Fragment,{children:(0,j.jsxs)(g.default,{children:[(0,j.jsx)("div",{ref:t,className:"pageWrap works",style:{overflow:"scroll",display:"flex",alignItems:"center"},children:k.map((function(e,t){return(0,j.jsxs)(m.E.div,{className:"".concat(A," card"),index:t,onMouseEnter:function(){return b(t)},onMouseLeave:function(){return b(void 0)},variants:w,transition:{ease:[.17,.67,.83,.67]},animate:void 0!==a?a===t?"select":"unSelect":"visible",custom:t,children:[(0,j.jsx)("div",{className:"data",index:t,children:t>8?"".concat(t+1):"0".concat(t+1)}),(0,j.jsxs)(N,{className:"imgWrap",index:t,children:[(0,j.jsxs)("a",{className:"img",style:{display:"block",width:"100%",height:"100%"},href:e.link,target:"_blank",children:[(0,j.jsx)("div",{className:"project",children:e.project}),(0,j.jsx)("div",{className:"text",children:e.text})]}),(0,j.jsx)(S,{className:"co data",index:t,children:e.co})]})]},t)}))}),(0,j.jsx)(v.Z,{scaleX:o})]})})}},6985:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/works",function(){return n(4280)}])}},function(e){e.O(0,[802,768,293,774,888,179],(function(){return t=6985,e(e.s=t);var t}));var t=e.O();_N_E=t}]);