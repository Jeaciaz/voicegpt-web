import{S as K,i as Y,s as Q,e as J,b as M,v as ve,d as q,f as pe,g as k,h as _,C as we,D as ke,E as Ee,F as Te,k as v,q as C,a as T,l as p,m as E,r as O,c as V,n as d,G as h,u as z,y as N,z as I,A as S,B as F,L as U,J as qe,M as oe,N as Ve,O as Me,H as Pe,o as Ae,P as De,w as Ne}from"../chunks/index.261427c6.js";function Ie(u){let e;const t=u[3].default,l=we(t,u,u[2],null);return{c(){l&&l.c()},l(n){l&&l.l(n)},m(n,a){l&&l.m(n,a),e=!0},p(n,a){l&&l.p&&(!e||a&4)&&ke(l,t,n,n[2],e?Te(t,n[2],a,null):Ee(n[2]),null)},i(n){e||(k(l,n),e=!0)},o(n){q(l,n),e=!1},d(n){l&&l.d(n)}}}function Se(u){let e,t,l,n,a,r,i=u[1]&&me();const s=u[3].default,f=we(s,u,u[2],null);return{c(){e=v("label"),t=v("span"),l=C(u[0]),n=T(),i&&i.c(),a=T(),f&&f.c(),this.h()},l(m){e=p(m,"LABEL",{class:!0});var c=E(e);t=p(c,"SPAN",{class:!0});var o=E(t);l=O(o,u[0]),n=V(o),i&&i.l(o),o.forEach(_),a=V(c),f&&f.l(c),c.forEach(_),this.h()},h(){d(t,"class","text-sm text-[var(--theme-hint-color)] pl-1.5"),d(e,"class","flex flex-col")},m(m,c){M(m,e,c),h(e,t),h(t,l),h(t,n),i&&i.m(t,null),h(e,a),f&&f.m(e,null),r=!0},p(m,c){(!r||c&1)&&z(l,m[0]),m[1]?i||(i=me(),i.c(),i.m(t,null)):i&&(i.d(1),i=null),f&&f.p&&(!r||c&4)&&ke(f,s,m,m[2],r?Te(s,m[2],c,null):Ee(m[2]),null)},i(m){r||(k(f,m),r=!0)},o(m){q(f,m),r=!1},d(m){m&&_(e),i&&i.d(),f&&f.d(m)}}}function me(u){let e,t;return{c(){e=v("span"),t=C("*"),this.h()},l(l){e=p(l,"SPAN",{class:!0});var n=E(e);t=O(n,"*"),n.forEach(_),this.h()},h(){d(e,"class","text-sm text-red-500")},m(l,n){M(l,e,n),h(e,t)},d(l){l&&_(e)}}}function Fe(u){let e,t,l,n;const a=[Se,Ie],r=[];function i(s,f){return s[0]!==void 0?0:1}return e=i(u),t=r[e]=a[e](u),{c(){t.c(),l=J()},l(s){t.l(s),l=J()},m(s,f){r[e].m(s,f),M(s,l,f),n=!0},p(s,[f]){let m=e;e=i(s),e===m?r[e].p(s,f):(ve(),q(r[m],1,1,()=>{r[m]=null}),pe(),t=r[e],t?t.p(s,f):(t=r[e]=a[e](s),t.c()),k(t,1),t.m(l.parentNode,l))},i(s){n||(k(t),n=!0)},o(s){q(t),n=!1},d(s){r[e].d(s),s&&_(l)}}}function Be(u,e,t){let{$$slots:l={},$$scope:n}=e,{label:a=void 0}=e,{required:r=!1}=e;return u.$$set=i=>{"label"in i&&t(0,a=i.label),"required"in i&&t(1,r=i.required),"$$scope"in i&&t(2,n=i.$$scope)},[a,r,n,l]}class se extends K{constructor(e){super(),Y(this,e,Be,Fe,Q,{label:0,required:1})}}function Le(u){let e,t,l,n,a,r,i,s,f,m;return{c(){e=v("div"),t=v("span"),l=C(u[2]),n=T(),a=v("input"),r=T(),i=v("span"),s=C(u[1]),this.h()},l(c){e=p(c,"DIV",{class:!0});var o=E(e);t=p(o,"SPAN",{});var P=E(t);l=O(P,u[2]),P.forEach(_),n=V(o),a=p(o,"INPUT",{class:!0,type:!0,max:!0,min:!0,step:!0,name:!0}),r=V(o),i=p(o,"SPAN",{});var A=E(i);s=O(A,u[1]),A.forEach(_),o.forEach(_),this.h()},h(){d(a,"class","mx-1 flex-1 accent-[var(--theme-button-color)]"),d(a,"type","range"),a.value=u[0],d(a,"max",u[1]),d(a,"min",u[2]),d(a,"step",u[3]),d(a,"name",u[4]),d(e,"class","flex text-sm")},m(c,o){M(c,e,o),h(e,t),h(t,l),h(e,n),h(e,a),h(e,r),h(e,i),h(i,s),f||(m=U(a,"input",u[8]),f=!0)},p(c,o){o&4&&z(l,c[2]),o&1&&(a.value=c[0]),o&2&&d(a,"max",c[1]),o&4&&d(a,"min",c[2]),o&8&&d(a,"step",c[3]),o&16&&d(a,"name",c[4]),o&2&&z(s,c[1])},d(c){c&&_(e),f=!1,m()}}}function Ue(u){let e,t;return e=new se({props:{label:u[5]+": "+u[0],$$slots:{default:[Le]},$$scope:{ctx:u}}}),{c(){N(e.$$.fragment)},l(l){I(e.$$.fragment,l)},m(l,n){S(e,l,n),t=!0},p(l,[n]){const a={};n&33&&(a.label=l[5]+": "+l[0]),n&543&&(a.$$scope={dirty:n,ctx:l}),e.$set(a)},i(l){t||(k(e.$$.fragment,l),t=!0)},o(l){q(e.$$.fragment,l),t=!1},d(l){F(e,l)}}}function Ce(u,e,t){let{max:l}=e,{min:n}=e,{step:a=1}=e,{defaultValue:r=(l+n)/2}=e,{value:i=r}=e,{name:s=void 0}=e,{label:f=void 0}=e;function m(o){t(0,i=+o)}const c=o=>m(o.currentTarget.value);return u.$$set=o=>{"max"in o&&t(1,l=o.max),"min"in o&&t(2,n=o.min),"step"in o&&t(3,a=o.step),"defaultValue"in o&&t(7,r=o.defaultValue),"value"in o&&t(0,i=o.value),"name"in o&&t(4,s=o.name),"label"in o&&t(5,f=o.label)},[i,l,n,a,s,f,m,r,c]}class ce extends K{constructor(e){super(),Y(this,e,Ce,Ue,Q,{max:1,min:2,step:3,defaultValue:7,value:0,name:4,label:5})}}function de(u,e,t){const l=u.slice();return l[3]=e[t].label,l[6]=e[t].value,l}function _e(u){let e,t;return e=new se({props:{label:u[3],$$slots:{default:[Oe]},$$scope:{ctx:u}}}),{c(){N(e.$$.fragment)},l(l){I(e.$$.fragment,l)},m(l,n){S(e,l,n),t=!0},p(l,n){const a={};n&8&&(a.label=l[3]),n&519&&(a.$$scope={dirty:n,ctx:l}),e.$set(a)},i(l){t||(k(e.$$.fragment,l),t=!0)},o(l){q(e.$$.fragment,l),t=!1},d(l){F(e,l)}}}function he(u){let e,t,l=u[3]+"",n,a,r,i;function s(){return u[5](u[6])}return{c(){e=v("li"),t=v("button"),n=C(l),a=T(),this.h()},l(f){e=p(f,"LI",{class:!0});var m=E(e);t=p(m,"BUTTON",{type:!0,class:!0});var c=E(t);n=O(c,l),c.forEach(_),a=V(m),m.forEach(_),this.h()},h(){d(t,"type","button"),d(t,"class","item cursor-pointer svelte-fv5mem"),oe(t,"selected",u[0]===u[6]),d(e,"class","[&:not(:last-child)]:mr-4")},m(f,m){M(f,e,m),h(e,t),h(t,n),h(e,a),r||(i=U(t,"click",s),r=!0)},p(f,m){u=f,m&4&&l!==(l=u[3]+"")&&z(n,l),m&5&&oe(t,"selected",u[0]===u[6])},d(f){f&&_(e),r=!1,i()}}}function Oe(u){let e,t,l,n=u[2],a=[];for(let r=0;r<n.length;r+=1)a[r]=he(de(u,n,r));return{c(){e=v("ul");for(let r=0;r<a.length;r+=1)a[r].c();t=T(),l=v("input"),this.h()},l(r){e=p(r,"UL",{class:!0});var i=E(e);for(let s=0;s<a.length;s+=1)a[s].l(i);i.forEach(_),t=V(r),l=p(r,"INPUT",{type:!0,name:!0}),this.h()},h(){d(e,"class","flex flex-nowrap list-none overflow-auto max-w-full pt-1"),d(l,"type","hidden"),d(l,"name",u[1]),l.value=u[0]},m(r,i){M(r,e,i);for(let s=0;s<a.length;s+=1)a[s]&&a[s].m(e,null);M(r,t,i),M(r,l,i)},p(r,i){if(i&5){n=r[2];let s;for(s=0;s<n.length;s+=1){const f=de(r,n,s);a[s]?a[s].p(f,i):(a[s]=he(f),a[s].c(),a[s].m(e,null))}for(;s<a.length;s+=1)a[s].d(1);a.length=n.length}i&2&&d(l,"name",r[1]),i&1&&(l.value=r[0])},d(r){r&&_(e),qe(a,r),r&&_(t),r&&_(l)}}}function We(u){let e,t,l=u[2].length>0&&_e(u);return{c(){l&&l.c(),e=J()},l(n){l&&l.l(n),e=J()},m(n,a){l&&l.m(n,a),M(n,e,a),t=!0},p(n,[a]){n[2].length>0?l?(l.p(n,a),a&4&&k(l,1)):(l=_e(n),l.c(),k(l,1),l.m(e.parentNode,e)):l&&(ve(),q(l,1,1,()=>{l=null}),pe())},i(n){t||(k(l),t=!0)},o(n){q(l),t=!1},d(n){l&&l.d(n),n&&_(e)}}}function Ge(u,e,t){let{name:l=void 0}=e,{options:n=[]}=e,{label:a=void 0}=e,{defaultValue:r=n[0].value}=e,{value:i=r}=e;const s=f=>t(0,i=f);return u.$$set=f=>{"name"in f&&t(1,l=f.name),"options"in f&&t(2,n=f.options),"label"in f&&t(3,a=f.label),"defaultValue"in f&&t(4,r=f.defaultValue),"value"in f&&t(0,i=f.value)},[i,l,n,a,r,s]}class be extends K{constructor(e){super(),Y(this,e,Ge,We,Q,{name:1,options:2,label:3,defaultValue:4,value:0})}}function ge(u){let e,t=u[7].message+"",l;return{c(){e=v("span"),l=C(t),this.h()},l(n){e=p(n,"SPAN",{class:!0});var a=E(e);l=O(a,t),a.forEach(_),this.h()},h(){d(e,"class","text-xs text-red-500")},m(n,a){M(n,e,a),h(e,l)},p(n,a){a&128&&t!==(t=n[7].message+"")&&z(l,t)},d(n){n&&_(e)}}}function He(u){let e,t,l,n,a,r,i=u[8]&&u[7]!==void 0&&ge(u);return{c(){e=v("input"),l=T(),i&&i.c(),n=J(),this.h()},l(s){e=p(s,"INPUT",{type:!0,name:!0,placeholder:!0,class:!0,"aria-label":!0}),l=V(s),i&&i.l(s),n=J(),this.h()},h(){d(e,"type",u[6]),d(e,"name",u[4]),d(e,"placeholder",u[2]),e.disabled=u[3],e.required=u[5],e.value=u[0],d(e,"class",t="border border-[var(--theme-hint-color)] rounded-md p-1 focus-visible:border-[var(--theme-text-color)] outline-0 "+(u[8]?"invalid:border-red-500":"")+" "+(u[8]&&u[7]!==void 0?"border-red-500":"")),d(e,"aria-label",u[1])},m(s,f){M(s,e,f),M(s,l,f),i&&i.m(s,f),M(s,n,f),a||(r=[U(e,"input",u[10]),U(e,"change",u[13]),U(e,"focus",u[14]),U(e,"blur",u[15])],a=!0)},p(s,f){f&64&&d(e,"type",s[6]),f&16&&d(e,"name",s[4]),f&4&&d(e,"placeholder",s[2]),f&8&&(e.disabled=s[3]),f&32&&(e.required=s[5]),f&1&&e.value!==s[0]&&(e.value=s[0]),f&384&&t!==(t="border border-[var(--theme-hint-color)] rounded-md p-1 focus-visible:border-[var(--theme-text-color)] outline-0 "+(s[8]?"invalid:border-red-500":"")+" "+(s[8]&&s[7]!==void 0?"border-red-500":""))&&d(e,"class",t),f&2&&d(e,"aria-label",s[1]),s[8]&&s[7]!==void 0?i?i.p(s,f):(i=ge(s),i.c(),i.m(n.parentNode,n)):i&&(i.d(1),i=null)},d(s){s&&_(e),s&&_(l),i&&i.d(s),s&&_(n),a=!1,Ve(r)}}}function ye(u){let e,t;return e=new se({props:{label:u[1],required:u[5],$$slots:{default:[He]},$$scope:{ctx:u}}}),{c(){N(e.$$.fragment)},l(l){I(e.$$.fragment,l)},m(l,n){S(e,l,n),t=!0},p(l,[n]){const a={};n&2&&(a.label=l[1]),n&32&&(a.required=l[5]),n&131583&&(a.$$scope={dirty:n,ctx:l}),e.$set(a)},i(l){t||(k(e.$$.fragment,l),t=!0)},o(l){q(e.$$.fragment,l),t=!1},d(l){F(e,l)}}}function Re(u,e,t){let{label:l=void 0}=e,{defaultValue:n=""}=e,{value:a=n}=e,{placeholder:r=void 0}=e,{disabled:i=!1}=e,{name:s=void 0}=e,{required:f=!1}=e,{validate:m=void 0}=e,{type:c="text"}=e,o,P=!1;function A(b){return c.match(/^number|range$/)?+b:b}function D(b){t(7,o=m==null?void 0:m(A(b)))}function w(b){t(0,a=A(b.currentTarget.value))}const B=b=>D(b.currentTarget.value),X=()=>t(8,P=!1),L=()=>t(8,P=!0);return u.$$set=b=>{"label"in b&&t(1,l=b.label),"defaultValue"in b&&t(11,n=b.defaultValue),"value"in b&&t(0,a=b.value),"placeholder"in b&&t(2,r=b.placeholder),"disabled"in b&&t(3,i=b.disabled),"name"in b&&t(4,s=b.name),"required"in b&&t(5,f=b.required),"validate"in b&&t(12,m=b.validate),"type"in b&&t(6,c=b.type)},[a,l,r,i,s,f,c,o,P,D,w,n,m,B,X,L]}class ae extends K{constructor(e){super(),Y(this,e,Re,ye,Q,{label:1,defaultValue:11,value:0,placeholder:2,disabled:3,name:4,required:5,validate:12,type:6})}}function je(u){let e,t,l,n,a,r,i,s,f,m,c,o,P,A,D,w,B,X,L,b,H,ee,y,le,R,te,Z,ne,re;return r=new ae({props:{name:"prompt",label:"Запрос",placeholder:"elden ring, epic",required:!0}}),s=new ae({props:{name:"negative_prompt",label:"Антизапрос",placeholder:"realism"}}),m=new be({props:{name:"dimensions",options:u[2],label:"Размер изображения: "}}),B=new be({props:{name:"sampler_method",options:u[1],label:"Метод семплера"}}),L=new ce({props:{name:"sampler_steps",min:20,max:40,label:"Шаги семплера",defaultValue:20}}),H=new ae({props:{name:"seed",label:"Seed",placeholder:"1234567890",type:"number"}}),y=new ce({props:{name:"cfg_scale",min:1,max:25,label:"CFG Scale",step:.5,defaultValue:7.5}}),{c(){e=v("h1"),t=C("TXT -> IMG"),l=T(),n=v("form"),a=v("div"),N(r.$$.fragment),i=T(),N(s.$$.fragment),f=T(),N(m.$$.fragment),c=T(),o=v("details"),P=v("summary"),A=C("Продвинутые опции"),D=T(),w=v("div"),N(B.$$.fragment),X=T(),N(L.$$.fragment),b=T(),N(H.$$.fragment),ee=T(),N(y.$$.fragment),le=T(),R=v("button"),te=C("submit"),this.h()},l(g){e=p(g,"H1",{class:!0});var j=E(e);t=O(j,"TXT -> IMG"),j.forEach(_),l=V(g),n=p(g,"FORM",{class:!0});var W=E(n);a=p(W,"DIV",{class:!0});var x=E(a);I(r.$$.fragment,x),i=V(x),I(s.$$.fragment,x),x.forEach(_),f=V(W),I(m.$$.fragment,W),c=V(W),o=p(W,"DETAILS",{});var $=E(o);P=p($,"SUMMARY",{});var ie=E(P);A=O(ie,"Продвинутые опции"),ie.forEach(_),D=V($),w=p($,"DIV",{class:!0});var G=E(w);I(B.$$.fragment,G),X=V(G),I(L.$$.fragment,G),b=V(G),I(H.$$.fragment,G),ee=V(G),I(y.$$.fragment,G),G.forEach(_),$.forEach(_),le=V(W),R=p(W,"BUTTON",{});var fe=E(R);te=O(fe,"submit"),fe.forEach(_),W.forEach(_),this.h()},h(){d(e,"class","text-center text-3xl"),d(a,"class","grid grid-cols-2 gap-2 mt-4"),d(w,"class","grid gap-4"),d(n,"class","grid gap-4 p-4")},m(g,j){M(g,e,j),h(e,t),M(g,l,j),M(g,n,j),h(n,a),S(r,a,null),h(a,i),S(s,a,null),h(n,f),S(m,n,null),h(n,c),h(n,o),h(o,P),h(P,A),h(o,D),h(o,w),S(B,w,null),h(w,X),S(L,w,null),h(w,b),S(H,w,null),h(w,ee),S(y,w,null),h(n,le),h(n,R),h(R,te),u[6](n),Z=!0,ne||(re=[U(R,"click",u[4]),U(n,"submit",Me(u[5])),U(n,"input",u[3])],ne=!0)},p:Pe,i(g){Z||(k(r.$$.fragment,g),k(s.$$.fragment,g),k(m.$$.fragment,g),k(B.$$.fragment,g),k(L.$$.fragment,g),k(H.$$.fragment,g),k(y.$$.fragment,g),Z=!0)},o(g){q(r.$$.fragment,g),q(s.$$.fragment,g),q(m.$$.fragment,g),q(B.$$.fragment,g),q(L.$$.fragment,g),q(H.$$.fragment,g),q(y.$$.fragment,g),Z=!1},d(g){g&&_(e),g&&_(l),g&&_(n),F(r),F(s),F(m),F(B),F(L),F(H),F(y),u[6](null),ne=!1,Ve(re)}}}const ue="dimensions";function Je(u,e,t){const l=[{label:"Euler 𝛼",value:"Euler a"},{label:"Heun",value:"Heun"},{label:"DPM++ M2",value:"DPM++ 2M"},{label:"DDIM",value:"DDIM"}],n=[{label:"Квадрат [512x512]",value:"square"},{label:"Портрет [512x768]",value:"portrait"},{label:"Пейзаж [768x512]",value:"landscape"}],a={square:{width:512,height:512},portrait:{width:512,height:768},landscape:{width:768,height:512}};let r;function i(o){return o in a?a[o]:{}}function s(){r.checkValidity()&&window.Telegram.WebApp.MainButton.setParams({color:window.Telegram.WebApp.themeParams.button_color}).enable()}function f(){window.Telegram.WebApp.MainButton.showProgress();const o={},P=new FormData(r),A=["cfg_scale","sampler_steps"];P.forEach((D,w)=>{D&&(o[w]=A.includes(w)?+D:D)}),typeof o[ue]=="string"&&(Object.assign(o,i(o[ue])),delete o[ue]),console.log(o),window.Telegram.WebApp.sendData(JSON.stringify(o))}Ae(()=>{window.Telegram.WebApp.MainButton.setText("Сгенерировать").onClick(()=>f()).disable().setParams({color:window.Telegram.WebApp.themeParams.hint_color}).show()});function m(o){De.call(this,u,o)}function c(o){Ne[o?"unshift":"push"](()=>{r=o,t(0,r)})}return[r,l,n,s,f,m,c]}class ze extends K{constructor(e){super(),Y(this,e,Je,je,Q,{})}}export{ze as default};
