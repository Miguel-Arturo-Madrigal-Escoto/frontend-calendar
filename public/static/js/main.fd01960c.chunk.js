(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{112:function(e,t,a){e.exports=a(261)},200:function(e,t,a){},248:function(e,t,a){},250:function(e,t,a){},255:function(e,t,a){},257:function(e,t,a){},259:function(e,t,a){},261:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(21),o=a(18),l=a(53),i=a(1),s=a(15),u={lEmail:"",lPassword:""},m={rName:"",rEmail:"",rPassword:"",rPassword2:""},d={rEmail:"",rPassword:"",rPassword2:""},p={rEmailValid:!1,rPasswordValid:!1,rPasswordValid2:!1},f=a(8),v=a(22),b=function(e){var t=Object(n.useState)(e),a=Object(s.a)(t,2),r=a[0],c=a[1];return[r,function(e){var t=e.target;c(Object(v.a)({},r,Object(f.a)({},t.name,t.value)))},function(e){c(e)}]},E=a(57),g=a.n(E),h=function(e){var t=e.positive,a=e.negative;return r.a.createElement(n.Fragment,null,t&&r.a.createElement("div",{className:"valid-feedback"},t),a&&r.a.createElement("div",{className:"invalid-feedback"},a))},O=(a(200),a(3)),j=a.n(O),w=a(4),y=a(31),k=a.n(y),x=a(99),N=a(100),S=a(41),C=(Object(x.a)({apiKey:"AIzaSyBTaCnh_pp6rxQnNsqxVEZ4ug5fhILI5v8",authDomain:"mern-calendar.firebaseapp.com",projectId:"mern-calendar",storageBucket:"mern-calendar.appspot.com",messagingSenderId:"262050419112",appId:"1:262050419112:web:b308b88bd8244559edcd9d",measurementId:"G-RKGSCLMGWT"}),Object(N.a)(),new S.b),P=new S.a,I=function(e,t){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"GET",n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"auth",r="".concat("auth"===n?"https://api-auth-calendar-git-sarahx3-dev.apps.sandbox.x8i5.p1.openshiftapps.com/api":"https://api-events-git-sarahx3-dev.apps.sandbox.x8i5.p1.openshiftapps.com/api","/").concat(e);switch(a){case"GET":return fetch(r);default:return fetch(r,{method:a,headers:{"Content-type":"application/json"},body:JSON.stringify(t)})}},T=function(e,t){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"GET",n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"auth",r="".concat("auth"===n?"https://api-auth-calendar-git-sarahx3-dev.apps.sandbox.x8i5.p1.openshiftapps.com/api":"https://api-events-git-sarahx3-dev.apps.sandbox.x8i5.p1.openshiftapps.com/api","/").concat(e),c=localStorage.getItem("token")||"";switch(a){case"GET":return fetch(r,{method:a,headers:{"x-token":c}});default:return fetch(r,{method:a,headers:{"Content-type":"application/json","x-token":c},body:JSON.stringify(t)})}},D="[ui] Open modal",_="[ui] Close modal",L="[calendar] Add new event",V="[calendar] Set active event",G="[calendar] Event updated",M="[calendar] Event deleted",A="[calendar] Events loaded",B="[calendar] Events cleared",R="[auth] Finished checking state",z="[auth] Login",H="[auth] Logout",F=a(35),q=a.n(F),J=function(){return(arguments.length>0&&void 0!==arguments[0]?arguments[0]:[]).map(function(e){return Object(v.a)({},e,{end:q()(e.end).toDate(),start:q()(e.start).toDate()})})},U=function(e){return function(){var t=Object(w.a)(j.a.mark(function t(a,n){var r,c,o,l;return j.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return r=n().auth,c=r.uid,r.name,t.prev=1,t.next=4,T("events",e,"POST","events");case 4:return o=t.sent,t.next=7,o.json();case 7:(l=t.sent).ok&&(e._id=l.event._id,e.user=c,a(K(e))),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(1),console.log(t.t0);case 14:case"end":return t.stop()}},t,null,[[1,11]])}));return function(e,a){return t.apply(this,arguments)}}()},K=function(e){return{type:L,payload:e}},X=function(e){return{type:G,payload:e}},Q=function(e){return{type:A,payload:e}},W=function(e){return{type:V,payload:e}},Z=function(){return{type:M}},Y=function(){return{type:R}},$=function(e){return{type:z,payload:e}},ee=function(){return function(e){var t=!!localStorage.getItem("token"),a=!!localStorage.getItem("token-init-date");t&&a&&(localStorage.removeItem("token"),localStorage.removeItem("token-init-date"),e({type:B}),e(te()))}},te=function(){return{type:H}},ae=(a(91),function(){var e=Object(o.b)();return r.a.createElement("div",{className:"google-btn",onClick:function(){e(function(){var e=Object(w.a)(j.a.mark(function e(t){var a;return j.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:a=Object(S.c)(),Object(S.d)(a,C).then(function(){var e=Object(w.a)(j.a.mark(function e(a){var n,r,c,o,l;return j.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=a.user,r={uid:n.uid,email:n.email,name:n.displayName},e.next=4,I("auth/login",r,"POST");case 4:return c=e.sent,e.next=7,c.json();case 7:(o=e.sent).ok?(localStorage.setItem("token",o.token),localStorage.setItem("token-init-date",(new Date).getTime()),t($({uid:o.uid,name:o.name}))):(l=o.errors?o.errors.email.msg:o.msg,k.a.fire("Error",l,"error"));case 9:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()).catch(function(e){});case 2:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}())}},r.a.createElement("div",{className:"google-icon-wrapper"},r.a.createElement("img",{className:"google-icon-svg",src:"https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg",alt:"google icon"})),r.a.createElement("p",{className:"btn-text"},r.a.createElement("b",null,"Sign in with Google")))}),ne=function(){var e=Object(o.b)();return r.a.createElement("div",{className:"google-btn",onClick:function(){e(function(){var e=Object(w.a)(j.a.mark(function e(t){var a;return j.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:a=Object(S.c)(),Object(S.d)(a,P).then(function(){var e=Object(w.a)(j.a.mark(function e(a){var n,r,c,o;return j.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=a.user,r={uid:n.uid,email:n.email,name:n.displayName},e.next=4,T("auth/login",r,"POST");case 4:return c=e.sent,e.next=7,c.json();case 7:(o=e.sent).ok?(localStorage.setItem("token",o.token),localStorage.setItem("token-init-date",(new Date).getTime()),t($({uid:o.uid,name:o.name}))):k.a.fire("Error","Error en la autenticacion","error");case 9:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()).catch(function(e){var t=e.code;k.a.fire("Ha ocurrido un error",t,"error")});case 2:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}())}},r.a.createElement("div",{className:"google-icon-wrapper"},r.a.createElement("img",{className:"google-icon-svg",src:"https://cdn-icons-png.flaticon.com/512/25/25231.png",alt:"github icon"})),r.a.createElement("p",{className:"btn-text"},r.a.createElement("b",null,"Sign in with GitHub")))},re=function(){var e=b(u),t=Object(s.a)(e,2),a=t[0],c=t[1],l=b(m),i=Object(s.a)(l,2),E=i[0],O=i[1],y=function(e,t){var a=Object(n.useState)(e),r=Object(s.a)(a,2),c=r[0],o=r[1],l=Object(n.useState)(t),i=Object(s.a)(l,2),u=i[0],m=i[1],d=c.rEmail,p=c.rPassword,b=c.rPassword2;return Object(n.useEffect)(function(){m(Object(v.a)({},u,{rEmailValid:g.a.isEmail(d),rPasswordValid:g.a.isStrongPassword(p),rPasswordValid2:g.a.equals(p,b)}))},[c]),[c,function(e){var t=e.target;o(Object(v.a)({},c,Object(f.a)({},t.name,t.value)))},u]}(d,p),x=Object(s.a)(y,3),N=x[1],S=x[2],C=Object(o.b)(),P=S.rEmailValid,T=S.rPasswordValid,D=S.rPasswordValid2,_=a.lEmail,L=a.lPassword,V=E.rName,G=E.rEmail,M=E.rPassword,A=E.rPassword2,B=function(e){O(e),N(e)};return r.a.createElement("div",{className:"container login-container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-6 login-form-1"},r.a.createElement("h3",null,"Ingreso"),r.a.createElement("form",{onSubmit:function(e){var t,a;e.preventDefault(),C((t=_,a=L,function(){var e=Object(w.a)(j.a.mark(function e(n){var r,c,o;return j.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,I("auth",{email:t,password:a},"POST");case 3:return r=e.sent,e.next=6,r.json();case 6:(c=e.sent).ok?(localStorage.setItem("token",c.token),localStorage.setItem("token-init-date",(new Date).getTime()),n($({uid:c.uid,name:c.name}))):(o=c.errors?c.errors.email.msg:c.msg,k.a.fire("Error",o,"error")),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0);case 13:case"end":return e.stop()}},e,null,[[0,10]])}));return function(t){return e.apply(this,arguments)}}()))}},r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"text",className:"form-control",placeholder:"Correo",name:"lEmail",value:_,onChange:c})),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"password",className:"form-control",placeholder:"Contrase\xf1a",name:"lPassword",value:L,onChange:c})),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"submit",className:"btnSubmit",value:"Login"})))),r.a.createElement("div",{className:"col-md-6 login-form-2"},r.a.createElement("h3",null,"Registro"),r.a.createElement("form",{onSubmit:function(e){var t,a,n;e.preventDefault(),P&&T&&D&&C((t=V,a=G,n=M,function(){var e=Object(w.a)(j.a.mark(function e(r){var c,o,l;return j.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,I("auth/new",{name:t,email:a,password:n},"POST");case 3:return c=e.sent,e.next=6,c.json();case 6:(o=e.sent).ok?(localStorage.setItem("token",o.token),localStorage.setItem("token-init-date",(new Date).getTime()),r($({uid:o.uid,name:o.name}))):(l=o.errors?o.errors.email.msg:o.msg,k.a.fire("Error",l,"error")),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0);case 13:case"end":return e.stop()}},e,null,[[0,10]])}));return function(t){return e.apply(this,arguments)}}()))}},r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"text",className:"form-control",placeholder:"Nombre",name:"rName",onChange:B,value:V})),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"email",className:"form-control ".concat(G&&(P?"is-valid":"is-invalid")),placeholder:"Correo",name:"rEmail",onChange:B,value:G}),G&&r.a.createElement(h,{negative:"Por favor, proporcione un email v\xe1lido.",positive:"Email v\xe1lido."})),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"password",className:"form-control ".concat(M&&(T?"is-valid":"is-invalid")),placeholder:"Contrase\xf1a",name:"rPassword",onChange:B,value:M}),M&&r.a.createElement(h,{negative:"Por favor, proporcione al menos 8 caracteres (mayusculas, minusculas, numeros y c. especiales).",positive:"La contrase\xf1a cumple con los requisitos."})),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"password",className:"form-control ".concat(A&&(D?"is-valid":"is-invalid")),placeholder:"Repita la contrase\xf1a",name:"rPassword2",onChange:B,value:A}),A&&r.a.createElement(h,{negative:"Las contrase\xf1as no coinciden.",positive:"Las contrase\xf1as coinciden."})),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"submit",className:"btnSubmit",value:"Crear cuenta"}))))),r.a.createElement("div",{className:"row mt-5 login-connect"},r.a.createElement("div",{className:"col"},r.a.createElement(ae,null)),r.a.createElement("div",{className:"col"},r.a.createElement(ne,null))))},ce=a(72),oe=function(e){var t=e.event.title;return r.a.createElement("div",null,r.a.createElement("strong",null,t))},le=a(69),ie=a.n(le),se=a(70),ue=a.n(se),me={content:{top:"50%",left:"50%",right:"auto",bottom:"auto",marginRight:"-50%",transform:"translate(-50%, -50%)"}},de=a(56),pe=function(){return{type:D}};a(248);ie.a.setAppElement("#root");var fe=q()().minutes(0).seconds(0).add(1,"hours"),ve=fe.clone().add(1,"hours"),be={title:"",start:fe.toDate(),end:ve.toDate(),notes:""},Ee=function(){var e=Object(o.b)(),t=Object(o.c)(function(e){return e.calendar}).activeEvent,a=Object(o.c)(function(e){return e.ui}).modalOpen,c=Object(n.useState)(fe.toDate()),l=Object(s.a)(c,2)[1],i=Object(n.useState)(ve.toDate()),u=Object(s.a)(i,2)[1],m=Object(n.useState)(!0),d=Object(s.a)(m,2),p=d[0],b=d[1],E=Object(n.useState)(be),g=Object(s.a)(E,2),h=g[0],O=g[1],y=h.title,x=h.notes,N=h.start,S=h.end;Object(n.useEffect)(function(){O(t||be)},[t,O]);var C=function(){e(W(null)),e({type:_}),O(be)},P=function(e){var t=e.target;O(Object(v.a)({},h,Object(f.a)({},t.name,t.value))),b(!(y.trim().length<2))};return r.a.createElement(ie.a,{isOpen:a,onRequestClose:C,style:me,className:"modal",overlayClassName:"modal-fondo",closeTimeoutMS:200},r.a.createElement("h2",null,t&&""!==t.title&&""!==t.notes?"Editar evento":"Nuevo evento"),r.a.createElement("hr",null),r.a.createElement("form",{className:"container",onSubmit:function(a){a.preventDefault();var n,r=q()(N);if(q()(S).isSameOrBefore(r))return k.a.fire({icon:"error",title:"Oops...",text:"La fecha de inicio debe ser menor a la fecha de fin"});y.trim().length<2?b(!1):(t?""===t.title&&""===t.notes?e(U(h)):e((n=h,function(){var e=Object(w.a)(j.a.mark(function e(t){var a,r;return j.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,T("events/".concat(n._id),n,"PUT","events");case 3:return a=e.sent,e.next=6,a.json();case 6:(r=e.sent).ok?t(X(n)):k.a.fire("Error",r.errors.id.msg,"error"),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0);case 13:case"end":return e.stop()}},e,null,[[0,10]])}));return function(t){return e.apply(this,arguments)}}())):e(U(h)),b(!0),C())}},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Fecha y hora inicio"),r.a.createElement(ue.a,{value:N,className:"form-control",format:"y-MM-dd h:mm:ss a",amPmAriaLabel:"Select am/pm",name:"startDate",onChange:function(e){l(e),O(Object(v.a)({},h,{start:e}))}})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Fecha y hora fin"),r.a.createElement(ue.a,{value:S,className:"form-control",format:"y-MM-dd h:mm:ss a",amPmAriaLabel:"Select am/pm",onChange:function(e){u(e),O(Object(v.a)({},h,{end:e}))}})),r.a.createElement("hr",null),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Titulo y notas"),r.a.createElement("input",{type:"text",className:"form-control ".concat(p?"is-valid":"is-invalid"),placeholder:"T\xedtulo del evento",name:"title",autoComplete:"off",value:y,onChange:P}),r.a.createElement("small",{id:"emailHelp",className:"form-text text-muted"},"Una descripci\xf3n corta")),r.a.createElement("div",{className:"form-group"},r.a.createElement("textarea",{type:"text",className:"form-control",placeholder:"Notas",rows:"5",name:"notes",value:x,onChange:P}),r.a.createElement("small",{id:"emailHelp",className:"form-text text-muted"},"Informaci\xf3n adicional")),r.a.createElement("button",{type:"submit",id:"btn-save",className:"btn btn-outline-primary btn-block"},r.a.createElement(de.b,null),r.a.createElement("span",null,"\xa0Guardar"))))},ge=a(104),he=a(103),Oe=(a(250),function(){var e=Object(o.c)(function(e){return e.auth}).name,t=Object(o.b)();return r.a.createElement("div",{className:"navbar navbar-dark bg-dark mb-4"},r.a.createElement("div",{className:"navbar-brand"},r.a.createElement("span",null,r.a.createElement(he.a,{size:"1.1rem"}),"\xa0"),r.a.createElement("span",null,e)),r.a.createElement("button",{className:"btn btn-outline-danger",onClick:function(){t(ee())}},r.a.createElement(ge.a,{size:"1.1rem"}),r.a.createElement("span",null," Salir")))}),je={allDay:"Todo el d\xeda",previous:"<",next:">",today:"Hoy",month:"Mes",week:"Semana",day:"D\xeda",agenda:"Agenda",date:"Fecha",time:"Hora",event:"Evento",noEventsInRange:"No hay eventos en este rango",showMore:function(e){return"+ Ver m\xe1s (".concat(e,")")}},we=a(105),ye=function(){var e=Object(o.b)();return r.a.createElement("button",{className:"btn btn-primary fab",onClick:function(){e(pe()),e(W(null))}},r.a.createElement(we.a,{size:"1.3rem"}))},ke=function(){var e=Object(o.b)();return r.a.createElement("button",{className:"btn btn-danger fab-danger",onClick:function(){e(function(){var e=Object(w.a)(j.a.mark(function e(t,a){var n;return j.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:n=a().calendar.activeEvent._id;try{k.a.fire({title:"Estas seguro?",text:"Esto no ser\xe1 revertible!",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Si, eliminar!"}).then(function(){var e=Object(w.a)(j.a.mark(function e(a){var r;return j.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!a.isConfirmed){e.next=8;break}return e.next=3,T("events/".concat(n),{},"DELETE","events");case 3:return r=e.sent,e.next=6,r.json();case 6:e.sent.ok?(t(Z()),k.a.fire("Eliminado!","El evento ha sido eliminado correctamente.","success")):k.a.fire("Error","No tiene autorizaci\xf3n para eliminar el evento","error");case 8:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}())}catch(r){console.log(r)}case 2:case"end":return e.stop()}},e)}));return function(t,a){return e.apply(this,arguments)}}())}},r.a.createElement(de.a,{size:"1.3rem"}),r.a.createElement("span",null,"\xa0Eliminar evento"))};a(252),a(253),a(255);q.a.locale("es");var xe=Object(ce.b)(q.a),Ne=function(){var e=Object(o.b)(),t=Object(o.c)(function(e){return e.calendar}),a=t.activeEvent,c=t.events,l=Object(o.c)(function(e){return e.auth}).uid,i=Object(n.useState)(localStorage.getItem("lastView")||"month"),u=Object(s.a)(i,2),m=u[0],d=u[1];Object(n.useEffect)(function(){e(function(){var e=Object(w.a)(j.a.mark(function e(t){var a,n,r;return j.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,T("events",{},"GET","events");case 3:return a=e.sent,e.next=6,a.json();case 6:(n=e.sent).ok&&(console.log("body",n),r=J(n.events),t(Q(r))),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0);case 13:case"end":return e.stop()}},e,null,[[0,10]])}));return function(t){return e.apply(this,arguments)}}())},[e]);return r.a.createElement("div",{className:"calendar-screen"},r.a.createElement(Oe,null),r.a.createElement(ce.a,{localizer:xe,events:c,startAccessor:"start",endAccessor:"end",messages:je,eventPropGetter:function(e,t,a,n){var r=e.user;return{style:{backgroundColor:l===r?"#aee8ff":"#e5e5e5",borderRadius:"0px",color:"#000000",opacity:.8}}},onSelectEvent:function(t){e(W(t))},onDoubleClickEvent:function(t){e(pe())},onView:function(e){d(e),localStorage.setItem("lastView",e)},onSelectSlot:function(t){if("click"===t.action)e(W(null));else{var a=t.start,n=t.end,r=t.title,c=void 0===r?"":r,o=t.notes;e(W({title:c,start:a,end:n,notes:void 0===o?"":o})),e(pe())}},selectable:!0,components:{event:oe},view:m}),r.a.createElement(ye,null),a&&r.a.createElement(ke,null),r.a.createElement(Ee,null))},Se=a(110),Ce=(a(257),function(){return r.a.createElement("div",{className:"loading_icon"},r.a.createElement(Se.a,{height:"100",width:"100",color:"grey",ariaLabel:"loading"}))}),Pe=function(e){var t=e.children;return e.uid?t:r.a.createElement(i.a,{to:"/login"})},Ie=function(e){var t=e.children;return e.uid?r.a.createElement(i.a,{to:"/"}):t},Te=function(){var e=Object(o.b)(),t=Object(o.c)(function(e){return e.auth}),a=t.checking,c=t.uid;return Object(n.useEffect)(function(){e(function(){var e=Object(w.a)(j.a.mark(function e(t){var a,n;return j.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(localStorage.getItem("token")){e.next=3;break}return e.abrupt("return",t(Y()));case 3:return e.next=5,T("auth/renew");case 5:return a=e.sent,e.next=8,a.json();case 8:(n=e.sent).ok&&(localStorage.setItem("token",n.token),localStorage.setItem("token-init-date",(new Date).getTime()),t($({uid:n.uid,name:n.name}))),t(Y());case 11:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}())},[e]),a?r.a.createElement(Ce,null):r.a.createElement(l.a,null,r.a.createElement(i.d,null,r.a.createElement(i.b,{path:"/login",element:r.a.createElement(Ie,{uid:c},r.a.createElement(re,null))}),r.a.createElement(i.b,{path:"/",element:r.a.createElement(Pe,{uid:c},r.a.createElement(Ne,null))}),r.a.createElement(i.b,{path:"*",element:r.a.createElement(re,null)})))},De=a(46),_e={checking:!0},Le=a(20),Ve={events:[],activeEvent:null},Ge={modalOpen:!1},Me=Object(De.b)({ui:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ge;switch((arguments.length>1?arguments[1]:void 0).type){case D:return Object(v.a)({},e,{modalOpen:!0});case _:return Object(v.a)({},e,{modalOpen:!1});default:return e}},calendar:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ve,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case V:return Object(v.a)({},e,{activeEvent:t.payload});case L:return Object(v.a)({},e,{events:[].concat(Object(Le.a)(e.events),[t.payload])});case G:return Object(v.a)({},e,{events:e.events.map(function(e){return e._id===t.payload._id?t.payload:e})});case M:return Object(v.a)({},e,{events:e.events.filter(function(t){return t._id!==e.activeEvent._id}),activeEvent:null});case A:return Object(v.a)({},e,{events:t.payload});case B:return Object(v.a)({},Ve);default:return e}},auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_e,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case z:return Object(v.a)({},e,t.payload,{checking:!1});case R:return Object(v.a)({},e,{checking:!1});case H:return{checking:!1};default:return e}}}),Ae=a(109),Be="undefined"!==typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||De.c,Re=Object(De.d)(Me,Be(Object(De.a)(Ae.a))),ze=function(){return r.a.createElement(o.a,{store:Re},r.a.createElement(Te,null))};a(259);Object(c.render)(r.a.createElement(ze,null),document.getElementById("root"))},91:function(e,t,a){}},[[112,2,1]]]);
//# sourceMappingURL=main.fd01960c.chunk.js.map