import{_ as a,a as r,i as s,s as o,b as e,S as t,O as c,Q as n,K as l,y as i,e as h,q as f,L as d,z as p,d as u,f as g,r as b,g as v,h as m,P as y,V as E,M as w,j as P,v as k,A as x,t as $,n as M,N as T,o as S,p as R}from"./client.00fa9d63.js";import{P as D}from"./Pagination.35b6fed1.js";function I(a){return function(){var r,s=S(a);if(function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(a){return!1}}()){var o=S(this).constructor;r=Reflect.construct(s,arguments,o)}else r=s.apply(this,arguments);return R(this,r)}}function _(a){var r,s,o,e,t,S,R,I,_,L,j,N,O,G,H,q,z,A,K,Q,U,B,F,J,W,X,Y,Z,aa,ra,sa,oa,ea,ta,ca,na,la,ia,ha,fa,da,pa,ua,ga,ba,va,ma,ya,Ea,wa,Pa,ka,xa,$a,Ma,Ta,Sa,Ra,Da,Ia,_a,Ca,Va,La,ja,Na,Oa,Ga,Ha,qa,za,Aa,Ka,Qa,Ua,Ba,Fa,Ja,Wa,Xa,Ya,Za,ar=c("palette: (\n  'primary': #0ea7d6,\n  'secondary': #959595,\n),\n\n// default settings\ncolor: (\n  font: (\n    prefix: 'color',\n    property: 'color',\n    values: this('palette'),\n  ),\n  background: (\n    prefix: 'bg',\n    property: 'background-color',\n    values: (\n      _this('palette'),\n      (\n        'secondary': #f8f8f8,\n      )\n    )\n  ),\n  border: (\n    property: 'border-color',\n    values: (), // no border utilities\n  ),\n),\n","scss")+"",rr=c("$ooLoop: ooPipe(\n  _add('palette', (\n    'danger': #da3b3b // danger globally\n  )),\n  _add('color.font.values', (\n    'warning': #ce8a0d,\n  )),\n  _add('color.background.values', (\n    'danger': #f7c8c8, //override the danger value for background\n  )),\n  _set('color.border.values', this('palette')), //add global values\n);\n","scss")+"",sr=new n({props:{title:C,description:V}}),or=new D({props:{href:"docs/utilities/typography/",label:"Use Typography utilities"}});return{c:function(){l(sr.$$.fragment),r=i(),s=h("h1"),o=f(C),e=i(),t=h("p"),S=f(V),R=i(),I=h("p"),_=f("Loop gives you few colors by default to avoid overloading the CSS of rules you might not need."),L=i(),N=i(),O=h("div"),G=h("p"),H=f("This is a text with the class "),q=h("em"),z=f(".color-primary"),A=i(),K=h("p"),Q=f("This is a text with the class "),U=h("em"),B=f(".color-secondary"),F=i(),J=h("div"),W=i(),X=h("p"),Y=f("this is a block with a the class "),Z=h("em"),aa=f(".bg-primary"),ra=i(),sa=h("p"),oa=f("this is a block with a the class "),ea=h("em"),ta=f(".bg-secondary"),ca=i(),na=h("p"),la=h("strong"),ia=f("Set your preferences to the config."),ha=i(),da=i(),pa=h("div"),ua=h("p"),ga=f("This is a text with the class "),ba=h("em"),va=f(".color-warning"),ma=i(),ya=h("p"),Ea=f("This is a text with the class "),wa=h("em"),Pa=f(".color-danger"),ka=i(),xa=h("div"),$a=i(),Ma=h("p"),Ta=f("this is a block with a the class "),Sa=h("em"),Ra=f(".bg-danger"),Da=i(),Ia=h("p"),_a=f("this is a block with a the class "),Ca=h("em"),Va=f(".border-primary"),La=i(),ja=h("p"),Na=f("this is a block with a the class "),Oa=h("em"),Ga=f(".border-secondary"),Ha=i(),qa=h("p"),za=f("this is a block with a the class "),Aa=h("em"),Ka=f(".border-danger"),Qa=i(),Ua=h("hr"),Ba=i(),Fa=h("p"),Ja=f("In manual mode add the mixin "),Wa=h("strong"),Xa=f("Color()"),Ya=i(),l(or.$$.fragment),this.h()},l:function(a){d(sr.$$.fragment,a),r=p(a),s=u(a,"H1",{});var c=g(s);o=b(c,C),c.forEach(v),e=p(a),t=u(a,"P",{class:!0});var n=g(t);S=b(n,V),n.forEach(v),R=p(a),I=u(a,"P",{});var l=g(I);_=b(l,"Loop gives you few colors by default to avoid overloading the CSS of rules you might not need."),l.forEach(v),L=p(a),N=p(a),O=u(a,"DIV",{class:!0});var i=g(O);G=u(i,"P",{class:!0});var h=g(G);H=b(h,"This is a text with the class "),q=u(h,"EM",{});var f=g(q);z=b(f,".color-primary"),f.forEach(v),h.forEach(v),A=p(i),K=u(i,"P",{class:!0});var m=g(K);Q=b(m,"This is a text with the class "),U=u(m,"EM",{});var y=g(U);B=b(y,".color-secondary"),y.forEach(v),m.forEach(v),F=p(i),J=u(i,"DIV",{class:!0}),g(J).forEach(v),W=p(i),X=u(i,"P",{class:!0});var E=g(X);Y=b(E,"this is a block with a the class "),Z=u(E,"EM",{});var w=g(Z);aa=b(w,".bg-primary"),w.forEach(v),E.forEach(v),ra=p(i),sa=u(i,"P",{class:!0});var P=g(sa);oa=b(P,"this is a block with a the class "),ea=u(P,"EM",{});var k=g(ea);ta=b(k,".bg-secondary"),k.forEach(v),P.forEach(v),i.forEach(v),ca=p(a),na=u(a,"P",{});var x=g(na);la=u(x,"STRONG",{});var $=g(la);ia=b($,"Set your preferences to the config."),$.forEach(v),x.forEach(v),ha=p(a),da=p(a),pa=u(a,"DIV",{class:!0});var M=g(pa);ua=u(M,"P",{class:!0});var T=g(ua);ga=b(T,"This is a text with the class "),ba=u(T,"EM",{});var D=g(ba);va=b(D,".color-warning"),D.forEach(v),T.forEach(v),ma=p(M),ya=u(M,"P",{class:!0});var j=g(ya);Ea=b(j,"This is a text with the class "),wa=u(j,"EM",{});var fa=g(wa);Pa=b(fa,".color-danger"),fa.forEach(v),j.forEach(v),ka=p(M),xa=u(M,"DIV",{class:!0}),g(xa).forEach(v),$a=p(M),Ma=u(M,"P",{class:!0});var Za=g(Ma);Ta=b(Za,"this is a block with a the class "),Sa=u(Za,"EM",{});var ar=g(Sa);Ra=b(ar,".bg-danger"),ar.forEach(v),Za.forEach(v),Da=p(M),Ia=u(M,"P",{class:!0,style:!0});var rr=g(Ia);_a=b(rr,"this is a block with a the class "),Ca=u(rr,"EM",{});var er=g(Ca);Va=b(er,".border-primary"),er.forEach(v),rr.forEach(v),La=p(M),ja=u(M,"P",{class:!0,style:!0});var tr=g(ja);Na=b(tr,"this is a block with a the class "),Oa=u(tr,"EM",{});var cr=g(Oa);Ga=b(cr,".border-secondary"),cr.forEach(v),tr.forEach(v),Ha=p(M),qa=u(M,"P",{class:!0,style:!0});var nr=g(qa);za=b(nr,"this is a block with a the class "),Aa=u(nr,"EM",{});var lr=g(Aa);Ka=b(lr,".border-danger"),lr.forEach(v),nr.forEach(v),M.forEach(v),Qa=p(a),Ua=u(a,"HR",{}),Ba=p(a),Fa=u(a,"P",{class:!0});var ir=g(Fa);Ja=b(ir,"In manual mode add the mixin "),Wa=u(ir,"STRONG",{});var hr=g(Wa);Xa=b(hr,"Color()"),hr.forEach(v),ir.forEach(v),Ya=p(a),d(or.$$.fragment,a),this.h()},h:function(){m(t,"class","font-large"),j=new y(ar,N),m(G,"class","color-primary mb-0"),m(K,"class","color-secondary"),m(J,"class","hr"),m(X,"class","wrapper-small bg-primary"),m(sa,"class","wrapper-small bg-secondary"),m(O,"class","ground"),fa=new y(rr,da),m(ua,"class","color-warning mb-0"),m(ya,"class","color-danger mb-0"),m(xa,"class","hr"),m(Ma,"class","wrapper-small bg-danger"),m(Ia,"class","wrapper-small border-primary"),E(Ia,"border","1px solid"),m(ja,"class","wrapper-small border-secondary"),E(ja,"border","1px solid"),m(qa,"class","wrapper-small border-danger"),E(qa,"border","1px solid"),m(pa,"class","ground"),m(Fa,"class","info")},m:function(a,c){w(sr,a,c),P(a,r,c),P(a,s,c),k(s,o),P(a,e,c),P(a,t,c),k(t,S),P(a,R,c),P(a,I,c),k(I,_),P(a,L,c),j.m(a,c),P(a,N,c),P(a,O,c),k(O,G),k(G,H),k(G,q),k(q,z),k(O,A),k(O,K),k(K,Q),k(K,U),k(U,B),k(O,F),k(O,J),k(O,W),k(O,X),k(X,Y),k(X,Z),k(Z,aa),k(O,ra),k(O,sa),k(sa,oa),k(sa,ea),k(ea,ta),P(a,ca,c),P(a,na,c),k(na,la),k(la,ia),P(a,ha,c),fa.m(a,c),P(a,da,c),P(a,pa,c),k(pa,ua),k(ua,ga),k(ua,ba),k(ba,va),k(pa,ma),k(pa,ya),k(ya,Ea),k(ya,wa),k(wa,Pa),k(pa,ka),k(pa,xa),k(pa,$a),k(pa,Ma),k(Ma,Ta),k(Ma,Sa),k(Sa,Ra),k(pa,Da),k(pa,Ia),k(Ia,_a),k(Ia,Ca),k(Ca,Va),k(pa,La),k(pa,ja),k(ja,Na),k(ja,Oa),k(Oa,Ga),k(pa,Ha),k(pa,qa),k(qa,za),k(qa,Aa),k(Aa,Ka),P(a,Qa,c),P(a,Ua,c),P(a,Ba,c),P(a,Fa,c),k(Fa,Ja),k(Fa,Wa),k(Wa,Xa),P(a,Ya,c),w(or,a,c),Za=!0},p:x,i:function(a){Za||($(sr.$$.fragment,a),$(or.$$.fragment,a),Za=!0)},o:function(a){M(sr.$$.fragment,a),M(or.$$.fragment,a),Za=!1},d:function(a){T(sr,a),a&&v(r),a&&v(s),a&&v(e),a&&v(t),a&&v(R),a&&v(I),a&&v(L),a&&j.d(),a&&v(N),a&&v(O),a&&v(ca),a&&v(na),a&&v(ha),a&&fa.d(),a&&v(da),a&&v(pa),a&&v(Qa),a&&v(Ua),a&&v(Ba),a&&v(Fa),a&&v(Ya),T(or,a)}}}var C="Color utilities",V="Modify the color of any elements tagetting font, background and/or border.";export default(function(c){a(l,t);var n=I(l);function l(a){var t;return r(this,l),t=n.call(this),s(e(t),a,null,_,o,{}),t}return l}());
