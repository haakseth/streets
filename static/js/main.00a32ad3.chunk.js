(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{17:function(e,t,n){e.exports=n(31)},23:function(e,t,n){},24:function(e,t,n){},31:function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r),a=n(11),c=n.n(a),i=(n(23),n(24),n(2)),u=n(3),s=n.n(u),d=(n(25),n(1)),l=n(9),f=n(4),p=n(5),b=n(14);function v(){var e=Object(f.a)(["\n      background-color: #ed6498;\n      color: white;\n      box-shadow: 0 2px 6px 0 #ed649880;\n    "]);return v=function(){return e},e}function m(){var e=Object(f.a)(["\n  cursor: pointer;\n  padding: 4px 12px;\n  border-radius: 3px;\n  font-weight: 600;\n  background-color: hsl(210, 36%, 96%);\n  color: #000;\n  transition: 0.3s;\n  margin: 2px 0;\n  box-shadow: 4px 0 12px 0 #ed649800;\n  ","\n"]);return m=function(){return e},e}function h(e){var t=e.street,n=e.hovered,a=e.setHoveredStreet,c=e.onStreetClick,i=Object(r.useRef)(null);return Object(r.useEffect)(function(){n&&setTimeout(function(){Object(b.a)(i.current,{scrollMode:"if-needed",behavior:"auto",block:"nearest"})},100)},[n]),o.a.createElement(g,{ref:i,hovered:n,onMouseEnter:function(){return a(t)},key:t,onClick:function(){return c(t)},street:t},t)}var g=p.b.div(m(),function(e){return e.hovered&&Object(p.a)(v())});function w(e,t,n){var o=Object(r.useCallback)(function(){var r=e.findIndex(function(e){return matchMedia(e).matches});return t[r]||n},[n,e,t]),a=Object(r.useState)(o),c=Object(i.a)(a,2),u=c[0],s=c[1];return Object(r.useEffect)(function(){var e=function(){return s(o)};return window.addEventListener("resize",e),function(){return window.removeEventListener("resize",e)}},[o]),u}function O(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function j(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?O(n,!0).forEach(function(t){Object(d.a)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):O(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function y(e){var t=e.streets,n=e.hoveredStreet,r=e.setHoveredStreet,a=e.onStreetClick,c=e.toggled,i=w(["(max-width: 600px)"],[!0],!1),u={boxSizing:"border-box",position:"fixed",right:0,bottom:0,top:i?"unset":0,height:i?"40vh":"unset",left:i?0:"unset",backgroundColor:"hsl(210, 36%, 96%)",zIndex:3,width:i?"100vw":230,display:"flex",flexDirection:"column",boxShadow:"0 4px 12px 0 rgba(16, 42, 67, 0.2)",overflowY:"auto",padding:"1em 0.5em",opacity:.9},s=Object(l.b)({transform:c?"translate3d(0%, 0%, 0)":i?"translate3d(0%, 100%, 0)":"translate3d(100%, 0%, 0)"});return o.a.createElement(l.a.div,{style:j({},u,{},s),toggled:c},t.map(function(e){return o.a.createElement(h,{hovered:n===e,setHoveredStreet:function(){return r(e)},key:e,onStreetClick:function(){return a(e)},street:e})}))}function x(){var e=Object(r.useRef)(),t=Object(r.useState)(void 0),n=Object(i.a)(t,2),a=n[0],c=n[1],d=Object(r.useState)([]),l=Object(i.a)(d,2),f=l[0],p=l[1],b=Object(r.useState)(""),v=Object(i.a)(b,2),m=v[0],h=v[1],g=w(["(max-width: 600px)"],[!0],!1),O=function(){var e=a.queryRenderedFeatures({layers:["road"]}),t=new Set,n=e.map(function(e){return e.properties.name}).filter(function(e){return!(!e||t.has(e))&&(t.add(e),!0)}).sort(function(e,t){return e>t?1:-1});p(n)};Object(r.useEffect)(function(){a&&(O(),a.on("mousemove",function(e){var t=a.queryRenderedFeatures(e.point,{layers:["road"]});t.length?(a.getCanvas().style.cursor="pointer",h(t[0].properties.name)):a.getCanvas().style.cursor=""}),a.on("moveend",O))},[a]),Object(r.useEffect)(function(){a||function(e){var t=e.setMap,n=e.mapContainer;s.a.accessToken="pk.eyJ1IjoiaGFha3NldGgiLCJhIjoiY2l5NGg2Y3ljMDAxaTJ5bHF5aXF0NHRuciJ9.aVkFfSGQhUYb9bmf4JtkTg";var r=new s.a.Map({container:n.current,style:"mapbox://styles/haakseth/ck2kw48j83sjy1cpohx5kqxou",center:[12.57,55.67],zoom:12.5,maxZoom:16});r.on("load",function(){r.addLayer({id:"hovered-street",source:"composite","source-layer":"road",type:"line",paint:{"line-color":"#ed6498","line-width":["interpolate",["exponential",2],["zoom"],5,.5,12,3,18,30]},filter:["==","name",""]},"road-label"),r.addControl(new u.NavigationControl({showCompass:!1}),"top-left"),t(r)})}({setMap:c,mapContainer:e})},[a]),Object(r.useEffect)(function(){a&&a.setFilter("hovered-street",["==","name",m||""])},[m]);return o.a.createElement("div",{style:{position:"absolute",zIndex:1,top:0,bottom:0,left:0,right:0,overflow:"none"},ref:function(t){return e.current=t}},o.a.createElement(y,{toggled:f.length,streets:f,hoveredStreet:m,setHoveredStreet:h,onStreetClick:function(e){var t=a.queryRenderedFeatures({layers:["road"]}).filter(function(t){return t.properties.name===e});if(t.length)try{var n=t[0].geometry.coordinates,r=n.reduce(function(e,t){return e.extend(t)},new s.a.LngLatBounds(n[0],n[0]));a.fitBounds(r,{padding:g?0:{top:200,bottom:200,right:430,left:200}})}catch(o){}}}))}var k=function(){return o.a.createElement("div",{className:"App"},o.a.createElement(x,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(k,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[17,1,2]]]);
//# sourceMappingURL=main.00a32ad3.chunk.js.map