(this.webpackJsonppublic=this.webpackJsonppublic||[]).push([[0],{102:function(t,e,n){"use strict";n.r(e);var c=n(0),r=n.n(c),a=n(9),i=n.n(a),o=n(15),s=n(28),u=n(56),l=n(61),j=n(14),d="FETCH_POSTS",b="DELETE_POST",p="ADD_POST",O="EDIT_POST",h="UPDATE_POST",f="SHOW_FORM",x={posts:[],postEdit:null,showForm:!1};var m=Object(s.b)({posts:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:x,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case d:return Object(j.a)(Object(j.a)({},t),{},{posts:e.payload});case p:return Object(j.a)(Object(j.a)({},t),{},{posts:[].concat(Object(l.a)(t.posts),[e.payload])});case O:return Object(j.a)(Object(j.a)({},t),{},{postEdit:e.payload});case h:return Object(j.a)(Object(j.a)({},t),{},{postEdit:null,posts:t.posts.map((function(t){return t._id===e.payload._id&&(t.title=e.payload.title,t.body=e.payload.body),t}))});case b:return Object(j.a)(Object(j.a)({},t),{},{posts:t.posts.filter((function(t){return t._id!==e.meta._id}))});case f:return Object(j.a)(Object(j.a)({},t),{},{showForm:!t.showForm});default:return t}}}),v=[u.a],y=Object(s.d)(m,Object(s.c)(s.a.apply(void 0,v))),w=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,151)).then((function(e){var n=e.getCLS,c=e.getFID,r=e.getFCP,a=e.getLCP,i=e.getTTFB;n(t),c(t),r(t),a(t),i(t)}))},g=(n(80),n(18)),S=n.n(g),_=n(34),E=n(35),k=n.n(E),T="localhost"===window.location.hostname?"http://localhost:2000/api/posts":"https://app-react-express-mongo.herokuapp.com/api/posts",C=function(){return{type:f}},F=n(135),P=n(139),A=n(5);function D(t){var e=t.post,n=e._id,c=e.title,a=e.body,i=Object(o.b)(),s=function(t){i(function(t){return function(){var e=Object(_.a)(S.a.mark((function e(n){return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k.a.delete(T+"/"+t).then((function(e){return n({type:b,meta:{_id:t}})})).catch((function(t){return console.log(t)}));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}(t))},u=function(t){i(function(t){return{type:O,payload:t}}(t)),i(C())};return Object(A.jsxs)(r.a.Fragment,{children:[Object(A.jsx)(F.a,{children:c}),Object(A.jsx)(F.a,{children:a}),Object(A.jsxs)(F.a,{children:[Object(A.jsx)(P.a,{variant:"contained",color:"primary",onClick:function(){return u(t.post)},children:"edit"}),Object(A.jsx)(P.a,{variant:"contained",color:"secondary",onClick:function(){return s(n)},children:"delete"})]})]})}var I=n(142),B=n(143),L=n(144),W=n(145),H=n(146),J=n(24),M=n(147),N=n(149),R=n(148),U=n(140);function q(){var t=Object(o.c)((function(t){return t.posts.postEdit})),e=Object(c.useState)(""),n=Object(J.a)(e,2),r=n[0],a=n[1],i=Object(c.useState)(Object(N.a)()),s=Object(J.a)(i,1)[0],u=Object(c.useState)(2),l=Object(J.a)(u,1)[0],j=Object(c.useState)(""),d=Object(J.a)(j,2),b=d[0],O=d[1],f=Object(c.useState)(""),x=Object(J.a)(f,2),m=x[0],v=x[1],y=Object(c.useState)(""),w=Object(J.a)(y,2),g=w[0],E=w[1],F=Object(o.b)(),D=function(){F(C())},I=function(){var t;r?b?(F((t={_id:r,userId:l,id:s,title:b,body:m},function(){var e=Object(_.a)(S.a.mark((function e(n){return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k.a.put(T+"/"+t._id,t).then((function(e){return n({type:h,payload:t})})).catch((function(t){return console.log(t)}));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())),a(""),O(""),v(""),D()):E("Please provide a title"):b?(F(function(t){return function(){var e=Object(_.a)(S.a.mark((function e(n){return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k.a.post(T,t).then((function(t){return n({type:p,payload:t.data})})).catch((function(t){return console.log(t)}));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}({userId:l,id:s,title:b,body:m})),a(""),O(""),v(""),D()):E("Please provide a title")};return Object(c.useEffect)((function(){return t&&(a(t._id),O(t.title),v(t.body)),function(){}}),[t]),Object(A.jsxs)("div",{children:[Object(A.jsx)("h3",{children:""!==r?"Edit post":"Add new post"}),Object(A.jsxs)(U.a,{container:!0,direction:"row",justify:"center",alignItems:"center",spacing:3,children:[g&&Object(A.jsx)(U.a,{item:!0,xs:12,md:8,children:Object(A.jsx)(R.a,{role:"alert",severity:"error",children:g})}),Object(A.jsx)(U.a,{item:!0,xs:12,md:6,children:Object(A.jsx)(M.a,{fullWidth:!0,label:"Title",variant:"outlined",name:"title",multiline:!0,rows:4,value:b,onChange:function(t){return O(t.target.value)}})}),Object(A.jsx)(U.a,{item:!0,xs:12,md:6,children:Object(A.jsx)(M.a,{fullWidth:!0,label:"Body",variant:"outlined",name:"body",multiline:!0,rows:4,value:m,onChange:function(t){return v(t.target.value)}})}),Object(A.jsx)(U.a,{item:!0,xs:12,md:1,children:Object(A.jsx)(P.a,{variant:"contained",onClick:function(t){return window.location.href="/"},children:"Back"})}),Object(A.jsx)(U.a,{item:!0,xs:12,md:1,children:Object(A.jsx)(P.a,{variant:"contained",color:"primary",type:"submit",value:"Submit",onClick:function(){return I()},children:"Submit"})})]})]})}function z(){var t=Object(o.c)((function(t){return t.posts.posts})),e=Object(o.c)((function(t){return t.posts.showForm})),n=Object(o.b)();return Object(c.useEffect)((function(){n(function(){var t=Object(_.a)(S.a.mark((function t(e){return S.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,k.a.get(T).then((function(t){return e({type:d,payload:t.data})})).catch((function(t){return console.log(t)}));case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())}),[n]),Object(A.jsxs)("div",{children:[Object(A.jsx)("h1",{"data-testid":"app",children:"Posts"}),e?Object(A.jsx)(q,{}):Object(A.jsxs)("div",{children:[Object(A.jsx)(P.a,{variant:"contained",color:"primary",onClick:function(){n(C())},children:"Add post"}),Object(A.jsx)(I.a,{children:Object(A.jsxs)(B.a,{children:[Object(A.jsx)(L.a,{children:Object(A.jsxs)(W.a,{children:[Object(A.jsx)(F.a,{children:"Title"}),Object(A.jsx)(F.a,{children:"Body"}),Object(A.jsx)(F.a,{children:"Actions"})]})}),Object(A.jsx)(H.a,{children:t.map((function(t,e){return Object(A.jsx)(W.a,{children:Object(A.jsx)(D,{post:t},e)})}))})]})})]})]})}var G=function(){return Object(A.jsx)("div",{className:"App",role:"app",children:Object(A.jsx)(z,{})})},K=document.getElementById("root");i.a.render(Object(A.jsx)(o.a,{store:y,children:Object(A.jsx)(G,{})}),K),w()},80:function(t,e,n){}},[[102,1,2]]]);
//# sourceMappingURL=main.861e245e.chunk.js.map