(this["webpackJsonpsocialmedia-web"]=this["webpackJsonpsocialmedia-web"]||[]).push([[0],[,,,,,,,function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},function(e,t,a){e.exports=a(15)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(4),c=a.n(r),s=(a(13),a(7)),l=a.n(s),i=(a(14),a(5)),m=a(1);function u(e,t,a,n){var o;n&&(o=JSON.stringify(n),console.log("test"),console.log(n),console.log("jsonData"+o));var r=new XMLHttpRequest,c="http://localhost:8000/api".concat(t);r.responseType="json";var s=function(e){var t=null;if(document.cookie&&""!==document.cookie)for(var a=document.cookie.split(";"),n=0;n<a.length;n++){var o=a[n].trim();if(o.substring(0,e.length+1)===e+"="){t=decodeURIComponent(o.substring(e.length+1));break}}return t}("csrftoken");r.open(e,c),r.setRequestHeader("Content-Type","application/json"),s&&(r.setRequestHeader("HTTP_X_REQUESTED_WITH","XMLHttpRequest"),r.setRequestHeader("X-Requested-With","XMLHttpRequest"),r.setRequestHeader("X-CSRFToken",s)),r.onload=function(){a(r.response,r.status)},r.onerror=function(e){console.log(e),a({message:"The request was an error"},400)},r.send(o)}function p(e){var t=o.a.createRef(),a=Object(n.useState)([]),r=Object(m.a)(a,2),c=r[0],s=r[1],l=function(e,t){var a=Object(i.a)(c);201===t?(a.unshift(e),s(a)):(console.log(e),alert("An error occured please try again"))};return o.a.createElement("div",{className:e.className},o.a.createElement("div",{className:"col-12 mb-3"},o.a.createElement("form",{onSubmit:function(e){e.preventDefault();var a=t.current.value;u("POST","/posts/create/",l,{content:a}),t.current.value=""}},o.a.createElement("textarea",{ref:t,required:!0,className:"form-control",name:"post"}),o.a.createElement("button",{type:"submit",className:"btn btn-primary my-3"},"Post"))),o.a.createElement(d,{newPosts:c}))}function d(e){var t=Object(n.useState)([]),a=Object(m.a)(t,2),r=a[0],c=a[1],s=Object(n.useState)([]),l=Object(m.a)(s,2),p=l[0],d=l[1],f=Object(n.useState)(!1),E=Object(m.a)(f,2),v=E[0],g=E[1];return Object(n.useEffect)((function(){var t=Object(i.a)(e.newPosts).concat(r);t.length!==p.length&&d(t)}),[e.newPosts,p,r]),Object(n.useEffect)((function(){if(!1===v){u("GET","/posts/",(function(e,t){200===t?(c(e),g(!0)):alert("There was an error")}))}}),[r,v,g]),p.map((function(e,t){return o.a.createElement(b,{post:e,className:"my-5 py-5 border bg-white text-dark",key:"".concat(t,"-{item.id}")})}))}function f(e){var t=e.post,a=e.action,n=e.didPerformAction,r=t.likes?t.likes:0,c=e.className?e.className:"btn btn-primary btn-sm",s=a.display?a.display:"Action",l=function(e,t){console.log(e,t),200!==t&&201!==t||!n||n(e,t)},i="like"===a.type?"".concat(r," ").concat(s):s;return o.a.createElement("button",{className:c,onClick:function(e){e.preventDefault(),function(e,t,a){u("POST","/posts/action/",a,{id:e,action:t})}(t.id,a.type,l)}},i)}function E(e){var t=e.post;return t.parent?o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-11 mx-auto p-3 border rounded"},o.a.createElement("p",{className:"mb-0 text-muted small"},"Repost"),o.a.createElement(b,{className:" ",post:t.parent}))):null}function b(e){var t=e.post,a=Object(n.useState)(e.post?e.post:null),r=Object(m.a)(a,2),c=r[0],s=r[1],l=e.className?e.className:"col-10 mx-auto col-md-6",i=function(e,t){200===t&&s(e)};return o.a.createElement("div",{className:l},o.a.createElement("div",null,o.a.createElement("p",null,t.id," - ",t.content),o.a.createElement(E,{post:t})),c&&o.a.createElement("div",{className:"btn btn-group"},o.a.createElement(f,{post:c,didPerformAction:i,action:{type:"like",display:"Likes"}}),o.a.createElement(f,{post:c,didPerformAction:i,action:{type:"unlike",display:"Unlike"}}),o.a.createElement(f,{post:c,didPerformAction:i,action:{type:"repost",display:"Repost"}})))}var v=function(){return o.a.createElement("div",{className:"App"},o.a.createElement("header",{className:"App-header"},o.a.createElement("img",{src:l.a,className:"App-logo",alt:"logo"}),o.a.createElement("p",null,"Edit ",o.a.createElement("code",null,"src/App.js")," and save to reload."),o.a.createElement("div",null,o.a.createElement(p,null)),o.a.createElement("a",{className:"App-link",href:"https://reactjs.org",target:"_blank",rel:"noopener noreferrer"},"Learn React")))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var g=document.getElementById("root");g&&c.a.render(o.a.createElement(v,null),g);var h=document.getElementById("social-media");h&&c.a.render(o.a.createElement(p,null),h),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[8,1,2]]]);
//# sourceMappingURL=main.0638fd8f.chunk.js.map