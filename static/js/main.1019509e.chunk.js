(this["webpackJsonpbatman-tv-series"]=this["webpackJsonpbatman-tv-series"]||[]).push([[0],{106:function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),r=t(20),i=t.n(r),o=(t(56),t(57),t(12)),m=t(13),l=t(15),s=t(14),u=t(16),d=t(7),h=function(e){function a(){return Object(o.a)(this,a),Object(l.a)(this,Object(s.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){return c.a.createElement("div",{className:"header"},c.a.createElement(d.b,{to:"/"},c.a.createElement("img",{src:" https://i.ebayimg.com/images/g/HgQAAOSwhRxXKaqA/s-l400.jpg",alt:"logo",className:"logo"})))}}]),a}(n.Component),v=t(22);function p(e){var a=e.item;return c.a.createElement("div",{className:"card"},c.a.createElement(d.b,{to:"/detail/".concat(a.show.id)},c.a.createElement("div",{className:"banner"},c.a.createElement("img",{src:a.show.image.medium,alt:a.show.image.name}))),c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"name"},a.show.name),c.a.createElement("hr",null),c.a.createElement("div",{className:"language"},a.show.genres.map((function(e){return c.a.createElement("div",{key:Math.random()},e)}))),a.show.rating.average?c.a.createElement("div",{className:"raiting"},"Raiting: ",a.show.rating.average):c.a.createElement("div",{className:"raiting"},"Raiting not found"),c.a.createElement("div",{className:"premiered"}," ",a.show.premiered," ")))}var b=function(e){function a(e){var t;return Object(o.a)(this,a),t=Object(l.a)(this,Object(s.a)(a).call(this,e)),e.fetchTvShows(),t}return Object(u.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){var e=this.props;return c.a.createElement("div",{className:"main-container"},e.tvShows.map((function(e){return c.a.createElement(p,{key:e.show.id,item:e})})))}}]),a}(n.Component),E=Object(v.b)((function(e){return{tvShows:e.reducer.data}}),{fetchTvShows:function(){return function(e){fetch("https://api.tvmaze.com/search/shows?q=batman").then((function(e){return e.json()})).then((function(a){return e({type:"FETCH_TV_SHOWS",data:a})}))}}})(b),f=t(23),g=t(30),j=t(48),O=t.n(j),w=t(49),N=t.n(w);t(105);var y=function(e){var a=Object(n.useState)(!0),t=Object(g.a)(a,2),r=t[0],i=t[1],o=Object(n.useState)({}),m=Object(g.a)(o,2),l=m[0],s=m[1],u=c.a.createElement("div",{className:"detail-main-container"},c.a.createElement("div",{className:"detail-banner"},c.a.createElement("img",{className:"detail-banner",src:l.image&&l.image.original,alt:l.name})),c.a.createElement("div",{className:"detail-name"}," ",l.name," "),c.a.createElement("hr",null),c.a.createElement("div",{className:"summary"}," ",O()(l.summary)," "));Object(n.useEffect)((function(){d()}),[]);var d=function(){fetch("https://api.tvmaze.com/shows/".concat(e.match.params.id),{method:"GET"}).then((function(e){return e.json()})).then((function(e){return s(Object(f.a)({},e))}),i(!1))};return c.a.createElement("div",null,r?c.a.createElement(N.a,{style:{marginLeft:"450px"},type:"bars",color:"black"}):u)},k=t(9),S=function(e){function a(){return Object(o.a)(this,a),Object(l.a)(this,Object(s.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){return c.a.createElement("div",{className:"notFound"},c.a.createElement(d.b,{to:"/"},c.a.createElement("img",{className:"notFoundImage",src:"https://purepng.com/public/uploads/medium/purepng.com-batman-logobatmansuperherocomicdc-comicsbob-kanebat-manbruce-wayne-17015285234526j571.png",alt:"notFound"}),c.a.createElement("div",null,c.a.createElement("h1",{className:"notFoundTitle"},"Not Found"))))}}]),a}(n.Component);var T=function(){return c.a.createElement("div",{className:"App"},c.a.createElement(h,null),c.a.createElement(k.c,null,c.a.createElement(k.a,{exact:!0,path:"/",component:E}),c.a.createElement(k.a,{exact:!0,path:"/detail/:id",component:y}),c.a.createElement(k.a,{component:S})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var F=t(10),x=t(50),C={data:[]},H=Object(F.c)({reducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:C,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"FETCH_TV_SHOWS":return Object(f.a)({},e,{data:a.data});default:return e}}}),A=[x.a],W={};var _=Object(F.d)(H,W,F.a.apply(void 0,A));i.a.render(c.a.createElement(d.a,null,c.a.createElement(v.a,{store:_},c.a.createElement(T,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},51:function(e,a,t){e.exports=t(106)},56:function(e,a,t){},57:function(e,a,t){},87:function(e,a){}},[[51,1,2]]]);
//# sourceMappingURL=main.1019509e.chunk.js.map