import{S as a,i as s,s as t,e as c,r as e,l as o,a as l,b as n,u as r,m as h,d as i,f as d,I as p,O as u,g as v,o as f,K as k,p as m,v as y,H as b}from"./client.a2d3a5b4.js";function g(a){let s,t,b,g,x,E,$,I,A,D;return{c(){s=c("section"),t=c("div"),b=c("input"),g=e(),x=c("label"),E=o("dataAttr"),$=e(),this.h()},l(a){s=l(a,"SECTION",{class:!0});var c=n(s);t=l(c,"DIV",{class:!0});var e=n(t);b=l(e,"INPUT",{"data-oo-checkbox":!0,type:!0}),g=r(e),x=l(e,"LABEL",{class:!0});var o=n(x);E=h(o,"dataAttr"),o.forEach(i),e.forEach(i),$=r(c),c.forEach(i),this.h()},h(){d(b,"data-oo-checkbox","small"),d(b,"type","checkbox"),d(x,"class","svelte-1ha5ory"),d(t,"class","toggler svelte-1ha5ory"),I=new p(a[2],null),d(s,"class",A=u(a[0])+" svelte-1ha5ory")},m(c,e,o){v(c,s,e),f(s,t),f(t,b),b.checked=a[1],f(t,g),f(t,x),f(x,E),f(s,$),I.m(s),o&&k(D),D=[m(b,"change",a[4]),m(x,"click",a[5])]},p(a,[t]){2&t&&(b.checked=a[1]),4&t&&I.p(a[2]),1&t&&A!==(A=u(a[0])+" svelte-1ha5ory")&&d(s,"class",A)},i:y,o:y,d(a){a&&i(s),k(D)}}}function x(a,s,t){let{class:c}=s,{content:e=""}=s,o=!1;let l;return a.$set=(a=>{"class"in a&&t(0,c=a.class),"content"in a&&t(3,e=a.content)}),a.$$.update=(()=>{11&a.$$.dirty&&t(2,l=b(o?e.replace(/oo-/g,"data-oo-"):e,"html",c))}),[c,o,l,e,function(){o=this.checked,t(1,o)},()=>t(1,o=!o)]}class E extends a{constructor(a){super(),s(this,a,x,g,t,{class:0,content:3})}}export{E as D};
