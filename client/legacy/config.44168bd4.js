import{_ as e,a,i as o,s as r,b as n,S as s,O as t,Q as c,K as i,y as l,e as p,q as h,L as f,z as d,d as m,f as g,r as v,g as u,h as y,P as E,M as b,j as w,v as S,A as C,t as P,n as T,N as x,o as k,p as R}from"./client.2054bc8c.js";import{P as A}from"./Pagination.6cb100c2.js";function L(e){return function(){var a,o=k(e);if(function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}()){var r=k(this).constructor;a=Reflect.construct(o,arguments,r)}else a=o.apply(this,arguments);return R(this,a)}}function O(e){var a,o,r,n,s,k,R,L,O,G,H,M,N,D,j,z,F,_,B,I,W,U,q,K,Q,J,V,X,Y,Z,ee,ae,oe,re,ne,se,te,ce,ie,le,pe,he,fe,de,me,ge,ve,ue,ye,Ee,be,we,Se,Ce,Pe,Te,xe,ke,Re,Ae,Le,Oe,$e,Ge,He,Me,Ne,De,je,ze,Fe,_e,Be,Ie,We,Ue,qe,Ke,Qe,Je,Ve,Xe,Ye,Ze,ea,aa,oa,ra,na,sa,ta,ca,ia,la,pa,ha,fa,da,ma,ga,va,ua,ya,Ea,ba,wa,Sa,Ca,Pa,Ta,xa,ka,Ra,Aa,La,Oa,$a,Ga,Ha,Ma,Na,Da,ja,za,Fa,_a,Ba,Ia,Wa,Ua,qa,Ka,Qa,Ja,Va,Xa,Ya,Za,eo,ao,oo,ro,no,so,to,co,io,lo,po,ho,fo,mo,go,vo,uo,yo,Eo,bo,wo,So,Co,Po,To,xo,ko,Ro,Ao,Lo,Oo,$o,Go,Ho,Mo,No,Do,jo,zo,Fo,_o,Bo,Io,Wo,Uo,qo,Ko,Qo,Jo,Vo,Xo,Yo,Zo,er,ar,or,rr,nr,sr,tr,cr,ir,lr,pr,hr,fr,dr,mr,gr,vr,ur,yr,Er,br,wr,Sr,Cr,Pr,Tr,xr,kr,Rr,Ar,Lr,Or,$r,Gr,Hr,Mr,Nr,Dr,jr,zr,Fr,_r,Br,Ir,Wr,Ur,qr,Kr,Qr,Jr,Vr,Xr,Yr,Zr,en,an,on,rn,nn,sn,tn,cn,ln,pn,hn,fn,dn,mn,gn,vn,un,yn,En,bn,wn,Sn,Cn,Pn,Tn,xn,kn,Rn,An,Ln,On,$n,Gn,Hn,Mn,Nn,Dn,jn,zn,Fn,_n,Bn,In,Wn,Un,qn,Kn,Qn,Jn,Vn,Xn,Yn,Zn,es,as,os,rs,ns,ss,ts,cs,is,ls,ps,hs,fs,ds,ms,gs,vs,us,ys,Es,bs,ws,Ss,Cs,Ps,Ts,xs,ks,Rs,As,Ls,Os,$s,Gs,Hs,Ms,Ns,Ds,js,zs,Fs,_s,Bs,Is,Ws,Us,qs,Ks,Qs,Js,Vs,Xs,Ys,Zs,et,at,ot,rt,nt,st,tt,ct,it,lt,pt,ht,ft,dt,mt,gt,vt=t("$ooLoop: (\n  // properties\n);\n","scss")+"",ut=t("breakpoints: (\n  xs: 30em,     // 480px\n  sm: 37.500em, // 600px\n  md: 60em,     // 960px\n  lg: 80em,     // 1280px\n  xl: 120em,    // 1980px\n),","scss")+"",yt=t("screens: (sm, md, lg),","scss")+"",Et=t("palette: (\n  'primary': #0ea7d6,\n  'secondary': #959595,\n),","scss")+"",bt=t("... : (\n  props: (\n    fontSize: 1.6em,    // camelCase\n    line-height: 1.375, // CSS kebab-case\n  )\n),\n","scss")+"",wt=t("// parenthesis wrapping CSS multiple value\n... : (\n  props: (\n    fontFamily: ('Helvetica Neue', 'Helvetica', 'Arial', sans-serif),\n    transition: (background-color 300ms ease-in-out, border-color 300ms ease-in-out)\n  )\n),\n","scss")+"",St=t("\nbody : (\n  props: (\n    font-size: (\n      rt: 1rem, // root value (default)\n      sm: 1.2rem, // value @sm \n    )\n  )\n),\n","scss")+"",Ct=t("/* Generating */\nbody {\n  font-size: 1rem;\n}\n@media (min-width: 37.500em) {\n  body {\n    font-size: 1.2rem;\n  }\n}\n","css")+"",Pt=t("\n... : (\n  props: (\n    font-size: 1rem,\n    'before': (\n      content: 'Tokyo –',\n      font-size: .8rem,\n    )\n  )\n),\n","scss")+"",Tt=t("\n... : (\n  props: (\n    font-size: 1rem,\n    '>': (\n      'li': ( // targetting <li>\n        margin-bottom: 10px,\n      ),\n      'li:last-child': ( // pseudo selector\n        border-bottom: 1px solid #ccc,\n      ),\n      '.active': ( // classname\n        font-weight: 700,\n      ),\n    )\n  )\n),\n","scss")+"",xt=t("... : (\n  states: (\n    hover: ( // CSS properties\n      color: #cdcdcd,\n      border: 1px solid #cdcdcd,\n    ),\n    focus: ( // CSS properties\n      color: blue,\n    ),\n  )\n),\n","scss")+"",kt=t("$ooLoop: (\n  palette: (\n    'primary': #0ea7d6,\n    'secondary': #959595,\n  ),\n  anchor: (\n    props: (\n      color: this('palette.primary'),\n    )\n  ),\n  ...\n);\n","scss")+"",Rt=t("/* will generate */\na {\n  color: #0ea7d6;\n}\n","css")+"",At=t("$ooLoop: (\n  palette: (\n    'primary': #0ea7d6,\n    'secondary': #959595,\n  ),\n\n  // utilities\n  color: (\n    font: (\n      prefix: 'color',\n      property: 'color',\n      values: (\n        _this('palette'),\n        (\n          'danger': red,\n        )\n      )\n    )\n  ),\n  ...\n);\n","scss")+"",Lt=t("/* will generate */\n.color-primary   { color: #0ea7d6 }\n.color-secondary { color: #959595 }\n.color-danger    { color: red }\n","css")+"",Ot=t("$ooLoop: (\n  palette: (\n    'primary': #0ea7d6,\n    'secondary': #959595,\n  ),\n\n  // utilities\n  color: (\n    font: (\n      prefix: 'color',\n      property: 'color',\n      values: (\n        _this('palette.primary'),\n        (\n          'danger': red,\n        )\n      )\n    )\n  ),\n  ...\n);\n","scss")+"",$t=t("/* will generate */\n.color-primary { color: #0ea7d6 }\n.color-danger  { color: red }\n","css")+"",Gt=t("$ooLoop: (\n  palette: (\n    'primary': #0ea7d6,\n    'secondary': #959595,\n    'warning': #f7f3c8,\n  ),\n\n  // utilities\n  color: (\n    font: (\n      prefix: 'color',\n      property: 'color',\n      values: (\n        _this('palette.primary'),\n        _this('palette.secondary'),\n        (\n          'danger': red,\n        )\n      )\n    )\n  ),\n  ...\n);\n","scss")+"",Ht=t("/* will generate */\n.color-primary { color: #0ea7d6 }\n.color-secondary { color: #959595 }\n.color-danger  { color: red }\n","css")+"",Mt=t("$ooLoop: (\n  palette: (\n    'primary': #0ea7d6,\n    'secondary': #959595,\n  ),\n  anchor: (\n    props: (\n      color: this('palette.primary'),\n    ),\n    states: (\n      hover: (\n        // this will throw an error\n        color: darken(this('anchor.props.color'), 12%),\n      ),\n      focus: (\n        // this works fine\n        color: darken(#0ea7d6, 12%);\n      )\n    )\n  ),\n  ...\n);\n","scss")+"",Nt=t("$ooLoop: (\n  palette: (\n    'primary': #0ea7d6,\n    'secondary': #959595,\n  ),\n  anchor: (\n    props: (\n      color: this('palette.primary'),\n    ),\n    states: (\n      hover: (\n        color: ooDarken(this('anchor.props.color'), 12%),\n      ),\n      focus: this('anchor.states.hover'),\n    )\n  ),\n  ...\n);\n","scss")+"",Dt=t("$ooLoop: (\n  palette: (\n    'primary': #0ea7d6,\n    'secondary': #959595,\n  ),\n  body: (\n    props: (\n      font-family: ('Helvetica Neue', Helvetica), // kebab-case\n    )\n  ),\n  ...\n);\n","scss")+"",jt=t(".hero {\n display: flex;\n height: 400px;\n\n /* Access kebab-case from camelCase */\n font-family: oo('body.props.fontFamily');\n\n background-color: oo('palette.primary');\n} ","css")+"",zt=t("$ooLoop: ooSet('store', (\n  fontFamily: (\n    serif: (Georgia, serif)\n  ),\n));\n@include ooCreate();\n","scss")+"",Ft=t(".hero {\n  display: flex;\n  height: 400px;\n  font-family: oo('store.fontFamily.serif');\n}\n","scss")+"",_t=t("/* Will generate */\n.hero {\n  display: flex;\n  height: 400px;\n  font-family: Georgia, serif;\n}\n","css")+"",Bt=t("$ooLoop: ooSet('typo.fontFamily', (\n  values: (\n    serif: (Georgia, serif)\n  ),\n));\n@include ooCreate();\n","scss")+"",It=t(".hero {\n  display: flex;\n  height: 400px;\n  font-family: oo('typo.fontFamily.values.serif');\n}\n","scss")+"",Wt=t("/* Will generate */\n.font-serif { font-family: Georgia, serif; !important }\n\n.hero {\n  display: flex;\n  height: 400px;\n  font-family: Georgia, serif;\n}\n","css")+"",Ut=new c({props:{title:"Config map",description:$}}),qt=new A({props:{href:"docs/importation",title:"Customize your Loop import",label:"Use what you need"}});return{c:function(){i(Ut.$$.fragment),a=l(),o=p("h1"),r=h("Loop Config Map"),n=l(),s=p("p"),k=h($),R=l(),L=p("p"),O=h("Because going through a single "),G=p("i"),H=h("variables.scss"),M=h(" file can be tedious and remembering every names is becoming a challenge,\nLoop offers a single config map."),N=l(),D=p("p"),j=h("Every data are set "),z=p("strong"),F=h("inside"),_=h(" the variable "),B=p("code"),I=h("$ooLoop"),W=l(),q=l(),K=p("h2"),Q=p("a"),J=h("#"),V=h(" Global Properties"),X=l(),Y=p("p"),Z=h("The global properties are data to be refered to within your configuration to avoid duplicating them."),ee=l(),ae=p("h3"),oe=h("breakpoints"),re=l(),ne=p("p"),se=p("em"),te=h("Map"),ce=h(" - Available breakpoints in your project."),ie=l(),pe=l(),he=p("h3"),fe=h("screens"),de=l(),me=p("p"),ge=p("em"),ve=h("List"),ue=h(" - Set of responsive screens being globally used."),ye=l(),be=l(),we=p("h3"),Se=h("palette"),Ce=l(),Pe=p("p"),Te=p("em"),xe=h("Map"),ke=h(" - Available colors in your project."),Re=l(),Le=l(),Oe=p("hr"),$e=l(),Ge=p("h2"),He=p("a"),Me=h("#"),Ne=l(),De=p("em"),je=h("Props"),ze=h(" Property"),Fe=l(),_e=p("p"),Be=h("The "),Ie=p("em"),We=h("props"),Ue=h(" property is reserved to pass a map of CSS properties within the config.\n"),qe=p("br"),Ke=h("The properties can be written in pure css or in camelCase depending on your preferences."),Qe=l(),Ve=l(),Xe=p("p"),Ye=h("When a CSS value "),Ze=p("strong"),ea=h("is multiple"),aa=h(" (containing commas), make sure to wrap the whole value "),oa=p("strong"),ra=h("between parenthesis"),na=h("."),sa=l(),ca=l(),ia=p("p"),la=h("Core settings ("),pa=p("strong"),ha=h("body, headings, paragraph"),fa=h("...) are mainly using the "),da=p("em"),ma=h("props"),ga=h(" property to provide default styling.\nCheck the "),va=p("a"),ua=h("HTML elements documentation"),ya=h(" to know what they are and change them at your own will."),Ea=l(),ba=p("h3"),wa=h("Responsive value"),Sa=l(),Ca=p("p"),Pa=h("A property can accept a map of breakpoints to generate responsive values"),Ta=l(),ka=l(),Aa=l(),La=p("h3"),Oa=h("Pseudo-elements"),$a=l(),Ga=p("p"),Ha=h("Style pseudo-elements "),Ma=p("code"),Na=h("before"),Da=h(" and "),ja=p("code"),za=h("after"),Fa=h(" by using them as property names with a map of CSS properties as value."),_a=l(),Ia=l(),Wa=p("h3"),Ua=h("Child elements"),qa=l(),Ka=p("p"),Qa=h("Target nested elements from the key property "),Ja=p("code"),Va=h(">"),Xa=h(" having as value a "),Ya=p("strong"),Za=h("map of CSS selectors"),eo=h(" with CSS properties."),ao=l(),ro=l(),no=p("p"),so=h("Styling "),to=p("strong"),co=h("pseudo-elements"),io=h(" and "),lo=p("strong"),po=h("child-elements"),ho=h(" are mainly used when developing components from the Loop config."),fo=l(),mo=p("hr"),go=l(),vo=p("h2"),uo=p("a"),yo=h("#"),Eo=l(),bo=p("em"),wo=h("States"),So=h(" Property"),Co=l(),Po=p("p"),To=h("The "),xo=p("em"),ko=h("states"),Ro=h(" property is reserved to pass a map of Element states containing CSS properties.\n"),Ao=p("br"),Lo=h("The properties can be written in pure css or in camelCase depending on your preferences."),Oo=l(),$o=p("p"),Go=h("Any css state is available such as "),Ho=p("strong"),Mo=h("active, hover, focus, visited"),No=h("..."),Do=l(),zo=l(),Fo=p("p"),_o=h("Same as "),Bo=p("em"),Io=h("props"),Wo=h(", the rules for "),Uo=p("strong"),qo=h("pseudo-elements"),Ko=h(" and "),Qo=p("strong"),Jo=h("child-elements"),Vo=h(" also apply to "),Xo=p("em"),Yo=h("states"),Zo=h("."),er=l(),ar=p("hr"),or=l(),rr=p("h2"),nr=p("a"),sr=h("#"),tr=l(),cr=p("em"),ir=h("This"),lr=h(" Referer"),pr=l(),hr=p("p"),fr=h("The keyword "),dr=p("code"),mr=h("this()"),gr=h(" refers to a value in the context of the config map."),vr=l(),yr=l(),br=l(),wr=p("h3"),Sr=h("Spread operator"),Cr=l(),Pr=p("p"),Tr=h("Expand a map by referring a set of values in the context of the config map by using the operator "),xr=p("code"),kr=h("_this()"),Rr=l(),Lr=l(),$r=l(),Gr=p("p"),Hr=h("In the case where the expansion is "),Mr=p("strong"),Nr=h("targetting a single value"),Dr=h(", the "),jr=p("strong"),zr=h("last crumb "),Fr=h("of the path will be "),_r=p("strong"),Br=h("used as the name"),Ir=h(" of its value."),Wr=l(),qr=l(),Qr=l(),Jr=p("h4"),Vr=h("Chaining"),Xr=l(),Yr=p("p"),Zr=h("Add as many spreads as needed"),en=l(),on=l(),nn=l(),sn=p("h3"),tn=h("Aliases"),cn=l(),ln=p("p"),pn=h("The config map not being initialized,\n"),hn=p("em"),fn=h("the use of sass functions "),dn=p("strong"),mn=h("along with"),gn=h(" the keyword "),vn=p("code"),un=h("this"),yn=l(),En=p("strong"),bn=h("cannot be performed"),wn=h(".\nThey are however working with regular values."),Sn=l(),Pn=l(),Tn=p("p"),xn=h("Aliases will help you overcome this problem and avoid repeating values already set.\nAt this stage, the few available are "),kn=p("code"),Rn=h("ooDarken"),An=h(" and "),Ln=p("code"),On=h("ooLighten"),$n=h("."),Gn=l(),Mn=l(),Nn=p("hr"),Dn=l(),jn=p("h2"),zn=p("a"),Fn=h("#"),_n=h(" Access Data"),Bn=l(),In=p("p"),Wn=h("Access any data of the config map during your development."),Un=l(),qn=p("h3"),Kn=h("oo("),Qn=p("span"),Jn=h("$path"),Vn=h(")"),Xn=l(),Yn=p("p"),Zn=p("em"),es=h("Function"),as=h(" - Get values from Loop config."),os=l(),rs=p("ul"),ns=p("li"),ss=p("strong"),ts=h("$path"),cs=l(),is=p("em"),ls=h("(string)"),ps=l(),hs=p("br"),fs=h("Concatenated path to a Loop config property.\n  "),ds=p("br"),ms=h("When accessing a value from "),gs=p("em"),vs=h("props"),us=h(", the kebab-case css property can be targetting with a camelCase name."),ys=l(),bs=l(),Ss=l(),Cs=p("p"),Ps=h("Make sure to "),Ts=p("strong"),xs=h("use "),ks=p("span"),Rs=h("oo()"),As=h(" after the initialization "),Ls=h("of the config map to have all the updated data."),Os=l(),$s=p("hr"),Gs=l(),Hs=p("h2"),Ms=p("a"),Ns=h("#"),Ds=h(" Store"),js=l(),zs=p("p"),Fs=h("Add your own data to the config map through the property "),_s=p("code"),Bs=h("store"),Is=h(" to reuse them anywhere in your project."),Ws=l(),Us=p("p"),qs=h("Those data "),Ks=p("strong"),Qs=h("will not generate any CSS rules"),Js=h(", It's just a way to set and access your project global values during your development."),Vs=l(),Ys=l(),et=l(),ot=l(),rt=p("p"),nt=h("On the contrary "),st=p("strong"),tt=h("not passing by store may generate extra rules"),ct=h("."),it=l(),pt=l(),ft=l(),mt=l(),i(qt.$$.fragment),this.h()},l:function(e){f(Ut.$$.fragment,e),a=d(e),o=m(e,"H1",{});var t=g(o);r=v(t,"Loop Config Map"),t.forEach(u),n=d(e),s=m(e,"P",{class:!0});var c=g(s);k=v(c,$),c.forEach(u),R=d(e),L=m(e,"P",{});var i=g(L);O=v(i,"Because going through a single "),G=m(i,"I",{});var l=g(G);H=v(l,"variables.scss"),l.forEach(u),M=v(i," file can be tedious and remembering every names is becoming a challenge,\nLoop offers a single config map."),i.forEach(u),N=d(e),D=m(e,"P",{});var p=g(D);j=v(p,"Every data are set "),z=m(p,"STRONG",{});var h=g(z);F=v(h,"inside"),h.forEach(u),_=v(p," the variable "),B=m(p,"CODE",{});var y=g(B);I=v(y,"$ooLoop"),y.forEach(u),p.forEach(u),W=d(e),q=d(e),K=m(e,"H2",{class:!0,id:!0});var E=g(K);Q=m(E,"A",{href:!0});var b=g(Q);J=v(b,"#"),b.forEach(u),V=v(E," Global Properties"),E.forEach(u),X=d(e),Y=m(e,"P",{});var w=g(Y);Z=v(w,"The global properties are data to be refered to within your configuration to avoid duplicating them."),w.forEach(u),ee=d(e),ae=m(e,"H3",{class:!0});var S=g(ae);oe=v(S,"breakpoints"),S.forEach(u),re=d(e),ne=m(e,"P",{});var C=g(ne);se=m(C,"EM",{class:!0});var P=g(se);te=v(P,"Map"),P.forEach(u),ce=v(C," - Available breakpoints in your project."),C.forEach(u),ie=d(e),pe=d(e),he=m(e,"H3",{class:!0});var T=g(he);fe=v(T,"screens"),T.forEach(u),de=d(e),me=m(e,"P",{});var x=g(me);ge=m(x,"EM",{class:!0});var A=g(ge);ve=v(A,"List"),A.forEach(u),ue=v(x," - Set of responsive screens being globally used."),x.forEach(u),ye=d(e),be=d(e),we=m(e,"H3",{class:!0});var U=g(we);Se=v(U,"palette"),U.forEach(u),Ce=d(e),Pe=m(e,"P",{});var le=g(Pe);Te=m(le,"EM",{class:!0});var Ee=g(Te);xe=v(Ee,"Map"),Ee.forEach(u),ke=v(le," - Available colors in your project."),le.forEach(u),Re=d(e),Le=d(e),Oe=m(e,"HR",{}),$e=d(e),Ge=m(e,"H2",{id:!0});var Ae=g(Ge);He=m(Ae,"A",{href:!0});var Je=g(He);Me=v(Je,"#"),Je.forEach(u),Ne=d(Ae),De=m(Ae,"EM",{class:!0});var ta=g(De);je=v(ta,"Props"),ta.forEach(u),ze=v(Ae," Property"),Ae.forEach(u),Fe=d(e),_e=m(e,"P",{});var xa=g(_e);Be=v(xa,"The "),Ie=m(xa,"EM",{});var Ra=g(Ie);We=v(Ra,"props"),Ra.forEach(u),Ue=v(xa," property is reserved to pass a map of CSS properties within the config.\n"),qe=m(xa,"BR",{}),Ke=v(xa,"The properties can be written in pure css or in camelCase depending on your preferences."),xa.forEach(u),Qe=d(e),Ve=d(e),Xe=m(e,"P",{class:!0});var Ba=g(Xe);Ye=v(Ba,"When a CSS value "),Ze=m(Ba,"STRONG",{});var oo=g(Ze);ea=v(oo,"is multiple"),oo.forEach(u),aa=v(Ba," (containing commas), make sure to wrap the whole value "),oa=m(Ba,"STRONG",{});var jo=g(oa);ra=v(jo,"between parenthesis"),jo.forEach(u),na=v(Ba,"."),Ba.forEach(u),sa=d(e),ca=d(e),ia=m(e,"P",{class:!0});var ur=g(ia);la=v(ur,"Core settings ("),pa=m(ur,"STRONG",{});var Er=g(pa);ha=v(Er,"body, headings, paragraph"),Er.forEach(u),fa=v(ur,"...) are mainly using the "),da=m(ur,"EM",{});var Ar=g(da);ma=v(Ar,"props"),Ar.forEach(u),ga=v(ur," property to provide default styling.\nCheck the "),va=m(ur,"A",{href:!0,title:!0});var Or=g(va);ua=v(Or,"HTML elements documentation"),Or.forEach(u),ya=v(ur," to know what they are and change them at your own will."),ur.forEach(u),Ea=d(e),ba=m(e,"H3",{});var Ur=g(ba);wa=v(Ur,"Responsive value"),Ur.forEach(u),Sa=d(e),Ca=m(e,"P",{});var Kr=g(Ca);Pa=v(Kr,"A property can accept a map of breakpoints to generate responsive values"),Kr.forEach(u),Ta=d(e),ka=d(e),Aa=d(e),La=m(e,"H3",{class:!0});var an=g(La);Oa=v(an,"Pseudo-elements"),an.forEach(u),$a=d(e),Ga=m(e,"P",{});var rn=g(Ga);Ha=v(rn,"Style pseudo-elements "),Ma=m(rn,"CODE",{});var Cn=g(Ma);Na=v(Cn,"before"),Cn.forEach(u),Da=v(rn," and "),ja=m(rn,"CODE",{});var Hn=g(ja);za=v(Hn,"after"),Hn.forEach(u),Fa=v(rn," by using them as property names with a map of CSS properties as value."),rn.forEach(u),_a=d(e),Ia=d(e),Wa=m(e,"H3",{class:!0});var Es=g(Wa);Ua=v(Es,"Child elements"),Es.forEach(u),qa=d(e),Ka=m(e,"P",{});var ws=g(Ka);Qa=v(ws,"Target nested elements from the key property "),Ja=m(ws,"CODE",{});var Xs=g(Ja);Va=v(Xs,">"),Xs.forEach(u),Xa=v(ws," having as value a "),Ya=m(ws,"STRONG",{});var Zs=g(Ya);Za=v(Zs,"map of CSS selectors"),Zs.forEach(u),eo=v(ws," with CSS properties."),ws.forEach(u),ao=d(e),ro=d(e),no=m(e,"P",{class:!0});var at=g(no);so=v(at,"Styling "),to=m(at,"STRONG",{});var lt=g(to);co=v(lt,"pseudo-elements"),lt.forEach(u),io=v(at," and "),lo=m(at,"STRONG",{});var ht=g(lo);po=v(ht,"child-elements"),ht.forEach(u),ho=v(at," are mainly used when developing components from the Loop config."),at.forEach(u),fo=d(e),mo=m(e,"HR",{}),go=d(e),vo=m(e,"H2",{id:!0});var dt=g(vo);uo=m(dt,"A",{href:!0});var gt=g(uo);yo=v(gt,"#"),gt.forEach(u),Eo=d(dt),bo=m(dt,"EM",{class:!0});var vt=g(bo);wo=v(vt,"States"),vt.forEach(u),So=v(dt," Property"),dt.forEach(u),Co=d(e),Po=m(e,"P",{});var ut=g(Po);To=v(ut,"The "),xo=m(ut,"EM",{});var yt=g(xo);ko=v(yt,"states"),yt.forEach(u),Ro=v(ut," property is reserved to pass a map of Element states containing CSS properties.\n"),Ao=m(ut,"BR",{}),Lo=v(ut,"The properties can be written in pure css or in camelCase depending on your preferences."),ut.forEach(u),Oo=d(e),$o=m(e,"P",{});var Et=g($o);Go=v(Et,"Any css state is available such as "),Ho=m(Et,"STRONG",{});var bt=g(Ho);Mo=v(bt,"active, hover, focus, visited"),bt.forEach(u),No=v(Et,"..."),Et.forEach(u),Do=d(e),zo=d(e),Fo=m(e,"P",{class:!0});var wt=g(Fo);_o=v(wt,"Same as "),Bo=m(wt,"EM",{});var St=g(Bo);Io=v(St,"props"),St.forEach(u),Wo=v(wt,", the rules for "),Uo=m(wt,"STRONG",{});var Ct=g(Uo);qo=v(Ct,"pseudo-elements"),Ct.forEach(u),Ko=v(wt," and "),Qo=m(wt,"STRONG",{});var Pt=g(Qo);Jo=v(Pt,"child-elements"),Pt.forEach(u),Vo=v(wt," also apply to "),Xo=m(wt,"EM",{});var Tt=g(Xo);Yo=v(Tt,"states"),Tt.forEach(u),Zo=v(wt,"."),wt.forEach(u),er=d(e),ar=m(e,"HR",{}),or=d(e),rr=m(e,"H2",{id:!0});var xt=g(rr);nr=m(xt,"A",{href:!0});var kt=g(nr);sr=v(kt,"#"),kt.forEach(u),tr=d(xt),cr=m(xt,"EM",{class:!0});var Rt=g(cr);ir=v(Rt,"This"),Rt.forEach(u),lr=v(xt," Referer"),xt.forEach(u),pr=d(e),hr=m(e,"P",{});var At=g(hr);fr=v(At,"The keyword "),dr=m(At,"CODE",{});var Lt=g(dr);mr=v(Lt,"this()"),Lt.forEach(u),gr=v(At," refers to a value in the context of the config map."),At.forEach(u),vr=d(e),yr=d(e),br=d(e),wr=m(e,"H3",{class:!0});var Ot=g(wr);Sr=v(Ot,"Spread operator"),Ot.forEach(u),Cr=d(e),Pr=m(e,"P",{});var $t=g(Pr);Tr=v($t,"Expand a map by referring a set of values in the context of the config map by using the operator "),xr=m($t,"CODE",{});var Gt=g(xr);kr=v(Gt,"_this()"),Gt.forEach(u),$t.forEach(u),Rr=d(e),Lr=d(e),$r=d(e),Gr=m(e,"P",{class:!0});var Ht=g(Gr);Hr=v(Ht,"In the case where the expansion is "),Mr=m(Ht,"STRONG",{});var Mt=g(Mr);Nr=v(Mt,"targetting a single value"),Mt.forEach(u),Dr=v(Ht,", the "),jr=m(Ht,"STRONG",{});var Nt=g(jr);zr=v(Nt,"last crumb "),Nt.forEach(u),Fr=v(Ht,"of the path will be "),_r=m(Ht,"STRONG",{});var Dt=g(_r);Br=v(Dt,"used as the name"),Dt.forEach(u),Ir=v(Ht," of its value."),Ht.forEach(u),Wr=d(e),qr=d(e),Qr=d(e),Jr=m(e,"H4",{});var jt=g(Jr);Vr=v(jt,"Chaining"),jt.forEach(u),Xr=d(e),Yr=m(e,"P",{});var zt=g(Yr);Zr=v(zt,"Add as many spreads as needed"),zt.forEach(u),en=d(e),on=d(e),nn=d(e),sn=m(e,"H3",{class:!0});var Ft=g(sn);tn=v(Ft,"Aliases"),Ft.forEach(u),cn=d(e),ln=m(e,"P",{});var _t=g(ln);pn=v(_t,"The config map not being initialized,\n"),hn=m(_t,"EM",{class:!0});var Bt=g(hn);fn=v(Bt,"the use of sass functions "),dn=m(Bt,"STRONG",{});var It=g(dn);mn=v(It,"along with"),It.forEach(u),gn=v(Bt," the keyword "),vn=m(Bt,"CODE",{});var Wt=g(vn);un=v(Wt,"this"),Wt.forEach(u),yn=d(Bt),En=m(Bt,"STRONG",{});var Kt=g(En);bn=v(Kt,"cannot be performed"),Kt.forEach(u),Bt.forEach(u),wn=v(_t,".\nThey are however working with regular values."),_t.forEach(u),Sn=d(e),Pn=d(e),Tn=m(e,"P",{class:!0});var Qt=g(Tn);xn=v(Qt,"Aliases will help you overcome this problem and avoid repeating values already set.\nAt this stage, the few available are "),kn=m(Qt,"CODE",{});var Jt=g(kn);Rn=v(Jt,"ooDarken"),Jt.forEach(u),An=v(Qt," and "),Ln=m(Qt,"CODE",{});var Vt=g(Ln);On=v(Vt,"ooLighten"),Vt.forEach(u),$n=v(Qt,"."),Qt.forEach(u),Gn=d(e),Mn=d(e),Nn=m(e,"HR",{}),Dn=d(e),jn=m(e,"H2",{id:!0});var Xt=g(jn);zn=m(Xt,"A",{href:!0});var Yt=g(zn);Fn=v(Yt,"#"),Yt.forEach(u),_n=v(Xt," Access Data"),Xt.forEach(u),Bn=d(e),In=m(e,"P",{});var Zt=g(In);Wn=v(Zt,"Access any data of the config map during your development."),Zt.forEach(u),Un=d(e),qn=m(e,"H3",{class:!0,id:!0});var ec=g(qn);Kn=v(ec,"oo("),Qn=m(ec,"SPAN",{class:!0});var ac=g(Qn);Jn=v(ac,"$path"),ac.forEach(u),Vn=v(ec,")"),ec.forEach(u),Xn=d(e),Yn=m(e,"P",{});var oc=g(Yn);Zn=m(oc,"EM",{class:!0});var rc=g(Zn);es=v(rc,"Function"),rc.forEach(u),as=v(oc," - Get values from Loop config."),oc.forEach(u),os=d(e),rs=m(e,"UL",{});var nc=g(rs);ns=m(nc,"LI",{class:!0});var sc=g(ns);ss=m(sc,"STRONG",{});var tc=g(ss);ts=v(tc,"$path"),tc.forEach(u),cs=d(sc),is=m(sc,"EM",{class:!0});var cc=g(is);ls=v(cc,"(string)"),cc.forEach(u),ps=d(sc),hs=m(sc,"BR",{}),fs=v(sc,"Concatenated path to a Loop config property.\n  "),ds=m(sc,"BR",{}),ms=v(sc,"When accessing a value from "),gs=m(sc,"EM",{});var ic=g(gs);vs=v(ic,"props"),ic.forEach(u),us=v(sc,", the kebab-case css property can be targetting with a camelCase name."),sc.forEach(u),nc.forEach(u),ys=d(e),bs=d(e),Ss=d(e),Cs=m(e,"P",{class:!0});var lc=g(Cs);Ps=v(lc,"Make sure to "),Ts=m(lc,"STRONG",{});var pc=g(Ts);xs=v(pc,"use "),ks=m(pc,"SPAN",{class:!0});var hc=g(ks);Rs=v(hc,"oo()"),hc.forEach(u),As=v(pc," after the initialization "),pc.forEach(u),Ls=v(lc,"of the config map to have all the updated data."),lc.forEach(u),Os=d(e),$s=m(e,"HR",{}),Gs=d(e),Hs=m(e,"H2",{id:!0});var fc=g(Hs);Ms=m(fc,"A",{href:!0});var dc=g(Ms);Ns=v(dc,"#"),dc.forEach(u),Ds=v(fc," Store"),fc.forEach(u),js=d(e),zs=m(e,"P",{});var mc=g(zs);Fs=v(mc,"Add your own data to the config map through the property "),_s=m(mc,"CODE",{});var gc=g(_s);Bs=v(gc,"store"),gc.forEach(u),Is=v(mc," to reuse them anywhere in your project."),mc.forEach(u),Ws=d(e),Us=m(e,"P",{});var vc=g(Us);qs=v(vc,"Those data "),Ks=m(vc,"STRONG",{});var uc=g(Ks);Qs=v(uc,"will not generate any CSS rules"),uc.forEach(u),Js=v(vc,", It's just a way to set and access your project global values during your development."),vc.forEach(u),Vs=d(e),Ys=d(e),et=d(e),ot=d(e),rt=m(e,"P",{});var yc=g(rt);nt=v(yc,"On the contrary "),st=m(yc,"STRONG",{});var Ec=g(st);tt=v(Ec,"not passing by store may generate extra rules"),Ec.forEach(u),ct=v(yc,"."),yc.forEach(u),it=d(e),pt=d(e),ft=d(e),mt=d(e),f(qt.$$.fragment,e),this.h()},h:function(){y(s,"class","font-large"),U=new E(vt,q),y(Q,"href","docs/config#global"),y(K,"class","mt-45"),y(K,"id","global"),y(ae,"class","h4 mt-30 font-code"),y(se,"class","text-uppercase font-small"),le=new E(ut,pe),y(he,"class","h4 mt-30 font-code"),y(ge,"class","text-uppercase font-small"),Ee=new E(yt,be),y(we,"class","h4 mt-30 font-code"),y(Te,"class","text-uppercase font-small"),Ae=new E(Et,Le),y(He,"href","docs/config#props"),y(De,"class","font-regular"),y(Ge,"id","props"),Je=new E(bt,Ve),y(Xe,"class","mt-30"),ta=new E(wt,ca),y(va,"href","docs/html-elements"),y(va,"title","HTML elements documentation"),y(ia,"class","mt-30"),xa=new E(St,ka),Ra=new E(Ct,Aa),y(La,"class","mt-30"),Ba=new E(Pt,Ia),y(Wa,"class","mt-30"),oo=new E(Tt,ro),y(no,"class","info"),y(uo,"href","docs/config#states"),y(bo,"class","font-regular"),y(vo,"id","states"),jo=new E(xt,zo),y(Fo,"class","info"),y(nr,"href","docs/config#this"),y(cr,"class","font-regular"),y(rr,"id","this"),ur=new E(kt,yr),Er=new E(Rt,br),y(wr,"class","mt-45"),Ar=new E(At,Lr),Or=new E(Lt,$r),y(Gr,"class","info mt-30 mb-30"),Ur=new E(Ot,qr),Kr=new E($t,Qr),an=new E(Gt,on),rn=new E(Ht,nn),y(sn,"class","mt-45"),y(hn,"class","color-danger"),Cn=new E(Mt,Pn),y(Tn,"class","mt-30"),Hn=new E(Nt,Mn),y(zn,"href","docs/config#access"),y(jn,"id","access"),y(Qn,"class","color-primary"),y(qn,"class","h4 font-code"),y(qn,"id","oo"),y(Zn,"class","text-uppercase font-small"),y(is,"class","font-monospace"),y(ns,"class","mb-10"),Es=new E(Dt,bs),ws=new E(jt,Ss),y(ks,"class","color-primary"),y(Cs,"class","info mt-15"),y(Ms,"href","docs/config#store"),y(Hs,"id","store"),Xs=new E(zt,Ys),Zs=new E(Ft,et),at=new E(_t,ot),lt=new E(Bt,pt),ht=new E(It,ft),dt=new E(Wt,mt)},m:function(e,t){b(Ut,e,t),w(e,a,t),w(e,o,t),S(o,r),w(e,n,t),w(e,s,t),S(s,k),w(e,R,t),w(e,L,t),S(L,O),S(L,G),S(G,H),S(L,M),w(e,N,t),w(e,D,t),S(D,j),S(D,z),S(z,F),S(D,_),S(D,B),S(B,I),w(e,W,t),U.m(e,t),w(e,q,t),w(e,K,t),S(K,Q),S(Q,J),S(K,V),w(e,X,t),w(e,Y,t),S(Y,Z),w(e,ee,t),w(e,ae,t),S(ae,oe),w(e,re,t),w(e,ne,t),S(ne,se),S(se,te),S(ne,ce),w(e,ie,t),le.m(e,t),w(e,pe,t),w(e,he,t),S(he,fe),w(e,de,t),w(e,me,t),S(me,ge),S(ge,ve),S(me,ue),w(e,ye,t),Ee.m(e,t),w(e,be,t),w(e,we,t),S(we,Se),w(e,Ce,t),w(e,Pe,t),S(Pe,Te),S(Te,xe),S(Pe,ke),w(e,Re,t),Ae.m(e,t),w(e,Le,t),w(e,Oe,t),w(e,$e,t),w(e,Ge,t),S(Ge,He),S(He,Me),S(Ge,Ne),S(Ge,De),S(De,je),S(Ge,ze),w(e,Fe,t),w(e,_e,t),S(_e,Be),S(_e,Ie),S(Ie,We),S(_e,Ue),S(_e,qe),S(_e,Ke),w(e,Qe,t),Je.m(e,t),w(e,Ve,t),w(e,Xe,t),S(Xe,Ye),S(Xe,Ze),S(Ze,ea),S(Xe,aa),S(Xe,oa),S(oa,ra),S(Xe,na),w(e,sa,t),ta.m(e,t),w(e,ca,t),w(e,ia,t),S(ia,la),S(ia,pa),S(pa,ha),S(ia,fa),S(ia,da),S(da,ma),S(ia,ga),S(ia,va),S(va,ua),S(ia,ya),w(e,Ea,t),w(e,ba,t),S(ba,wa),w(e,Sa,t),w(e,Ca,t),S(Ca,Pa),w(e,Ta,t),xa.m(e,t),w(e,ka,t),Ra.m(e,t),w(e,Aa,t),w(e,La,t),S(La,Oa),w(e,$a,t),w(e,Ga,t),S(Ga,Ha),S(Ga,Ma),S(Ma,Na),S(Ga,Da),S(Ga,ja),S(ja,za),S(Ga,Fa),w(e,_a,t),Ba.m(e,t),w(e,Ia,t),w(e,Wa,t),S(Wa,Ua),w(e,qa,t),w(e,Ka,t),S(Ka,Qa),S(Ka,Ja),S(Ja,Va),S(Ka,Xa),S(Ka,Ya),S(Ya,Za),S(Ka,eo),w(e,ao,t),oo.m(e,t),w(e,ro,t),w(e,no,t),S(no,so),S(no,to),S(to,co),S(no,io),S(no,lo),S(lo,po),S(no,ho),w(e,fo,t),w(e,mo,t),w(e,go,t),w(e,vo,t),S(vo,uo),S(uo,yo),S(vo,Eo),S(vo,bo),S(bo,wo),S(vo,So),w(e,Co,t),w(e,Po,t),S(Po,To),S(Po,xo),S(xo,ko),S(Po,Ro),S(Po,Ao),S(Po,Lo),w(e,Oo,t),w(e,$o,t),S($o,Go),S($o,Ho),S(Ho,Mo),S($o,No),w(e,Do,t),jo.m(e,t),w(e,zo,t),w(e,Fo,t),S(Fo,_o),S(Fo,Bo),S(Bo,Io),S(Fo,Wo),S(Fo,Uo),S(Uo,qo),S(Fo,Ko),S(Fo,Qo),S(Qo,Jo),S(Fo,Vo),S(Fo,Xo),S(Xo,Yo),S(Fo,Zo),w(e,er,t),w(e,ar,t),w(e,or,t),w(e,rr,t),S(rr,nr),S(nr,sr),S(rr,tr),S(rr,cr),S(cr,ir),S(rr,lr),w(e,pr,t),w(e,hr,t),S(hr,fr),S(hr,dr),S(dr,mr),S(hr,gr),w(e,vr,t),ur.m(e,t),w(e,yr,t),Er.m(e,t),w(e,br,t),w(e,wr,t),S(wr,Sr),w(e,Cr,t),w(e,Pr,t),S(Pr,Tr),S(Pr,xr),S(xr,kr),w(e,Rr,t),Ar.m(e,t),w(e,Lr,t),Or.m(e,t),w(e,$r,t),w(e,Gr,t),S(Gr,Hr),S(Gr,Mr),S(Mr,Nr),S(Gr,Dr),S(Gr,jr),S(jr,zr),S(Gr,Fr),S(Gr,_r),S(_r,Br),S(Gr,Ir),w(e,Wr,t),Ur.m(e,t),w(e,qr,t),Kr.m(e,t),w(e,Qr,t),w(e,Jr,t),S(Jr,Vr),w(e,Xr,t),w(e,Yr,t),S(Yr,Zr),w(e,en,t),an.m(e,t),w(e,on,t),rn.m(e,t),w(e,nn,t),w(e,sn,t),S(sn,tn),w(e,cn,t),w(e,ln,t),S(ln,pn),S(ln,hn),S(hn,fn),S(hn,dn),S(dn,mn),S(hn,gn),S(hn,vn),S(vn,un),S(hn,yn),S(hn,En),S(En,bn),S(ln,wn),w(e,Sn,t),Cn.m(e,t),w(e,Pn,t),w(e,Tn,t),S(Tn,xn),S(Tn,kn),S(kn,Rn),S(Tn,An),S(Tn,Ln),S(Ln,On),S(Tn,$n),w(e,Gn,t),Hn.m(e,t),w(e,Mn,t),w(e,Nn,t),w(e,Dn,t),w(e,jn,t),S(jn,zn),S(zn,Fn),S(jn,_n),w(e,Bn,t),w(e,In,t),S(In,Wn),w(e,Un,t),w(e,qn,t),S(qn,Kn),S(qn,Qn),S(Qn,Jn),S(qn,Vn),w(e,Xn,t),w(e,Yn,t),S(Yn,Zn),S(Zn,es),S(Yn,as),w(e,os,t),w(e,rs,t),S(rs,ns),S(ns,ss),S(ss,ts),S(ns,cs),S(ns,is),S(is,ls),S(ns,ps),S(ns,hs),S(ns,fs),S(ns,ds),S(ns,ms),S(ns,gs),S(gs,vs),S(ns,us),w(e,ys,t),Es.m(e,t),w(e,bs,t),ws.m(e,t),w(e,Ss,t),w(e,Cs,t),S(Cs,Ps),S(Cs,Ts),S(Ts,xs),S(Ts,ks),S(ks,Rs),S(Ts,As),S(Cs,Ls),w(e,Os,t),w(e,$s,t),w(e,Gs,t),w(e,Hs,t),S(Hs,Ms),S(Ms,Ns),S(Hs,Ds),w(e,js,t),w(e,zs,t),S(zs,Fs),S(zs,_s),S(_s,Bs),S(zs,Is),w(e,Ws,t),w(e,Us,t),S(Us,qs),S(Us,Ks),S(Ks,Qs),S(Us,Js),w(e,Vs,t),Xs.m(e,t),w(e,Ys,t),Zs.m(e,t),w(e,et,t),at.m(e,t),w(e,ot,t),w(e,rt,t),S(rt,nt),S(rt,st),S(st,tt),S(rt,ct),w(e,it,t),lt.m(e,t),w(e,pt,t),ht.m(e,t),w(e,ft,t),dt.m(e,t),w(e,mt,t),b(qt,e,t),gt=!0},p:C,i:function(e){gt||(P(Ut.$$.fragment,e),P(qt.$$.fragment,e),gt=!0)},o:function(e){T(Ut.$$.fragment,e),T(qt.$$.fragment,e),gt=!1},d:function(e){x(Ut,e),e&&u(a),e&&u(o),e&&u(n),e&&u(s),e&&u(R),e&&u(L),e&&u(N),e&&u(D),e&&u(W),e&&U.d(),e&&u(q),e&&u(K),e&&u(X),e&&u(Y),e&&u(ee),e&&u(ae),e&&u(re),e&&u(ne),e&&u(ie),e&&le.d(),e&&u(pe),e&&u(he),e&&u(de),e&&u(me),e&&u(ye),e&&Ee.d(),e&&u(be),e&&u(we),e&&u(Ce),e&&u(Pe),e&&u(Re),e&&Ae.d(),e&&u(Le),e&&u(Oe),e&&u($e),e&&u(Ge),e&&u(Fe),e&&u(_e),e&&u(Qe),e&&Je.d(),e&&u(Ve),e&&u(Xe),e&&u(sa),e&&ta.d(),e&&u(ca),e&&u(ia),e&&u(Ea),e&&u(ba),e&&u(Sa),e&&u(Ca),e&&u(Ta),e&&xa.d(),e&&u(ka),e&&Ra.d(),e&&u(Aa),e&&u(La),e&&u($a),e&&u(Ga),e&&u(_a),e&&Ba.d(),e&&u(Ia),e&&u(Wa),e&&u(qa),e&&u(Ka),e&&u(ao),e&&oo.d(),e&&u(ro),e&&u(no),e&&u(fo),e&&u(mo),e&&u(go),e&&u(vo),e&&u(Co),e&&u(Po),e&&u(Oo),e&&u($o),e&&u(Do),e&&jo.d(),e&&u(zo),e&&u(Fo),e&&u(er),e&&u(ar),e&&u(or),e&&u(rr),e&&u(pr),e&&u(hr),e&&u(vr),e&&ur.d(),e&&u(yr),e&&Er.d(),e&&u(br),e&&u(wr),e&&u(Cr),e&&u(Pr),e&&u(Rr),e&&Ar.d(),e&&u(Lr),e&&Or.d(),e&&u($r),e&&u(Gr),e&&u(Wr),e&&Ur.d(),e&&u(qr),e&&Kr.d(),e&&u(Qr),e&&u(Jr),e&&u(Xr),e&&u(Yr),e&&u(en),e&&an.d(),e&&u(on),e&&rn.d(),e&&u(nn),e&&u(sn),e&&u(cn),e&&u(ln),e&&u(Sn),e&&Cn.d(),e&&u(Pn),e&&u(Tn),e&&u(Gn),e&&Hn.d(),e&&u(Mn),e&&u(Nn),e&&u(Dn),e&&u(jn),e&&u(Bn),e&&u(In),e&&u(Un),e&&u(qn),e&&u(Xn),e&&u(Yn),e&&u(os),e&&u(rs),e&&u(ys),e&&Es.d(),e&&u(bs),e&&ws.d(),e&&u(Ss),e&&u(Cs),e&&u(Os),e&&u($s),e&&u(Gs),e&&u(Hs),e&&u(js),e&&u(zs),e&&u(Ws),e&&u(Us),e&&u(Vs),e&&Xs.d(),e&&u(Ys),e&&Zs.d(),e&&u(et),e&&at.d(),e&&u(ot),e&&u(rt),e&&u(it),e&&lt.d(),e&&u(pt),e&&ht.d(),e&&u(ft),e&&dt.d(),e&&u(mt),x(qt,e)}}}var $="Simplify the use of variables and the configuration of the framework.";export default(function(t){e(i,s);var c=L(i);function i(e){var s;return a(this,i),s=c.call(this),o(n(s),e,null,O,r,{}),s}return i}());
