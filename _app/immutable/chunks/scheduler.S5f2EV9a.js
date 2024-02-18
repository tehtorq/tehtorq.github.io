var C=Object.defineProperty;var B=(t,n,e)=>n in t?C(t,n,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[n]=e;var f=(t,n,e)=>(B(t,typeof n!="symbol"?n+"":n,e),e);function D(){}function O(t,n){for(const e in n)t[e]=n[e];return t}function q(t){return t()}function et(){return Object.create(null)}function G(t){t.forEach(q)}function it(t){return typeof t=="function"}function lt(t,n){return t!=t?n==n:t!==n||t&&typeof t=="object"||typeof t=="function"}function ct(t){return Object.keys(t).length===0}function I(t,...n){if(t==null){for(const i of n)i(void 0);return D}const e=t.subscribe(...n);return e.unsubscribe?()=>e.unsubscribe():e}function rt(t,n,e){t.$$.on_destroy.push(I(n,e))}function st(t,n,e,i){if(t){const l=M(t,n,e,i);return t[0](l)}}function M(t,n,e,i){return t[1]&&i?O(e.ctx.slice(),t[1](i(n))):e.ctx}function ot(t,n,e,i){if(t[2]&&i){const l=t[2](i(e));if(n.dirty===void 0)return l;if(typeof l=="object"){const s=[],c=Math.max(n.dirty.length,l.length);for(let o=0;o<c;o+=1)s[o]=n.dirty[o]|l[o];return s}return n.dirty|l}return n.dirty}function at(t,n,e,i,l,s){if(l){const c=M(n,e,i,s);t.p(c,l)}}function ut(t){if(t.ctx.length>32){const n=[],e=t.ctx.length/32;for(let i=0;i<e;i++)n[i]=-1;return n}return-1}let p=!1;function ft(){p=!0}function _t(){p=!1}function z(t,n,e,i){for(;t<n;){const l=t+(n-t>>1);e(l)<=i?t=l+1:n=l}return t}function F(t){if(t.hydrate_init)return;t.hydrate_init=!0;let n=t.childNodes;if(t.nodeName==="HEAD"){const r=[];for(let a=0;a<n.length;a++){const u=n[a];u.claim_order!==void 0&&r.push(u)}n=r}const e=new Int32Array(n.length+1),i=new Int32Array(n.length);e[0]=-1;let l=0;for(let r=0;r<n.length;r++){const a=n[r].claim_order,u=(l>0&&n[e[l]].claim_order<=a?l+1:z(1,l,S=>n[e[S]].claim_order,a))-1;i[r]=e[u]+1;const v=u+1;e[v]=r,l=Math.max(v,l)}const s=[],c=[];let o=n.length-1;for(let r=e[l]+1;r!=0;r=i[r-1]){for(s.push(n[r-1]);o>=r;o--)c.push(n[o]);o--}for(;o>=0;o--)c.push(n[o]);s.reverse(),c.sort((r,a)=>r.claim_order-a.claim_order);for(let r=0,a=0;r<c.length;r++){for(;a<s.length&&c[r].claim_order>=s[a].claim_order;)a++;const u=a<s.length?s[a]:null;t.insertBefore(c[r],u)}}function R(t,n){if(p){for(F(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;n!==t.actual_end_child?(n.claim_order!==void 0||n.parentNode!==t)&&t.insertBefore(n,t.actual_end_child):t.actual_end_child=n.nextSibling}else(n.parentNode!==t||n.nextSibling!==null)&&t.appendChild(n)}function U(t,n,e){t.insertBefore(n,e||null)}function W(t,n,e){p&&!e?R(t,n):(n.parentNode!==t||n.nextSibling!=e)&&t.insertBefore(n,e||null)}function x(t){t.parentNode&&t.parentNode.removeChild(t)}function H(t){return document.createElement(t)}function J(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function w(t){return document.createTextNode(t)}function ht(){return w(" ")}function dt(){return w("")}function mt(t,n,e,i){return t.addEventListener(n,e,i),()=>t.removeEventListener(n,e,i)}function pt(t){return function(n){return n.stopPropagation(),t.call(this,n)}}function bt(t,n,e){e==null?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}function yt(t){return t.dataset.svelteH}function gt(t){return t===""?null:+t}function xt(t){return Array.from(t.childNodes)}function L(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function P(t,n,e,i,l=!1){L(t);const s=(()=>{for(let c=t.claim_info.last_index;c<t.length;c++){const o=t[c];if(n(o)){const r=e(o);return r===void 0?t.splice(c,1):t[c]=r,l||(t.claim_info.last_index=c),o}}for(let c=t.claim_info.last_index-1;c>=0;c--){const o=t[c];if(n(o)){const r=e(o);return r===void 0?t.splice(c,1):t[c]=r,l?r===void 0&&t.claim_info.last_index--:t.claim_info.last_index=c,o}}return i()})();return s.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,s}function K(t,n,e,i){return P(t,l=>l.nodeName===n,l=>{const s=[];for(let c=0;c<l.attributes.length;c++){const o=l.attributes[c];e[o.name]||s.push(o.name)}s.forEach(c=>l.removeAttribute(c))},()=>i(n))}function Et(t,n,e){return K(t,n,e,H)}function Q(t,n){return P(t,e=>e.nodeType===3,e=>{const i=""+n;if(e.data.startsWith(i)){if(e.data.length!==i.length)return e.splitText(i.length)}else e.data=i},()=>w(n),!0)}function Tt(t){return Q(t," ")}function k(t,n,e){for(let i=e;i<t.length;i+=1){const l=t[i];if(l.nodeType===8&&l.textContent.trim()===n)return i}return-1}function wt(t,n){const e=k(t,"HTML_TAG_START",0),i=k(t,"HTML_TAG_END",e+1);if(e===-1||i===-1)return new b(n);L(t);const l=t.splice(e,i-e+1);x(l[0]),x(l[l.length-1]);const s=l.slice(1,l.length-1);if(s.length===0)return new b(n);for(const c of s)c.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1;return new b(n,s)}function Nt(t,n){n=""+n,t.data!==n&&(t.data=n)}function vt(t,n){t.value=n??""}function kt(t,n,e,i){e==null?t.style.removeProperty(n):t.style.setProperty(n,e,i?"important":"")}function V(t,n,{bubbles:e=!1,cancelable:i=!1}={}){return new CustomEvent(t,{detail:n,bubbles:e,cancelable:i})}class X{constructor(n=!1){f(this,"is_svg",!1);f(this,"e");f(this,"n");f(this,"t");f(this,"a");this.is_svg=n,this.e=this.n=null}c(n){this.h(n)}m(n,e,i=null){this.e||(this.is_svg?this.e=J(e.nodeName):this.e=H(e.nodeType===11?"TEMPLATE":e.nodeName),this.t=e.tagName!=="TEMPLATE"?e:e.content,this.c(n)),this.i(i)}h(n){this.e.innerHTML=n,this.n=Array.from(this.e.nodeName==="TEMPLATE"?this.e.content.childNodes:this.e.childNodes)}i(n){for(let e=0;e<this.n.length;e+=1)U(this.t,this.n[e],n)}p(n){this.d(),this.h(n),this.i(this.a)}d(){this.n.forEach(x)}}class b extends X{constructor(e=!1,i){super(e);f(this,"l");this.e=this.n=null,this.l=i}c(e){this.l?this.n=this.l:super.c(e)}i(e){for(let i=0;i<this.n.length;i+=1)W(this.t,this.n[i],e)}}function At(t,n){return new t(n)}let m;function y(t){m=t}function N(){if(!m)throw new Error("Function called outside component initialization");return m}function Mt(t){N().$$.on_mount.push(t)}function Ht(t){N().$$.after_update.push(t)}function Lt(){const t=N();return(n,e,{cancelable:i=!1}={})=>{const l=t.$$.callbacks[n];if(l){const s=V(n,e,{cancelable:i});return l.slice().forEach(c=>{c.call(t,s)}),!s.defaultPrevented}return!0}}function Pt(t,n){const e=t.$$.callbacks[n.type];e&&e.slice().forEach(i=>i.call(this,n))}const d=[],A=[];let h=[];const E=[],j=Promise.resolve();let T=!1;function Y(){T||(T=!0,j.then($))}function jt(){return Y(),j}function Z(t){h.push(t)}function St(t){E.push(t)}const g=new Set;let _=0;function $(){if(_!==0)return;const t=m;do{try{for(;_<d.length;){const n=d[_];_++,y(n),tt(n.$$)}}catch(n){throw d.length=0,_=0,n}for(y(null),d.length=0,_=0;A.length;)A.pop()();for(let n=0;n<h.length;n+=1){const e=h[n];g.has(e)||(g.add(e),e())}h.length=0}while(d.length);for(;E.length;)E.pop()();T=!1,g.clear(),y(t)}function tt(t){if(t.fragment!==null){t.update(),G(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(Z)}}function Ct(t){const n=[],e=[];h.forEach(i=>t.indexOf(i)===-1?n.push(i):e.push(i)),e.forEach(i=>i()),h=n}export{dt as A,Ht as B,kt as C,A as D,At as E,jt as F,pt as G,b as H,Lt as I,Pt as J,St as K,et as L,$ as M,it as N,ct as O,Z as P,Ct as Q,m as R,y as S,q as T,d as U,Y as V,ft as W,_t as X,ht as a,Tt as b,Et as c,Q as d,H as e,x as f,yt as g,xt as h,W as i,bt as j,R as k,vt as l,mt as m,D as n,gt as o,Nt as p,Mt as q,G as r,lt as s,w as t,rt as u,st as v,at as w,ut as x,ot as y,wt as z};