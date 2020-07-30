import{S as a,i as s,s as r,H as o,J as e,D as c,r as t,e as l,l as n,E as i,u as h,a as d,b as f,m as p,d as g,f as b,I as m,N as v,F as E,g as y,o as u,v as w,t as k,k as x,G as P}from"./client.5de11f64.js";import{P as $}from"./Pagination.f295cb60.js";function M(a){let s,r,M,I,C,D,_,V,G,H,L,N,R,j,O,F,J,q,z,A,B,K,Q,U,W,X,Y,Z,aa,sa,ra,oa,ea,ca,ta,la,na,ia,ha,da,fa,pa,ga,ba,ma,va,Ea,ya,ua,wa,ka,xa,Pa,$a,Ma,Ta,Sa,Ia,Ca,Da,_a,Va,Ga,Ha,La,Na,Ra,ja,Oa,Fa,Ja,qa,za,Aa,Ba,Ka,Qa,Ua,Wa,Xa,Ya,Za,as=o("palette: (\n  'primary': #0ea7d6,\n  'secondary': #959595,\n),\n\n// default settings\ncolor: (\n  font: (\n    prefix: 'color',\n    property: 'color',\n    values: this('palette'),\n  ),\n  background: (\n    prefix: 'bg',\n    property: 'background-color',\n    values: (\n      _this('palette'),\n      (\n        'secondary': #f8f8f8,\n      )\n    )\n  ),\n  border: (\n    property: 'border-color',\n    values: (), // no border utilities\n  ),\n),\n","scss")+"",ss=o("$ooLoop: ooPipe(\n  _add('palette', (\n    'danger': #da3b3b // danger globally\n  )),\n  _add('color.font.values', (\n    'warning': #ce8a0d,\n  )),\n  _add('color.background.values', (\n    'danger': #f7c8c8, //override the danger value for background\n  )),\n  _set('color.border.values', this('palette')), //add global values\n);\n","scss")+"";const rs=new e({props:{title:T,description:S}}),os=new $({props:{page:"color"}});return{c(){c(rs.$$.fragment),s=t(),r=l("h1"),M=n(T),I=t(),C=l("p"),D=n(S),_=t(),V=l("p"),G=n("Loop gives you few colors by default to avoid overloading the CSS of rules you might not need."),H=t(),N=t(),R=l("div"),j=l("p"),O=n("This is a text with the class "),F=l("em"),J=n(".color-primary"),q=t(),z=l("p"),A=n("This is a text with the class "),B=l("em"),K=n(".color-secondary"),Q=t(),U=l("div"),W=t(),X=l("p"),Y=n("this is a block with a the class "),Z=l("em"),aa=n(".bg-primary"),sa=t(),ra=l("p"),oa=n("this is a block with a the class "),ea=l("em"),ca=n(".bg-secondary"),ta=t(),la=l("p"),na=l("strong"),ia=n("Set your preferences to the config."),ha=t(),fa=t(),pa=l("div"),ga=l("p"),ba=n("This is a text with the class "),ma=l("em"),va=n(".color-warning"),Ea=t(),ya=l("p"),ua=n("This is a text with the class "),wa=l("em"),ka=n(".color-danger"),xa=t(),Pa=l("div"),$a=t(),Ma=l("p"),Ta=n("this is a block with a the class "),Sa=l("em"),Ia=n(".bg-danger"),Ca=t(),Da=l("p"),_a=n("this is a block with a the class "),Va=l("em"),Ga=n(".border-primary"),Ha=t(),La=l("p"),Na=n("this is a block with a the class "),Ra=l("em"),ja=n(".border-secondary"),Oa=t(),Fa=l("p"),Ja=n("this is a block with a the class "),qa=l("em"),za=n(".border-danger"),Aa=t(),Ba=l("hr"),Ka=t(),Qa=l("p"),Ua=n("In manual mode add the mixin "),Wa=l("strong"),Xa=n("Color()"),Ya=t(),c(os.$$.fragment),this.h()},l(a){i(rs.$$.fragment,a),s=h(a),r=d(a,"H1",{});var o=f(r);M=p(o,T),o.forEach(g),I=h(a),C=d(a,"P",{class:!0});var e=f(C);D=p(e,S),e.forEach(g),_=h(a),V=d(a,"P",{});var c=f(V);G=p(c,"Loop gives you few colors by default to avoid overloading the CSS of rules you might not need."),c.forEach(g),H=h(a),N=h(a),R=d(a,"DIV",{class:!0});var t=f(R);j=d(t,"P",{class:!0});var l=f(j);O=p(l,"This is a text with the class "),F=d(l,"EM",{});var n=f(F);J=p(n,".color-primary"),n.forEach(g),l.forEach(g),q=h(t),z=d(t,"P",{class:!0});var b=f(z);A=p(b,"This is a text with the class "),B=d(b,"EM",{});var m=f(B);K=p(m,".color-secondary"),m.forEach(g),b.forEach(g),Q=h(t),U=d(t,"DIV",{class:!0}),f(U).forEach(g),W=h(t),X=d(t,"P",{class:!0});var v=f(X);Y=p(v,"this is a block with a the class "),Z=d(v,"EM",{});var E=f(Z);aa=p(E,".bg-primary"),E.forEach(g),v.forEach(g),sa=h(t),ra=d(t,"P",{class:!0});var y=f(ra);oa=p(y,"this is a block with a the class "),ea=d(y,"EM",{});var u=f(ea);ca=p(u,".bg-secondary"),u.forEach(g),y.forEach(g),t.forEach(g),ta=h(a),la=d(a,"P",{});var w=f(la);na=d(w,"STRONG",{});var k=f(na);ia=p(k,"Set your preferences to the config."),k.forEach(g),w.forEach(g),ha=h(a),fa=h(a),pa=d(a,"DIV",{class:!0});var x=f(pa);ga=d(x,"P",{class:!0});var P=f(ga);ba=p(P,"This is a text with the class "),ma=d(P,"EM",{});var $=f(ma);va=p($,".color-warning"),$.forEach(g),P.forEach(g),Ea=h(x),ya=d(x,"P",{class:!0});var L=f(ya);ua=p(L,"This is a text with the class "),wa=d(L,"EM",{});var da=f(wa);ka=p(da,".color-danger"),da.forEach(g),L.forEach(g),xa=h(x),Pa=d(x,"DIV",{class:!0}),f(Pa).forEach(g),$a=h(x),Ma=d(x,"P",{class:!0});var Za=f(Ma);Ta=p(Za,"this is a block with a the class "),Sa=d(Za,"EM",{});var as=f(Sa);Ia=p(as,".bg-danger"),as.forEach(g),Za.forEach(g),Ca=h(x),Da=d(x,"P",{class:!0,style:!0});var ss=f(Da);_a=p(ss,"this is a block with a the class "),Va=d(ss,"EM",{});var es=f(Va);Ga=p(es,".border-primary"),es.forEach(g),ss.forEach(g),Ha=h(x),La=d(x,"P",{class:!0,style:!0});var cs=f(La);Na=p(cs,"this is a block with a the class "),Ra=d(cs,"EM",{});var ts=f(Ra);ja=p(ts,".border-secondary"),ts.forEach(g),cs.forEach(g),Oa=h(x),Fa=d(x,"P",{class:!0,style:!0});var ls=f(Fa);Ja=p(ls,"this is a block with a the class "),qa=d(ls,"EM",{});var ns=f(qa);za=p(ns,".border-danger"),ns.forEach(g),ls.forEach(g),x.forEach(g),Aa=h(a),Ba=d(a,"HR",{}),Ka=h(a),Qa=d(a,"P",{class:!0});var is=f(Qa);Ua=p(is,"In manual mode add the mixin "),Wa=d(is,"STRONG",{});var hs=f(Wa);Xa=p(hs,"Color()"),hs.forEach(g),is.forEach(g),Ya=h(a),i(os.$$.fragment,a),this.h()},h(){b(C,"class","font-large"),L=new m(as,N),b(j,"class","color-primary mb-0"),b(z,"class","color-secondary"),b(U,"class","hr"),b(X,"class","wrapper-small bg-primary"),b(ra,"class","wrapper-small bg-secondary"),b(R,"class","ground"),da=new m(ss,fa),b(ga,"class","color-warning mb-0"),b(ya,"class","color-danger mb-0"),b(Pa,"class","hr"),b(Ma,"class","wrapper-small bg-danger"),b(Da,"class","wrapper-small border-primary"),v(Da,"border","1px solid"),b(La,"class","wrapper-small border-secondary"),v(La,"border","1px solid"),b(Fa,"class","wrapper-small border-danger"),v(Fa,"border","1px solid"),b(pa,"class","ground"),b(Qa,"class","info")},m(a,o){E(rs,a,o),y(a,s,o),y(a,r,o),u(r,M),y(a,I,o),y(a,C,o),u(C,D),y(a,_,o),y(a,V,o),u(V,G),y(a,H,o),L.m(a,o),y(a,N,o),y(a,R,o),u(R,j),u(j,O),u(j,F),u(F,J),u(R,q),u(R,z),u(z,A),u(z,B),u(B,K),u(R,Q),u(R,U),u(R,W),u(R,X),u(X,Y),u(X,Z),u(Z,aa),u(R,sa),u(R,ra),u(ra,oa),u(ra,ea),u(ea,ca),y(a,ta,o),y(a,la,o),u(la,na),u(na,ia),y(a,ha,o),da.m(a,o),y(a,fa,o),y(a,pa,o),u(pa,ga),u(ga,ba),u(ga,ma),u(ma,va),u(pa,Ea),u(pa,ya),u(ya,ua),u(ya,wa),u(wa,ka),u(pa,xa),u(pa,Pa),u(pa,$a),u(pa,Ma),u(Ma,Ta),u(Ma,Sa),u(Sa,Ia),u(pa,Ca),u(pa,Da),u(Da,_a),u(Da,Va),u(Va,Ga),u(pa,Ha),u(pa,La),u(La,Na),u(La,Ra),u(Ra,ja),u(pa,Oa),u(pa,Fa),u(Fa,Ja),u(Fa,qa),u(qa,za),y(a,Aa,o),y(a,Ba,o),y(a,Ka,o),y(a,Qa,o),u(Qa,Ua),u(Qa,Wa),u(Wa,Xa),y(a,Ya,o),E(os,a,o),Za=!0},p:w,i(a){Za||(k(rs.$$.fragment,a),k(os.$$.fragment,a),Za=!0)},o(a){x(rs.$$.fragment,a),x(os.$$.fragment,a),Za=!1},d(a){P(rs,a),a&&g(s),a&&g(r),a&&g(I),a&&g(C),a&&g(_),a&&g(V),a&&g(H),a&&L.d(),a&&g(N),a&&g(R),a&&g(ta),a&&g(la),a&&g(ha),a&&da.d(),a&&g(fa),a&&g(pa),a&&g(Aa),a&&g(Ba),a&&g(Ka),a&&g(Qa),a&&g(Ya),P(os,a)}}}const T="Color utilities",S="Modify the color of any elements tagetting font, background and/or border.";export default class extends a{constructor(a){super(),s(this,a,null,M,r,{})}}
