(this["webpackJsonpmy-historys"]=this["webpackJsonpmy-historys"]||[]).push([[0],{13:function(e,t,c){},27:function(e,t,c){},29:function(e,t,c){},31:function(e,t,c){},32:function(e,t,c){"use strict";c.r(t);var s=c(3),n=c(0),i=c.n(n),a=c(21),j=c.n(a),r=(c(13),c(27),c(8)),l=function(){var e={opacity:"1"};return Object(s.jsx)("div",{className:"Navbar",children:Object(s.jsxs)("div",{className:"Navbar__item",children:[Object(s.jsx)(r.b,{to:"/",style:function(t){return t.isActive?e:void 0},children:"\u041f\u043e\u0441\u0442\u044b"}),Object(s.jsx)(r.b,{to:"/new",style:function(t){return t.isActive?e:void 0},children:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u043f\u043e\u0441\u0442\u044b"})]})})},o=function(e){var t=e.children;return Object(s.jsx)(i.a.Fragment,{children:Object(s.jsx)("div",{className:"base",children:Object(s.jsxs)("div",{className:"container",children:[Object(s.jsx)(l,{}),t]})})})},b=c(5),u=(c(29),c(2)),d=c(7),O=c.n(d),m=c(6),h=function(e){var t=e.post;return t?(console.log("post PostItem ",t),Object(s.jsxs)("div",{className:"PostItem",children:["PostItem",Object(s.jsx)("div",{className:"PostItem__wrapper",children:Object(s.jsx)("div",{className:"PostItem__imagin",children:t.image&&Object(s.jsx)("img",{src:URL.createObjectURL(t.image),alt:"\u041a\u0430\u0440\u0442\u0438\u043d\u043a"})})})]})):Object(s.jsx)("div",{className:"PostItem",children:Object(s.jsx)("h1",{children:"\u041f\u043e\u0441\u0442\u043e\u0432 \u043d\u0435\u0442"})})},x=function(){var e=Object(u.l)(),t=Object(n.useState)([]),c=Object(b.a)(t,2),i=c[0],a=c[1];Object(n.useEffect)((function(){var e;e=a,O.a.getItem("post").then((function(t){if(t)return e(t||[])}))}),[e]);return i.length?Object(s.jsx)("div",{className:"MainPage",children:Object(s.jsx)("div",{className:"posts",children:i&&i.map((function(e,t){return Object(s.jsx)(h,{post:e},t)}))})}):Object(s.jsx)("div",{className:"MainPage",children:Object(s.jsxs)("div",{className:"not_post",children:[Object(s.jsx)("h2",{children:"\u041f\u043e\u0441\u0442\u043e\u0432 \u043d\u0435\u0442"}),Object(s.jsx)("div",{className:"addpost",children:Object(s.jsx)("button",{onClick:function(){e("/new")},children:"\u0421\u043e\u0437\u0434\u0430\u0442\u044c \u043f\u043e\u0441\u0442"})})]})})},f=(c(31),function(){var e=Object(u.l)(),t=Object(n.useState)(""),c=Object(b.a)(t,2),i=c[0],a=c[1],j=Object(n.useState)(""),r=Object(b.a)(j,2),l=r[0],o=r[1],d=Object(n.useState)(""),h=Object(b.a)(d,2),x=h[0],f=h[1];return Object(s.jsxs)("div",{className:"AddpostPage",children:[Object(s.jsx)("h1",{children:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u043f\u043e\u0441\u0442"}),Object(s.jsxs)("form",{onSubmit:function(e){return e.preventDefault()},children:[Object(s.jsxs)("label",{className:"file",children:["\u041f\u0440\u0438\u043a\u0440\u0435\u043f\u0438\u0442\u044c \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435",Object(s.jsx)("input",{type:"file",className:"hidden",onChange:function(e){return a(e.target.files[0])}})]}),Object(s.jsx)("div",{className:"image",children:i&&Object(s.jsx)("img",{src:URL.createObjectURL(i),alt:"\u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0430"})}),Object(s.jsxs)("div",{className:"context",children:[Object(s.jsxs)("label",{children:["\u0417\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a \u043f\u043e\u0441\u0442\u0430:",Object(s.jsx)("input",{type:"text",value:l,onChange:function(e){return o(e.target.value)},placeholder:"\u0417\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a..."})]}),Object(s.jsxs)("label",{children:["\u0422\u0435\u043a\u0441\u0442 \u043f\u043e\u0441\u0442\u0430:",Object(s.jsx)("textarea",{rows:"5",type:"text",value:x,onChange:function(e){return f(e.target.value)},placeholder:"\u0422\u0435\u043a\u0441\u0442..."})]})]}),Object(s.jsxs)("div",{className:"button_sibmit",children:[Object(s.jsx)("button",{onClick:function(){var t={};t.image=i,t.title=l,t.text=x,function(e){O.a.getItem("post").then((function(t){t?O.a.setItem("post",[].concat(Object(m.a)(t),[e])).then((function(){O.a.getItem("post")})):O.a.setItem("post",[e])}))}(t),e("/")},className:"submit",children:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c"}),Object(s.jsx)("button",{onClick:function(){O.a.getItem("post").then((function(e){console.log("post: ",e)}))},className:"submit",children:"\u0422\u0435\u0441\u0442"}),Object(s.jsx)("button",{onClick:function(){O.a.removeItem("post")},className:"submit",children:"\u041e\u0447\u0438\u0441\u0442\u0438\u0442\u044c"}),Object(s.jsx)("button",{onClick:function(){return e("/")},className:"submit",children:"\u041e\u0442\u043c\u0435\u043d\u0430"})]})]})]})}),v=function(){return Object(s.jsx)(o,{children:Object(s.jsxs)(u.c,{children:[Object(s.jsx)(u.a,{path:"/",element:Object(s.jsx)(x,{})}),Object(s.jsx)(u.a,{path:"/new",element:Object(s.jsx)(f,{})})]})})};j.a.render(Object(s.jsx)(r.a,{children:Object(s.jsx)(v,{})}),document.getElementById("root"))}},[[32,1,2]]]);
//# sourceMappingURL=main.dbff9361.chunk.js.map