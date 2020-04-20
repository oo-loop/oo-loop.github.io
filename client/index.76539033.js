import{S as o,i as a,s as e,H as r,J as s,D as t,r as n,e as c,l,E as i,u as p,a as h,b as f,m as d,d as m,f as u,I as v,F as E,g,o as y,v as L,t as $,k as b,G as x}from"./client.8849145a.js";import{P as S}from"./Pagination.46801f81.js";function w(o){let a,e,w,C,N,T,I,O,P,R,M,k,G,F,H,B,D,_,j,U,V,W,J,z,Y,q,K,Q,X,Z,oo,ao,eo,ro,so,to,no,co,lo,io,po,ho,fo,mo,uo,vo,Eo,go,yo,Lo,$o,bo,xo,So,wo,Ao,Co,No,To,Io,Oo,Po,Ro,Mo,ko,Go,Fo,Ho,Bo,Do,_o,jo,Uo,Vo,Wo,Jo,zo,Yo,qo,Ko,Qo,Xo,Zo,oa,aa,ea,ra,sa,ta,na,ca,la,ia,pa,ha,fa,da,ma,ua,va,Ea,ga,ya,La,$a,ba,xa,Sa,wa,Aa,Ca,Na,Ta,Ia,Oa,Pa,Ra,Ma,ka,Ga,Fa,Ha,Ba,Da,_a,ja,Ua,Va,Wa,Ja,za,Ya,qa,Ka,Qa,Xa,Za,oe,ae,ee,re,se,te,ne,ce,le,ie,pe,he,fe,de,me,ue,ve,Ee,ge,ye,Le,$e,be,xe,Se,we,Ae,Ce,Ne,Te,Ie,Oe,Pe,Re,Me,ke,Ge,Fe,He,Be,De,_e,je,Ue,Ve,We,Je,ze,Ye,qe,Ke,Qe,Xe,Ze,or,ar,er,rr,sr,tr,nr,cr,lr,ir,pr,hr,fr,dr,mr,ur,vr,Er,gr,yr,Lr,$r,br,xr,Sr,wr,Ar,Cr,Nr,Tr,Ir,Or,Pr,Rr,Mr,kr,Gr,Fr,Hr,Br,Dr,_r,jr,Ur,Vr,Wr,Jr,zr,Yr,qr,Kr,Qr,Xr,Zr,os,as,es,rs,ss,ts,ns,cs,ls,is,ps,hs,fs,ds,ms,us,vs,Es,gs,ys,Ls,$s,bs,xs,Ss,ws,As,Cs,Ns,Ts,Is,Os,Ps,Rs,Ms,ks,Gs,Fs,Hs,Bs,Ds,_s,js,Us,Vs,Ws,Js,zs,Ys,qs,Ks,Qs,Xs,Zs,ot,at,et,rt,st,tt,nt,ct,lt,it,pt,ht,ft,dt,mt,ut,vt,Et,gt,yt,Lt,$t,bt,xt,St,wt,At,Ct,Nt,Tt,It,Ot,Pt,Rt,Mt,kt,Gt,Ft,Ht,Bt,Dt,_t,jt,Ut,Vt,Wt,Jt,zt,Yt,qt,Kt,Qt,Xt,Zt,on,an,en,rn,sn,tn,nn,cn,ln,pn,hn,fn,dn,mn=r("@import 'oo-loop/loop'; // Import\n@include ooCreate(); // Launch\n","scss")+"",un=r("// Loop default config\n\n$ooLoop: (\n  breakpoints: (\n    xs: 30em,     // 480px\n    sm: 37.500em, // 600px\n    md: 60em,     // 960px\n    lg: 80em,     // 1280px\n    xl: 120em,    // 1980px\n  ),\n  screens: (sm, md, lg),\n  ...\n);\n","scss")+"",vn=r("// Your config.scss file\n\n@import 'oo-loop/loop';\n\n@include ooCreate((\n  breakpoints: (\n    xl: 100em, // update value for xl breakpoint to 1600px\n    xxl: 140em, // add extra breakpoint\n  ),\n  screens: (sm, md, lg, xl, xxl), // add xl & xxl to available responsive value\n));\n","scss")+"",En=r("// Loop default config\n\n$ooLoop: (\n  breakpoints: (\n    xs: 30em,     // 480px\n    sm: 37.500em, // 600px\n    md: 60em,     // 960px\n    lg: 80em,     // 1280px\n    xl: 120em,    // 1980px\n  ),\n  screens: (sm, md, lg),\n  ...\n);\n","scss")+"",gn=r("@import 'oo-loop/loop';\n\n$ooLoop: ooSet('breakpoints', (\n  sm: 37.500em,\n  md: 60em,\n  xl: 100em,\n)); // set breakpoint values (xs, lg no longer available)\n\n$ooLoop: ooSet('screens', (sm, md, xl)); // set responsive screens\n\n@include ooCreate(); // generate styles\n","scss")+"",yn=r("// Loop default config\n\n$ooLoop: (\n  breakpoints: (\n    xs: 30em,     // 480px\n    sm: 37.500em, // 600px\n    md: 60em,     // 960px\n    lg: 80em,     // 1280px\n    xl: 120em,    // 1980px\n  ),\n  screens: (sm, md, lg),\n  ...\n);\n","scss")+"",Ln=r("@import 'oo-loop/loop';\n\n$ooLoop: ooAdd('breakpoints', (\n  xxl: 140em, // add xxl breakpoint to map\n));\n$ooLoop: ooAdd('screens', xxl); // add responsive screen to list\n\n@include ooCreate(); // generate styles\n","scss")+"",$n=r("@import 'oo-loop/loop';\n\n$ooLoop: ooPipe(\n  _set('breakpoints.xl', 100em),\n  _add('breakpoints', (xxl: 140em)),\n  _add('screens', (xl, xxl))\n);\n\n@include ooCreate(); // generate styles\n","scss")+"",bn=r("@import 'oo-loop/loop';\n\n$ooLoop: (\n  /** the ENTIRE configuration **/\n);\n@include ooCreate();\n","scss")+"";const xn=new s({props:{title:"Getting Started",description:A}}),Sn=new S({props:{href:"docs/config/",title:"Read about the Loop config map",label:"The Loop config map"}});return{c(){t(xn.$$.fragment),a=n(),e=c("h1"),w=l("Start with Loop"),C=n(),N=c("p"),T=l(A),I=n(),O=c("ul"),P=c("li"),R=c("a"),M=l("HTML formatting"),k=n(),G=c("li"),F=c("a"),H=l("Column component"),B=n(),D=c("li"),_=c("a"),j=l("Template component"),U=n(),V=c("li"),W=c("a"),J=l("Button component"),z=n(),Y=c("li"),q=c("a"),K=l("Form components"),Q=n(),X=c("li"),Z=c("a"),oo=l("Container"),ao=n(),eo=c("li"),ro=c("a"),so=l("Visibility"),to=n(),no=c("li"),co=c("a"),lo=l("List"),io=n(),po=c("li"),ho=c("a"),fo=l("Miscellaneous"),mo=n(),uo=c("li"),vo=c("a"),Eo=l("Color utilities"),go=n(),yo=c("li"),Lo=c("a"),$o=l("Typography utilities"),bo=n(),xo=c("li"),So=c("a"),wo=l("Spacing utilities"),Ao=n(),Co=c("li"),No=c("a"),To=l("Float utilities"),Io=n(),Oo=c("li"),Po=c("a"),Ro=l("Wrapper utilities"),Mo=n(),ko=c("p"),Go=l("Import "),Fo=c("strong"),Ho=l("Loop framework"),Bo=l(" into your sass file and "),Do=c("strong"),_o=l("launch it"),jo=l(" to start with."),Uo=n(),Wo=n(),Jo=c("p"),zo=l("Make sure to use the "),Yo=c("strong"),qo=l("correct path"),Ko=l(" to the Loop "),Qo=c("strong"),Xo=l("node_modules"),Zo=l(".\nJavascript task runners can help you simplify the import, otherwise please use the following path "),oa=c("strong"),aa=l("node_modules/oo-loop/loop"),ea=l("."),ra=n(),sa=c("div"),ta=n(),na=c("h2"),ca=l("Adjust to your need"),la=n(),ia=c("p"),pa=l("Loop encourages you to set your own rules and shape the css the way you like. Following the structure of the "),ha=c("a"),fa=l("config map"),da=l(", modify its properties to match your needs."),ma=n(),ua=c("p"),va=l("It can be done in various ways"),Ea=n(),ga=c("ul"),ya=c("li"),La=l("By passing your preferences to the mixin "),$a=c("code"),ba=l("ooCreate"),xa=l(" when launching loop"),Sa=n(),wa=c("li"),Aa=l("By setting/adding values one at the time with the functions "),Ca=c("code"),Na=l("ooSet"),Ta=c("code"),Ia=l("ooAdd"),Oa=c("code"),Pa=l("ooPipe"),Ra=n(),Ma=c("li"),ka=l("By coping and pasting the full config file"),Ga=n(),Fa=c("h3"),Ha=c("a"),Ba=l("#"),Da=l(" ooCreate("),_a=c("span"),ja=l("$config"),Ua=l(":"),Va=c("span"),Wa=l("null"),Ja=l(")"),za=n(),Ya=c("p"),qa=c("em"),Ka=l("Mixin"),Qa=l(" - Launch framework by initializing "),Xa=c("a"),Za=l("$ooLoop"),oe=l(" and generate styling."),ae=n(),ee=c("ul"),re=c("li"),se=c("strong"),te=l("$config"),ne=n(),ce=c("em"),le=l("(map) "),ie=c("span"),pe=l("Optional"),he=n(),fe=c("br"),de=l("Set of rules that will be merged into the default Loop config"),me=n(),ve=n(),ge=n(),ye=c("hr"),Le=n(),$e=c("section"),be=l("Functions such as "),xe=c("strong"),Se=l("ooSet()"),we=l(", "),Ae=c("strong"),Ce=l("ooAdd()"),Ne=l(", "),Te=c("strong"),Ie=l("ooPipe()"),Oe=l(" can be used as "),Pe=c("em"),Re=l("an alternative"),Me=l(" or "),ke=c("em"),Ge=l("be combined"),Fe=l(" to the configuration being passed to "),He=c("strong"),Be=l("ooCreate()"),De=l("."),_e=n(),je=c("hr"),Ue=n(),Ve=c("h3"),We=c("a"),Je=l("#"),ze=l(" ooSet("),Ye=c("span"),qe=l("$path"),Ke=l(", "),Qe=c("span"),Xe=l("$value"),Ze=l(", "),or=c("span"),ar=l("$hard"),er=l(":"),rr=c("span"),sr=l("true"),tr=l(")"),nr=n(),cr=c("p"),lr=c("em"),ir=l("Function"),pr=l(" - Set new values to Loop config. To be used with "),hr=c("code"),fr=l("$ooLoop"),dr=l("."),mr=n(),ur=c("ul"),vr=c("li"),Er=c("strong"),gr=l("$path"),yr=n(),Lr=c("em"),$r=l("(string)"),br=n(),xr=c("br"),Sr=l("Concatenated path to a Loop config property"),wr=n(),Ar=c("li"),Cr=c("strong"),Nr=l("$value"),Tr=n(),Ir=c("em"),Or=l("(mixed)"),Pr=n(),Rr=c("br"),Mr=l("New Loop property value"),kr=n(),Gr=c("li"),Fr=c("strong"),Hr=l("$hard"),Br=n(),Dr=c("em"),_r=l("(boolean) "),jr=c("span"),Ur=l("Optional"),Vr=n(),Wr=c("br"),Jr=l("Destructive mode?"),zr=n(),qr=n(),Qr=n(),Xr=c("hr"),Zr=n(),os=c("h3"),as=c("a"),es=l("#"),rs=l(" ooAdd("),ss=c("span"),ts=l("$path"),ns=l(", "),cs=c("span"),ls=l("$value"),is=l(")"),ps=n(),hs=c("p"),fs=c("em"),ds=l("Function"),ms=l(" - Add values to Loop config. To be used with "),us=c("code"),vs=l("$ooLoop"),Es=l("."),gs=n(),ys=c("ul"),Ls=c("li"),$s=c("strong"),bs=l("$path"),xs=n(),Ss=c("em"),ws=l("(string)"),As=n(),Cs=c("br"),Ns=l("Concatenated path to a Loop config property"),Ts=n(),Is=c("li"),Os=c("strong"),Ps=l("$value"),Rs=n(),Ms=c("em"),ks=l("(mixed)"),Gs=n(),Fs=c("br"),Hs=l("Value to append"),Bs=n(),_s=n(),Us=n(),Vs=c("hr"),Ws=n(),Js=c("section"),zs=l("When targetting a single value with "),Ys=c("strong"),qs=l("ooAdd()"),Ks=l(", the string will "),Qs=c("strong"),Xs=l("become a list"),Zs=l("."),ot=n(),at=c("hr"),et=n(),rt=c("h3"),st=c("a"),tt=l("#"),nt=l(" ooPipe("),ct=c("span"),lt=l("$rules..."),it=l(")"),pt=n(),ht=c("p"),ft=c("em"),dt=l("Function"),mt=l(" - Chain rules of setter and adder to update Loop config. To be used with "),ut=c("code"),vt=l("$ooLoop"),Et=l("."),gt=n(),yt=c("ul"),Lt=c("li"),$t=c("strong"),bt=l("$rules"),xt=n(),St=c("em"),wt=l("(list)"),At=n(),Ct=c("br"),Nt=l("List of setter "),Tt=c("code"),It=l("_set("),Ot=c("span"),Pt=l("$path"),Rt=l(", "),Mt=c("span"),kt=l("$value"),Gt=l(")"),Ft=l(" and adder"),Ht=c("code"),Bt=l("_add("),Dt=c("span"),_t=l("$path"),jt=l(", "),Ut=c("span"),Vt=l("$value"),Wt=l(")"),Jt=n(),Yt=n(),qt=c("hr"),Kt=n(),Qt=c("h3"),Xt=c("a"),Zt=l("#"),on=l(" Copy/paste"),an=n(),en=c("p"),rn=l("If you like to see everything at once, you can copy/paste the "),sn=c("strong"),tn=l("entire"),nn=l(" default config map, override its values and add new ones.\n"),cn=c("strong"),ln=l("Make sure not to remove referred properties!"),pn=n(),fn=n(),t(Sn.$$.fragment),this.h()},l(o){i(xn.$$.fragment,o),a=p(o),e=h(o,"H1",{});var r=f(e);w=d(r,"Start with Loop"),r.forEach(m),C=p(o),N=h(o,"P",{class:!0});var s=f(N);T=d(s,A),s.forEach(m),I=p(o),O=h(o,"UL",{});var t=f(O);P=h(t,"LI",{});var n=f(P);R=h(n,"A",{href:!0,title:!0});var c=f(R);M=d(c,"HTML formatting"),c.forEach(m),n.forEach(m),k=p(t),G=h(t,"LI",{});var l=f(G);F=h(l,"A",{href:!0,title:!0});var u=f(F);H=d(u,"Column component"),u.forEach(m),l.forEach(m),B=p(t),D=h(t,"LI",{});var v=f(D);_=h(v,"A",{href:!0,title:!0});var E=f(_);j=d(E,"Template component"),E.forEach(m),v.forEach(m),U=p(t),V=h(t,"LI",{});var g=f(V);W=h(g,"A",{href:!0,title:!0});var y=f(W);J=d(y,"Button component"),y.forEach(m),g.forEach(m),z=p(t),Y=h(t,"LI",{});var L=f(Y);q=h(L,"A",{href:!0,title:!0});var $=f(q);K=d($,"Form components"),$.forEach(m),L.forEach(m),Q=p(t),X=h(t,"LI",{});var b=f(X);Z=h(b,"A",{href:!0,title:!0});var x=f(Z);oo=d(x,"Container"),x.forEach(m),b.forEach(m),ao=p(t),eo=h(t,"LI",{});var S=f(eo);ro=h(S,"A",{href:!0,title:!0});var Vo=f(ro);so=d(Vo,"Visibility"),Vo.forEach(m),S.forEach(m),to=p(t),no=h(t,"LI",{});var ue=f(no);co=h(ue,"A",{href:!0,title:!0});var Ee=f(co);lo=d(Ee,"List"),Ee.forEach(m),ue.forEach(m),io=p(t),po=h(t,"LI",{});var Yr=f(po);ho=h(Yr,"A",{href:!0,title:!0});var Kr=f(ho);fo=d(Kr,"Miscellaneous"),Kr.forEach(m),Yr.forEach(m),mo=p(t),uo=h(t,"LI",{});var Ds=f(uo);vo=h(Ds,"A",{href:!0,title:!0});var js=f(vo);Eo=d(js,"Color utilities"),js.forEach(m),Ds.forEach(m),go=p(t),yo=h(t,"LI",{});var zt=f(yo);Lo=h(zt,"A",{href:!0,title:!0});var hn=f(Lo);$o=d(hn,"Typography utilities"),hn.forEach(m),zt.forEach(m),bo=p(t),xo=h(t,"LI",{});var dn=f(xo);So=h(dn,"A",{href:!0,title:!0});var mn=f(So);wo=d(mn,"Spacing utilities"),mn.forEach(m),dn.forEach(m),Ao=p(t),Co=h(t,"LI",{});var un=f(Co);No=h(un,"A",{href:!0,title:!0});var vn=f(No);To=d(vn,"Float utilities"),vn.forEach(m),un.forEach(m),Io=p(t),Oo=h(t,"LI",{});var En=f(Oo);Po=h(En,"A",{href:!0,title:!0});var gn=f(Po);Ro=d(gn,"Wrapper utilities"),gn.forEach(m),En.forEach(m),t.forEach(m),Mo=p(o),ko=h(o,"P",{});var yn=f(ko);Go=d(yn,"Import "),Fo=h(yn,"STRONG",{});var Ln=f(Fo);Ho=d(Ln,"Loop framework"),Ln.forEach(m),Bo=d(yn," into your sass file and "),Do=h(yn,"STRONG",{});var $n=f(Do);_o=d($n,"launch it"),$n.forEach(m),jo=d(yn," to start with."),yn.forEach(m),Uo=p(o),Wo=p(o),Jo=h(o,"P",{class:!0});var bn=f(Jo);zo=d(bn,"Make sure to use the "),Yo=h(bn,"STRONG",{});var wn=f(Yo);qo=d(wn,"correct path"),wn.forEach(m),Ko=d(bn," to the Loop "),Qo=h(bn,"STRONG",{});var An=f(Qo);Xo=d(An,"node_modules"),An.forEach(m),Zo=d(bn,".\nJavascript task runners can help you simplify the import, otherwise please use the following path "),oa=h(bn,"STRONG",{class:!0});var Cn=f(oa);aa=d(Cn,"node_modules/oo-loop/loop"),Cn.forEach(m),ea=d(bn,"."),bn.forEach(m),ra=p(o),sa=h(o,"DIV",{class:!0}),f(sa).forEach(m),ta=p(o),na=h(o,"H2",{class:!0,id:!0});var Nn=f(na);ca=d(Nn,"Adjust to your need"),Nn.forEach(m),la=p(o),ia=h(o,"P",{});var Tn=f(ia);pa=d(Tn,"Loop encourages you to set your own rules and shape the css the way you like. Following the structure of the "),ha=h(Tn,"A",{href:!0,title:!0});var In=f(ha);fa=d(In,"config map"),In.forEach(m),da=d(Tn,", modify its properties to match your needs."),Tn.forEach(m),ma=p(o),ua=h(o,"P",{});var On=f(ua);va=d(On,"It can be done in various ways"),On.forEach(m),Ea=p(o),ga=h(o,"UL",{});var Pn=f(ga);ya=h(Pn,"LI",{});var Rn=f(ya);La=d(Rn,"By passing your preferences to the mixin "),$a=h(Rn,"CODE",{});var Mn=f($a);ba=d(Mn,"ooCreate"),Mn.forEach(m),xa=d(Rn," when launching loop"),Rn.forEach(m),Sa=p(Pn),wa=h(Pn,"LI",{});var kn=f(wa);Aa=d(kn,"By setting/adding values one at the time with the functions "),Ca=h(kn,"CODE",{});var Gn=f(Ca);Na=d(Gn,"ooSet"),Gn.forEach(m),Ta=h(kn,"CODE",{});var Fn=f(Ta);Ia=d(Fn,"ooAdd"),Fn.forEach(m),Oa=h(kn,"CODE",{});var Hn=f(Oa);Pa=d(Hn,"ooPipe"),Hn.forEach(m),kn.forEach(m),Ra=p(Pn),Ma=h(Pn,"LI",{});var Bn=f(Ma);ka=d(Bn,"By coping and pasting the full config file"),Bn.forEach(m),Pn.forEach(m),Ga=p(o),Fa=h(o,"H3",{class:!0,id:!0});var Dn=f(Fa);Ha=h(Dn,"A",{href:!0,title:!0});var _n=f(Ha);Ba=d(_n,"#"),_n.forEach(m),Da=d(Dn," ooCreate("),_a=h(Dn,"SPAN",{class:!0});var jn=f(_a);ja=d(jn,"$config"),jn.forEach(m),Ua=d(Dn,":"),Va=h(Dn,"SPAN",{class:!0});var Un=f(Va);Wa=d(Un,"null"),Un.forEach(m),Ja=d(Dn,")"),Dn.forEach(m),za=p(o),Ya=h(o,"P",{});var Vn=f(Ya);qa=h(Vn,"EM",{class:!0});var Wn=f(qa);Ka=d(Wn,"Mixin"),Wn.forEach(m),Qa=d(Vn," - Launch framework by initializing "),Xa=h(Vn,"A",{href:!0,title:!0});var Jn=f(Xa);Za=d(Jn,"$ooLoop"),Jn.forEach(m),oe=d(Vn," and generate styling."),Vn.forEach(m),ae=p(o),ee=h(o,"UL",{});var zn=f(ee);re=h(zn,"LI",{});var Yn=f(re);se=h(Yn,"STRONG",{});var qn=f(se);te=d(qn,"$config"),qn.forEach(m),ne=p(Yn),ce=h(Yn,"EM",{class:!0});var Kn=f(ce);le=d(Kn,"(map) "),ie=h(Kn,"SPAN",{class:!0});var Qn=f(ie);pe=d(Qn,"Optional"),Qn.forEach(m),Kn.forEach(m),he=p(Yn),fe=h(Yn,"BR",{}),de=d(Yn,"Set of rules that will be merged into the default Loop config"),Yn.forEach(m),zn.forEach(m),me=p(o),ve=p(o),ge=p(o),ye=h(o,"HR",{}),Le=p(o),$e=h(o,"SECTION",{class:!0});var Xn=f($e);be=d(Xn,"Functions such as "),xe=h(Xn,"STRONG",{class:!0});var Zn=f(xe);Se=d(Zn,"ooSet()"),Zn.forEach(m),we=d(Xn,", "),Ae=h(Xn,"STRONG",{class:!0});var oc=f(Ae);Ce=d(oc,"ooAdd()"),oc.forEach(m),Ne=d(Xn,", "),Te=h(Xn,"STRONG",{class:!0});var ac=f(Te);Ie=d(ac,"ooPipe()"),ac.forEach(m),Oe=d(Xn," can be used as "),Pe=h(Xn,"EM",{class:!0});var ec=f(Pe);Re=d(ec,"an alternative"),ec.forEach(m),Me=d(Xn," or "),ke=h(Xn,"EM",{class:!0});var rc=f(ke);Ge=d(rc,"be combined"),rc.forEach(m),Fe=d(Xn," to the configuration being passed to "),He=h(Xn,"STRONG",{class:!0});var sc=f(He);Be=d(sc,"ooCreate()"),sc.forEach(m),De=d(Xn,"."),Xn.forEach(m),_e=p(o),je=h(o,"HR",{}),Ue=p(o),Ve=h(o,"H3",{class:!0,id:!0});var tc=f(Ve);We=h(tc,"A",{href:!0,title:!0});var nc=f(We);Je=d(nc,"#"),nc.forEach(m),ze=d(tc," ooSet("),Ye=h(tc,"SPAN",{class:!0});var cc=f(Ye);qe=d(cc,"$path"),cc.forEach(m),Ke=d(tc,", "),Qe=h(tc,"SPAN",{class:!0});var lc=f(Qe);Xe=d(lc,"$value"),lc.forEach(m),Ze=d(tc,", "),or=h(tc,"SPAN",{class:!0});var ic=f(or);ar=d(ic,"$hard"),ic.forEach(m),er=d(tc,":"),rr=h(tc,"SPAN",{class:!0});var pc=f(rr);sr=d(pc,"true"),pc.forEach(m),tr=d(tc,")"),tc.forEach(m),nr=p(o),cr=h(o,"P",{});var hc=f(cr);lr=h(hc,"EM",{class:!0});var fc=f(lr);ir=d(fc,"Function"),fc.forEach(m),pr=d(hc," - Set new values to Loop config. To be used with "),hr=h(hc,"CODE",{});var dc=f(hr);fr=d(dc,"$ooLoop"),dc.forEach(m),dr=d(hc,"."),hc.forEach(m),mr=p(o),ur=h(o,"UL",{});var mc=f(ur);vr=h(mc,"LI",{class:!0});var uc=f(vr);Er=h(uc,"STRONG",{});var vc=f(Er);gr=d(vc,"$path"),vc.forEach(m),yr=p(uc),Lr=h(uc,"EM",{class:!0});var Ec=f(Lr);$r=d(Ec,"(string)"),Ec.forEach(m),br=p(uc),xr=h(uc,"BR",{}),Sr=d(uc,"Concatenated path to a Loop config property"),uc.forEach(m),wr=p(mc),Ar=h(mc,"LI",{class:!0});var gc=f(Ar);Cr=h(gc,"STRONG",{});var yc=f(Cr);Nr=d(yc,"$value"),yc.forEach(m),Tr=p(gc),Ir=h(gc,"EM",{class:!0});var Lc=f(Ir);Or=d(Lc,"(mixed)"),Lc.forEach(m),Pr=p(gc),Rr=h(gc,"BR",{}),Mr=d(gc,"New Loop property value"),gc.forEach(m),kr=p(mc),Gr=h(mc,"LI",{});var $c=f(Gr);Fr=h($c,"STRONG",{});var bc=f(Fr);Hr=d(bc,"$hard"),bc.forEach(m),Br=p($c),Dr=h($c,"EM",{class:!0});var xc=f(Dr);_r=d(xc,"(boolean) "),jr=h(xc,"SPAN",{class:!0});var Sc=f(jr);Ur=d(Sc,"Optional"),Sc.forEach(m),xc.forEach(m),Vr=p($c),Wr=h($c,"BR",{}),Jr=d($c,"Destructive mode?"),$c.forEach(m),mc.forEach(m),zr=p(o),qr=p(o),Qr=p(o),Xr=h(o,"HR",{}),Zr=p(o),os=h(o,"H3",{class:!0,id:!0});var wc=f(os);as=h(wc,"A",{href:!0,title:!0});var Ac=f(as);es=d(Ac,"#"),Ac.forEach(m),rs=d(wc," ooAdd("),ss=h(wc,"SPAN",{class:!0});var Cc=f(ss);ts=d(Cc,"$path"),Cc.forEach(m),ns=d(wc,", "),cs=h(wc,"SPAN",{class:!0});var Nc=f(cs);ls=d(Nc,"$value"),Nc.forEach(m),is=d(wc,")"),wc.forEach(m),ps=p(o),hs=h(o,"P",{});var Tc=f(hs);fs=h(Tc,"EM",{class:!0});var Ic=f(fs);ds=d(Ic,"Function"),Ic.forEach(m),ms=d(Tc," - Add values to Loop config. To be used with "),us=h(Tc,"CODE",{});var Oc=f(us);vs=d(Oc,"$ooLoop"),Oc.forEach(m),Es=d(Tc,"."),Tc.forEach(m),gs=p(o),ys=h(o,"UL",{});var Pc=f(ys);Ls=h(Pc,"LI",{class:!0});var Rc=f(Ls);$s=h(Rc,"STRONG",{});var Mc=f($s);bs=d(Mc,"$path"),Mc.forEach(m),xs=p(Rc),Ss=h(Rc,"EM",{class:!0});var kc=f(Ss);ws=d(kc,"(string)"),kc.forEach(m),As=p(Rc),Cs=h(Rc,"BR",{}),Ns=d(Rc,"Concatenated path to a Loop config property"),Rc.forEach(m),Ts=p(Pc),Is=h(Pc,"LI",{});var Gc=f(Is);Os=h(Gc,"STRONG",{});var Fc=f(Os);Ps=d(Fc,"$value"),Fc.forEach(m),Rs=p(Gc),Ms=h(Gc,"EM",{class:!0});var Hc=f(Ms);ks=d(Hc,"(mixed)"),Hc.forEach(m),Gs=p(Gc),Fs=h(Gc,"BR",{}),Hs=d(Gc,"Value to append"),Gc.forEach(m),Pc.forEach(m),Bs=p(o),_s=p(o),Us=p(o),Vs=h(o,"HR",{}),Ws=p(o),Js=h(o,"SECTION",{class:!0});var Bc=f(Js);zs=d(Bc,"When targetting a single value with "),Ys=h(Bc,"STRONG",{class:!0});var Dc=f(Ys);qs=d(Dc,"ooAdd()"),Dc.forEach(m),Ks=d(Bc,", the string will "),Qs=h(Bc,"STRONG",{});var _c=f(Qs);Xs=d(_c,"become a list"),_c.forEach(m),Zs=d(Bc,"."),Bc.forEach(m),ot=p(o),at=h(o,"HR",{}),et=p(o),rt=h(o,"H3",{class:!0,id:!0});var jc=f(rt);st=h(jc,"A",{href:!0,title:!0});var Uc=f(st);tt=d(Uc,"#"),Uc.forEach(m),nt=d(jc," ooPipe("),ct=h(jc,"SPAN",{class:!0});var Vc=f(ct);lt=d(Vc,"$rules..."),Vc.forEach(m),it=d(jc,")"),jc.forEach(m),pt=p(o),ht=h(o,"P",{});var Wc=f(ht);ft=h(Wc,"EM",{class:!0});var Jc=f(ft);dt=d(Jc,"Function"),Jc.forEach(m),mt=d(Wc," - Chain rules of setter and adder to update Loop config. To be used with "),ut=h(Wc,"CODE",{});var zc=f(ut);vt=d(zc,"$ooLoop"),zc.forEach(m),Et=d(Wc,"."),Wc.forEach(m),gt=p(o),yt=h(o,"UL",{});var Yc=f(yt);Lt=h(Yc,"LI",{});var qc=f(Lt);$t=h(qc,"STRONG",{});var Kc=f($t);bt=d(Kc,"$rules"),Kc.forEach(m),xt=p(qc),St=h(qc,"EM",{class:!0});var Qc=f(St);wt=d(Qc,"(list)"),Qc.forEach(m),At=p(qc),Ct=h(qc,"BR",{}),Nt=d(qc,"List of setter "),Tt=h(qc,"CODE",{});var Xc=f(Tt);It=d(Xc,"_set("),Ot=h(Xc,"SPAN",{class:!0});var Zc=f(Ot);Pt=d(Zc,"$path"),Zc.forEach(m),Rt=d(Xc,", "),Mt=h(Xc,"SPAN",{class:!0});var ol=f(Mt);kt=d(ol,"$value"),ol.forEach(m),Gt=d(Xc,")"),Xc.forEach(m),Ft=d(qc," and adder"),Ht=h(qc,"CODE",{});var al=f(Ht);Bt=d(al,"_add("),Dt=h(al,"SPAN",{class:!0});var el=f(Dt);_t=d(el,"$path"),el.forEach(m),jt=d(al,", "),Ut=h(al,"SPAN",{class:!0});var rl=f(Ut);Vt=d(rl,"$value"),rl.forEach(m),Wt=d(al,")"),al.forEach(m),qc.forEach(m),Yc.forEach(m),Jt=p(o),Yt=p(o),qt=h(o,"HR",{}),Kt=p(o),Qt=h(o,"H3",{id:!0});var sl=f(Qt);Xt=h(sl,"A",{href:!0,title:!0});var tl=f(Xt);Zt=d(tl,"#"),tl.forEach(m),on=d(sl," Copy/paste"),sl.forEach(m),an=p(o),en=h(o,"P",{});var nl=f(en);rn=d(nl,"If you like to see everything at once, you can copy/paste the "),sn=h(nl,"STRONG",{});var cl=f(sn);tn=d(cl,"entire"),cl.forEach(m),nn=d(nl," default config map, override its values and add new ones.\n"),cn=h(nl,"STRONG",{class:!0});var ll=f(cn);ln=d(ll,"Make sure not to remove referred properties!"),ll.forEach(m),nl.forEach(m),pn=p(o),fn=p(o),i(Sn.$$.fragment,o),this.h()},h(){u(N,"class","font-large"),u(R,"href","docs/html-elements/"),u(R,"title","HTML elements"),u(F,"href","docs/components/column/"),u(F,"title","Column"),u(_,"href","docs/components/template/"),u(_,"title","Template"),u(W,"href","docs/components/button/"),u(W,"title","Button"),u(q,"href","docs/components/form/"),u(q,"title","Form"),u(Z,"href","docs/helpers/container/"),u(Z,"title","Container"),u(ro,"href","docs/helpers/visibility/"),u(ro,"title","Visibility"),u(co,"href","docs/helpers/list/"),u(co,"title","List"),u(ho,"href","docs/helpers/misc/"),u(ho,"title","Miscellaneous"),u(vo,"href","docs/utilities/color/"),u(vo,"title","Color"),u(Lo,"href","docs/utilities/typography/"),u(Lo,"title","Typography"),u(So,"href","docs/utilities/spacing/"),u(So,"title","Spacing"),u(No,"href","docs/utilities/float/"),u(No,"title","Float"),u(Po,"href","docs/utilities/wrapper/"),u(Po,"title","Wrapper"),Vo=new v(mn,Wo),u(oa,"class","color-primary"),u(Jo,"class","info"),u(sa,"class","hr"),u(na,"class","mt-45"),u(na,"id","adjust"),u(ha,"href","docs/config/"),u(ha,"title","Config Map"),u(Ha,"href","docs/#oocreate"),u(Ha,"title","ooCreate() Mixin"),u(_a,"class","color-primary"),u(Va,"class","color-secondary"),u(Fa,"class","h4 font-code mt-45"),u(Fa,"id","oocreate"),u(qa,"class","text-uppercase font-small"),u(Xa,"href","docs/config/"),u(Xa,"title","Loop Map"),u(ie,"class","color-secondary"),u(ce,"class","font-monospace"),ue=new v(un,ve),Ee=new v(vn,ge),u(xe,"class","color-primary"),u(Ae,"class","color-primary"),u(Te,"class","color-primary"),u(Pe,"class","font-bold"),u(ke,"class","font-bold"),u(He,"class","color-primary"),u($e,"class","info"),u(We,"href","docs/#ooset"),u(We,"title","ooSet() Function"),u(Ye,"class","color-primary"),u(Qe,"class","color-primary"),u(or,"class","color-primary"),u(rr,"class","color-secondary"),u(Ve,"class","h4 font-code"),u(Ve,"id","ooset"),u(lr,"class","text-uppercase font-small"),u(Lr,"class","font-monospace"),u(vr,"class","mb-10"),u(Ir,"class","font-monospace"),u(Ar,"class","mb-10"),u(jr,"class","color-secondary"),u(Dr,"class","font-monospace"),Yr=new v(En,qr),Kr=new v(gn,Qr),u(as,"href","docs/#ooadd"),u(as,"title","ooAdd() Function"),u(ss,"class","color-primary"),u(cs,"class","color-primary"),u(os,"class","font-code h4"),u(os,"id","ooadd"),u(fs,"class","text-uppercase font-small"),u(Ss,"class","font-monospace"),u(Ls,"class","mb-10"),u(Ms,"class","font-monospace"),Ds=new v(yn,_s),js=new v(Ln,Us),u(Ys,"class","color-primary"),u(Js,"class","info"),u(st,"href","docs/#oopipe"),u(st,"title","ooPipe() Function"),u(ct,"class","color-primary"),u(rt,"class","font-code h4"),u(rt,"id","oopipe"),u(ft,"class","text-uppercase font-small"),u(St,"class","font-monospace"),u(Ot,"class","color-base"),u(Mt,"class","color-base"),u(Dt,"class","color-base"),u(Ut,"class","color-base"),zt=new v($n,Yt),u(Xt,"href","docs/#copy-paste"),u(Xt,"title","Copy/paste config"),u(Qt,"id","copy-paste"),u(cn,"class","color-danger"),hn=new v(bn,fn)},m(o,r){E(xn,o,r),g(o,a,r),g(o,e,r),y(e,w),g(o,C,r),g(o,N,r),y(N,T),g(o,I,r),g(o,O,r),y(O,P),y(P,R),y(R,M),y(O,k),y(O,G),y(G,F),y(F,H),y(O,B),y(O,D),y(D,_),y(_,j),y(O,U),y(O,V),y(V,W),y(W,J),y(O,z),y(O,Y),y(Y,q),y(q,K),y(O,Q),y(O,X),y(X,Z),y(Z,oo),y(O,ao),y(O,eo),y(eo,ro),y(ro,so),y(O,to),y(O,no),y(no,co),y(co,lo),y(O,io),y(O,po),y(po,ho),y(ho,fo),y(O,mo),y(O,uo),y(uo,vo),y(vo,Eo),y(O,go),y(O,yo),y(yo,Lo),y(Lo,$o),y(O,bo),y(O,xo),y(xo,So),y(So,wo),y(O,Ao),y(O,Co),y(Co,No),y(No,To),y(O,Io),y(O,Oo),y(Oo,Po),y(Po,Ro),g(o,Mo,r),g(o,ko,r),y(ko,Go),y(ko,Fo),y(Fo,Ho),y(ko,Bo),y(ko,Do),y(Do,_o),y(ko,jo),g(o,Uo,r),Vo.m(o,r),g(o,Wo,r),g(o,Jo,r),y(Jo,zo),y(Jo,Yo),y(Yo,qo),y(Jo,Ko),y(Jo,Qo),y(Qo,Xo),y(Jo,Zo),y(Jo,oa),y(oa,aa),y(Jo,ea),g(o,ra,r),g(o,sa,r),g(o,ta,r),g(o,na,r),y(na,ca),g(o,la,r),g(o,ia,r),y(ia,pa),y(ia,ha),y(ha,fa),y(ia,da),g(o,ma,r),g(o,ua,r),y(ua,va),g(o,Ea,r),g(o,ga,r),y(ga,ya),y(ya,La),y(ya,$a),y($a,ba),y(ya,xa),y(ga,Sa),y(ga,wa),y(wa,Aa),y(wa,Ca),y(Ca,Na),y(wa,Ta),y(Ta,Ia),y(wa,Oa),y(Oa,Pa),y(ga,Ra),y(ga,Ma),y(Ma,ka),g(o,Ga,r),g(o,Fa,r),y(Fa,Ha),y(Ha,Ba),y(Fa,Da),y(Fa,_a),y(_a,ja),y(Fa,Ua),y(Fa,Va),y(Va,Wa),y(Fa,Ja),g(o,za,r),g(o,Ya,r),y(Ya,qa),y(qa,Ka),y(Ya,Qa),y(Ya,Xa),y(Xa,Za),y(Ya,oe),g(o,ae,r),g(o,ee,r),y(ee,re),y(re,se),y(se,te),y(re,ne),y(re,ce),y(ce,le),y(ce,ie),y(ie,pe),y(re,he),y(re,fe),y(re,de),g(o,me,r),ue.m(o,r),g(o,ve,r),Ee.m(o,r),g(o,ge,r),g(o,ye,r),g(o,Le,r),g(o,$e,r),y($e,be),y($e,xe),y(xe,Se),y($e,we),y($e,Ae),y(Ae,Ce),y($e,Ne),y($e,Te),y(Te,Ie),y($e,Oe),y($e,Pe),y(Pe,Re),y($e,Me),y($e,ke),y(ke,Ge),y($e,Fe),y($e,He),y(He,Be),y($e,De),g(o,_e,r),g(o,je,r),g(o,Ue,r),g(o,Ve,r),y(Ve,We),y(We,Je),y(Ve,ze),y(Ve,Ye),y(Ye,qe),y(Ve,Ke),y(Ve,Qe),y(Qe,Xe),y(Ve,Ze),y(Ve,or),y(or,ar),y(Ve,er),y(Ve,rr),y(rr,sr),y(Ve,tr),g(o,nr,r),g(o,cr,r),y(cr,lr),y(lr,ir),y(cr,pr),y(cr,hr),y(hr,fr),y(cr,dr),g(o,mr,r),g(o,ur,r),y(ur,vr),y(vr,Er),y(Er,gr),y(vr,yr),y(vr,Lr),y(Lr,$r),y(vr,br),y(vr,xr),y(vr,Sr),y(ur,wr),y(ur,Ar),y(Ar,Cr),y(Cr,Nr),y(Ar,Tr),y(Ar,Ir),y(Ir,Or),y(Ar,Pr),y(Ar,Rr),y(Ar,Mr),y(ur,kr),y(ur,Gr),y(Gr,Fr),y(Fr,Hr),y(Gr,Br),y(Gr,Dr),y(Dr,_r),y(Dr,jr),y(jr,Ur),y(Gr,Vr),y(Gr,Wr),y(Gr,Jr),g(o,zr,r),Yr.m(o,r),g(o,qr,r),Kr.m(o,r),g(o,Qr,r),g(o,Xr,r),g(o,Zr,r),g(o,os,r),y(os,as),y(as,es),y(os,rs),y(os,ss),y(ss,ts),y(os,ns),y(os,cs),y(cs,ls),y(os,is),g(o,ps,r),g(o,hs,r),y(hs,fs),y(fs,ds),y(hs,ms),y(hs,us),y(us,vs),y(hs,Es),g(o,gs,r),g(o,ys,r),y(ys,Ls),y(Ls,$s),y($s,bs),y(Ls,xs),y(Ls,Ss),y(Ss,ws),y(Ls,As),y(Ls,Cs),y(Ls,Ns),y(ys,Ts),y(ys,Is),y(Is,Os),y(Os,Ps),y(Is,Rs),y(Is,Ms),y(Ms,ks),y(Is,Gs),y(Is,Fs),y(Is,Hs),g(o,Bs,r),Ds.m(o,r),g(o,_s,r),js.m(o,r),g(o,Us,r),g(o,Vs,r),g(o,Ws,r),g(o,Js,r),y(Js,zs),y(Js,Ys),y(Ys,qs),y(Js,Ks),y(Js,Qs),y(Qs,Xs),y(Js,Zs),g(o,ot,r),g(o,at,r),g(o,et,r),g(o,rt,r),y(rt,st),y(st,tt),y(rt,nt),y(rt,ct),y(ct,lt),y(rt,it),g(o,pt,r),g(o,ht,r),y(ht,ft),y(ft,dt),y(ht,mt),y(ht,ut),y(ut,vt),y(ht,Et),g(o,gt,r),g(o,yt,r),y(yt,Lt),y(Lt,$t),y($t,bt),y(Lt,xt),y(Lt,St),y(St,wt),y(Lt,At),y(Lt,Ct),y(Lt,Nt),y(Lt,Tt),y(Tt,It),y(Tt,Ot),y(Ot,Pt),y(Tt,Rt),y(Tt,Mt),y(Mt,kt),y(Tt,Gt),y(Lt,Ft),y(Lt,Ht),y(Ht,Bt),y(Ht,Dt),y(Dt,_t),y(Ht,jt),y(Ht,Ut),y(Ut,Vt),y(Ht,Wt),g(o,Jt,r),zt.m(o,r),g(o,Yt,r),g(o,qt,r),g(o,Kt,r),g(o,Qt,r),y(Qt,Xt),y(Xt,Zt),y(Qt,on),g(o,an,r),g(o,en,r),y(en,rn),y(en,sn),y(sn,tn),y(en,nn),y(en,cn),y(cn,ln),g(o,pn,r),hn.m(o,r),g(o,fn,r),E(Sn,o,r),dn=!0},p:L,i(o){dn||($(xn.$$.fragment,o),$(Sn.$$.fragment,o),dn=!0)},o(o){b(xn.$$.fragment,o),b(Sn.$$.fragment,o),dn=!1},d(o){x(xn,o),o&&m(a),o&&m(e),o&&m(C),o&&m(N),o&&m(I),o&&m(O),o&&m(Mo),o&&m(ko),o&&m(Uo),o&&Vo.d(),o&&m(Wo),o&&m(Jo),o&&m(ra),o&&m(sa),o&&m(ta),o&&m(na),o&&m(la),o&&m(ia),o&&m(ma),o&&m(ua),o&&m(Ea),o&&m(ga),o&&m(Ga),o&&m(Fa),o&&m(za),o&&m(Ya),o&&m(ae),o&&m(ee),o&&m(me),o&&ue.d(),o&&m(ve),o&&Ee.d(),o&&m(ge),o&&m(ye),o&&m(Le),o&&m($e),o&&m(_e),o&&m(je),o&&m(Ue),o&&m(Ve),o&&m(nr),o&&m(cr),o&&m(mr),o&&m(ur),o&&m(zr),o&&Yr.d(),o&&m(qr),o&&Kr.d(),o&&m(Qr),o&&m(Xr),o&&m(Zr),o&&m(os),o&&m(ps),o&&m(hs),o&&m(gs),o&&m(ys),o&&m(Bs),o&&Ds.d(),o&&m(_s),o&&js.d(),o&&m(Us),o&&m(Vs),o&&m(Ws),o&&m(Js),o&&m(ot),o&&m(at),o&&m(et),o&&m(rt),o&&m(pt),o&&m(ht),o&&m(gt),o&&m(yt),o&&m(Jt),o&&zt.d(),o&&m(Yt),o&&m(qt),o&&m(Kt),o&&m(Qt),o&&m(an),o&&m(en),o&&m(pn),o&&hn.d(),o&&m(fn),x(Sn,o)}}}const A="Loop offers a minimum styling along with common components and utilities to bootstrap any project as a base.";export default class extends o{constructor(o){super(),a(this,o,null,w,e,{})}}
