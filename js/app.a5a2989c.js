(function(t){function e(e){for(var a,s,o=e[0],c=e[1],l=e[2],d=0,p=[];d<o.length;d++)s=o[d],Object.prototype.hasOwnProperty.call(r,s)&&r[s]&&p.push(r[s][0]),r[s]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);u&&u(e);while(p.length)p.shift()();return i.push.apply(i,l||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],a=!0,o=1;o<n.length;o++){var c=n[o];0!==r[c]&&(a=!1)}a&&(i.splice(e--,1),t=s(s.s=n[0]))}return t}var a={},r={app:0},i=[];function s(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=t,s.c=a,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)s.d(n,a,function(e){return t[e]}.bind(null,a));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=e,o=o.slice();for(var l=0;l<o.length;l++)e(o[l]);var u=c;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"candidates",attrs:{id:"app"}},[n("h2",{staticClass:"candidates__title"},[t._v("My candidates")]),t.loading?n("preloader"):t.error?n("p",{staticClass:"error"},[t._v(t._s(t.error))]):n("table",{staticClass:"candidates__table"},[n("thead",[n("tr",[n("th"),n("th",[t._v("Name")]),n("th",[t._v("Surname")]),n("th",[t._v("Occupation")]),n("th")])]),n("tbody",t._l(t.filteredData,(function(e,a){return n("tr",{key:a,staticClass:"person"},[n("td",{staticClass:"person__img"},[n("img",{attrs:{src:e.photoUrl,alt:"Avatar",width:"60",height:"60"}})]),n("td",[t._v(t._s(e.firstName))]),n("td",[t._v(t._s(e.lastName))]),n("td",[t._v(t._s(e.jobTitle))]),n("td",[n("button",{staticClass:"person__btn",on:{click:function(n){return t.setActive(e)}}},[t._v(" View candidate ")])])])})),0)]),n("Modal",{attrs:{data:t.activeCandidate},on:{"close-modal":function(e){t.activeCandidate={}}}})],1)},i=[],s=(n("4de4"),n("d3b7"),n("96cf"),n("bc3a")),o=n.n(s),c=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.data.id?n("div",{staticClass:"modal"},[n("div",{staticClass:"modal__inner person"},[n("button",{staticClass:"btn--close",on:{click:function(e){return t.$emit("close-modal")}}}),n("img",{staticClass:"person__img",attrs:{src:t.data.photoUrl,alt:"Avatar",width:"120",height:"120"}}),n("span",[n("b",[t._v("Candidate ID:")]),t._v(" "+t._s(t.data.id))]),n("span",[n("b",[t._v("Name:")]),t._v(" "+t._s(t.data.firstName))]),n("span",[n("b",[t._v("Surname:")]),t._v(" "+t._s(t.data.lastName))]),n("span",[n("b",[t._v("Occupation:")]),t._v(" "+t._s(t.data.jobTitle))]),n("button",{staticClass:"person__btn",on:{click:function(e){return t.$emit("close-modal")}}},[t._v(" close ")])])]):t._e()},l=[],u={name:"Modal",props:["data"],data:function(){return{status:!1}}},d=u,p=(n("e049"),n("2877")),f=Object(p["a"])(d,c,l,!1,null,"5933274f",null),v=f.exports,_=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},h=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"preloader"},[n("span",{staticClass:"preloader__inner"})])}],b={name:"preloader"},m=b,g=(n("bc2b"),Object(p["a"])(m,_,h,!1,null,null,null)),y=g.exports,C={name:"app",components:{Preloader:y,Modal:v},data:function(){return{candidates:[],activeCandidate:{},error:"",loading:!1}},mounted:function(){this.getCandidates()},computed:{filteredData:function(){return this.candidates.filter((function(t){return t.id%2===0}))}},methods:{getCandidates:function(){return regeneratorRuntime.async((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,this.loading=!0,t.next=4,regeneratorRuntime.awrap(o.a.get("https://cors-anywhere.herokuapp.com/https://fakedata.dev/users/v1/get_users"));case 4:this.candidates=t.sent.data,t.next=10;break;case 7:t.prev=7,t.t0=t["catch"](0),this.error="Error while fetching data. Try again";case 10:return t.prev=10,this.loading=!1,t.finish(10);case 13:case"end":return t.stop()}}),null,this,[[0,7,10,13]])},setActive:function(t){this.activeCandidate=t}}},w=C,O=(n("5c0b"),Object(p["a"])(w,r,i,!1,null,null,null)),j=O.exports;a["a"].config.productionTip=!1,new a["a"]({render:function(t){return t(j)}}).$mount("#app")},"5c0b":function(t,e,n){"use strict";var a=n("9c0c"),r=n.n(a);r.a},"9c0c":function(t,e,n){},b413:function(t,e,n){},bc2b:function(t,e,n){"use strict";var a=n("fdbe"),r=n.n(a);r.a},e049:function(t,e,n){"use strict";var a=n("b413"),r=n.n(a);r.a},fdbe:function(t,e,n){}});
//# sourceMappingURL=app.a5a2989c.js.map