(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8312:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(1003)}])},570:function(e,t,n){"use strict";var r=n(5893),a=n(1163),o=n(3197),s=n(6214);t.Z=function(e){var t=e.title,n=e.onClick,i=e.width,l=e.loading,c=e.padding,u=e.noIcon,d="en"===(0,a.useRouter)().locale?o.Z:s.Z;return(0,r.jsxs)("button",{className:"ease group relative z-30 box-border inline-flex ".concat(i||"w-auto"," ").concat(c," cursor-pointer items-center justify-center overflow-hidden rounded bg-indigo-600 bg-gradient-to-r from-pink-500 to-violet-500 px-8 py-3 font-bold text-white transition-all duration-300 focus:outline-none"),onClick:n,children:[(0,r.jsx)("span",{className:"absolute bottom-0 right-0 -mb-8 -mr-5 h-20 w-8 translate-x-1 rotate-45 transform bg-white opacity-10 transition-all duration-300 ease-out group-hover:translate-x-0"}),(0,r.jsx)("span",{className:"absolute top-0 left-0 -mt-1 -ml-12 h-8 w-20 -translate-x-1 rotate-45 transform bg-white opacity-10 transition-all duration-300 ease-out group-hover:translate-x-0"}),(0,r.jsxs)("span",{className:"relative z-20 flex items-center font-semibold",children:[u&&(0,r.jsx)("svg",{className:"relative mr-2 h-5 w-5 flex-shrink-0 text-white",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:(0,r.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M13 10V3L4 14h7v7l9-11h-7z"})}),l?"".concat(d.loading):t]})]})}},8969:function(e,t,n){"use strict";var r=n(5893),a=n(7294),o=n(5675),s=n.n(o),i=n(1664),l=n.n(i),c=n(3737),u=n(7730),d=n(5301),p=n(9473),f=n(9493),m=n(3299),h=n(1163),x=n(3197),v=n(6214),b=n(3987);t.Z=function(){var e,t=(0,m.useSession)().data,n=(0,p.v9)(f.Kf),o=(0,h.useRouter)(),i=o.locale,g="en"===i?x.Z:v.Z,w=(0,a.useState)("en"===i?"US":null===i||void 0===i?void 0:i.toUpperCase()),y=w[0],j=w[1];return(0,r.jsxs)("header",{className:"sticky top-0 z-30 flex w-full items-end justify-between p-4",children:[(0,r.jsx)("div",{className:"flex items-center justify-center md:w-1/5",children:(0,r.jsx)(l(),{href:"/",children:(0,r.jsx)("div",{className:"relative w-5 cursor-pointer opacity-75 h-10 transition hover:opacity-100",children:(0,r.jsx)(s(),{src:"https://rb.gy/vsvv2o",layout:"fill",objectFit:"contain"})})})}),(0,r.jsxs)("div",{className:"hidden flex-1 items-center justify-center space-x-8 md:flex",children:[(0,r.jsx)("a",{href:"",className:"headerLink",children:g.product}),(0,r.jsx)("a",{href:"",className:"headerLink cursor-not-allowed",children:g.explore}),(0,r.jsx)("a",{href:"",className:"headerLink cursor-not-allowed",children:g.support}),(0,r.jsx)("a",{href:"",className:"headerLink cursor-not-allowed",children:"Business"})]}),(0,r.jsxs)("div",{className:"flex items-center justify-center gap-x-4 md:w-1/5",children:[(0,r.jsx)(c.Z,{className:"headerIcon cursor-not-allowed"}),(0,r.jsx)(l(),{href:"/checkout",children:(0,r.jsxs)("div",{className:"relative cursor-pointer",children:[n.length>0&&(0,r.jsx)("span",{className:"absolute -right-1 -top-1 z-50 flex h-4 w-4 items-center justify-center rounded-full bg-gradient-to-r from-pink-500 to-violet-500 text-[10px] text-white",children:n.length}),(0,r.jsx)(u.Z,{className:"headerIcon"})]})}),t?(0,r.jsx)(s(),{src:(null===(e=t.user)||void 0===e?void 0:e.image)||"https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y",alt:"",className:"cursor-pointer rounded-full",width:34,height:34,onClick:function(){return(0,m.signOut)()}}):(0,r.jsx)(d.Z,{className:"headerIcon",onClick:function(){return(0,m.signIn)()}}),(0,r.jsx)(b.ZP,{countries:["US","FR"],customLabels:{US:"EN",FR:"FR"},fullWidth:!1,showOptionLabel:!1,selected:y||"US",rfsKey:"app-lang",onSelect:function(e){var t="US"===e?"EN":e;j(e);var n={locale:t.toLocaleLowerCase()};console.log(i),o.push(o.pathname,o.asPath,n)},placeholder:i})]})]})}},3197:function(e,t){"use strict";t.Z={product:"Product",explore:"Explore",newpromos:"New Promos",learnmore:"Learn More",support:"Support",buynow:"Buy Now",review:"Review your bag.",free:"Free delivery and free returns",continueshopping:"Continue Shopping",details:"Show product details",remove:"Remove",subtotal:"Subtotal",shipping:"Shipping",freeshipping:"FREE",estimated:"Estimated tax for",total:"Total",checkout:"How would you like to check out?",zip:"Enter zip code",monthly:"Pay Monthly",withapplecard:"with Apple Card",percentage:"283,16\u20ac/mo at 0% APR",applecard:"Check Out with Apple Card Monthly Installments",checkoutcheckout:"Check out",applicable:"$0.00 due today, which includes applicable full-price items, down payments, shipping, and taxes.",full:"Pay in full",personalinformation:"Please do not provide any Personally Identifiable Information.",educational:"This website is for educational purposes.",basket:"added to basket",thankyou:"Thank you",orderconfirmed:"Your order is confirmed",accepted:"We've accepted your order, and we're getting it ready. Come back to this page for updates on your shipment status.",tracking:"Other tracking number",updates:"Order updates",deliveryupdates:"You'll get shipping and delivery updates by email and text",help:"Need help ? call 1\u2011800\u2011MY\u2011APPLE",bagempty:"Your bag is empty.",discount:"Discount",loading:"Loading...",removed:"removed from basket",showreview:"Show your order summary",productandservice:"Product & Service",tvandhome:"TV & Home",accessories:"Accessories",giftcard:"Gift Cards",findapple:"Find a Store",applecamp:"Apple Camp",appaple:"Apple Store App",financing:"Financing",orderstatus:"Order Status",shoppinghelps:"Shopping Helps",aboutapple:"About Apple",leadership:"Apple Leadership",carreer:"Career Opportunities",investors:"Investors",ethics:"Ethics & Compliance",events:"Events",contactapple:"Contact Apple",privacy:"Privacy Policy",terms:"Terms & Conditions",return:"Returns Policy",accessibility:"Accessibility"}},6214:function(e,t){"use strict";t.Z={product:"Produit",explore:"Explorez",newpromos:"Promotions",learnmore:"Voir Plus",support:"Assistance",buynow:"Achetez Maintenant",review:"R\xe9capitulatif de votre commande",free:"Livraison et retours gratuits",continueshopping:"Poursuivre vos achats",details:"Afficher les d\xe9tails du produit",remove:"Supprimer",subtotal:"Sous-total",shipping:"Livraison",freeshipping:"GRATUIT",estimated:"Frais de livraion estim\xe9s",total:"Votre total",checkout:"S\xe9lectionnez un mode de paiement",zip:"Saisir le code postal",monthly:"Payer 283,16\u20ac/mois",withapplecard:"avec Apple Card,",percentage:"0% d'int\xe9r\xeats",applecard:"Payer mensuellements avec Apple Card",checkoutcheckout:"Payer maintenant",checkoutchekout:"Passer au paiement",applicable:"0,00 $ d\xfb aujourd'hui, qui comprend les articles \xe0 prix plein applicables, les acomptes, les frais d'exp\xe9dition et les taxes.",full:"Montant complet",personalinformation:"Veuillez ne fournir aucune information personnelle identifiable.",educational:"Ce site Web est \xe0 des fins \xe9ducatives.",basket:"a \xe9t\xe9 ajout\xe9 \xe0 votre panier",thankyou:"Merci",orderconfirmed:"Votre commande est confirm\xe9e",accepted:"Nous avons accept\xe9 votre commande et nous la pr\xe9parons. Revenez sur cette page pour des mises \xe0 jour sur l'\xe9tat de votre envoi.",tracking:"Num\xe9ro de suivi",updates:"Mise \xe0 jour de la commande",deliveryupdates:"Statuts de la commande",help:"Besoin d\u2019une aide suppl\xe9mentaire ? Appelez le 0800 93 932",discount:"R\xe9duction",loading:"Chargement ...",removed:"a \xe9t\xe9 retir\xe9 de votre panier",showreview:"Afficher le r\xe9capitulatif de votre commande",bagempty:"Votre panier est vide.",productandservice:"Produits et Service",tvandhome:"TV & Maison",accessories:"Accessoires",giftcard:"Cartes Cadeaux",findapple:"Trouver un Apple Store",applecamp:"Stage d'\xe9t\xe9 Apple",appaple:"App Apple Store",financing:"Financement",orderstatus:"\xc9tat de votre commande",shoppinghelps:"Aide \xe0 l'achat",aboutapple:"\xc0 propos d\u2019Apple",leadership:"Direction d'Apple",carreer:"Travailler chez Apple",investors:"Investisseurs",ethics:"\xc9thique et conformit\xe9",events:"\xc9v\xe8nements",contactapple:"Contacter Apple",privacy:"Engagement de confidentialit\xe9",terms:" Conditions d\u2019utilisation",return:"Ventes et remboursements",accessibility:" Plan du site"}},1003:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSP:function(){return Se},default:function(){return Ae}});var r=n(5893),a=n(7294);function o(e,t,...n){if(e in t){let r=t[e];return"function"==typeof r?r(...n):r}let r=new Error(`Tried to handle "${e}" but there is no handler defined. Only defined handlers are: ${Object.keys(t).map((e=>`"${e}"`)).join(", ")}.`);throw Error.captureStackTrace&&Error.captureStackTrace(r,o),r}var s=(e=>(e[e.None=0]="None",e[e.RenderStrategy=1]="RenderStrategy",e[e.Static=2]="Static",e))(s||{}),i=(e=>(e[e.Unmount=0]="Unmount",e[e.Hidden=1]="Hidden",e))(i||{});function l({ourProps:e,theirProps:t,slot:n,defaultTag:r,features:a,visible:s=!0,name:i}){let l=u(t,e);if(s)return c(l,n,r,i);let d=null!=a?a:0;if(2&d){let{static:e=!1,...t}=l;if(e)return c(t,n,r,i)}if(1&d){let{unmount:e=!0,...t}=l;return o(e?0:1,{0:()=>null,1:()=>c({...t,hidden:!0,style:{display:"none"}},n,r,i)})}return c(l,n,r,i)}function c(e,t={},n,r){let{as:o=n,children:s,refName:i="ref",...l}=f(e,["unmount","static"]),c=void 0!==e.ref?{[i]:e.ref}:{},d="function"==typeof s?s(t):s;l.className&&"function"==typeof l.className&&(l.className=l.className(t));let m={};if(t){let e=!1,n=[];for(let[r,a]of Object.entries(t))"boolean"==typeof a&&(e=!0),!0===a&&n.push(r);e&&(m["data-headlessui-state"]=n.join(" "))}if(o===a.Fragment&&Object.keys(p(l)).length>0){if(!(0,a.isValidElement)(d)||Array.isArray(d)&&d.length>1)throw new Error(['Passing props on "Fragment"!',"",`The current component <${r} /> is rendering a "Fragment".`,"However we need to passthrough the following props:",Object.keys(l).map((e=>`  - ${e}`)).join("\n"),"","You can apply a few solutions:",['Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".',"Render a single element as the child so that we can forward the props onto that element."].map((e=>`  - ${e}`)).join("\n")].join("\n"));return(0,a.cloneElement)(d,Object.assign({},u(d.props,p(f(l,["ref"]))),m,c,function(...e){return{ref:e.every((e=>null==e))?void 0:t=>{for(let n of e)null!=n&&("function"==typeof n?n(t):n.current=t)}}}(d.ref,c.ref)))}return(0,a.createElement)(o,Object.assign({},f(l,["ref"]),o!==a.Fragment&&c,o!==a.Fragment&&m),d)}function u(...e){if(0===e.length)return{};if(1===e.length)return e[0];let t={},n={};for(let r of e)for(let e in r)e.startsWith("on")&&"function"==typeof r[e]?(null!=n[e]||(n[e]=[]),n[e].push(r[e])):t[e]=r[e];if(t.disabled||t["aria-disabled"])return Object.assign(t,Object.fromEntries(Object.keys(n).map((e=>[e,void 0]))));for(let r in n)Object.assign(t,{[r](e,...t){let a=n[r];for(let n of a){if((e instanceof Event||(null==e?void 0:e.nativeEvent)instanceof Event)&&e.defaultPrevented)return;n(e,...t)}}});return t}function d(e){var t;return Object.assign((0,a.forwardRef)(e),{displayName:null!=(t=e.displayName)?t:e.name})}function p(e){let t=Object.assign({},e);for(let n in t)void 0===t[n]&&delete t[n];return t}function f(e,t=[]){let n=Object.assign({},e);for(let r of t)r in n&&delete n[r];return n}const m="undefined"==typeof window||"undefined"==typeof document;let h=m?a.useEffect:a.useLayoutEffect,x={serverHandoffComplete:!1};var v;let b=0;function g(){return++b}let w=null!=(v=a.useId)?v:function(){let e=function(){let[e,t]=(0,a.useState)(x.serverHandoffComplete);return(0,a.useEffect)((()=>{!0!==e&&t(!0)}),[e]),(0,a.useEffect)((()=>{!1===x.serverHandoffComplete&&(x.serverHandoffComplete=!0)}),[]),e}(),[t,n]=a.useState(e?g:null);return h((()=>{null===t&&n(g())}),[t]),null!=t?""+t:void 0};var y=(e=>(e.Space=" ",e.Enter="Enter",e.Escape="Escape",e.Backspace="Backspace",e.Delete="Delete",e.ArrowLeft="ArrowLeft",e.ArrowUp="ArrowUp",e.ArrowRight="ArrowRight",e.ArrowDown="ArrowDown",e.Home="Home",e.End="End",e.PageUp="PageUp",e.PageDown="PageDown",e.Tab="Tab",e))(y||{});let j=["[contentEditable=true]","[tabindex]","a[href]","area[href]","button:not([disabled])","iframe","input:not([disabled])","select:not([disabled])","textarea:not([disabled])"].map((e=>`${e}:not([tabindex='-1'])`)).join(",");var N,P,k=((P=k||{})[P.First=1]="First",P[P.Previous=2]="Previous",P[P.Next=4]="Next",P[P.Last=8]="Last",P[P.WrapAround=16]="WrapAround",P[P.NoScroll=32]="NoScroll",P),E=((N=E||{})[N.Error=0]="Error",N[N.Overflow=1]="Overflow",N[N.Success=2]="Success",N[N.Underflow=3]="Underflow",N),S=(e=>(e[e.Previous=-1]="Previous",e[e.Next=1]="Next",e))(S||{});function A(e=document.body){return null==e?[]:Array.from(e.querySelectorAll(j))}var T=(e=>(e[e.Strict=0]="Strict",e[e.Loose=1]="Loose",e))(T||{});let C=["textarea","input"].join(",");function I(e,t=(e=>e)){return e.slice().sort(((e,n)=>{let r=t(e),a=t(n);if(null===r||null===a)return 0;let o=r.compareDocumentPosition(a);return o&Node.DOCUMENT_POSITION_FOLLOWING?-1:o&Node.DOCUMENT_POSITION_PRECEDING?1:0}))}function O(e,t,n=!0,r=null){let a=Array.isArray(e)?e.length>0?e[0].ownerDocument:document:e.ownerDocument,o=Array.isArray(e)?n?I(e):e:A(e);r=null!=r?r:a.activeElement;let s,i=(()=>{if(5&t)return 1;if(10&t)return-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),l=(()=>{if(1&t)return 0;if(2&t)return Math.max(0,o.indexOf(r))-1;if(4&t)return Math.max(0,o.indexOf(r))+1;if(8&t)return o.length-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),c=32&t?{preventScroll:!0}:{},u=0,d=o.length;do{if(u>=d||u+d<=0)return 0;let e=l+u;if(16&t)e=(e+d)%d;else{if(e<0)return 3;if(e>=d)return 1}s=o[e],null==s||s.focus(c),u+=i}while(s!==a.activeElement);return 6&t&&function(e){var t,n;return null!=(n=null==(t=null==e?void 0:e.matches)?void 0:t.call(e,C))&&n}(s)&&s.select(),s.hasAttribute("tabindex")||s.setAttribute("tabindex","0"),2}function F(e){let t=(0,a.useRef)(e);return h((()=>{t.current=e}),[e]),t}let R=function(e){let t=F(e);return a.useCallback(((...e)=>t.current(...e)),[t])},L=Symbol();function M(...e){let t=(0,a.useRef)(e);(0,a.useEffect)((()=>{t.current=e}),[e]);let n=R((e=>{for(let n of t.current)null!=n&&("function"==typeof n?n(e):n.current=e)}));return e.every((e=>null==e||(null==e?void 0:e[L])))?void 0:n}function D(e){var t;if(e.type)return e.type;let n=null!=(t=e.as)?t:"button";return"string"==typeof n&&"button"===n.toLowerCase()?"button":void 0}function _(e,t){let[n,r]=(0,a.useState)((()=>D(e)));return h((()=>{r(D(e))}),[e.type,e.as]),h((()=>{n||!t.current||t.current instanceof HTMLButtonElement&&!t.current.hasAttribute("type")&&r("button")}),[n,t]),n}var U=(e=>(e[e.None=1]="None",e[e.Focusable=2]="Focusable",e[e.Hidden=4]="Hidden",e))(U||{});let Z=d((function(e,t){let{features:n=1,...r}=e;return l({ourProps:{ref:t,"aria-hidden":2===(2&n)||void 0,style:{position:"fixed",top:1,left:1,width:1,height:0,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",borderWidth:"0",...4===(4&n)&&2!==(2&n)&&{display:"none"}}},theirProps:r,slot:{},defaultTag:"div",name:"Hidden"})}));function z({onFocus:e}){let[t,n]=(0,a.useState)(!0);return t?a.createElement(Z,{as:"button",type:"button",features:U.Focusable,onFocus:t=>{t.preventDefault();let r,a=50;r=requestAnimationFrame((function t(){if(!(a--<=0))return e()?(n(!1),void cancelAnimationFrame(r)):void(r=requestAnimationFrame(t));r&&cancelAnimationFrame(r)}))}}):null}var H=(e=>(e[e.SetSelectedIndex=0]="SetSelectedIndex",e[e.RegisterTab=1]="RegisterTab",e[e.UnregisterTab=2]="UnregisterTab",e[e.RegisterPanel=3]="RegisterPanel",e[e.UnregisterPanel=4]="UnregisterPanel",e))(H||{});let $={0(e,t){let n=e.tabs.filter((e=>{var t;return!(null!=(t=e.current)&&t.hasAttribute("disabled"))}));if(t.index<0)return{...e,selectedIndex:e.tabs.indexOf(n[0])};if(t.index>e.tabs.length)return{...e,selectedIndex:e.tabs.indexOf(n[n.length-1])};let r=e.tabs.slice(0,t.index),a=[...e.tabs.slice(t.index),...r].find((e=>n.includes(e)));return a?{...e,selectedIndex:e.tabs.indexOf(a)}:e},1(e,t){var n;if(e.tabs.includes(t.tab))return e;let r=e.tabs[e.selectedIndex],a=I([...e.tabs,t.tab],(e=>e.current)),o=null!=(n=a.indexOf(r))?n:e.selectedIndex;return-1===o&&(o=e.selectedIndex),{...e,tabs:a,selectedIndex:o}},2:(e,t)=>({...e,tabs:e.tabs.filter((e=>e!==t.tab))}),3:(e,t)=>e.panels.includes(t.panel)?e:{...e,panels:I([...e.panels,t.panel],(e=>e.current))},4:(e,t)=>({...e,panels:e.panels.filter((e=>e!==t.panel))})},B=(0,a.createContext)(null);function W(e){let t=(0,a.useContext)(B);if(null===t){let t=new Error(`<${e} /> is missing a parent <Tab.Group /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(t,W),t}return t}B.displayName="TabsSSRContext";let V=(0,a.createContext)(null);function G(e){let t=(0,a.useContext)(V);if(null===t){let t=new Error(`<${e} /> is missing a parent <Tab.Group /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(t,G),t}return t}V.displayName="TabsDataContext";let q=(0,a.createContext)(null);function Y(e){let t=(0,a.useContext)(q);if(null===t){let t=new Error(`<${e} /> is missing a parent <Tab.Group /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(t,Y),t}return t}function K(e,t){return o(t.type,$,e,t)}q.displayName="TabsActionsContext";let X=a.Fragment,J=d((function(e,t){let{defaultIndex:n=0,vertical:r=!1,manual:o=!1,onChange:s,selectedIndex:i=null,...c}=e;const u=r?"vertical":"horizontal",d=o?"manual":"auto";let p=null!==i,f=M(t),[m,x]=(0,a.useReducer)(K,{selectedIndex:null!=i?i:n,tabs:[],panels:[]}),v=(0,a.useMemo)((()=>({selectedIndex:m.selectedIndex})),[m.selectedIndex]),b=F(s||(()=>{})),g=F(m.tabs),w=(0,a.useMemo)((()=>({orientation:u,activation:d,...m})),[u,d,m]),y=F(p?e.selectedIndex:m.selectedIndex),j=(0,a.useMemo)((()=>({registerTab:e=>(x({type:1,tab:e}),()=>x({type:2,tab:e})),registerPanel:e=>(x({type:3,panel:e}),()=>x({type:4,panel:e})),change(e){y.current!==e&&b.current(e),p||x({type:0,index:e})}})),[x,p]);h((()=>{x({type:0,index:null!=i?i:n})}),[i]);let N=(0,a.useRef)({tabs:[],panels:[]}),P={ref:f};return a.createElement(B.Provider,{value:N},a.createElement(q.Provider,{value:j},a.createElement(V.Provider,{value:w},w.tabs.length<=0&&a.createElement(z,{onFocus:()=>{var e,t;for(let n of g.current)if(0===(null==(e=n.current)?void 0:e.tabIndex))return null==(t=n.current)||t.focus(),!0;return!1}}),l({ourProps:P,theirProps:c,slot:v,defaultTag:X,name:"Tabs"}))))})),Q=d((function(e,t){let{orientation:n,selectedIndex:r}=G("Tab.List");return l({ourProps:{ref:M(t),role:"tablist","aria-orientation":n},theirProps:e,slot:{selectedIndex:r},defaultTag:"div",name:"Tabs.List"})})),ee=d((function(e,t){var n,r;let s=`headlessui-tabs-tab-${w()}`,{orientation:i,activation:c,selectedIndex:u,tabs:d,panels:p}=G("Tab"),f=Y("Tab"),x=G("Tab"),v=W("Tab"),b=(0,a.useRef)(null),g=M(b,t);h((()=>f.registerTab(b)),[f,b]);let j=v.current.tabs.indexOf(s);-1===j&&(j=v.current.tabs.push(s)-1);let N=d.indexOf(b);-1===N&&(N=j);let P=N===u,S=R((e=>{var t;let n=e();if(n===E.Success&&"auto"===c){let e=null==(t=function(e){return m?null:e instanceof Node?e.ownerDocument:null!=e&&e.hasOwnProperty("current")&&e.current instanceof Node?e.current.ownerDocument:document}(b))?void 0:t.activeElement,n=x.tabs.findIndex((t=>t.current===e));-1!==n&&f.change(n)}return n})),A=R((e=>{let t=d.map((e=>e.current)).filter(Boolean);if(e.key===y.Space||e.key===y.Enter)return e.preventDefault(),e.stopPropagation(),void f.change(N);switch(e.key){case y.Home:case y.PageUp:return e.preventDefault(),e.stopPropagation(),S((()=>O(t,k.First)));case y.End:case y.PageDown:return e.preventDefault(),e.stopPropagation(),S((()=>O(t,k.Last)))}return S((()=>o(i,{vertical:()=>e.key===y.ArrowUp?O(t,k.Previous|k.WrapAround):e.key===y.ArrowDown?O(t,k.Next|k.WrapAround):E.Error,horizontal:()=>e.key===y.ArrowLeft?O(t,k.Previous|k.WrapAround):e.key===y.ArrowRight?O(t,k.Next|k.WrapAround):E.Error})))===E.Success?e.preventDefault():void 0})),T=(0,a.useRef)(!1),C=R((()=>{var e;T.current||(T.current=!0,null==(e=b.current)||e.focus(),f.change(N),function(e){"function"==typeof queueMicrotask?queueMicrotask(e):Promise.resolve().then(e).catch((e=>setTimeout((()=>{throw e}))))}((()=>{T.current=!1})))})),I=R((e=>{e.preventDefault()})),F=(0,a.useMemo)((()=>({selected:P})),[P]),L=e;return l({ourProps:{ref:g,onKeyDown:A,onMouseDown:I,onClick:C,id:s,role:"tab",type:_(e,b),"aria-controls":null==(r=null==(n=p[N])?void 0:n.current)?void 0:r.id,"aria-selected":P,tabIndex:P?0:-1},theirProps:L,slot:F,defaultTag:"button",name:"Tabs.Tab"})})),te=d((function(e,t){let{selectedIndex:n}=G("Tab.Panels");return l({ourProps:{ref:M(t)},theirProps:e,slot:(0,a.useMemo)((()=>({selectedIndex:n})),[n]),defaultTag:"div",name:"Tabs.Panels"})})),ne=s.RenderStrategy|s.Static,re=d((function(e,t){var n,r,o,s;let{selectedIndex:i,tabs:c,panels:u}=G("Tab.Panel"),d=Y("Tab.Panel"),p=W("Tab.Panel"),f=`headlessui-tabs-panel-${w()}`,m=(0,a.useRef)(null),x=M(m,t);h((()=>d.registerPanel(m)),[d,m]);let v=p.current.panels.indexOf(f);-1===v&&(v=p.current.panels.push(f)-1);let b=u.indexOf(m);-1===b&&(b=v);let g=b===i,y=(0,a.useMemo)((()=>({selected:g})),[g]),j=e,N={ref:x,id:f,role:"tabpanel","aria-labelledby":null==(r=null==(n=c[b])?void 0:n.current)?void 0:r.id,tabIndex:g?0:-1};return g||null!=(o=e.unmount)&&!o||null!=(s=e.static)&&s?l({ourProps:N,theirProps:j,slot:y,defaultTag:"div",features:ne,visible:g,name:"Tabs.Panel"}):a.createElement(Z,{as:"span",...N})})),ae=Object.assign(ee,{Group:J,List:Q,Panels:te,Panel:re});var oe=n(9008),se=n.n(oe),ie=n(7730),le=n(1664),ce=n.n(le),ue=n(9473),de=n(9493);var pe=function(){var e=(0,ue.v9)(de.Kf);return 0===e.length?null:(0,r.jsx)(ce(),{href:"/checkout",children:(0,r.jsxs)("div",{className:"fixed bottom-10 right-10 z-50 flex h-16 w-16 cursor-pointer items-center justify-center rounded-full bg-gray-300",children:[e.length>0&&(0,r.jsx)("span",{className:"absolute -right-2 -top-2 z-50 flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-r from-pink-500 to-violet-500 text-[10px] text-white",children:e.length}),(0,r.jsx)(ie.Z,{className:"headerIcon h-8 w-8"})]})})},fe=n(8969),me=n(5675),he=n.n(me),xe=n(570),ve=n(1163),be=n(3197),ge=n(6214);var we=function(){var e="en"===(0,ve.useRouter)().locale?be.Z:ge.Z;return(0,r.jsxs)("section",{className:"sticky top-0 mx-auto flex h-screen max-w-[1350px] items-center justify-between px-8",children:[(0,r.jsxs)("div",{className:"space-y-8",children:[(0,r.jsxs)("h1",{className:"space-y-3 text-5xl font-semibold tracking-wide lg:text-6x xl:text-7xl",children:[(0,r.jsx)("span",{className:"block bg-gradient-to-r from-pink-500 to-violet-500 bg-clip-text text-transparent",children:"Powered"}),(0,r.jsx)("span",{className:"block",children:"By Intellect"}),(0,r.jsx)("span",{className:"block",children:"Driven By Values"})]}),(0,r.jsxs)("div",{className:"space-x-8",children:[(0,r.jsx)(ce(),{href:"#product",children:(0,r.jsx)(xe.Z,{title:e.buynow})}),(0,r.jsx)("a",{className:"link cursor-not-allowed",children:e.learnmore})]})]}),(0,r.jsx)("div",{className:"relative hidden h-[450px] w-[450px] transition-all duration-500 md:inline lg:h-[650px] lg:w-[600px]",children:(0,r.jsx)(he(),{src:"/iphone2.png",layout:"fill",objectFit:"contain"})})]})},ye=n(6160),je=n(3774),Ne=n(6501),Pe=n(4480);var ke=function(e){var t=e.product,n=(0,ue.I0)(),a=(0,ve.useRouter)().locale,o="en"===a?be.Z:ge.Z;return Intl.NumberFormat(a,{style:"currency",currency:"EUR"}),(0,r.jsxs)("div",{className:"flex h-fit w-[320px] select-none flex-col space-y-3 rounded-xl bg-[#35383C] p-8 md:h-[500px] md:w-[400px] md:p-10",id:"product",children:[(0,r.jsx)("div",{className:"relative h-64 w-full md:h-72",children:(0,r.jsx)(he(),{src:(0,je.uH)(t.image[0]).url(),layout:"fill",objectFit:"contain"})}),(0,r.jsxs)("div",{className:"flex flex-1 items-center justify-between space-x-3",children:[(0,r.jsxs)("div",{className:"space-y-2 text-xl text-white md:text-2xl",children:[(0,r.jsx)("p",{children:t.title}),(0,Pe.Z)(null===t||void 0===t?void 0:t.price,a)]}),(0,r.jsx)("div",{className:"flex h-16 w-16 flex-shrink-0 cursor-pointer items-center justify-center rounded-full bg-gradient-to-r from-pink-500 to-violet-500 md:h-[70px] md:w-[70px]",onClick:function(){n((0,de.H)(t)),Ne.ZP.success("".concat(t.title," ").concat(o.basket),{position:"bottom-center"})},children:(0,r.jsx)(ye.Z,{className:"h-8 w-8 text-white"})})]})]})},Ee=n(1346),Se=!0,Ae=function(e){var t=e.categories,n=e.products,a=function(e){return n.filter((function(n){return n.category._ref===t[e]._id})).map((function(e){return(0,r.jsx)(ke,{product:e},e._id)}))},o=((0,ve.useRouter)().locale,(0,Ee.$G)().t);return(0,r.jsxs)("div",{children:[(0,r.jsxs)(se(),{children:[(0,r.jsx)("title",{children:"Apple Design Concept"}),(0,r.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,r.jsx)(fe.Z,{}),(0,r.jsx)(pe,{}),(0,r.jsx)("main",{className:"relative h-[200vh]",children:(0,r.jsx)(we,{})}),(0,r.jsx)("section",{className:"relative z-40 -mt-[100vh] min-h-screen bg-[#1B1B1B]",id:"product",children:(0,r.jsxs)("div",{className:"space-y-10 py-16",children:[(0,r.jsx)("h1",{className:"text-center text-4xl font-medium tracking-wide text-white md:text-5xl",children:o("newpromos")}),(0,r.jsxs)(ae.Group,{children:[(0,r.jsx)(ae.List,{className:"inline-block justify-center text-center sm:w-72 lg:mx-auto lg:flex",children:t.map((function(e){return(0,r.jsx)(ae,{id:e._id,className:function(e){var t=e.selected;return"whitespace-nowrap rounded-t-lg py-3 px-5 text-sm font-light outline-none md:py-4 md:px-6 md:text-base ".concat(t?"borderGradient bg-[#35383C] text-white":"border-b-2 border-[#35383C] text-[#747474]")},children:e.title},e._id)}))}),(0,r.jsxs)(ae.Panels,{className:"mx-auto max-w-fit pt-10 pb-24 sm:px-4",children:[(0,r.jsx)(ae.Panel,{className:"tabPanel",children:a(0)}),(0,r.jsx)(ae.Panel,{className:"tabPanel",children:a(1)}),(0,r.jsx)(ae.Panel,{className:"tabPanel",children:a(2)}),(0,r.jsx)(ae.Panel,{className:"tabPanel",children:a(3)}),(0,r.jsx)(ae.Panel,{className:"tabPanel",children:a(4)}),(0,r.jsx)(ae.Panel,{className:"tabPanel",children:a(5)})]})]})]})})]})}},3774:function(e,t,n){"use strict";n.d(t,{uH:function(){return i}});var r=n(3577),a=n(6803),o=n.n(a),s={dataset:"production",token:n(3454).env.SANITY_API_TOKEN,projectId:"olvdn2ib",apiVersion:"2021-10-21",useCdn:!0},i=((0,r.eI)(s),function(e){return o()(s).image(e)})},4480:function(e,t){"use strict";t.Z=function(e,t){return Intl.NumberFormat(t,{style:"currency",currency:"EUR"}).format(e)}},6160:function(e,t,n){"use strict";var r=n(7294);const a=r.forwardRef((function(e,t){return r.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:2,stroke:"currentColor","aria-hidden":"true",ref:t},e),r.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"}))}));t.Z=a}},function(e){e.O(0,[810,675,410,774,888,179],(function(){return t=8312,e(e.s=t);var t}));var t=e.O();_N_E=t}]);