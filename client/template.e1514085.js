import{S as a,i as e,s,H as o,J as r,e as t,l as n,a as l,b as d,m as i,d as c,g as v,o as h,v as p,D as m,r as f,E as g,u as E,f as u,I as $,N as b,F as w,P as I,K as D,p as j,t as V,k as y,G as z,w as N,Q as S,R as C}from"./client.6a8e4dbc.js";import{P as H}from"./Pagination.5872991c.js";import{D as M}from"./DataAttrToggler.3af49171.js";function k(a,e,s){const o=a.slice();return o[6]=e[s],o}function T(a){let e,s,o,r,m=a[6]+"";return{c(){e=t("option"),s=n("gap "),o=n(m),this.h()},l(a){e=l(a,"OPTION",{value:!0});var r=d(e);s=i(r,"gap "),o=i(r,m),r.forEach(c),this.h()},h(){e.__value=r=a[6],e.value=e.__value},m(a,r){v(a,e,r),h(e,s),h(e,o)},p:p,d(a){a&&c(e)}}}function O(a){let e,s,p,C,O,P,B,R,A,F,G,L,U,_,x,q,J,K,Q,W,X,Y,Z,aa,ea,sa,oa,ra,ta,na,la,da,ia,ca,va,ha,pa,ma,fa,ga,Ea,ua,$a,ba,wa,Ia,Da,ja,Va,ya,za,Na,Sa,Ca,Ha,Ma,ka,Ta,Oa,Pa,Ba,Ra,Aa,Fa,Ga,La,Ua,_a,xa,qa,Ja,Ka,Qa,Wa,Xa,Ya,Za,ae,ee,se,oe,re,te,ne,le,de,ie,ce,ve,he,pe,me,fe,ge,Ee,ue,$e,be,we,Ie,De,je,Ve,ye,ze,Ne,Se,Ce,He,Me,ke,Te,Oe,Pe,Be,Re,Ae,Fe,Ge,Le,Ue,_e,xe,qe,Je,Ke,Qe,We,Xe,Ye,Ze,as,es,ss,os,rs,ts,ns,ls,ds,is,cs,vs,hs,ps,ms,fs,gs,Es,us,$s,bs,ws,Is,Ds,js,Vs,ys,zs,Ns,Ss,Cs,Hs,Ms,ks,Ts,Os,Ps,Bs,Rs,As,Fs=o("//default config\ntemplate: (\n  areas: (),\n),\n","scss")+"",Gs=o('$ooLoop: ooSet(\'template.areas\', ( \n  rt: (\n    "header"\n    "main"\n    "sidebar"\n    "footer"\n  ),\n  sm: (\n    "header header header header"// full width\n    "main main main sidebar"     // main 3/4 & sidebar 1/4\n    "footer footer footer footer"// full width\n  ),\n));',"scss")+"",Ls=o('$ooLoop: ooSet(\'template.areas\', (\n  \'home\': (\n    rt: (\n      "header"\n      "main"\n      "sidebar"\n      "footer"\n    ),\n    sm: (\n      "header header header header"\n      "main main main sidebar"\n      "footer footer footer footer"\n    ),\n  ),\n\n  \'abc\': (\n    rt: (\n      "a"\n      "b"\n      "c"\n    ),\n    sm: (\n      "a a"\n      "c b"\n      "c b"\n    ),\n    md: (\n      "a a a"\n      "b c c"\n      "b c c"\n    ),\n    lg: (\n      "a b b"\n      "a c c"\n      "a . ."\n    ),\n  )\n));',"scss")+"",Us=o("// default config\ntemplate: (\n  gap: (\n    sizes: (),  // gap between columns and between rows\n    screens: (),// responsive screens for sizes\n    vsizes: (), // gap between rows only\n    vscreens:(),// responsive screens for vsizes\n  ),\n)","scss")+"",_s=o("$ooLoop: ooSet('template.gap', (\n  sizes: (\n    default: 1rem, // use default keyword to set main gap\n    'less': 0, // gap-less\n    'small': ( // gap-small has a responsive map\n      rt: .25rem,\n      sm: .5rem, \n    ),\n  ),\n  vsizes: (\n    'less': 0, // vgap-less\n  ),\n));","scss")+"",xs=o("$ooLoop: ooSet('template.gap', (\n  sizes: (\n    default: 1rem,\n    'less': 0,\n    'small': (\n      sm: .5rem, \n    ),\n  ),\n  vsizes: (\n    'less': 0,\n  ),\n  screens: ('sm', 'lg'),\n  vscreens: this('template.gap.screens'), //get screens value\n));\n\n/* Generating responsive variants */\n// - gap-default@sm gap-default@lg gap-less@sm gap-less@lg\n// - vgap-less@sm vgap-less@lg\n","scss")+"";const qs=new r({props:{title:"Template component"}}),Js=new M({props:{content:'<section oo-template>\n  <header oo-area="header">Header</header>\n  <main oo-area="main">Main</main>\n  <aside oo-area="sidebar">Sidebar</aside>\n  <footer oo-area="footer">Footer</footer>\n</section>\n'}}),Ks=new M({props:{content:'<div oo-template="abc">\n  <div oo-area="a">A</div>\n  <div oo-area="b">B</div>\n  <div oo-area="c">C</div>\n</div>\n'}}),Qs=new M({props:{content:`<div oo-template="home${a[2]}${a[1]?" vgap-less":""}">\n <div oo-area="header">Header</div>\n  <div oo-area="main">Main</div>\n  <div oo-area="sidebar">Sidebar</div>\n  <div oo-area="footer">Footer</div>\n</div>\n`}});let Ws=a[3],Xs=[];for(let e=0;e<Ws.length;e+=1)Xs[e]=T(k(a,Ws,e));const Ys=new M({props:{content:'<div oo-template="abc gap-less@sm gap-default@lg vgap-less@lg">\n  <div oo-area="a">A</div>\n  <div oo-area="b">B</div>\n  <div oo-area="c">C</div>\n</div>\n'}}),Zs=new H({props:{href:"docs/components/button",label:"Use Button"}});return{c(){m(qs.$$.fragment),e=f(),s=t("h1"),p=n("Template"),C=f(),O=t("p"),P=t("i"),B=n("Blueprint"),R=n(" semantically a page or elements in a page."),A=t("br"),F=f(),G=t("code"),L=n("oo-template"),U=t("code"),_=n("oo-area"),x=f(),q=t("p"),J=n("The component is included by default but requires you to "),K=t("strong"),Q=n("pass your own design plan"),W=n(" to the "),X=t("em"),Y=n("areas"),Z=n(" property. Use a responsive map to modify the layout between screens sizes."),aa=f(),sa=f(),oa=t("p"),ra=n("Repeat the areas' name to set the proportional size between each location."),ta=f(),la=f(),m(Js.$$.fragment),da=f(),ia=t("div"),ca=t("div"),va=t("div"),ha=n("Header"),pa=f(),ma=t("div"),fa=n("Main"),ga=f(),Ea=t("div"),ua=n("Sidebar"),$a=f(),ba=t("div"),wa=n("Footer"),Ia=f(),Da=t("hr"),ja=f(),Va=t("h2"),ya=t("a"),za=n("#"),Na=n(" Multiple templates"),Sa=f(),Ca=t("p"),Ha=n("Pass a list of "),Ma=t("strong"),ka=n("named templates"),Ta=n(" to the "),Oa=t("em"),Pa=n("areas"),Ba=n(" property."),Ra=f(),Fa=f(),m(Ks.$$.fragment),Ga=f(),La=t("div"),Ua=t("div"),_a=t("div"),xa=n("A"),qa=f(),Ja=t("div"),Ka=n("B"),Qa=f(),Wa=t("div"),Xa=n("C"),Ya=f(),Za=t("hr"),ae=f(),ee=t("h2"),se=t("a"),oe=n("#"),re=n(" Gap"),te=f(),ne=t("p"),le=n("Change the horizontal and vertical space between the areas."),de=t("code"),ie=n("gap-"),ce=t("i"),ve=n("gapName"),he=f(),pe=t("code"),me=n("vgap-"),fe=t("i"),ge=n("gapName"),Ee=f(),$e=f(),we=f(),m(Qs.$$.fragment),Ie=f(),De=t("button"),je=n("toggle vgap-less"),Ve=f(),ye=t("div"),ze=t("select");for(let a=0;a<Xs.length;a+=1)Xs[a].c();Ne=f(),Se=t("div"),Ce=t("div"),He=t("div"),Me=n("Header"),ke=f(),Te=t("div"),Oe=n("Main"),Pe=f(),Be=t("div"),Re=n("Sidebar"),Ae=f(),Fe=t("div"),Ge=n("Footer"),Ue=f(),_e=t("h3"),xe=n("Responsive screens"),qe=f(),Je=t("p"),Ke=n("Set reponsive gap from the "),Qe=t("em"),We=n("screens"),Xe=n(" & "),Ye=t("em"),Ze=n("vscreens"),as=n(" properties and get variants. "),es=t("code"),ss=n("gap-"),os=t("i"),rs=n("sizeName"),ts=n("@"),ns=t("i"),ls=n("screenName"),ds=f(),is=t("code"),cs=n("vgap-"),vs=t("i"),hs=n("sizeName"),ps=n("@"),ms=t("i"),fs=n("screenName"),gs=n(". "),Es=t("i"),us=n("(Variants with "),$s=t("strong"),bs=n("map value will be skipped"),ws=n(")"),Is=n("."),Ds=f(),Vs=f(),m(Ys.$$.fragment),ys=f(),zs=t("div"),Ns=t("div"),Ss=t("div"),Cs=n("A"),Hs=f(),Ms=t("div"),ks=n("B"),Ts=f(),Os=t("div"),Ps=n("C"),Bs=f(),m(Zs.$$.fragment),this.h()},l(a){g(qs.$$.fragment,a),e=E(a),s=l(a,"H1",{});var o=d(s);p=i(o,"Template"),o.forEach(c),C=E(a),O=l(a,"P",{class:!0});var r=d(O);P=l(r,"I",{});var t=d(P);B=i(t,"Blueprint"),t.forEach(c),R=i(r," semantically a page or elements in a page."),A=l(r,"BR",{}),F=E(r),G=l(r,"CODE",{class:!0});var n=d(G);L=i(n,"oo-template"),n.forEach(c),U=l(r,"CODE",{});var v=d(U);_=i(v,"oo-area"),v.forEach(c),r.forEach(c),x=E(a),q=l(a,"P",{});var h=d(q);J=i(h,"The component is included by default but requires you to "),K=l(h,"STRONG",{});var m=d(K);Q=i(m,"pass your own design plan"),m.forEach(c),W=i(h," to the "),X=l(h,"EM",{});var f=d(X);Y=i(f,"areas"),f.forEach(c),Z=i(h," property. Use a responsive map to modify the layout between screens sizes."),h.forEach(c),aa=E(a),sa=E(a),oa=l(a,"P",{class:!0});var u=d(oa);ra=i(u,"Repeat the areas' name to set the proportional size between each location."),u.forEach(c),ta=E(a),la=E(a),g(Js.$$.fragment,a),da=E(a),ia=l(a,"DIV",{class:!0});var $=d(ia);ca=l($,"DIV",{"data-oo-template":!0,class:!0});var b=d(ca);va=l(b,"DIV",{class:!0,"data-oo-area":!0});var w=d(va);ha=i(w,"Header"),w.forEach(c),pa=E(b),ma=l(b,"DIV",{class:!0,"data-oo-area":!0});var I=d(ma);fa=i(I,"Main"),I.forEach(c),ga=E(b),Ea=l(b,"DIV",{class:!0,"data-oo-area":!0});var D=d(Ea);ua=i(D,"Sidebar"),D.forEach(c),$a=E(b),ba=l(b,"DIV",{class:!0,"data-oo-area":!0});var j=d(ba);wa=i(j,"Footer"),j.forEach(c),b.forEach(c),$.forEach(c),Ia=E(a),Da=l(a,"HR",{}),ja=E(a),Va=l(a,"H2",{id:!0});var V=d(Va);ya=l(V,"A",{href:!0,title:!0});var y=d(ya);za=i(y,"#"),y.forEach(c),Na=i(V," Multiple templates"),V.forEach(c),Sa=E(a),Ca=l(a,"P",{});var z=d(Ca);Ha=i(z,"Pass a list of "),Ma=l(z,"STRONG",{});var N=d(Ma);ka=i(N,"named templates"),N.forEach(c),Ta=i(z," to the "),Oa=l(z,"EM",{});var S=d(Oa);Pa=i(S,"areas"),S.forEach(c),Ba=i(z," property."),z.forEach(c),Ra=E(a),Fa=E(a),g(Ks.$$.fragment,a),Ga=E(a),La=l(a,"DIV",{class:!0});var H=d(La);Ua=l(H,"DIV",{"data-oo-template":!0,class:!0});var M=d(Ua);_a=l(M,"DIV",{class:!0,"data-oo-area":!0});var k=d(_a);xa=i(k,"A"),k.forEach(c),qa=E(M),Ja=l(M,"DIV",{class:!0,"data-oo-area":!0});var T=d(Ja);Ka=i(T,"B"),T.forEach(c),Qa=E(M),Wa=l(M,"DIV",{class:!0,"data-oo-area":!0});var ea=d(Wa);Xa=i(ea,"C"),ea.forEach(c),M.forEach(c),H.forEach(c),Ya=E(a),Za=l(a,"HR",{}),ae=E(a),ee=l(a,"H2",{id:!0});var na=d(ee);se=l(na,"A",{href:!0,title:!0});var Aa=d(se);oe=i(Aa,"#"),Aa.forEach(c),re=i(na," Gap"),na.forEach(c),te=E(a),ne=l(a,"P",{});var ue=d(ne);le=i(ue,"Change the horizontal and vertical space between the areas."),de=l(ue,"CODE",{});var be=d(de);ie=i(be,"gap-"),ce=l(be,"I",{});var Le=d(ce);ve=i(Le,"gapName"),Le.forEach(c),he=E(be),pe=l(be,"CODE",{});var js=d(pe);me=i(js,"vgap-"),fe=l(js,"I",{});var Rs=d(fe);ge=i(Rs,"gapName"),Rs.forEach(c),js.forEach(c),be.forEach(c),ue.forEach(c),Ee=E(a),$e=E(a),we=E(a),g(Qs.$$.fragment,a),Ie=E(a),De=l(a,"BUTTON",{"data-oo-button":!0,class:!0});var As=d(De);je=i(As,"toggle vgap-less"),As.forEach(c),Ve=E(a),ye=l(a,"DIV",{"data-oo-select":!0,class:!0,style:!0});var Fs=d(ye);ze=l(Fs,"SELECT",{class:!0});var Gs=d(ze);for(let a=0;a<Xs.length;a+=1)Xs[a].l(Gs);Gs.forEach(c),Fs.forEach(c),Ne=E(a),Se=l(a,"DIV",{class:!0});var Ls=d(Se);Ce=l(Ls,"DIV",{"data-oo-template":!0,class:!0});var Us=d(Ce);He=l(Us,"DIV",{class:!0,"data-oo-area":!0});var _s=d(He);Me=i(_s,"Header"),_s.forEach(c),ke=E(Us),Te=l(Us,"DIV",{class:!0,"data-oo-area":!0});var xs=d(Te);Oe=i(xs,"Main"),xs.forEach(c),Pe=E(Us),Be=l(Us,"DIV",{class:!0,"data-oo-area":!0});var Ws=d(Be);Re=i(Ws,"Sidebar"),Ws.forEach(c),Ae=E(Us),Fe=l(Us,"DIV",{class:!0,"data-oo-area":!0});var ao=d(Fe);Ge=i(ao,"Footer"),ao.forEach(c),Us.forEach(c),Ls.forEach(c),Ue=E(a),_e=l(a,"H3",{});var eo=d(_e);xe=i(eo,"Responsive screens"),eo.forEach(c),qe=E(a),Je=l(a,"P",{});var so=d(Je);Ke=i(so,"Set reponsive gap from the "),Qe=l(so,"EM",{});var oo=d(Qe);We=i(oo,"screens"),oo.forEach(c),Xe=i(so," & "),Ye=l(so,"EM",{});var ro=d(Ye);Ze=i(ro,"vscreens"),ro.forEach(c),as=i(so," properties and get variants. "),es=l(so,"CODE",{});var to=d(es);ss=i(to,"gap-"),os=l(to,"I",{});var no=d(os);rs=i(no,"sizeName"),no.forEach(c),ts=i(to,"@"),ns=l(to,"I",{});var lo=d(ns);ls=i(lo,"screenName"),lo.forEach(c),to.forEach(c),ds=E(so),is=l(so,"CODE",{});var io=d(is);cs=i(io,"vgap-"),vs=l(io,"I",{});var co=d(vs);hs=i(co,"sizeName"),co.forEach(c),ps=i(io,"@"),ms=l(io,"I",{});var vo=d(ms);fs=i(vo,"screenName"),vo.forEach(c),io.forEach(c),gs=i(so,". "),Es=l(so,"I",{});var ho=d(Es);us=i(ho,"(Variants with "),$s=l(ho,"STRONG",{});var po=d($s);bs=i(po,"map value will be skipped"),po.forEach(c),ws=i(ho,")"),ho.forEach(c),Is=i(so,"."),so.forEach(c),Ds=E(a),Vs=E(a),g(Ys.$$.fragment,a),ys=E(a),zs=l(a,"DIV",{class:!0});var mo=d(zs);Ns=l(mo,"DIV",{"data-oo-template":!0,class:!0});var fo=d(Ns);Ss=l(fo,"DIV",{class:!0,"data-oo-area":!0});var go=d(Ss);Cs=i(go,"A"),go.forEach(c),Hs=E(fo),Ms=l(fo,"DIV",{class:!0,"data-oo-area":!0});var Eo=d(Ms);ks=i(Eo,"B"),Eo.forEach(c),Ts=E(fo),Os=l(fo,"DIV",{class:!0,"data-oo-area":!0});var uo=d(Os);Ps=i(uo,"C"),uo.forEach(c),fo.forEach(c),mo.forEach(c),Bs=E(a),g(Zs.$$.fragment,a),this.h()},h(){u(G,"class","ml-0"),u(O,"class","font-large"),ea=new $(Fs,sa),u(oa,"class","mt-30"),na=new $(Gs,la),u(va,"class","small light svelte-e3dnjh"),u(va,"data-oo-area","header"),u(ma,"class","high dark svelte-e3dnjh"),u(ma,"data-oo-area","main"),u(Ea,"class","darker svelte-e3dnjh"),u(Ea,"data-oo-area","sidebar"),u(ba,"class","small light svelte-e3dnjh"),u(ba,"data-oo-area","footer"),u(ca,"data-oo-template","home gap-less"),u(ca,"class","svelte-e3dnjh"),u(ia,"class","ground svelte-e3dnjh"),u(ya,"href","docs/components/template#multiple"),u(ya,"title","Multiple templates"),u(Va,"id","multiple"),Aa=new $(Ls,Fa),u(_a,"class","high light svelte-e3dnjh"),u(_a,"data-oo-area","a"),u(Ja,"class","small dark svelte-e3dnjh"),u(Ja,"data-oo-area","b"),u(Wa,"class","small darker svelte-e3dnjh"),u(Wa,"data-oo-area","c"),u(Ua,"data-oo-template","abc gap-less"),u(Ua,"class","svelte-e3dnjh"),u(La,"class","ground svelte-e3dnjh"),u(se,"href","docs/components/template#gap"),u(se,"title","Gap"),u(ee,"id","gap"),ue=new $(Us,$e),be=new $(_s,we),u(De,"data-oo-button",""),u(De,"class","font-small float-right"),u(ze,"class","font-small font-bold"),void 0===a[0]&&S(()=>a[5].call(ze)),u(ye,"data-oo-select",""),u(ye,"class","float-right mb-root"),b(ye,"width","140px"),u(He,"class","small light svelte-e3dnjh"),u(He,"data-oo-area","header"),u(Te,"class","high dark svelte-e3dnjh"),u(Te,"data-oo-area","main"),u(Be,"class","darker svelte-e3dnjh"),u(Be,"data-oo-area","sidebar"),u(Fe,"class","small light svelte-e3dnjh"),u(Fe,"data-oo-area","footer"),u(Ce,"data-oo-template",Le="home"+a[2]+(a[1]?" vgap-less":"")),u(Ce,"class","svelte-e3dnjh"),u(Se,"class","ground svelte-e3dnjh"),js=new $(xs,Vs),u(Ss,"class","high light svelte-e3dnjh"),u(Ss,"data-oo-area","a"),u(Ms,"class","small dark svelte-e3dnjh"),u(Ms,"data-oo-area","b"),u(Os,"class","small darker svelte-e3dnjh"),u(Os,"data-oo-area","c"),u(Ns,"data-oo-template","abc gap-less@sm gap-default@lg vgap-less@lg"),u(Ns,"class","svelte-e3dnjh"),u(zs,"class","ground svelte-e3dnjh")},m(o,r,t){w(qs,o,r),v(o,e,r),v(o,s,r),h(s,p),v(o,C,r),v(o,O,r),h(O,P),h(P,B),h(O,R),h(O,A),h(O,F),h(O,G),h(G,L),h(O,U),h(U,_),v(o,x,r),v(o,q,r),h(q,J),h(q,K),h(K,Q),h(q,W),h(q,X),h(X,Y),h(q,Z),v(o,aa,r),ea.m(o,r),v(o,sa,r),v(o,oa,r),h(oa,ra),v(o,ta,r),na.m(o,r),v(o,la,r),w(Js,o,r),v(o,da,r),v(o,ia,r),h(ia,ca),h(ca,va),h(va,ha),h(ca,pa),h(ca,ma),h(ma,fa),h(ca,ga),h(ca,Ea),h(Ea,ua),h(ca,$a),h(ca,ba),h(ba,wa),v(o,Ia,r),v(o,Da,r),v(o,ja,r),v(o,Va,r),h(Va,ya),h(ya,za),h(Va,Na),v(o,Sa,r),v(o,Ca,r),h(Ca,Ha),h(Ca,Ma),h(Ma,ka),h(Ca,Ta),h(Ca,Oa),h(Oa,Pa),h(Ca,Ba),v(o,Ra,r),Aa.m(o,r),v(o,Fa,r),w(Ks,o,r),v(o,Ga,r),v(o,La,r),h(La,Ua),h(Ua,_a),h(_a,xa),h(Ua,qa),h(Ua,Ja),h(Ja,Ka),h(Ua,Qa),h(Ua,Wa),h(Wa,Xa),v(o,Ya,r),v(o,Za,r),v(o,ae,r),v(o,ee,r),h(ee,se),h(se,oe),h(ee,re),v(o,te,r),v(o,ne,r),h(ne,le),h(ne,de),h(de,ie),h(de,ce),h(ce,ve),h(de,he),h(de,pe),h(pe,me),h(pe,fe),h(fe,ge),v(o,Ee,r),ue.m(o,r),v(o,$e,r),be.m(o,r),v(o,we,r),w(Qs,o,r),v(o,Ie,r),v(o,De,r),h(De,je),v(o,Ve,r),v(o,ye,r),h(ye,ze);for(let a=0;a<Xs.length;a+=1)Xs[a].m(ze,null);I(ze,a[0]),v(o,Ne,r),v(o,Se,r),h(Se,Ce),h(Ce,He),h(He,Me),h(Ce,ke),h(Ce,Te),h(Te,Oe),h(Ce,Pe),h(Ce,Be),h(Be,Re),h(Ce,Ae),h(Ce,Fe),h(Fe,Ge),v(o,Ue,r),v(o,_e,r),h(_e,xe),v(o,qe,r),v(o,Je,r),h(Je,Ke),h(Je,Qe),h(Qe,We),h(Je,Xe),h(Je,Ye),h(Ye,Ze),h(Je,as),h(Je,es),h(es,ss),h(es,os),h(os,rs),h(es,ts),h(es,ns),h(ns,ls),h(Je,ds),h(Je,is),h(is,cs),h(is,vs),h(vs,hs),h(is,ps),h(is,ms),h(ms,fs),h(Je,gs),h(Je,Es),h(Es,us),h(Es,$s),h($s,bs),h(Es,ws),h(Je,Is),v(o,Ds,r),js.m(o,r),v(o,Vs,r),w(Ys,o,r),v(o,ys,r),v(o,zs,r),h(zs,Ns),h(Ns,Ss),h(Ss,Cs),h(Ns,Hs),h(Ns,Ms),h(Ms,ks),h(Ns,Ts),h(Ns,Os),h(Os,Ps),v(o,Bs,r),w(Zs,o,r),Rs=!0,t&&D(As),As=[j(De,"click",a[4]),j(ze,"change",a[5])]},p(a,[e]){const s={};if(6&e&&(s.content=`<div oo-template="home${a[2]}${a[1]?" vgap-less":""}">\n <div oo-area="header">Header</div>\n  <div oo-area="main">Main</div>\n  <div oo-area="sidebar">Sidebar</div>\n  <div oo-area="footer">Footer</div>\n</div>\n`),Qs.$set(s),8&e){let s;for(Ws=a[3],s=0;s<Ws.length;s+=1){const o=k(a,Ws,s);Xs[s]?Xs[s].p(o,e):(Xs[s]=T(o),Xs[s].c(),Xs[s].m(ze,null))}for(;s<Xs.length;s+=1)Xs[s].d(1);Xs.length=Ws.length}1&e&&I(ze,a[0]),(!Rs||6&e&&Le!==(Le="home"+a[2]+(a[1]?" vgap-less":"")))&&u(Ce,"data-oo-template",Le)},i(a){Rs||(V(qs.$$.fragment,a),V(Js.$$.fragment,a),V(Ks.$$.fragment,a),V(Qs.$$.fragment,a),V(Ys.$$.fragment,a),V(Zs.$$.fragment,a),Rs=!0)},o(a){y(qs.$$.fragment,a),y(Js.$$.fragment,a),y(Ks.$$.fragment,a),y(Qs.$$.fragment,a),y(Ys.$$.fragment,a),y(Zs.$$.fragment,a),Rs=!1},d(a){z(qs,a),a&&c(e),a&&c(s),a&&c(C),a&&c(O),a&&c(x),a&&c(q),a&&c(aa),a&&ea.d(),a&&c(sa),a&&c(oa),a&&c(ta),a&&na.d(),a&&c(la),z(Js,a),a&&c(da),a&&c(ia),a&&c(Ia),a&&c(Da),a&&c(ja),a&&c(Va),a&&c(Sa),a&&c(Ca),a&&c(Ra),a&&Aa.d(),a&&c(Fa),z(Ks,a),a&&c(Ga),a&&c(La),a&&c(Ya),a&&c(Za),a&&c(ae),a&&c(ee),a&&c(te),a&&c(ne),a&&c(Ee),a&&ue.d(),a&&c($e),a&&be.d(),a&&c(we),z(Qs,a),a&&c(Ie),a&&c(De),a&&c(Ve),a&&c(ye),N(Xs,a),a&&c(Ne),a&&c(Se),a&&c(Ue),a&&c(_e),a&&c(qe),a&&c(Je),a&&c(Ds),a&&js.d(),a&&c(Vs),z(Ys,a),a&&c(ys),a&&c(zs),a&&c(Bs),z(Zs,a),D(As)}}}function P(a,e,s){let o=["default","less","small"],r="default",t=!1;let n;return a.$$.update=(()=>{1&a.$$.dirty&&s(2,n="default"===r?"":` gap-${r}`)}),[r,t,n,o,()=>s(1,t=!t),function(){r=C(this),s(0,r),s(3,o)}]}export default class extends a{constructor(a){super(),e(this,a,P,O,s,{})}}
