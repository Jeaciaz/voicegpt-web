import{S as j,i as z,s as K,e as O,b as T,v as de,d as w,f as _e,g as k,h,C as he,D as be,E as ge,F as pe,k as p,q as B,a as q,l as v,m as E,r as C,c as A,n as d,G as b,u as X,y as N,z as S,A as D,B as P,J as V,K as ke,L as se,M as ve,N as we,H as Ee,o as Te,w as qe}from"../chunks/index.563170ca.js";function Ae(r){let e;const n=r[3].default,l=he(n,r,r[2],null);return{c(){l&&l.c()},l(t){l&&l.l(t)},m(t,s){l&&l.m(t,s),e=!0},p(t,s){l&&l.p&&(!e||s&4)&&be(l,n,t,t[2],e?pe(n,t[2],s,null):ge(t[2]),null)},i(t){e||(k(l,t),e=!0)},o(t){w(l,t),e=!1},d(t){l&&l.d(t)}}}function Ie(r){let e,n,l,t,s,u,i=r[1]&&re();const a=r[3].default,o=he(a,r,r[2],null);return{c(){e=p("label"),n=p("span"),l=B(r[0]),t=q(),i&&i.c(),s=q(),o&&o.c(),this.h()},l(f){e=v(f,"LABEL",{class:!0});var m=E(e);n=v(m,"SPAN",{class:!0});var c=E(n);l=C(c,r[0]),t=A(c),i&&i.l(c),c.forEach(h),s=A(m),o&&o.l(m),m.forEach(h),this.h()},h(){d(n,"class","text-sm text-slate-600 pl-1.5"),d(e,"class","flex flex-col")},m(f,m){T(f,e,m),b(e,n),b(n,l),b(n,t),i&&i.m(n,null),b(e,s),o&&o.m(e,null),u=!0},p(f,m){(!u||m&1)&&X(l,f[0]),f[1]?i||(i=re(),i.c(),i.m(n,null)):i&&(i.d(1),i=null),o&&o.p&&(!u||m&4)&&be(o,a,f,f[2],u?pe(a,f[2],m,null):ge(f[2]),null)},i(f){u||(k(o,f),u=!0)},o(f){w(o,f),u=!1},d(f){f&&h(e),i&&i.d(),o&&o.d(f)}}}function re(r){let e,n;return{c(){e=p("span"),n=B("*"),this.h()},l(l){e=v(l,"SPAN",{class:!0});var t=E(e);n=C(t,"*"),t.forEach(h),this.h()},h(){d(e,"class","text-sm text-red-500")},m(l,t){T(l,e,t),b(e,n)},d(l){l&&h(e)}}}function Me(r){let e,n,l,t;const s=[Ie,Ae],u=[];function i(a,o){return a[0]!==void 0?0:1}return e=i(r),n=u[e]=s[e](r),{c(){n.c(),l=O()},l(a){n.l(a),l=O()},m(a,o){u[e].m(a,o),T(a,l,o),t=!0},p(a,[o]){let f=e;e=i(a),e===f?u[e].p(a,o):(de(),w(u[f],1,1,()=>{u[f]=null}),_e(),n=u[e],n?n.p(a,o):(n=u[e]=s[e](a),n.c()),k(n,1),n.m(l.parentNode,l))},i(a){t||(k(n),t=!0)},o(a){w(n),t=!1},d(a){u[e].d(a),a&&h(l)}}}function Ne(r,e,n){let{$$slots:l={},$$scope:t}=e,{label:s=void 0}=e,{required:u=!1}=e;return r.$$set=i=>{"label"in i&&n(0,s=i.label),"required"in i&&n(1,u=i.required),"$$scope"in i&&n(2,t=i.$$scope)},[s,u,t,l]}class te extends j{constructor(e){super(),z(this,e,Ne,Me,K,{label:0,required:1})}}function Se(r){let e,n,l,t,s,u,i,a,o,f;return{c(){e=p("div"),n=p("span"),l=B(r[2]),t=q(),s=p("input"),u=q(),i=p("span"),a=B(r[1]),this.h()},l(m){e=v(m,"DIV",{class:!0});var c=E(e);n=v(c,"SPAN",{});var M=E(n);l=C(M,r[2]),M.forEach(h),t=A(c),s=v(c,"INPUT",{class:!0,type:!0,max:!0,min:!0,name:!0}),u=A(c),i=v(c,"SPAN",{});var F=E(i);a=C(F,r[1]),F.forEach(h),c.forEach(h),this.h()},h(){d(s,"class","mx-1 flex-1 accent-[var(--theme-button-color)]"),d(s,"type","range"),s.value=r[0],d(s,"max",r[1]),d(s,"min",r[2]),d(s,"name",r[3]),d(e,"class","flex text-sm")},m(m,c){T(m,e,c),b(e,n),b(n,l),b(e,t),b(e,s),b(e,u),b(e,i),b(i,a),o||(f=V(s,"input",r[6]),o=!0)},p(m,c){c&4&&X(l,m[2]),c&1&&(s.value=m[0]),c&2&&d(s,"max",m[1]),c&4&&d(s,"min",m[2]),c&8&&d(s,"name",m[3]),c&2&&X(a,m[1])},d(m){m&&h(e),o=!1,f()}}}function De(r){let e,n;return e=new te({props:{label:r[4]+": "+r[0],$$slots:{default:[Se]},$$scope:{ctx:r}}}),{c(){N(e.$$.fragment)},l(l){S(e.$$.fragment,l)},m(l,t){D(e,l,t),n=!0},p(l,[t]){const s={};t&17&&(s.label=l[4]+": "+l[0]),t&143&&(s.$$scope={dirty:t,ctx:l}),e.$set(s)},i(l){n||(k(e.$$.fragment,l),n=!0)},o(l){w(e.$$.fragment,l),n=!1},d(l){P(e,l)}}}function Pe(r,e,n){let{max:l}=e,{min:t}=e,{value:s=(l+t)/2}=e,{name:u=void 0}=e,{label:i=void 0}=e;function a(f){n(0,s=+f)}const o=f=>a(f.currentTarget.value);return r.$$set=f=>{"max"in f&&n(1,l=f.max),"min"in f&&n(2,t=f.min),"value"in f&&n(0,s=f.value),"name"in f&&n(3,u=f.name),"label"in f&&n(4,i=f.label)},[s,l,t,u,i,a,o]}class ue extends j{constructor(e){super(),z(this,e,Pe,De,K,{max:1,min:2,value:0,name:3,label:4})}}function ie(r,e,n){const l=r.slice();return l[3]=e[n].label,l[5]=e[n].value,l}function fe(r){let e,n;return e=new te({props:{label:r[3],$$slots:{default:[Fe]},$$scope:{ctx:r}}}),{c(){N(e.$$.fragment)},l(l){S(e.$$.fragment,l)},m(l,t){D(e,l,t),n=!0},p(l,t){const s={};t&8&&(s.label=l[3]),t&263&&(s.$$scope={dirty:t,ctx:l}),e.$set(s)},i(l){n||(k(e.$$.fragment,l),n=!0)},o(l){w(e.$$.fragment,l),n=!1},d(l){P(e,l)}}}function oe(r){let e,n,l=r[3]+"",t,s,u,i;function a(){return r[4](r[5])}return{c(){e=p("li"),n=p("button"),t=B(l),s=q(),this.h()},l(o){e=v(o,"LI",{class:!0});var f=E(e);n=v(f,"BUTTON",{type:!0,class:!0});var m=E(n);t=C(m,l),m.forEach(h),s=A(f),f.forEach(h),this.h()},h(){d(n,"type","button"),d(n,"class","item cursor-pointer svelte-fv5mem"),se(n,"selected",r[0]===r[5]),d(e,"class","[&:not(:last-child)]:mr-4")},m(o,f){T(o,e,f),b(e,n),b(n,t),b(e,s),u||(i=V(n,"click",a),u=!0)},p(o,f){r=o,f&4&&l!==(l=r[3]+"")&&X(t,l),f&5&&se(n,"selected",r[0]===r[5])},d(o){o&&h(e),u=!1,i()}}}function Fe(r){let e,n,l,t=r[2],s=[];for(let u=0;u<t.length;u+=1)s[u]=oe(ie(r,t,u));return{c(){e=p("ul");for(let u=0;u<s.length;u+=1)s[u].c();n=q(),l=p("input"),this.h()},l(u){e=v(u,"UL",{class:!0});var i=E(e);for(let a=0;a<s.length;a+=1)s[a].l(i);i.forEach(h),n=A(u),l=v(u,"INPUT",{type:!0,name:!0}),this.h()},h(){d(e,"class","flex flex-nowrap list-none overflow-auto max-w-full pt-1"),d(l,"type","hidden"),d(l,"name",r[1]),l.value=r[0]},m(u,i){T(u,e,i);for(let a=0;a<s.length;a+=1)s[a]&&s[a].m(e,null);T(u,n,i),T(u,l,i)},p(u,i){if(i&5){t=u[2];let a;for(a=0;a<t.length;a+=1){const o=ie(u,t,a);s[a]?s[a].p(o,i):(s[a]=oe(o),s[a].c(),s[a].m(e,null))}for(;a<s.length;a+=1)s[a].d(1);s.length=t.length}i&2&&d(l,"name",u[1]),i&1&&(l.value=u[0])},d(u){u&&h(e),ke(s,u),u&&h(n),u&&h(l)}}}function ye(r){let e,n,l=r[2].length>0&&fe(r);return{c(){l&&l.c(),e=O()},l(t){l&&l.l(t),e=O()},m(t,s){l&&l.m(t,s),T(t,e,s),n=!0},p(t,[s]){t[2].length>0?l?(l.p(t,s),s&4&&k(l,1)):(l=fe(t),l.c(),k(l,1),l.m(e.parentNode,e)):l&&(de(),w(l,1,1,()=>{l=null}),_e())},i(t){n||(k(l),n=!0)},o(t){w(l),n=!1},d(t){l&&l.d(t),t&&h(e)}}}function Le(r,e,n){let{name:l=void 0}=e,{options:t=[]}=e,{label:s=void 0}=e,{value:u=t[0].value}=e;const i=a=>n(0,u=a);return r.$$set=a=>{"name"in a&&n(1,l=a.name),"options"in a&&n(2,t=a.options),"label"in a&&n(3,s=a.label),"value"in a&&n(0,u=a.value)},[u,l,t,s,i]}class me extends j{constructor(e){super(),z(this,e,Le,ye,K,{name:1,options:2,label:3,value:0})}}function ce(r){let e,n=r[7].message+"",l;return{c(){e=p("span"),l=B(n),this.h()},l(t){e=v(t,"SPAN",{class:!0});var s=E(e);l=C(s,n),s.forEach(h),this.h()},h(){d(e,"class","text-xs text-red-500")},m(t,s){T(t,e,s),b(e,l)},p(t,s){s&128&&n!==(n=t[7].message+"")&&X(l,n)},d(t){t&&h(e)}}}function Ve(r){let e,n,l,t,s,u,i=r[8]&&r[7]!==void 0&&ce(r);return{c(){e=p("input"),l=q(),i&&i.c(),t=O(),this.h()},l(a){e=v(a,"INPUT",{type:!0,name:!0,placeholder:!0,class:!0,"aria-label":!0}),l=A(a),i&&i.l(a),t=O(),this.h()},h(){d(e,"type",r[6]),d(e,"name",r[4]),d(e,"placeholder",r[2]),e.disabled=r[3],e.required=r[5],e.value=r[0],d(e,"class",n="border border-[var(--theme-hint-color)] rounded-md p-1 focus-visible:border-[var(--theme-text-color)] outline-0 "+(r[8]?"invalid:border-red-500":"")+" "+(r[8]&&r[7]!==void 0?"border-red-500":"")),d(e,"aria-label",r[1])},m(a,o){T(a,e,o),T(a,l,o),i&&i.m(a,o),T(a,t,o),s||(u=[V(e,"input",r[10]),V(e,"change",r[12]),V(e,"focus",r[13]),V(e,"blur",r[14])],s=!0)},p(a,o){o&64&&d(e,"type",a[6]),o&16&&d(e,"name",a[4]),o&4&&d(e,"placeholder",a[2]),o&8&&(e.disabled=a[3]),o&32&&(e.required=a[5]),o&1&&e.value!==a[0]&&(e.value=a[0]),o&384&&n!==(n="border border-[var(--theme-hint-color)] rounded-md p-1 focus-visible:border-[var(--theme-text-color)] outline-0 "+(a[8]?"invalid:border-red-500":"")+" "+(a[8]&&a[7]!==void 0?"border-red-500":""))&&d(e,"class",n),o&2&&d(e,"aria-label",a[1]),a[8]&&a[7]!==void 0?i?i.p(a,o):(i=ce(a),i.c(),i.m(t.parentNode,t)):i&&(i.d(1),i=null)},d(a){a&&h(e),a&&h(l),i&&i.d(a),a&&h(t),s=!1,ve(u)}}}function Be(r){let e,n;return e=new te({props:{label:r[1],required:r[5],$$slots:{default:[Ve]},$$scope:{ctx:r}}}),{c(){N(e.$$.fragment)},l(l){S(e.$$.fragment,l)},m(l,t){D(e,l,t),n=!0},p(l,[t]){const s={};t&2&&(s.label=l[1]),t&32&&(s.required=l[5]),t&66047&&(s.$$scope={dirty:t,ctx:l}),e.$set(s)},i(l){n||(k(e.$$.fragment,l),n=!0)},o(l){w(e.$$.fragment,l),n=!1},d(l){P(e,l)}}}function Ce(r,e,n){let{label:l=void 0}=e,{value:t=""}=e,{placeholder:s=void 0}=e,{disabled:u=!1}=e,{name:i=void 0}=e,{required:a=!1}=e,{validate:o=void 0}=e,{type:f="text"}=e,m,c=!1;function M(_){return f.match(/^number|range$/)?+_:_}function F(_){n(7,m=o==null?void 0:o(M(_)))}function R(_){n(0,t=M(_.currentTarget.value))}const I=_=>F(_.currentTarget.value),y=()=>n(8,c=!1),J=()=>n(8,c=!0);return r.$$set=_=>{"label"in _&&n(1,l=_.label),"value"in _&&n(0,t=_.value),"placeholder"in _&&n(2,s=_.placeholder),"disabled"in _&&n(3,u=_.disabled),"name"in _&&n(4,i=_.name),"required"in _&&n(5,a=_.required),"validate"in _&&n(11,o=_.validate),"type"in _&&n(6,f=_.type)},[t,l,s,u,i,a,f,m,c,F,R,o,I,y,J]}class le extends j{constructor(e){super(),z(this,e,Ce,Be,K,{label:1,value:0,placeholder:2,disabled:3,name:4,required:5,validate:11,type:6})}}function Ue(r){let e,n,l,t,s,u,i,a,o,f,m,c,M,F,R,I,y,J,_,$,U,x,G,Y,ee,ne;return u=new le({props:{name:"prompt",label:"Запрос",placeholder:"elden ring, epic",required:!0}}),a=new le({props:{name:"negative-prompt",label:"Антизапрос",placeholder:"realism"}}),f=new me({props:{name:"dimensions",options:r[2],label:"Размер изображения: "}}),y=new me({props:{name:"sampler-method",options:r[1],label:"Метод семплера"}}),_=new ue({props:{name:"sampler-steps",min:20,max:40,label:"Шаги семплера"}}),U=new le({props:{name:"seed",label:"Seed",placeholder:"1234567890",type:"number"}}),G=new ue({props:{name:"cfg-scale",min:1,max:25,label:"CFG Scale"}}),{c(){e=p("h1"),n=B("TXT -> IMG"),l=q(),t=p("form"),s=p("div"),N(u.$$.fragment),i=q(),N(a.$$.fragment),o=q(),N(f.$$.fragment),m=q(),c=p("details"),M=p("summary"),F=B("Продвинутые опции"),R=q(),I=p("div"),N(y.$$.fragment),J=q(),N(_.$$.fragment),$=q(),N(U.$$.fragment),x=q(),N(G.$$.fragment),this.h()},l(g){e=v(g,"H1",{class:!0});var W=E(e);n=C(W,"TXT -> IMG"),W.forEach(h),l=A(g),t=v(g,"FORM",{class:!0});var H=E(t);s=v(H,"DIV",{class:!0});var Q=E(s);S(u.$$.fragment,Q),i=A(Q),S(a.$$.fragment,Q),Q.forEach(h),o=A(H),S(f.$$.fragment,H),m=A(H),c=v(H,"DETAILS",{});var Z=E(c);M=v(Z,"SUMMARY",{});var ae=E(M);F=C(ae,"Продвинутые опции"),ae.forEach(h),R=A(Z),I=v(Z,"DIV",{class:!0});var L=E(I);S(y.$$.fragment,L),J=A(L),S(_.$$.fragment,L),$=A(L),S(U.$$.fragment,L),x=A(L),S(G.$$.fragment,L),L.forEach(h),Z.forEach(h),H.forEach(h),this.h()},h(){d(e,"class","text-center text-3xl"),d(s,"class","grid grid-cols-2 gap-2 mt-4"),d(I,"class","grid gap-4"),d(t,"class","grid gap-4")},m(g,W){T(g,e,W),b(e,n),T(g,l,W),T(g,t,W),b(t,s),D(u,s,null),b(s,i),D(a,s,null),b(t,o),D(f,t,null),b(t,m),b(t,c),b(c,M),b(M,F),b(c,R),b(c,I),D(y,I,null),b(I,J),D(_,I,null),b(I,$),D(U,I,null),b(I,x),D(G,I,null),r[5](t),Y=!0,ee||(ne=[V(t,"submit",we(r[4])),V(t,"input",r[3])],ee=!0)},p:Ee,i(g){Y||(k(u.$$.fragment,g),k(a.$$.fragment,g),k(f.$$.fragment,g),k(y.$$.fragment,g),k(_.$$.fragment,g),k(U.$$.fragment,g),k(G.$$.fragment,g),Y=!0)},o(g){w(u.$$.fragment,g),w(a.$$.fragment,g),w(f.$$.fragment,g),w(y.$$.fragment,g),w(_.$$.fragment,g),w(U.$$.fragment,g),w(G.$$.fragment,g),Y=!1},d(g){g&&h(e),g&&h(l),g&&h(t),P(u),P(a),P(f),P(y),P(_),P(U),P(G),r[5](null),ee=!1,ve(ne)}}}function Ge(r,e,n){const l=[{label:"Euler 𝛼",value:"euler_a"},{label:"Heun",value:"heun"},{label:"DPM++ M2",value:"dpmpp_m2"},{label:"DDIM",value:"ddim"}],t=[{label:"Квадрат [512x512]",value:"square"},{label:"Портрет [512x768]",value:"portrait"},{label:"Пейзаж [768x512]",value:"landscape"}],s={square:{x:512,y:512},portrait:{x:512,y:768},landscape:{x:768,y:512}};let u;function i(){u.checkValidity()&&window.Telegram.WebApp.MainButton.enable()}function a(){window.Telegram.WebApp.MainButton.showProgress();const f={};new FormData(u).forEach((c,M)=>{f[M]=c}),f.dimensions=typeof f.dimensions=="string"&&f.dimensions in s?s[f.dimensions]:f.dimensions,window.Telegram.WebApp.sendData(JSON.stringify(f))}Te(()=>{window.Telegram.WebApp.MainButton.setText("Сгенерировать").onClick(()=>u.submit()).disable().show()});function o(f){qe[f?"unshift":"push"](()=>{u=f,n(0,u)})}return[u,l,t,i,a,o]}class He extends j{constructor(e){super(),z(this,e,Ge,Ue,K,{})}}export{He as default};