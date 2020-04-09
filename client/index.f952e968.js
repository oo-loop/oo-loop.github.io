import{S as e,i as a,s as r,H as s,J as o,D as t,r as n,e as i,l,E as c,u as f,a as d,b as m,m as h,d as p,f as u,I as v,F as E,g,o as y,v as b,t as x,k as C,G as D}from"./client.6a8e4dbc.js";import{P as w}from"./Pagination.5872991c.js";function S(e){let a,r,S,O,I,L,A,P,$,R,M,N,T,U,G,k,B,F,H,j,z,V,W,J,q,K,Q,X,Y,Z,_,ee,ae,re,se,oe,te,ne,ie,le,ce,fe,de,me,he,pe,ue,ve,Ee,ge,ye,be,xe,Ce,De,we,Se,Oe,Ie,Le,Ae,Pe,$e,Re,Me,Ne,Te,Ue,Ge,ke,Be,Fe,He,je,ze,Ve,We,Je,qe,Ke,Qe,Xe,Ye,Ze,_e,ea,aa,ra,sa,oa,ta,na,ia,la,ca,fa,da,ma,ha,pa,ua,va,Ea,ga,ya,ba,xa,Ca,Da,wa,Sa,Oa,Ia,La,Aa,Pa,$a,Ra,Ma,Na,Ta,Ua,Ga,ka,Ba,Fa,Ha,ja,za,Va,Wa,Ja,qa,Ka,Qa,Xa,Ya,Za,_a,er,ar,rr,sr,or,tr,nr,ir,lr,cr,fr,dr,mr,hr,pr,ur,vr,Er,gr,yr,br,xr,Cr,Dr,wr,Sr,Or,Ir,Lr,Ar,Pr,$r,Rr,Mr,Nr,Tr,Ur,Gr,kr,Br,Fr,Hr,jr,zr,Vr,Wr,Jr,qr,Kr,Qr,Xr,Yr,Zr,_r,es,as,rs,ss,os,ts,ns,is,ls,cs,fs,ds,ms,hs,ps,us,vs,Es,gs,ys,bs,xs,Cs,Ds,ws,Ss,Os,Is,Ls,As,Ps,$s,Rs,Ms,Ns,Ts=s("$ooLoop: ooAdd('utilities', (\n  borderRadius: (\n    prefix: 'radius',\n    values: (\n      'small': .5rem,\n      'large': 1.5rem,\n    )\n  ),\n  textDecoration: (\n    values: (\n      'underline',\n      'overline',\n    )\n  ),\n  display: (\n    prefix: 'd',\n    values: (\n      'block': block\n      'flex': flex,\n      'iflex': inline-flex,\n    )\n  ),\n  valign: (\n    property: 'vertical-align',\n    values: (\n      'top',\n      'middle',\n    ),\n    important: false,\n  )\n));\n","scss")+"",Us=s("/** It will generate **/\n\n.radius-small { border-radius: .5rem !important }\n.radius-large { border-radius: 1.5rem !important }\n\n.text-underline { text-decoration: underline !important }\n.text-overline  { text-decoration: overline !important }\n\n.d-block { display: block !important }\n.d-flex  { display: flex !important }\n.d-iflex { display: inline-flex !important }\n\n.valign-top    { vertical-align: top }\n.valign-middle { vertical-align: middle }\n","css")+"",Gs=s("@include ooCreate((\n  utilities: (\n    borderRadius: (\n      prefix: 'radius',\n      values: (\n        'small': .5rem,\n        'large': 1.5rem,\n      ),\n      screens: 'sm'\n    ),\n    textDecoration: (\n      values: (\n        'underline',\n      ),\n      screens: (sm, md, lg)\n    ),\n  )\n));\n","scss")+"",ks=s("@include ooCreate((\n  utilities: (\n    borderRadius: (\n      prefix: 'radius',\n      values: (\n        'small': .5rem,\n        'large': 1.5rem,\n      ),\n      screens: (\n        sm: 'small',\n        lg: '✲' // Target all\n      )\n    ),\n  )\n));\n","scss")+"",Bs=s("@include ooCreate((\n  utilities: (\n    borderRadius: (\n      prefix: 'radius',\n      values: (\n        'small': (\n          rt: .25rem,\n          sm: .5rem,\n          md: 1rem,\n        ),\n        'large': 1.5rem,\n      ),\n    ),\n  )\n));\n","scss")+"",Fs=s(".radius-small { border-radius: .25rem !important }\n\n@media (min-width: 37.5em) {\n  .radius-small { border-radius: .5rem !important }\n}\n@media (min-width: 60em) {\n  .radius-small { border-radius: 1rem !important }\n}\n\n.radius-large { border-radius: 1.5rem !important }\n","css")+"";const Hs=new o({props:{title:"Utility classes"}}),js=new w({props:{href:"docs/utilities/color",label:"Use Color utilities"}});return{c(){t(Hs.$$.fragment),a=n(),r=i("h1"),S=l("Utilities"),O=n(),I=i("p"),L=l("A bunch of handy classes doing one job to customize elements on the fly."),A=n(),P=i("p"),$=l("Loop provides flexible utilities to assist you during your development. Extend them, set your own needs by adjusting the "),R=i("a"),M=l("Loop config"),N=l(" with the correct "),T=i("a"),U=l("format"),G=l("."),k=n(),B=i("ul"),F=i("li"),H=i("a"),j=l("Color"),z=n(),V=i("li"),W=i("a"),J=l("Typography"),q=n(),K=i("li"),Q=i("a"),X=l("Spacing"),Y=n(),Z=i("li"),_=i("a"),ee=l("Float"),ae=n(),re=i("li"),se=i("a"),oe=l("Wrapper"),te=n(),ne=i("div"),ie=n(),le=i("h2"),ce=i("a"),fe=l("#"),de=l(" Format"),me=n(),he=i("p"),pe=l("A utility follows a specific map format being passed to the config."),ue=n(),ve=i("ul"),Ee=i("li"),ge=i("code"),ye=l("prefix"),be=i("em"),xe=l("(string)"),Ce=i("em"),De=l("(optional)"),we=n(),Se=i("br"),Oe=l("Name prefixing each values - (default grabbing the first part of the name of the map)"),Ie=n(),Le=i("li"),Ae=i("code"),Pe=l("property"),$e=i("em"),Re=l("(string)"),Me=i("em"),Ne=l("(optional)"),Te=n(),Ue=i("br"),Ge=l("CSS property to change - (default turning the name of the map into a kebab-case CSS property)"),ke=n(),Be=i("li"),Fe=i("code"),He=l("values"),je=i("em"),ze=l("(map|list)"),Ve=n(),We=i("br"),Je=l("CSS values for the targetted CSS property"),qe=n(),Ke=i("li"),Qe=i("code"),Xe=l("important"),Ye=i("em"),Ze=l("(boolean)"),_e=i("em"),ea=l("(optional)"),aa=n(),ra=i("br"),sa=l("Add the "),oa=i("em"),ta=l("!important"),na=l(" flag - (default to true)"),ia=n(),la=i("li"),ca=i("code"),fa=l("screens"),da=i("em"),ma=l("(mixed)"),ha=i("em"),pa=l("(optional)"),ua=n(),va=i("br"),Ea=l("Targetted responsive screens, global or specific - (defaulft empty)"),ga=n(),ya=i("p"),ba=l("The generated class will be created from "),xa=i("strong"),Ca=i("span"),Da=l("."),wa=l("(prefix | namePart1)"),Sa=i("span"),Oa=l("-"),Ia=l("valueName"),La=n(),Aa=i("div"),Pa=n(),$a=i("h2"),Ra=i("a"),Ma=l("#"),Na=l(" Custom Utilities"),Ta=n(),Ua=i("p"),Ga=l("Following the appropriate map format create your own utitlies via the proterty "),ka=i("em"),Ba=l("utilities"),Fa=l(" of the Loop config."),Ha=n(),za=n(),Wa=n(),Ja=i("div"),qa=n(),Ka=i("h2"),Qa=i("a"),Xa=l("#"),Ya=l(" Responsive utilities"),Za=n(),_a=i("p"),er=l("The "),ar=i("em"),rr=l("screens"),sr=l(" propertity can be used to set global responsive rules to apply to all listed values."),or=i("code"),tr=i("i"),nr=l("prefix"),ir=l("-"),lr=i("i"),cr=l("valueName"),fr=l("@"),dr=i("i"),mr=l("screenName"),hr=n(),ur=n(),vr=i("p"),Er=l("Generating the classes\n"),gr=i("code"),yr=l(".radius-small"),br=n(),xr=i("code"),Cr=l(".radius-large"),Dr=n(),wr=i("code"),Sr=l(".radius-small@sm"),Or=n(),Ir=i("code"),Lr=l(".radius-large@sm"),Ar=n(),Pr=i("code"),$r=l(".text-underline"),Rr=n(),Mr=i("code"),Nr=l(".text-underline@sm"),Tr=n(),Ur=i("code"),Gr=l(".text-underline@md"),kr=n(),Br=i("code"),Fr=l(".text-underline@lg"),Hr=n(),jr=i("h4"),zr=l("Be specific, lighten your css"),Vr=n(),Wr=i("p"),Jr=l("Specify the needed valueName from the needed screens and generate only the necessary rules."),qr=n(),Qr=n(),Xr=i("p"),Yr=l("Generating the classes\n"),Zr=i("code"),_r=l(".radius-small"),es=n(),as=i("code"),rs=l(".radius-large"),ss=n(),os=i("code"),ts=l(".radius-small@sm"),ns=n(),is=i("code"),ls=l(".radius-small@lg"),cs=n(),fs=i("code"),ds=l(".radius-large@lg"),ms=n(),hs=i("h4"),ps=l("Responsive value"),us=n(),vs=i("p"),Es=l("Instead of using the "),gs=i("em"),ys=l("screens"),bs=l(" property, set a responsive screen map to your utility value to modify it between the screen sizes."),xs=n(),Ds=n(),ws=i("p"),Ss=l("Generating the classes\n"),Os=i("code"),Is=l(".radius-small"),Ls=n(),As=i("code"),Ps=l(".radius-large"),$s=n(),Ms=n(),t(js.$$.fragment),this.h()},l(e){c(Hs.$$.fragment,e),a=f(e),r=d(e,"H1",{});var s=m(r);S=h(s,"Utilities"),s.forEach(p),O=f(e),I=d(e,"P",{class:!0});var o=m(I);L=h(o,"A bunch of handy classes doing one job to customize elements on the fly."),o.forEach(p),A=f(e),P=d(e,"P",{});var t=m(P);$=h(t,"Loop provides flexible utilities to assist you during your development. Extend them, set your own needs by adjusting the "),R=d(t,"A",{href:!0,title:!0});var n=m(R);M=h(n,"Loop config"),n.forEach(p),N=h(t," with the correct "),T=d(t,"A",{href:!0,title:!0});var i=m(T);U=h(i,"format"),i.forEach(p),G=h(t,"."),t.forEach(p),k=f(e),B=d(e,"UL",{});var l=m(B);F=d(l,"LI",{});var u=m(F);H=d(u,"A",{href:!0});var v=m(H);j=h(v,"Color"),v.forEach(p),u.forEach(p),z=f(l),V=d(l,"LI",{});var E=m(V);W=d(E,"A",{href:!0});var g=m(W);J=h(g,"Typography"),g.forEach(p),E.forEach(p),q=f(l),K=d(l,"LI",{});var y=m(K);Q=d(y,"A",{href:!0});var b=m(Q);X=h(b,"Spacing"),b.forEach(p),y.forEach(p),Y=f(l),Z=d(l,"LI",{});var x=m(Z);_=d(x,"A",{href:!0});var C=m(_);ee=h(C,"Float"),C.forEach(p),x.forEach(p),ae=f(l),re=d(l,"LI",{});var D=m(re);se=d(D,"A",{href:!0});var w=m(se);oe=h(w,"Wrapper"),w.forEach(p),D.forEach(p),l.forEach(p),te=f(e),ne=d(e,"DIV",{class:!0}),m(ne).forEach(p),ie=f(e),le=d(e,"H2",{id:!0});var ja=m(le);ce=d(ja,"A",{href:!0});var Va=m(ce);fe=h(Va,"#"),Va.forEach(p),de=h(ja," Format"),ja.forEach(p),me=f(e),he=d(e,"P",{});var pr=m(he);pe=h(pr,"A utility follows a specific map format being passed to the config."),pr.forEach(p),ue=f(e),ve=d(e,"UL",{});var Kr=m(ve);Ee=d(Kr,"LI",{class:!0});var Cs=m(Ee);ge=d(Cs,"CODE",{});var Rs=m(ge);ye=h(Rs,"prefix"),Rs.forEach(p),be=d(Cs,"EM",{class:!0});var Ns=m(be);xe=h(Ns,"(string)"),Ns.forEach(p),Ce=d(Cs,"EM",{class:!0});var Ts=m(Ce);De=h(Ts,"(optional)"),Ts.forEach(p),we=f(Cs),Se=d(Cs,"BR",{}),Oe=h(Cs,"Name prefixing each values - (default grabbing the first part of the name of the map)"),Cs.forEach(p),Ie=f(Kr),Le=d(Kr,"LI",{class:!0});var Us=m(Le);Ae=d(Us,"CODE",{});var Gs=m(Ae);Pe=h(Gs,"property"),Gs.forEach(p),$e=d(Us,"EM",{class:!0});var ks=m($e);Re=h(ks,"(string)"),ks.forEach(p),Me=d(Us,"EM",{class:!0});var Bs=m(Me);Ne=h(Bs,"(optional)"),Bs.forEach(p),Te=f(Us),Ue=d(Us,"BR",{}),Ge=h(Us,"CSS property to change - (default turning the name of the map into a kebab-case CSS property)"),Us.forEach(p),ke=f(Kr),Be=d(Kr,"LI",{class:!0});var Fs=m(Be);Fe=d(Fs,"CODE",{});var zs=m(Fe);He=h(zs,"values"),zs.forEach(p),je=d(Fs,"EM",{class:!0});var Vs=m(je);ze=h(Vs,"(map|list)"),Vs.forEach(p),Ve=f(Fs),We=d(Fs,"BR",{}),Je=h(Fs,"CSS values for the targetted CSS property"),Fs.forEach(p),qe=f(Kr),Ke=d(Kr,"LI",{class:!0});var Ws=m(Ke);Qe=d(Ws,"CODE",{});var Js=m(Qe);Xe=h(Js,"important"),Js.forEach(p),Ye=d(Ws,"EM",{class:!0});var qs=m(Ye);Ze=h(qs,"(boolean)"),qs.forEach(p),_e=d(Ws,"EM",{class:!0});var Ks=m(_e);ea=h(Ks,"(optional)"),Ks.forEach(p),aa=f(Ws),ra=d(Ws,"BR",{}),sa=h(Ws,"Add the "),oa=d(Ws,"EM",{});var Qs=m(oa);ta=h(Qs,"!important"),Qs.forEach(p),na=h(Ws," flag - (default to true)"),Ws.forEach(p),ia=f(Kr),la=d(Kr,"LI",{});var Xs=m(la);ca=d(Xs,"CODE",{});var Ys=m(ca);fa=h(Ys,"screens"),Ys.forEach(p),da=d(Xs,"EM",{class:!0});var Zs=m(da);ma=h(Zs,"(mixed)"),Zs.forEach(p),ha=d(Xs,"EM",{class:!0});var _s=m(ha);pa=h(_s,"(optional)"),_s.forEach(p),ua=f(Xs),va=d(Xs,"BR",{}),Ea=h(Xs,"Targetted responsive screens, global or specific - (defaulft empty)"),Xs.forEach(p),Kr.forEach(p),ga=f(e),ya=d(e,"P",{class:!0});var eo=m(ya);ba=h(eo,"The generated class will be created from "),xa=d(eo,"STRONG",{});var ao=m(xa);Ca=d(ao,"SPAN",{class:!0});var ro=m(Ca);Da=h(ro,"."),ro.forEach(p),wa=h(ao,"(prefix | namePart1)"),Sa=d(ao,"SPAN",{class:!0});var so=m(Sa);Oa=h(so,"-"),so.forEach(p),Ia=h(ao,"valueName"),ao.forEach(p),eo.forEach(p),La=f(e),Aa=d(e,"DIV",{class:!0}),m(Aa).forEach(p),Pa=f(e),$a=d(e,"H2",{id:!0});var oo=m($a);Ra=d(oo,"A",{href:!0});var to=m(Ra);Ma=h(to,"#"),to.forEach(p),Na=h(oo," Custom Utilities"),oo.forEach(p),Ta=f(e),Ua=d(e,"P",{});var no=m(Ua);Ga=h(no,"Following the appropriate map format create your own utitlies via the proterty "),ka=d(no,"EM",{});var io=m(ka);Ba=h(io,"utilities"),io.forEach(p),Fa=h(no," of the Loop config."),no.forEach(p),Ha=f(e),za=f(e),Wa=f(e),Ja=d(e,"DIV",{class:!0}),m(Ja).forEach(p),qa=f(e),Ka=d(e,"H2",{id:!0});var lo=m(Ka);Qa=d(lo,"A",{href:!0});var co=m(Qa);Xa=h(co,"#"),co.forEach(p),Ya=h(lo," Responsive utilities"),lo.forEach(p),Za=f(e),_a=d(e,"P",{});var fo=m(_a);er=h(fo,"The "),ar=d(fo,"EM",{});var mo=m(ar);rr=h(mo,"screens"),mo.forEach(p),sr=h(fo," propertity can be used to set global responsive rules to apply to all listed values."),or=d(fo,"CODE",{});var ho=m(or);tr=d(ho,"I",{class:!0});var po=m(tr);nr=h(po,"prefix"),po.forEach(p),ir=h(ho,"-"),lr=d(ho,"I",{class:!0});var uo=m(lr);cr=h(uo,"valueName"),uo.forEach(p),fr=h(ho,"@"),dr=d(ho,"I",{class:!0});var vo=m(dr);mr=h(vo,"screenName"),vo.forEach(p),ho.forEach(p),fo.forEach(p),hr=f(e),ur=f(e),vr=d(e,"P",{});var Eo=m(vr);Er=h(Eo,"Generating the classes\n"),gr=d(Eo,"CODE",{});var go=m(gr);yr=h(go,".radius-small"),go.forEach(p),br=f(Eo),xr=d(Eo,"CODE",{});var yo=m(xr);Cr=h(yo,".radius-large"),yo.forEach(p),Dr=f(Eo),wr=d(Eo,"CODE",{});var bo=m(wr);Sr=h(bo,".radius-small@sm"),bo.forEach(p),Or=f(Eo),Ir=d(Eo,"CODE",{});var xo=m(Ir);Lr=h(xo,".radius-large@sm"),xo.forEach(p),Ar=f(Eo),Pr=d(Eo,"CODE",{});var Co=m(Pr);$r=h(Co,".text-underline"),Co.forEach(p),Rr=f(Eo),Mr=d(Eo,"CODE",{});var Do=m(Mr);Nr=h(Do,".text-underline@sm"),Do.forEach(p),Tr=f(Eo),Ur=d(Eo,"CODE",{});var wo=m(Ur);Gr=h(wo,".text-underline@md"),wo.forEach(p),kr=f(Eo),Br=d(Eo,"CODE",{});var So=m(Br);Fr=h(So,".text-underline@lg"),So.forEach(p),Eo.forEach(p),Hr=f(e),jr=d(e,"H4",{class:!0});var Oo=m(jr);zr=h(Oo,"Be specific, lighten your css"),Oo.forEach(p),Vr=f(e),Wr=d(e,"P",{});var Io=m(Wr);Jr=h(Io,"Specify the needed valueName from the needed screens and generate only the necessary rules."),Io.forEach(p),qr=f(e),Qr=f(e),Xr=d(e,"P",{});var Lo=m(Xr);Yr=h(Lo,"Generating the classes\n"),Zr=d(Lo,"CODE",{});var Ao=m(Zr);_r=h(Ao,".radius-small"),Ao.forEach(p),es=f(Lo),as=d(Lo,"CODE",{});var Po=m(as);rs=h(Po,".radius-large"),Po.forEach(p),ss=f(Lo),os=d(Lo,"CODE",{});var $o=m(os);ts=h($o,".radius-small@sm"),$o.forEach(p),ns=f(Lo),is=d(Lo,"CODE",{});var Ro=m(is);ls=h(Ro,".radius-small@lg"),Ro.forEach(p),cs=f(Lo),fs=d(Lo,"CODE",{});var Mo=m(fs);ds=h(Mo,".radius-large@lg"),Mo.forEach(p),Lo.forEach(p),ms=f(e),hs=d(e,"H4",{class:!0});var No=m(hs);ps=h(No,"Responsive value"),No.forEach(p),us=f(e),vs=d(e,"P",{});var To=m(vs);Es=h(To,"Instead of using the "),gs=d(To,"EM",{});var Uo=m(gs);ys=h(Uo,"screens"),Uo.forEach(p),bs=h(To," property, set a responsive screen map to your utility value to modify it between the screen sizes."),To.forEach(p),xs=f(e),Ds=f(e),ws=d(e,"P",{});var Go=m(ws);Ss=h(Go,"Generating the classes\n"),Os=d(Go,"CODE",{});var ko=m(Os);Is=h(ko,".radius-small"),ko.forEach(p),Ls=f(Go),As=d(Go,"CODE",{});var Bo=m(As);Ps=h(Bo,".radius-large"),Bo.forEach(p),Go.forEach(p),$s=f(e),Ms=f(e),c(js.$$.fragment,e),this.h()},h(){u(I,"class","font-large"),u(R,"href","docs/config"),u(R,"title","Loop Config"),u(T,"href","docs/utilities#format"),u(T,"title","Utility format"),u(H,"href","docs/utilities/color"),u(W,"href","docs/utilities/typography"),u(Q,"href","docs/utilities/spacing"),u(_,"href","docs/utilities/float"),u(se,"href","docs/utilities/wrapper"),u(ne,"class","hr"),u(ce,"href","docs/utilities#format"),u(le,"id","format"),u(be,"class","font-monospace"),u(Ce,"class","font-monospace color-secondary"),u(Ee,"class","mb-10"),u($e,"class","font-monospace"),u(Me,"class","font-monospace color-secondary"),u(Le,"class","mb-10"),u(je,"class","font-monospace"),u(Be,"class","mb-10"),u(Ye,"class","font-monospace"),u(_e,"class","font-monospace color-secondary"),u(Ke,"class","mb-10"),u(da,"class","font-monospace"),u(ha,"class","font-monospace color-secondary"),u(Ca,"class","color-primary"),u(Sa,"class","color-primary"),u(ya,"class","info"),u(Aa,"class","hr"),u(Ra,"href","docs/utilities#format"),u($a,"id","custom"),ja=new v(Ts,za),Va=new v(Us,Wa),u(Ja,"class","hr"),u(Qa,"href","docs/utilities#responsive"),u(Ka,"id","responsive"),u(tr,"class","colo-secondary"),u(lr,"class","colo-secondary"),u(dr,"class","colo-secondary"),pr=new v(Gs,ur),u(jr,"class","mt-30"),Kr=new v(ks,Qr),u(hs,"class","mt-30"),Cs=new v(Bs,Ds),Rs=new v(Fs,Ms)},m(e,s){E(Hs,e,s),g(e,a,s),g(e,r,s),y(r,S),g(e,O,s),g(e,I,s),y(I,L),g(e,A,s),g(e,P,s),y(P,$),y(P,R),y(R,M),y(P,N),y(P,T),y(T,U),y(P,G),g(e,k,s),g(e,B,s),y(B,F),y(F,H),y(H,j),y(B,z),y(B,V),y(V,W),y(W,J),y(B,q),y(B,K),y(K,Q),y(Q,X),y(B,Y),y(B,Z),y(Z,_),y(_,ee),y(B,ae),y(B,re),y(re,se),y(se,oe),g(e,te,s),g(e,ne,s),g(e,ie,s),g(e,le,s),y(le,ce),y(ce,fe),y(le,de),g(e,me,s),g(e,he,s),y(he,pe),g(e,ue,s),g(e,ve,s),y(ve,Ee),y(Ee,ge),y(ge,ye),y(Ee,be),y(be,xe),y(Ee,Ce),y(Ce,De),y(Ee,we),y(Ee,Se),y(Ee,Oe),y(ve,Ie),y(ve,Le),y(Le,Ae),y(Ae,Pe),y(Le,$e),y($e,Re),y(Le,Me),y(Me,Ne),y(Le,Te),y(Le,Ue),y(Le,Ge),y(ve,ke),y(ve,Be),y(Be,Fe),y(Fe,He),y(Be,je),y(je,ze),y(Be,Ve),y(Be,We),y(Be,Je),y(ve,qe),y(ve,Ke),y(Ke,Qe),y(Qe,Xe),y(Ke,Ye),y(Ye,Ze),y(Ke,_e),y(_e,ea),y(Ke,aa),y(Ke,ra),y(Ke,sa),y(Ke,oa),y(oa,ta),y(Ke,na),y(ve,ia),y(ve,la),y(la,ca),y(ca,fa),y(la,da),y(da,ma),y(la,ha),y(ha,pa),y(la,ua),y(la,va),y(la,Ea),g(e,ga,s),g(e,ya,s),y(ya,ba),y(ya,xa),y(xa,Ca),y(Ca,Da),y(xa,wa),y(xa,Sa),y(Sa,Oa),y(xa,Ia),g(e,La,s),g(e,Aa,s),g(e,Pa,s),g(e,$a,s),y($a,Ra),y(Ra,Ma),y($a,Na),g(e,Ta,s),g(e,Ua,s),y(Ua,Ga),y(Ua,ka),y(ka,Ba),y(Ua,Fa),g(e,Ha,s),ja.m(e,s),g(e,za,s),Va.m(e,s),g(e,Wa,s),g(e,Ja,s),g(e,qa,s),g(e,Ka,s),y(Ka,Qa),y(Qa,Xa),y(Ka,Ya),g(e,Za,s),g(e,_a,s),y(_a,er),y(_a,ar),y(ar,rr),y(_a,sr),y(_a,or),y(or,tr),y(tr,nr),y(or,ir),y(or,lr),y(lr,cr),y(or,fr),y(or,dr),y(dr,mr),g(e,hr,s),pr.m(e,s),g(e,ur,s),g(e,vr,s),y(vr,Er),y(vr,gr),y(gr,yr),y(vr,br),y(vr,xr),y(xr,Cr),y(vr,Dr),y(vr,wr),y(wr,Sr),y(vr,Or),y(vr,Ir),y(Ir,Lr),y(vr,Ar),y(vr,Pr),y(Pr,$r),y(vr,Rr),y(vr,Mr),y(Mr,Nr),y(vr,Tr),y(vr,Ur),y(Ur,Gr),y(vr,kr),y(vr,Br),y(Br,Fr),g(e,Hr,s),g(e,jr,s),y(jr,zr),g(e,Vr,s),g(e,Wr,s),y(Wr,Jr),g(e,qr,s),Kr.m(e,s),g(e,Qr,s),g(e,Xr,s),y(Xr,Yr),y(Xr,Zr),y(Zr,_r),y(Xr,es),y(Xr,as),y(as,rs),y(Xr,ss),y(Xr,os),y(os,ts),y(Xr,ns),y(Xr,is),y(is,ls),y(Xr,cs),y(Xr,fs),y(fs,ds),g(e,ms,s),g(e,hs,s),y(hs,ps),g(e,us,s),g(e,vs,s),y(vs,Es),y(vs,gs),y(gs,ys),y(vs,bs),g(e,xs,s),Cs.m(e,s),g(e,Ds,s),g(e,ws,s),y(ws,Ss),y(ws,Os),y(Os,Is),y(ws,Ls),y(ws,As),y(As,Ps),g(e,$s,s),Rs.m(e,s),g(e,Ms,s),E(js,e,s),Ns=!0},p:b,i(e){Ns||(x(Hs.$$.fragment,e),x(js.$$.fragment,e),Ns=!0)},o(e){C(Hs.$$.fragment,e),C(js.$$.fragment,e),Ns=!1},d(e){D(Hs,e),e&&p(a),e&&p(r),e&&p(O),e&&p(I),e&&p(A),e&&p(P),e&&p(k),e&&p(B),e&&p(te),e&&p(ne),e&&p(ie),e&&p(le),e&&p(me),e&&p(he),e&&p(ue),e&&p(ve),e&&p(ga),e&&p(ya),e&&p(La),e&&p(Aa),e&&p(Pa),e&&p($a),e&&p(Ta),e&&p(Ua),e&&p(Ha),e&&ja.d(),e&&p(za),e&&Va.d(),e&&p(Wa),e&&p(Ja),e&&p(qa),e&&p(Ka),e&&p(Za),e&&p(_a),e&&p(hr),e&&pr.d(),e&&p(ur),e&&p(vr),e&&p(Hr),e&&p(jr),e&&p(Vr),e&&p(Wr),e&&p(qr),e&&Kr.d(),e&&p(Qr),e&&p(Xr),e&&p(ms),e&&p(hs),e&&p(us),e&&p(vs),e&&p(xs),e&&Cs.d(),e&&p(Ds),e&&p(ws),e&&p($s),e&&Rs.d(),e&&p(Ms),D(js,e)}}}export default class extends e{constructor(e){super(),a(this,e,null,S,r,{})}}
