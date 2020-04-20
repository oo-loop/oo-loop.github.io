import{_ as a,a as r,i as s,s as e,b as t,S as n,O as l,Q as i,K as c,y as o,e as p,q as m,L as d,z as v,d as f,f as h,r as u,g as w,h as g,P as E,M as y,j as D,v as I,A as V,t as q,n as $,N as b,o as R,p as W}from"./client.00fa9d63.js";function k(a){return function(){var r,s=R(a);if(function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(a){return!1}}()){var e=R(this).constructor;r=Reflect.construct(s,arguments,e)}else r=s.apply(this,arguments);return W(this,r)}}function x(a){var r,s,e,t,n,R,W,k,x,C,S,O,H,L,N,T,j,z,G,K,M,Q,_,B,F,J,U,X,Y,Z,aa,ra,sa,ea,ta,na,la,ia,ca,oa,pa,ma,da,va,fa,ha,ua,wa,ga,Ea,ya,Da,Ia,Va,qa,$a,ba,Ra,Wa,ka,xa,Aa=l("// default config\nwrapper: (\n  property: 'padding',\n  values: (\n    'small': 1rem,\n    'medium': 1.5rem,\n  ),\n),\n","scss")+"",Pa=l('<div class="wrapper-small">small</div>\n<div class="wrapper-medium">medium</div>\n',"html")+"",Ca=l("$ooLoop: ooAdd('wrapper.values', (\n  'tiny': .5rem,\n  'wide': (\n    rt: 1rem,\n    sm: 2rem,\n    md: 3rem,\n    lg: 4rem,\n  )\n));\n\n// set .wrapper-tiny@sm .wrapper-small@sm .wrapper-medium@sm\n// set .wrapper-tiny@md .wrapper-small@md\n// set .wrapper-small@lg .wrapper-medium@lg\n$ooLoop: ooSet('wrapper.screens', (\n  sm: '✲',\n  md: ('tiny', 'small'),\n  lg: ('small', 'medium')\n));\n","scss")+"",Sa=l('<div class="wrapper-tiny">tiny</div>\n<div class="wrapper-wide">responsive</div>\n<div class="wrapper-tiny wrapper-small@sm wrapper-medium@lg">With breakpoints</div>\n',"html")+"",Oa=new i({props:{title:A,description:P}});return{c:function(){c(Oa.$$.fragment),r=o(),s=p("h1"),e=m(A),t=o(),n=p("p"),R=m(P),W=o(),k=p("p"),x=m("Two classes available from start "),C=p("code"),S=m(".wrapper-small"),O=m(" and "),H=p("code"),L=m(".wrapper-medium"),N=m("."),T=o(),z=o(),K=o(),M=p("div"),Q=p("div"),_=p("div"),B=m("small"),F=o(),J=p("div"),U=p("div"),X=m("medium"),Y=o(),Z=p("h4"),aa=m("Add more, update data, set responsive values "),ra=p("span"),sa=m("("),ea=p("a"),ta=m("Check the options"),na=m(")"),la=o(),ca=o(),pa=o(),ma=p("div"),da=p("div"),va=p("div"),fa=m("tiny"),ha=o(),ua=p("div"),wa=p("div"),ga=m("With breakpoints"),Ea=o(),ya=p("div"),Da=p("div"),Ia=m("responsive"),Va=o(),qa=p("hr"),$a=o(),ba=p("p"),Ra=m("In manual mode add the mixin "),Wa=p("strong"),ka=m("Wrapper()"),this.h()},l:function(a){d(Oa.$$.fragment,a),r=v(a),s=f(a,"H1",{});var l=h(s);e=u(l,A),l.forEach(w),t=v(a),n=f(a,"P",{class:!0});var i=h(n);R=u(i,P),i.forEach(w),W=v(a),k=f(a,"P",{});var c=h(k);x=u(c,"Two classes available from start "),C=f(c,"CODE",{});var o=h(C);S=u(o,".wrapper-small"),o.forEach(w),O=u(c," and "),H=f(c,"CODE",{});var p=h(H);L=u(p,".wrapper-medium"),p.forEach(w),N=u(c,"."),c.forEach(w),T=v(a),z=v(a),K=v(a),M=f(a,"DIV",{class:!0});var m=h(M);Q=f(m,"DIV",{class:!0});var g=h(Q);_=f(g,"DIV",{class:!0});var E=h(_);B=u(E,"small"),E.forEach(w),g.forEach(w),F=v(m),J=f(m,"DIV",{class:!0});var y=h(J);U=f(y,"DIV",{class:!0});var D=h(U);X=u(D,"medium"),D.forEach(w),y.forEach(w),m.forEach(w),Y=v(a),Z=f(a,"H4",{class:!0});var I=h(Z);aa=u(I,"Add more, update data, set responsive values "),ra=f(I,"SPAN",{class:!0});var V=h(ra);sa=u(V,"("),ea=f(V,"A",{href:!0,title:!0});var q=h(ea);ta=u(q,"Check the options"),q.forEach(w),na=u(V,")"),V.forEach(w),I.forEach(w),la=v(a),ca=v(a),pa=v(a),ma=f(a,"DIV",{class:!0});var $=h(ma);da=f($,"DIV",{class:!0});var b=h(da);va=f(b,"DIV",{class:!0});var j=h(va);fa=u(j,"tiny"),j.forEach(w),b.forEach(w),ha=v($),ua=f($,"DIV",{class:!0});var G=h(ua);wa=f(G,"DIV",{class:!0});var ia=h(wa);ga=u(ia,"With breakpoints"),ia.forEach(w),G.forEach(w),Ea=v($),ya=f($,"DIV",{class:!0});var oa=h(ya);Da=f(oa,"DIV",{class:!0});var xa=h(Da);Ia=u(xa,"responsive"),xa.forEach(w),oa.forEach(w),$.forEach(w),Va=v(a),qa=f(a,"HR",{}),$a=v(a),ba=f(a,"P",{class:!0});var Aa=h(ba);Ra=u(Aa,"In manual mode add the mixin "),Wa=f(Aa,"STRONG",{});var Pa=h(Wa);ka=u(Pa,"Wrapper()"),Pa.forEach(w),Aa.forEach(w),this.h()},h:function(){g(n,"class","font-large"),j=new E(Aa,z),G=new E(Pa,K),g(_,"class","cell svelte-1rqh8gr"),g(Q,"class","wrapper-small mb-15 svelte-1rqh8gr"),g(U,"class","cell svelte-1rqh8gr"),g(J,"class","wrapper-medium svelte-1rqh8gr"),g(M,"class","ground text-center"),g(ea,"href","docs/utilities/#format"),g(ea,"title","Check the options"),g(ra,"class","font-regular font-medium"),g(Z,"class","mt-30"),ia=new E(Ca,ca),oa=new E(Sa,pa),g(va,"class","cell svelte-1rqh8gr"),g(da,"class","wrapper-tiny mb-15 svelte-1rqh8gr"),g(wa,"class","cell svelte-1rqh8gr"),g(ua,"class","wrapper-tiny wrapper-small@sm wrapper-medium@lg mb-15 svelte-1rqh8gr"),g(Da,"class","cell svelte-1rqh8gr"),g(ya,"class","wrapper-wide svelte-1rqh8gr"),g(ma,"class","ground text-center"),g(ba,"class","info")},m:function(a,l){y(Oa,a,l),D(a,r,l),D(a,s,l),I(s,e),D(a,t,l),D(a,n,l),I(n,R),D(a,W,l),D(a,k,l),I(k,x),I(k,C),I(C,S),I(k,O),I(k,H),I(H,L),I(k,N),D(a,T,l),j.m(a,l),D(a,z,l),G.m(a,l),D(a,K,l),D(a,M,l),I(M,Q),I(Q,_),I(_,B),I(M,F),I(M,J),I(J,U),I(U,X),D(a,Y,l),D(a,Z,l),I(Z,aa),I(Z,ra),I(ra,sa),I(ra,ea),I(ea,ta),I(ra,na),D(a,la,l),ia.m(a,l),D(a,ca,l),oa.m(a,l),D(a,pa,l),D(a,ma,l),I(ma,da),I(da,va),I(va,fa),I(ma,ha),I(ma,ua),I(ua,wa),I(wa,ga),I(ma,Ea),I(ma,ya),I(ya,Da),I(Da,Ia),D(a,Va,l),D(a,qa,l),D(a,$a,l),D(a,ba,l),I(ba,Ra),I(ba,Wa),I(Wa,ka),xa=!0},p:V,i:function(a){xa||(q(Oa.$$.fragment,a),xa=!0)},o:function(a){$(Oa.$$.fragment,a),xa=!1},d:function(a){b(Oa,a),a&&w(r),a&&w(s),a&&w(t),a&&w(n),a&&w(W),a&&w(k),a&&w(T),a&&j.d(),a&&w(z),a&&G.d(),a&&w(K),a&&w(M),a&&w(Y),a&&w(Z),a&&w(la),a&&ia.d(),a&&w(ca),a&&oa.d(),a&&w(pa),a&&w(ma),a&&w(Va),a&&w(qa),a&&w($a),a&&w(ba)}}}var A="Wrapper utilities",P="Wrap elements with padding around them.";export default(function(l){a(c,n);var i=k(c);function c(a){var n;return r(this,c),n=i.call(this),s(t(n),a,null,x,e,{}),n}return c}());
