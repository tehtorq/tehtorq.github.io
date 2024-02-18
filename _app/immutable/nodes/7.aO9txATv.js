import{s as at,e as n,a as C,t as $,c as r,h as D,g as T,b as E,f as y,d as tt,j as e,i as st,k as t,l as N,m as R,o as P,p as lt,n as et,r as nt,q as rt}from"../chunks/scheduler.S5f2EV9a.js";import{S as ot,i as it}from"../chunks/index.RCc_LvUI.js";function dt(m){let o,s,f='<span class="mx-auto italic leading-8 text-white text-6xl font-comic-sans drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">wotigot</span>',i,d,a,p,L="Daily spend until payday?",M,l,u,q="Payday",V,k,c,U,_,b,G="Amount left",z,S,v,H,I,Y,A,Z,w,J="Save",j,K;return{c(){o=n("div"),s=n("div"),s.innerHTML=f,i=C(),d=n("div"),a=n("div"),p=n("div"),p.textContent=L,M=C(),l=n("div"),u=n("label"),u.textContent=q,V=C(),k=n("div"),c=n("input"),U=C(),_=n("div"),b=n("label"),b.textContent=G,z=C(),S=n("div"),v=n("input"),H=C(),I=n("div"),Y=$("Daily Budget: "),A=$(m[2]),Z=C(),w=n("button"),w.textContent=J,this.h()},l(g){o=r(g,"DIV",{class:!0});var h=D(o);s=r(h,"DIV",{class:!0,"data-svelte-h":!0}),T(s)!=="svelte-1vc643z"&&(s.innerHTML=f),i=E(h),d=r(h,"DIV",{class:!0});var Q=D(d);a=r(Q,"DIV",{class:!0});var x=D(a);p=r(x,"DIV",{class:!0,"data-svelte-h":!0}),T(p)!=="svelte-221pzc"&&(p.textContent=L),M=E(x),l=r(x,"DIV",{class:!0});var B=D(l);u=r(B,"LABEL",{for:!0,class:!0,"data-svelte-h":!0}),T(u)!=="svelte-vke249"&&(u.textContent=q),V=E(B),k=r(B,"DIV",{class:!0});var W=D(k);c=r(W,"INPUT",{type:!0,min:!0,max:!0,class:!0}),W.forEach(y),B.forEach(y),U=E(x),_=r(x,"DIV",{class:!0});var F=D(_);b=r(F,"LABEL",{for:!0,class:!0,"data-svelte-h":!0}),T(b)!=="svelte-1q8sy78"&&(b.textContent=G),z=E(F),S=r(F,"DIV",{class:!0});var X=D(S);v=r(X,"INPUT",{type:!0,class:!0}),X.forEach(y),F.forEach(y),H=E(x),I=r(x,"DIV",{class:!0});var O=D(I);Y=tt(O,"Daily Budget: "),A=tt(O,m[2]),O.forEach(y),Z=E(x),w=r(x,"BUTTON",{class:!0,"data-svelte-h":!0}),T(w)!=="svelte-1gpl9m4"&&(w.textContent=J),x.forEach(y),Q.forEach(y),h.forEach(y),this.h()},h(){e(s,"class","w-100 text-center p-8 rotate-6 transition ease-in-out delay-150 hover:-rotate-6"),e(p,"class","text-xl font-medium text-black mt-4 mb-7"),e(u,"for","email"),e(u,"class","block text-sm font-medium leading-6 text-gray-900"),e(c,"type","number"),e(c,"min","1"),e(c,"max","31"),c.required=!0,e(c,"class","block w-full rounded-md border-0 p-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 drop-shadow-md"),e(k,"class","mt-2"),e(l,"class","mt-4"),e(b,"for","email"),e(b,"class","block text-sm font-medium leading-6 text-gray-900"),e(v,"type","number"),v.required=!0,e(v,"class","block w-full rounded-md border-0 p-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 drop-shadow-md"),e(S,"class","mt-2"),e(_,"class","mt-4"),e(I,"class","text-lg font-medium text-black mt-8"),e(w,"class","border-0 my-6 p-4 w-full bg-white rounded-xl drop-shadow-md"),e(a,"class","mx-auto"),e(d,"class","p-6 max-w-sm mx-auto bg-white/70 rounded-xl shadow-lg flex items-center space-x-4 border-2"),e(o,"class","w-screen min-h-screen bg-gradient-to-r from-blue-400 to-red-400 p-8 select-none")},m(g,h){st(g,o,h),t(o,s),t(o,i),t(o,d),t(d,a),t(a,p),t(a,M),t(a,l),t(l,u),t(l,V),t(l,k),t(k,c),N(c,m[1]),t(a,U),t(a,_),t(_,b),t(_,z),t(_,S),t(S,v),N(v,m[0]),t(a,H),t(a,I),t(I,Y),t(I,A),t(a,Z),t(a,w),j||(K=[R(c,"input",m[4]),R(v,"input",m[5]),R(w,"click",m[3])],j=!0)},p(g,[h]){h&2&&P(c.value)!==g[1]&&N(c,g[1]),h&1&&P(v.value)!==g[0]&&N(v,g[0]),h&4&&lt(A,g[2])},i:et,o:et,d(g){g&&y(o),j=!1,nt(K)}}}function ut(m,o,s){let f="",i="",d="0.00";rt(()=>{s(0,f=localStorage.getItem("amount")||""),s(1,i=localStorage.getItem("payday")||""),p()});function a(){localStorage.setItem("amount",f),localStorage.setItem("payday",i),p()}function p(){const l=new Date;let u=new Date(l.getFullYear(),l.getMonth(),i);u<l&&(u=new Date(l.getFullYear(),l.getMonth()+1,i));const q=Math.abs(u-l),V=Math.ceil(q/(1e3*60*60*24));f>0&&V>0?s(2,d=(f/V).toFixed(2)):s(2,d="0.00"),s(2,d=new Intl.NumberFormat("en-ZA",{style:"currency",currency:"ZAR"}).format(d))}function L(){i=P(this.value),s(1,i)}function M(){f=P(this.value),s(0,f)}return m.$$.update=()=>{m.$$.dirty&3&&f&&i&&p()},[f,i,d,a,L,M]}class ft extends ot{constructor(o){super(),it(this,o,ut,dt,at,{})}}export{ft as component};