(this["webpackJsonpsocialmedia-web"]=this["webpackJsonpsocialmedia-web"]||[]).push([[0],[,,,,,,,function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},,function(e,t,a){e.exports=a(16)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(5),c=a.n(r),s=(a(14),a(7)),i=a.n(s);a(15);function l(e,t,a,n){var o;n&&(o=JSON.stringify(n));var r=new XMLHttpRequest,c="http://social-media-michal.herokuapp.com/api".concat(t);r.responseType="json";var s=function(e){var t=null;if(document.cookie&&""!==document.cookie)for(var a=document.cookie.split(";"),n=0;n<a.length;n++){var o=a[n].trim();if(o.substring(0,e.length+1)===e+"="){t=decodeURIComponent(o.substring(e.length+1));break}}return t}("csrftoken");r.open(e,c),r.setRequestHeader("Content-Type","application/json"),s&&(r.setRequestHeader("X-Requested-With","XMLHttpRequest"),r.setRequestHeader("X-CSRFToken",s)),r.onload=function(){403===r.status&&("Authentication credentials were not provided."===r.response.detail&&(window.location.href="/login?showLoginRequired=true"));a(r.response,r.status)},r.onerror=function(e){a({message:"The request was an error"},400)},r.send(o)}function u(e){var t=e.post,a=e.action,n=e.didPerformAction,r=t.likes?t.likes:0,c=e.className?e.className:"btn btn-primary btn-sm",s=a.display?a.display:"Action",i=function(e,t){console.log(e,t),200!==t&&201!==t||!n||n(e,t)},u="like"===a.type?"".concat(r," ").concat(s):s;return o.a.createElement("button",{className:c,onClick:function(e){e.preventDefault(),function(e,t,a){l("POST","/posts/action/",a,{id:e,action:t})}(t.id,a.type,i)}},u)}var m=a(2),d=a(1);function p(e){var t=o.a.createRef(),a=e.didPost,n=function(e,t){201===t?a(e):(console.log(e),alert("An error occured please try again"))};return o.a.createElement("div",{className:e.className},o.a.createElement("form",{onSubmit:function(e){e.preventDefault();var a=t.current.value;l("POST","/posts/create/",n,{content:a}),t.current.value=""}},o.a.createElement("textarea",{ref:t,required:!0,className:"form-control",name:"post"}),o.a.createElement("button",{type:"submit",className:"btn btn-primary my-3"},"Post")))}var f=a(8);function b(e){var t=e.post;return t.parent?o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-11 mx-auto p-3 border rounded"},o.a.createElement("p",{className:"mb-0 text-muted small"},"Repost"),o.a.createElement(v,{hideActions:!0,className:" ",post:t.parent}))):null}function v(e){var t=e.post,a=e.didRepost,r=e.hideActions,c=Object(n.useState)(e.post?e.post:null),s=Object(d.a)(c,2),i=s[0],l=s[1],m=e.className?e.className:"col-10 mx-auto col-md-6",p=window.location.pathname.match(Object(f.a)(/([0-9]+)/,{postid:1})),v=p?p.groups.postid:-1,E="".concat(t.id)==="".concat(v),h=function(e,t){200===t?l(e):201===t&&a&&a(e)};return o.a.createElement("div",{className:m},o.a.createElement("div",null,o.a.createElement("p",null,t.id," - ",t.content),o.a.createElement(b,{post:t})),o.a.createElement("div",{className:"btn btn-group"},i&&!0!==r&&o.a.createElement(o.a.Fragment,null,o.a.createElement(u,{post:i,didPerformAction:h,action:{type:"like",display:"Likes"}}),o.a.createElement(u,{post:i,didPerformAction:h,action:{type:"unlike",display:"Unlike"}}),o.a.createElement(u,{post:i,didPerformAction:h,action:{type:"repost",display:"Repost"}})),!0===E?null:o.a.createElement("button",{className:"btn btn-outline-primary btn-sm",onClick:function(e){e.preventDefault(),window.location.href="/".concat(t.id)}},"View")))}function E(e){var t=Object(n.useState)([]),a=Object(d.a)(t,2),r=a[0],c=a[1],s=Object(n.useState)([]),i=Object(d.a)(s,2),u=i[0],p=i[1],f=Object(n.useState)(!1),b=Object(d.a)(f,2),E=b[0],h=b[1];Object(n.useEffect)((function(){var t=Object(m.a)(e.newPosts).concat(r);t.length!==u.length&&p(t)}),[e.newPosts,u,r]),Object(n.useEffect)((function(){if(!1===E){!function(e,t){var a="/posts/";e&&(a="/posts/?username=".concat(e)),l("GET",a,t)}(e.username,(function(e,t){200===t?(c(e),h(!0)):alert("There was an error")}))}}),[r,E,h,e.username]);var g=function(e){var t=Object(m.a)(r);t.unshift(e),c(t);var a=Object(m.a)(u);a.unshift(u),p(a)};return u.map((function(e,t){return o.a.createElement(v,{post:e,didRepost:g,className:"my-5 py-5 border bg-white text-dark",key:"".concat(t,"-{item.id}")})}))}function h(e){var t=Object(n.useState)([]),a=Object(d.a)(t,2),r=a[0],c=a[1],s="false"!==e.canPost;return o.a.createElement("div",{className:e.className},!0===s&&o.a.createElement(p,{didPost:function(e){var t=Object(m.a)(r);t.unshift(e),c(t)},className:"col-12 mb-3"}),o.a.createElement(E,Object.assign({newPosts:r},e)))}var g=function(){return o.a.createElement("div",{className:"App"},o.a.createElement("header",{className:"App-header"},o.a.createElement("img",{src:i.a,className:"App-logo",alt:"logo"}),o.a.createElement("p",null,"Edit ",o.a.createElement("code",null,"src/App.js")," and save to reload."),o.a.createElement("div",null,o.a.createElement(h,null)),o.a.createElement("a",{className:"App-link",href:"https://reactjs.org",target:"_blank",rel:"noopener noreferrer"},"Learn React")))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var w=document.getElementById("root");w&&c.a.render(o.a.createElement(g,null),w);var y=document.getElementById("social-media");y&&c.a.render(o.a.createElement(h,null),y),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[9,1,2]]]);
//# sourceMappingURL=main.f9ffc1df.chunk.js.map