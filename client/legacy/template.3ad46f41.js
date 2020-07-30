import{_ as a,a as e,i as t,s as o,b as r,S as s,O as n,Q as l,e as i,q as c,d,f,r as v,g as h,j as p,v as m,A as g,K as u,y as E,L as b,z as $,h as z,P as D,V as w,M as I,X as y,R as j,w as V,k as S,t as N,n as C,N as M,B as R,o as T,p as O,Y as k,Z as P}from"./client.d3164e96.js";import{P as H}from"./Pagination.fae978ac.js";import{D as B}from"./DataAttrToggler.6e8120a8.js";function A(a){return function(){var e,t=T(a);if(function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(a){return!1}}()){var o=T(this).constructor;e=Reflect.construct(t,arguments,o)}else e=t.apply(this,arguments);return O(this,e)}}function F(a,e,t){var o=a.slice();return o[6]=e[t],o}function L(a){var e,t,o,r=a[6]+"";return{c:function(){e=i("option"),t=c("gap "),o=c(r),this.h()},l:function(a){e=d(a,"OPTION",{value:!0});var s=f(e);t=v(s,"gap "),o=v(s,r),s.forEach(h),this.h()},h:function(){e.__value=a[6],e.value=e.__value},m:function(a,r){p(a,e,r),m(e,t),m(e,o)},p:g,d:function(a){a&&h(e)}}}function G(a){for(var e,t,o,r,s,g,T,O,P,A,G,U,q,K,Q,X,Y,Z,J,W,aa,ea,ta,oa,ra,sa,na,la,ia,ca,da,fa,va,ha,pa,ma,ga,ua,Ea,ba,$a,za,Da,wa,Ia,ya,ja,Va,Sa,Na,Ca,Ma,Ra,Ta,Oa,ka,Pa,Ha,Ba,Aa,Fa,La,Ga,xa,_a,Ua,qa,Ka,Qa,Xa,Ya,Za,Ja,Wa,ae,ee,te,oe,re,se,ne,le,ie,ce,de,fe,ve,he,pe,me,ge,ue,Ee,be,$e,ze,De,we,Ie,ye,je,Ve,Se,Ne,Ce,Me,Re,Te,Oe,ke,Pe,He,Be,Ae,Fe,Le,Ge,xe,_e,Ue,qe,Ke,Qe,Xe,Ye,Ze,Je,We,at,et,tt,ot,rt,st,nt,lt,it,ct,dt,ft,vt,ht,pt,mt,gt,ut,Et,bt,$t,zt,Dt,wt,It,yt,jt,Vt,St,Nt,Ct,Mt,Rt,Tt,Ot,kt,Pt,Ht,Bt,At,Ft,Lt,Gt,xt,_t,Ut,qt,Kt,Qt,Xt,Yt,Zt,Jt,Wt,ao,eo,to,oo,ro,so,no,lo,io,co,fo,vo,ho,po,mo,go,uo,Eo,bo,$o,zo,Do,wo,Io,yo,jo,Vo,So,No,Co,Mo,Ro,To,Oo,ko,Po,Ho,Bo=n("//default config\ntemplate: (\n  areas: (),\n),\n","scss")+"",Ao=n('$ooLoop: ooSet(\'template.areas\', (\n  rt: (\n    "header"\n    "main"\n    "sidebar"\n    "footer"\n  ),\n  sm: (\n    "header header header header"// full width\n    "main main main sidebar"     // main 3/4 & sidebar 1/4\n    "footer footer footer footer"// full width\n  ),\n));',"scss")+"",Fo=n('$ooLoop: ooSet(\'template.areas\', (\n  rt: (\n    "logo"\n    "nav"\n    "main"\n    "sidebar"\n    "footer"\n  ),\n  // 3 columns 1st of 100px, 2nd auto, 3rd of 25%\n  sm: (\n    "logo|100px nav nav"\n    "main main sidebar|25%"\n    "footer footer footer"\n  ),\n));',"scss")+"",Lo=n('$ooLoop: ooSet(\'template.areas\', (\n  \'home\': (\n    rt: (\n      "header"\n      "main"\n      "sidebar"\n      "footer"\n    ),\n    sm: (\n      "header header header header"\n      "main main main sidebar"\n      "footer footer footer footer"\n    ),\n  ),\n\n  \'abc\': (\n    rt: (\n      "a"\n      "b"\n      "c"\n    ),\n    sm: (\n      "a a"\n      "c b"\n      "c b"\n    ),\n    md: (\n      "a a a"\n      "b c c"\n      "b c c"\n    ),\n    lg: (\n      "a b b"\n      "a c c"\n      "a . ."\n    ),\n  )\n));',"scss")+"",Go=n("// default config\ntemplate: (\n  gap: (\n    sizes: (),  // gap between columns and between rows\n    screens: (),// responsive screens for sizes\n    vsizes: (), // gap between rows only\n    vscreens:(),// responsive screens for vsizes\n  ),\n)","scss")+"",xo=n("$ooLoop: ooSet('template.gap', (\n  sizes: (\n    default: 1rem, // use default keyword to set main gap\n    'less': 0, // gap-less\n    'small': ( // gap-small has a responsive map\n      rt: .25rem,\n      sm: .5rem,\n    ),\n  ),\n  vsizes: (\n    'less': 0, // vgap-less\n  ),\n));","scss")+"",_o=n("$ooLoop: ooSet('template.gap', (\n  sizes: (\n    default: 1rem,\n    'less': 0,\n    'small': (\n      sm: .5rem,\n    ),\n  ),\n  vsizes: (\n    'less': 0,\n  ),\n  screens: ('sm', 'lg'),\n  vscreens: this('template.gap.screens'), //get screens value\n));\n\n/* Generating responsive variants */\n// - gap-default@sm gap-default@lg gap-less@sm gap-less@lg\n// - vgap-less@sm vgap-less@lg\n","scss")+"",Uo=new l({props:{title:x,description:_}}),qo=new B({props:{content:'<section oo-template>\n  <header oo-area="header">Header</header>\n  <main oo-area="main">Main</main>\n  <aside oo-area="sidebar">Sidebar</aside>\n  <footer oo-area="footer">Footer</footer>\n</section>\n'}}),Ko=new B({props:{content:'<section oo-template>\n  <header oo-area="logo">Logo</header>\n  <nav oo-area="nav"></nav>\n  <main oo-area="main">Main</main>\n  <aside oo-area="sidebar">Sidebar</aside>\n  <footer oo-area="footer">Footer</footer>\n</section>\n'}}),Qo=new B({props:{content:'<div oo-template="abc">\n  <div oo-area="a">A</div>\n  <div oo-area="b">B</div>\n  <div oo-area="c">C</div>\n</div>\n'}}),Xo=new B({props:{content:'<div oo-template="home'.concat(a[2]).concat(a[1]?" vgap-less":"",'">\n <div oo-area="header">Header</div>\n  <div oo-area="main">Main</div>\n  <div oo-area="sidebar">Sidebar</div>\n  <div oo-area="footer">Footer</div>\n</div>\n')}}),Yo=a[3],Zo=[],Jo=0;Jo<Yo.length;Jo+=1)Zo[Jo]=L(F(a,Yo,Jo));var Wo=new B({props:{content:'<div oo-template="abc gap-less@sm gap-default@lg vgap-less@lg">\n  <div oo-area="a">A</div>\n  <div oo-area="b">B</div>\n  <div oo-area="c">C</div>\n</div>\n'}}),ar=new H({props:{page:"template"}});return{c:function(){u(Uo.$$.fragment),e=E(),t=i("h1"),o=c("Template"),r=E(),s=i("p"),g=i("i"),T=c("Blueprint"),O=c(" semantically a page or elements in a page."),P=i("br"),A=E(),G=i("code"),U=c("oo-template"),q=i("code"),K=c("oo-area"),Q=E(),X=i("p"),Y=c("The component is included by default but requires you to "),Z=i("strong"),J=c("pass your own design plan"),W=c(" to the "),aa=i("em"),ea=c("areas"),ta=c(" property. Use a responsive map to modify the layout between screens sizes."),oa=E(),sa=E(),na=i("p"),la=c("Repeat the areas' name to set the proportional size between each location."),ia=E(),da=E(),u(qo.$$.fragment),fa=E(),va=i("div"),ha=i("div"),pa=i("div"),ma=c("Header"),ga=E(),ua=i("div"),Ea=c("Main"),ba=E(),$a=i("div"),za=c("Sidebar"),Da=E(),wa=i("div"),Ia=c("Footer"),ya=E(),ja=i("hr"),Va=E(),Sa=i("h2"),Na=i("a"),Ca=c("#"),Ma=c(" Sized Column"),Ra=E(),Ta=i("p"),Oa=c("The template is fluid and relies on the propotional percentage by default.\nBy using the pipe "),ka=i("code"),Pa=c("|"),Ha=c(" character after the area name,\nyou can set the value of "),Ba=i("strong"),Aa=c("the column where the area is, "),Fa=i("u"),La=c("Not"),Ga=c(" the area itself"),xa=c("."),_a=E(),qa=E(),Ka=i("p"),Qa=c("The size of 3rd column has been set with sidebar for a visual purpose as the sidebar area is the only one constrained to the third column. "),Xa=i("code"),Ya=c("logo|100px nav nav|25%"),Za=c(" or "),Ja=i("code"),Wa=c("footer footer footer|25%"),ae=c(" would have performed the same thing."),ee=i("p"),u(Ko.$$.fragment),te=E(),oe=i("div"),re=i("div"),se=i("div"),ne=c("Logo"),le=E(),ie=i("div"),ce=c("Nav"),de=E(),fe=i("div"),ve=c("Main"),he=E(),pe=i("div"),me=c("Sidebar"),ge=E(),ue=i("div"),Ee=c("Footer"),be=E(),$e=i("hr"),ze=E(),De=i("h2"),we=i("a"),Ie=c("#"),ye=c(" Multiple templates"),je=E(),Ve=i("p"),Se=c("Pass a list of "),Ne=i("strong"),Ce=c("named templates"),Me=c(" to the "),Re=i("em"),Te=c("areas"),Oe=c(" property."),ke=E(),He=E(),u(Qo.$$.fragment),Be=E(),Ae=i("div"),Fe=i("div"),Le=i("div"),Ge=c("A"),xe=E(),_e=i("div"),Ue=c("B"),qe=E(),Ke=i("div"),Qe=c("C"),Xe=E(),Ye=i("hr"),Ze=E(),Je=i("h2"),We=i("a"),at=c("#"),et=c(" Gap"),tt=E(),ot=i("p"),rt=c("Change the horizontal and vertical space between the areas."),st=i("code"),nt=c("gap-"),lt=i("i"),it=c("gapName"),ct=E(),dt=i("code"),ft=c("vgap-"),vt=i("i"),ht=c("gapName"),pt=E(),gt=E(),Et=E(),u(Xo.$$.fragment),bt=E(),$t=i("button"),zt=c("toggle vgap-less"),Dt=E(),wt=i("div"),It=i("select");for(var a=0;a<Zo.length;a+=1)Zo[a].c();yt=E(),jt=i("div"),Vt=i("div"),St=i("div"),Nt=c("Header"),Ct=E(),Mt=i("div"),Rt=c("Main"),Tt=E(),Ot=i("div"),kt=c("Sidebar"),Pt=E(),Ht=i("div"),Bt=c("Footer"),Ft=E(),Lt=i("h3"),Gt=c("Responsive screens"),xt=E(),_t=i("p"),Ut=c("Set reponsive gap from the "),qt=i("em"),Kt=c("screens"),Qt=c(" & "),Xt=i("em"),Yt=c("vscreens"),Zt=c(" properties and get variants. "),Jt=i("code"),Wt=c("gap-"),ao=i("i"),eo=c("sizeName"),to=c("@"),oo=i("i"),ro=c("screenName"),so=E(),no=i("code"),lo=c("vgap-"),io=i("i"),co=c("sizeName"),fo=c("@"),vo=i("i"),ho=c("screenName"),po=c(". "),mo=i("i"),go=c("(Variants with "),uo=i("strong"),Eo=c("map value will be skipped"),bo=c(")"),$o=c("."),zo=E(),wo=E(),u(Wo.$$.fragment),Io=E(),yo=i("div"),jo=i("div"),Vo=i("div"),So=c("A"),No=E(),Co=i("div"),Mo=c("B"),Ro=E(),To=i("div"),Oo=c("C"),ko=E(),u(ar.$$.fragment),this.h()},l:function(a){b(Uo.$$.fragment,a),e=$(a),t=d(a,"H1",{});var n=f(t);o=v(n,"Template"),n.forEach(h),r=$(a),s=d(a,"P",{class:!0});var l=f(s);g=d(l,"I",{});var i=f(g);T=v(i,"Blueprint"),i.forEach(h),O=v(l," semantically a page or elements in a page."),P=d(l,"BR",{}),A=$(l),G=d(l,"CODE",{class:!0});var c=f(G);U=v(c,"oo-template"),c.forEach(h),q=d(l,"CODE",{});var p=f(q);K=v(p,"oo-area"),p.forEach(h),l.forEach(h),Q=$(a),X=d(a,"P",{});var m=f(X);Y=v(m,"The component is included by default but requires you to "),Z=d(m,"STRONG",{});var u=f(Z);J=v(u,"pass your own design plan"),u.forEach(h),W=v(m," to the "),aa=d(m,"EM",{});var E=f(aa);ea=v(E,"areas"),E.forEach(h),ta=v(m," property. Use a responsive map to modify the layout between screens sizes."),m.forEach(h),oa=$(a),sa=$(a),na=d(a,"P",{class:!0});var z=f(na);la=v(z,"Repeat the areas' name to set the proportional size between each location."),z.forEach(h),ia=$(a),da=$(a),b(qo.$$.fragment,a),fa=$(a),va=d(a,"DIV",{class:!0});var D=f(va);ha=d(D,"DIV",{"data-oo-template":!0,class:!0});var w=f(ha);pa=d(w,"DIV",{class:!0,"data-oo-area":!0});var I=f(pa);ma=v(I,"Header"),I.forEach(h),ga=$(w),ua=d(w,"DIV",{class:!0,"data-oo-area":!0});var y=f(ua);Ea=v(y,"Main"),y.forEach(h),ba=$(w),$a=d(w,"DIV",{class:!0,"data-oo-area":!0});var j=f($a);za=v(j,"Sidebar"),j.forEach(h),Da=$(w),wa=d(w,"DIV",{class:!0,"data-oo-area":!0});var V=f(wa);Ia=v(V,"Footer"),V.forEach(h),w.forEach(h),D.forEach(h),ya=$(a),ja=d(a,"HR",{}),Va=$(a),Sa=d(a,"H2",{id:!0});var S=f(Sa);Na=d(S,"A",{href:!0,title:!0});var N=f(Na);Ca=v(N,"#"),N.forEach(h),Ma=v(S," Sized Column"),S.forEach(h),Ra=$(a),Ta=d(a,"P",{});var C=f(Ta);Oa=v(C,"The template is fluid and relies on the propotional percentage by default.\nBy using the pipe "),ka=d(C,"CODE",{});var M=f(ka);Pa=v(M,"|"),M.forEach(h),Ha=v(C," character after the area name,\nyou can set the value of "),Ba=d(C,"STRONG",{});var R=f(Ba);Aa=v(R,"the column where the area is, "),Fa=d(R,"U",{});var k=f(Fa);La=v(k,"Not"),k.forEach(h),Ga=v(R," the area itself"),R.forEach(h),xa=v(C,"."),C.forEach(h),_a=$(a),qa=$(a),Ka=d(a,"P",{});var H=f(Ka);Qa=v(H,"The size of 3rd column has been set with sidebar for a visual purpose as the sidebar area is the only one constrained to the third column. "),Xa=d(H,"CODE",{});var B=f(Xa);Ya=v(B,"logo|100px nav nav|25%"),B.forEach(h),Za=v(H," or "),Ja=d(H,"CODE",{});var F=f(Ja);Wa=v(F,"footer footer footer|25%"),F.forEach(h),ae=v(H," would have performed the same thing."),H.forEach(h),ee=d(a,"P",{});var L=f(ee);b(Ko.$$.fragment,L),te=$(L),L.forEach(h),oe=d(a,"DIV",{class:!0});var x=f(oe);re=d(x,"DIV",{"data-oo-template":!0,class:!0});var _=f(re);se=d(_,"DIV",{class:!0,"data-oo-area":!0});var ra=f(se);ne=v(ra,"Logo"),ra.forEach(h),le=$(_),ie=d(_,"DIV",{class:!0,"data-oo-area":!0});var ca=f(ie);ce=v(ca,"Nav"),ca.forEach(h),de=$(_),fe=d(_,"DIV",{class:!0,"data-oo-area":!0});var Ua=f(fe);ve=v(Ua,"Main"),Ua.forEach(h),he=$(_),pe=d(_,"DIV",{class:!0,"data-oo-area":!0});var Pe=f(pe);me=v(Pe,"Sidebar"),Pe.forEach(h),ge=$(_),ue=d(_,"DIV",{class:!0,"data-oo-area":!0});var mt=f(ue);Ee=v(mt,"Footer"),mt.forEach(h),_.forEach(h),x.forEach(h),be=$(a),$e=d(a,"HR",{}),ze=$(a),De=d(a,"H2",{id:!0});var ut=f(De);we=d(ut,"A",{href:!0,title:!0});var At=f(we);Ie=v(At,"#"),At.forEach(h),ye=v(ut," Multiple templates"),ut.forEach(h),je=$(a),Ve=d(a,"P",{});var Do=f(Ve);Se=v(Do,"Pass a list of "),Ne=d(Do,"STRONG",{});var Po=f(Ne);Ce=v(Po,"named templates"),Po.forEach(h),Me=v(Do," to the "),Re=d(Do,"EM",{});var Ho=f(Re);Te=v(Ho,"areas"),Ho.forEach(h),Oe=v(Do," property."),Do.forEach(h),ke=$(a),He=$(a),b(Qo.$$.fragment,a),Be=$(a),Ae=d(a,"DIV",{class:!0});var Bo=f(Ae);Fe=d(Bo,"DIV",{"data-oo-template":!0,class:!0});var Ao=f(Fe);Le=d(Ao,"DIV",{class:!0,"data-oo-area":!0});var Fo=f(Le);Ge=v(Fo,"A"),Fo.forEach(h),xe=$(Ao),_e=d(Ao,"DIV",{class:!0,"data-oo-area":!0});var Lo=f(_e);Ue=v(Lo,"B"),Lo.forEach(h),qe=$(Ao),Ke=d(Ao,"DIV",{class:!0,"data-oo-area":!0});var Go=f(Ke);Qe=v(Go,"C"),Go.forEach(h),Ao.forEach(h),Bo.forEach(h),Xe=$(a),Ye=d(a,"HR",{}),Ze=$(a),Je=d(a,"H2",{id:!0});var xo=f(Je);We=d(xo,"A",{href:!0,title:!0});var _o=f(We);at=v(_o,"#"),_o.forEach(h),et=v(xo," Gap"),xo.forEach(h),tt=$(a),ot=d(a,"P",{});var Yo=f(ot);rt=v(Yo,"Change the horizontal and vertical space between the areas."),st=d(Yo,"CODE",{});var Jo=f(st);nt=v(Jo,"gap-"),lt=d(Jo,"I",{});var er=f(lt);it=v(er,"gapName"),er.forEach(h),ct=$(Jo),dt=d(Jo,"CODE",{});var tr=f(dt);ft=v(tr,"vgap-"),vt=d(tr,"I",{});var or=f(vt);ht=v(or,"gapName"),or.forEach(h),tr.forEach(h),Jo.forEach(h),Yo.forEach(h),pt=$(a),gt=$(a),Et=$(a),b(Xo.$$.fragment,a),bt=$(a),$t=d(a,"BUTTON",{"data-oo-button":!0,class:!0});var rr=f($t);zt=v(rr,"toggle vgap-less"),rr.forEach(h),Dt=$(a),wt=d(a,"DIV",{"data-oo-select":!0,class:!0,style:!0});var sr=f(wt);It=d(sr,"SELECT",{class:!0});for(var nr=f(It),lr=0;lr<Zo.length;lr+=1)Zo[lr].l(nr);nr.forEach(h),sr.forEach(h),yt=$(a),jt=d(a,"DIV",{class:!0});var ir=f(jt);Vt=d(ir,"DIV",{"data-oo-template":!0,class:!0});var cr=f(Vt);St=d(cr,"DIV",{class:!0,"data-oo-area":!0});var dr=f(St);Nt=v(dr,"Header"),dr.forEach(h),Ct=$(cr),Mt=d(cr,"DIV",{class:!0,"data-oo-area":!0});var fr=f(Mt);Rt=v(fr,"Main"),fr.forEach(h),Tt=$(cr),Ot=d(cr,"DIV",{class:!0,"data-oo-area":!0});var vr=f(Ot);kt=v(vr,"Sidebar"),vr.forEach(h),Pt=$(cr),Ht=d(cr,"DIV",{class:!0,"data-oo-area":!0});var hr=f(Ht);Bt=v(hr,"Footer"),hr.forEach(h),cr.forEach(h),ir.forEach(h),Ft=$(a),Lt=d(a,"H3",{});var pr=f(Lt);Gt=v(pr,"Responsive screens"),pr.forEach(h),xt=$(a),_t=d(a,"P",{});var mr=f(_t);Ut=v(mr,"Set reponsive gap from the "),qt=d(mr,"EM",{});var gr=f(qt);Kt=v(gr,"screens"),gr.forEach(h),Qt=v(mr," & "),Xt=d(mr,"EM",{});var ur=f(Xt);Yt=v(ur,"vscreens"),ur.forEach(h),Zt=v(mr," properties and get variants. "),Jt=d(mr,"CODE",{});var Er=f(Jt);Wt=v(Er,"gap-"),ao=d(Er,"I",{});var br=f(ao);eo=v(br,"sizeName"),br.forEach(h),to=v(Er,"@"),oo=d(Er,"I",{});var $r=f(oo);ro=v($r,"screenName"),$r.forEach(h),Er.forEach(h),so=$(mr),no=d(mr,"CODE",{});var zr=f(no);lo=v(zr,"vgap-"),io=d(zr,"I",{});var Dr=f(io);co=v(Dr,"sizeName"),Dr.forEach(h),fo=v(zr,"@"),vo=d(zr,"I",{});var wr=f(vo);ho=v(wr,"screenName"),wr.forEach(h),zr.forEach(h),po=v(mr,". "),mo=d(mr,"I",{});var Ir=f(mo);go=v(Ir,"(Variants with "),uo=d(Ir,"STRONG",{});var yr=f(uo);Eo=v(yr,"map value will be skipped"),yr.forEach(h),bo=v(Ir,")"),Ir.forEach(h),$o=v(mr,"."),mr.forEach(h),zo=$(a),wo=$(a),b(Wo.$$.fragment,a),Io=$(a),yo=d(a,"DIV",{class:!0});var jr=f(yo);jo=d(jr,"DIV",{"data-oo-template":!0,class:!0});var Vr=f(jo);Vo=d(Vr,"DIV",{class:!0,"data-oo-area":!0});var Sr=f(Vo);So=v(Sr,"A"),Sr.forEach(h),No=$(Vr),Co=d(Vr,"DIV",{class:!0,"data-oo-area":!0});var Nr=f(Co);Mo=v(Nr,"B"),Nr.forEach(h),Ro=$(Vr),To=d(Vr,"DIV",{class:!0,"data-oo-area":!0});var Cr=f(To);Oo=v(Cr,"C"),Cr.forEach(h),Vr.forEach(h),jr.forEach(h),ko=$(a),b(ar.$$.fragment,a),this.h()},h:function(){z(G,"class","ml-0"),z(s,"class","font-large"),ra=new D(Bo,sa),z(na,"class","mt-30"),ca=new D(Ao,da),z(pa,"class","small light svelte-t7tjzf"),z(pa,"data-oo-area","header"),z(ua,"class","high dark svelte-t7tjzf"),z(ua,"data-oo-area","main"),z($a,"class","darker svelte-t7tjzf"),z($a,"data-oo-area","sidebar"),z(wa,"class","small light svelte-t7tjzf"),z(wa,"data-oo-area","footer"),z(ha,"data-oo-template","home gap-less"),z(ha,"class","svelte-t7tjzf"),z(va,"class","ground svelte-t7tjzf"),z(Na,"href","docs/components/template/#sized-column"),z(Na,"title","Sized Columns"),z(Sa,"id","sized-column"),Ua=new D(Fo,qa),z(se,"class","small darker svelte-t7tjzf"),z(se,"data-oo-area","logo"),z(ie,"class","small light svelte-t7tjzf"),z(ie,"data-oo-area","nav"),z(fe,"class","high dark svelte-t7tjzf"),z(fe,"data-oo-area","main"),z(pe,"class","darker svelte-t7tjzf"),z(pe,"data-oo-area","sidebar"),z(ue,"class","small light svelte-t7tjzf"),z(ue,"data-oo-area","footer"),z(re,"data-oo-template","home-2 gap-less"),z(re,"class","svelte-t7tjzf"),z(oe,"class","ground svelte-t7tjzf"),z(we,"href","docs/components/template/#multiple"),z(we,"title","Multiple templates"),z(De,"id","multiple"),Pe=new D(Lo,He),z(Le,"class","high light svelte-t7tjzf"),z(Le,"data-oo-area","a"),z(_e,"class","small dark svelte-t7tjzf"),z(_e,"data-oo-area","b"),z(Ke,"class","small darker svelte-t7tjzf"),z(Ke,"data-oo-area","c"),z(Fe,"data-oo-template","abc gap-less"),z(Fe,"class","svelte-t7tjzf"),z(Ae,"class","ground svelte-t7tjzf"),z(We,"href","docs/components/template/#gap"),z(We,"title","Gap"),z(Je,"id","gap"),mt=new D(Go,gt),ut=new D(xo,Et),z($t,"data-oo-button",""),z($t,"class","font-small float-right"),z(It,"class","font-small font-bold"),void 0===a[0]&&k(function(){return a[5].call(It)}),z(wt,"data-oo-select",""),z(wt,"class","float-right mb-root"),w(wt,"width","140px"),z(St,"class","small light svelte-t7tjzf"),z(St,"data-oo-area","header"),z(Mt,"class","high dark svelte-t7tjzf"),z(Mt,"data-oo-area","main"),z(Ot,"class","darker svelte-t7tjzf"),z(Ot,"data-oo-area","sidebar"),z(Ht,"class","small light svelte-t7tjzf"),z(Ht,"data-oo-area","footer"),z(Vt,"data-oo-template",At="home"+a[2]+(a[1]?" vgap-less":"")),z(Vt,"class","svelte-t7tjzf"),z(jt,"class","ground svelte-t7tjzf"),Do=new D(_o,wo),z(Vo,"class","high light svelte-t7tjzf"),z(Vo,"data-oo-area","a"),z(Co,"class","small dark svelte-t7tjzf"),z(Co,"data-oo-area","b"),z(To,"class","small darker svelte-t7tjzf"),z(To,"data-oo-area","c"),z(jo,"data-oo-template","abc gap-less@sm gap-default@lg vgap-less@lg"),z(jo,"class","svelte-t7tjzf"),z(yo,"class","ground svelte-t7tjzf")},m:function(n,l,i){I(Uo,n,l),p(n,e,l),p(n,t,l),m(t,o),p(n,r,l),p(n,s,l),m(s,g),m(g,T),m(s,O),m(s,P),m(s,A),m(s,G),m(G,U),m(s,q),m(q,K),p(n,Q,l),p(n,X,l),m(X,Y),m(X,Z),m(Z,J),m(X,W),m(X,aa),m(aa,ea),m(X,ta),p(n,oa,l),ra.m(n,l),p(n,sa,l),p(n,na,l),m(na,la),p(n,ia,l),ca.m(n,l),p(n,da,l),I(qo,n,l),p(n,fa,l),p(n,va,l),m(va,ha),m(ha,pa),m(pa,ma),m(ha,ga),m(ha,ua),m(ua,Ea),m(ha,ba),m(ha,$a),m($a,za),m(ha,Da),m(ha,wa),m(wa,Ia),p(n,ya,l),p(n,ja,l),p(n,Va,l),p(n,Sa,l),m(Sa,Na),m(Na,Ca),m(Sa,Ma),p(n,Ra,l),p(n,Ta,l),m(Ta,Oa),m(Ta,ka),m(ka,Pa),m(Ta,Ha),m(Ta,Ba),m(Ba,Aa),m(Ba,Fa),m(Fa,La),m(Ba,Ga),m(Ta,xa),p(n,_a,l),Ua.m(n,l),p(n,qa,l),p(n,Ka,l),m(Ka,Qa),m(Ka,Xa),m(Xa,Ya),m(Ka,Za),m(Ka,Ja),m(Ja,Wa),m(Ka,ae),p(n,ee,l),I(Ko,ee,null),m(ee,te),p(n,oe,l),m(oe,re),m(re,se),m(se,ne),m(re,le),m(re,ie),m(ie,ce),m(re,de),m(re,fe),m(fe,ve),m(re,he),m(re,pe),m(pe,me),m(re,ge),m(re,ue),m(ue,Ee),p(n,be,l),p(n,$e,l),p(n,ze,l),p(n,De,l),m(De,we),m(we,Ie),m(De,ye),p(n,je,l),p(n,Ve,l),m(Ve,Se),m(Ve,Ne),m(Ne,Ce),m(Ve,Me),m(Ve,Re),m(Re,Te),m(Ve,Oe),p(n,ke,l),Pe.m(n,l),p(n,He,l),I(Qo,n,l),p(n,Be,l),p(n,Ae,l),m(Ae,Fe),m(Fe,Le),m(Le,Ge),m(Fe,xe),m(Fe,_e),m(_e,Ue),m(Fe,qe),m(Fe,Ke),m(Ke,Qe),p(n,Xe,l),p(n,Ye,l),p(n,Ze,l),p(n,Je,l),m(Je,We),m(We,at),m(Je,et),p(n,tt,l),p(n,ot,l),m(ot,rt),m(ot,st),m(st,nt),m(st,lt),m(lt,it),m(st,ct),m(st,dt),m(dt,ft),m(dt,vt),m(vt,ht),p(n,pt,l),mt.m(n,l),p(n,gt,l),ut.m(n,l),p(n,Et,l),I(Xo,n,l),p(n,bt,l),p(n,$t,l),m($t,zt),p(n,Dt,l),p(n,wt,l),m(wt,It);for(var c=0;c<Zo.length;c+=1)Zo[c].m(It,null);y(It,a[0]),p(n,yt,l),p(n,jt,l),m(jt,Vt),m(Vt,St),m(St,Nt),m(Vt,Ct),m(Vt,Mt),m(Mt,Rt),m(Vt,Tt),m(Vt,Ot),m(Ot,kt),m(Vt,Pt),m(Vt,Ht),m(Ht,Bt),p(n,Ft,l),p(n,Lt,l),m(Lt,Gt),p(n,xt,l),p(n,_t,l),m(_t,Ut),m(_t,qt),m(qt,Kt),m(_t,Qt),m(_t,Xt),m(Xt,Yt),m(_t,Zt),m(_t,Jt),m(Jt,Wt),m(Jt,ao),m(ao,eo),m(Jt,to),m(Jt,oo),m(oo,ro),m(_t,so),m(_t,no),m(no,lo),m(no,io),m(io,co),m(no,fo),m(no,vo),m(vo,ho),m(_t,po),m(_t,mo),m(mo,go),m(mo,uo),m(uo,Eo),m(mo,bo),m(_t,$o),p(n,zo,l),Do.m(n,l),p(n,wo,l),I(Wo,n,l),p(n,Io,l),p(n,yo,l),m(yo,jo),m(jo,Vo),m(Vo,So),m(jo,No),m(jo,Co),m(Co,Mo),m(jo,Ro),m(jo,To),m(To,Oo),p(n,ko,l),I(ar,n,l),Po=!0,i&&j(Ho),Ho=[V($t,"click",a[4]),V(It,"change",a[5])]},p:function(a,e){var t=S(e,1)[0],o={};if(6&t&&(o.content='<div oo-template="home'.concat(a[2]).concat(a[1]?" vgap-less":"",'">\n <div oo-area="header">Header</div>\n  <div oo-area="main">Main</div>\n  <div oo-area="sidebar">Sidebar</div>\n  <div oo-area="footer">Footer</div>\n</div>\n')),Xo.$set(o),8&t){var r;for(Yo=a[3],r=0;r<Yo.length;r+=1){var s=F(a,Yo,r);Zo[r]?Zo[r].p(s,t):(Zo[r]=L(s),Zo[r].c(),Zo[r].m(It,null))}for(;r<Zo.length;r+=1)Zo[r].d(1);Zo.length=Yo.length}1&t&&y(It,a[0]),(!Po||6&t&&At!==(At="home"+a[2]+(a[1]?" vgap-less":"")))&&z(Vt,"data-oo-template",At)},i:function(a){Po||(N(Uo.$$.fragment,a),N(qo.$$.fragment,a),N(Ko.$$.fragment,a),N(Qo.$$.fragment,a),N(Xo.$$.fragment,a),N(Wo.$$.fragment,a),N(ar.$$.fragment,a),Po=!0)},o:function(a){C(Uo.$$.fragment,a),C(qo.$$.fragment,a),C(Ko.$$.fragment,a),C(Qo.$$.fragment,a),C(Xo.$$.fragment,a),C(Wo.$$.fragment,a),C(ar.$$.fragment,a),Po=!1},d:function(a){M(Uo,a),a&&h(e),a&&h(t),a&&h(r),a&&h(s),a&&h(Q),a&&h(X),a&&h(oa),a&&ra.d(),a&&h(sa),a&&h(na),a&&h(ia),a&&ca.d(),a&&h(da),M(qo,a),a&&h(fa),a&&h(va),a&&h(ya),a&&h(ja),a&&h(Va),a&&h(Sa),a&&h(Ra),a&&h(Ta),a&&h(_a),a&&Ua.d(),a&&h(qa),a&&h(Ka),a&&h(ee),M(Ko),a&&h(oe),a&&h(be),a&&h($e),a&&h(ze),a&&h(De),a&&h(je),a&&h(Ve),a&&h(ke),a&&Pe.d(),a&&h(He),M(Qo,a),a&&h(Be),a&&h(Ae),a&&h(Xe),a&&h(Ye),a&&h(Ze),a&&h(Je),a&&h(tt),a&&h(ot),a&&h(pt),a&&mt.d(),a&&h(gt),a&&ut.d(),a&&h(Et),M(Xo,a),a&&h(bt),a&&h($t),a&&h(Dt),a&&h(wt),R(Zo,a),a&&h(yt),a&&h(jt),a&&h(Ft),a&&h(Lt),a&&h(xt),a&&h(_t),a&&h(zo),a&&Do.d(),a&&h(wo),M(Wo,a),a&&h(Io),a&&h(yo),a&&h(ko),M(ar,a),j(Ho)}}}var x="Template component",_="Blueprint semantically a page or elements in a page.";function U(a,e,t){var o,r=["default","less","small"],s="default",n=!1;return a.$$.update=function(){1&a.$$.dirty&&t(2,o="default"===s?"":" gap-".concat(s))},[s,n,o,r,function(){return t(1,n=!n)},function(){s=P(this),t(0,s),t(3,r)}]}export default(function(n){a(i,s);var l=A(i);function i(a){var s;return e(this,i),s=l.call(this),t(r(s),a,U,G,o,{}),s}return i}());
