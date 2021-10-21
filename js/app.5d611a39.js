(function(t){function e(e){for(var a,i,r=e[0],l=e[1],c=e[2],p=0,d=[];p<r.length;p++)i=r[p],Object.prototype.hasOwnProperty.call(s,i)&&s[i]&&d.push(s[i][0]),s[i]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(t[a]=l[a]);u&&u(e);while(d.length)d.shift()();return o.push.apply(o,c||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],a=!0,r=1;r<n.length;r++){var l=n[r];0!==s[l]&&(a=!1)}a&&(o.splice(e--,1),t=i(i.s=n[0]))}return t}var a={},s={app:0},o=[];function i(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=t,i.c=a,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)i.d(n,a,function(e){return t[e]}.bind(null,a));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/test-calendar/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],l=r.push.bind(r);r.push=e,r=r.slice();for(var c=0;c<r.length;c++)e(r[c]);var u=l;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("h2",{staticClass:"title"},[t._v("Планирование")]),n("Main")],1)},o=[],i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"main"},[n("div",{staticClass:"calendar"},[n("v-calendar",{staticClass:"custom-calendar",attrs:{"is-expanded":"",masks:t.masks,attributes:t.fullAttributes,"title-position":"left","trim-weeks":""},on:{"update:to-page":t.onPageChange},scopedSlots:t._u([{key:"day-content",fn:function(e){var a=e.day,s=e.attributes;return[n("div",{staticClass:"day"},[n("span",{staticClass:"day-label"},[t._v(t._s(a.day))]),n("div",{staticClass:"day-text"},[t.holidays.includes(a.day+"."+a.month)||1!==a.weekday&&7!==a.weekday?t._l(s,(function(e){return n("p",{key:e.key,staticClass:"day-event",style:{background:t.colors[e.customData.title]}},[t._v(" "+t._s(e.customData.title)+" ")])})):n("p",{staticClass:"day-event"},[t._v(" Выходной ")])],2)])]}},{key:"header-left-button",fn:function(){return[n("button",{staticClass:"back-button"},[n("img",{attrs:{src:t.backButtonImg,alt:"Прошлый месяц"}})])]},proxy:!0},{key:"header-right-button",fn:function(){return[n("button",{staticClass:"next-button"},[n("img",{attrs:{src:t.nextButtonImg,alt:"Следующий месяц"}})])]},proxy:!0}])})],1),n("div",{staticClass:"employee"},[n("div",{staticClass:"employee__name"},[n("v-select",{staticClass:"employee__select",attrs:{options:t.options,clearable:!1},on:{input:t.onEmployeeChange},scopedSlots:t._u([{key:"selected-option",fn:function(e){var a=e.label,s=e.img;return[n("div",{staticClass:"selected-option"},[n("div",{staticClass:"selected-option__img"},[n("img",{attrs:{src:s,alt:"Фото сотрудника"}})]),n("p",[t._v(t._s(a))])])]}},{key:"open-indicator",fn:function(e){var a=e.attributes;return[n("img",t._b({staticClass:"open-indicator",attrs:{src:t.openIconImg}},"img",a,!1))]}}]),model:{value:t.selectedEmployee,callback:function(e){t.selectedEmployee=e},expression:"selectedEmployee"}})],1),n("div",{staticClass:"employee__data"},[n("div",{staticClass:"employee__trips"},[n("p",{staticClass:"employee__duration"},[t._v(t._s(t.getTripsCount))]),n("p",[t._v(t._s(t._f("formatWord")(t.getTripsCount,["поездка","поездки","поездок"])))])]),n("div",{staticClass:"employee__days"},[n("p",{staticClass:"employee__duration"},[t._v(t._s(t.getTripsDaysCount))]),n("p",[t._v(t._s(t._f("formatWord")(t.getTripsDaysCount,["день","дня","дней"]))+" командировки")])])])])])},r=[],l=n("2909"),c=n("3835"),u=(n("d3b7"),n("d81d"),n("b0c0"),n("ac1f"),n("1276"),n("99af"),n("159b"),n("7db0"),n("9989")),p=n.n(u),d=n("74ff"),f=n.n(d),A=n("da36"),m=n.n(A),y=n("cedd"),h=n.n(y),g={0:m.a,1:h.a},b=n("de37"),v=n.n(b),C=n("e931"),j=n.n(C),k={data:function(){return{employeesInfo:[],selectedEmployee:{},colors:{},holidays:[],displayedYear:null,displayedMonth:null,backButtonImg:p.a,nextButtonImg:f.a,openIconImg:j.a,masks:{weekdays:"WWWW"},attributes:[]}},mounted:function(){var t=this;this.fetchEmployees(),this.onEmployeeChange(),fetch("./API/colors.json").then((function(t){return t.json()})).then((function(e){t.colors=e})),fetch("./API/holidays.json").then((function(t){return t.json()})).then((function(e){t.holidays=e}))},computed:{options:function(){return this.employeesInfo.map((function(t){return{label:t.name,id:t.id,img:g[t.id]||v.a}}))},fullHolidays:function(){var t=this;return this.holidays.map((function(e){var n=e.split("."),a=Object(c["a"])(n,2),s=a[0],o=a[1];return{customData:{title:"Праздник"},dates:new Date(t.displayedYear,o-1,s)}}))},fullAttributes:function(){return[].concat(Object(l["a"])(this.attributes),Object(l["a"])(this.fullHolidays))},getTripsCount:function(){var t=this,e=0;return this.attributes.forEach((function(n){var a=n.dates[0].start.getMonth()+1,s=n.dates[0].end.getMonth()+1;t.displayedMonth>=a&&t.displayedMonth<=s&&e++})),e},getTripsDaysCount:function(){var t=this,e=0;return this.attributes.forEach((function(n){var a=n.dates[0].start,s=n.dates[0].end,o=new Date(a);while(o<=s){o.getMonth()+1===t.displayedMonth&&e++;var i=o.setDate(o.getDate()+1);o=new Date(i)}})),e}},filters:{formatWord:function(t,e){t=Math.abs(t)%100;var n=t%10;return t>10&&t<20?e[2]:n>1&&n<5?e[1]:1===n?e[0]:e[2]}},methods:{onPageChange:function(t){this.displayedYear=t.year,this.displayedMonth=t.month},fetchEmployees:function(){var t=this;fetch("./API/employees.json").then((function(t){return t.json()})).then((function(e){t.employeesInfo=e.employees,t.selectedEmployee.label||(t.selectedEmployee=t.options[0]),t.onEmployeeChange()}))},onEmployeeChange:function(){if(this.employeesInfo.length){var t=this.getEmployeeById(this.selectedEmployee.id).businessTrips;this.attributes=t.map((function(t,e){var n=t.date.start.split("."),a=t.date.end.split("."),s=Object(c["a"])(n,3),o=s[0],i=s[1],r=s[2],l=Object(c["a"])(a,3),u=l[0],p=l[1],d=l[2];return{key:e,customData:{title:t.cityName},dates:[{start:new Date(r,i-1,o),end:new Date(d,p-1,u)}]}}))}},getEmployeeById:function(t){return this.employeesInfo.find((function(e){return e.id===t}))}}},S=k,w=(n("8fae"),n("2877")),I=Object(w["a"])(S,i,r,!1,null,"46fb227c",null),B=I.exports,O={name:"App",components:{Main:B}},M=O,E=(n("5c0b"),Object(w["a"])(M,s,o,!1,null,null,null)),x=E.exports,R=n("5887"),_=n.n(R),J=n("4a7a"),P=n.n(J);n("6dfc");a["default"].component("v-select",P.a),a["default"].use(_.a,{}),a["default"].config.productionTip=!1,new a["default"]({render:function(t){return t(x)}}).$mount("#app")},"5c0b":function(t,e,n){"use strict";n("9c0c")},"74ff":function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAK6SURBVHgBxZjNbhJRFMf/d6iW6KIQjSYmptR9C8SlJkJ0rybuhSdwuqnsgJW0LqRrF+ITtD6AAZ+gIyZuO92YuJK6KdjOXO+5w/BRGD7u3MJvM8PMwPw459wz9w6DCm+PEmCRDMBTAFsTRxLyOEcLjJ/AZQ0wx8Ju2sacsJmvNI9iiK68EXfN9QSmY4MZJbjn32aVmy7ki3BuiqtjUIaV0L7YRzXdmnjVpJMiNRkgchBOZAgbnOWxu9kIusAI/GrhR1HUSV2jDCFqj9flbwfAAmXAS7hSRAorm+WRo1iKTBeXb2MvWUWg0E7zhUjiARYJZ9nBmuoLeb2ljtmHtC5stJ20P/r6RU39YvEykPdcNUz/gxchLzrHWBbU4TvOBkXJi5B8DCwRai3XjRzt+ikrYtkY7DltWJh0fXp1H/affyh//Q0ttJ34CngkNccjtkcsGkHmwQ0k4l4j1yJ1M/LEEK08BQVabQfZj8cyQqVnd1B8ehehOecbQkh9qJOMVikDCVHUbB0h0CvF1gzZA0JCMoc//8r93MOYrC9VqIZOERKKivnodi9aVF9q8FOKkI0QkAylajB1yriwRYSYDUW0yhDMsAzRjA6hQCJ+DebjW/pkiM6F5bXEQpOmHRnMSepeFK0zV48M0EBlK9t9uDpfoID1q61LRjjwGm08oTPUxDIn9PBXh9t4l/zcF/Jma/tYFgwlf7c/Y+y4VWm6cPrRGRaiKDnuSywSKhPuZgcPDS8U36ctuTRZmBCtYofX/KMrV1oncV7GlePksbc10gODp2Y7300xrfwA3VCamLuNSro27vS0lw1iemuIpskS0EMD3MlPejUz2+S10MyJv1ZUFpPFi/LlZbO6EAbF8BqzPGZkapgYJKK/jakVPUI+9BJrFSlEjCQcxMWN17sSJ3L2wB0bHVjTXk6N4z/rcB5tdaQriwAAAABJRU5ErkJggg=="},"8fae":function(t,e,n){"use strict";n("9955")},9955:function(t,e,n){},9989:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACUAAAAkCAYAAAAOwvOmAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAMVSURBVHgBxZhNaxNBGMf/s69J80ZR2qq0ClYPFrHgQZAcchAl0IqXehFEL3r2G+QT1HMPij0Jhl70IoiYkxe9eLAHqRL1IFZESZNu9t2ZSdPGZtPszibN75LZ3SH7m2fenlkCIXyCczdV5CBj9qSE5jaB2ST8kae4qH/yaMlBpeJAABKp9sV7Kk44CZhEDVW/YfgYky1Y380oguGkikUdxmQSuixBFN238XymAZS8flX7SJUkXP+WCh2ZMGRrBsplA2JSSzIKqUys6PSCR+1Rnb7eD3os9RTKq9mhCDFY5At3c3zChJOiXcaEUslokyAqrMFX7meDxPZJ0QqF6vCF2siujIXFZNft/64WfozRUTa4QR0GL61gOmejWt2dlR2Rot1muwmMhFPpzqu9SF2dplGSFYwCRSI4O+VhY8NllzuRolEimo5Roh7T2sWWVPH34Y6jINgyUSpxn5aU2tAwCAxrEjVzmf+KUKlqe1KD2EaYiOM9pLN3nuYHeYiguXJLaumZjLi0hUCmQMgqMtoaRLBktSX1az3eQrlfKK2tQpSdRVvC5kfx/W2QQgzH2pGK9Sdengv5qNMV7yUGhISJub5JV08yiTUeIYI0j5jorGujaH5LqgBxKQbrMibGIhZXzKvxFV2mubOP8xd0OJL4gNfkD7B52/K0ifO0/IbesxCVTMrB+jurNaY8yUVcdiOGWTrGrkGICd6QlpSdit6qnmLSA+F1ag78xNPuMoIbd3IwhpT+hoHn7Y+3WLEt4WPbtTFK9BmzXdyLzOXTBpJuvJkoiiu7KJesbqkSPST+HDcxCvLHtzovu5eB4q0svMThZaABh9PugX3pTJ2H8zDwLTPotNydtrDF9Paija8NFZI/vNlo1iy8ftoIehT8Uja+WD8PK2Kq3ESlXO/1uN/WQujnnySODujoZfLZTYWeNHHgS8PAEvpX9OtLOkbazKLzYsWgW5Hfr2q0TbhQUqB91uElFX7k7sffpgNpwsbb5WYYGTGpTpbol5kv4xK0PwqOjBNYWQKt5sPVXWyaHt6vOFFEOvkHJ00JWllv484AAAAASUVORK5CYII="},"9c0c":function(t,e,n){},cedd:function(t,e,n){t.exports=n.p+"img/2.6b812972.jpg"},da36:function(t,e,n){t.exports=n.p+"img/1.75b2870d.jpeg"},de37:function(t,e,n){t.exports=n.p+"img/user.6843ac29.jpg"},e931:function(t,e,n){t.exports=n.p+"img/open-icon.268ef897.svg"}});
//# sourceMappingURL=app.5d611a39.js.map