(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[356],{861:function(e,t,a){"use strict";a.d(t,{FT:function(){return i}});var n=a(7294),r=a(5893);const s=["as","disabled"];function i({tagName:e,disabled:t,href:a,target:n,rel:r,onClick:s,tabIndex:i=0,type:o}){e||(e=null!=a||null!=n||null!=r?"a":"button");const c={tagName:e};if("button"===e)return[{type:o||"button",disabled:t},c];const l=n=>{(t||"a"===e&&function(e){return!e||"#"===e.trim()}(a))&&n.preventDefault(),t?n.stopPropagation():null==s||s(n)};return"a"===e&&(a||(a="#"),t&&(a=void 0)),[{role:"button",disabled:void 0,tabIndex:t?void 0:i,href:a,target:"a"===e?n:void 0,"aria-disabled":t||void 0,rel:"a"===e?r:void 0,onClick:l,onKeyDown:e=>{" "===e.key&&(e.preventDefault(),l(e))}},c]}const o=n.forwardRef(((e,t)=>{let{as:a,disabled:n}=e,o=function(e,t){if(null==e)return{};var a,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,s);const[c,{tagName:l}]=i(Object.assign({tagName:a,disabled:n},o));return(0,r.jsx)(l,Object.assign({},o,c,{ref:t}))}));o.displayName="Button",t.ZP=o},2958:function(e,t,a){"use strict";a.d(t,{Z:function(){return l}});var n=a(5893),r=a(7294),s=a(5607),i=a(5640),o=a(2157),c=a.n(o);function l(e){var t=e.navContent,a=e.bbe,o=void 0===a?null:a,l=e.viewer,d=void 0===l?null:l,u=function(e){var t=e.navContent;return(0,n.jsx)(s.Z,{defaultActiveKey:p,className:c().leftNavAccordian,flush:!0,children:t&&t.sublinks.map((function(e,t){return(0,n.jsxs)(s.Z.Item,{eventKey:e.id,className:c().acItem,children:[(0,n.jsx)(s.Z.Header,{className:c().mainDir,children:e.title}),(0,n.jsx)(s.Z.Body,{className:c().accordionBody,children:(0,n.jsx)("ul",{className:c().firstTier,children:e.hasOwnProperty("sublinks")?(0,n.jsx)(j,{active:p===t+1,directories:e.sublinks}):null})})]},t)}))})},f=(0,r.useState)(""),m=(f[0],f[1]),v=(0,r.useState)(null),p=v[0],x=v[1],y=(0,r.useState)(null),b=y[0],h=y[1];function j(e){var t=e.active,a=void 0!==t&&t;return e.directories.map((function(e){return(0,n.jsx)(n.Fragment,{children:e.hasOwnProperty("sublinks")?(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(s.Z,{defaultActiveKey:a?b:null,children:(0,n.jsxs)(s.Z.Item,{eventKey:e.id,className:c().acItem,children:[(0,n.jsx)(s.Z.Header,{children:e.title}),(0,n.jsx)(s.Z.Body,{className:c().acBody,children:(0,n.jsx)("ul",{className:c().secondTier,children:(0,n.jsx)(j,{directories:e.sublinks})})})]})})}):(0,n.jsx)("li",{children:(0,n.jsx)("a",{id:e.id,className:o===e.url?c().active:null,href:"".concat(i.O)?"".concat(i.O,"/learn/by-example/").concat(e.url):"/learn/by-example/".concat(e.url),children:e.title})},e.id)})}))}return(0,r.useEffect)((function(){if(null===d){var e=!0,a=!1,n=void 0;try{for(var r,s=t.sublinks[Symbol.iterator]();!(e=(r=s.next()).done);e=!0){var i=r.value,c=!0,l=!1,u=void 0;try{for(var f,v=i.sublinks[Symbol.iterator]();!(c=(f=v.next()).done);c=!0){var p=f.value,y=!0,b=!1,j=void 0;try{for(var N,g=p.sublinks[Symbol.iterator]();!(y=(N=g.next()).done);y=!0){N.value.url===o&&(x(i.id),h(p.id))}}catch(w){b=!0,j=w}finally{try{y||null==g.return||g.return()}finally{if(b)throw j}}}}catch(w){l=!0,u=w}finally{try{c||null==v.return||v.return()}finally{if(l)throw u}}}}catch(w){a=!0,n=w}finally{try{e||null==s.return||s.return()}finally{if(a)throw n}}}else x(d);m(t.url)}),[t,o,d]),(0,n.jsx)(u,{navContent:t})}},3286:function(e,t,a){"use strict";a.d(t,{Z:function(){return d}});var n=a(5893),r=a(9008),s=a(5152),i=a(478),o=a(682),c=a(1608),l=a(4564);function d(e){var t=e.children,d=(0,s.default)((function(){return Promise.all([a.e(8819),a.e(1915),a.e(2995)]).then(a.bind(a,9075))}),{loadableGenerated:{webpack:function(){return[9075]}},ssr:!1}),u=(0,s.default)((function(){return a.e(9332).then(a.bind(a,9332))}),{loadableGenerated:{webpack:function(){return[9332]}},ssr:!1});return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(r.default,{children:[(0,n.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0"}),(0,n.jsx)("meta",{property:"og:image",content:"https://ballerina.io/images/ballerina-generic-social-media-image-2023.png"}),(0,n.jsx)("meta",{property:"og:title",content:"Ballerina"}),(0,n.jsx)("meta",{property:"og:image",content:"https://ballerina.io/images/ballerina-generic-social-media-image-2023.png"}),(0,n.jsx)("meta",{name:"twitter:card",content:"summary"}),(0,n.jsx)("meta",{name:"twitter:site",content:"@ballerinalang"}),(0,n.jsx)("meta",{name:"twitter:creator",content:"@ballerinalang"}),(0,n.jsx)("meta",{name:"twitter:title",content:"Ballerina"}),(0,n.jsx)("meta",{name:"twitter:card",content:"summary_large_image"}),(0,n.jsx)("meta",{name:"twitter:image",content:"https://ballerina.io/images/ballerina-generic-social-media-image-2023.png"}),(0,n.jsx)("meta",{property:"twitter:image",content:"https://ballerina.io/images/ballerina-generic-social-media-image-2023.png"}),(0,n.jsx)("script",{dangerouslySetInnerHTML:{__html:"(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':\nnew Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],\nj=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.setAttributeNode(d.createAttribute('data-ot-ignore'));j.async=true;j.src=\n'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);\n})(window,document,'script','dataLayer','GTM-PSL2TX4');"}}),(0,n.jsx)("script",{type:"text/javascript",crossOrigin:"true",src:"https://cdn.jsdelivr.net/npm/@docsearch/js@alpha"}),(0,n.jsx)("script",{src:"https://cookie-cdn.cookiepro.com/scripttemplates/otSDKStub.js",type:"text/javascript",charSet:"UTF-8","data-domain-script":"630ad396-5fd5-4745-92ae-2765dc8841ee",defer:!0})]}),(0,n.jsx)(u,{}),(0,n.jsxs)(i.Z,{gap:0,className:"main-wrapper",children:[(0,n.jsx)(d,{launcher:"docs"}),(0,n.jsx)(o.Z,{className:"wrap-page-content",fluid:!0,children:(0,n.jsx)(c.Z,{children:t})}),(0,n.jsx)(l.Z,{})]})]})}},2157:function(e){e.exports={leftNavAccordian:"LeftNav_leftNavAccordian__i9BmP",headName:"LeftNav_headName__Z0Gbv",acItem:"LeftNav_acItem__wMNuO",mainDir:"LeftNav_mainDir__aO30Y",collapsed:"LeftNav_collapsed__eO0vU",accordionBody:"LeftNav_accordionBody__mzk_B",firstTier:"LeftNav_firstTier__KPVX9",acBody:"LeftNav_acBody__r7jSH",secondTier:"LeftNav_secondTier__nZWOX",active:"LeftNav_active__7vmPU"}},5607:function(e,t,a){"use strict";a.d(t,{Z:function(){return k}});var n=a(4184),r=a.n(n),s=a(7294),i=a(5446),o=a(6792),c=a(6518);function l(e,t){return Array.isArray(e)?e.includes(t):e===t}const d=s.createContext({});d.displayName="AccordionContext";var u=d,f=a(5893);const m=s.forwardRef((({as:e="div",bsPrefix:t,className:a,children:n,eventKey:i,...d},m)=>{const{activeEventKey:v}=(0,s.useContext)(u);return t=(0,o.vE)(t,"accordion-collapse"),(0,f.jsx)(c.Z,{ref:m,in:l(v,i),...d,className:r()(a,t),children:(0,f.jsx)(e,{children:s.Children.only(n)})})}));m.displayName="AccordionCollapse";var v=m;const p=s.createContext({eventKey:""});p.displayName="AccordionItemContext";var x=p;const y=s.forwardRef((({as:e="div",bsPrefix:t,className:a,...n},i)=>{t=(0,o.vE)(t,"accordion-body");const{eventKey:c}=(0,s.useContext)(x);return(0,f.jsx)(v,{eventKey:c,children:(0,f.jsx)(e,{ref:i,...n,className:r()(a,t)})})}));y.displayName="AccordionBody";var b=y;const h=s.forwardRef((({as:e="button",bsPrefix:t,className:a,onClick:n,...i},c)=>{t=(0,o.vE)(t,"accordion-button");const{eventKey:d}=(0,s.useContext)(x),m=function(e,t){const{activeEventKey:a,onSelect:n,alwaysOpen:r}=(0,s.useContext)(u);return s=>{let i=e===a?null:e;r&&(i=Array.isArray(a)?a.includes(e)?a.filter((t=>t!==e)):[...a,e]:[e]),null==n||n(i,s),null==t||t(s)}}(d,n),{activeEventKey:v}=(0,s.useContext)(u);return"button"===e&&(i.type="button"),(0,f.jsx)(e,{ref:c,onClick:m,...i,"aria-expanded":d===v,className:r()(a,t,!l(v,d)&&"collapsed")})}));h.displayName="AccordionButton";var j=h;const N=s.forwardRef((({as:e="h2",bsPrefix:t,className:a,children:n,onClick:s,...i},c)=>(t=(0,o.vE)(t,"accordion-header"),(0,f.jsx)(e,{ref:c,...i,className:r()(a,t),children:(0,f.jsx)(j,{onClick:s,children:n})}))));N.displayName="AccordionHeader";var g=N;const w=s.forwardRef((({as:e="div",bsPrefix:t,className:a,eventKey:n,...i},c)=>{t=(0,o.vE)(t,"accordion-item");const l=(0,s.useMemo)((()=>({eventKey:n})),[n]);return(0,f.jsx)(x.Provider,{value:l,children:(0,f.jsx)(e,{ref:c,...i,className:r()(a,t)})})}));w.displayName="AccordionItem";var _=w;const E=s.forwardRef(((e,t)=>{const{as:a="div",activeKey:n,bsPrefix:c,className:l,onSelect:d,flush:m,alwaysOpen:v,...p}=(0,i.Ch)(e,{activeKey:"onSelect"}),x=(0,o.vE)(c,"accordion"),y=(0,s.useMemo)((()=>({activeEventKey:n,onSelect:d,alwaysOpen:v})),[n,d,v]);return(0,f.jsx)(u.Provider,{value:y,children:(0,f.jsx)(a,{ref:t,...p,className:r()(l,x,m&&`${x}-flush`)})})}));E.displayName="Accordion";var k=Object.assign(E,{Button:j,Collapse:v,Item:_,Header:g,Body:b})},5005:function(e,t,a){"use strict";var n=a(4184),r=a.n(n),s=a(7294),i=a(861),o=a(6792),c=a(5893);const l=s.forwardRef((({as:e,bsPrefix:t,variant:a,size:n,active:s,className:l,...d},u)=>{const f=(0,o.vE)(t,"btn"),[m,{tagName:v}]=(0,i.FT)({tagName:e,...d}),p=v;return(0,c.jsx)(p,{...m,...d,ref:u,className:r()(l,f,s&&"active",a&&`${f}-${a}`,n&&`${f}-${n}`,d.href&&d.disabled&&"disabled")})}));l.displayName="Button",l.defaultProps={variant:"primary",active:!1,disabled:!1},t.Z=l},4819:function(e,t,a){"use strict";const n=a(7294).createContext(null);n.displayName="NavbarContext",t.Z=n},4077:function(e,t,a){"use strict";a.d(t,{Z:function(){return P}});var n=a(4184),r=a.n(n),s=a(8146),i=a(7294),o=a(5288),c=a(1068),l=a(6611),d=(0,l.Z)("offcanvas-body"),u=a(5257),f=a(3825),m=a(2785),v=a(6792),p=a(5893);const x={[u.d0]:"show",[u.cn]:"show"},y=i.forwardRef((({bsPrefix:e,className:t,children:a,...n},s)=>(e=(0,v.vE)(e,"offcanvas"),(0,p.jsx)(m.Z,{ref:s,addEndListener:f.Z,...n,childRef:a.ref,children:(n,s)=>i.cloneElement(a,{...s,className:r()(t,a.props.className,(n===u.d0||n===u.Ix)&&`${e}-toggling`,x[n])})}))));y.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1},y.displayName="OffcanvasToggling";var b=y,h=a(6467),j=a(4819),N=a(6695);const g=i.forwardRef((({bsPrefix:e,className:t,...a},n)=>(e=(0,v.vE)(e,"offcanvas-header"),(0,p.jsx)(N.Z,{ref:n,...a,className:r()(t,e)}))));g.displayName="OffcanvasHeader",g.defaultProps={closeLabel:"Close",closeButton:!1};var w=g;const _=(0,a(9602).Z)("h5");var E=(0,l.Z)("offcanvas-title",{Component:_}),k=a(9673);function Z(e){return(0,p.jsx)(b,{...e})}function C(e){return(0,p.jsx)(c.Z,{...e})}const O=i.forwardRef((({bsPrefix:e,className:t,children:a,"aria-labelledby":n,placement:c,show:l,backdrop:d,keyboard:u,scroll:f,onEscapeKeyDown:m,onShow:x,onHide:y,container:b,autoFocus:N,enforceFocus:g,restoreFocus:w,restoreFocusOptions:_,onEntered:E,onExit:O,onExiting:P,onEnter:B,onEntering:K,onExited:A,backdropClassName:S,manager:T,...F},L)=>{const I=(0,i.useRef)();e=(0,v.vE)(e,"offcanvas");const{onToggle:R}=(0,i.useContext)(j.Z)||{},D=(0,s.Z)((()=>{null==R||R(),null==y||y()})),H=(0,i.useMemo)((()=>({onHide:D})),[D]);const $=(0,i.useCallback)((t=>(0,p.jsx)("div",{...t,className:r()(`${e}-backdrop`,S)})),[S,e]);return(0,p.jsx)(h.Z.Provider,{value:H,children:(0,p.jsx)(o.Z,{show:l,ref:L,backdrop:d,container:b,keyboard:u,autoFocus:N,enforceFocus:g&&!f,restoreFocus:w,restoreFocusOptions:_,onEscapeKeyDown:m,onShow:x,onHide:D,onEnter:(e,...t)=>{e&&(e.style.visibility="visible"),null==B||B(e,...t)},onEntering:K,onEntered:E,onExit:O,onExiting:P,onExited:(e,...t)=>{e&&(e.style.visibility=""),null==A||A(...t)},manager:T||(f?(I.current||(I.current=new k.Z({handleContainerOverflow:!1})),I.current):(0,k.t)()),transition:Z,backdropTransition:C,renderBackdrop:$,renderDialog:s=>(0,p.jsx)("div",{role:"dialog",...s,...F,className:r()(t,e,`${e}-${c}`),"aria-labelledby":n,children:a})})})}));O.displayName="Offcanvas",O.defaultProps={show:!1,backdrop:!0,keyboard:!0,scroll:!1,autoFocus:!0,enforceFocus:!0,restoreFocus:!0,placement:"start"};var P=Object.assign(O,{Body:d,Header:w,Title:E})}}]);