import{_ as Ae}from"./preload-helper.41c905a7.js";import{b as Fe}from"./paths.79bc6afb.js";import{S as ee,i as le,s as te,e as x,b as N,v as qe,d as k,f as Ie,g as E,h as p,F as Y,G as K,H as X,I as Z,k as w,q as G,a as P,l as S,m as I,r as Q,c as V,n as h,J as g,u as $,y,z as H,A as j,B as J,O as W,Q as Ne,L as Me,N as be,P as Te,U as Be,w as Le}from"./index.98711fea.js";function ue(){return window.Telegram.WebApp}async function ol(t){await Ae(()=>import(`${Fe}/telegram-web-app.js`),[],import.meta.url);const{MainButton:e}=ue();Ue(!1),e.setText("Сгенерировать").onClick(t).show()}function Ue(t){const{MainButton:e,themeParams:n}=ue();t?e.enable().setParams({color:n.button_color}):e.disable().setParams({color:n.hint_color})}function ml(t){const{sendData:e}=ue();Re(!0),e(JSON.stringify(t))}function Re(t){const{MainButton:e}=ue();t?e.showProgress():e.hideProgress()}function Oe(t){let e;const n=t[3].default,l=Y(n,t,t[2],null);return{c(){l&&l.c()},l(a){l&&l.l(a)},m(a,u){l&&l.m(a,u),e=!0},p(a,u){l&&l.p&&(!e||u&4)&&K(l,n,a,a[2],e?Z(n,a[2],u,null):X(a[2]),null)},i(a){e||(E(l,a),e=!0)},o(a){k(l,a),e=!1},d(a){l&&l.d(a)}}}function Ce(t){let e,n,l,a,u,i,r=t[1]&&ge();const s=t[3].default,f=Y(s,t,t[2],null);return{c(){e=w("label"),n=w("span"),l=G(t[0]),a=P(),r&&r.c(),u=P(),f&&f.c(),this.h()},l(m){e=S(m,"LABEL",{class:!0});var c=I(e);n=S(c,"SPAN",{class:!0});var o=I(n);l=Q(o,t[0]),a=V(o),r&&r.l(o),o.forEach(p),u=V(c),f&&f.l(c),c.forEach(p),this.h()},h(){h(n,"class","text-sm text-[var(--theme-hint-color)] pl-1.5"),h(e,"class","flex flex-col")},m(m,c){N(m,e,c),g(e,n),g(n,l),g(n,a),r&&r.m(n,null),g(e,u),f&&f.m(e,null),i=!0},p(m,c){(!i||c&1)&&$(l,m[0]),m[1]?r||(r=ge(),r.c(),r.m(n,null)):r&&(r.d(1),r=null),f&&f.p&&(!i||c&4)&&K(f,s,m,m[2],i?Z(s,m[2],c,null):X(m[2]),null)},i(m){i||(E(f,m),i=!0)},o(m){k(f,m),i=!1},d(m){m&&p(e),r&&r.d(),f&&f.d(m)}}}function ge(t){let e,n;return{c(){e=w("span"),n=G("*"),this.h()},l(l){e=S(l,"SPAN",{class:!0});var a=I(e);n=Q(a,"*"),a.forEach(p),this.h()},h(){h(e,"class","text-sm text-red-500")},m(l,a){N(l,e,a),g(e,n)},d(l){l&&p(e)}}}function ye(t){let e,n,l,a;const u=[Ce,Oe],i=[];function r(s,f){return s[0]!==void 0?0:1}return e=r(t),n=i[e]=u[e](t),{c(){n.c(),l=x()},l(s){n.l(s),l=x()},m(s,f){i[e].m(s,f),N(s,l,f),a=!0},p(s,[f]){let m=e;e=r(s),e===m?i[e].p(s,f):(qe(),k(i[m],1,1,()=>{i[m]=null}),Ie(),n=i[e],n?n.p(s,f):(n=i[e]=u[e](s),n.c()),E(n,1),n.m(l.parentNode,l))},i(s){a||(E(n),a=!0)},o(s){k(n),a=!1},d(s){i[e].d(s),s&&p(l)}}}function He(t,e,n){let{$$slots:l={},$$scope:a}=e,{label:u=void 0}=e,{required:i=!1}=e;return t.$$set=r=>{"label"in r&&n(0,u=r.label),"required"in r&&n(1,i=r.required),"$$scope"in r&&n(2,a=r.$$scope)},[u,i,a,l]}class de extends ee{constructor(e){super(),le(this,e,He,ye,te,{label:0,required:1})}}function pe(t){let e,n=t[7].message+"",l;return{c(){e=w("span"),l=G(n),this.h()},l(a){e=S(a,"SPAN",{class:!0});var u=I(e);l=Q(u,n),u.forEach(p),this.h()},h(){h(e,"class","text-xs text-red-500")},m(a,u){N(a,e,u),g(e,l)},p(a,u){u&128&&n!==(n=a[7].message+"")&&$(l,n)},d(a){a&&p(e)}}}function je(t){let e,n,l,a,u,i,r=t[8]&&t[7]!==void 0&&pe(t);return{c(){e=w("input"),l=P(),r&&r.c(),a=x(),this.h()},l(s){e=S(s,"INPUT",{type:!0,name:!0,placeholder:!0,class:!0,"aria-label":!0}),l=V(s),r&&r.l(s),a=x(),this.h()},h(){h(e,"type",t[6]),h(e,"name",t[4]),h(e,"placeholder",t[2]),e.disabled=t[3],e.required=t[5],e.value=t[0],h(e,"class",n="border border-[var(--theme-hint-color)] rounded-md p-1 focus-visible:border-[var(--theme-text-color)] outline-0 "+(t[8]?"invalid:border-red-500":"")+" "+(t[8]&&t[7]!==void 0?"border-red-500":"")),h(e,"aria-label",t[1])},m(s,f){N(s,e,f),N(s,l,f),r&&r.m(s,f),N(s,a,f),u||(i=[W(e,"input",t[10]),W(e,"change",t[13]),W(e,"focus",t[14]),W(e,"blur",t[15])],u=!0)},p(s,f){f&64&&h(e,"type",s[6]),f&16&&h(e,"name",s[4]),f&4&&h(e,"placeholder",s[2]),f&8&&(e.disabled=s[3]),f&32&&(e.required=s[5]),f&1&&e.value!==s[0]&&(e.value=s[0]),f&384&&n!==(n="border border-[var(--theme-hint-color)] rounded-md p-1 focus-visible:border-[var(--theme-text-color)] outline-0 "+(s[8]?"invalid:border-red-500":"")+" "+(s[8]&&s[7]!==void 0?"border-red-500":""))&&h(e,"class",n),f&2&&h(e,"aria-label",s[1]),s[8]&&s[7]!==void 0?r?r.p(s,f):(r=pe(s),r.c(),r.m(a.parentNode,a)):r&&(r.d(1),r=null)},d(s){s&&p(e),s&&p(l),r&&r.d(s),s&&p(a),u=!1,Ne(i)}}}function Je(t){let e,n;return e=new de({props:{label:t[1],required:t[5],$$slots:{default:[je]},$$scope:{ctx:t}}}),{c(){y(e.$$.fragment)},l(l){H(e.$$.fragment,l)},m(l,a){j(e,l,a),n=!0},p(l,[a]){const u={};a&2&&(u.label=l[1]),a&32&&(u.required=l[5]),a&131583&&(u.$$scope={dirty:a,ctx:l}),e.$set(u)},i(l){n||(E(e.$$.fragment,l),n=!0)},o(l){k(e.$$.fragment,l),n=!1},d(l){J(e,l)}}}function We(t,e,n){let{label:l=void 0}=e,{defaultValue:a=""}=e,{value:u=a}=e,{placeholder:i=void 0}=e,{disabled:r=!1}=e,{name:s=void 0}=e,{required:f=!1}=e,{validate:m=void 0}=e,{type:c="text"}=e,o,B=!1;function L(_){return c.match(/^number|range$/)?+_:_}function D(_){n(7,o=m==null?void 0:m(L(_)))}function z(_){n(0,u=L(_.currentTarget.value))}const R=_=>D(_.currentTarget.value),b=()=>n(8,B=!1),q=()=>n(8,B=!0);return t.$$set=_=>{"label"in _&&n(1,l=_.label),"defaultValue"in _&&n(11,a=_.defaultValue),"value"in _&&n(0,u=_.value),"placeholder"in _&&n(2,i=_.placeholder),"disabled"in _&&n(3,r=_.disabled),"name"in _&&n(4,s=_.name),"required"in _&&n(5,f=_.required),"validate"in _&&n(12,m=_.validate),"type"in _&&n(6,c=_.type)},[u,l,i,r,s,f,c,o,B,D,z,a,m,R,b,q]}class ce extends ee{constructor(e){super(),le(this,e,We,Je,te,{label:1,defaultValue:11,value:0,placeholder:2,disabled:3,name:4,required:5,validate:12,type:6})}}function ve(t,e,n){const l=t.slice();return l[3]=e[n].label,l[6]=e[n].value,l}function Ee(t){let e,n;return e=new de({props:{label:t[3],$$slots:{default:[ze]},$$scope:{ctx:t}}}),{c(){y(e.$$.fragment)},l(l){H(e.$$.fragment,l)},m(l,a){j(e,l,a),n=!0},p(l,a){const u={};a&8&&(u.label=l[3]),a&519&&(u.$$scope={dirty:a,ctx:l}),e.$set(u)},i(l){n||(E(e.$$.fragment,l),n=!0)},o(l){k(e.$$.fragment,l),n=!1},d(l){J(e,l)}}}function De(t){let e,n,l=t[3]+"",a,u,i,r;function s(){return t[5](t[6])}return{c(){e=w("li"),n=w("button"),a=G(l),u=P(),this.h()},l(f){e=S(f,"LI",{class:!0});var m=I(e);n=S(m,"BUTTON",{type:!0,class:!0});var c=I(n);a=Q(c,l),c.forEach(p),u=V(m),m.forEach(p),this.h()},h(){h(n,"type","button"),h(n,"class","item cursor-pointer svelte-fv5mem"),be(n,"selected",t[0]===t[6]),h(e,"class","[&:not(:last-child)]:mr-4")},m(f,m){N(f,e,m),g(e,n),g(n,a),g(e,u),i||(r=W(n,"click",s),i=!0)},p(f,m){t=f,m&4&&l!==(l=t[3]+"")&&$(a,l),m&5&&be(n,"selected",t[0]===t[6])},d(f){f&&p(e),i=!1,r()}}}function ze(t){let e,n,l,a=t[2],u=[];for(let i=0;i<a.length;i+=1)u[i]=De(ve(t,a,i));return{c(){e=w("ul");for(let i=0;i<u.length;i+=1)u[i].c();n=P(),l=w("input"),this.h()},l(i){e=S(i,"UL",{class:!0});var r=I(e);for(let s=0;s<u.length;s+=1)u[s].l(r);r.forEach(p),n=V(i),l=S(i,"INPUT",{type:!0,name:!0}),this.h()},h(){h(e,"class","flex flex-nowrap list-none overflow-auto max-w-full pt-1"),h(l,"type","hidden"),h(l,"name",t[1]),l.value=t[0]},m(i,r){N(i,e,r);for(let s=0;s<u.length;s+=1)u[s]&&u[s].m(e,null);N(i,n,r),N(i,l,r)},p(i,r){if(r&5){a=i[2];let s;for(s=0;s<a.length;s+=1){const f=ve(i,a,s);u[s]?u[s].p(f,r):(u[s]=De(f),u[s].c(),u[s].m(e,null))}for(;s<u.length;s+=1)u[s].d(1);u.length=a.length}r&2&&h(l,"name",i[1]),r&1&&(l.value=i[0])},d(i){i&&p(e),Me(u,i),i&&p(n),i&&p(l)}}}function Ge(t){let e,n,l=t[2].length>0&&Ee(t);return{c(){l&&l.c(),e=x()},l(a){l&&l.l(a),e=x()},m(a,u){l&&l.m(a,u),N(a,e,u),n=!0},p(a,[u]){a[2].length>0?l?(l.p(a,u),u&4&&E(l,1)):(l=Ee(a),l.c(),E(l,1),l.m(e.parentNode,e)):l&&(qe(),k(l,1,1,()=>{l=null}),Ie())},i(a){n||(E(l),n=!0)},o(a){k(l),n=!1},d(a){l&&l.d(a),a&&p(e)}}}function Qe(t,e,n){let{name:l=void 0}=e,{options:a=[]}=e,{label:u=void 0}=e,{defaultValue:i=a[0].value}=e,{value:r=i}=e;const s=f=>n(0,r=f);return t.$$set=f=>{"name"in f&&n(1,l=f.name),"options"in f&&n(2,a=f.options),"label"in f&&n(3,u=f.label),"defaultValue"in f&&n(4,i=f.defaultValue),"value"in f&&n(0,r=f.value)},[r,l,a,u,i,s]}class ke extends ee{constructor(e){super(),le(this,e,Qe,Ge,te,{name:1,options:2,label:3,defaultValue:4,value:0})}}function Ye(t){let e,n,l,a,u,i,r,s,f,m;return{c(){e=w("div"),n=w("span"),l=G(t[2]),a=P(),u=w("input"),i=P(),r=w("span"),s=G(t[1]),this.h()},l(c){e=S(c,"DIV",{class:!0});var o=I(e);n=S(o,"SPAN",{});var B=I(n);l=Q(B,t[2]),B.forEach(p),a=V(o),u=S(o,"INPUT",{class:!0,type:!0,max:!0,min:!0,step:!0,name:!0}),i=V(o),r=S(o,"SPAN",{});var L=I(r);s=Q(L,t[1]),L.forEach(p),o.forEach(p),this.h()},h(){h(u,"class","mx-1 flex-1 accent-[var(--theme-button-color)]"),h(u,"type","range"),u.value=t[0],h(u,"max",t[1]),h(u,"min",t[2]),h(u,"step",t[3]),h(u,"name",t[4]),h(e,"class","flex text-sm")},m(c,o){N(c,e,o),g(e,n),g(n,l),g(e,a),g(e,u),g(e,i),g(e,r),g(r,s),f||(m=W(u,"input",t[8]),f=!0)},p(c,o){o&4&&$(l,c[2]),o&1&&(u.value=c[0]),o&2&&h(u,"max",c[1]),o&4&&h(u,"min",c[2]),o&8&&h(u,"step",c[3]),o&16&&h(u,"name",c[4]),o&2&&$(s,c[1])},d(c){c&&p(e),f=!1,m()}}}function Ke(t){let e,n;return e=new de({props:{label:t[5]+": "+t[0],$$slots:{default:[Ye]},$$scope:{ctx:t}}}),{c(){y(e.$$.fragment)},l(l){H(e.$$.fragment,l)},m(l,a){j(e,l,a),n=!0},p(l,[a]){const u={};a&33&&(u.label=l[5]+": "+l[0]),a&543&&(u.$$scope={dirty:a,ctx:l}),e.$set(u)},i(l){n||(E(e.$$.fragment,l),n=!0)},o(l){k(e.$$.fragment,l),n=!1},d(l){J(e,l)}}}function Xe(t,e,n){let{max:l}=e,{min:a}=e,{step:u=1}=e,{defaultValue:i=(l+a)/2}=e,{value:r=i}=e,{name:s=void 0}=e,{label:f=void 0}=e;function m(o){n(0,r=+o)}const c=o=>m(o.currentTarget.value);return t.$$set=o=>{"max"in o&&n(1,l=o.max),"min"in o&&n(2,a=o.min),"step"in o&&n(3,u=o.step),"defaultValue"in o&&n(7,i=o.defaultValue),"value"in o&&n(0,r=o.value),"name"in o&&n(4,s=o.name),"label"in o&&n(5,f=o.label)},[r,l,a,u,s,f,m,i,c]}class Ze extends ee{constructor(e){super(),le(this,e,Xe,Ke,te,{max:1,min:2,step:3,defaultValue:7,value:0,name:4,label:5})}}const xe=()=>{},$e=(t,...e)=>e.reduce((n,l)=>l(n),t),el=t=>({}),we=t=>({}),ll=t=>({}),Se=t=>({}),tl=t=>({}),Pe=t=>({}),nl=t=>({}),Ve=t=>({});function al(t){let e,n,l,a,u,i,r,s,f,m,c,o,B,L,D,z,R,b,q,_,C,se,U,re,_e;const ie=t[8]["pre-basic"],A=Y(ie,t,t[7],Ve);a=new ce({props:{name:t[3].prompt,label:"Запрос",placeholder:"elden ring, epic",required:!0}}),i=new ce({props:{name:t[3].negativePrompt,label:"Антизапрос",placeholder:"realism"}}),s=new ke({props:{name:t[3].dimensions,options:t[2],label:"Размер изображения: "}});const fe=t[8]["post-basic"],F=Y(fe,t,t[7],Pe),oe=t[8]["pre-advanced"],M=Y(oe,t,t[7],Se);R=new ke({props:{name:t[3].samplerMethod,options:t[1],label:"Метод семплера"}}),q=new Ze({props:{name:t[3].samplerSteps,min:20,max:40,label:"Шаги семплера",defaultValue:20}}),C=new ce({props:{name:t[3].seed,label:"Seed",placeholder:"1234567890",type:"number"}});const me=t[8]["post-advanced"],T=Y(me,t,t[7],we);return{c(){e=w("form"),A&&A.c(),n=P(),l=w("div"),y(a.$$.fragment),u=P(),y(i.$$.fragment),r=P(),y(s.$$.fragment),f=P(),F&&F.c(),m=P(),c=w("details"),o=w("summary"),B=G("Продвинутые опции"),L=P(),D=w("div"),M&&M.c(),z=P(),y(R.$$.fragment),b=P(),y(q.$$.fragment),_=P(),y(C.$$.fragment),se=P(),T&&T.c(),this.h()},l(d){e=S(d,"FORM",{class:!0});var v=I(e);A&&A.l(v),n=V(v),l=S(v,"DIV",{class:!0});var ne=I(l);H(a.$$.fragment,ne),u=V(ne),H(i.$$.fragment,ne),ne.forEach(p),r=V(v),H(s.$$.fragment,v),f=V(v),F&&F.l(v),m=V(v),c=S(v,"DETAILS",{});var ae=I(c);o=S(ae,"SUMMARY",{});var he=I(o);B=Q(he,"Продвинутые опции"),he.forEach(p),L=V(ae),D=S(ae,"DIV",{class:!0});var O=I(D);M&&M.l(O),z=V(O),H(R.$$.fragment,O),b=V(O),H(q.$$.fragment,O),_=V(O),H(C.$$.fragment,O),se=V(O),T&&T.l(O),O.forEach(p),ae.forEach(p),v.forEach(p),this.h()},h(){h(l,"class","grid grid-cols-2 gap-2"),h(D,"class","grid gap-4"),h(e,"class","grid gap-4 p-4 mt-4")},m(d,v){N(d,e,v),A&&A.m(e,null),g(e,n),g(e,l),j(a,l,null),g(l,u),j(i,l,null),g(e,r),j(s,e,null),g(e,f),F&&F.m(e,null),g(e,m),g(e,c),g(c,o),g(o,B),g(c,L),g(c,D),M&&M.m(D,null),g(D,z),j(R,D,null),g(D,b),j(q,D,null),g(D,_),j(C,D,null),g(D,se),T&&T.m(D,null),t[10](e),U=!0,re||(_e=[W(e,"submit",Te(t[11])),W(e,"input",t[9])],re=!0)},p(d,[v]){A&&A.p&&(!U||v&128)&&K(A,ie,d,d[7],U?Z(ie,d[7],v,nl):X(d[7]),Ve),F&&F.p&&(!U||v&128)&&K(F,fe,d,d[7],U?Z(fe,d[7],v,tl):X(d[7]),Pe),M&&M.p&&(!U||v&128)&&K(M,oe,d,d[7],U?Z(oe,d[7],v,ll):X(d[7]),Se),T&&T.p&&(!U||v&128)&&K(T,me,d,d[7],U?Z(me,d[7],v,el):X(d[7]),we)},i(d){U||(E(A,d),E(a.$$.fragment,d),E(i.$$.fragment,d),E(s.$$.fragment,d),E(F,d),E(M,d),E(R.$$.fragment,d),E(q.$$.fragment,d),E(C.$$.fragment,d),E(T,d),U=!0)},o(d){k(A,d),k(a.$$.fragment,d),k(i.$$.fragment,d),k(s.$$.fragment,d),k(F,d),k(M,d),k(R.$$.fragment,d),k(q.$$.fragment,d),k(C.$$.fragment,d),k(T,d),U=!1},d(d){d&&p(e),A&&A.d(d),J(a),J(i),J(s),F&&F.d(d),M&&M.d(d),J(R),J(q),J(C),T&&T.d(d),t[10](null),re=!1,Ne(_e)}}}function ul(t){const e={};return t.forEach((n,l)=>{e[l]=n}),e}function sl(t,e,n){let{$$slots:l={},$$scope:a}=e,{form:u=null}=e,{parseExtra:i=b=>b}=e,{onSubmit:r=xe}=e;const s=[{label:"Euler 𝛼",value:"Euler a"},{label:"Heun",value:"Heun"},{label:"DPM++ M2",value:"DPM++ 2M"},{label:"DDIM",value:"DDIM"}],f=[{label:"Квадрат [512x512]",value:"square"},{label:"Портрет [512x768]",value:"portrait"},{label:"Пейзаж [768x512]",value:"landscape"}],m={square:{width:512,height:512},portrait:{width:512,height:768},landscape:{width:768,height:512}},c={prompt:"prompt",negativePrompt:"negative_prompt",dimensions:"dimensions",samplerMethod:"sampler_method",samplerSteps:"sampler_steps",seed:"seed"};function o({[c.dimensions]:b,...q}){if(typeof b=="string"){if(!(b in m))throw Error("Неизвестное разрешение картинки");const{width:_,height:C}=m[b]||m.square;return{...q,width:_,height:C}}return q}function B({[c.samplerSteps]:b,[c.seed]:q,..._}){return{..._,[c.samplerSteps]:Number(b),[c.seed]:Number(q)}}function L(b){const q=new FormData(b);try{const _=$e(q,ul,B,o,i);Promise.resolve(_).then(r)}catch(_){if(_ instanceof Error){alert(_.message);return}alert("Что-то пошло не так, проверьте введенные данные и попробуйте снова")}}function D(b){Be.call(this,t,b)}function z(b){Le[b?"unshift":"push"](()=>{u=b,n(0,u)})}const R=b=>L(b.currentTarget);return t.$$set=b=>{"form"in b&&n(0,u=b.form),"parseExtra"in b&&n(5,i=b.parseExtra),"onSubmit"in b&&n(6,r=b.onSubmit),"$$scope"in b&&n(7,a=b.$$scope)},[u,s,f,c,L,i,r,a,l,D,z,R]}class cl extends ee{constructor(e){super(),le(this,e,sl,al,te,{form:0,parseExtra:5,onSubmit:6})}}export{de as L,Ze as R,cl as S,Ue as a,ml as b,Re as c,ol as s};