import{S,i as v,s as k,w as y,P as E,k as x,q as B,a as G,y as d,l as I,m as T,r as q,h as u,c as w,z as _,n as F,b as p,G as M,A as $,Q as C,g,d as h,B as b,o as D,H}from"../chunks/index.4cd36e52.js";import{S as N,s as P,R,a as V,b as X}from"../chunks/SDForm.82462204.js";function z(n){let e,r;return e=new R({props:{slot:"post-advanced",name:"cfg_scale",min:1,max:25,label:"CFG Scale",step:.5,defaultValue:7.5}}),{c(){d(e.$$.fragment)},l(t){_(e.$$.fragment,t)},m(t,s){$(e,t,s),r=!0},p:H,i(t){r||(g(e.$$.fragment,t),r=!0)},o(t){h(e.$$.fragment,t),r=!1},d(t){b(e,t)}}}function A(n){let e,r,t,s,f,i;function l(a){n[3](a)}let m={onSubmit:n[2],parseExtra:J,$$slots:{"post-advanced":[z]},$$scope:{ctx:n}};return n[0]!==void 0&&(m.form=n[0]),s=new N({props:m}),y.push(()=>E(s,"form",l)),s.$on("input",n[1]),{c(){e=x("h1"),r=B("TXT -> IMG"),t=G(),d(s.$$.fragment),this.h()},l(a){e=I(a,"H1",{class:!0});var o=T(e);r=q(o,"TXT -> IMG"),o.forEach(u),t=w(a),_(s.$$.fragment,a),this.h()},h(){F(e,"class","text-center text-3xl")},m(a,o){p(a,e,o),M(e,r),p(a,t,o),$(s,a,o),i=!0},p(a,[o]){const c={};o&16&&(c.$$scope={dirty:o,ctx:a}),!f&&o&1&&(f=!0,c.form=a[0],C(()=>f=!1)),s.$set(c)},i(a){i||(g(s.$$.fragment,a),i=!0)},o(a){h(s.$$.fragment,a),i=!1},d(a){a&&u(e),a&&u(t),b(s,a)}}}function J({cfg_scale:n,...e}){return{...e,cfg_scale:Number(n)}}function O(n,e,r){let t;function s(){V(t.checkValidity())}function f(l){try{X(l)}catch(m){alert("Error: "+JSON.stringify(m)+"; "+m.message)}}D(()=>P(()=>t.requestSubmit()));function i(l){t=l,r(0,t)}return[t,s,f,i]}class K extends S{constructor(e){super(),v(this,e,O,A,k,{})}}export{K as default};