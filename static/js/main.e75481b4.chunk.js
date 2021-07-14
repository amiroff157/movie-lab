(this["webpackJsonpmovie-lab"]=this["webpackJsonpmovie-lab"]||[]).push([[0],{103:function(e,t,a){},104:function(e,t,a){},105:function(e,t,a){},107:function(e,t,a){},108:function(e,t,a){},115:function(e,t,a){"use strict";a.r(t);var s=a(0),c=a.n(s),n=a(22),r=a.n(n),i=a(20),o=(a(79),a(16)),l=a(12),j=function(e,t){switch(t.type){case"SET_USER":return Object(l.a)(Object(l.a)({},e),{},{loggedUser:t.payload});case"AUTHENTICATE_USER":return Object(l.a)(Object(l.a)({},e),{},{isUserAuthenticated:t.payload});case"SET_PERSISTENCE":return Object(l.a)(Object(l.a)({},e),{},{persistenceType:t.payload});case"LIKE_MOVIE":return Object(l.a)(Object(l.a)({},e),{},{favoriteMovies:e.favoriteMovies.concat(t.payload)});case"UNLIKE_MOVIE":return Object(l.a)(Object(l.a)({},e),{},{favoriteMovies:e.favoriteMovies.filter((function(e){return e.imdbID!==t.payload}))});case"PURGE_STATE":return O;default:return e}},b=a(2);function d(e){var t=e.children,a=Object(s.useReducer)(j,function(){var e=JSON.parse(localStorage.getItem("globalState"));return JSON.parse(sessionStorage.getItem("globalState"))||e||O}()),c=Object(o.a)(a,2),n=c[0],r=c[1];return Object(s.useEffect)((function(){var e=n.persistenceType;"sessionStorage"===e?(sessionStorage.setItem("globalState",JSON.stringify(n)),localStorage.removeItem("globalState")):"localStorage"===e&&(localStorage.setItem("globalState",JSON.stringify(n)),sessionStorage.removeItem("globalState"))}),[n]),Object(b.jsx)(u.Provider,{value:{globalState:n,dispatch:r},children:t})}var u=Object(s.createContext)({}),O={favoriteMovies:[],isUserAuthenticated:!1,loggedUser:"",persistenceType:"sessionStorage"};var m=a(7),h=a(120),p=a(32),x=a.n(p),f=a(40),v=a(121),g=a(67),S=a(122),y=a(69),N=a(123),E=a(64),I=a.n(E),T="&apikey="+a(65).a.API_KEY;function C(e){return I.a.get("".concat("https://www.omdbapi.com/?s=").concat(e).concat(T))}var U=a(129),w=a(25),k=a(68),L=a(33),M=a(66);a(103);function _(e){var t=e.movie,a=Object(s.useContext)(u),c=a.globalState,n=a.dispatch,r=Object(s.useState)(c.favoriteMovies.some((function(e){return e.imdbID===t.imdbID}))),i=Object(o.a)(r,2),j=i[0],d=i[1],O=Object(M.useDoubleTap)((function(){j?h():m()}));function m(){j||(d(!0),n({type:"LIKE_MOVIE",payload:t}))}function h(){d(!1),n({type:"UNLIKE_MOVIE",payload:t.imdbID})}return Object(b.jsx)(g.a,{className:"mb-4 movie-container",children:Object(b.jsxs)(U.a,{className:"",children:[Object(b.jsx)("img",Object(l.a)({src:t.Poster,alt:t.Title},O)),Object(b.jsxs)(U.a.Body,{children:[Object(b.jsx)("h5",{className:"card-title",children:t.Title}),Object(b.jsx)("p",{className:"card-text",children:t.Year}),Object(b.jsxs)("p",{className:"card-text",children:[Object(b.jsx)("a",{href:"https://www.imdb.com/title/".concat(t.imdbID,"/"),target:"_blank",rel:"noreferrer",children:Object(b.jsx)(w.a,{icon:k.a,size:"4x"})}),Object(b.jsx)("span",{className:"font-weight-bold",children:"IMDb: "}),t.imdbID.toUpperCase()]})]}),j?Object(b.jsx)("button",{type:"button",className:"btn btn-secondary fav-btn",title:"Unlike",onClick:h,children:Object(b.jsx)(w.a,{icon:L.c})}):Object(b.jsx)("button",{type:"button",className:"btn btn-danger remove-btn",title:"Like",onClick:m,children:Object(b.jsx)(w.a,{icon:L.b})})]})})}a(104);function P(e){var t=e.movies;return Object(b.jsx)(h.a,{className:"main-movies-container",children:Object(b.jsx)(v.a,{className:"d-flex mt-4 flex-wrap justify-content-start align-items-start",children:t.map((function(e,t){return Object(b.jsx)(_,{movie:e},e.imdbID+t)}))})})}a(105);function A(){var e=Object(s.useState)([]),t=Object(o.a)(e,2),a=t[0],c=t[1],n=Object(s.useState)(""),r=Object(o.a)(n,2),i=r[0],l=r[1],j=Object(s.useState)(""),d=Object(o.a)(j,2),u=d[0],O=d[1],m=Object(s.useState)(""),p=Object(o.a)(m,2),E=p[0],I=p[1],T=Object(s.useState)(!1),U=Object(o.a)(T,2),w=U[0],k=U[1];function L(){return(L=Object(f.a)(x.a.mark((function e(t){return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return k(!0),I(t),e.next=4,C(t).then((function(e){var t=e.data;"True"===t.Response?(c(t.Search),l(""),k(!1)):"False"===t.Response&&(l(t.Error),k(!1))})).catch((function(e){console.error(e),l(e.message),k(!1)}));case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(s.useEffect)((function(){var e=setTimeout((function(){if(u!==E)return function(e){return L.apply(this,arguments)}(u)}),600);return function(){return clearTimeout(e)}}),[u]),Object(b.jsxs)(h.a,{fluid:"xl",className:"mt-4 search-container",children:[Object(b.jsxs)(v.a,{children:[Object(b.jsx)(g.a,{md:{span:6,offset:3},className:"d-flex justify-content-center mt-3",children:Object(b.jsxs)(S.a,{children:[Object(b.jsx)(y.a,{placeholder:"Search by title",className:"rounded-0",onChange:function(e){O(e.currentTarget.value)}}),w?Object(b.jsx)(N.a,{animation:"border",role:"status",children:Object(b.jsx)("span",{className:"d-none",children:"Loading..."})}):null]})}),Object(b.jsx)(g.a,{md:{span:6,offset:3},className:"d-flex justify-content-center mt-3",children:Object(b.jsx)("p",{className:"error-message",children:i})})]}),Object(b.jsx)(P,{movies:a})]})}function D(){var e=Object(s.useContext)(u).globalState;return Object(b.jsxs)(g.a,{children:[Object(b.jsx)(v.a,{className:"d-flex justify-content-center mt-3",children:0===e.favoriteMovies.length?Object(b.jsx)("span",{children:"Please like some movies"}):null}),Object(b.jsx)(P,{movies:e.favoriteMovies})]})}var R=a(127),F=a(42),z=a(124),J=(a(107),a(70)),K={email:{value:"",required:!0},passphrase:{value:"",required:!0,validator:function(e){return e.length<=6?"Passphrase must be at least 6 characters long":""}}};function B(){var e=Object(s.useContext)(u),t=e.globalState,a=e.dispatch,c=Object(s.useState)(!1),n=Object(o.a)(c,2),r=n[0],i=n[1],l=Object(s.useRef)(null),j=Object(J.a)(K,(function(){i(!0),y((function(){a({type:"SET_USER",payload:f}),a({type:"AUTHENTICATE_USER",payload:!0})}))})),d=j.values,O=j.errors,m=j.handleOnChange,p=j.handleOnSubmit,x=j.isDisabled,f=d.email,S=d.passphrase;Object(s.useEffect)((function(){l.current&&l.current.focus()}),[]);var y=function(e){setTimeout(e,900)};function E(e){a({type:"SET_PERSISTENCE",payload:e.currentTarget.value})}return Object(b.jsx)(h.a,{fluid:"sm",className:"login-container d-flex justify-content-center mt-4 p-0",children:Object(b.jsx)(g.a,{className:"border border-secondary rounded p-4 col-sm-6",children:Object(b.jsxs)(R.a,{onSubmit:p,children:[Object(b.jsxs)(R.a.Group,{className:"mb-3",controlId:"email",children:[Object(b.jsx)(R.a.Label,{children:"Email address"}),Object(b.jsx)(R.a.Control,{type:"email",name:"email",ref:l,value:f,size:"sm",onChange:m,isInvalid:O.email.hasError}),Object(b.jsx)(R.a.Control.Feedback,{type:"invalid",children:O.email.message})]}),Object(b.jsxs)(R.a.Group,{controlId:"password",children:[Object(b.jsx)(R.a.Label,{children:"Passphrase"}),Object(b.jsx)(R.a.Control,{type:"password",name:"passphrase",value:S,size:"sm",onChange:m,isInvalid:O.passphrase.hasError}),Object(b.jsx)(R.a.Control.Feedback,{type:"invalid",children:O.passphrase.message})]}),Object(b.jsx)(g.a,{className:"d-flex justify-content-center mt-2",children:Object(b.jsx)(F.a,{type:"submit",size:"sm",variant:"info",disabled:x,children:Object(b.jsx)("span",{children:r?Object(b.jsx)(N.a,{animation:"grow",variant:"light",size:"sm"}):"Log In"})})}),Object(b.jsx)(v.a,{className:"d-flex justify-content-center mt-2",children:Object(b.jsxs)(g.a,{className:"mb-3 storage-container",children:[Object(b.jsx)(v.a,{className:"d-flex justify-content-center",children:Object(b.jsx)(R.a.Label,{className:"mb-0 text-label",children:"Storage Persistence"})}),Object(b.jsx)(v.a,{className:"d-flex justify-content-center",children:[{name:"Session",value:"sessionStorage"},{name:"Local",value:"localStorage"}].map((function(e,a){return Object(b.jsx)(z.a,{id:"radio-".concat(a),type:"radio",size:"sm",variant:"outline-secondary",name:"radio",className:0===a?"mr-2":"",value:e.value,checked:e.value===t.persistenceType,onChange:E,children:Object(b.jsxs)("span",{children:[" ",e.name]})},a)}))})]})})]})})})}var G=a(126),V=a(128),q=a(125),H=a(74),Y=(a(108),a.p+"static/media/logo.4562cdbe.png");function Q(){var e=Object(s.useContext)(u),t=e.globalState,a=e.dispatch,c=Object(m.g)();function n(){return(n=Object(f.a)(x.a.mark((function e(){return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a({type:"PURGE_STATE"});case 2:return e.abrupt("return",c.push("/login"));case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(b.jsxs)(G.a,{collapseOnSelect:!0,expand:"md",variant:"dark",className:"header",children:[Object(b.jsxs)(G.a.Brand,{children:[Object(b.jsx)("img",{src:Y,alt:"logo",className:"logo"}),Object(b.jsxs)("span",{className:"brand",children:["Movie",Object(b.jsx)("span",{className:"font-weight-bold",children:"Lab"})]})]}),Object(b.jsx)(G.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),Object(b.jsxs)(G.a.Collapse,{id:"responsive-navbar-nav",children:[Object(b.jsxs)(V.a,{className:"mr-auto",children:[Object(b.jsx)(i.c,{to:"/search",activeClassName:"active",className:"mr-3",children:Object(b.jsx)("span",{children:"Search"})}),Object(b.jsx)(i.c,{to:"/favorites",activeClassName:"active",children:Object(b.jsx)("span",{children:"Favorites"})})]}),t.loggedUser?Object(b.jsx)(V.a,{children:Object(b.jsxs)(q.a,{variant:"info",menuAlign:"right",size:"sm",title:t.loggedUser,id:"user-menu",children:[Object(b.jsxs)(H.a.Item,{children:[Object(b.jsx)(w.a,{icon:L.a}),"sessionStorage"===t.persistenceType?"Session Storage":"Local Storage"]}),Object(b.jsx)(H.a.Divider,{}),Object(b.jsxs)(H.a.Item,{eventKey:"1",onClick:function(){return n.apply(this,arguments)},children:[Object(b.jsx)(w.a,{icon:L.d})," Logout"]})]})}):null]})]})}function W(e){var t=e.component,a=e.path,c=e.exact,n=e.pathname,r=Object(s.useContext)(u).globalState;return Object(b.jsx)(m.b,Object(l.a)(Object(l.a)(Object(l.a)({},a),c),{},{children:r.isUserAuthenticated?Object(b.jsx)(t,{}):Object(b.jsx)(m.a,{to:"/login",from:n})}))}function X(){var e=Object(s.useContext)(u).globalState,t=Object(m.h)().pathname;return Object(b.jsx)(h.a,{fluid:!0,className:"p-0",children:Object(b.jsxs)(i.b,{children:[Object(b.jsx)(Q,{}),Object(b.jsxs)(m.d,{children:[Object(b.jsx)(m.b,{exact:!0,path:"/",children:Object(b.jsx)(m.a,{to:"/login"})}),Object(b.jsx)(W,{exact:!0,path:"/search",pathname:t,component:A}),Object(b.jsx)(W,{exact:!0,path:"/favorites",pathname:t,component:D}),Object(b.jsx)(m.b,{exact:!0,path:"/login",children:e.isUserAuthenticated?Object(b.jsx)(m.a,{to:"/favorites",from:t}):Object(b.jsx)(B,{})})]})]})})}var Z=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,130)).then((function(t){var a=t.getCLS,s=t.getFID,c=t.getFCP,n=t.getLCP,r=t.getTTFB;a(e),s(e),c(e),n(e),r(e)}))};r.a.render(Object(b.jsx)(c.a.StrictMode,{children:Object(b.jsx)(d,{children:Object(b.jsx)(i.a,{basename:"/movie-lab",children:Object(b.jsx)(X,{})})})}),document.getElementById("root")),Z()},79:function(e,t,a){}},[[115,1,2]]]);
//# sourceMappingURL=main.e75481b4.chunk.js.map