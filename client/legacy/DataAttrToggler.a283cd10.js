import{_ as t,a,i as c,s as n,b as s,S as e,e as o,y as r,q as i,d as u,f,z as l,r as h,g as v,h as d,P as p,W as y,j as k,v as m,R as g,w as R,k as b,A as x,O as E,o as $,p as A}from"./client.fddcaf25.js";function D(t){return function(){var a,c=$(t);if(function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(t){return!1}}()){var n=$(this).constructor;a=Reflect.construct(c,arguments,n)}else a=c.apply(this,arguments);return A(this,a)}}function I(t){var a,c,n,s,e,E,$,A,D,I;return{c:function(){a=o("section"),c=o("div"),n=o("input"),s=r(),e=o("label"),E=i("dataAttr"),$=r(),this.h()},l:function(t){a=u(t,"SECTION",{class:!0});var o=f(a);c=u(o,"DIV",{class:!0});var r=f(c);n=u(r,"INPUT",{"data-oo-checkbox":!0,type:!0}),s=l(r),e=u(r,"LABEL",{class:!0});var i=f(e);E=h(i,"dataAttr"),i.forEach(v),r.forEach(v),$=l(o),o.forEach(v),this.h()},h:function(){d(n,"data-oo-checkbox","small"),d(n,"type","checkbox"),d(e,"class","svelte-1ha5ory"),d(c,"class","toggler svelte-1ha5ory"),A=new p(t[2],null),d(a,"class",D=y(t[0])+" svelte-1ha5ory")},m:function(o,r,i){k(o,a,r),m(a,c),m(c,n),n.checked=t[1],m(c,s),m(c,e),m(e,E),m(a,$),A.m(a),i&&g(I),I=[R(n,"change",t[4]),R(e,"click",t[5])]},p:function(t,c){var s=b(c,1)[0];2&s&&(n.checked=t[1]),4&s&&A.p(t[2]),1&s&&D!==(D=y(t[0])+" svelte-1ha5ory")&&d(a,"class",D)},i:x,o:x,d:function(t){t&&v(a),g(I)}}}function P(t,a,c){var n=a.class,s=void 0===n?void 0:n,e=a.content,o=void 0===e?"":e,r=!1;var i;return t.$set=function(t){"class"in t&&c(0,s=t.class),"content"in t&&c(3,o=t.content)},t.$$.update=function(){11&t.$$.dirty&&c(2,i=E(r?o.replace(/oo-/g,"data-oo-"):o,"html",s))},[s,r,i,o,function(){r=this.checked,c(1,r)},function(){return c(1,r=!r)}]}var S=function(o){t(i,e);var r=D(i);function i(t){var e;return a(this,i),e=r.call(this),c(s(e),t,P,I,n,{class:0,content:3}),e}return i}();export{S as D};
