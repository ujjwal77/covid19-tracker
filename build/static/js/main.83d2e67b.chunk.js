(this.webpackJsonpujjwal=this.webpackJsonpujjwal||[]).push([[0],{43:function(e,t,a){e.exports=a.p+"static/media/infected.0b3c1c87.webp"},44:function(e,t,a){e.exports=a.p+"static/media/restored.912ef135.webp"},45:function(e,t,a){e.exports=a.p+"static/media/death.6aeb29c4.webp"},52:function(e,t,a){e.exports=a(66)},57:function(e,t,a){},59:function(e,t,a){},60:function(e,t,a){},64:function(e,t,a){},66:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(7),o=a.n(r),s=(a(57),a(29)),i=a.n(s),l=a(37),u=a(27),m=a(99),d=a(100),f=a(101),p=(a(59),a(46)),h=a(93),v=a(97),E=a(98);a(60);var b=function(e){var t=e.title,a=e.cases,n=e.total,r=e.image,o=e.isRed;return Object(p.a)(e,["title","cases","total","image","isRed"]),c.a.createElement(h.a,{className:"infoBox"},c.a.createElement(v.a,null,c.a.createElement("img",{className:"",src:r,height:100,width:100,alt:"Card image cap"}),c.a.createElement(E.a,{className:"infoBox__title",color:"primary"},t),c.a.createElement("h3",{className:"infoBox__cases ".concat(!o&&"infoBox__cases--green"),color:"textSecondary"},"+",a),c.a.createElement(E.a,{className:"infoBox__total",color:"textSecondary"},n," Total")))},w=(a(64),a(103)),g=a(102);var j=function(e){var t=e.center,a=e.zoom;return c.a.createElement("div",{className:"map"},c.a.createElement(w.a,{center:t,zoom:a},c.a.createElement(g.a,{url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",attribution:'\xa9 <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'})))},O=(a(65),a(43)),y=a.n(O),_=a(44),x=a.n(_),N=a(45),S=a.n(N);var k=function(){var e=Object(n.useState)([]),t=Object(u.a)(e,2),a=t[0],r=t[1],o=Object(n.useState)("worldwide"),s=Object(u.a)(o,2),p=s[0],h=s[1],v=Object(n.useState)({}),E=Object(u.a)(v,2),w=E[0],g=E[1],O=Object(n.useState)({lat:34.80746,lng:-40.4796}),_=Object(u.a)(O,2),N=_[0],k=_[1],B=Object(n.useState)(3),R=Object(u.a)(B,2),C=R[0],I=R[1];Object(n.useEffect)((function(){fetch("https://disease.sh/v3/covid-19/all").then((function(e){return e.json()})).then((function(e){g(e)}))}),[]),Object(n.useEffect)((function(){(function(){var e=Object(l.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:fetch("https://disease.sh/v3/covid-19/countries").then((function(e){return e.json()})).then((function(e){var t=e.map((function(e){return{name:e.country,value:e.countryInfo.iso2}}));r(t)}));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var z=function(){var e=Object(l.a)(i.a.mark((function e(t){var a,n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.target.value,n="worldwide"===a?"https://disease.sh/v3/covid-19/all":"https://disease.sh/v3/covid-19/countries/".concat(a),e.next=4,fetch(n).then((function(e){return e.json()})).then((function(e){h(a),g(e),k([e.countryInfo.lat,e.countryInfo.long]),I(4)}));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return c.a.createElement("div",{className:"app"},c.a.createElement("div",{className:"app__left"},c.a.createElement("div",{className:"app__header"},c.a.createElement("h1",null,"COVID-19 Tracker"),c.a.createElement(m.a,{className:"app__dropdown"},c.a.createElement(d.a,{variant:"outlined",onChange:z,value:p},c.a.createElement(f.a,{value:"worldwide"},c.a.createElement("b",null,"WorldWide")),a.map((function(e){return c.a.createElement(f.a,{value:e.value},e.name)}))))),c.a.createElement("div",{className:"app__info"},c.a.createElement(b,{isRed:!0,title:"Cases",cases:w.todayCases,total:w.cases,image:y.a}),c.a.createElement(b,{title:"Recovered",cases:w.todayRecovered,total:w.recovered,image:x.a}),c.a.createElement(b,{isRed:!0,title:"Deaths",cases:w.todayDeaths,total:w.deaths,image:S.a})),c.a.createElement(j,{center:N,zoom:C})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(k,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[52,1,2]]]);
//# sourceMappingURL=main.83d2e67b.chunk.js.map