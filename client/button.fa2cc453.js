import{S as t,i as o,s as a,H as n,J as e,D as r,r as s,e as u,l as c,E as l,u as i,a as b,b as f,m as d,d as m,f as h,I as p,F as g,g as v,o as $,t as y,k as E,G as T,C as B,v as N}from"./client.85d11c56.js";import{R as w}from"./Row.4271228b.js";import{P as O}from"./Pagination.8b244cee.js";import{D as S}from"./DataAttrToggler.d34eea1d.js";function P(t){let o;const a=new S({props:{content:"\x3c!-- basic button --\x3e\n<button oo-button>Button</button>\n",class:"mt-0 mb-0"}});return{c(){r(a.$$.fragment)},l(t){l(a.$$.fragment,t)},m(t,n){g(a,t,n),o=!0},p:N,i(t){o||(y(a.$$.fragment,t),o=!0)},o(t){E(a.$$.fragment,t),o=!1},d(t){T(a,t)}}}function U(t){let o,a,n;return{c(){o=u("div"),a=u("button"),n=c("Button"),this.h()},l(t){o=b(t,"DIV",{class:!0});var e=f(o);a=b(e,"BUTTON",{"data-oo-button":!0});var r=f(a);n=d(r,"Button"),r.forEach(m),e.forEach(m),this.h()},h(){h(a,"data-oo-button",""),h(o,"class","ground mb-0 svelte-1dcc50s")},m(t,e){v(t,o,e),$(o,a),$(a,n)},d(t){t&&m(o)}}}function x(t){let o,a;const n=new B({props:{$$slots:{default:[P]},$$scope:{ctx:t}}}),e=new B({props:{$$slots:{default:[U]},$$scope:{ctx:t}}});return{c(){r(n.$$.fragment),o=s(),r(e.$$.fragment)},l(t){l(n.$$.fragment,t),o=i(t),l(e.$$.fragment,t)},m(t,r){g(n,t,r),v(t,o,r),g(e,t,r),a=!0},p(t,o){const a={};1&o&&(a.$$scope={dirty:o,ctx:t}),n.$set(a);const r={};1&o&&(r.$$scope={dirty:o,ctx:t}),e.$set(r)},i(t){a||(y(n.$$.fragment,t),y(e.$$.fragment,t),a=!0)},o(t){E(n.$$.fragment,t),E(e.$$.fragment,t),a=!1},d(t){T(n,t),t&&m(o),T(e,t)}}}function D(t){let o,a,B,N,P,U,D,I,k,z,L,A,C,V,R,G,M,H,j,Y,W,q,F,J,K,Q,X,Z,_,tt,ot,at,nt,et,rt,st,ut,ct,lt,it,bt,ft,dt,mt,ht,pt,gt,vt,$t,yt,Et,Tt,Bt,Nt,wt,Ot,St,Pt,Ut,xt,Dt,It,kt,zt,Lt,At,Ct,Vt,Rt,Gt,Mt,Ht,jt,Yt,Wt,qt,Ft,Jt,Kt,Qt,Xt,Zt,_t,to,oo,ao,no,eo,ro,so,uo,co,lo,io,bo,fo,mo,ho,po,go,vo,$o,yo,Eo,To,Bo,No,wo,Oo,So,Po,Uo,xo,Do,Io,ko,zo,Lo,Ao,Co,Vo,Ro,Go,Mo,Ho,jo,Yo,Wo,qo,Fo,Jo,Ko,Qo,Xo,Zo,_o,ta,oa,aa,na,ea,ra,sa,ua,ca,la,ia,ba,fa,da,ma,ha,pa,ga,va,$a,ya,Ea,Ta,Ba,Na,wa,Oa,Sa,Pa,Ua,xa,Da,Ia,ka,za,La,Aa,Ca,Va,Ra,Ga,Ma,Ha,ja,Ya,Wa,qa,Fa,Ja,Ka,Qa,Xa,Za,_a,tn,on,an,nn,en,rn,sn,un,cn,ln,bn,fn,dn,mn,hn,pn,gn,vn,$n,yn,En,Tn,Bn,Nn,wn,On=n("//default config\nbutton: (\n  props: (\n    padding: .438em 1.2em,\n    font-size: rem(14),\n    font-weight: bold,\n    line-height: 1.45,\n    color: #333,\n    background-color: #fff,\n    border: 1px solid #cecece,\n    border-radius: .2em,\n  ),\n  states: (\n    hover: (\n      color: this('button.props.color'),\n      background-color: ooDarken(this('button.props.backgroundColor'), 10%),\n    ),\n    focus: this('button.states.hover'),\n    active: (\n      background-color: ooDarken(this('button.props.backgroundColor'), 12%),\n      box-shadow: inset 1px 1px 1px 0 ooDarken(this('button.props.backgroundColor'), 25%),\n      outline: none,\n    ),\n  ),\n),\n","scss")+"",Sn=n("//default config\npalette: (\n  'primary': #0ea7d6,\n  'secondary': #959595,\n),\nbutton: (\n  props: (/* ... */),\n  states: (/* ... */),\n  colors: this('palette'),\n  outline: false,\n),\n","scss")+"",Pn=n("$ooLoop: ooAdd('button.colors', (\n  'success': #8cc63f,\n  'nectarine': #ffbe76,\n  'yellow': #fffa65,\n  'salmon': #ffb8b8,\n  'purple': #8e44ad,\n  'green-sea': #16a085,\n));","scss")+"",Un=n("$ooLoop: ooSet('button.outline', true);","scss")+"",xn=n("//default config\nbutton: (\n  variants: (\n    'full': ( // full available as default\n      width: 100%,\n    ),\n  )\n),\n","scss")+"",Dn=n("$ooLoop: ooAdd('button.variants', (\n  'baggy': (\n    padding: 1.2em 2em,\n    text-transform: uppercase,\n  ),\n  'large': (\n    font-size: 1.5rem,\n  ),\n  'tag': (\n    padding: 0.1em 0.5em,\n    font-weight: 500,\n    border-radius: 50em,\n  ),\n));","scss")+"";const In=new e({props:{title:"Button component",description:"Modular button component and 100% customizable"}}),kn=new w({props:{prop:"stretch",$$slots:{default:[x]},$$scope:{ctx:t}}}),zn=new S({props:{content:'<button oo-button>Base</button>\n<a oo-button="primary" href="#">Primary</a>\n<input oo-button="secondary" type="button" value="Secondary">\n'}}),Ln=new S({props:{content:'<button oo-button="primary outline">Success</button>\n<button oo-button="success outline">Success</button>\n<button oo-button="nectarine outline">Nectarine</button>\n<button oo-button="yellow outline">Yellow</button>\n<button oo-button="salmon outline">Salmon</button>\n<button oo-button="purple outline">Purple</button>\n<button oo-button="green-sea outline">Green sea</button>\n'}}),An=new S({props:{content:'<button oo-button="primary full">Primary full</button>\n<button oo-button="primary large">Primary large</button>\n<button oo-button="secondary tag">Secondary tag</button>\n<button oo-button="secondary baggy outline">Secondary baggy outline</button>\n'}}),Cn=new S({props:{content:'<button oo-button="primary" class="font-tiny">Tiny</button>\n<button oo-button="primary">Default</button>\n<button oo-button="primary" class="font-medium">Medium</button>\n<button oo-button="primary" class="font-large">Large</button>\n<button oo-button="primary large">Variant large</button>\n'}}),Vn=new O({props:{href:"docs/components/form/",label:"Use Form"}});return{c(){r(In.$$.fragment),o=s(),a=u("h1"),B=c("Button"),N=s(),P=u("p"),U=c("Modular component and 100% customizable"),D=u("br"),I=s(),k=u("code"),z=c("oo-button"),L=s(),A=u("ul"),C=u("li"),V=u("a"),R=c("Button Colors"),G=s(),M=u("li"),H=u("a"),j=c("Button Variants"),Y=s(),W=u("li"),q=u("a"),F=c("Button Sizes"),J=s(),K=u("p"),Q=c("The base style of the button is set through the "),X=u("a"),Z=u("em"),_=c("props"),tt=c(" & "),ot=u("a"),at=u("em"),nt=c("states"),et=c(" properties giving you complete control on the appearance to make it the way you like."),rt=s(),ut=s(),r(kn.$$.fragment),ct=s(),lt=u("p"),it=c("Loop config "),bt=u("strong"),ft=c("includes "),dt=u("em"),mt=c("button"),ht=c(" by default"),pt=c(". In manual mode add the mixin "),gt=u("strong"),vt=c("Button()"),$t=s(),yt=u("div"),Et=s(),Tt=u("h2"),Bt=u("a"),Nt=c("#"),wt=c(" Colors"),Ot=s(),St=u("p"),Pt=c("Loop is giving you two colors by default, it's up to you to add more or less."),Ut=u("code"),xt=c('oo-button="'),Dt=u("i"),It=c("colorName"),kt=c('"'),zt=s(),At=s(),r(zn.$$.fragment),Ct=s(),Vt=u("div"),Rt=u("button"),Gt=c("Base"),Mt=s(),Ht=u("a"),jt=c("Primary"),Yt=s(),Wt=u("input"),qt=s(),Ft=u("p"),Jt=c("While settings "),Kt=u("strong"),Qt=c("custom colors"),Xt=c(", Loop will "),Zt=u("strong"),_t=c("automatically determine the constrate"),to=c(" of the text from the background color."),oo=s(),no=s(),eo=u("div"),ro=u("button"),so=c("Success"),uo=s(),co=u("button"),lo=c("Nectarine"),io=s(),bo=u("button"),fo=c("Yellow"),mo=s(),ho=u("button"),po=c("Salmon"),go=s(),vo=u("button"),$o=c("Purple"),yo=s(),Eo=u("button"),To=c("Green sea"),Bo=s(),No=u("h3"),wo=c("Outline"),Oo=s(),So=u("p"),Po=c("An outline version of each color available. "),Uo=u("code"),xo=c('oo-button="'),Do=u("i"),Io=c("colorName"),ko=c(' outline"'),zo=s(),Ao=s(),r(Ln.$$.fragment),Co=s(),Vo=u("div"),Ro=u("button"),Go=c("Primary"),Mo=s(),Ho=u("button"),jo=c("Success"),Yo=s(),Wo=u("button"),qo=c("Nectarine"),Fo=s(),Jo=u("button"),Ko=c("Yellow"),Qo=s(),Xo=u("button"),Zo=c("Salmon"),_o=s(),ta=u("button"),oa=c("Purple"),aa=s(),na=u("button"),ea=c("Green sea"),ra=s(),sa=u("hr"),ua=s(),ca=u("h2"),la=u("a"),ia=c("#"),ba=c(" Variants"),fa=s(),da=u("p"),ma=c("Change the size, the shape, the appearance of the button via the "),ha=u("em"),pa=c("variants"),ga=c(" property by passing a list of css rules attached to a name. "),va=u("code"),$a=c('oo-button="'),ya=u("i"),Ea=c("variantName"),Ta=c('"'),Ba=c("."),Na=s(),Oa=s(),Pa=s(),r(An.$$.fragment),Ua=s(),xa=u("div"),Da=u("button"),Ia=c("Primary full"),ka=s(),za=u("button"),La=c("Primary large"),Aa=u("br"),Ca=s(),Va=u("button"),Ra=c("Secondary tag"),Ga=u("br"),Ma=s(),Ha=u("button"),ja=c("Secondary baggy outline"),Ya=s(),Wa=u("hr"),qa=s(),Fa=u("h2"),Ja=u("a"),Ka=c("#"),Qa=c(" Sizes"),Xa=s(),Za=u("p"),_a=c("While the size of the button can be modified from "),tn=u("a"),on=c("variants"),an=c(".\nIt is also possible to "),nn=u("strong"),en=c("use text-utilites to quickly achieve some adjustments"),rn=c("."),sn=s(),r(Cn.$$.fragment),un=s(),cn=u("div"),ln=u("button"),bn=c("Tiny"),fn=s(),dn=u("button"),mn=c("Default"),hn=s(),pn=u("button"),gn=c("Medium"),vn=s(),$n=u("button"),yn=c("Large"),En=s(),Tn=u("button"),Bn=c("Variant large"),Nn=s(),r(Vn.$$.fragment),this.h()},l(t){l(In.$$.fragment,t),o=i(t),a=b(t,"H1",{});var n=f(a);B=d(n,"Button"),n.forEach(m),N=i(t),P=b(t,"P",{class:!0});var e=f(P);U=d(e,"Modular component and 100% customizable"),D=b(e,"BR",{}),I=i(e),k=b(e,"CODE",{class:!0});var r=f(k);z=d(r,"oo-button"),r.forEach(m),e.forEach(m),L=i(t),A=b(t,"UL",{});var s=f(A);C=b(s,"LI",{});var u=f(C);V=b(u,"A",{href:!0,title:!0});var c=f(V);R=d(c,"Button Colors"),c.forEach(m),u.forEach(m),G=i(s),M=b(s,"LI",{});var h=f(M);H=b(h,"A",{href:!0,title:!0});var p=f(H);j=d(p,"Button Variants"),p.forEach(m),h.forEach(m),Y=i(s),W=b(s,"LI",{});var g=f(W);q=b(g,"A",{href:!0,title:!0});var v=f(q);F=d(v,"Button Sizes"),v.forEach(m),g.forEach(m),s.forEach(m),J=i(t),K=b(t,"P",{});var $=f(K);Q=d($,"The base style of the button is set through the "),X=b($,"A",{href:!0,title:!0});var y=f(X);Z=b(y,"EM",{});var E=f(Z);_=d(E,"props"),E.forEach(m),y.forEach(m),tt=d($," & "),ot=b($,"A",{href:!0,title:!0});var T=f(ot);at=b(T,"EM",{});var w=f(at);nt=d(w,"states"),w.forEach(m),T.forEach(m),et=d($," properties giving you complete control on the appearance to make it the way you like."),$.forEach(m),rt=i(t),ut=i(t),l(kn.$$.fragment,t),ct=i(t),lt=b(t,"P",{class:!0});var O=f(lt);it=d(O,"Loop config "),bt=b(O,"STRONG",{});var S=f(bt);ft=d(S,"includes "),dt=b(S,"EM",{});var x=f(dt);mt=d(x,"button"),x.forEach(m),ht=d(S," by default"),S.forEach(m),pt=d(O,". In manual mode add the mixin "),gt=b(O,"STRONG",{});var st=f(gt);vt=d(st,"Button()"),st.forEach(m),O.forEach(m),$t=i(t),yt=b(t,"DIV",{class:!0}),f(yt).forEach(m),Et=i(t),Tt=b(t,"H2",{class:!0,id:!0});var Lt=f(Tt);Bt=b(Lt,"A",{href:!0,title:!0});var ao=f(Bt);Nt=d(ao,"#"),ao.forEach(m),wt=d(Lt," Colors"),Lt.forEach(m),Ot=i(t),St=b(t,"P",{});var Lo=f(St);Pt=d(Lo,"Loop is giving you two colors by default, it's up to you to add more or less."),Ut=b(Lo,"CODE",{});var wa=f(Ut);xt=d(wa,'oo-button="'),Dt=b(wa,"I",{});var Sa=f(Dt);It=d(Sa,"colorName"),Sa.forEach(m),kt=d(wa,'"'),wa.forEach(m),Lo.forEach(m),zt=i(t),At=i(t),l(zn.$$.fragment,t),Ct=i(t),Vt=b(t,"DIV",{class:!0});var wn=f(Vt);Rt=b(wn,"BUTTON",{"data-oo-button":!0});var On=f(Rt);Gt=d(On,"Base"),On.forEach(m),Mt=i(wn),Ht=b(wn,"A",{"data-oo-button":!0,href:!0});var Sn=f(Ht);jt=d(Sn,"Primary"),Sn.forEach(m),Yt=i(wn),Wt=b(wn,"INPUT",{"data-oo-button":!0,type:!0,value:!0}),wn.forEach(m),qt=i(t),Ft=b(t,"P",{class:!0});var Pn=f(Ft);Jt=d(Pn,"While settings "),Kt=b(Pn,"STRONG",{});var Un=f(Kt);Qt=d(Un,"custom colors"),Un.forEach(m),Xt=d(Pn,", Loop will "),Zt=b(Pn,"STRONG",{});var xn=f(Zt);_t=d(xn,"automatically determine the constrate"),xn.forEach(m),to=d(Pn," of the text from the background color."),Pn.forEach(m),oo=i(t),no=i(t),eo=b(t,"DIV",{class:!0});var Dn=f(eo);ro=b(Dn,"BUTTON",{"data-oo-button":!0});var Rn=f(ro);so=d(Rn,"Success"),Rn.forEach(m),uo=i(Dn),co=b(Dn,"BUTTON",{"data-oo-button":!0});var Gn=f(co);lo=d(Gn,"Nectarine"),Gn.forEach(m),io=i(Dn),bo=b(Dn,"BUTTON",{"data-oo-button":!0});var Mn=f(bo);fo=d(Mn,"Yellow"),Mn.forEach(m),mo=i(Dn),ho=b(Dn,"BUTTON",{"data-oo-button":!0});var Hn=f(ho);po=d(Hn,"Salmon"),Hn.forEach(m),go=i(Dn),vo=b(Dn,"BUTTON",{"data-oo-button":!0});var jn=f(vo);$o=d(jn,"Purple"),jn.forEach(m),yo=i(Dn),Eo=b(Dn,"BUTTON",{"data-oo-button":!0});var Yn=f(Eo);To=d(Yn,"Green sea"),Yn.forEach(m),Dn.forEach(m),Bo=i(t),No=b(t,"H3",{});var Wn=f(No);wo=d(Wn,"Outline"),Wn.forEach(m),Oo=i(t),So=b(t,"P",{});var qn=f(So);Po=d(qn,"An outline version of each color available. "),Uo=b(qn,"CODE",{});var Fn=f(Uo);xo=d(Fn,'oo-button="'),Do=b(Fn,"I",{});var Jn=f(Do);Io=d(Jn,"colorName"),Jn.forEach(m),ko=d(Fn,' outline"'),Fn.forEach(m),qn.forEach(m),zo=i(t),Ao=i(t),l(Ln.$$.fragment,t),Co=i(t),Vo=b(t,"DIV",{class:!0});var Kn=f(Vo);Ro=b(Kn,"BUTTON",{"data-oo-button":!0});var Qn=f(Ro);Go=d(Qn,"Primary"),Qn.forEach(m),Mo=i(Kn),Ho=b(Kn,"BUTTON",{"data-oo-button":!0});var Xn=f(Ho);jo=d(Xn,"Success"),Xn.forEach(m),Yo=i(Kn),Wo=b(Kn,"BUTTON",{"data-oo-button":!0});var Zn=f(Wo);qo=d(Zn,"Nectarine"),Zn.forEach(m),Fo=i(Kn),Jo=b(Kn,"BUTTON",{"data-oo-button":!0});var _n=f(Jo);Ko=d(_n,"Yellow"),_n.forEach(m),Qo=i(Kn),Xo=b(Kn,"BUTTON",{"data-oo-button":!0});var te=f(Xo);Zo=d(te,"Salmon"),te.forEach(m),_o=i(Kn),ta=b(Kn,"BUTTON",{"data-oo-button":!0});var oe=f(ta);oa=d(oe,"Purple"),oe.forEach(m),aa=i(Kn),na=b(Kn,"BUTTON",{"data-oo-button":!0});var ae=f(na);ea=d(ae,"Green sea"),ae.forEach(m),Kn.forEach(m),ra=i(t),sa=b(t,"HR",{}),ua=i(t),ca=b(t,"H2",{id:!0});var ne=f(ca);la=b(ne,"A",{href:!0,title:!0});var ee=f(la);ia=d(ee,"#"),ee.forEach(m),ba=d(ne," Variants"),ne.forEach(m),fa=i(t),da=b(t,"P",{});var re=f(da);ma=d(re,"Change the size, the shape, the appearance of the button via the "),ha=b(re,"EM",{});var se=f(ha);pa=d(se,"variants"),se.forEach(m),ga=d(re," property by passing a list of css rules attached to a name. "),va=b(re,"CODE",{});var ue=f(va);$a=d(ue,'oo-button="'),ya=b(ue,"I",{});var ce=f(ya);Ea=d(ce,"variantName"),ce.forEach(m),Ta=d(ue,'"'),ue.forEach(m),Ba=d(re,"."),re.forEach(m),Na=i(t),Oa=i(t),Pa=i(t),l(An.$$.fragment,t),Ua=i(t),xa=b(t,"DIV",{class:!0});var le=f(xa);Da=b(le,"BUTTON",{"data-oo-button":!0,class:!0});var ie=f(Da);Ia=d(ie,"Primary full"),ie.forEach(m),ka=i(le),za=b(le,"BUTTON",{"data-oo-button":!0,class:!0});var be=f(za);La=d(be,"Primary large"),be.forEach(m),Aa=b(le,"BR",{}),Ca=i(le),Va=b(le,"BUTTON",{"data-oo-button":!0,class:!0});var fe=f(Va);Ra=d(fe,"Secondary tag"),fe.forEach(m),Ga=b(le,"BR",{}),Ma=i(le),Ha=b(le,"BUTTON",{"data-oo-button":!0});var de=f(Ha);ja=d(de,"Secondary baggy outline"),de.forEach(m),le.forEach(m),Ya=i(t),Wa=b(t,"HR",{}),qa=i(t),Fa=b(t,"H2",{class:!0,id:!0});var me=f(Fa);Ja=b(me,"A",{href:!0,title:!0});var he=f(Ja);Ka=d(he,"#"),he.forEach(m),Qa=d(me," Sizes"),me.forEach(m),Xa=i(t),Za=b(t,"P",{});var pe=f(Za);_a=d(pe,"While the size of the button can be modified from "),tn=b(pe,"A",{href:!0,title:!0});var ge=f(tn);on=d(ge,"variants"),ge.forEach(m),an=d(pe,".\nIt is also possible to "),nn=b(pe,"STRONG",{});var ve=f(nn);en=d(ve,"use text-utilites to quickly achieve some adjustments"),ve.forEach(m),rn=d(pe,"."),pe.forEach(m),sn=i(t),l(Cn.$$.fragment,t),un=i(t),cn=b(t,"DIV",{class:!0});var $e=f(cn);ln=b($e,"BUTTON",{"data-oo-button":!0,class:!0});var ye=f(ln);bn=d(ye,"Tiny"),ye.forEach(m),fn=i($e),dn=b($e,"BUTTON",{"data-oo-button":!0});var Ee=f(dn);mn=d(Ee,"Default"),Ee.forEach(m),hn=i($e),pn=b($e,"BUTTON",{"data-oo-button":!0,class:!0});var Te=f(pn);gn=d(Te,"Medium"),Te.forEach(m),vn=i($e),$n=b($e,"BUTTON",{"data-oo-button":!0,class:!0});var Be=f($n);yn=d(Be,"Large"),Be.forEach(m),En=i($e),Tn=b($e,"BUTTON",{"data-oo-button":!0});var Ne=f(Tn);Bn=d(Ne,"Variant large"),Ne.forEach(m),$e.forEach(m),Nn=i(t),l(Vn.$$.fragment,t),this.h()},h(){h(k,"class","ml-0"),h(P,"class","font-large"),h(V,"href","docs/components/button/#colors"),h(V,"title","Button colors"),h(H,"href","docs/components/button/#variants"),h(H,"title","Button variants"),h(q,"href","docs/components/button/#sizes"),h(q,"title","Button sizes"),h(X,"href","docs/config/#props"),h(X,"title","Props attribute"),h(ot,"href","docs/config/#states"),h(ot,"title","States attribute"),st=new p(On,ut),h(lt,"class","info mt-45"),h(yt,"class","hr"),h(Bt,"href","docs/components/button/#colors"),h(Bt,"title","Colors"),h(Tt,"class","mt-45"),h(Tt,"id","colors"),Lt=new p(Sn,At),h(Rt,"data-oo-button",""),h(Ht,"data-oo-button","primary"),h(Ht,"href","docs/components/button/#colors"),h(Wt,"data-oo-button","secondary"),h(Wt,"type","button"),Wt.value="Secondary",h(Vt,"class","ground svelte-1dcc50s"),h(Ft,"class","info"),ao=new p(Pn,no),h(ro,"data-oo-button","success"),h(co,"data-oo-button","nectarine"),h(bo,"data-oo-button","yellow"),h(ho,"data-oo-button","salmon"),h(vo,"data-oo-button","purple"),h(Eo,"data-oo-button","green-sea"),h(eo,"class","ground svelte-1dcc50s"),Lo=new p(Un,Ao),h(Ro,"data-oo-button","primary outline"),h(Ho,"data-oo-button","success outline"),h(Wo,"data-oo-button","nectarine outline"),h(Jo,"data-oo-button","yellow outline"),h(Xo,"data-oo-button","salmon outline"),h(ta,"data-oo-button","purple outline"),h(na,"data-oo-button","green-sea outline"),h(Vo,"class","ground svelte-1dcc50s"),h(la,"href","docs/components/button/#variants"),h(la,"title","Button variants"),h(ca,"id","variants"),wa=new p(xn,Oa),Sa=new p(Dn,Pa),h(Da,"data-oo-button","primary full"),h(Da,"class","mb-10"),h(za,"data-oo-button","primary large"),h(za,"class","mb-10"),h(Va,"data-oo-button","secondary tag"),h(Va,"class","mb-10"),h(Ha,"data-oo-button","secondary baggy outline"),h(xa,"class","ground svelte-1dcc50s"),h(Ja,"href","docs/components/button/#sizes"),h(Ja,"title","Sizes"),h(Fa,"class","mt-45"),h(Fa,"id","sizes"),h(tn,"href","docs/components/button/#variants"),h(tn,"title","Button variants"),h(ln,"data-oo-button","primary"),h(ln,"class","font-tiny"),h(dn,"data-oo-button","primary"),h(pn,"data-oo-button","primary"),h(pn,"class","font-medium"),h($n,"data-oo-button","primary"),h($n,"class","font-large"),h(Tn,"data-oo-button","primary large"),h(cn,"class","ground svelte-1dcc50s")},m(t,n){g(In,t,n),v(t,o,n),v(t,a,n),$(a,B),v(t,N,n),v(t,P,n),$(P,U),$(P,D),$(P,I),$(P,k),$(k,z),v(t,L,n),v(t,A,n),$(A,C),$(C,V),$(V,R),$(A,G),$(A,M),$(M,H),$(H,j),$(A,Y),$(A,W),$(W,q),$(q,F),v(t,J,n),v(t,K,n),$(K,Q),$(K,X),$(X,Z),$(Z,_),$(K,tt),$(K,ot),$(ot,at),$(at,nt),$(K,et),v(t,rt,n),st.m(t,n),v(t,ut,n),g(kn,t,n),v(t,ct,n),v(t,lt,n),$(lt,it),$(lt,bt),$(bt,ft),$(bt,dt),$(dt,mt),$(bt,ht),$(lt,pt),$(lt,gt),$(gt,vt),v(t,$t,n),v(t,yt,n),v(t,Et,n),v(t,Tt,n),$(Tt,Bt),$(Bt,Nt),$(Tt,wt),v(t,Ot,n),v(t,St,n),$(St,Pt),$(St,Ut),$(Ut,xt),$(Ut,Dt),$(Dt,It),$(Ut,kt),v(t,zt,n),Lt.m(t,n),v(t,At,n),g(zn,t,n),v(t,Ct,n),v(t,Vt,n),$(Vt,Rt),$(Rt,Gt),$(Vt,Mt),$(Vt,Ht),$(Ht,jt),$(Vt,Yt),$(Vt,Wt),v(t,qt,n),v(t,Ft,n),$(Ft,Jt),$(Ft,Kt),$(Kt,Qt),$(Ft,Xt),$(Ft,Zt),$(Zt,_t),$(Ft,to),v(t,oo,n),ao.m(t,n),v(t,no,n),v(t,eo,n),$(eo,ro),$(ro,so),$(eo,uo),$(eo,co),$(co,lo),$(eo,io),$(eo,bo),$(bo,fo),$(eo,mo),$(eo,ho),$(ho,po),$(eo,go),$(eo,vo),$(vo,$o),$(eo,yo),$(eo,Eo),$(Eo,To),v(t,Bo,n),v(t,No,n),$(No,wo),v(t,Oo,n),v(t,So,n),$(So,Po),$(So,Uo),$(Uo,xo),$(Uo,Do),$(Do,Io),$(Uo,ko),v(t,zo,n),Lo.m(t,n),v(t,Ao,n),g(Ln,t,n),v(t,Co,n),v(t,Vo,n),$(Vo,Ro),$(Ro,Go),$(Vo,Mo),$(Vo,Ho),$(Ho,jo),$(Vo,Yo),$(Vo,Wo),$(Wo,qo),$(Vo,Fo),$(Vo,Jo),$(Jo,Ko),$(Vo,Qo),$(Vo,Xo),$(Xo,Zo),$(Vo,_o),$(Vo,ta),$(ta,oa),$(Vo,aa),$(Vo,na),$(na,ea),v(t,ra,n),v(t,sa,n),v(t,ua,n),v(t,ca,n),$(ca,la),$(la,ia),$(ca,ba),v(t,fa,n),v(t,da,n),$(da,ma),$(da,ha),$(ha,pa),$(da,ga),$(da,va),$(va,$a),$(va,ya),$(ya,Ea),$(va,Ta),$(da,Ba),v(t,Na,n),wa.m(t,n),v(t,Oa,n),Sa.m(t,n),v(t,Pa,n),g(An,t,n),v(t,Ua,n),v(t,xa,n),$(xa,Da),$(Da,Ia),$(xa,ka),$(xa,za),$(za,La),$(xa,Aa),$(xa,Ca),$(xa,Va),$(Va,Ra),$(xa,Ga),$(xa,Ma),$(xa,Ha),$(Ha,ja),v(t,Ya,n),v(t,Wa,n),v(t,qa,n),v(t,Fa,n),$(Fa,Ja),$(Ja,Ka),$(Fa,Qa),v(t,Xa,n),v(t,Za,n),$(Za,_a),$(Za,tn),$(tn,on),$(Za,an),$(Za,nn),$(nn,en),$(Za,rn),v(t,sn,n),g(Cn,t,n),v(t,un,n),v(t,cn,n),$(cn,ln),$(ln,bn),$(cn,fn),$(cn,dn),$(dn,mn),$(cn,hn),$(cn,pn),$(pn,gn),$(cn,vn),$(cn,$n),$($n,yn),$(cn,En),$(cn,Tn),$(Tn,Bn),v(t,Nn,n),g(Vn,t,n),wn=!0},p(t,[o]){const a={};1&o&&(a.$$scope={dirty:o,ctx:t}),kn.$set(a)},i(t){wn||(y(In.$$.fragment,t),y(kn.$$.fragment,t),y(zn.$$.fragment,t),y(Ln.$$.fragment,t),y(An.$$.fragment,t),y(Cn.$$.fragment,t),y(Vn.$$.fragment,t),wn=!0)},o(t){E(In.$$.fragment,t),E(kn.$$.fragment,t),E(zn.$$.fragment,t),E(Ln.$$.fragment,t),E(An.$$.fragment,t),E(Cn.$$.fragment,t),E(Vn.$$.fragment,t),wn=!1},d(t){T(In,t),t&&m(o),t&&m(a),t&&m(N),t&&m(P),t&&m(L),t&&m(A),t&&m(J),t&&m(K),t&&m(rt),t&&st.d(),t&&m(ut),T(kn,t),t&&m(ct),t&&m(lt),t&&m($t),t&&m(yt),t&&m(Et),t&&m(Tt),t&&m(Ot),t&&m(St),t&&m(zt),t&&Lt.d(),t&&m(At),T(zn,t),t&&m(Ct),t&&m(Vt),t&&m(qt),t&&m(Ft),t&&m(oo),t&&ao.d(),t&&m(no),t&&m(eo),t&&m(Bo),t&&m(No),t&&m(Oo),t&&m(So),t&&m(zo),t&&Lo.d(),t&&m(Ao),T(Ln,t),t&&m(Co),t&&m(Vo),t&&m(ra),t&&m(sa),t&&m(ua),t&&m(ca),t&&m(fa),t&&m(da),t&&m(Na),t&&wa.d(),t&&m(Oa),t&&Sa.d(),t&&m(Pa),T(An,t),t&&m(Ua),t&&m(xa),t&&m(Ya),t&&m(Wa),t&&m(qa),t&&m(Fa),t&&m(Xa),t&&m(Za),t&&m(sn),T(Cn,t),t&&m(un),t&&m(cn),t&&m(Nn),T(Vn,t)}}}export default class extends t{constructor(t){super(),o(this,t,null,D,a,{})}}
