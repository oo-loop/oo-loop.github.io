import{S as e,i as a,s as o,H as r,J as n,D as s,r as t,e as c,l as i,E as l,u as p,a as h,b as f,m as d,d as m,f as g,I as v,F as u,g as y,o as E,v as b,t as w,k as S,G as C}from"./client.ad532357.js";import{P as T}from"./Pagination.a6fdcd3e.js";function P(e){let a,o,P,x,A,L,R,$,O,G,H,M,N,D,j,z,F,I,B,W,_,U,J,q,K,Q,V,X,Y,Z,ee,ae,oe,re,ne,se,te,ce,ie,le,pe,he,fe,de,me,ge,ve,ue,ye,Ee,be,we,Se,Ce,Te,Pe,ke,xe,Ae,Le,Re,$e,Oe,Ge,He,Me,Ne,De,je,ze,Fe,Ie,Be,We,_e,Ue,Je,qe,Ke,Qe,Ve,Xe,Ye,Ze,ea,aa,oa,ra,na,sa,ta,ca,ia,la,pa,ha,fa,da,ma,ga,va,ua,ya,Ea,ba,wa,Sa,Ca,Ta,Pa,ka,xa,Aa,La,Ra,$a,Oa,Ga,Ha,Ma,Na,Da,ja,za,Fa,Ia,Ba,Wa,_a,Ua,Ja,qa,Ka,Qa,Va,Xa,Ya,Za,eo,ao,oo,ro,no,so,to,co,io,lo,po,ho,fo,mo,go,vo,uo,yo,Eo,bo,wo,So,Co,To,Po,ko,xo,Ao,Lo,Ro,$o,Oo,Go,Ho,Mo,No,Do,jo,zo,Fo,Io,Bo,Wo,_o,Uo,Jo,qo,Ko,Qo,Vo,Xo,Yo,Zo,er,ar,or,rr,nr,sr,tr,cr,ir,lr,pr,hr,fr,dr,mr,gr,vr,ur,yr,Er,br,wr,Sr,Cr,Tr,Pr,kr,xr,Ar,Lr,Rr,$r,Or,Gr,Hr,Mr,Nr,Dr,jr,zr,Fr,Ir,Br,Wr,_r,Ur,Jr,qr,Kr,Qr,Vr,Xr,Yr,Zr,en,an,on,rn,nn,sn,tn,cn,ln,pn,hn,fn,dn,mn,gn,vn,un,yn,En,bn,wn,Sn,Cn,Tn,Pn,kn,xn,An,Ln,Rn,$n,On,Gn,Hn,Mn,Nn,Dn,jn,zn,Fn,In,Bn,Wn,_n,Un,Jn,qn,Kn,Qn,Vn,Xn,Yn,Zn,es,as,os,rs,ns,ss,ts,cs,is,ls,ps,hs,fs,ds,ms,gs,vs,us,ys,Es,bs,ws,Ss,Cs,Ts,Ps,ks,xs,As,Ls,Rs,$s,Os,Gs,Hs,Ms,Ns,Ds,js,zs,Fs,Is,Bs,Ws,_s,Us,Js,qs,Ks,Qs,Vs,Xs,Ys,Zs,et,at,ot,rt,nt,st,tt,ct,it,lt,pt,ht,ft,dt,mt,gt,vt=r("$ooLoop: (\n  // properties\n);\n","scss")+"",ut=r("breakpoints: (\n  xs: 30em,     // 480px\n  sm: 37.500em, // 600px\n  md: 60em,     // 960px\n  lg: 80em,     // 1280px\n  xl: 120em,    // 1980px\n),","scss")+"",yt=r("screens: (sm, md, lg),","scss")+"",Et=r("palette: (\n  'primary': #0ea7d6,\n  'secondary': #959595,\n),","scss")+"",bt=r("... : (\n  props: (\n    fontSize: 1.6em,    // camelCase\n    line-height: 1.375, // CSS kebab-case\n  )\n),\n","scss")+"",wt=r("// parenthesis wrapping CSS multiple value\n... : (\n  props: (\n    fontFamily: ('Helvetica Neue', 'Helvetica', 'Arial', sans-serif),\n    transition: (background-color 300ms ease-in-out, border-color 300ms ease-in-out)\n  )\n),\n","scss")+"",St=r("\nbody : (\n  props: (\n    font-size: (\n      rt: 1rem, // root value (default)\n      sm: 1.2rem, // value @sm \n    )\n  )\n),\n","scss")+"",Ct=r("/* Generating */\nbody {\n  font-size: 1rem;\n}\n@media (min-width: 37.500em) {\n  body {\n    font-size: 1.2rem;\n  }\n}\n","css")+"",Tt=r("\n... : (\n  props: (\n    font-size: 1rem,\n    'before': (\n      content: 'Tokyo –',\n      font-size: .8rem,\n    )\n  )\n),\n","scss")+"",Pt=r("\n... : (\n  props: (\n    font-size: 1rem,\n    '>': (\n      'li': ( // targetting <li>\n        margin-bottom: 10px,\n      ),\n      'li:last-child': ( // pseudo selector\n        border-bottom: 1px solid #ccc,\n      ),\n      '.active': ( // classname\n        font-weight: 700,\n      ),\n    )\n  )\n),\n","scss")+"",kt=r("... : (\n  states: (\n    hover: ( // CSS properties\n      color: #cdcdcd,\n      border: 1px solid #cdcdcd,\n    ),\n    focus: ( // CSS properties\n      color: blue,\n    ),\n  )\n),\n","scss")+"",xt=r("$ooLoop: (\n  palette: (\n    'primary': #0ea7d6,\n    'secondary': #959595,\n  ),\n  anchor: (\n    props: (\n      color: this('palette.primary'),\n    )\n  ),\n  ...\n);\n","scss")+"",At=r("/* will generate */\na {\n  color: #0ea7d6;\n}\n","css")+"",Lt=r("$ooLoop: (\n  palette: (\n    'primary': #0ea7d6,\n    'secondary': #959595,\n  ),\n\n  // utilities\n  color: (\n    font: (\n      prefix: 'color',\n      property: 'color',\n      values: (\n        _this('palette'),\n        (\n          'danger': red,\n        )\n      )\n    )\n  ),\n  ...\n);\n","scss")+"",Rt=r("/* will generate */\n.color-primary   { color: #0ea7d6 }\n.color-secondary { color: #959595 }\n.color-danger    { color: red }\n","css")+"",$t=r("$ooLoop: (\n  palette: (\n    'primary': #0ea7d6,\n    'secondary': #959595,\n  ),\n\n  // utilities\n  color: (\n    font: (\n      prefix: 'color',\n      property: 'color',\n      values: (\n        _this('palette.primary'),\n        (\n          'danger': red,\n        )\n      )\n    )\n  ),\n  ...\n);\n","scss")+"",Ot=r("/* will generate */\n.color-primary { color: #0ea7d6 }\n.color-danger  { color: red }\n","css")+"",Gt=r("$ooLoop: (\n  palette: (\n    'primary': #0ea7d6,\n    'secondary': #959595,\n    'warning': #f7f3c8,\n  ),\n\n  // utilities\n  color: (\n    font: (\n      prefix: 'color',\n      property: 'color',\n      values: (\n        _this('palette.primary'),\n        _this('palette.secondary'),\n        (\n          'danger': red,\n        )\n      )\n    )\n  ),\n  ...\n);\n","scss")+"",Ht=r("/* will generate */\n.color-primary { color: #0ea7d6 }\n.color-secondary { color: #959595 }\n.color-danger  { color: red }\n","css")+"",Mt=r("$ooLoop: (\n  palette: (\n    'primary': #0ea7d6,\n    'secondary': #959595,\n  ),\n  anchor: (\n    props: (\n      color: this('palette.primary'),\n    ),\n    states: (\n      hover: (\n        // this will throw an error\n        color: darken(this('anchor.props.color'), 12%),\n      ),\n      focus: (\n        // this works fine\n        color: darken(#0ea7d6, 12%);\n      )\n    )\n  ),\n  ...\n);\n","scss")+"",Nt=r("$ooLoop: (\n  palette: (\n    'primary': #0ea7d6,\n    'secondary': #959595,\n  ),\n  anchor: (\n    props: (\n      color: this('palette.primary'),\n    ),\n    states: (\n      hover: (\n        color: ooDarken(this('anchor.props.color'), 12%),\n      ),\n      focus: this('anchor.states.hover'),\n    )\n  ),\n  ...\n);\n","scss")+"",Dt=r("$ooLoop: (\n  palette: (\n    'primary': #0ea7d6,\n    'secondary': #959595,\n  ),\n  body: (\n    props: (\n      font-family: ('Helvetica Neue', Helvetica), // kebab-case\n    )\n  ),\n  ...\n);\n","scss")+"",jt=r(".hero {\n display: flex;\n height: 400px;\n\n /* Access kebab-case from camelCase */\n font-family: oo('body.props.fontFamily');\n\n background-color: oo('palette.primary');\n} ","css")+"",zt=r("$ooLoop: ooSet('store', (\n  fontFamily: (\n    serif: (Georgia, serif)\n  ),\n));\n@include ooCreate();\n","scss")+"",Ft=r(".hero {\n  display: flex;\n  height: 400px;\n  font-family: oo('store.fontFamily.serif');\n}\n","scss")+"",It=r("/* Will generate */\n.hero {\n  display: flex;\n  height: 400px;\n  font-family: Georgia, serif;\n}\n","css")+"",Bt=r("$ooLoop: ooSet('typo.fontFamily', (\n  values: (\n    serif: (Georgia, serif)\n  ),\n));\n@include ooCreate();\n","scss")+"",Wt=r(".hero {\n  display: flex;\n  height: 400px;\n  font-family: oo('typo.fontFamily.values.serif');\n}\n","scss")+"",_t=r("/* Will generate */\n.font-serif { font-family: Georgia, serif; !important }\n\n.hero {\n  display: flex;\n  height: 400px;\n  font-family: Georgia, serif;\n}\n","css")+"";const Ut=new n({props:{title:"Config map",description:k}}),Jt=new T({props:{href:"docs/importation",title:"Customize your Loop import",label:"Use what you need"}});return{c(){s(Ut.$$.fragment),a=t(),o=c("h1"),P=i("Loop Config Map"),x=t(),A=c("p"),L=i(k),R=t(),$=c("p"),O=i("Because going through a single "),G=c("i"),H=i("variables.scss"),M=i(" file can be tedious and remembering every names is becoming a challenge,\nLoop offers a single config map."),N=t(),D=c("p"),j=i("Every data are set "),z=c("strong"),F=i("inside"),I=i(" the variable "),B=c("code"),W=i("$ooLoop"),_=t(),J=t(),q=c("h2"),K=c("a"),Q=i("#"),V=i(" Global Properties"),X=t(),Y=c("p"),Z=i("The global properties are data to be refered to within your configuration to avoid duplicating them."),ee=t(),ae=c("h3"),oe=i("breakpoints"),re=t(),ne=c("p"),se=c("em"),te=i("Map"),ce=i(" - Available breakpoints in your project."),ie=t(),pe=t(),he=c("h3"),fe=i("screens"),de=t(),me=c("p"),ge=c("em"),ve=i("List"),ue=i(" - Set of responsive screens being globally used."),ye=t(),be=t(),we=c("h3"),Se=i("palette"),Ce=t(),Te=c("p"),Pe=c("em"),ke=i("Map"),xe=i(" - Available colors in your project."),Ae=t(),Re=t(),$e=c("hr"),Oe=t(),Ge=c("h2"),He=c("a"),Me=i("#"),Ne=t(),De=c("em"),je=i("Props"),ze=i(" Property"),Fe=t(),Ie=c("p"),Be=i("The "),We=c("em"),_e=i("props"),Ue=i(" property is reserved to pass a map of CSS properties within the config.\n"),Je=c("br"),qe=i("The properties can be written in pure css or in camelCase depending on your preferences."),Ke=t(),Ve=t(),Xe=c("p"),Ye=i("When a CSS value "),Ze=c("strong"),ea=i("is multiple"),aa=i(" (containing commas), make sure to wrap the whole value "),oa=c("strong"),ra=i("between parenthesis"),na=i("."),sa=t(),ca=t(),ia=c("p"),la=i("Core settings ("),pa=c("strong"),ha=i("body, headings, paragraph"),fa=i("...) are mainly using the "),da=c("em"),ma=i("props"),ga=i(" property to provide default styling.\nCheck the "),va=c("a"),ua=i("HTML elements documentation"),ya=i(" to know what they are and change them at your own will."),Ea=t(),ba=c("h3"),wa=i("Responsive value"),Sa=t(),Ca=c("p"),Ta=i("A property can accept a map of breakpoints to generate responsive values"),Pa=t(),xa=t(),La=t(),Ra=c("h3"),$a=i("Pseudo-elements"),Oa=t(),Ga=c("p"),Ha=i("Style pseudo-elements "),Ma=c("code"),Na=i("before"),Da=i(" and "),ja=c("code"),za=i("after"),Fa=i(" by using them as property names with a map of CSS properties as value."),Ia=t(),Wa=t(),_a=c("h3"),Ua=i("Child elements"),Ja=t(),qa=c("p"),Ka=i("Target nested elements from the key property "),Qa=c("code"),Va=i(">"),Xa=i(" having as value a "),Ya=c("strong"),Za=i("map of CSS selectors"),eo=i(" with CSS properties."),ao=t(),ro=t(),no=c("p"),so=i("Styling "),to=c("strong"),co=i("pseudo-elements"),io=i(" and "),lo=c("strong"),po=i("child-elements"),ho=i(" are mainly used when developing components from the Loop config."),fo=t(),mo=c("hr"),go=t(),vo=c("h2"),uo=c("a"),yo=i("#"),Eo=t(),bo=c("em"),wo=i("States"),So=i(" Property"),Co=t(),To=c("p"),Po=i("The "),ko=c("em"),xo=i("states"),Ao=i(" property is reserved to pass a map of Element states containing CSS properties.\n"),Lo=c("br"),Ro=i("The properties can be written in pure css or in camelCase depending on your preferences."),$o=t(),Oo=c("p"),Go=i("Any css state is available such as "),Ho=c("strong"),Mo=i("active, hover, focus, visited"),No=i("..."),Do=t(),zo=t(),Fo=c("p"),Io=i("Same as "),Bo=c("em"),Wo=i("props"),_o=i(", the rules for "),Uo=c("strong"),Jo=i("pseudo-elements"),qo=i(" and "),Ko=c("strong"),Qo=i("child-elements"),Vo=i(" also apply to "),Xo=c("em"),Yo=i("states"),Zo=i("."),er=t(),ar=c("hr"),or=t(),rr=c("h2"),nr=c("a"),sr=i("#"),tr=t(),cr=c("em"),ir=i("This"),lr=i(" Referer"),pr=t(),hr=c("p"),fr=i("The keyword "),dr=c("code"),mr=i("this()"),gr=i(" refers to a value in the context of the config map."),vr=t(),yr=t(),br=t(),wr=c("h3"),Sr=i("Spread operator"),Cr=t(),Tr=c("p"),Pr=i("Expand a map by referring a set of values in the context of the config map by using the operator "),kr=c("code"),xr=i("_this()"),Ar=t(),Rr=t(),Or=t(),Gr=c("p"),Hr=i("In the case where the expansion is "),Mr=c("strong"),Nr=i("targetting a single value"),Dr=i(", the "),jr=c("strong"),zr=i("last crumb "),Fr=i("of the path will be "),Ir=c("strong"),Br=i("used as the name"),Wr=i(" of its value."),_r=t(),Jr=t(),Kr=t(),Qr=c("h4"),Vr=i("Chaining"),Xr=t(),Yr=c("p"),Zr=i("Add as many spreads as needed"),en=t(),on=t(),nn=t(),sn=c("h3"),tn=i("Aliases"),cn=t(),ln=c("p"),pn=i("The config map not being initialized,\n"),hn=c("em"),fn=i("the use of sass functions "),dn=c("strong"),mn=i("along with"),gn=i(" the keyword "),vn=c("code"),un=i("this"),yn=t(),En=c("strong"),bn=i("cannot be performed"),wn=i(".\nThey are however working with regular values."),Sn=t(),Tn=t(),Pn=c("p"),kn=i("Aliases will help you overcome this problem and avoid repeating values already set.\nAt this stage, the few available are "),xn=c("code"),An=i("ooDarken"),Ln=i(" and "),Rn=c("code"),$n=i("ooLighten"),On=i("."),Gn=t(),Mn=t(),Nn=c("hr"),Dn=t(),jn=c("h2"),zn=c("a"),Fn=i("#"),In=i(" Access Data"),Bn=t(),Wn=c("p"),_n=i("Access any data of the config map during your development."),Un=t(),Jn=c("h3"),qn=i("oo("),Kn=c("span"),Qn=i("$path"),Vn=i(")"),Xn=t(),Yn=c("p"),Zn=c("em"),es=i("Function"),as=i(" - Get values from Loop config."),os=t(),rs=c("ul"),ns=c("li"),ss=c("strong"),ts=i("$path"),cs=t(),is=c("em"),ls=i("(string)"),ps=t(),hs=c("br"),fs=i("Concatenated path to a Loop config property.\n  "),ds=c("br"),ms=i("When accessing a value from "),gs=c("em"),vs=i("props"),us=i(", the kebab-case css property can be targetting with a camelCase name."),ys=t(),bs=t(),Ss=t(),Cs=c("p"),Ts=i("Make sure to "),Ps=c("strong"),ks=i("use "),xs=c("span"),As=i("oo()"),Ls=i(" after the initialization "),Rs=i("of the config map to have all the updated data."),$s=t(),Os=c("hr"),Gs=t(),Hs=c("h2"),Ms=c("a"),Ns=i("#"),Ds=i(" Store"),js=t(),zs=c("p"),Fs=i("Add your own data to the config map through the property "),Is=c("code"),Bs=i("store"),Ws=i(" to reuse them anywhere in your project."),_s=t(),Us=c("p"),Js=i("Those data "),qs=c("strong"),Ks=i("will not generate any CSS rules"),Qs=i(", It's just a way to set and access your project global values during your development."),Vs=t(),Ys=t(),et=t(),ot=t(),rt=c("p"),nt=i("On the contrary "),st=c("strong"),tt=i("not passing by store may generate extra rules"),ct=i("."),it=t(),pt=t(),ft=t(),mt=t(),s(Jt.$$.fragment),this.h()},l(e){l(Ut.$$.fragment,e),a=p(e),o=h(e,"H1",{});var r=f(o);P=d(r,"Loop Config Map"),r.forEach(m),x=p(e),A=h(e,"P",{class:!0});var n=f(A);L=d(n,k),n.forEach(m),R=p(e),$=h(e,"P",{});var s=f($);O=d(s,"Because going through a single "),G=h(s,"I",{});var t=f(G);H=d(t,"variables.scss"),t.forEach(m),M=d(s," file can be tedious and remembering every names is becoming a challenge,\nLoop offers a single config map."),s.forEach(m),N=p(e),D=h(e,"P",{});var c=f(D);j=d(c,"Every data are set "),z=h(c,"STRONG",{});var i=f(z);F=d(i,"inside"),i.forEach(m),I=d(c," the variable "),B=h(c,"CODE",{});var g=f(B);W=d(g,"$ooLoop"),g.forEach(m),c.forEach(m),_=p(e),J=p(e),q=h(e,"H2",{class:!0,id:!0});var v=f(q);K=h(v,"A",{href:!0});var u=f(K);Q=d(u,"#"),u.forEach(m),V=d(v," Global Properties"),v.forEach(m),X=p(e),Y=h(e,"P",{});var y=f(Y);Z=d(y,"The global properties are data to be refered to within your configuration to avoid duplicating them."),y.forEach(m),ee=p(e),ae=h(e,"H3",{class:!0});var E=f(ae);oe=d(E,"breakpoints"),E.forEach(m),re=p(e),ne=h(e,"P",{});var b=f(ne);se=h(b,"EM",{class:!0});var w=f(se);te=d(w,"Map"),w.forEach(m),ce=d(b," - Available breakpoints in your project."),b.forEach(m),ie=p(e),pe=p(e),he=h(e,"H3",{class:!0});var S=f(he);fe=d(S,"screens"),S.forEach(m),de=p(e),me=h(e,"P",{});var C=f(me);ge=h(C,"EM",{class:!0});var T=f(ge);ve=d(T,"List"),T.forEach(m),ue=d(C," - Set of responsive screens being globally used."),C.forEach(m),ye=p(e),be=p(e),we=h(e,"H3",{class:!0});var U=f(we);Se=d(U,"palette"),U.forEach(m),Ce=p(e),Te=h(e,"P",{});var le=f(Te);Pe=h(le,"EM",{class:!0});var Ee=f(Pe);ke=d(Ee,"Map"),Ee.forEach(m),xe=d(le," - Available colors in your project."),le.forEach(m),Ae=p(e),Re=p(e),$e=h(e,"HR",{}),Oe=p(e),Ge=h(e,"H2",{id:!0});var Le=f(Ge);He=h(Le,"A",{href:!0});var Qe=f(He);Me=d(Qe,"#"),Qe.forEach(m),Ne=p(Le),De=h(Le,"EM",{class:!0});var ta=f(De);je=d(ta,"Props"),ta.forEach(m),ze=d(Le," Property"),Le.forEach(m),Fe=p(e),Ie=h(e,"P",{});var ka=f(Ie);Be=d(ka,"The "),We=h(ka,"EM",{});var Aa=f(We);_e=d(Aa,"props"),Aa.forEach(m),Ue=d(ka," property is reserved to pass a map of CSS properties within the config.\n"),Je=h(ka,"BR",{}),qe=d(ka,"The properties can be written in pure css or in camelCase depending on your preferences."),ka.forEach(m),Ke=p(e),Ve=p(e),Xe=h(e,"P",{class:!0});var Ba=f(Xe);Ye=d(Ba,"When a CSS value "),Ze=h(Ba,"STRONG",{});var oo=f(Ze);ea=d(oo,"is multiple"),oo.forEach(m),aa=d(Ba," (containing commas), make sure to wrap the whole value "),oa=h(Ba,"STRONG",{});var jo=f(oa);ra=d(jo,"between parenthesis"),jo.forEach(m),na=d(Ba,"."),Ba.forEach(m),sa=p(e),ca=p(e),ia=h(e,"P",{class:!0});var ur=f(ia);la=d(ur,"Core settings ("),pa=h(ur,"STRONG",{});var Er=f(pa);ha=d(Er,"body, headings, paragraph"),Er.forEach(m),fa=d(ur,"...) are mainly using the "),da=h(ur,"EM",{});var Lr=f(da);ma=d(Lr,"props"),Lr.forEach(m),ga=d(ur," property to provide default styling.\nCheck the "),va=h(ur,"A",{href:!0,title:!0});var $r=f(va);ua=d($r,"HTML elements documentation"),$r.forEach(m),ya=d(ur," to know what they are and change them at your own will."),ur.forEach(m),Ea=p(e),ba=h(e,"H3",{});var Ur=f(ba);wa=d(Ur,"Responsive value"),Ur.forEach(m),Sa=p(e),Ca=h(e,"P",{});var qr=f(Ca);Ta=d(qr,"A property can accept a map of breakpoints to generate responsive values"),qr.forEach(m),Pa=p(e),xa=p(e),La=p(e),Ra=h(e,"H3",{class:!0});var an=f(Ra);$a=d(an,"Pseudo-elements"),an.forEach(m),Oa=p(e),Ga=h(e,"P",{});var rn=f(Ga);Ha=d(rn,"Style pseudo-elements "),Ma=h(rn,"CODE",{});var Cn=f(Ma);Na=d(Cn,"before"),Cn.forEach(m),Da=d(rn," and "),ja=h(rn,"CODE",{});var Hn=f(ja);za=d(Hn,"after"),Hn.forEach(m),Fa=d(rn," by using them as property names with a map of CSS properties as value."),rn.forEach(m),Ia=p(e),Wa=p(e),_a=h(e,"H3",{class:!0});var Es=f(_a);Ua=d(Es,"Child elements"),Es.forEach(m),Ja=p(e),qa=h(e,"P",{});var ws=f(qa);Ka=d(ws,"Target nested elements from the key property "),Qa=h(ws,"CODE",{});var Xs=f(Qa);Va=d(Xs,">"),Xs.forEach(m),Xa=d(ws," having as value a "),Ya=h(ws,"STRONG",{});var Zs=f(Ya);Za=d(Zs,"map of CSS selectors"),Zs.forEach(m),eo=d(ws," with CSS properties."),ws.forEach(m),ao=p(e),ro=p(e),no=h(e,"P",{class:!0});var at=f(no);so=d(at,"Styling "),to=h(at,"STRONG",{});var lt=f(to);co=d(lt,"pseudo-elements"),lt.forEach(m),io=d(at," and "),lo=h(at,"STRONG",{});var ht=f(lo);po=d(ht,"child-elements"),ht.forEach(m),ho=d(at," are mainly used when developing components from the Loop config."),at.forEach(m),fo=p(e),mo=h(e,"HR",{}),go=p(e),vo=h(e,"H2",{id:!0});var dt=f(vo);uo=h(dt,"A",{href:!0});var gt=f(uo);yo=d(gt,"#"),gt.forEach(m),Eo=p(dt),bo=h(dt,"EM",{class:!0});var vt=f(bo);wo=d(vt,"States"),vt.forEach(m),So=d(dt," Property"),dt.forEach(m),Co=p(e),To=h(e,"P",{});var ut=f(To);Po=d(ut,"The "),ko=h(ut,"EM",{});var yt=f(ko);xo=d(yt,"states"),yt.forEach(m),Ao=d(ut," property is reserved to pass a map of Element states containing CSS properties.\n"),Lo=h(ut,"BR",{}),Ro=d(ut,"The properties can be written in pure css or in camelCase depending on your preferences."),ut.forEach(m),$o=p(e),Oo=h(e,"P",{});var Et=f(Oo);Go=d(Et,"Any css state is available such as "),Ho=h(Et,"STRONG",{});var bt=f(Ho);Mo=d(bt,"active, hover, focus, visited"),bt.forEach(m),No=d(Et,"..."),Et.forEach(m),Do=p(e),zo=p(e),Fo=h(e,"P",{class:!0});var wt=f(Fo);Io=d(wt,"Same as "),Bo=h(wt,"EM",{});var St=f(Bo);Wo=d(St,"props"),St.forEach(m),_o=d(wt,", the rules for "),Uo=h(wt,"STRONG",{});var Ct=f(Uo);Jo=d(Ct,"pseudo-elements"),Ct.forEach(m),qo=d(wt," and "),Ko=h(wt,"STRONG",{});var Tt=f(Ko);Qo=d(Tt,"child-elements"),Tt.forEach(m),Vo=d(wt," also apply to "),Xo=h(wt,"EM",{});var Pt=f(Xo);Yo=d(Pt,"states"),Pt.forEach(m),Zo=d(wt,"."),wt.forEach(m),er=p(e),ar=h(e,"HR",{}),or=p(e),rr=h(e,"H2",{id:!0});var kt=f(rr);nr=h(kt,"A",{href:!0});var xt=f(nr);sr=d(xt,"#"),xt.forEach(m),tr=p(kt),cr=h(kt,"EM",{class:!0});var At=f(cr);ir=d(At,"This"),At.forEach(m),lr=d(kt," Referer"),kt.forEach(m),pr=p(e),hr=h(e,"P",{});var Lt=f(hr);fr=d(Lt,"The keyword "),dr=h(Lt,"CODE",{});var Rt=f(dr);mr=d(Rt,"this()"),Rt.forEach(m),gr=d(Lt," refers to a value in the context of the config map."),Lt.forEach(m),vr=p(e),yr=p(e),br=p(e),wr=h(e,"H3",{class:!0});var $t=f(wr);Sr=d($t,"Spread operator"),$t.forEach(m),Cr=p(e),Tr=h(e,"P",{});var Ot=f(Tr);Pr=d(Ot,"Expand a map by referring a set of values in the context of the config map by using the operator "),kr=h(Ot,"CODE",{});var Gt=f(kr);xr=d(Gt,"_this()"),Gt.forEach(m),Ot.forEach(m),Ar=p(e),Rr=p(e),Or=p(e),Gr=h(e,"P",{class:!0});var Ht=f(Gr);Hr=d(Ht,"In the case where the expansion is "),Mr=h(Ht,"STRONG",{});var Mt=f(Mr);Nr=d(Mt,"targetting a single value"),Mt.forEach(m),Dr=d(Ht,", the "),jr=h(Ht,"STRONG",{});var Nt=f(jr);zr=d(Nt,"last crumb "),Nt.forEach(m),Fr=d(Ht,"of the path will be "),Ir=h(Ht,"STRONG",{});var Dt=f(Ir);Br=d(Dt,"used as the name"),Dt.forEach(m),Wr=d(Ht," of its value."),Ht.forEach(m),_r=p(e),Jr=p(e),Kr=p(e),Qr=h(e,"H4",{});var jt=f(Qr);Vr=d(jt,"Chaining"),jt.forEach(m),Xr=p(e),Yr=h(e,"P",{});var zt=f(Yr);Zr=d(zt,"Add as many spreads as needed"),zt.forEach(m),en=p(e),on=p(e),nn=p(e),sn=h(e,"H3",{class:!0});var Ft=f(sn);tn=d(Ft,"Aliases"),Ft.forEach(m),cn=p(e),ln=h(e,"P",{});var It=f(ln);pn=d(It,"The config map not being initialized,\n"),hn=h(It,"EM",{class:!0});var Bt=f(hn);fn=d(Bt,"the use of sass functions "),dn=h(Bt,"STRONG",{});var Wt=f(dn);mn=d(Wt,"along with"),Wt.forEach(m),gn=d(Bt," the keyword "),vn=h(Bt,"CODE",{});var _t=f(vn);un=d(_t,"this"),_t.forEach(m),yn=p(Bt),En=h(Bt,"STRONG",{});var qt=f(En);bn=d(qt,"cannot be performed"),qt.forEach(m),Bt.forEach(m),wn=d(It,".\nThey are however working with regular values."),It.forEach(m),Sn=p(e),Tn=p(e),Pn=h(e,"P",{class:!0});var Kt=f(Pn);kn=d(Kt,"Aliases will help you overcome this problem and avoid repeating values already set.\nAt this stage, the few available are "),xn=h(Kt,"CODE",{});var Qt=f(xn);An=d(Qt,"ooDarken"),Qt.forEach(m),Ln=d(Kt," and "),Rn=h(Kt,"CODE",{});var Vt=f(Rn);$n=d(Vt,"ooLighten"),Vt.forEach(m),On=d(Kt,"."),Kt.forEach(m),Gn=p(e),Mn=p(e),Nn=h(e,"HR",{}),Dn=p(e),jn=h(e,"H2",{id:!0});var Xt=f(jn);zn=h(Xt,"A",{href:!0});var Yt=f(zn);Fn=d(Yt,"#"),Yt.forEach(m),In=d(Xt," Access Data"),Xt.forEach(m),Bn=p(e),Wn=h(e,"P",{});var Zt=f(Wn);_n=d(Zt,"Access any data of the config map during your development."),Zt.forEach(m),Un=p(e),Jn=h(e,"H3",{class:!0,id:!0});var ec=f(Jn);qn=d(ec,"oo("),Kn=h(ec,"SPAN",{class:!0});var ac=f(Kn);Qn=d(ac,"$path"),ac.forEach(m),Vn=d(ec,")"),ec.forEach(m),Xn=p(e),Yn=h(e,"P",{});var oc=f(Yn);Zn=h(oc,"EM",{class:!0});var rc=f(Zn);es=d(rc,"Function"),rc.forEach(m),as=d(oc," - Get values from Loop config."),oc.forEach(m),os=p(e),rs=h(e,"UL",{});var nc=f(rs);ns=h(nc,"LI",{class:!0});var sc=f(ns);ss=h(sc,"STRONG",{});var tc=f(ss);ts=d(tc,"$path"),tc.forEach(m),cs=p(sc),is=h(sc,"EM",{class:!0});var cc=f(is);ls=d(cc,"(string)"),cc.forEach(m),ps=p(sc),hs=h(sc,"BR",{}),fs=d(sc,"Concatenated path to a Loop config property.\n  "),ds=h(sc,"BR",{}),ms=d(sc,"When accessing a value from "),gs=h(sc,"EM",{});var ic=f(gs);vs=d(ic,"props"),ic.forEach(m),us=d(sc,", the kebab-case css property can be targetting with a camelCase name."),sc.forEach(m),nc.forEach(m),ys=p(e),bs=p(e),Ss=p(e),Cs=h(e,"P",{class:!0});var lc=f(Cs);Ts=d(lc,"Make sure to "),Ps=h(lc,"STRONG",{});var pc=f(Ps);ks=d(pc,"use "),xs=h(pc,"SPAN",{class:!0});var hc=f(xs);As=d(hc,"oo()"),hc.forEach(m),Ls=d(pc," after the initialization "),pc.forEach(m),Rs=d(lc,"of the config map to have all the updated data."),lc.forEach(m),$s=p(e),Os=h(e,"HR",{}),Gs=p(e),Hs=h(e,"H2",{id:!0});var fc=f(Hs);Ms=h(fc,"A",{href:!0});var dc=f(Ms);Ns=d(dc,"#"),dc.forEach(m),Ds=d(fc," Store"),fc.forEach(m),js=p(e),zs=h(e,"P",{});var mc=f(zs);Fs=d(mc,"Add your own data to the config map through the property "),Is=h(mc,"CODE",{});var gc=f(Is);Bs=d(gc,"store"),gc.forEach(m),Ws=d(mc," to reuse them anywhere in your project."),mc.forEach(m),_s=p(e),Us=h(e,"P",{});var vc=f(Us);Js=d(vc,"Those data "),qs=h(vc,"STRONG",{});var uc=f(qs);Ks=d(uc,"will not generate any CSS rules"),uc.forEach(m),Qs=d(vc,", It's just a way to set and access your project global values during your development."),vc.forEach(m),Vs=p(e),Ys=p(e),et=p(e),ot=p(e),rt=h(e,"P",{});var yc=f(rt);nt=d(yc,"On the contrary "),st=h(yc,"STRONG",{});var Ec=f(st);tt=d(Ec,"not passing by store may generate extra rules"),Ec.forEach(m),ct=d(yc,"."),yc.forEach(m),it=p(e),pt=p(e),ft=p(e),mt=p(e),l(Jt.$$.fragment,e),this.h()},h(){g(A,"class","font-large"),U=new v(vt,J),g(K,"href","docs/config#global"),g(q,"class","mt-45"),g(q,"id","global"),g(ae,"class","h4 mt-30 font-code"),g(se,"class","text-uppercase font-small"),le=new v(ut,pe),g(he,"class","h4 mt-30 font-code"),g(ge,"class","text-uppercase font-small"),Ee=new v(yt,be),g(we,"class","h4 mt-30 font-code"),g(Pe,"class","text-uppercase font-small"),Le=new v(Et,Re),g(He,"href","docs/config#props"),g(De,"class","font-regular"),g(Ge,"id","props"),Qe=new v(bt,Ve),g(Xe,"class","mt-30"),ta=new v(wt,ca),g(va,"href","docs/html-elements"),g(va,"title","HTML elements documentation"),g(ia,"class","mt-30"),ka=new v(St,xa),Aa=new v(Ct,La),g(Ra,"class","mt-30"),Ba=new v(Tt,Wa),g(_a,"class","mt-30"),oo=new v(Pt,ro),g(no,"class","info"),g(uo,"href","docs/config#states"),g(bo,"class","font-regular"),g(vo,"id","states"),jo=new v(kt,zo),g(Fo,"class","info"),g(nr,"href","docs/config#this"),g(cr,"class","font-regular"),g(rr,"id","this"),ur=new v(xt,yr),Er=new v(At,br),g(wr,"class","mt-45"),Lr=new v(Lt,Rr),$r=new v(Rt,Or),g(Gr,"class","info mt-30 mb-30"),Ur=new v($t,Jr),qr=new v(Ot,Kr),an=new v(Gt,on),rn=new v(Ht,nn),g(sn,"class","mt-45"),g(hn,"class","color-danger"),Cn=new v(Mt,Tn),g(Pn,"class","mt-30"),Hn=new v(Nt,Mn),g(zn,"href","docs/config#access"),g(jn,"id","access"),g(Kn,"class","color-primary"),g(Jn,"class","h4 font-code"),g(Jn,"id","oo"),g(Zn,"class","text-uppercase font-small"),g(is,"class","font-monospace"),g(ns,"class","mb-10"),Es=new v(Dt,bs),ws=new v(jt,Ss),g(xs,"class","color-primary"),g(Cs,"class","info mt-15"),g(Ms,"href","docs/config#store"),g(Hs,"id","store"),Xs=new v(zt,Ys),Zs=new v(Ft,et),at=new v(It,ot),lt=new v(Bt,pt),ht=new v(Wt,ft),dt=new v(_t,mt)},m(e,r){u(Ut,e,r),y(e,a,r),y(e,o,r),E(o,P),y(e,x,r),y(e,A,r),E(A,L),y(e,R,r),y(e,$,r),E($,O),E($,G),E(G,H),E($,M),y(e,N,r),y(e,D,r),E(D,j),E(D,z),E(z,F),E(D,I),E(D,B),E(B,W),y(e,_,r),U.m(e,r),y(e,J,r),y(e,q,r),E(q,K),E(K,Q),E(q,V),y(e,X,r),y(e,Y,r),E(Y,Z),y(e,ee,r),y(e,ae,r),E(ae,oe),y(e,re,r),y(e,ne,r),E(ne,se),E(se,te),E(ne,ce),y(e,ie,r),le.m(e,r),y(e,pe,r),y(e,he,r),E(he,fe),y(e,de,r),y(e,me,r),E(me,ge),E(ge,ve),E(me,ue),y(e,ye,r),Ee.m(e,r),y(e,be,r),y(e,we,r),E(we,Se),y(e,Ce,r),y(e,Te,r),E(Te,Pe),E(Pe,ke),E(Te,xe),y(e,Ae,r),Le.m(e,r),y(e,Re,r),y(e,$e,r),y(e,Oe,r),y(e,Ge,r),E(Ge,He),E(He,Me),E(Ge,Ne),E(Ge,De),E(De,je),E(Ge,ze),y(e,Fe,r),y(e,Ie,r),E(Ie,Be),E(Ie,We),E(We,_e),E(Ie,Ue),E(Ie,Je),E(Ie,qe),y(e,Ke,r),Qe.m(e,r),y(e,Ve,r),y(e,Xe,r),E(Xe,Ye),E(Xe,Ze),E(Ze,ea),E(Xe,aa),E(Xe,oa),E(oa,ra),E(Xe,na),y(e,sa,r),ta.m(e,r),y(e,ca,r),y(e,ia,r),E(ia,la),E(ia,pa),E(pa,ha),E(ia,fa),E(ia,da),E(da,ma),E(ia,ga),E(ia,va),E(va,ua),E(ia,ya),y(e,Ea,r),y(e,ba,r),E(ba,wa),y(e,Sa,r),y(e,Ca,r),E(Ca,Ta),y(e,Pa,r),ka.m(e,r),y(e,xa,r),Aa.m(e,r),y(e,La,r),y(e,Ra,r),E(Ra,$a),y(e,Oa,r),y(e,Ga,r),E(Ga,Ha),E(Ga,Ma),E(Ma,Na),E(Ga,Da),E(Ga,ja),E(ja,za),E(Ga,Fa),y(e,Ia,r),Ba.m(e,r),y(e,Wa,r),y(e,_a,r),E(_a,Ua),y(e,Ja,r),y(e,qa,r),E(qa,Ka),E(qa,Qa),E(Qa,Va),E(qa,Xa),E(qa,Ya),E(Ya,Za),E(qa,eo),y(e,ao,r),oo.m(e,r),y(e,ro,r),y(e,no,r),E(no,so),E(no,to),E(to,co),E(no,io),E(no,lo),E(lo,po),E(no,ho),y(e,fo,r),y(e,mo,r),y(e,go,r),y(e,vo,r),E(vo,uo),E(uo,yo),E(vo,Eo),E(vo,bo),E(bo,wo),E(vo,So),y(e,Co,r),y(e,To,r),E(To,Po),E(To,ko),E(ko,xo),E(To,Ao),E(To,Lo),E(To,Ro),y(e,$o,r),y(e,Oo,r),E(Oo,Go),E(Oo,Ho),E(Ho,Mo),E(Oo,No),y(e,Do,r),jo.m(e,r),y(e,zo,r),y(e,Fo,r),E(Fo,Io),E(Fo,Bo),E(Bo,Wo),E(Fo,_o),E(Fo,Uo),E(Uo,Jo),E(Fo,qo),E(Fo,Ko),E(Ko,Qo),E(Fo,Vo),E(Fo,Xo),E(Xo,Yo),E(Fo,Zo),y(e,er,r),y(e,ar,r),y(e,or,r),y(e,rr,r),E(rr,nr),E(nr,sr),E(rr,tr),E(rr,cr),E(cr,ir),E(rr,lr),y(e,pr,r),y(e,hr,r),E(hr,fr),E(hr,dr),E(dr,mr),E(hr,gr),y(e,vr,r),ur.m(e,r),y(e,yr,r),Er.m(e,r),y(e,br,r),y(e,wr,r),E(wr,Sr),y(e,Cr,r),y(e,Tr,r),E(Tr,Pr),E(Tr,kr),E(kr,xr),y(e,Ar,r),Lr.m(e,r),y(e,Rr,r),$r.m(e,r),y(e,Or,r),y(e,Gr,r),E(Gr,Hr),E(Gr,Mr),E(Mr,Nr),E(Gr,Dr),E(Gr,jr),E(jr,zr),E(Gr,Fr),E(Gr,Ir),E(Ir,Br),E(Gr,Wr),y(e,_r,r),Ur.m(e,r),y(e,Jr,r),qr.m(e,r),y(e,Kr,r),y(e,Qr,r),E(Qr,Vr),y(e,Xr,r),y(e,Yr,r),E(Yr,Zr),y(e,en,r),an.m(e,r),y(e,on,r),rn.m(e,r),y(e,nn,r),y(e,sn,r),E(sn,tn),y(e,cn,r),y(e,ln,r),E(ln,pn),E(ln,hn),E(hn,fn),E(hn,dn),E(dn,mn),E(hn,gn),E(hn,vn),E(vn,un),E(hn,yn),E(hn,En),E(En,bn),E(ln,wn),y(e,Sn,r),Cn.m(e,r),y(e,Tn,r),y(e,Pn,r),E(Pn,kn),E(Pn,xn),E(xn,An),E(Pn,Ln),E(Pn,Rn),E(Rn,$n),E(Pn,On),y(e,Gn,r),Hn.m(e,r),y(e,Mn,r),y(e,Nn,r),y(e,Dn,r),y(e,jn,r),E(jn,zn),E(zn,Fn),E(jn,In),y(e,Bn,r),y(e,Wn,r),E(Wn,_n),y(e,Un,r),y(e,Jn,r),E(Jn,qn),E(Jn,Kn),E(Kn,Qn),E(Jn,Vn),y(e,Xn,r),y(e,Yn,r),E(Yn,Zn),E(Zn,es),E(Yn,as),y(e,os,r),y(e,rs,r),E(rs,ns),E(ns,ss),E(ss,ts),E(ns,cs),E(ns,is),E(is,ls),E(ns,ps),E(ns,hs),E(ns,fs),E(ns,ds),E(ns,ms),E(ns,gs),E(gs,vs),E(ns,us),y(e,ys,r),Es.m(e,r),y(e,bs,r),ws.m(e,r),y(e,Ss,r),y(e,Cs,r),E(Cs,Ts),E(Cs,Ps),E(Ps,ks),E(Ps,xs),E(xs,As),E(Ps,Ls),E(Cs,Rs),y(e,$s,r),y(e,Os,r),y(e,Gs,r),y(e,Hs,r),E(Hs,Ms),E(Ms,Ns),E(Hs,Ds),y(e,js,r),y(e,zs,r),E(zs,Fs),E(zs,Is),E(Is,Bs),E(zs,Ws),y(e,_s,r),y(e,Us,r),E(Us,Js),E(Us,qs),E(qs,Ks),E(Us,Qs),y(e,Vs,r),Xs.m(e,r),y(e,Ys,r),Zs.m(e,r),y(e,et,r),at.m(e,r),y(e,ot,r),y(e,rt,r),E(rt,nt),E(rt,st),E(st,tt),E(rt,ct),y(e,it,r),lt.m(e,r),y(e,pt,r),ht.m(e,r),y(e,ft,r),dt.m(e,r),y(e,mt,r),u(Jt,e,r),gt=!0},p:b,i(e){gt||(w(Ut.$$.fragment,e),w(Jt.$$.fragment,e),gt=!0)},o(e){S(Ut.$$.fragment,e),S(Jt.$$.fragment,e),gt=!1},d(e){C(Ut,e),e&&m(a),e&&m(o),e&&m(x),e&&m(A),e&&m(R),e&&m($),e&&m(N),e&&m(D),e&&m(_),e&&U.d(),e&&m(J),e&&m(q),e&&m(X),e&&m(Y),e&&m(ee),e&&m(ae),e&&m(re),e&&m(ne),e&&m(ie),e&&le.d(),e&&m(pe),e&&m(he),e&&m(de),e&&m(me),e&&m(ye),e&&Ee.d(),e&&m(be),e&&m(we),e&&m(Ce),e&&m(Te),e&&m(Ae),e&&Le.d(),e&&m(Re),e&&m($e),e&&m(Oe),e&&m(Ge),e&&m(Fe),e&&m(Ie),e&&m(Ke),e&&Qe.d(),e&&m(Ve),e&&m(Xe),e&&m(sa),e&&ta.d(),e&&m(ca),e&&m(ia),e&&m(Ea),e&&m(ba),e&&m(Sa),e&&m(Ca),e&&m(Pa),e&&ka.d(),e&&m(xa),e&&Aa.d(),e&&m(La),e&&m(Ra),e&&m(Oa),e&&m(Ga),e&&m(Ia),e&&Ba.d(),e&&m(Wa),e&&m(_a),e&&m(Ja),e&&m(qa),e&&m(ao),e&&oo.d(),e&&m(ro),e&&m(no),e&&m(fo),e&&m(mo),e&&m(go),e&&m(vo),e&&m(Co),e&&m(To),e&&m($o),e&&m(Oo),e&&m(Do),e&&jo.d(),e&&m(zo),e&&m(Fo),e&&m(er),e&&m(ar),e&&m(or),e&&m(rr),e&&m(pr),e&&m(hr),e&&m(vr),e&&ur.d(),e&&m(yr),e&&Er.d(),e&&m(br),e&&m(wr),e&&m(Cr),e&&m(Tr),e&&m(Ar),e&&Lr.d(),e&&m(Rr),e&&$r.d(),e&&m(Or),e&&m(Gr),e&&m(_r),e&&Ur.d(),e&&m(Jr),e&&qr.d(),e&&m(Kr),e&&m(Qr),e&&m(Xr),e&&m(Yr),e&&m(en),e&&an.d(),e&&m(on),e&&rn.d(),e&&m(nn),e&&m(sn),e&&m(cn),e&&m(ln),e&&m(Sn),e&&Cn.d(),e&&m(Tn),e&&m(Pn),e&&m(Gn),e&&Hn.d(),e&&m(Mn),e&&m(Nn),e&&m(Dn),e&&m(jn),e&&m(Bn),e&&m(Wn),e&&m(Un),e&&m(Jn),e&&m(Xn),e&&m(Yn),e&&m(os),e&&m(rs),e&&m(ys),e&&Es.d(),e&&m(bs),e&&ws.d(),e&&m(Ss),e&&m(Cs),e&&m($s),e&&m(Os),e&&m(Gs),e&&m(Hs),e&&m(js),e&&m(zs),e&&m(_s),e&&m(Us),e&&m(Vs),e&&Xs.d(),e&&m(Ys),e&&Zs.d(),e&&m(et),e&&at.d(),e&&m(ot),e&&m(rt),e&&m(it),e&&lt.d(),e&&m(pt),e&&ht.d(),e&&m(ft),e&&dt.d(),e&&m(mt),C(Jt,e)}}}const k="Simplify the use of variables and the configuration of the framework.";export default class extends e{constructor(e){super(),a(this,e,null,P,o,{})}}
