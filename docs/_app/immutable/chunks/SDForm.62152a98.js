import{_ as Ae}from"./preload-helper.41c905a7.js";import{b as Te}from"./paths.da6af57a.js";import{S as ee,i as te,s as le,e as $,b as F,v as qe,d as S,f as Ie,g as w,h as v,F as Y,G as K,H as X,I as Z,k as P,q as G,a as q,l as V,m as A,r as Q,c as I,n as h,J as p,u as x,y as j,z as H,A as J,B as W,O as z,Q as Ne,L as Fe,N as be,P as Me,U as Be,w as Le}from"./index.98711fea.js";const ot=l=>fetch("https://voicechatgpt.ru/cache/",{method:"POST",body:l}).then(e=>e.json());function ue(){return window.Telegram.WebApp}async function mt(l){await Ae(()=>import(`${Te}/telegram-web-app.js`),[],import.meta.url);const{MainButton:e}=ue();Ue(!1),e.setText("Сгенерировать").onClick(l).show()}function Ue(l){const{MainButton:e,themeParams:n}=ue();l?e.enable().setParams({color:n.button_color}):e.disable().setParams({color:n.hint_color})}function ct(l){const{sendData:e}=ue();Oe(!0),e(JSON.stringify(l))}function Oe(l){const{MainButton:e}=ue();l?e.showProgress():e.hideProgress()}function Re(l){let e;const n=l[3].default,t=Y(n,l,l[2],null);return{c(){t&&t.c()},l(a){t&&t.l(a)},m(a,u){t&&t.m(a,u),e=!0},p(a,u){t&&t.p&&(!e||u&4)&&K(t,n,a,a[2],e?Z(n,a[2],u,null):X(a[2]),null)},i(a){e||(w(t,a),e=!0)},o(a){S(t,a),e=!1},d(a){t&&t.d(a)}}}function ye(l){let e,n,t,a,u,r,i=l[1]&&pe();const s=l[3].default,f=Y(s,l,l[2],null);return{c(){e=P("label"),n=P("span"),t=G(l[0]),a=q(),i&&i.c(),u=q(),f&&f.c(),this.h()},l(o){e=V(o,"LABEL",{class:!0});var c=A(e);n=V(c,"SPAN",{class:!0});var D=A(n);t=Q(D,l[0]),a=I(D),i&&i.l(D),D.forEach(v),u=I(c),f&&f.l(c),c.forEach(v),this.h()},h(){h(n,"class","text-sm text-[var(--theme-hint-color)] pl-1.5"),h(e,"class","flex flex-col")},m(o,c){F(o,e,c),p(e,n),p(n,t),p(n,a),i&&i.m(n,null),p(e,u),f&&f.m(e,null),r=!0},p(o,c){(!r||c&1)&&x(t,o[0]),o[1]?i||(i=pe(),i.c(),i.m(n,null)):i&&(i.d(1),i=null),f&&f.p&&(!r||c&4)&&K(f,s,o,o[2],r?Z(s,o[2],c,null):X(o[2]),null)},i(o){r||(w(f,o),r=!0)},o(o){S(f,o),r=!1},d(o){o&&v(e),i&&i.d(),f&&f.d(o)}}}function pe(l){let e,n;return{c(){e=P("span"),n=G("*"),this.h()},l(t){e=V(t,"SPAN",{class:!0});var a=A(e);n=Q(a,"*"),a.forEach(v),this.h()},h(){h(e,"class","text-sm text-red-500")},m(t,a){F(t,e,a),p(e,n)},d(t){t&&v(e)}}}function Ce(l){let e,n,t,a;const u=[ye,Re],r=[];function i(s,f){return s[0]!==void 0?0:1}return e=i(l),n=r[e]=u[e](l),{c(){n.c(),t=$()},l(s){n.l(s),t=$()},m(s,f){r[e].m(s,f),F(s,t,f),a=!0},p(s,[f]){let o=e;e=i(s),e===o?r[e].p(s,f):(qe(),S(r[o],1,1,()=>{r[o]=null}),Ie(),n=r[e],n?n.p(s,f):(n=r[e]=u[e](s),n.c()),w(n,1),n.m(t.parentNode,t))},i(s){a||(w(n),a=!0)},o(s){S(n),a=!1},d(s){r[e].d(s),s&&v(t)}}}function je(l,e,n){let{$$slots:t={},$$scope:a}=e,{label:u=void 0}=e,{required:r=!1}=e;return l.$$set=i=>{"label"in i&&n(0,u=i.label),"required"in i&&n(1,r=i.required),"$$scope"in i&&n(2,a=i.$$scope)},[u,r,a,t]}class _e extends ee{constructor(e){super(),te(this,e,je,Ce,le,{label:0,required:1})}}function ge(l){let e,n=l[7].message+"",t;return{c(){e=P("span"),t=G(n),this.h()},l(a){e=V(a,"SPAN",{class:!0});var u=A(e);t=Q(u,n),u.forEach(v),this.h()},h(){h(e,"class","text-xs text-red-500")},m(a,u){F(a,e,u),p(e,t)},p(a,u){u&128&&n!==(n=a[7].message+"")&&x(t,n)},d(a){a&&v(e)}}}function He(l){let e,n,t,a,u,r,i=l[8]&&l[7]!==void 0&&ge(l);return{c(){e=P("input"),t=q(),i&&i.c(),a=$(),this.h()},l(s){e=V(s,"INPUT",{type:!0,name:!0,placeholder:!0,class:!0,"aria-label":!0}),t=I(s),i&&i.l(s),a=$(),this.h()},h(){h(e,"type",l[6]),h(e,"name",l[4]),h(e,"placeholder",l[2]),e.disabled=l[3],e.required=l[5],e.value=l[0],h(e,"class",n="border border-[var(--theme-hint-color)] rounded-md p-1 focus-visible:border-[var(--theme-text-color)] outline-0 "+(l[8]?"invalid:border-red-500":"")+" "+(l[8]&&l[7]!==void 0?"border-red-500":"")),h(e,"aria-label",l[1])},m(s,f){F(s,e,f),F(s,t,f),i&&i.m(s,f),F(s,a,f),u||(r=[z(e,"input",l[10]),z(e,"change",l[13]),z(e,"focus",l[14]),z(e,"blur",l[15])],u=!0)},p(s,f){f&64&&h(e,"type",s[6]),f&16&&h(e,"name",s[4]),f&4&&h(e,"placeholder",s[2]),f&8&&(e.disabled=s[3]),f&32&&(e.required=s[5]),f&1&&e.value!==s[0]&&(e.value=s[0]),f&384&&n!==(n="border border-[var(--theme-hint-color)] rounded-md p-1 focus-visible:border-[var(--theme-text-color)] outline-0 "+(s[8]?"invalid:border-red-500":"")+" "+(s[8]&&s[7]!==void 0?"border-red-500":""))&&h(e,"class",n),f&2&&h(e,"aria-label",s[1]),s[8]&&s[7]!==void 0?i?i.p(s,f):(i=ge(s),i.c(),i.m(a.parentNode,a)):i&&(i.d(1),i=null)},d(s){s&&v(e),s&&v(t),i&&i.d(s),s&&v(a),u=!1,Ne(r)}}}function Je(l){let e,n;return e=new _e({props:{label:l[1],required:l[5],$$slots:{default:[He]},$$scope:{ctx:l}}}),{c(){j(e.$$.fragment)},l(t){H(e.$$.fragment,t)},m(t,a){J(e,t,a),n=!0},p(t,[a]){const u={};a&2&&(u.label=t[1]),a&32&&(u.required=t[5]),a&131583&&(u.$$scope={dirty:a,ctx:t}),e.$set(u)},i(t){n||(w(e.$$.fragment,t),n=!0)},o(t){S(e.$$.fragment,t),n=!1},d(t){W(e,t)}}}function We(l,e,n){let{label:t=void 0}=e,{defaultValue:a=""}=e,{value:u=a}=e,{placeholder:r=void 0}=e,{disabled:i=!1}=e,{name:s=void 0}=e,{required:f=!1}=e,{validate:o=void 0}=e,{type:c="text"}=e,D,g=!1;function O(_){return c.match(/^number|range$/)?+_:_}function d(_){n(7,D=o==null?void 0:o(O(_)))}function E(_){n(0,u=O(_.currentTarget.value))}const T=_=>d(_.currentTarget.value),b=()=>n(8,g=!1),N=()=>n(8,g=!0);return l.$$set=_=>{"label"in _&&n(1,t=_.label),"defaultValue"in _&&n(11,a=_.defaultValue),"value"in _&&n(0,u=_.value),"placeholder"in _&&n(2,r=_.placeholder),"disabled"in _&&n(3,i=_.disabled),"name"in _&&n(4,s=_.name),"required"in _&&n(5,f=_.required),"validate"in _&&n(12,o=_.validate),"type"in _&&n(6,c=_.type)},[u,t,r,i,s,f,c,D,g,d,E,a,o,T,b,N]}class ce extends ee{constructor(e){super(),te(this,e,We,Je,le,{label:1,defaultValue:11,value:0,placeholder:2,disabled:3,name:4,required:5,validate:12,type:6})}}function ve(l,e,n){const t=l.slice();return t[3]=e[n].label,t[6]=e[n].value,t}function Ee(l){let e,n;return e=new _e({props:{label:l[3],$$slots:{default:[ze]},$$scope:{ctx:l}}}),{c(){j(e.$$.fragment)},l(t){H(e.$$.fragment,t)},m(t,a){J(e,t,a),n=!0},p(t,a){const u={};a&8&&(u.label=t[3]),a&519&&(u.$$scope={dirty:a,ctx:t}),e.$set(u)},i(t){n||(w(e.$$.fragment,t),n=!0)},o(t){S(e.$$.fragment,t),n=!1},d(t){W(e,t)}}}function De(l){let e,n,t=l[3]+"",a,u,r,i;function s(){return l[5](l[6])}return{c(){e=P("li"),n=P("button"),a=G(t),u=q(),this.h()},l(f){e=V(f,"LI",{class:!0});var o=A(e);n=V(o,"BUTTON",{type:!0,class:!0});var c=A(n);a=Q(c,t),c.forEach(v),u=I(o),o.forEach(v),this.h()},h(){h(n,"type","button"),h(n,"class","item cursor-pointer svelte-fv5mem"),be(n,"selected",l[0]===l[6]),h(e,"class","[&:not(:last-child)]:mr-4")},m(f,o){F(f,e,o),p(e,n),p(n,a),p(e,u),r||(i=z(n,"click",s),r=!0)},p(f,o){l=f,o&4&&t!==(t=l[3]+"")&&x(a,t),o&5&&be(n,"selected",l[0]===l[6])},d(f){f&&v(e),r=!1,i()}}}function ze(l){let e,n,t,a=l[2],u=[];for(let r=0;r<a.length;r+=1)u[r]=De(ve(l,a,r));return{c(){e=P("ul");for(let r=0;r<u.length;r+=1)u[r].c();n=q(),t=P("input"),this.h()},l(r){e=V(r,"UL",{class:!0});var i=A(e);for(let s=0;s<u.length;s+=1)u[s].l(i);i.forEach(v),n=I(r),t=V(r,"INPUT",{type:!0,name:!0}),this.h()},h(){h(e,"class","flex flex-nowrap list-none overflow-auto max-w-full pt-1"),h(t,"type","hidden"),h(t,"name",l[1]),t.value=l[0]},m(r,i){F(r,e,i);for(let s=0;s<u.length;s+=1)u[s]&&u[s].m(e,null);F(r,n,i),F(r,t,i)},p(r,i){if(i&5){a=r[2];let s;for(s=0;s<a.length;s+=1){const f=ve(r,a,s);u[s]?u[s].p(f,i):(u[s]=De(f),u[s].c(),u[s].m(e,null))}for(;s<u.length;s+=1)u[s].d(1);u.length=a.length}i&2&&h(t,"name",r[1]),i&1&&(t.value=r[0])},d(r){r&&v(e),Fe(u,r),r&&v(n),r&&v(t)}}}function Ge(l){let e,n,t=l[2].length>0&&Ee(l);return{c(){t&&t.c(),e=$()},l(a){t&&t.l(a),e=$()},m(a,u){t&&t.m(a,u),F(a,e,u),n=!0},p(a,[u]){a[2].length>0?t?(t.p(a,u),u&4&&w(t,1)):(t=Ee(a),t.c(),w(t,1),t.m(e.parentNode,e)):t&&(qe(),S(t,1,1,()=>{t=null}),Ie())},i(a){n||(w(t),n=!0)},o(a){S(t),n=!1},d(a){t&&t.d(a),a&&v(e)}}}function Qe(l,e,n){let{name:t=void 0}=e,{options:a=[]}=e,{label:u=void 0}=e,{defaultValue:r=a[0].value}=e,{value:i=r}=e;const s=f=>n(0,i=f);return l.$$set=f=>{"name"in f&&n(1,t=f.name),"options"in f&&n(2,a=f.options),"label"in f&&n(3,u=f.label),"defaultValue"in f&&n(4,r=f.defaultValue),"value"in f&&n(0,i=f.value)},[i,t,a,u,r,s]}class ke extends ee{constructor(e){super(),te(this,e,Qe,Ge,le,{name:1,options:2,label:3,defaultValue:4,value:0})}}function Ye(l){let e,n,t,a,u,r,i,s,f,o,c,D,g,O;return{c(){e=P("div"),n=P("span"),t=G(l[1]),a=q(),u=P("input"),o=q(),c=P("span"),D=G(l[0]),this.h()},l(d){e=V(d,"DIV",{class:!0});var E=A(e);n=V(E,"SPAN",{});var T=A(n);t=Q(T,l[1]),T.forEach(v),a=I(E),u=V(E,"INPUT",{class:!0,type:!0,max:!0,min:!0,step:!0,name:!0}),o=I(E),c=V(E,"SPAN",{});var b=A(c);D=Q(b,l[0]),b.forEach(v),E.forEach(v),this.h()},h(){h(u,"class","mx-1 flex-1 accent-[var(--theme-button-color)]"),h(u,"type","range"),u.value=r=l[6]*l[5],h(u,"max",i=l[6]*l[0]),h(u,"min",s=l[6]*l[1]),h(u,"step",f=l[6]*l[2]),h(u,"name",l[3]),h(e,"class","flex text-sm")},m(d,E){F(d,e,E),p(e,n),p(n,t),p(e,a),p(e,u),p(e,o),p(e,c),p(c,D),g||(O=z(u,"input",l[9]),g=!0)},p(d,E){E&2&&x(t,d[1]),E&96&&r!==(r=d[6]*d[5])&&(u.value=r),E&65&&i!==(i=d[6]*d[0])&&h(u,"max",i),E&66&&s!==(s=d[6]*d[1])&&h(u,"min",s),E&68&&f!==(f=d[6]*d[2])&&h(u,"step",f),E&8&&h(u,"name",d[3]),E&1&&x(D,d[0])},d(d){d&&v(e),g=!1,O()}}}function Ke(l){let e,n;return e=new _e({props:{label:l[4]+": "+l[5],$$slots:{default:[Ye]},$$scope:{ctx:l}}}),{c(){j(e.$$.fragment)},l(t){H(e.$$.fragment,t)},m(t,a){J(e,t,a),n=!0},p(t,[a]){const u={};a&48&&(u.label=t[4]+": "+t[5]),a&1135&&(u.$$scope={dirty:a,ctx:t}),e.$set(u)},i(t){n||(w(e.$$.fragment,t),n=!0)},o(t){S(e.$$.fragment,t),n=!1},d(t){W(e,t)}}}function Xe(l,e,n){let t,{max:a}=e,{min:u}=e,{step:r=1}=e,{defaultValue:i=(a+u)/2}=e,{name:s=void 0}=e,{label:f=void 0}=e,o=i;function c(g){n(5,o=+g/t)}const D=g=>c(g.currentTarget.value);return l.$$set=g=>{"max"in g&&n(0,a=g.max),"min"in g&&n(1,u=g.min),"step"in g&&n(2,r=g.step),"defaultValue"in g&&n(8,i=g.defaultValue),"name"in g&&n(3,s=g.name),"label"in g&&n(4,f=g.label)},l.$$.update=()=>{l.$$.dirty&4&&n(6,t=1/r)},[a,u,r,s,f,o,t,c,i,D]}class Ze extends ee{constructor(e){super(),te(this,e,Xe,Ke,le,{max:0,min:1,step:2,defaultValue:8,name:3,label:4})}}const $e=()=>{},xe=(l,...e)=>e.reduce((n,t)=>t(n),l),et=l=>({}),we=l=>({}),tt=l=>({}),Se=l=>({}),lt=l=>({}),Pe=l=>({}),nt=l=>({}),Ve=l=>({});function at(l){let e,n,t,a,u,r,i,s,f,o,c,D,g,O,d,E,T,b,N,_,C,se,R,re,de;const ie=l[8]["pre-basic"],M=Y(ie,l,l[7],Ve);a=new ce({props:{name:l[3].prompt,label:"Запрос",placeholder:"elden ring, epic",required:!0}}),r=new ce({props:{name:l[3].negativePrompt,label:"Антизапрос",placeholder:"realism"}}),s=new ke({props:{name:l[3].dimensions,options:l[2],label:"Размер изображения: "}});const fe=l[8]["post-basic"],B=Y(fe,l,l[7],Pe),oe=l[8]["pre-advanced"],L=Y(oe,l,l[7],Se);T=new ke({props:{name:l[3].samplerMethod,options:l[1],label:"Метод семплера"}}),N=new Ze({props:{name:l[3].samplerSteps,min:20,max:40,label:"Шаги семплера",defaultValue:20}}),C=new ce({props:{name:l[3].seed,label:"Seed",placeholder:"1234567890",type:"number"}});const me=l[8]["post-advanced"],U=Y(me,l,l[7],we);return{c(){e=P("form"),M&&M.c(),n=q(),t=P("div"),j(a.$$.fragment),u=q(),j(r.$$.fragment),i=q(),j(s.$$.fragment),f=q(),B&&B.c(),o=q(),c=P("details"),D=P("summary"),g=G("Продвинутые опции"),O=q(),d=P("div"),L&&L.c(),E=q(),j(T.$$.fragment),b=q(),j(N.$$.fragment),_=q(),j(C.$$.fragment),se=q(),U&&U.c(),this.h()},l(m){e=V(m,"FORM",{class:!0});var k=A(e);M&&M.l(k),n=I(k),t=V(k,"DIV",{class:!0});var ne=A(t);H(a.$$.fragment,ne),u=I(ne),H(r.$$.fragment,ne),ne.forEach(v),i=I(k),H(s.$$.fragment,k),f=I(k),B&&B.l(k),o=I(k),c=V(k,"DETAILS",{});var ae=A(c);D=V(ae,"SUMMARY",{});var he=A(D);g=Q(he,"Продвинутые опции"),he.forEach(v),O=I(ae),d=V(ae,"DIV",{class:!0});var y=A(d);L&&L.l(y),E=I(y),H(T.$$.fragment,y),b=I(y),H(N.$$.fragment,y),_=I(y),H(C.$$.fragment,y),se=I(y),U&&U.l(y),y.forEach(v),ae.forEach(v),k.forEach(v),this.h()},h(){h(t,"class","grid grid-cols-2 gap-2"),h(d,"class","grid gap-4"),h(e,"class","grid gap-4 p-4 mt-4")},m(m,k){F(m,e,k),M&&M.m(e,null),p(e,n),p(e,t),J(a,t,null),p(t,u),J(r,t,null),p(e,i),J(s,e,null),p(e,f),B&&B.m(e,null),p(e,o),p(e,c),p(c,D),p(D,g),p(c,O),p(c,d),L&&L.m(d,null),p(d,E),J(T,d,null),p(d,b),J(N,d,null),p(d,_),J(C,d,null),p(d,se),U&&U.m(d,null),l[10](e),R=!0,re||(de=[z(e,"submit",Me(l[11])),z(e,"input",l[9])],re=!0)},p(m,[k]){M&&M.p&&(!R||k&128)&&K(M,ie,m,m[7],R?Z(ie,m[7],k,nt):X(m[7]),Ve),B&&B.p&&(!R||k&128)&&K(B,fe,m,m[7],R?Z(fe,m[7],k,lt):X(m[7]),Pe),L&&L.p&&(!R||k&128)&&K(L,oe,m,m[7],R?Z(oe,m[7],k,tt):X(m[7]),Se),U&&U.p&&(!R||k&128)&&K(U,me,m,m[7],R?Z(me,m[7],k,et):X(m[7]),we)},i(m){R||(w(M,m),w(a.$$.fragment,m),w(r.$$.fragment,m),w(s.$$.fragment,m),w(B,m),w(L,m),w(T.$$.fragment,m),w(N.$$.fragment,m),w(C.$$.fragment,m),w(U,m),R=!0)},o(m){S(M,m),S(a.$$.fragment,m),S(r.$$.fragment,m),S(s.$$.fragment,m),S(B,m),S(L,m),S(T.$$.fragment,m),S(N.$$.fragment,m),S(C.$$.fragment,m),S(U,m),R=!1},d(m){m&&v(e),M&&M.d(m),W(a),W(r),W(s),B&&B.d(m),L&&L.d(m),W(T),W(N),W(C),U&&U.d(m),l[10](null),re=!1,Ne(de)}}}function ut(l){const e={};return l.forEach((n,t)=>{e[t]=n}),e}function st(l,e,n){let{$$slots:t={},$$scope:a}=e,{form:u=null}=e,{parseExtra:r=b=>b}=e,{onSubmit:i=$e}=e;const s=[{label:"Euler 𝛼",value:"Euler a"},{label:"Heun",value:"Heun"},{label:"DPM++ M2",value:"DPM++ 2M"},{label:"DDIM",value:"DDIM"}],f=[{label:"Квадрат [512x512]",value:"square"},{label:"Портрет [512x768]",value:"portrait"},{label:"Пейзаж [768x512]",value:"landscape"}],o={square:{width:512,height:512},portrait:{width:512,height:768},landscape:{width:768,height:512}},c={prompt:"prompt",negativePrompt:"negative_prompt",dimensions:"dimensions",samplerMethod:"sampler_method",samplerSteps:"sampler_steps",seed:"seed"};function D({[c.dimensions]:b,...N}){if(typeof b=="string"){if(!(b in o))throw Error("Неизвестное разрешение картинки");const{width:_,height:C}=o[b]||o.square;return{...N,width:_,height:C}}return N}function g({[c.samplerSteps]:b,[c.seed]:N,..._}){return{..._,[c.samplerSteps]:Number(b),[c.seed]:Number(N||-1)}}function O(b){const N=new FormData(b);try{const _=xe(N,ut,g,D,r);Promise.resolve(_).then(i)}catch(_){if(_ instanceof Error){alert(_.message);return}alert("Что-то пошло не так, проверьте введенные данные и попробуйте снова")}}function d(b){Be.call(this,l,b)}function E(b){Le[b?"unshift":"push"](()=>{u=b,n(0,u)})}const T=b=>O(b.currentTarget);return l.$$set=b=>{"form"in b&&n(0,u=b.form),"parseExtra"in b&&n(5,r=b.parseExtra),"onSubmit"in b&&n(6,i=b.onSubmit),"$$scope"in b&&n(7,a=b.$$scope)},[u,s,f,c,O,r,i,a,t,d,E,T]}class _t extends ee{constructor(e){super(),te(this,e,st,at,le,{form:0,parseExtra:5,onSubmit:6})}}export{_e as L,Ze as R,_t as S,Ue as a,Oe as b,ct as c,ot as g,xe as p,mt as s};
