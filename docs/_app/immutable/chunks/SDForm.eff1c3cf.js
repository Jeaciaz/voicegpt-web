import{_ as Fe}from"./preload-helper.41c905a7.js";import{b as Me}from"./paths.578d63d6.js";import{S as ee,i as te,s as le,e as x,b as I,v as Ie,d as k,f as Ae,g as E,h as g,F as Y,G as K,H as X,I as Z,k as w,q as G,a as V,l as S,m as N,r as Q,c as P,n as _,J as p,u as $,y,z as j,A as H,B as W,O as J,Q as de,L as Te,N as pe,U as ge,V as Be,P as Le,W as Ue,w as Oe}from"./index.72ff84a0.js";const ct=l=>fetch("https://voicechatgpt.ru/cache/",{method:"POST",body:l}).then(e=>e.json());function se(){return window.Telegram.WebApp}async function dt(l){await Fe(()=>import(`${Me}/telegram-web-app.js`),[],import.meta.url);const{MainButton:e}=se();Re(!1),e.setText("Сгенерировать").onClick(l).show()}function Re(l){const{MainButton:e,themeParams:n}=se();l?e.enable().setParams({color:n.button_color}):e.disable().setParams({color:n.hint_color})}function _t(l){const{sendData:e}=se();Ce(!0),e(JSON.stringify(l))}function Ce(l){const{MainButton:e}=se();l?e.showProgress():e.hideProgress()}function ye(l){let e;const n=l[3].default,t=Y(n,l,l[2],null);return{c(){t&&t.c()},l(a){t&&t.l(a)},m(a,s){t&&t.m(a,s),e=!0},p(a,s){t&&t.p&&(!e||s&4)&&K(t,n,a,a[2],e?Z(n,a[2],s,null):X(a[2]),null)},i(a){e||(E(t,a),e=!0)},o(a){k(t,a),e=!1},d(a){t&&t.d(a)}}}function je(l){let e,n,t,a,s,i,r=l[1]&&ve();const u=l[3].default,f=Y(u,l,l[2],null);return{c(){e=w("label"),n=w("span"),t=G(l[0]),a=V(),r&&r.c(),s=V(),f&&f.c(),this.h()},l(m){e=S(m,"LABEL",{class:!0});var o=N(e);n=S(o,"SPAN",{class:!0});var h=N(n);t=Q(h,l[0]),a=P(h),r&&r.l(h),h.forEach(g),s=P(o),f&&f.l(o),o.forEach(g),this.h()},h(){_(n,"class","text-sm text-[var(--theme-hint-color)] pl-1.5"),_(e,"class","flex flex-col")},m(m,o){I(m,e,o),p(e,n),p(n,t),p(n,a),r&&r.m(n,null),p(e,s),f&&f.m(e,null),i=!0},p(m,o){(!i||o&1)&&$(t,m[0]),m[1]?r||(r=ve(),r.c(),r.m(n,null)):r&&(r.d(1),r=null),f&&f.p&&(!i||o&4)&&K(f,u,m,m[2],i?Z(u,m[2],o,null):X(m[2]),null)},i(m){i||(E(f,m),i=!0)},o(m){k(f,m),i=!1},d(m){m&&g(e),r&&r.d(),f&&f.d(m)}}}function ve(l){let e,n;return{c(){e=w("span"),n=G("*"),this.h()},l(t){e=S(t,"SPAN",{class:!0});var a=N(e);n=Q(a,"*"),a.forEach(g),this.h()},h(){_(e,"class","text-sm text-red-500")},m(t,a){I(t,e,a),p(e,n)},d(t){t&&g(e)}}}function He(l){let e,n,t,a;const s=[je,ye],i=[];function r(u,f){return u[0]!==void 0?0:1}return e=r(l),n=i[e]=s[e](l),{c(){n.c(),t=x()},l(u){n.l(u),t=x()},m(u,f){i[e].m(u,f),I(u,t,f),a=!0},p(u,[f]){let m=e;e=r(u),e===m?i[e].p(u,f):(Ie(),k(i[m],1,1,()=>{i[m]=null}),Ae(),n=i[e],n?n.p(u,f):(n=i[e]=s[e](u),n.c()),E(n,1),n.m(t.parentNode,t))},i(u){a||(E(n),a=!0)},o(u){k(n),a=!1},d(u){i[e].d(u),u&&g(t)}}}function We(l,e,n){let{$$slots:t={},$$scope:a}=e,{label:s=void 0}=e,{required:i=!1}=e;return l.$$set=r=>{"label"in r&&n(0,s=r.label),"required"in r&&n(1,i=r.required),"$$scope"in r&&n(2,a=r.$$scope)},[s,i,a,t]}class _e extends ee{constructor(e){super(),te(this,e,We,He,le,{label:0,required:1})}}function Ee(l){let e,n=l[7].message+"",t;return{c(){e=w("span"),t=G(n),this.h()},l(a){e=S(a,"SPAN",{class:!0});var s=N(e);t=Q(s,n),s.forEach(g),this.h()},h(){_(e,"class","text-xs text-red-500")},m(a,s){I(a,e,s),p(e,t)},p(a,s){s&128&&n!==(n=a[7].message+"")&&$(t,n)},d(a){a&&g(e)}}}function Je(l){let e,n,t,a,s,i,r=l[8]&&l[7]!==void 0&&Ee(l);return{c(){e=w("input"),t=V(),r&&r.c(),a=x(),this.h()},l(u){e=S(u,"INPUT",{type:!0,name:!0,placeholder:!0,class:!0,"aria-label":!0}),t=P(u),r&&r.l(u),a=x(),this.h()},h(){_(e,"type",l[6]),_(e,"name",l[4]),_(e,"placeholder",l[2]),e.disabled=l[3],e.required=l[5],e.value=l[0],_(e,"class",n="border border-[var(--theme-hint-color)] rounded-md p-1 focus-visible:border-[var(--theme-text-color)] outline-0 "+(l[8]?"invalid:border-red-500":"")+" "+(l[8]&&l[7]!==void 0?"border-red-500":"")),_(e,"aria-label",l[1])},m(u,f){I(u,e,f),I(u,t,f),r&&r.m(u,f),I(u,a,f),s||(i=[J(e,"input",l[10]),J(e,"change",l[13]),J(e,"focus",l[14]),J(e,"blur",l[15])],s=!0)},p(u,f){f&64&&_(e,"type",u[6]),f&16&&_(e,"name",u[4]),f&4&&_(e,"placeholder",u[2]),f&8&&(e.disabled=u[3]),f&32&&(e.required=u[5]),f&1&&e.value!==u[0]&&(e.value=u[0]),f&384&&n!==(n="border border-[var(--theme-hint-color)] rounded-md p-1 focus-visible:border-[var(--theme-text-color)] outline-0 "+(u[8]?"invalid:border-red-500":"")+" "+(u[8]&&u[7]!==void 0?"border-red-500":""))&&_(e,"class",n),f&2&&_(e,"aria-label",u[1]),u[8]&&u[7]!==void 0?r?r.p(u,f):(r=Ee(u),r.c(),r.m(a.parentNode,a)):r&&(r.d(1),r=null)},d(u){u&&g(e),u&&g(t),r&&r.d(u),u&&g(a),s=!1,de(i)}}}function ze(l){let e,n;return e=new _e({props:{label:l[1],required:l[5],$$slots:{default:[Je]},$$scope:{ctx:l}}}),{c(){y(e.$$.fragment)},l(t){j(e.$$.fragment,t)},m(t,a){H(e,t,a),n=!0},p(t,[a]){const s={};a&2&&(s.label=t[1]),a&32&&(s.required=t[5]),a&131583&&(s.$$scope={dirty:a,ctx:t}),e.$set(s)},i(t){n||(E(e.$$.fragment,t),n=!0)},o(t){k(e.$$.fragment,t),n=!1},d(t){W(e,t)}}}function Ge(l,e,n){let{label:t=void 0}=e,{defaultValue:a=""}=e,{value:s=a}=e,{placeholder:i=void 0}=e,{disabled:r=!1}=e,{name:u=void 0}=e,{required:f=!1}=e,{validate:m=void 0}=e,{type:o="text"}=e,h,B=!1;function L(d){return o.match(/^number|range$/)?+d:d}function D(d){n(7,h=m==null?void 0:m(L(d)))}function z(d){n(0,s=L(d.currentTarget.value))}const O=d=>D(d.currentTarget.value),b=()=>n(8,B=!1),q=()=>n(8,B=!0);return l.$$set=d=>{"label"in d&&n(1,t=d.label),"defaultValue"in d&&n(11,a=d.defaultValue),"value"in d&&n(0,s=d.value),"placeholder"in d&&n(2,i=d.placeholder),"disabled"in d&&n(3,r=d.disabled),"name"in d&&n(4,u=d.name),"required"in d&&n(5,f=d.required),"validate"in d&&n(12,m=d.validate),"type"in d&&n(6,o=d.type)},[s,t,i,r,u,f,o,h,B,D,z,a,m,O,b,q]}class ce extends ee{constructor(e){super(),te(this,e,Ge,ze,le,{label:1,defaultValue:11,value:0,placeholder:2,disabled:3,name:4,required:5,validate:12,type:6})}}function De(l,e,n){const t=l.slice();return t[3]=e[n].label,t[6]=e[n].value,t}function ke(l){let e,n;return e=new _e({props:{label:l[3],$$slots:{default:[Qe]},$$scope:{ctx:l}}}),{c(){y(e.$$.fragment)},l(t){j(e.$$.fragment,t)},m(t,a){H(e,t,a),n=!0},p(t,a){const s={};a&8&&(s.label=t[3]),a&519&&(s.$$scope={dirty:a,ctx:t}),e.$set(s)},i(t){n||(E(e.$$.fragment,t),n=!0)},o(t){k(e.$$.fragment,t),n=!1},d(t){W(e,t)}}}function we(l){let e,n,t=l[3]+"",a,s,i,r;function u(){return l[5](l[6])}return{c(){e=w("li"),n=w("button"),a=G(t),s=V(),this.h()},l(f){e=S(f,"LI",{class:!0});var m=N(e);n=S(m,"BUTTON",{type:!0,class:!0});var o=N(n);a=Q(o,t),o.forEach(g),s=P(m),m.forEach(g),this.h()},h(){_(n,"type","button"),_(n,"class","item cursor-pointer svelte-fv5mem"),pe(n,"selected",l[0]===l[6]),_(e,"class","[&:not(:last-child)]:mr-4")},m(f,m){I(f,e,m),p(e,n),p(n,a),p(e,s),i||(r=J(n,"click",u),i=!0)},p(f,m){l=f,m&4&&t!==(t=l[3]+"")&&$(a,t),m&5&&pe(n,"selected",l[0]===l[6])},d(f){f&&g(e),i=!1,r()}}}function Qe(l){let e,n,t,a=l[2],s=[];for(let i=0;i<a.length;i+=1)s[i]=we(De(l,a,i));return{c(){e=w("ul");for(let i=0;i<s.length;i+=1)s[i].c();n=V(),t=w("input"),this.h()},l(i){e=S(i,"UL",{class:!0});var r=N(e);for(let u=0;u<s.length;u+=1)s[u].l(r);r.forEach(g),n=P(i),t=S(i,"INPUT",{type:!0,name:!0}),this.h()},h(){_(e,"class","flex flex-nowrap list-none overflow-auto max-w-full pt-1"),_(t,"type","hidden"),_(t,"name",l[1]),t.value=l[0]},m(i,r){I(i,e,r);for(let u=0;u<s.length;u+=1)s[u]&&s[u].m(e,null);I(i,n,r),I(i,t,r)},p(i,r){if(r&5){a=i[2];let u;for(u=0;u<a.length;u+=1){const f=De(i,a,u);s[u]?s[u].p(f,r):(s[u]=we(f),s[u].c(),s[u].m(e,null))}for(;u<s.length;u+=1)s[u].d(1);s.length=a.length}r&2&&_(t,"name",i[1]),r&1&&(t.value=i[0])},d(i){i&&g(e),Te(s,i),i&&g(n),i&&g(t)}}}function Ye(l){let e,n,t=l[2].length>0&&ke(l);return{c(){t&&t.c(),e=x()},l(a){t&&t.l(a),e=x()},m(a,s){t&&t.m(a,s),I(a,e,s),n=!0},p(a,[s]){a[2].length>0?t?(t.p(a,s),s&4&&E(t,1)):(t=ke(a),t.c(),E(t,1),t.m(e.parentNode,e)):t&&(Ie(),k(t,1,1,()=>{t=null}),Ae())},i(a){n||(E(t),n=!0)},o(a){k(t),n=!1},d(a){t&&t.d(a),a&&g(e)}}}function Ke(l,e,n){let{name:t=void 0}=e,{options:a=[]}=e,{label:s=void 0}=e,{defaultValue:i=a[0].value}=e,{value:r=i}=e;const u=f=>n(0,r=f);return l.$$set=f=>{"name"in f&&n(1,t=f.name),"options"in f&&n(2,a=f.options),"label"in f&&n(3,s=f.label),"defaultValue"in f&&n(4,i=f.defaultValue),"value"in f&&n(0,r=f.value)},[r,t,a,s,i,u]}class Se extends ee{constructor(e){super(),te(this,e,Ke,Ye,le,{name:1,options:2,label:3,defaultValue:4,value:0})}}function Xe(l){let e,n,t,a,s,i,r,u,f,m;return{c(){e=w("div"),n=w("span"),t=G(l[1]),a=V(),s=w("input"),i=V(),r=w("span"),u=G(l[0]),this.h()},l(o){e=S(o,"DIV",{class:!0});var h=N(e);n=S(h,"SPAN",{});var B=N(n);t=Q(B,l[1]),B.forEach(g),a=P(h),s=S(h,"INPUT",{class:!0,type:!0,max:!0,min:!0,step:!0,name:!0}),i=P(h),r=S(h,"SPAN",{});var L=N(r);u=Q(L,l[0]),L.forEach(g),h.forEach(g),this.h()},h(){_(s,"class","mx-1 flex-1 accent-[var(--theme-button-color)]"),_(s,"type","range"),_(s,"max",l[0]),_(s,"min",l[1]),_(s,"step",l[2]),_(s,"name",l[3]),_(e,"class","flex text-sm")},m(o,h){I(o,e,h),p(e,n),p(n,t),p(e,a),p(e,s),ge(s,l[5]),p(e,i),p(e,r),p(r,u),f||(m=[J(s,"change",l[7]),J(s,"input",l[7])],f=!0)},p(o,h){h&2&&$(t,o[1]),h&1&&_(s,"max",o[0]),h&2&&_(s,"min",o[1]),h&4&&_(s,"step",o[2]),h&8&&_(s,"name",o[3]),h&32&&ge(s,o[5]),h&1&&$(u,o[0])},d(o){o&&g(e),f=!1,de(m)}}}function Ze(l){let e,n;return e=new _e({props:{label:l[4]+": "+l[5],$$slots:{default:[Xe]},$$scope:{ctx:l}}}),{c(){y(e.$$.fragment)},l(t){j(e.$$.fragment,t)},m(t,a){H(e,t,a),n=!0},p(t,[a]){const s={};a&48&&(s.label=t[4]+": "+t[5]),a&303&&(s.$$scope={dirty:a,ctx:t}),e.$set(s)},i(t){n||(E(e.$$.fragment,t),n=!0)},o(t){k(e.$$.fragment,t),n=!1},d(t){W(e,t)}}}function xe(l,e,n){let{max:t}=e,{min:a}=e,{step:s=1}=e,{defaultValue:i=(t+a)/2}=e,{name:r=void 0}=e,{label:u=void 0}=e,f=`${i}`;function m(){f=Be(this.value),n(5,f)}return l.$$set=o=>{"max"in o&&n(0,t=o.max),"min"in o&&n(1,a=o.min),"step"in o&&n(2,s=o.step),"defaultValue"in o&&n(6,i=o.defaultValue),"name"in o&&n(3,r=o.name),"label"in o&&n(4,u=o.label)},[t,a,s,r,u,f,i,m]}class $e extends ee{constructor(e){super(),te(this,e,xe,Ze,le,{max:0,min:1,step:2,defaultValue:6,name:3,label:4})}}const et=()=>{},tt=(l,...e)=>e.reduce((n,t)=>t(n),l),lt=l=>({}),Ve=l=>({}),nt=l=>({}),Pe=l=>({}),at=l=>({}),qe=l=>({}),st=l=>({}),Ne=l=>({});function ut(l){let e,n,t,a,s,i,r,u,f,m,o,h,B,L,D,z,O,b,q,d,C,ue,U,re,he;const ie=l[8]["pre-basic"],A=Y(ie,l,l[7],Ne);a=new ce({props:{name:l[3].prompt,label:"Запрос",placeholder:"elden ring, epic",required:!0}}),i=new ce({props:{name:l[3].negativePrompt,label:"Антизапрос",placeholder:"realism"}}),u=new Se({props:{name:l[3].dimensions,options:l[2],label:"Размер изображения: "}});const fe=l[8]["post-basic"],F=Y(fe,l,l[7],qe),oe=l[8]["pre-advanced"],M=Y(oe,l,l[7],Pe);O=new Se({props:{name:l[3].samplerMethod,options:l[1],label:"Метод семплера"}}),q=new $e({props:{name:l[3].samplerSteps,min:20,max:40,label:"Шаги семплера",defaultValue:20}}),C=new ce({props:{name:l[3].seed,label:"Seed",placeholder:"1234567890",type:"number"}});const me=l[8]["post-advanced"],T=Y(me,l,l[7],Ve);return{c(){e=w("form"),A&&A.c(),n=V(),t=w("div"),y(a.$$.fragment),s=V(),y(i.$$.fragment),r=V(),y(u.$$.fragment),f=V(),F&&F.c(),m=V(),o=w("details"),h=w("summary"),B=G("Продвинутые опции"),L=V(),D=w("div"),M&&M.c(),z=V(),y(O.$$.fragment),b=V(),y(q.$$.fragment),d=V(),y(C.$$.fragment),ue=V(),T&&T.c(),this.h()},l(c){e=S(c,"FORM",{class:!0});var v=N(e);A&&A.l(v),n=P(v),t=S(v,"DIV",{class:!0});var ne=N(t);j(a.$$.fragment,ne),s=P(ne),j(i.$$.fragment,ne),ne.forEach(g),r=P(v),j(u.$$.fragment,v),f=P(v),F&&F.l(v),m=P(v),o=S(v,"DETAILS",{});var ae=N(o);h=S(ae,"SUMMARY",{});var be=N(h);B=Q(be,"Продвинутые опции"),be.forEach(g),L=P(ae),D=S(ae,"DIV",{class:!0});var R=N(D);M&&M.l(R),z=P(R),j(O.$$.fragment,R),b=P(R),j(q.$$.fragment,R),d=P(R),j(C.$$.fragment,R),ue=P(R),T&&T.l(R),R.forEach(g),ae.forEach(g),v.forEach(g),this.h()},h(){_(t,"class","grid grid-cols-2 gap-2"),_(D,"class","grid gap-4"),_(e,"class","grid gap-4 p-4 mt-4")},m(c,v){I(c,e,v),A&&A.m(e,null),p(e,n),p(e,t),H(a,t,null),p(t,s),H(i,t,null),p(e,r),H(u,e,null),p(e,f),F&&F.m(e,null),p(e,m),p(e,o),p(o,h),p(h,B),p(o,L),p(o,D),M&&M.m(D,null),p(D,z),H(O,D,null),p(D,b),H(q,D,null),p(D,d),H(C,D,null),p(D,ue),T&&T.m(D,null),l[10](e),U=!0,re||(he=[J(e,"submit",Le(l[11])),J(e,"input",l[9])],re=!0)},p(c,[v]){A&&A.p&&(!U||v&128)&&K(A,ie,c,c[7],U?Z(ie,c[7],v,st):X(c[7]),Ne),F&&F.p&&(!U||v&128)&&K(F,fe,c,c[7],U?Z(fe,c[7],v,at):X(c[7]),qe),M&&M.p&&(!U||v&128)&&K(M,oe,c,c[7],U?Z(oe,c[7],v,nt):X(c[7]),Pe),T&&T.p&&(!U||v&128)&&K(T,me,c,c[7],U?Z(me,c[7],v,lt):X(c[7]),Ve)},i(c){U||(E(A,c),E(a.$$.fragment,c),E(i.$$.fragment,c),E(u.$$.fragment,c),E(F,c),E(M,c),E(O.$$.fragment,c),E(q.$$.fragment,c),E(C.$$.fragment,c),E(T,c),U=!0)},o(c){k(A,c),k(a.$$.fragment,c),k(i.$$.fragment,c),k(u.$$.fragment,c),k(F,c),k(M,c),k(O.$$.fragment,c),k(q.$$.fragment,c),k(C.$$.fragment,c),k(T,c),U=!1},d(c){c&&g(e),A&&A.d(c),W(a),W(i),W(u),F&&F.d(c),M&&M.d(c),W(O),W(q),W(C),T&&T.d(c),l[10](null),re=!1,de(he)}}}function rt(l){const e={};return l.forEach((n,t)=>{e[t]=n}),e}function it(l,e,n){let{$$slots:t={},$$scope:a}=e,{form:s=null}=e,{parseExtra:i=b=>b}=e,{onSubmit:r=et}=e;const u=[{label:"Euler 𝛼",value:"Euler a"},{label:"Heun",value:"Heun"},{label:"DPM++ M2",value:"DPM++ 2M"},{label:"DDIM",value:"DDIM"}],f=[{label:"Квадрат [512x512]",value:"square"},{label:"Портрет [512x768]",value:"portrait"},{label:"Пейзаж [768x512]",value:"landscape"}],m={square:{width:512,height:512},portrait:{width:512,height:768},landscape:{width:768,height:512}},o={prompt:"prompt",negativePrompt:"negative_prompt",dimensions:"dimensions",samplerMethod:"sampler_method",samplerSteps:"sampler_steps",seed:"seed"};function h({[o.dimensions]:b,...q}){if(typeof b=="string"){if(!(b in m))throw Error("Неизвестное разрешение картинки");const{width:d,height:C}=m[b]||m.square;return{...q,width:d,height:C}}return q}function B({[o.samplerSteps]:b,[o.seed]:q,...d}){return{...d,[o.samplerSteps]:Number(b),[o.seed]:Number(q||-1)}}function L(b){const q=new FormData(b);try{const d=tt(q,rt,B,h,i);Promise.resolve(d).then(r)}catch(d){if(d instanceof Error){alert(d.message);return}alert("Что-то пошло не так, проверьте введенные данные и попробуйте снова")}}function D(b){Ue.call(this,l,b)}function z(b){Oe[b?"unshift":"push"](()=>{s=b,n(0,s)})}const O=b=>L(b.currentTarget);return l.$$set=b=>{"form"in b&&n(0,s=b.form),"parseExtra"in b&&n(5,i=b.parseExtra),"onSubmit"in b&&n(6,r=b.onSubmit),"$$scope"in b&&n(7,a=b.$$scope)},[s,u,f,o,L,i,r,a,t,D,z,O]}class ht extends ee{constructor(e){super(),te(this,e,it,ut,le,{form:0,parseExtra:5,onSubmit:6})}}export{_e as L,$e as R,ht as S,Re as a,Ce as b,_t as c,ct as g,tt as p,dt as s};
