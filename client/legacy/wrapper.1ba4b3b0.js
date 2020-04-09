import{_ as a,a as r,i as s,s as e,b as t,S as n,O as l,Q as i,K as c,y as o,e as p,q as m,L as d,z as v,d as f,f as h,r as u,g as w,h as g,P as E,M as y,j as D,v as I,A as V,t as q,n as b,N as W,o as $,p as R}from"./client.456eb681.js";function k(a){return function(){var r,s=$(a);if(function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(a){return!1}}()){var e=$(this).constructor;r=Reflect.construct(s,arguments,e)}else r=s.apply(this,arguments);return R(this,r)}}function x(a){var r,s,e,t,n,$,R,k,x,A,P,C,S,O,H,L,N,T,j,z,G,K,M,Q,_,B,F,J,U,X,Y,Z,aa,ra,sa,ea,ta,na,la,ia,ca,oa,pa,ma,da,va,fa,ha,ua,wa,ga,Ea,ya,Da,Ia,Va,qa,ba,Wa,$a,Ra,ka=l("// default config\nwrapper: (\n  property: 'padding',\n  values: (\n    'small': 1rem,\n    'medium': 1.5rem,\n  ),\n),\n","scss")+"",xa=l('<div class="wrapper-small">small</div>\n<div class="wrapper-medium">medium</div>\n',"html")+"",Aa=l("$ooLoop: ooAdd('wrapper.values', (\n  'tiny': .5rem,\n  'wide': (\n    rt: 1rem,\n    sm: 2rem,\n    md: 3rem,\n    lg: 4rem,\n  )\n));\n\n// set .wrapper-tiny@sm .wrapper-small@sm .wrapper-medium@sm\n// set .wrapper-tiny@md .wrapper-small@md\n// set .wrapper-small@lg .wrapper-medium@lg\n$ooLoop: ooSet('wrapper.screens', (\n  sm: '✲',\n  md: ('tiny', 'small'),\n  lg: ('small', 'medium')\n));\n","scss")+"",Pa=l('<div class="wrapper-tiny">tiny</div>\n<div class="wrapper-wide">responsive</div>\n<div class="wrapper-tiny wrapper-small@sm wrapper-medium@lg">With breakpoints</div>\n',"html")+"",Ca=new i({props:{title:"Wrapper utilities"}});return{c:function(){c(Ca.$$.fragment),r=o(),s=p("h1"),e=m("Wrapper utilities"),t=o(),n=p("p"),$=m("Wrap elements with padding around them."),R=o(),k=p("p"),x=m("Two classes available from start "),A=p("code"),P=m(".wrapper-small"),C=m(" and "),S=p("code"),O=m(".wrapper-medium"),H=m("."),L=o(),T=o(),z=o(),G=p("div"),K=p("div"),M=p("div"),Q=m("small"),_=o(),B=p("div"),F=p("div"),J=m("medium"),U=o(),X=p("h4"),Y=m("Add more, update data, set responsive values "),Z=p("span"),aa=m("("),ra=p("a"),sa=m("Check the options"),ea=m(")"),ta=o(),la=o(),ca=o(),oa=p("div"),pa=p("div"),ma=p("div"),da=m("tiny"),va=o(),fa=p("div"),ha=p("div"),ua=m("With breakpoints"),wa=o(),ga=p("div"),Ea=p("div"),ya=m("responsive"),Da=o(),Ia=p("hr"),Va=o(),qa=p("p"),ba=m("In manual mode add the mixin "),Wa=p("strong"),$a=m("Wrapper()"),this.h()},l:function(a){d(Ca.$$.fragment,a),r=v(a),s=f(a,"H1",{});var l=h(s);e=u(l,"Wrapper utilities"),l.forEach(w),t=v(a),n=f(a,"P",{class:!0});var i=h(n);$=u(i,"Wrap elements with padding around them."),i.forEach(w),R=v(a),k=f(a,"P",{});var c=h(k);x=u(c,"Two classes available from start "),A=f(c,"CODE",{});var o=h(A);P=u(o,".wrapper-small"),o.forEach(w),C=u(c," and "),S=f(c,"CODE",{});var p=h(S);O=u(p,".wrapper-medium"),p.forEach(w),H=u(c,"."),c.forEach(w),L=v(a),T=v(a),z=v(a),G=f(a,"DIV",{class:!0});var m=h(G);K=f(m,"DIV",{class:!0});var g=h(K);M=f(g,"DIV",{class:!0});var E=h(M);Q=u(E,"small"),E.forEach(w),g.forEach(w),_=v(m),B=f(m,"DIV",{class:!0});var y=h(B);F=f(y,"DIV",{class:!0});var D=h(F);J=u(D,"medium"),D.forEach(w),y.forEach(w),m.forEach(w),U=v(a),X=f(a,"H4",{class:!0});var I=h(X);Y=u(I,"Add more, update data, set responsive values "),Z=f(I,"SPAN",{class:!0});var V=h(Z);aa=u(V,"("),ra=f(V,"A",{href:!0,title:!0});var q=h(ra);sa=u(q,"Check the options"),q.forEach(w),ea=u(V,")"),V.forEach(w),I.forEach(w),ta=v(a),la=v(a),ca=v(a),oa=f(a,"DIV",{class:!0});var b=h(oa);pa=f(b,"DIV",{class:!0});var W=h(pa);ma=f(W,"DIV",{class:!0});var N=h(ma);da=u(N,"tiny"),N.forEach(w),W.forEach(w),va=v(b),fa=f(b,"DIV",{class:!0});var j=h(fa);ha=f(j,"DIV",{class:!0});var na=h(ha);ua=u(na,"With breakpoints"),na.forEach(w),j.forEach(w),wa=v(b),ga=f(b,"DIV",{class:!0});var ia=h(ga);Ea=f(ia,"DIV",{class:!0});var Ra=h(Ea);ya=u(Ra,"responsive"),Ra.forEach(w),ia.forEach(w),b.forEach(w),Da=v(a),Ia=f(a,"HR",{}),Va=v(a),qa=f(a,"P",{class:!0});var ka=h(qa);ba=u(ka,"In manual mode add the mixin "),Wa=f(ka,"STRONG",{});var xa=h(Wa);$a=u(xa,"Wrapper()"),xa.forEach(w),ka.forEach(w),this.h()},h:function(){g(n,"class","font-large"),N=new E(ka,T),j=new E(xa,z),g(M,"class","cell svelte-1rqh8gr"),g(K,"class","wrapper-small mb-15 svelte-1rqh8gr"),g(F,"class","cell svelte-1rqh8gr"),g(B,"class","wrapper-medium svelte-1rqh8gr"),g(G,"class","ground text-center"),g(ra,"href","docs/utilities#format"),g(ra,"title","Check the options"),g(Z,"class","font-regular font-medium"),g(X,"class","mt-30"),na=new E(Aa,la),ia=new E(Pa,ca),g(ma,"class","cell svelte-1rqh8gr"),g(pa,"class","wrapper-tiny mb-15 svelte-1rqh8gr"),g(ha,"class","cell svelte-1rqh8gr"),g(fa,"class","wrapper-tiny wrapper-small@sm wrapper-medium@lg mb-15 svelte-1rqh8gr"),g(Ea,"class","cell svelte-1rqh8gr"),g(ga,"class","wrapper-wide svelte-1rqh8gr"),g(oa,"class","ground text-center"),g(qa,"class","info")},m:function(a,l){y(Ca,a,l),D(a,r,l),D(a,s,l),I(s,e),D(a,t,l),D(a,n,l),I(n,$),D(a,R,l),D(a,k,l),I(k,x),I(k,A),I(A,P),I(k,C),I(k,S),I(S,O),I(k,H),D(a,L,l),N.m(a,l),D(a,T,l),j.m(a,l),D(a,z,l),D(a,G,l),I(G,K),I(K,M),I(M,Q),I(G,_),I(G,B),I(B,F),I(F,J),D(a,U,l),D(a,X,l),I(X,Y),I(X,Z),I(Z,aa),I(Z,ra),I(ra,sa),I(Z,ea),D(a,ta,l),na.m(a,l),D(a,la,l),ia.m(a,l),D(a,ca,l),D(a,oa,l),I(oa,pa),I(pa,ma),I(ma,da),I(oa,va),I(oa,fa),I(fa,ha),I(ha,ua),I(oa,wa),I(oa,ga),I(ga,Ea),I(Ea,ya),D(a,Da,l),D(a,Ia,l),D(a,Va,l),D(a,qa,l),I(qa,ba),I(qa,Wa),I(Wa,$a),Ra=!0},p:V,i:function(a){Ra||(q(Ca.$$.fragment,a),Ra=!0)},o:function(a){b(Ca.$$.fragment,a),Ra=!1},d:function(a){W(Ca,a),a&&w(r),a&&w(s),a&&w(t),a&&w(n),a&&w(R),a&&w(k),a&&w(L),a&&N.d(),a&&w(T),a&&j.d(),a&&w(z),a&&w(G),a&&w(U),a&&w(X),a&&w(ta),a&&na.d(),a&&w(la),a&&ia.d(),a&&w(ca),a&&w(oa),a&&w(Da),a&&w(Ia),a&&w(Va),a&&w(qa)}}}export default(function(l){a(c,n);var i=k(c);function c(a){var n;return r(this,c),n=i.call(this),s(t(n),a,null,x,e,{}),n}return c}());
