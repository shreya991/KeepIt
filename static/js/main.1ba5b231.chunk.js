(this.webpackJsonpgooglekeep=this.webpackJsonpgooglekeep||[]).push([[0],{41:function(e,t,n){},42:function(e,t,n){},50:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n.n(c),a=n(11),i=n.n(a),s=(n(41),n(34)),l=n(19),o=(n.p,n(42),n(30)),j=n.n(o),d=n(2),b=function(){return Object(d.jsx)(d.Fragment,{children:Object(d.jsx)("div",{children:Object(d.jsx)("nav",{className:"navbar navbar-dark bg-warning",children:Object(d.jsx)("div",{className:"container-fluid",children:Object(d.jsxs)("a",{className:"navbar-brand",href:"#",children:[Object(d.jsx)(j.a,{})," Keep It"]})})})})})},u=function(){var e=(new Date).getFullYear();return Object(d.jsx)("footer",{class:"footer mt-auto py-3 bg-light",style:{position:"relative",top:"500px"},children:Object(d.jsx)("div",{class:"container",children:Object(d.jsxs)("span",{class:"text-muted",children:["Copyright@",e]})})})},x=n(24),O=n(29),h=n(32),f=n.n(h),g=n(65),p=function(e){var t=Object(c.useState)(!1),n=Object(l.a)(t,2),r=n[0],a=n[1],i=Object(c.useState)({title:"",content:""}),s=Object(l.a)(i,2),o=s[0],j=s[1],b=function(e){var t=e.target,n=t.name,c=t.value;j((function(e){return Object(O.a)(Object(O.a)({},e),{},Object(x.a)({},n,c))}))};return Object(d.jsx)("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",margin:"10px"},children:Object(d.jsx)("form",{children:Object(d.jsxs)("div",{class:"card text-dark bg-warning mb-3",style:{width:"20rem"},children:[r?Object(d.jsx)("div",{class:"card-header",children:Object(d.jsx)("input",{type:"text",value:o.title,name:"title",onChange:b,placeholder:"Title",style:{backgroundColor:"#ffc107",border:"none"}})}):null,Object(d.jsxs)("div",{class:"card-body",children:[Object(d.jsx)("textarea",{rows:"",cols:"22",value:o.content,name:"content",onChange:b,onClick:function(){a(!0)},onDoubleClick:function(){a(!1)},placeholder:"write a note..."}),r?Object(d.jsxs)(g.a,{onClick:function(){e.passNote(o),j({title:"",content:""})},children:[" ",Object(d.jsx)(f.a,{style:{fontSize:"large"}})]}):null]})]})})})},m=n(33),v=n.n(m),y=function(e){return Object(d.jsxs)("div",{class:"card text-dark bg-warning mx-3 my-3",style:{maxWidth:"14rem"},children:[Object(d.jsx)("div",{class:"card-header",style:{backgroundColor:"#dc3545"},children:e.title}),Object(d.jsx)("div",{class:"card-body",children:Object(d.jsxs)("p",{class:"card-text",children:[e.content," ",Object(d.jsx)(v.a,{onClick:function(){e.deleteItem(e.id)}})]})})]})},k=function(){var e=Object(c.useState)([]),t=Object(l.a)(e,2),n=t[0],r=t[1],a=function(e){r((function(t){return t.filter((function(t,n){return n!==e}))}))};return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(b,{}),Object(d.jsx)(p,{passNote:function(e){r((function(t){return[].concat(Object(s.a)(t),[e])}))}}),n.map((function(e,t){return Object(d.jsx)(y,{id:t,title:e.title,content:e.content,deleteItem:a},t)})),Object(d.jsx)(u,{})]})},C=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,66)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,a=t.getLCP,i=t.getTTFB;n(e),c(e),r(e),a(e),i(e)}))};i.a.render(Object(d.jsx)(r.a.StrictMode,{children:Object(d.jsx)(k,{})}),document.getElementById("root")),C()}},[[50,1,2]]]);
//# sourceMappingURL=main.1ba5b231.chunk.js.map