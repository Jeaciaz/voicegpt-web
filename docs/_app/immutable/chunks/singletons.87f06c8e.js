import{H as d,s as E}from"./index.1a76dcac.js";const u=[];function b(t,e=d){let n;const s=new Set;function o(a){if(E(t,a)&&(t=a,n)){const c=!u.length;for(const l of s)l[1](),u.push(l,t);if(c){for(let l=0;l<u.length;l+=2)u[l][0](u[l+1]);u.length=0}}}function r(a){o(a(t))}function i(a,c=d){const l=[a,c];return s.add(l),s.size===1&&(n=e(o)||d),a(t),()=>{s.delete(l),s.size===0&&n&&(n(),n=null)}}return{set:o,update:r,subscribe:i}}var g;const m=((g=globalThis.__sveltekit_ztt9gc)==null?void 0:g.base)??"/voicegpt-web";var v;const w=((v=globalThis.__sveltekit_ztt9gc)==null?void 0:v.assets)??m,A="1678965611915",y="sveltekit:snapshot",x="sveltekit:scroll",O="sveltekit:index",p={tap:1,hover:2,viewport:3,eager:4,off:-1};function U(t){let e=t.baseURI;if(!e){const n=t.getElementsByTagName("base");e=n.length?n[0].href:t.URL}return e}function L(){return{x:pageXOffset,y:pageYOffset}}function f(t,e){return t.getAttribute(`data-sveltekit-${e}`)}const _={...p,"":p.hover};function k(t){let e=t.assignedSlot??t.parentNode;return(e==null?void 0:e.nodeType)===11&&(e=e.host),e}function N(t,e){for(;t&&t!==e;){if(t.nodeName.toUpperCase()==="A"&&t.hasAttribute("href"))return t;t=k(t)}}function V(t,e){let n;try{n=new URL(t instanceof SVGAElement?t.href.baseVal:t.href,document.baseURI)}catch{}const s=t instanceof SVGAElement?t.target.baseVal:t.target,o=!n||!!s||S(n,e)||(t.getAttribute("rel")||"").split(/\s+/).includes("external")||t.hasAttribute("download");return{url:n,external:o,target:s}}function z(t){let e=null,n=null,s=null,o=null,r=t;for(;r&&r!==document.documentElement;)n===null&&(n=f(r,"preload-code")),s===null&&(s=f(r,"preload-data")),e===null&&(e=f(r,"noscroll")),o===null&&(o=f(r,"reload")),r=k(r);return{preload_code:_[n??"off"],preload_data:_[s??"off"],noscroll:e==="off"?!1:e===""?!0:null,reload:o==="off"?!1:o===""?!0:null}}function h(t){const e=b(t);let n=!0;function s(){n=!0,e.update(i=>i)}function o(i){n=!1,e.set(i)}function r(i){let a;return e.subscribe(c=>{(a===void 0||n&&c!==a)&&i(a=c)})}return{notify:s,set:o,subscribe:r}}function R(){const{set:t,subscribe:e}=b(!1);let n;async function s(){clearTimeout(n);const o=await fetch(`${w}/_app/version.json`,{headers:{pragma:"no-cache","cache-control":"no-cache"}});if(o.ok){const i=(await o.json()).version!==A;return i&&(t(!0),clearTimeout(n)),i}else throw new Error(`Version check failed: ${o.status}`)}return{subscribe:e,check:s}}function S(t,e){return t.origin!==location.origin||!t.pathname.startsWith(e)}let T;function P(t){T=t.client}const Y={url:h({}),page:h({}),navigating:b(null),updated:R()};export{O as I,p as P,x as S,y as a,V as b,z as c,L as d,m as e,N as f,U as g,P as h,S as i,T as j,Y as s};
