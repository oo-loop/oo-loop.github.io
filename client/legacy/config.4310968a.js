import{_ as e,a,i as o,s as r,b as n,S as s,O as t,Q as i,K as c,y as l,e as h,q as p,L as f,z as m,d,f as u,r as g,g as v,h as y,P as E,M as b,j as w,v as S,A as C,t as T,n as P,N as x,o as k,p as R}from"./client.456eb681.js";import{P as A}from"./Pagination.f0a7ceb6.js";function L(e){return function(){var a,o=k(e);if(function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}()){var r=k(this).constructor;a=Reflect.construct(o,arguments,r)}else a=o.apply(this,arguments);return R(this,a)}}function O(e){var a,o,r,n,s,k,R,L,O,$,G,H,M,N,D,j,z,F,B,I,W,_,U,q,K,Q,J,V,X,Y,Z,ee,ae,oe,re,ne,se,te,ie,ce,le,he,pe,fe,me,de,ue,ge,ve,ye,Ee,be,we,Se,Ce,Te,Pe,xe,ke,Re,Ae,Le,Oe,$e,Ge,He,Me,Ne,De,je,ze,Fe,Be,Ie,We,_e,Ue,qe,Ke,Qe,Je,Ve,Xe,Ye,Ze,ea,aa,oa,ra,na,sa,ta,ia,ca,la,ha,pa,fa,ma,da,ua,ga,va,ya,Ea,ba,wa,Sa,Ca,Ta,Pa,xa,ka,Ra,Aa,La,Oa,$a,Ga,Ha,Ma,Na,Da,ja,za,Fa,Ba,Ia,Wa,_a,Ua,qa,Ka,Qa,Ja,Va,Xa,Ya,Za,eo,ao,oo,ro,no,so,to,io,co,lo,ho,po,fo,mo,uo,go,vo,yo,Eo,bo,wo,So,Co,To,Po,xo,ko,Ro,Ao,Lo,Oo,$o,Go,Ho,Mo,No,Do,jo,zo,Fo,Bo,Io,Wo,_o,Uo,qo,Ko,Qo,Jo,Vo,Xo,Yo,Zo,er,ar,or,rr,nr,sr,tr,ir,cr,lr,hr,pr,fr,mr,dr,ur,gr,vr,yr,Er,br,wr,Sr,Cr,Tr,Pr,xr,kr,Rr,Ar,Lr,Or,$r,Gr,Hr,Mr,Nr,Dr,jr,zr,Fr,Br,Ir,Wr,_r,Ur,qr,Kr,Qr,Jr,Vr,Xr,Yr,Zr,en,an,on,rn,nn,sn,tn,cn,ln,hn,pn,fn,mn,dn,un,gn,vn,yn,En,bn,wn,Sn,Cn,Tn,Pn,xn,kn,Rn,An,Ln,On,$n,Gn,Hn,Mn,Nn,Dn,jn,zn,Fn,Bn,In,Wn,_n,Un,qn,Kn,Qn,Jn,Vn,Xn,Yn,Zn,es,as,os,rs,ns,ss,ts,is,cs,ls,hs,ps,fs,ms,ds,us,gs,vs,ys,Es,bs,ws,Ss,Cs,Ts,Ps,xs,ks,Rs,As,Ls,Os,$s,Gs,Hs,Ms,Ns,Ds,js,zs,Fs,Bs,Is,Ws,_s,Us,qs,Ks,Qs,Js=t("$ooLoop: (\n  // properties\n);\n","scss")+"",Vs=t("breakpoints: (\n  xs: 30em,     // 480px\n  sm: 37.500em, // 600px\n  md: 60em,     // 960px\n  lg: 80em,     // 1280px\n  xl: 120em,    // 1980px\n),","scss")+"",Xs=t("screens: (sm, md, lg),","scss")+"",Ys=t("palette: (\n  'primary': #0ea7d6,\n  'secondary': #959595,\n),","scss")+"",Zs=t("... : (\n  props: (\n    fontSize: 1.6em,    // camelCase\n    line-height: 1.375, // CSS kebab-case\n  )\n),\n","scss")+"",et=t("// parenthesis wrapping CSS multiple value\n... : (\n  props: (\n    fontFamily: ('Helvetica Neue', 'Helvetica', 'Arial', sans-serif),\n    transition: (background-color 300ms ease-in-out, border-color 300ms ease-in-out)\n  )\n),\n","scss")+"",at=t("\n... : (\n  props: (\n    font-size: 1rem,\n    'before': (\n      content: 'Tokyo –',\n      font-size: .8rem,\n    )\n  )\n),\n","scss")+"",ot=t("\n... : (\n  props: (\n    font-size: 1rem,\n    '>': (\n      'li': ( // targetting <li>\n        margin-bottom: 10px,\n      ),\n      'li:last-child': ( // pseudo selector\n        border-bottom: 1px solid #ccc,\n      ),\n      '.active': ( // classname\n        font-weight: 700,\n      ),\n    )\n  )\n),\n","scss")+"",rt=t("... : (\n  states: (\n    hover: ( // CSS properties\n      color: #cdcdcd,\n      border: 1px solid #cdcdcd,\n    ),\n    focus: ( // CSS properties\n      color: blue,\n    ),\n  )\n),\n","scss")+"",nt=t("$ooLoop: (\n  palette: (\n    'primary': #0ea7d6,\n    'secondary': #959595,\n  ),\n  anchor: (\n    props: (\n      color: this('palette.primary'),\n    )\n  ),\n  ...\n);\n","scss")+"",st=t("/* will generate */\na {\n  color: #0ea7d6;\n}\n","css")+"",tt=t("$ooLoop: (\n  palette: (\n    'primary': #0ea7d6,\n    'secondary': #959595,\n  ),\n\n  // utilities\n  color: (\n    font: (\n      prefix: 'color',\n      property: 'color',\n      values: (\n        _this('palette'),\n        (\n          'danger': red,\n        )\n      )\n    )\n  ),\n  ...\n);\n","scss")+"",it=t("/* will generate */\n.color-primary   { color: #0ea7d6 }\n.color-secondary { color: #959595 }\n.color-danger    { color: red }\n","css")+"",ct=t("$ooLoop: (\n  palette: (\n    'primary': #0ea7d6,\n    'secondary': #959595,\n  ),\n\n  // utilities\n  color: (\n    font: (\n      prefix: 'color',\n      property: 'color',\n      values: (\n        _this('palette.primary'),\n        (\n          'danger': red,\n        )\n      )\n    )\n  ),\n  ...\n);\n","scss")+"",lt=t("/* will generate */\n.color-primary { color: #0ea7d6 }\n.color-danger  { color: red }\n","css")+"",ht=t("$ooLoop: (\n  palette: (\n    'primary': #0ea7d6,\n    'secondary': #959595,\n  ),\n  anchor: (\n    props: (\n      color: this('palette.primary'),\n    ),\n    states: (\n      hover: (\n        // this will throw an error\n        color: darken(this('anchor.props.color'), 12%),\n      ),\n      focus: (\n        // this works fine\n        color: darken(#0ea7d6, 12%);\n      )\n    )\n  ),\n  ...\n);\n","scss")+"",pt=t("$ooLoop: (\n  palette: (\n    'primary': #0ea7d6,\n    'secondary': #959595,\n  ),\n  anchor: (\n    props: (\n      color: this('palette.primary'),\n    ),\n    states: (\n      hover: (\n        color: ooDarken(this('anchor.props.color'), 12%),\n      ),\n      focus: this('anchor.states.hover'),\n    )\n  ),\n  ...\n);\n","scss")+"",ft=t("$ooLoop: (\n  palette: (\n    'primary': #0ea7d6,\n    'secondary': #959595,\n  ),\n  body: (\n    props: (\n      font-family: ('Helvetica Neue', Helvetica), // kebab-case\n    )\n  ),\n  ...\n);\n","scss")+"",mt=t(".hero {\n display: flex;\n height: 400px;\n\n /* Access kebab-case from camelCase */\n font-family: oo('body.props.fontFamily');\n\n background-color: oo('palette.primary');\n} ","css")+"",dt=t("$ooLoop: ooSet('store', (\n  fontFamily: (\n    serif: (Georgia, serif)\n  ),\n));\n@include ooCreate();\n","scss")+"",ut=t(".hero {\n  display: flex;\n  height: 400px;\n  font-family: oo('store.fontFamily.serif');\n}\n","scss")+"",gt=t("/* Will generate */\n.hero {\n  display: flex;\n  height: 400px;\n  font-family: Georgia, serif;\n}\n","css")+"",vt=t("$ooLoop: ooSet('typo.fontFamily', (\n  values: (\n    serif: (Georgia, serif)\n  ),\n));\n@include ooCreate();\n","scss")+"",yt=t(".hero {\n  display: flex;\n  height: 400px;\n  font-family: oo('typo.fontFamily.values.serif');\n}\n","scss")+"",Et=t("/* Will generate */\n.font-serif { font-family: Georgia, serif; !important }\n\n.hero {\n  display: flex;\n  height: 400px;\n  font-family: Georgia, serif;\n}\n","css")+"",bt=new i({props:{title:"Config map"}}),wt=new A({props:{href:"docs/importation",title:"Customize your Loop import",label:"Use what you need"}});return{c:function(){c(bt.$$.fragment),a=l(),o=h("h1"),r=p("Loop Config Map"),n=l(),s=h("p"),k=p("Simplify the use of variables and the configuration of the framework."),R=l(),L=h("p"),O=p("Because going through a single "),$=h("i"),G=p("variables.scss"),H=p(" file can be tedious and remembering every names is becoming a challenge,\nLoop offers a single config map."),M=l(),N=h("p"),D=p("Every data are set "),j=h("strong"),z=p("inside"),F=p(" the variable "),B=h("code"),I=p("$ooLoop"),W=l(),U=l(),q=h("h2"),K=h("a"),Q=p("#"),J=p(" Global Properties"),V=l(),X=h("p"),Y=p("The global properties are data to be refered to within your configuration to avoid duplicating them."),Z=l(),ee=h("h3"),ae=p("breakpoints"),oe=l(),re=h("p"),ne=h("em"),se=p("Map"),te=p(" - Available breakpoints in your project."),ie=l(),le=l(),he=h("h3"),pe=p("screens"),fe=l(),me=h("p"),de=h("em"),ue=p("List"),ge=p(" - Set of responsive screens being globally used."),ve=l(),Ee=l(),be=h("h3"),we=p("palette"),Se=l(),Ce=h("p"),Te=h("em"),Pe=p("Map"),xe=p(" - Available colors in your project."),ke=l(),Ae=l(),Le=h("hr"),Oe=l(),$e=h("h2"),Ge=h("a"),He=p("#"),Me=l(),Ne=h("em"),De=p("Props"),je=p(" Attribute"),ze=l(),Fe=h("p"),Be=p("The "),Ie=h("em"),We=p("props"),_e=p(" attribute is reserved to pass a map of CSS properties within the config.\n"),Ue=h("br"),qe=p("The properties can be written in pure css or in camelCase depending on your preferences."),Ke=l(),Je=l(),Ve=h("p"),Xe=p("When a CSS value "),Ye=h("strong"),Ze=p("is multiple"),ea=p(" (containing commas), make sure to wrap the whole value "),aa=h("strong"),oa=p("between parenthesis"),ra=p("."),na=l(),ta=l(),ia=h("p"),ca=p("Core settings ("),la=h("strong"),ha=p("body, headings, paragraph"),pa=p("...) are mainly using the "),fa=h("em"),ma=p("props"),da=p(" attributes to provide default styling.\nCheck the "),ua=h("a"),ga=p("HTML elements documentation"),va=p(" to know what they are and change them at your own will."),ya=l(),Ea=h("h3"),ba=p("Pseudo-elements"),wa=l(),Sa=h("p"),Ca=p("Style pseudo-elements "),Ta=h("code"),Pa=p("before"),xa=p(" and "),ka=h("code"),Ra=p("after"),Aa=p(" by using them as property names with a map of CSS properties as value."),La=l(),$a=l(),Ga=h("h3"),Ha=p("Child elements"),Ma=l(),Na=h("p"),Da=p("Target nested elements from the key property "),ja=h("code"),za=p(">"),Fa=p(" having as value a "),Ba=h("strong"),Ia=p("map of CSS selectors"),Wa=p(" with CSS properties."),_a=l(),qa=l(),Ka=h("p"),Qa=p("Styling "),Ja=h("strong"),Va=p("pseudo-elements"),Xa=p(" and "),Ya=h("strong"),Za=p("child-elements"),eo=p(" are mainly used when developing components from the Loop config."),ao=l(),oo=h("hr"),ro=l(),no=h("h2"),so=h("a"),to=p("#"),io=l(),co=h("em"),lo=p("States"),ho=p(" Attribute"),po=l(),fo=h("p"),mo=p("The "),uo=h("em"),go=p("states"),vo=p(" attribute is reserved to pass a map of Element states containing CSS properties.\n"),yo=h("br"),Eo=p("The properties can be written in pure css or in camelCase depending on your preferences."),bo=l(),wo=h("p"),So=p("Any css state is available such as "),Co=h("strong"),To=p("active, hover, focus, visited"),Po=p("..."),xo=l(),Ro=l(),Ao=h("p"),Lo=p("Same as "),Oo=h("em"),$o=p("props"),Go=p(", the rules for "),Ho=h("strong"),Mo=p("pseudo-elements"),No=p(" and "),Do=h("strong"),jo=p("child-elements"),zo=p(" also apply to "),Fo=h("em"),Bo=p("states"),Io=p("."),Wo=l(),_o=h("hr"),Uo=l(),qo=h("h2"),Ko=h("a"),Qo=p("#"),Jo=l(),Vo=h("em"),Xo=p("This"),Yo=p(" Referer"),Zo=l(),er=h("p"),ar=p("The keyword "),or=h("code"),rr=p("this()"),nr=p(" refers to a value in the context of the config map."),sr=l(),ir=l(),lr=l(),hr=h("h3"),pr=p("Spread operator"),fr=l(),mr=h("p"),dr=p("Expand a map by referring a set of values in the context of the config map by using the operator "),ur=h("code"),gr=p("_this()"),vr=l(),Er=l(),wr=l(),Sr=h("p"),Cr=p("In the case where the expansion is "),Tr=h("strong"),Pr=p("targetting a single value"),xr=p(", the "),kr=h("strong"),Rr=p("last crumb "),Ar=p("of the path will be "),Lr=h("strong"),Or=p("used as the name"),$r=p(" of its value."),Gr=l(),Mr=l(),Dr=l(),jr=h("h3"),zr=p("Aliases"),Fr=l(),Br=h("p"),Ir=p("The config map not being initialized,\n"),Wr=h("em"),_r=p("the use of sass functions "),Ur=h("strong"),qr=p("along with"),Kr=p(" the keyword "),Qr=h("code"),Jr=p("this"),Vr=l(),Xr=h("strong"),Yr=p("cannot be performed"),Zr=p(".\nThey are however working with regular values."),en=l(),on=l(),rn=h("p"),nn=p("Aliases will help you overcome this problem and avoid repeating values already set.\nAt this stage, the few available are "),sn=h("code"),tn=p("ooDarken"),cn=p(" and "),ln=h("code"),hn=p("ooLighten"),pn=p("."),fn=l(),dn=l(),un=h("hr"),gn=l(),vn=h("h2"),yn=h("a"),En=p("#"),bn=p(" Access Data"),wn=l(),Sn=h("p"),Cn=p("Access any data of the config map during your development."),Tn=l(),Pn=h("h3"),xn=p("oo("),kn=h("span"),Rn=p("$path"),An=p(")"),Ln=l(),On=h("p"),$n=h("em"),Gn=p("Function"),Hn=p(" - Get values from Loop config."),Mn=l(),Nn=h("ul"),Dn=h("li"),jn=h("strong"),zn=p("$path"),Fn=l(),Bn=h("em"),In=p("(string)"),Wn=l(),_n=h("br"),Un=p("Concatenated path to a Loop config attribute.\n  "),qn=h("br"),Kn=p("When accessing a value from "),Qn=h("em"),Jn=p("props"),Vn=p(", the kebab-case css property can be targetting with a camelCase name."),Xn=l(),Zn=l(),as=l(),os=h("p"),rs=p("Make sure to "),ns=h("strong"),ss=p("use "),ts=h("span"),is=p("oo()"),cs=p(" after the initialization "),ls=p("of the config map to have all the updated data."),hs=l(),ps=h("hr"),fs=l(),ms=h("h2"),ds=h("a"),us=p("#"),gs=p(" Store"),vs=l(),ys=h("p"),Es=p("Add your own data to the config map through the property "),bs=h("code"),ws=p("store"),Ss=p(" to reuse them anywhere in your project."),Cs=l(),Ts=h("p"),Ps=p("Those data "),xs=h("strong"),ks=p("will not generate any CSS rules"),Rs=p(", It's just a way to set and access your project global values during your development."),As=l(),Os=l(),Gs=l(),Ms=l(),Ns=h("p"),Ds=p("On the contrary "),js=h("strong"),zs=p("not passing by store may generate extra rules"),Fs=p("."),Bs=l(),Ws=l(),Us=l(),Ks=l(),c(wt.$$.fragment),this.h()},l:function(e){f(bt.$$.fragment,e),a=m(e),o=d(e,"H1",{});var t=u(o);r=g(t,"Loop Config Map"),t.forEach(v),n=m(e),s=d(e,"P",{class:!0});var i=u(s);k=g(i,"Simplify the use of variables and the configuration of the framework."),i.forEach(v),R=m(e),L=d(e,"P",{});var c=u(L);O=g(c,"Because going through a single "),$=d(c,"I",{});var l=u($);G=g(l,"variables.scss"),l.forEach(v),H=g(c," file can be tedious and remembering every names is becoming a challenge,\nLoop offers a single config map."),c.forEach(v),M=m(e),N=d(e,"P",{});var h=u(N);D=g(h,"Every data are set "),j=d(h,"STRONG",{});var p=u(j);z=g(p,"inside"),p.forEach(v),F=g(h," the variable "),B=d(h,"CODE",{});var y=u(B);I=g(y,"$ooLoop"),y.forEach(v),h.forEach(v),W=m(e),U=m(e),q=d(e,"H2",{class:!0,id:!0});var E=u(q);K=d(E,"A",{href:!0});var b=u(K);Q=g(b,"#"),b.forEach(v),J=g(E," Global Properties"),E.forEach(v),V=m(e),X=d(e,"P",{});var w=u(X);Y=g(w,"The global properties are data to be refered to within your configuration to avoid duplicating them."),w.forEach(v),Z=m(e),ee=d(e,"H3",{class:!0});var S=u(ee);ae=g(S,"breakpoints"),S.forEach(v),oe=m(e),re=d(e,"P",{});var C=u(re);ne=d(C,"EM",{class:!0});var T=u(ne);se=g(T,"Map"),T.forEach(v),te=g(C," - Available breakpoints in your project."),C.forEach(v),ie=m(e),le=m(e),he=d(e,"H3",{class:!0});var P=u(he);pe=g(P,"screens"),P.forEach(v),fe=m(e),me=d(e,"P",{});var x=u(me);de=d(x,"EM",{class:!0});var A=u(de);ue=g(A,"List"),A.forEach(v),ge=g(x," - Set of responsive screens being globally used."),x.forEach(v),ve=m(e),Ee=m(e),be=d(e,"H3",{class:!0});var _=u(be);we=g(_,"palette"),_.forEach(v),Se=m(e),Ce=d(e,"P",{});var ce=u(Ce);Te=d(ce,"EM",{class:!0});var ye=u(Te);Pe=g(ye,"Map"),ye.forEach(v),xe=g(ce," - Available colors in your project."),ce.forEach(v),ke=m(e),Ae=m(e),Le=d(e,"HR",{}),Oe=m(e),$e=d(e,"H2",{id:!0});var Re=u($e);Ge=d(Re,"A",{href:!0});var Qe=u(Ge);He=g(Qe,"#"),Qe.forEach(v),Me=m(Re),Ne=d(Re,"EM",{class:!0});var sa=u(Ne);De=g(sa,"Props"),sa.forEach(v),je=g(Re," Attribute"),Re.forEach(v),ze=m(e),Fe=d(e,"P",{});var Oa=u(Fe);Be=g(Oa,"The "),Ie=d(Oa,"EM",{});var Ua=u(Ie);We=g(Ua,"props"),Ua.forEach(v),_e=g(Oa," attribute is reserved to pass a map of CSS properties within the config.\n"),Ue=d(Oa,"BR",{}),qe=g(Oa,"The properties can be written in pure css or in camelCase depending on your preferences."),Oa.forEach(v),Ke=m(e),Je=m(e),Ve=d(e,"P",{class:!0});var ko=u(Ve);Xe=g(ko,"When a CSS value "),Ye=d(ko,"STRONG",{});var tr=u(Ye);Ze=g(tr,"is multiple"),tr.forEach(v),ea=g(ko," (containing commas), make sure to wrap the whole value "),aa=d(ko,"STRONG",{});var cr=u(aa);oa=g(cr,"between parenthesis"),cr.forEach(v),ra=g(ko,"."),ko.forEach(v),na=m(e),ta=m(e),ia=d(e,"P",{class:!0});var yr=u(ia);ca=g(yr,"Core settings ("),la=d(yr,"STRONG",{});var br=u(la);ha=g(br,"body, headings, paragraph"),br.forEach(v),pa=g(yr,"...) are mainly using the "),fa=d(yr,"EM",{});var Hr=u(fa);ma=g(Hr,"props"),Hr.forEach(v),da=g(yr," attributes to provide default styling.\nCheck the "),ua=d(yr,"A",{href:!0,title:!0});var Nr=u(ua);ga=g(Nr,"HTML elements documentation"),Nr.forEach(v),va=g(yr," to know what they are and change them at your own will."),yr.forEach(v),ya=m(e),Ea=d(e,"H3",{});var an=u(Ea);ba=g(an,"Pseudo-elements"),an.forEach(v),wa=m(e),Sa=d(e,"P",{});var mn=u(Sa);Ca=g(mn,"Style pseudo-elements "),Ta=d(mn,"CODE",{});var Yn=u(Ta);Pa=g(Yn,"before"),Yn.forEach(v),xa=g(mn," and "),ka=d(mn,"CODE",{});var es=u(ka);Ra=g(es,"after"),es.forEach(v),Aa=g(mn," by using them as property names with a map of CSS properties as value."),mn.forEach(v),La=m(e),$a=m(e),Ga=d(e,"H3",{class:!0});var Ls=u(Ga);Ha=g(Ls,"Child elements"),Ls.forEach(v),Ma=m(e),Na=d(e,"P",{});var $s=u(Na);Da=g($s,"Target nested elements from the key property "),ja=d($s,"CODE",{});var Hs=u(ja);za=g(Hs,">"),Hs.forEach(v),Fa=g($s," having as value a "),Ba=d($s,"STRONG",{});var Is=u(Ba);Ia=g(Is,"map of CSS selectors"),Is.forEach(v),Wa=g($s," with CSS properties."),$s.forEach(v),_a=m(e),qa=m(e),Ka=d(e,"P",{class:!0});var _s=u(Ka);Qa=g(_s,"Styling "),Ja=d(_s,"STRONG",{});var qs=u(Ja);Va=g(qs,"pseudo-elements"),qs.forEach(v),Xa=g(_s," and "),Ya=d(_s,"STRONG",{});var Qs=u(Ya);Za=g(Qs,"child-elements"),Qs.forEach(v),eo=g(_s," are mainly used when developing components from the Loop config."),_s.forEach(v),ao=m(e),oo=d(e,"HR",{}),ro=m(e),no=d(e,"H2",{id:!0});var Js=u(no);so=d(Js,"A",{href:!0});var Vs=u(so);to=g(Vs,"#"),Vs.forEach(v),io=m(Js),co=d(Js,"EM",{class:!0});var Xs=u(co);lo=g(Xs,"States"),Xs.forEach(v),ho=g(Js," Attribute"),Js.forEach(v),po=m(e),fo=d(e,"P",{});var Ys=u(fo);mo=g(Ys,"The "),uo=d(Ys,"EM",{});var Zs=u(uo);go=g(Zs,"states"),Zs.forEach(v),vo=g(Ys," attribute is reserved to pass a map of Element states containing CSS properties.\n"),yo=d(Ys,"BR",{}),Eo=g(Ys,"The properties can be written in pure css or in camelCase depending on your preferences."),Ys.forEach(v),bo=m(e),wo=d(e,"P",{});var et=u(wo);So=g(et,"Any css state is available such as "),Co=d(et,"STRONG",{});var at=u(Co);To=g(at,"active, hover, focus, visited"),at.forEach(v),Po=g(et,"..."),et.forEach(v),xo=m(e),Ro=m(e),Ao=d(e,"P",{class:!0});var ot=u(Ao);Lo=g(ot,"Same as "),Oo=d(ot,"EM",{});var rt=u(Oo);$o=g(rt,"props"),rt.forEach(v),Go=g(ot,", the rules for "),Ho=d(ot,"STRONG",{});var nt=u(Ho);Mo=g(nt,"pseudo-elements"),nt.forEach(v),No=g(ot," and "),Do=d(ot,"STRONG",{});var st=u(Do);jo=g(st,"child-elements"),st.forEach(v),zo=g(ot," also apply to "),Fo=d(ot,"EM",{});var tt=u(Fo);Bo=g(tt,"states"),tt.forEach(v),Io=g(ot,"."),ot.forEach(v),Wo=m(e),_o=d(e,"HR",{}),Uo=m(e),qo=d(e,"H2",{id:!0});var it=u(qo);Ko=d(it,"A",{href:!0});var ct=u(Ko);Qo=g(ct,"#"),ct.forEach(v),Jo=m(it),Vo=d(it,"EM",{class:!0});var lt=u(Vo);Xo=g(lt,"This"),lt.forEach(v),Yo=g(it," Referer"),it.forEach(v),Zo=m(e),er=d(e,"P",{});var ht=u(er);ar=g(ht,"The keyword "),or=d(ht,"CODE",{});var pt=u(or);rr=g(pt,"this()"),pt.forEach(v),nr=g(ht," refers to a value in the context of the config map."),ht.forEach(v),sr=m(e),ir=m(e),lr=m(e),hr=d(e,"H3",{class:!0});var ft=u(hr);pr=g(ft,"Spread operator"),ft.forEach(v),fr=m(e),mr=d(e,"P",{});var mt=u(mr);dr=g(mt,"Expand a map by referring a set of values in the context of the config map by using the operator "),ur=d(mt,"CODE",{});var dt=u(ur);gr=g(dt,"_this()"),dt.forEach(v),mt.forEach(v),vr=m(e),Er=m(e),wr=m(e),Sr=d(e,"P",{class:!0});var ut=u(Sr);Cr=g(ut,"In the case where the expansion is "),Tr=d(ut,"STRONG",{});var gt=u(Tr);Pr=g(gt,"targetting a single value"),gt.forEach(v),xr=g(ut,", the "),kr=d(ut,"STRONG",{});var vt=u(kr);Rr=g(vt,"last crumb "),vt.forEach(v),Ar=g(ut,"of the path will be "),Lr=d(ut,"STRONG",{});var yt=u(Lr);Or=g(yt,"used as the name"),yt.forEach(v),$r=g(ut," of its value."),ut.forEach(v),Gr=m(e),Mr=m(e),Dr=m(e),jr=d(e,"H3",{class:!0});var Et=u(jr);zr=g(Et,"Aliases"),Et.forEach(v),Fr=m(e),Br=d(e,"P",{});var St=u(Br);Ir=g(St,"The config map not being initialized,\n"),Wr=d(St,"EM",{class:!0});var Ct=u(Wr);_r=g(Ct,"the use of sass functions "),Ur=d(Ct,"STRONG",{});var Tt=u(Ur);qr=g(Tt,"along with"),Tt.forEach(v),Kr=g(Ct," the keyword "),Qr=d(Ct,"CODE",{});var Pt=u(Qr);Jr=g(Pt,"this"),Pt.forEach(v),Vr=m(Ct),Xr=d(Ct,"STRONG",{});var xt=u(Xr);Yr=g(xt,"cannot be performed"),xt.forEach(v),Ct.forEach(v),Zr=g(St,".\nThey are however working with regular values."),St.forEach(v),en=m(e),on=m(e),rn=d(e,"P",{class:!0});var kt=u(rn);nn=g(kt,"Aliases will help you overcome this problem and avoid repeating values already set.\nAt this stage, the few available are "),sn=d(kt,"CODE",{});var Rt=u(sn);tn=g(Rt,"ooDarken"),Rt.forEach(v),cn=g(kt," and "),ln=d(kt,"CODE",{});var At=u(ln);hn=g(At,"ooLighten"),At.forEach(v),pn=g(kt,"."),kt.forEach(v),fn=m(e),dn=m(e),un=d(e,"HR",{}),gn=m(e),vn=d(e,"H2",{id:!0});var Lt=u(vn);yn=d(Lt,"A",{href:!0});var Ot=u(yn);En=g(Ot,"#"),Ot.forEach(v),bn=g(Lt," Access Data"),Lt.forEach(v),wn=m(e),Sn=d(e,"P",{});var $t=u(Sn);Cn=g($t,"Access any data of the config map during your development."),$t.forEach(v),Tn=m(e),Pn=d(e,"H3",{class:!0,id:!0});var Gt=u(Pn);xn=g(Gt,"oo("),kn=d(Gt,"SPAN",{class:!0});var Ht=u(kn);Rn=g(Ht,"$path"),Ht.forEach(v),An=g(Gt,")"),Gt.forEach(v),Ln=m(e),On=d(e,"P",{});var Mt=u(On);$n=d(Mt,"EM",{class:!0});var Nt=u($n);Gn=g(Nt,"Function"),Nt.forEach(v),Hn=g(Mt," - Get values from Loop config."),Mt.forEach(v),Mn=m(e),Nn=d(e,"UL",{});var Dt=u(Nn);Dn=d(Dt,"LI",{class:!0});var jt=u(Dn);jn=d(jt,"STRONG",{});var zt=u(jn);zn=g(zt,"$path"),zt.forEach(v),Fn=m(jt),Bn=d(jt,"EM",{class:!0});var Ft=u(Bn);In=g(Ft,"(string)"),Ft.forEach(v),Wn=m(jt),_n=d(jt,"BR",{}),Un=g(jt,"Concatenated path to a Loop config attribute.\n  "),qn=d(jt,"BR",{}),Kn=g(jt,"When accessing a value from "),Qn=d(jt,"EM",{});var Bt=u(Qn);Jn=g(Bt,"props"),Bt.forEach(v),Vn=g(jt,", the kebab-case css property can be targetting with a camelCase name."),jt.forEach(v),Dt.forEach(v),Xn=m(e),Zn=m(e),as=m(e),os=d(e,"P",{class:!0});var It=u(os);rs=g(It,"Make sure to "),ns=d(It,"STRONG",{});var Wt=u(ns);ss=g(Wt,"use "),ts=d(Wt,"SPAN",{class:!0});var _t=u(ts);is=g(_t,"oo()"),_t.forEach(v),cs=g(Wt," after the initialization "),Wt.forEach(v),ls=g(It,"of the config map to have all the updated data."),It.forEach(v),hs=m(e),ps=d(e,"HR",{}),fs=m(e),ms=d(e,"H2",{id:!0});var Ut=u(ms);ds=d(Ut,"A",{href:!0});var qt=u(ds);us=g(qt,"#"),qt.forEach(v),gs=g(Ut," Store"),Ut.forEach(v),vs=m(e),ys=d(e,"P",{});var Kt=u(ys);Es=g(Kt,"Add your own data to the config map through the property "),bs=d(Kt,"CODE",{});var Qt=u(bs);ws=g(Qt,"store"),Qt.forEach(v),Ss=g(Kt," to reuse them anywhere in your project."),Kt.forEach(v),Cs=m(e),Ts=d(e,"P",{});var Jt=u(Ts);Ps=g(Jt,"Those data "),xs=d(Jt,"STRONG",{});var Vt=u(xs);ks=g(Vt,"will not generate any CSS rules"),Vt.forEach(v),Rs=g(Jt,", It's just a way to set and access your project global values during your development."),Jt.forEach(v),As=m(e),Os=m(e),Gs=m(e),Ms=m(e),Ns=d(e,"P",{});var Xt=u(Ns);Ds=g(Xt,"On the contrary "),js=d(Xt,"STRONG",{});var Yt=u(js);zs=g(Yt,"not passing by store may generate extra rules"),Yt.forEach(v),Fs=g(Xt,"."),Xt.forEach(v),Bs=m(e),Ws=m(e),Us=m(e),Ks=m(e),f(wt.$$.fragment,e),this.h()},h:function(){y(s,"class","font-large"),_=new E(Js,U),y(K,"href","docs/config#global"),y(q,"class","mt-45"),y(q,"id","global"),y(ee,"class","h4 mt-30 font-code"),y(ne,"class","text-uppercase font-small"),ce=new E(Vs,le),y(he,"class","h4 mt-30 font-code"),y(de,"class","text-uppercase font-small"),ye=new E(Xs,Ee),y(be,"class","h4 mt-30 font-code"),y(Te,"class","text-uppercase font-small"),Re=new E(Ys,Ae),y(Ge,"href","docs/config#props"),y(Ne,"class","font-regular"),y($e,"id","props"),Qe=new E(Zs,Je),y(Ve,"class","mt-30"),sa=new E(et,ta),y(ua,"href","docs/html-elements"),y(ua,"title","HTML elements documentation"),y(ia,"class","mt-30"),Oa=new E(at,$a),y(Ga,"class","mt-30"),Ua=new E(ot,qa),y(Ka,"class","info"),y(so,"href","docs/config#states"),y(co,"class","font-regular"),y(no,"id","states"),ko=new E(rt,Ro),y(Ao,"class","info"),y(Ko,"href","docs/config#this"),y(Vo,"class","font-regular"),y(qo,"id","this"),tr=new E(nt,ir),cr=new E(st,lr),y(hr,"class","mt-45"),yr=new E(tt,Er),br=new E(it,wr),y(Sr,"class","info mt-30 mb-30"),Hr=new E(ct,Mr),Nr=new E(lt,Dr),y(jr,"class","mt-45"),y(Wr,"class","color-danger"),an=new E(ht,on),y(rn,"class","mt-30"),mn=new E(pt,dn),y(yn,"href","docs/config#access"),y(vn,"id","access"),y(kn,"class","color-primary"),y(Pn,"class","h4 font-code"),y(Pn,"id","oo"),y($n,"class","text-uppercase font-small"),y(Bn,"class","font-monospace"),y(Dn,"class","mb-10"),Yn=new E(ft,Zn),es=new E(mt,as),y(ts,"class","color-primary"),y(os,"class","info mt-15"),y(ds,"href","docs/config#store"),y(ms,"id","store"),Ls=new E(dt,Os),$s=new E(ut,Gs),Hs=new E(gt,Ms),Is=new E(vt,Ws),_s=new E(yt,Us),qs=new E(Et,Ks)},m:function(e,t){b(bt,e,t),w(e,a,t),w(e,o,t),S(o,r),w(e,n,t),w(e,s,t),S(s,k),w(e,R,t),w(e,L,t),S(L,O),S(L,$),S($,G),S(L,H),w(e,M,t),w(e,N,t),S(N,D),S(N,j),S(j,z),S(N,F),S(N,B),S(B,I),w(e,W,t),_.m(e,t),w(e,U,t),w(e,q,t),S(q,K),S(K,Q),S(q,J),w(e,V,t),w(e,X,t),S(X,Y),w(e,Z,t),w(e,ee,t),S(ee,ae),w(e,oe,t),w(e,re,t),S(re,ne),S(ne,se),S(re,te),w(e,ie,t),ce.m(e,t),w(e,le,t),w(e,he,t),S(he,pe),w(e,fe,t),w(e,me,t),S(me,de),S(de,ue),S(me,ge),w(e,ve,t),ye.m(e,t),w(e,Ee,t),w(e,be,t),S(be,we),w(e,Se,t),w(e,Ce,t),S(Ce,Te),S(Te,Pe),S(Ce,xe),w(e,ke,t),Re.m(e,t),w(e,Ae,t),w(e,Le,t),w(e,Oe,t),w(e,$e,t),S($e,Ge),S(Ge,He),S($e,Me),S($e,Ne),S(Ne,De),S($e,je),w(e,ze,t),w(e,Fe,t),S(Fe,Be),S(Fe,Ie),S(Ie,We),S(Fe,_e),S(Fe,Ue),S(Fe,qe),w(e,Ke,t),Qe.m(e,t),w(e,Je,t),w(e,Ve,t),S(Ve,Xe),S(Ve,Ye),S(Ye,Ze),S(Ve,ea),S(Ve,aa),S(aa,oa),S(Ve,ra),w(e,na,t),sa.m(e,t),w(e,ta,t),w(e,ia,t),S(ia,ca),S(ia,la),S(la,ha),S(ia,pa),S(ia,fa),S(fa,ma),S(ia,da),S(ia,ua),S(ua,ga),S(ia,va),w(e,ya,t),w(e,Ea,t),S(Ea,ba),w(e,wa,t),w(e,Sa,t),S(Sa,Ca),S(Sa,Ta),S(Ta,Pa),S(Sa,xa),S(Sa,ka),S(ka,Ra),S(Sa,Aa),w(e,La,t),Oa.m(e,t),w(e,$a,t),w(e,Ga,t),S(Ga,Ha),w(e,Ma,t),w(e,Na,t),S(Na,Da),S(Na,ja),S(ja,za),S(Na,Fa),S(Na,Ba),S(Ba,Ia),S(Na,Wa),w(e,_a,t),Ua.m(e,t),w(e,qa,t),w(e,Ka,t),S(Ka,Qa),S(Ka,Ja),S(Ja,Va),S(Ka,Xa),S(Ka,Ya),S(Ya,Za),S(Ka,eo),w(e,ao,t),w(e,oo,t),w(e,ro,t),w(e,no,t),S(no,so),S(so,to),S(no,io),S(no,co),S(co,lo),S(no,ho),w(e,po,t),w(e,fo,t),S(fo,mo),S(fo,uo),S(uo,go),S(fo,vo),S(fo,yo),S(fo,Eo),w(e,bo,t),w(e,wo,t),S(wo,So),S(wo,Co),S(Co,To),S(wo,Po),w(e,xo,t),ko.m(e,t),w(e,Ro,t),w(e,Ao,t),S(Ao,Lo),S(Ao,Oo),S(Oo,$o),S(Ao,Go),S(Ao,Ho),S(Ho,Mo),S(Ao,No),S(Ao,Do),S(Do,jo),S(Ao,zo),S(Ao,Fo),S(Fo,Bo),S(Ao,Io),w(e,Wo,t),w(e,_o,t),w(e,Uo,t),w(e,qo,t),S(qo,Ko),S(Ko,Qo),S(qo,Jo),S(qo,Vo),S(Vo,Xo),S(qo,Yo),w(e,Zo,t),w(e,er,t),S(er,ar),S(er,or),S(or,rr),S(er,nr),w(e,sr,t),tr.m(e,t),w(e,ir,t),cr.m(e,t),w(e,lr,t),w(e,hr,t),S(hr,pr),w(e,fr,t),w(e,mr,t),S(mr,dr),S(mr,ur),S(ur,gr),w(e,vr,t),yr.m(e,t),w(e,Er,t),br.m(e,t),w(e,wr,t),w(e,Sr,t),S(Sr,Cr),S(Sr,Tr),S(Tr,Pr),S(Sr,xr),S(Sr,kr),S(kr,Rr),S(Sr,Ar),S(Sr,Lr),S(Lr,Or),S(Sr,$r),w(e,Gr,t),Hr.m(e,t),w(e,Mr,t),Nr.m(e,t),w(e,Dr,t),w(e,jr,t),S(jr,zr),w(e,Fr,t),w(e,Br,t),S(Br,Ir),S(Br,Wr),S(Wr,_r),S(Wr,Ur),S(Ur,qr),S(Wr,Kr),S(Wr,Qr),S(Qr,Jr),S(Wr,Vr),S(Wr,Xr),S(Xr,Yr),S(Br,Zr),w(e,en,t),an.m(e,t),w(e,on,t),w(e,rn,t),S(rn,nn),S(rn,sn),S(sn,tn),S(rn,cn),S(rn,ln),S(ln,hn),S(rn,pn),w(e,fn,t),mn.m(e,t),w(e,dn,t),w(e,un,t),w(e,gn,t),w(e,vn,t),S(vn,yn),S(yn,En),S(vn,bn),w(e,wn,t),w(e,Sn,t),S(Sn,Cn),w(e,Tn,t),w(e,Pn,t),S(Pn,xn),S(Pn,kn),S(kn,Rn),S(Pn,An),w(e,Ln,t),w(e,On,t),S(On,$n),S($n,Gn),S(On,Hn),w(e,Mn,t),w(e,Nn,t),S(Nn,Dn),S(Dn,jn),S(jn,zn),S(Dn,Fn),S(Dn,Bn),S(Bn,In),S(Dn,Wn),S(Dn,_n),S(Dn,Un),S(Dn,qn),S(Dn,Kn),S(Dn,Qn),S(Qn,Jn),S(Dn,Vn),w(e,Xn,t),Yn.m(e,t),w(e,Zn,t),es.m(e,t),w(e,as,t),w(e,os,t),S(os,rs),S(os,ns),S(ns,ss),S(ns,ts),S(ts,is),S(ns,cs),S(os,ls),w(e,hs,t),w(e,ps,t),w(e,fs,t),w(e,ms,t),S(ms,ds),S(ds,us),S(ms,gs),w(e,vs,t),w(e,ys,t),S(ys,Es),S(ys,bs),S(bs,ws),S(ys,Ss),w(e,Cs,t),w(e,Ts,t),S(Ts,Ps),S(Ts,xs),S(xs,ks),S(Ts,Rs),w(e,As,t),Ls.m(e,t),w(e,Os,t),$s.m(e,t),w(e,Gs,t),Hs.m(e,t),w(e,Ms,t),w(e,Ns,t),S(Ns,Ds),S(Ns,js),S(js,zs),S(Ns,Fs),w(e,Bs,t),Is.m(e,t),w(e,Ws,t),_s.m(e,t),w(e,Us,t),qs.m(e,t),w(e,Ks,t),b(wt,e,t),Qs=!0},p:C,i:function(e){Qs||(T(bt.$$.fragment,e),T(wt.$$.fragment,e),Qs=!0)},o:function(e){P(bt.$$.fragment,e),P(wt.$$.fragment,e),Qs=!1},d:function(e){x(bt,e),e&&v(a),e&&v(o),e&&v(n),e&&v(s),e&&v(R),e&&v(L),e&&v(M),e&&v(N),e&&v(W),e&&_.d(),e&&v(U),e&&v(q),e&&v(V),e&&v(X),e&&v(Z),e&&v(ee),e&&v(oe),e&&v(re),e&&v(ie),e&&ce.d(),e&&v(le),e&&v(he),e&&v(fe),e&&v(me),e&&v(ve),e&&ye.d(),e&&v(Ee),e&&v(be),e&&v(Se),e&&v(Ce),e&&v(ke),e&&Re.d(),e&&v(Ae),e&&v(Le),e&&v(Oe),e&&v($e),e&&v(ze),e&&v(Fe),e&&v(Ke),e&&Qe.d(),e&&v(Je),e&&v(Ve),e&&v(na),e&&sa.d(),e&&v(ta),e&&v(ia),e&&v(ya),e&&v(Ea),e&&v(wa),e&&v(Sa),e&&v(La),e&&Oa.d(),e&&v($a),e&&v(Ga),e&&v(Ma),e&&v(Na),e&&v(_a),e&&Ua.d(),e&&v(qa),e&&v(Ka),e&&v(ao),e&&v(oo),e&&v(ro),e&&v(no),e&&v(po),e&&v(fo),e&&v(bo),e&&v(wo),e&&v(xo),e&&ko.d(),e&&v(Ro),e&&v(Ao),e&&v(Wo),e&&v(_o),e&&v(Uo),e&&v(qo),e&&v(Zo),e&&v(er),e&&v(sr),e&&tr.d(),e&&v(ir),e&&cr.d(),e&&v(lr),e&&v(hr),e&&v(fr),e&&v(mr),e&&v(vr),e&&yr.d(),e&&v(Er),e&&br.d(),e&&v(wr),e&&v(Sr),e&&v(Gr),e&&Hr.d(),e&&v(Mr),e&&Nr.d(),e&&v(Dr),e&&v(jr),e&&v(Fr),e&&v(Br),e&&v(en),e&&an.d(),e&&v(on),e&&v(rn),e&&v(fn),e&&mn.d(),e&&v(dn),e&&v(un),e&&v(gn),e&&v(vn),e&&v(wn),e&&v(Sn),e&&v(Tn),e&&v(Pn),e&&v(Ln),e&&v(On),e&&v(Mn),e&&v(Nn),e&&v(Xn),e&&Yn.d(),e&&v(Zn),e&&es.d(),e&&v(as),e&&v(os),e&&v(hs),e&&v(ps),e&&v(fs),e&&v(ms),e&&v(vs),e&&v(ys),e&&v(Cs),e&&v(Ts),e&&v(As),e&&Ls.d(),e&&v(Os),e&&$s.d(),e&&v(Gs),e&&Hs.d(),e&&v(Ms),e&&v(Ns),e&&v(Bs),e&&Is.d(),e&&v(Ws),e&&_s.d(),e&&v(Us),e&&qs.d(),e&&v(Ks),x(wt,e)}}}export default(function(t){e(c,s);var i=L(c);function c(e){var s;return a(this,c),s=i.call(this),o(n(s),e,null,O,r,{}),s}return c}());
