(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[675],{9361:function(e,t){"use strict";t.Z=function(e,t,n){t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n;return e}},1210:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getDomainLocale=function(e,t,o,i){var a=n(8875).normalizeLocalePath,r=n(8748).detectDomainLocale,l=t||a(e,o).detectedLocale,c=r(i,void 0,l);if(c){var u="http".concat(c.http?"":"s","://"),s=l===c.defaultLocale?"":"/".concat(l);return"".concat(u).concat(c.domain).concat("").concat(s).concat(e)}return!1};("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&"undefined"===typeof t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},8045:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(9361).Z,i=n(4941).Z,a=n(3929).Z;Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=e.src,n=e.sizes,l=e.unoptimized,c=void 0!==l&&l,h=e.priority,m=void 0!==h&&h,w=e.loading,j=e.lazyRoot,A=void 0===j?null:j,C=e.lazyBoundary,E=e.className,R=e.quality,k=e.width,M=e.height,O=e.style,I=e.objectFit,P=e.objectPosition,q=e.onLoadingComplete,N=e.placeholder,B=void 0===N?"empty":N,T=e.blurDataURL,Z=u(e,["src","sizes","unoptimized","priority","loading","lazyRoot","lazyBoundary","className","quality","width","height","style","objectFit","objectPosition","onLoadingComplete","placeholder","blurDataURL"]),D=s.useContext(g.ImageConfigContext),U=s.useMemo((function(){var e=v||D||f.imageConfigDefault,t=a(e.deviceSizes).concat(a(e.imageSizes)).sort((function(e,t){return e-t})),n=e.deviceSizes.sort((function(e,t){return e-t}));return r({},e,{allSizes:t,deviceSizes:n})}),[D]),W=Z,H=n?"responsive":"intrinsic";"layout"in W&&(W.layout&&(H=W.layout),delete W.layout);var V=_;if("loader"in W){if(W.loader){var F=W.loader;V=function(e){e.config;var t=u(e,["config"]);return F(t)}}delete W.loader}var G="";if(function(e){return"object"===typeof e&&(x(e)||function(e){return void 0!==e.src}(e))}(t)){var K=x(t)?t.default:t;if(!K.src)throw new Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ".concat(JSON.stringify(K)));if(T=T||K.blurDataURL,G=K.src,(!H||"fill"!==H)&&(M=M||K.height,k=k||K.width,!K.height||!K.width))throw new Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ".concat(JSON.stringify(K)))}var J=!m&&("lazy"===w||"undefined"===typeof w);((t="string"===typeof t?t:G).startsWith("data:")||t.startsWith("blob:"))&&(c=!0,J=!1);y.has(t)&&(J=!1);U.unoptimized&&(c=!0);var Q,X=i(s.useState(!1),2),Y=X[0],$=X[1],ee=i(p.useIntersection({rootRef:A,rootMargin:C||"200px",disabled:!J}),3),te=ee[0],ne=ee[1],oe=ee[2],ie=!J||ne,ae={boxSizing:"border-box",display:"block",overflow:"hidden",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},re={boxSizing:"border-box",display:"block",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},le=!1,ce={position:"absolute",top:0,left:0,bottom:0,right:0,boxSizing:"border-box",padding:0,border:"none",margin:"auto",display:"block",width:0,height:0,minWidth:"100%",maxWidth:"100%",minHeight:"100%",maxHeight:"100%",objectFit:I,objectPosition:P},ue=S(k),se=S(M),de=S(R);0;var fe=Object.assign({},O,ce),pe="blur"!==B||Y?{}:{backgroundSize:I||"cover",backgroundPosition:P||"0% 0%",filter:"blur(20px)",backgroundImage:'url("'.concat(T,'")')};if("fill"===H)ae.display="block",ae.position="absolute",ae.top=0,ae.left=0,ae.bottom=0,ae.right=0;else if("undefined"!==typeof ue&&"undefined"!==typeof se){var ge=se/ue,he=isNaN(ge)?"100%":"".concat(100*ge,"%");"responsive"===H?(ae.display="block",ae.position="relative",le=!0,re.paddingTop=he):"intrinsic"===H?(ae.display="inline-block",ae.position="relative",ae.maxWidth="100%",le=!0,re.maxWidth="100%",Q="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27".concat(ue,"%27%20height=%27").concat(se,"%27/%3e")):"fixed"===H&&(ae.display="inline-block",ae.position="relative",ae.width=ue,ae.height=se)}else 0;var me={src:b,srcSet:void 0,sizes:void 0};ie&&(me=z({config:U,src:t,unoptimized:c,layout:H,width:ue,quality:de,sizes:n,loader:V}));var ve=t;0;var ye,be="imagesrcset",we="imagesizes";be="imageSrcSet",we="imageSizes";var xe=(o(ye={},be,me.srcSet),o(ye,we,me.sizes),o(ye,"crossOrigin",W.crossOrigin),ye),ze=s.default.useLayoutEffect,Se=s.useRef(q),_e=s.useRef(t);s.useEffect((function(){Se.current=q}),[q]),ze((function(){_e.current!==t&&(oe(),_e.current=t)}),[oe,t]);var je=r({isLazy:J,imgAttributes:me,heightInt:se,widthInt:ue,qualityInt:de,layout:H,className:E,imgStyle:fe,blurStyle:pe,loading:w,config:U,unoptimized:c,placeholder:B,loader:V,srcString:ve,onLoadingCompleteRef:Se,setBlurComplete:$,setIntersection:te,isVisible:ie,noscriptSizes:n},W);return s.default.createElement(s.default.Fragment,null,s.default.createElement("span",{style:ae},le?s.default.createElement("span",{style:re},Q?s.default.createElement("img",{style:{display:"block",maxWidth:"100%",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},alt:"","aria-hidden":!0,src:Q}):null):null,s.default.createElement(L,Object.assign({},je))),m?s.default.createElement(d.default,null,s.default.createElement("link",Object.assign({key:"__nimg-"+me.src+me.srcSet+me.sizes,rel:"preload",as:"image",href:me.srcSet?void 0:me.src},xe))):null)};var r=n(6495).Z,l=n(2648).Z,c=n(1598).Z,u=n(7273).Z,s=c(n(7294)),d=l(n(5443)),f=n(9309),p=n(7190),g=n(9977),h=(n(3794),n(2392));function m(e){return"/"===e[0]?e.slice(1):e}var v={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!1},y=new Set,b=(new Map,"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7");var w=new Map([["default",function(e){var t=e.config,n=e.src,o=e.width,i=e.quality;return n.endsWith(".svg")&&!t.dangerouslyAllowSVG?n:"".concat(h.normalizePathTrailingSlash(t.path),"?url=").concat(encodeURIComponent(n),"&w=").concat(o,"&q=").concat(i||75)}],["imgix",function(e){var t=e.config,n=e.src,o=e.width,i=e.quality,a=new URL("".concat(t.path).concat(m(n))),r=a.searchParams;return r.set("auto",r.getAll("auto").join(",")||"format"),r.set("fit",r.get("fit")||"max"),r.set("w",r.get("w")||o.toString()),i&&r.set("q",i.toString()),a.href}],["cloudinary",function(e){var t=e.config,n=e.src,o=["f_auto","c_limit","w_"+e.width,"q_"+(e.quality||"auto")].join(",")+"/";return"".concat(t.path).concat(o).concat(m(n))}],["akamai",function(e){var t=e.config,n=e.src,o=e.width;return"".concat(t.path).concat(m(n),"?imwidth=").concat(o)}],["custom",function(e){var t=e.src;throw new Error('Image with src "'.concat(t,'" is missing "loader" prop.')+"\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader")}]]);function x(e){return void 0!==e.default}function z(e){var t=e.config,n=e.src,o=e.unoptimized,i=e.layout,r=e.width,l=e.quality,c=e.sizes,u=e.loader;if(o)return{src:n,srcSet:void 0,sizes:void 0};var s=function(e,t,n,o){var i=e.deviceSizes,r=e.allSizes;if(o&&("fill"===n||"responsive"===n)){for(var l,c=/(^|\s)(1?\d?\d)vw/g,u=[];l=c.exec(o);l)u.push(parseInt(l[2]));if(u.length){var s,d=.01*(s=Math).min.apply(s,a(u));return{widths:r.filter((function(e){return e>=i[0]*d})),kind:"w"}}return{widths:r,kind:"w"}}return"number"!==typeof t||"fill"===n||"responsive"===n?{widths:i,kind:"w"}:{widths:a(new Set([t,2*t].map((function(e){return r.find((function(t){return t>=e}))||r[r.length-1]})))),kind:"x"}}(t,r,i,c),d=s.widths,f=s.kind,p=d.length-1;return{sizes:c||"w"!==f?c:"100vw",srcSet:d.map((function(e,o){return"".concat(u({config:t,src:n,quality:l,width:e})," ").concat("w"===f?e:o+1).concat(f)})).join(", "),src:u({config:t,src:n,quality:l,width:d[p]})}}function S(e){return"number"===typeof e?e:"string"===typeof e?parseInt(e,10):void 0}function _(e){var t,n=(null==(t=e.config)?void 0:t.loader)||"default",o=w.get(n);if(o)return o(e);throw new Error('Unknown "loader" found in "next.config.js". Expected: '.concat(f.VALID_LOADERS.join(", "),". Received: ").concat(n))}function j(e,t,n,o,i,a){e&&e.src!==b&&e["data-loaded-src"]!==t&&(e["data-loaded-src"]=t,("decode"in e?e.decode():Promise.resolve()).catch((function(){})).then((function(){if(e.parentNode&&(y.add(t),"blur"===o&&a(!0),null==i?void 0:i.current)){var n=e.naturalWidth,r=e.naturalHeight;i.current({naturalWidth:n,naturalHeight:r})}})))}var L=function(e){var t=e.imgAttributes,n=(e.heightInt,e.widthInt),o=e.qualityInt,i=e.layout,a=e.className,l=e.imgStyle,c=e.blurStyle,d=e.isLazy,f=e.placeholder,p=e.loading,g=e.srcString,h=e.config,m=e.unoptimized,v=e.loader,y=e.onLoadingCompleteRef,b=e.setBlurComplete,w=e.setIntersection,x=e.onLoad,S=e.onError,_=(e.isVisible,e.noscriptSizes),L=u(e,["imgAttributes","heightInt","widthInt","qualityInt","layout","className","imgStyle","blurStyle","isLazy","placeholder","loading","srcString","config","unoptimized","loader","onLoadingCompleteRef","setBlurComplete","setIntersection","onLoad","onError","isVisible","noscriptSizes"]);return p=d?"lazy":p,s.default.createElement(s.default.Fragment,null,s.default.createElement("img",Object.assign({},L,t,{decoding:"async","data-nimg":i,className:a,style:r({},l,c),ref:s.useCallback((function(e){w(e),(null==e?void 0:e.complete)&&j(e,g,0,f,y,b)}),[w,g,i,f,y,b]),onLoad:function(e){j(e.currentTarget,g,0,f,y,b),x&&x(e)},onError:function(e){"blur"===f&&b(!0),S&&S(e)}})),(d||"blur"===f)&&s.default.createElement("noscript",null,s.default.createElement("img",Object.assign({},L,z({config:h,src:g,unoptimized:m,layout:i,width:n,quality:o,sizes:_,loader:v}),{decoding:"async","data-nimg":i,style:l,className:a,loading:p}))))};("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&"undefined"===typeof t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},8418:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(4941).Z;n(5753).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=n(2648).Z,a=n(7273).Z,r=i(n(7294)),l=n(6273),c=n(2725),u=n(3462),s=n(1018),d=n(7190),f=n(1210),p=n(8684),g={};function h(e,t,n,o){if(e&&l.isLocalURL(t)){Promise.resolve(e.prefetch(t,n,o)).catch((function(e){0}));var i=o&&"undefined"!==typeof o.locale?o.locale:e&&e.locale;g[t+"%"+n+(i?"%"+i:"")]=!0}}var m=r.default.forwardRef((function(e,t){var n,i=e.href,m=e.as,v=e.children,y=e.prefetch,b=e.passHref,w=e.replace,x=e.shallow,z=e.scroll,S=e.locale,_=e.onClick,j=e.onMouseEnter,L=e.onTouchStart,A=e.legacyBehavior,C=void 0===A?!0!==Boolean(!1):A,E=a(e,["href","as","children","prefetch","passHref","replace","shallow","scroll","locale","onClick","onMouseEnter","onTouchStart","legacyBehavior"]);n=v,!C||"string"!==typeof n&&"number"!==typeof n||(n=r.default.createElement("a",null,n));var R=!1!==y,k=r.default.useContext(u.RouterContext),M=r.default.useContext(s.AppRouterContext);M&&(k=M);var O,I=r.default.useMemo((function(){var e=o(l.resolveHref(k,i,!0),2),t=e[0],n=e[1];return{href:t,as:m?l.resolveHref(k,m):n||t}}),[k,i,m]),P=I.href,q=I.as,N=r.default.useRef(P),B=r.default.useRef(q);C&&(O=r.default.Children.only(n));var T=C?O&&"object"===typeof O&&O.ref:t,Z=o(d.useIntersection({rootMargin:"200px"}),3),D=Z[0],U=Z[1],W=Z[2],H=r.default.useCallback((function(e){B.current===q&&N.current===P||(W(),B.current=q,N.current=P),D(e),T&&("function"===typeof T?T(e):"object"===typeof T&&(T.current=e))}),[q,T,P,W,D]);r.default.useEffect((function(){var e=U&&R&&l.isLocalURL(P),t="undefined"!==typeof S?S:k&&k.locale,n=g[P+"%"+q+(t?"%"+t:"")];e&&!n&&h(k,P,q,{locale:t})}),[q,P,U,S,R,k]);var V={ref:H,onClick:function(e){C||"function"!==typeof _||_(e),C&&O.props&&"function"===typeof O.props.onClick&&O.props.onClick(e),e.defaultPrevented||function(e,t,n,o,i,a,c,u,s,d){if("A"!==e.currentTarget.nodeName.toUpperCase()||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&l.isLocalURL(n)){e.preventDefault();var f=function(){"beforePopState"in t?t[i?"replace":"push"](n,o,{shallow:a,locale:u,scroll:c}):t[i?"replace":"push"](n,{forceOptimisticNavigation:!d})};s?r.default.startTransition(f):f()}}(e,k,P,q,w,x,z,S,Boolean(M),R)},onMouseEnter:function(e){C||"function"!==typeof j||j(e),C&&O.props&&"function"===typeof O.props.onMouseEnter&&O.props.onMouseEnter(e),!R&&M||l.isLocalURL(P)&&h(k,P,q,{priority:!0})},onTouchStart:function(e){C||"function"!==typeof L||L(e),C&&O.props&&"function"===typeof O.props.onTouchStart&&O.props.onTouchStart(e),!R&&M||l.isLocalURL(P)&&h(k,P,q,{priority:!0})}};if(!C||b||"a"===O.type&&!("href"in O.props)){var F="undefined"!==typeof S?S:k&&k.locale,G=k&&k.isLocaleDomain&&f.getDomainLocale(q,F,k.locales,k.domainLocales);V.href=G||p.addBasePath(c.addLocale(q,F,k&&k.defaultLocale))}return C?r.default.cloneElement(O,V):r.default.createElement("a",Object.assign({},E,V),n)}));t.default=m,("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&"undefined"===typeof t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},8875:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.normalizeLocalePath=void 0;t.normalizeLocalePath=function(e,t){return n(4317).normalizeLocalePath(e,t)},("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&"undefined"===typeof t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},7190:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(4941).Z;Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootRef,n=e.rootMargin,u=e.disabled||!r,s=o(i.useState(!1),2),d=s[0],f=s[1],p=o(i.useState(null),2),g=p[0],h=p[1];i.useEffect((function(){if(r){if(u||d)return;if(g&&g.tagName){var e=function(e,t,n){var o=function(e){var t,n={root:e.root||null,margin:e.rootMargin||""},o=c.find((function(e){return e.root===n.root&&e.margin===n.margin}));if(o&&(t=l.get(o)))return t;var i=new Map,a=new IntersectionObserver((function(e){e.forEach((function(e){var t=i.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return t={id:n,observer:a,elements:i},c.push(n),l.set(n,t),t}(n),i=o.id,a=o.observer,r=o.elements;return r.set(e,t),a.observe(e),function(){if(r.delete(e),a.unobserve(e),0===r.size){a.disconnect(),l.delete(i);var t=c.findIndex((function(e){return e.root===i.root&&e.margin===i.margin}));t>-1&&c.splice(t,1)}}}(g,(function(e){return e&&f(e)}),{root:null==t?void 0:t.current,rootMargin:n});return e}}else if(!d){var o=a.requestIdleCallback((function(){return f(!0)}));return function(){return a.cancelIdleCallback(o)}}}),[g,u,n,t,d]);var m=i.useCallback((function(){f(!1)}),[]);return[h,d,m]};var i=n(7294),a=n(9311),r="function"===typeof IntersectionObserver,l=new Map,c=[];("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&"undefined"===typeof t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1018:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.TemplateContext=t.GlobalLayoutRouterContext=t.LayoutRouterContext=t.AppRouterContext=void 0;var o=(0,n(2648).Z)(n(7294)),i=o.default.createContext(null);t.AppRouterContext=i;var a=o.default.createContext(null);t.LayoutRouterContext=a;var r=o.default.createContext(null);t.GlobalLayoutRouterContext=r;var l=o.default.createContext(null);t.TemplateContext=l},9008:function(e,t,n){e.exports=n(5443)},5675:function(e,t,n){e.exports=n(8045)},1664:function(e,t,n){e.exports=n(8418)},1163:function(e,t,n){e.exports=n(387)}}]);