(this.webpackJsonppixel_battle=this.webpackJsonppixel_battle||[]).push([[0],{12:function(e,t,n){},14:function(e,t,n){"use strict";n.r(t);var o=n(0),a=n.n(o),r=n(4),c=n.n(r),i=(n(12),n(5)),l=n(1);var s=function(e){var t=e.index,n=e.size,o=e.active,r=e.onSelect,c=e.color,i={width:n,height:n,borderColor:o?"blue":c||"white",backgroundColor:c||"white"};return a.a.createElement("div",{className:"FieldItem",onClick:function(e){return r(e,t)},style:i})};var u=function(e){for(var t=e.active,n=e.onSelect,r=e.fieldRef,c=e.colors,i=e.loading,u=Object(o.useState)(700),f=Object(l.a)(u,1)[0],d={width:f+2,height:f+2},v=[],h=0;h<Math.pow(f/10,2);h++)v.push(a.a.createElement(s,{key:h,size:10,onSelect:n,index:h,active:h===t,color:c[h]}));return a.a.createElement("div",{className:"Field",ref:r,style:d},i?"Loading":v)};var f=function(e){var t=e.index,n=e.active,o=e.onSelect,r={backgroundColor:e.color,borderColor:n?"blue":"white"};return a.a.createElement("div",{className:"PaletteItem",onClick:function(e){var n=e.target.style.backgroundColor;o(t,n)},style:r})};var d=function(e){var t=e.active,n=e.onSelect,o=function(){for(var e=[],o=0,r=0;o<=4;o++)for(var c=0;c<=4;c++)for(var i=0;i<=4;i++,r++){var l="rgba(".concat(Math.round(255*o/4),", ").concat(Math.round(255*c/4),", ").concat(Math.round(255*i/4),")");e.push(a.a.createElement(f,{key:r,index:r,onSelect:n,active:r===t,color:l}))}return e}();return a.a.createElement("div",{className:"Palette"},o)};var v=function(e){var t=e.onSubmit;return a.a.createElement("button",{onClick:t,className:"btn btn-success"},"\u041e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c")},h=n(2),m=n.n(h),b=n(6);function p(){return(p=Object(b.a)(m.a.mark((function e(){var t,n,o,a=arguments;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=a.length>0&&void 0!==a[0]?a[0]:"",n=a.length>1&&void 0!==a[1]?a[1]:{},e.next=4,fetch(t,{method:"POST",cache:"no-cache",headers:{"Content-Type":"application/json"},redirect:"follow",referrerPolicy:"no-referrer",body:JSON.stringify(n)});case 4:return o=e.sent,e.next=7,o.json();case 7:return e.abrupt("return",e.sent);case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var g=function(){var e=Object(o.useState)({}),t=Object(l.a)(e,2),n=t[0],r=t[1],c=Object(o.useState)({}),s=Object(l.a)(c,2),f=s[0],h=s[1],m=Object(o.useState)({}),b=Object(l.a)(m,2),g=b[0],x=b[1],j=Object(o.useState)(!0),w=Object(l.a)(j,2),E=w[0],S=w[1],y=Object(o.createRef)();return Object(o.useEffect)((function(){fetch("/cells.json").then((function(e){return e.json()})).then((function(e){var t={};e.forEach((function(e){t[e.ind]=e.color})),x(t),S(!1)})).catch((function(e){console.log(e),S(!1)}))}),[]),a.a.createElement("div",{className:"App"},a.a.createElement("div",{className:"container"},a.a.createElement("div",{className:"row mb-2"},a.a.createElement(u,{active:n.index,onSelect:function(e,t){var o={index:t,x:e.target.offsetTop-1-y.current.offsetTop,y:e.target.offsetLeft-1-y.current.offsetLeft};t===n.index?r({}):r(o)},fieldRef:y,colors:g,loading:E}),a.a.createElement(d,{active:f.index,onSelect:function(e,t){var n={index:e,color:t};e===f.index?h({}):h(n)}})),a.a.createElement("div",{className:"row"},a.a.createElement(v,{onSubmit:function(){var e={color:f.color,x:n.x,y:n.y};console.log(e),function(){return p.apply(this,arguments)}("/check",e).then((function(e){console.log(e)})),x(Object.assign(Object(i.a)({},n.index,f.color),g)),h({}),r({})}}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(g,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},7:function(e,t,n){e.exports=n(14)}},[[7,1,2]]]);
//# sourceMappingURL=main.065eb05f.chunk.js.map