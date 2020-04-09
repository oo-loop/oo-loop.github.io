import{S as t,i as o,s as a,H as n,J as e,D as r,r as s,e as u,l as c,E as l,u as i,a as b,b as f,m as d,d as m,f as h,I as p,F as g,g as v,o as $,t as y,k as E,G as T,C as B,v as N}from"./client.6a8e4dbc.js";import{R as w}from"./Row.f2305762.js";import{P as O}from"./Pagination.5872991c.js";import{D as S}from"./DataAttrToggler.3af49171.js";function P(t){let o;const a=new S({props:{content:"\x3c!-- basic button --\x3e\n<button oo-button>Button</button>\n",class:"mt-0 mb-0"}});return{c(){r(a.$$.fragment)},l(t){l(a.$$.fragment,t)},m(t,n){g(a,t,n),o=!0},p:N,i(t){o||(y(a.$$.fragment,t),o=!0)},o(t){E(a.$$.fragment,t),o=!1},d(t){T(a,t)}}}function U(t){let o,a,n;return{c(){o=u("div"),a=u("button"),n=c("Button"),this.h()},l(t){o=b(t,"DIV",{class:!0});var e=f(o);a=b(e,"BUTTON",{"data-oo-button":!0});var r=f(a);n=d(r,"Button"),r.forEach(m),e.forEach(m),this.h()},h(){h(a,"data-oo-button",""),h(o,"class","ground mb-0 svelte-v81nqg")},m(t,e){v(t,o,e),$(o,a),$(a,n)},d(t){t&&m(o)}}}function x(t){let o,a;const n=new B({props:{$$slots:{default:[P]},$$scope:{ctx:t}}}),e=new B({props:{$$slots:{default:[U]},$$scope:{ctx:t}}});return{c(){r(n.$$.fragment),o=s(),r(e.$$.fragment)},l(t){l(n.$$.fragment,t),o=i(t),l(e.$$.fragment,t)},m(t,r){g(n,t,r),v(t,o,r),g(e,t,r),a=!0},p(t,o){const a={};1&o&&(a.$$scope={dirty:o,ctx:t}),n.$set(a);const r={};1&o&&(r.$$scope={dirty:o,ctx:t}),e.$set(r)},i(t){a||(y(n.$$.fragment,t),y(e.$$.fragment,t),a=!0)},o(t){E(n.$$.fragment,t),E(e.$$.fragment,t),a=!1},d(t){T(n,t),t&&m(o),T(e,t)}}}function D(t){let o,a,B,N,P,U,D,k,C,z,I,A,L,V,R,G,H,q,M,j,W,Y,F,J,K,Q,X,Z,_,tt,ot,at,nt,et,rt,st,ut,ct,lt,it,bt,ft,dt,mt,ht,pt,gt,vt,$t,yt,Et,Tt,Bt,Nt,wt,Ot,St,Pt,Ut,xt,Dt,kt,Ct,zt,It,At,Lt,Vt,Rt,Gt,Ht,qt,Mt,jt,Wt,Yt,Ft,Jt,Kt,Qt,Xt,Zt,_t,to,oo,ao,no,eo,ro,so,uo,co,lo,io,bo,fo,mo,ho,po,go,vo,$o,yo,Eo,To,Bo,No,wo,Oo,So,Po,Uo,xo,Do,ko,Co,zo,Io,Ao,Lo,Vo,Ro,Go,Ho,qo,Mo,jo,Wo,Yo,Fo,Jo,Ko,Qo,Xo,Zo,_o,ta,oa,aa,na,ea,ra,sa,ua,ca,la,ia,ba,fa,da,ma,ha,pa,ga,va,$a,ya,Ea,Ta,Ba,Na,wa,Oa,Sa,Pa,Ua,xa,Da,ka,Ca,za,Ia,Aa,La,Va,Ra,Ga,Ha,qa,Ma,ja,Wa,Ya,Fa,Ja,Ka,Qa,Xa,Za,_a,tn,on,an,nn,en,rn,sn,un,cn,ln,bn,fn,dn=n("//default config\nbutton: (\n  props: (\n    padding: .438em 1.2em,\n    fontSize: rem(14),\n    fontWeight: bold,\n    lineHeight: 1.45,\n    color: #333,\n    backgroundColor: #fff,\n    border: 1px solid #cecece,\n    borderRadius: .2em,\n  ),\n  states: (\n    hover: (\n      color: this('button.props.color'),\n      backgroundColor: ooDarken(this('button.props.backgroundColor'), 10%),\n    ),\n    focus: this('button.states.hover'),\n    active: (\n      backgroundColor: ooDarken(this('button.props.backgroundColor'), 12%),\n      boxShadow: inset 1px 1px 1px 0 ooDarken(this('button.props.backgroundColor'), 25%),\n      outline: none,\n    ),\n  ),\n),\n","scss")+"",mn=n("//default config\npalette: (\n  'primary': #0ea7d6,\n  'secondary': #959595,\n),\nbutton: (\n  props: (/* ... */),\n  states: (/* ... */),\n  colors: this('palette'),\n  outline: false,\n),\n","scss")+"",hn=n("$ooLoop: ooAdd('button.colors', (\n  'success': #8cc63f,\n  'nectarine': #ffbe76,\n  'yellow': #fffa65,\n  'salmon': #ffb8b8,\n  'purple': #8e44ad,\n  'green-sea': #16a085,\n));","scss")+"",pn=n("$ooLoop: ooSet('button.outline', true);","scss")+"",gn=n("//default config\nbutton: (\n  variants: (\n    'full': ( // full available as default\n      width: 100%,\n    ),\n  )\n),\n","scss")+"",vn=n("$ooLoop: ooAdd('button.variants', (\n  'baggy': (\n    padding: 1.2em 2em,\n    text-transform: uppercase,\n  ),\n  'large': (\n    font-size: 1.5rem,\n  ),\n  'tag': (\n    padding: 0.1em 0.5em,\n    font-weight: 500,\n    border-radius: 50em,\n  ),\n));","scss")+"";const $n=new e({props:{title:"Button component"}}),yn=new w({props:{prop:"stretch",$$slots:{default:[x]},$$scope:{ctx:t}}}),En=new S({props:{content:'<button oo-button>Base</button>\n<a oo-button="primary" href="#">Primary</a>\n<input oo-button="secondary" type="button" value="Secondary">\n'}}),Tn=new S({props:{content:'<button oo-button="primary outline">Success</button>\n<button oo-button="success outline">Success</button>\n<button oo-button="nectarine outline">Nectarine</button>\n<button oo-button="yellow outline">Yellow</button>\n<button oo-button="salmon outline">Salmon</button>\n<button oo-button="purple outline">Purple</button>\n<button oo-button="green-sea outline">Green sea</button>\n'}}),Bn=new S({props:{content:'<button oo-button="primary full">Primary full</button>\n<button oo-button="primary large">Primary large</button>\n<button oo-button="secondary tag">Secondary tag</button>\n<button oo-button="secondary baggy outline">Secondary baggy outline</button>\n'}}),Nn=new S({props:{content:'<button oo-button="primary" class="font-tiny">Tiny</button>\n<button oo-button="primary">Default</button>\n<button oo-button="primary" class="font-medium">Medium</button>\n<button oo-button="primary" class="font-large">Large</button>\n<button oo-button="primary large">Variant large</button>\n'}}),wn=new O({props:{href:"docs/components/form",label:"Use Form"}});return{c(){r($n.$$.fragment),o=s(),a=u("h1"),B=c("Button"),N=s(),P=u("p"),U=c("Modular component and 100% customizable"),D=u("br"),k=s(),C=u("code"),z=c("oo-button"),I=s(),A=u("ul"),L=u("li"),V=u("a"),R=c("Button Colors"),G=s(),H=u("li"),q=u("a"),M=c("Button Variants"),j=s(),W=u("li"),Y=u("a"),F=c("Button Sizes"),J=s(),K=u("p"),Q=c("The base style of the button is set through the "),X=u("a"),Z=u("em"),_=c("props"),tt=c(" & "),ot=u("a"),at=u("em"),nt=c("states"),et=c(" properties giving you complete control on the appearance to make it the way you like."),rt=s(),ut=s(),r(yn.$$.fragment),ct=s(),lt=u("h2"),it=u("a"),bt=c("#"),ft=c(" Colors"),dt=s(),mt=u("p"),ht=c("Loop is giving you two colors by default, it's up to you to add more or less."),pt=u("code"),gt=c('oo-button="'),vt=u("i"),$t=c("colorName"),yt=c('"'),Et=s(),Bt=s(),r(En.$$.fragment),Nt=s(),wt=u("div"),Ot=u("button"),St=c("Base"),Pt=s(),Ut=u("a"),xt=c("Primary"),Dt=s(),kt=u("input"),Ct=s(),zt=u("p"),It=c("While settings "),At=u("strong"),Lt=c("custom colors"),Vt=c(", Loop will "),Rt=u("strong"),Gt=c("automatically determine the constrate"),Ht=c(" of the text from the background color."),qt=s(),jt=s(),Wt=u("div"),Yt=u("button"),Ft=c("Success"),Jt=s(),Kt=u("button"),Qt=c("Nectarine"),Xt=s(),Zt=u("button"),_t=c("Yellow"),to=s(),oo=u("button"),ao=c("Salmon"),no=s(),eo=u("button"),ro=c("Purple"),so=s(),uo=u("button"),co=c("Green sea"),lo=s(),io=u("h3"),bo=c("Outline"),fo=s(),mo=u("p"),ho=c("An outline version of each color available. "),po=u("code"),go=c('oo-button="'),vo=u("i"),$o=c("colorName"),yo=c(' outline"'),Eo=s(),Bo=s(),r(Tn.$$.fragment),No=s(),wo=u("div"),Oo=u("button"),So=c("Primary"),Po=s(),Uo=u("button"),xo=c("Success"),Do=s(),ko=u("button"),Co=c("Nectarine"),zo=s(),Io=u("button"),Ao=c("Yellow"),Lo=s(),Vo=u("button"),Ro=c("Salmon"),Go=s(),Ho=u("button"),qo=c("Purple"),Mo=s(),jo=u("button"),Wo=c("Green sea"),Yo=s(),Fo=u("hr"),Jo=s(),Ko=u("h2"),Qo=u("a"),Xo=c("#"),Zo=c(" Variants"),_o=s(),ta=u("p"),oa=c("Change the size, the shape, the appearance of the button via the "),aa=u("em"),na=c("variants"),ea=c(" property by passing a list of css rules attached to a name. "),ra=u("code"),sa=c('oo-button="'),ua=u("i"),ca=c("variantName"),la=c('"'),ia=c("."),ba=s(),da=s(),ha=s(),r(Bn.$$.fragment),pa=s(),ga=u("div"),va=u("button"),$a=c("Primary full"),ya=s(),Ea=u("button"),Ta=c("Primary large"),Ba=u("br"),Na=s(),wa=u("button"),Oa=c("Secondary tag"),Sa=u("br"),Pa=s(),Ua=u("button"),xa=c("Secondary baggy outline"),Da=s(),ka=u("hr"),Ca=s(),za=u("h2"),Ia=u("a"),Aa=c("#"),La=c(" Sizes"),Va=s(),Ra=u("p"),Ga=c("While the size of the button can be modified from "),Ha=u("a"),qa=c("variants"),Ma=c(".\nIt is also possible to "),ja=u("strong"),Wa=c("use text-utilites to quickly achieve some adjustments"),Ya=c("."),Fa=s(),r(Nn.$$.fragment),Ja=s(),Ka=u("div"),Qa=u("button"),Xa=c("Tiny"),Za=s(),_a=u("button"),tn=c("Default"),on=s(),an=u("button"),nn=c("Medium"),en=s(),rn=u("button"),sn=c("Large"),un=s(),cn=u("button"),ln=c("Variant large"),bn=s(),r(wn.$$.fragment),this.h()},l(t){l($n.$$.fragment,t),o=i(t),a=b(t,"H1",{});var n=f(a);B=d(n,"Button"),n.forEach(m),N=i(t),P=b(t,"P",{class:!0});var e=f(P);U=d(e,"Modular component and 100% customizable"),D=b(e,"BR",{}),k=i(e),C=b(e,"CODE",{class:!0});var r=f(C);z=d(r,"oo-button"),r.forEach(m),e.forEach(m),I=i(t),A=b(t,"UL",{});var s=f(A);L=b(s,"LI",{});var u=f(L);V=b(u,"A",{href:!0,title:!0});var c=f(V);R=d(c,"Button Colors"),c.forEach(m),u.forEach(m),G=i(s),H=b(s,"LI",{});var h=f(H);q=b(h,"A",{href:!0,title:!0});var p=f(q);M=d(p,"Button Variants"),p.forEach(m),h.forEach(m),j=i(s),W=b(s,"LI",{});var g=f(W);Y=b(g,"A",{href:!0,title:!0});var v=f(Y);F=d(v,"Button Sizes"),v.forEach(m),g.forEach(m),s.forEach(m),J=i(t),K=b(t,"P",{});var $=f(K);Q=d($,"The base style of the button is set through the "),X=b($,"A",{href:!0,title:!0});var y=f(X);Z=b(y,"EM",{});var E=f(Z);_=d(E,"props"),E.forEach(m),y.forEach(m),tt=d($," & "),ot=b($,"A",{href:!0,title:!0});var T=f(ot);at=b(T,"EM",{});var w=f(at);nt=d(w,"states"),w.forEach(m),T.forEach(m),et=d($," properties giving you complete control on the appearance to make it the way you like."),$.forEach(m),rt=i(t),ut=i(t),l(yn.$$.fragment,t),ct=i(t),lt=b(t,"H2",{class:!0,id:!0});var O=f(lt);it=b(O,"A",{href:!0,title:!0});var S=f(it);bt=d(S,"#"),S.forEach(m),ft=d(O," Colors"),O.forEach(m),dt=i(t),mt=b(t,"P",{});var x=f(mt);ht=d(x,"Loop is giving you two colors by default, it's up to you to add more or less."),pt=b(x,"CODE",{});var st=f(pt);gt=d(st,'oo-button="'),vt=b(st,"I",{});var Tt=f(vt);$t=d(Tt,"colorName"),Tt.forEach(m),yt=d(st,'"'),st.forEach(m),x.forEach(m),Et=i(t),Bt=i(t),l(En.$$.fragment,t),Nt=i(t),wt=b(t,"DIV",{class:!0});var Mt=f(wt);Ot=b(Mt,"BUTTON",{"data-oo-button":!0});var To=f(Ot);St=d(To,"Base"),To.forEach(m),Pt=i(Mt),Ut=b(Mt,"A",{"data-oo-button":!0,href:!0});var fa=f(Ut);xt=d(fa,"Primary"),fa.forEach(m),Dt=i(Mt),kt=b(Mt,"INPUT",{"data-oo-button":!0,type:!0,value:!0}),Mt.forEach(m),Ct=i(t),zt=b(t,"P",{class:!0});var ma=f(zt);It=d(ma,"While settings "),At=b(ma,"STRONG",{});var fn=f(At);Lt=d(fn,"custom colors"),fn.forEach(m),Vt=d(ma,", Loop will "),Rt=b(ma,"STRONG",{});var dn=f(Rt);Gt=d(dn,"automatically determine the constrate"),dn.forEach(m),Ht=d(ma," of the text from the background color."),ma.forEach(m),qt=i(t),jt=i(t),Wt=b(t,"DIV",{class:!0});var mn=f(Wt);Yt=b(mn,"BUTTON",{"data-oo-button":!0});var hn=f(Yt);Ft=d(hn,"Success"),hn.forEach(m),Jt=i(mn),Kt=b(mn,"BUTTON",{"data-oo-button":!0});var pn=f(Kt);Qt=d(pn,"Nectarine"),pn.forEach(m),Xt=i(mn),Zt=b(mn,"BUTTON",{"data-oo-button":!0});var gn=f(Zt);_t=d(gn,"Yellow"),gn.forEach(m),to=i(mn),oo=b(mn,"BUTTON",{"data-oo-button":!0});var vn=f(oo);ao=d(vn,"Salmon"),vn.forEach(m),no=i(mn),eo=b(mn,"BUTTON",{"data-oo-button":!0});var On=f(eo);ro=d(On,"Purple"),On.forEach(m),so=i(mn),uo=b(mn,"BUTTON",{"data-oo-button":!0});var Sn=f(uo);co=d(Sn,"Green sea"),Sn.forEach(m),mn.forEach(m),lo=i(t),io=b(t,"H3",{});var Pn=f(io);bo=d(Pn,"Outline"),Pn.forEach(m),fo=i(t),mo=b(t,"P",{});var Un=f(mo);ho=d(Un,"An outline version of each color available. "),po=b(Un,"CODE",{});var xn=f(po);go=d(xn,'oo-button="'),vo=b(xn,"I",{});var Dn=f(vo);$o=d(Dn,"colorName"),Dn.forEach(m),yo=d(xn,' outline"'),xn.forEach(m),Un.forEach(m),Eo=i(t),Bo=i(t),l(Tn.$$.fragment,t),No=i(t),wo=b(t,"DIV",{class:!0});var kn=f(wo);Oo=b(kn,"BUTTON",{"data-oo-button":!0});var Cn=f(Oo);So=d(Cn,"Primary"),Cn.forEach(m),Po=i(kn),Uo=b(kn,"BUTTON",{"data-oo-button":!0});var zn=f(Uo);xo=d(zn,"Success"),zn.forEach(m),Do=i(kn),ko=b(kn,"BUTTON",{"data-oo-button":!0});var In=f(ko);Co=d(In,"Nectarine"),In.forEach(m),zo=i(kn),Io=b(kn,"BUTTON",{"data-oo-button":!0});var An=f(Io);Ao=d(An,"Yellow"),An.forEach(m),Lo=i(kn),Vo=b(kn,"BUTTON",{"data-oo-button":!0});var Ln=f(Vo);Ro=d(Ln,"Salmon"),Ln.forEach(m),Go=i(kn),Ho=b(kn,"BUTTON",{"data-oo-button":!0});var Vn=f(Ho);qo=d(Vn,"Purple"),Vn.forEach(m),Mo=i(kn),jo=b(kn,"BUTTON",{"data-oo-button":!0});var Rn=f(jo);Wo=d(Rn,"Green sea"),Rn.forEach(m),kn.forEach(m),Yo=i(t),Fo=b(t,"HR",{}),Jo=i(t),Ko=b(t,"H2",{id:!0});var Gn=f(Ko);Qo=b(Gn,"A",{href:!0,title:!0});var Hn=f(Qo);Xo=d(Hn,"#"),Hn.forEach(m),Zo=d(Gn," Variants"),Gn.forEach(m),_o=i(t),ta=b(t,"P",{});var qn=f(ta);oa=d(qn,"Change the size, the shape, the appearance of the button via the "),aa=b(qn,"EM",{});var Mn=f(aa);na=d(Mn,"variants"),Mn.forEach(m),ea=d(qn," property by passing a list of css rules attached to a name. "),ra=b(qn,"CODE",{});var jn=f(ra);sa=d(jn,'oo-button="'),ua=b(jn,"I",{});var Wn=f(ua);ca=d(Wn,"variantName"),Wn.forEach(m),la=d(jn,'"'),jn.forEach(m),ia=d(qn,"."),qn.forEach(m),ba=i(t),da=i(t),ha=i(t),l(Bn.$$.fragment,t),pa=i(t),ga=b(t,"DIV",{class:!0});var Yn=f(ga);va=b(Yn,"BUTTON",{"data-oo-button":!0,class:!0});var Fn=f(va);$a=d(Fn,"Primary full"),Fn.forEach(m),ya=i(Yn),Ea=b(Yn,"BUTTON",{"data-oo-button":!0,class:!0});var Jn=f(Ea);Ta=d(Jn,"Primary large"),Jn.forEach(m),Ba=b(Yn,"BR",{}),Na=i(Yn),wa=b(Yn,"BUTTON",{"data-oo-button":!0,class:!0});var Kn=f(wa);Oa=d(Kn,"Secondary tag"),Kn.forEach(m),Sa=b(Yn,"BR",{}),Pa=i(Yn),Ua=b(Yn,"BUTTON",{"data-oo-button":!0});var Qn=f(Ua);xa=d(Qn,"Secondary baggy outline"),Qn.forEach(m),Yn.forEach(m),Da=i(t),ka=b(t,"HR",{}),Ca=i(t),za=b(t,"H2",{class:!0,id:!0});var Xn=f(za);Ia=b(Xn,"A",{href:!0,title:!0});var Zn=f(Ia);Aa=d(Zn,"#"),Zn.forEach(m),La=d(Xn," Sizes"),Xn.forEach(m),Va=i(t),Ra=b(t,"P",{});var _n=f(Ra);Ga=d(_n,"While the size of the button can be modified from "),Ha=b(_n,"A",{href:!0,title:!0});var te=f(Ha);qa=d(te,"variants"),te.forEach(m),Ma=d(_n,".\nIt is also possible to "),ja=b(_n,"STRONG",{});var oe=f(ja);Wa=d(oe,"use text-utilites to quickly achieve some adjustments"),oe.forEach(m),Ya=d(_n,"."),_n.forEach(m),Fa=i(t),l(Nn.$$.fragment,t),Ja=i(t),Ka=b(t,"DIV",{class:!0});var ae=f(Ka);Qa=b(ae,"BUTTON",{"data-oo-button":!0,class:!0});var ne=f(Qa);Xa=d(ne,"Tiny"),ne.forEach(m),Za=i(ae),_a=b(ae,"BUTTON",{"data-oo-button":!0});var ee=f(_a);tn=d(ee,"Default"),ee.forEach(m),on=i(ae),an=b(ae,"BUTTON",{"data-oo-button":!0,class:!0});var re=f(an);nn=d(re,"Medium"),re.forEach(m),en=i(ae),rn=b(ae,"BUTTON",{"data-oo-button":!0,class:!0});var se=f(rn);sn=d(se,"Large"),se.forEach(m),un=i(ae),cn=b(ae,"BUTTON",{"data-oo-button":!0});var ue=f(cn);ln=d(ue,"Variant large"),ue.forEach(m),ae.forEach(m),bn=i(t),l(wn.$$.fragment,t),this.h()},h(){h(C,"class","ml-0"),h(P,"class","font-large"),h(V,"href","docs/components/button#colors"),h(V,"title","Button colors"),h(q,"href","docs/components/button#variants"),h(q,"title","Button variants"),h(Y,"href","docs/components/button#sizes"),h(Y,"title","Button sizes"),h(X,"href","docs/config#props"),h(X,"title","Props attribute"),h(ot,"href","docs/config#states"),h(ot,"title","States attribute"),st=new p(dn,ut),h(it,"href","docs/components/button#colors"),h(it,"title","Colors"),h(lt,"class","mt-45"),h(lt,"id","colors"),Tt=new p(mn,Bt),h(Ot,"data-oo-button",""),h(Ut,"data-oo-button","primary"),h(Ut,"href","docs/components/button#colors"),h(kt,"data-oo-button","secondary"),h(kt,"type","button"),kt.value="Secondary",h(wt,"class","ground svelte-v81nqg"),h(zt,"class","info"),Mt=new p(hn,jt),h(Yt,"data-oo-button","success"),h(Kt,"data-oo-button","nectarine"),h(Zt,"data-oo-button","yellow"),h(oo,"data-oo-button","salmon"),h(eo,"data-oo-button","purple"),h(uo,"data-oo-button","green-sea"),h(Wt,"class","ground svelte-v81nqg"),To=new p(pn,Bo),h(Oo,"data-oo-button","primary outline"),h(Uo,"data-oo-button","success outline"),h(ko,"data-oo-button","nectarine outline"),h(Io,"data-oo-button","yellow outline"),h(Vo,"data-oo-button","salmon outline"),h(Ho,"data-oo-button","purple outline"),h(jo,"data-oo-button","green-sea outline"),h(wo,"class","ground svelte-v81nqg"),h(Qo,"href","docs/components/button#variants"),h(Qo,"title","Button variants"),h(Ko,"id","variants"),fa=new p(gn,da),ma=new p(vn,ha),h(va,"data-oo-button","primary full"),h(va,"class","mb-10"),h(Ea,"data-oo-button","primary large"),h(Ea,"class","mb-10"),h(wa,"data-oo-button","secondary tag"),h(wa,"class","mb-10"),h(Ua,"data-oo-button","secondary baggy outline"),h(ga,"class","ground svelte-v81nqg"),h(Ia,"href","docs/components/button#sizes"),h(Ia,"title","Sizes"),h(za,"class","mt-45"),h(za,"id","sizes"),h(Ha,"href","docs/components/button#variants"),h(Ha,"title","Button variants"),h(Qa,"data-oo-button","primary"),h(Qa,"class","font-tiny"),h(_a,"data-oo-button","primary"),h(an,"data-oo-button","primary"),h(an,"class","font-medium"),h(rn,"data-oo-button","primary"),h(rn,"class","font-large"),h(cn,"data-oo-button","primary large"),h(Ka,"class","ground svelte-v81nqg")},m(t,n){g($n,t,n),v(t,o,n),v(t,a,n),$(a,B),v(t,N,n),v(t,P,n),$(P,U),$(P,D),$(P,k),$(P,C),$(C,z),v(t,I,n),v(t,A,n),$(A,L),$(L,V),$(V,R),$(A,G),$(A,H),$(H,q),$(q,M),$(A,j),$(A,W),$(W,Y),$(Y,F),v(t,J,n),v(t,K,n),$(K,Q),$(K,X),$(X,Z),$(Z,_),$(K,tt),$(K,ot),$(ot,at),$(at,nt),$(K,et),v(t,rt,n),st.m(t,n),v(t,ut,n),g(yn,t,n),v(t,ct,n),v(t,lt,n),$(lt,it),$(it,bt),$(lt,ft),v(t,dt,n),v(t,mt,n),$(mt,ht),$(mt,pt),$(pt,gt),$(pt,vt),$(vt,$t),$(pt,yt),v(t,Et,n),Tt.m(t,n),v(t,Bt,n),g(En,t,n),v(t,Nt,n),v(t,wt,n),$(wt,Ot),$(Ot,St),$(wt,Pt),$(wt,Ut),$(Ut,xt),$(wt,Dt),$(wt,kt),v(t,Ct,n),v(t,zt,n),$(zt,It),$(zt,At),$(At,Lt),$(zt,Vt),$(zt,Rt),$(Rt,Gt),$(zt,Ht),v(t,qt,n),Mt.m(t,n),v(t,jt,n),v(t,Wt,n),$(Wt,Yt),$(Yt,Ft),$(Wt,Jt),$(Wt,Kt),$(Kt,Qt),$(Wt,Xt),$(Wt,Zt),$(Zt,_t),$(Wt,to),$(Wt,oo),$(oo,ao),$(Wt,no),$(Wt,eo),$(eo,ro),$(Wt,so),$(Wt,uo),$(uo,co),v(t,lo,n),v(t,io,n),$(io,bo),v(t,fo,n),v(t,mo,n),$(mo,ho),$(mo,po),$(po,go),$(po,vo),$(vo,$o),$(po,yo),v(t,Eo,n),To.m(t,n),v(t,Bo,n),g(Tn,t,n),v(t,No,n),v(t,wo,n),$(wo,Oo),$(Oo,So),$(wo,Po),$(wo,Uo),$(Uo,xo),$(wo,Do),$(wo,ko),$(ko,Co),$(wo,zo),$(wo,Io),$(Io,Ao),$(wo,Lo),$(wo,Vo),$(Vo,Ro),$(wo,Go),$(wo,Ho),$(Ho,qo),$(wo,Mo),$(wo,jo),$(jo,Wo),v(t,Yo,n),v(t,Fo,n),v(t,Jo,n),v(t,Ko,n),$(Ko,Qo),$(Qo,Xo),$(Ko,Zo),v(t,_o,n),v(t,ta,n),$(ta,oa),$(ta,aa),$(aa,na),$(ta,ea),$(ta,ra),$(ra,sa),$(ra,ua),$(ua,ca),$(ra,la),$(ta,ia),v(t,ba,n),fa.m(t,n),v(t,da,n),ma.m(t,n),v(t,ha,n),g(Bn,t,n),v(t,pa,n),v(t,ga,n),$(ga,va),$(va,$a),$(ga,ya),$(ga,Ea),$(Ea,Ta),$(ga,Ba),$(ga,Na),$(ga,wa),$(wa,Oa),$(ga,Sa),$(ga,Pa),$(ga,Ua),$(Ua,xa),v(t,Da,n),v(t,ka,n),v(t,Ca,n),v(t,za,n),$(za,Ia),$(Ia,Aa),$(za,La),v(t,Va,n),v(t,Ra,n),$(Ra,Ga),$(Ra,Ha),$(Ha,qa),$(Ra,Ma),$(Ra,ja),$(ja,Wa),$(Ra,Ya),v(t,Fa,n),g(Nn,t,n),v(t,Ja,n),v(t,Ka,n),$(Ka,Qa),$(Qa,Xa),$(Ka,Za),$(Ka,_a),$(_a,tn),$(Ka,on),$(Ka,an),$(an,nn),$(Ka,en),$(Ka,rn),$(rn,sn),$(Ka,un),$(Ka,cn),$(cn,ln),v(t,bn,n),g(wn,t,n),fn=!0},p(t,[o]){const a={};1&o&&(a.$$scope={dirty:o,ctx:t}),yn.$set(a)},i(t){fn||(y($n.$$.fragment,t),y(yn.$$.fragment,t),y(En.$$.fragment,t),y(Tn.$$.fragment,t),y(Bn.$$.fragment,t),y(Nn.$$.fragment,t),y(wn.$$.fragment,t),fn=!0)},o(t){E($n.$$.fragment,t),E(yn.$$.fragment,t),E(En.$$.fragment,t),E(Tn.$$.fragment,t),E(Bn.$$.fragment,t),E(Nn.$$.fragment,t),E(wn.$$.fragment,t),fn=!1},d(t){T($n,t),t&&m(o),t&&m(a),t&&m(N),t&&m(P),t&&m(I),t&&m(A),t&&m(J),t&&m(K),t&&m(rt),t&&st.d(),t&&m(ut),T(yn,t),t&&m(ct),t&&m(lt),t&&m(dt),t&&m(mt),t&&m(Et),t&&Tt.d(),t&&m(Bt),T(En,t),t&&m(Nt),t&&m(wt),t&&m(Ct),t&&m(zt),t&&m(qt),t&&Mt.d(),t&&m(jt),t&&m(Wt),t&&m(lo),t&&m(io),t&&m(fo),t&&m(mo),t&&m(Eo),t&&To.d(),t&&m(Bo),T(Tn,t),t&&m(No),t&&m(wo),t&&m(Yo),t&&m(Fo),t&&m(Jo),t&&m(Ko),t&&m(_o),t&&m(ta),t&&m(ba),t&&fa.d(),t&&m(da),t&&ma.d(),t&&m(ha),T(Bn,t),t&&m(pa),t&&m(ga),t&&m(Da),t&&m(ka),t&&m(Ca),t&&m(za),t&&m(Va),t&&m(Ra),t&&m(Fa),T(Nn,t),t&&m(Ja),t&&m(Ka),t&&m(bn),T(wn,t)}}}export default class extends t{constructor(t){super(),o(this,t,null,D,a,{})}}
