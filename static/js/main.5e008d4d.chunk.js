(this.webpackJsonpreact=this.webpackJsonpreact||[]).push([[0],{11:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n(4),a=n.n(r),s=n(3),o=(n(9),n(0));function i(e){return e.toString().padStart(2,"0")}function j(){var e=Object(c.useState)("Lets count down begin! \u231b\ufe0f  "),t=Object(s.a)(e,2),n=t[0],r=t[1],a=Object(c.useState)(1500),j=Object(s.a)(a,2),u=j[0],b=j[1],l=Object(c.useRef)(0);var d=i(Math.floor(u/60)),h=i(u-60*d);return Object(o.jsxs)("div",{className:"app",children:[Object(o.jsx)("h2",{children:n}),Object(o.jsxs)("div",{className:"timer",children:[Object(o.jsx)("span",{children:d}),Object(o.jsx)("span",{children:":"}),Object(o.jsx)("span",{children:h})]}),Object(o.jsxs)("div",{className:"buttons",children:[Object(o.jsx)("button",{onClick:function(){r("Be Focused, You are almost there! \ud83d\udc69\ud83c\udffd\u200d\ud83d\udcbb"),l.current=setInterval((function(){b((function(e){return e>1?e-1:0}))}),1e3)},children:"Start"}),Object(o.jsx)("button",{onClick:function(){r("Take some break and be back! \ud83e\udd42 "),clearInterval(l.current)},children:"Stop"}),Object(o.jsx)("button",{onClick:function(){r("Wanna go for another round? \u23f3"),clearInterval(l.current),b(1500)},children:"Reset"})]})]})}var u=document.getElementById("root");a.a.render(Object(o.jsx)(c.StrictMode,{children:Object(o.jsx)(j,{})}),u)},9:function(e,t,n){}},[[11,1,2]]]);
//# sourceMappingURL=main.5e008d4d.chunk.js.map