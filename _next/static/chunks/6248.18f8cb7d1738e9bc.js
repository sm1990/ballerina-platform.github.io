(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6248],{6248:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return s}});var i=t(5893),r=(t(7294),t(5607)),c=t(5640),a=t(2157),o=t.n(a);function s(e){var n=function(e,n){return e.position-n.position},t=function(e){u!==e&&(document.querySelectorAll("[item-id='"+u+"']")[0].getElementsByTagName("button")[0].style.color="#20b6b0",document.querySelectorAll("[item-id='"+u+"']")[0].getElementsByTagName("button")[0].style.fontWeight="500"),m&&m!==e&&(document.querySelectorAll("[item-id="+m+"]")[0].getElementsByTagName("button")[0].style.color="#20b6b0",document.querySelectorAll("[item-id="+m+"]")[0].getElementsByTagName("button")[0].style.fontWeight="500"),f&&f!==e&&(document.querySelectorAll("[item-id="+f+"]")[0].getElementsByTagName("button")[0].style.color="#20b6b0",document.querySelectorAll("[item-id="+f+"]")[0].getElementsByTagName("button")[0].style.fontWeight="500")},a=function(e){var n=e.category;return(0,i.jsx)(r.Z.Item,{eventKey:n.id,className:o().acItem,children:n.isDir?(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(r.Z.Header,{className:o().mainDir,onClick:function(){return t(n.id)},"item-id":n.id,children:n.dirName}),(0,i.jsx)(r.Z.Body,{className:o().accordionBody,children:(0,i.jsx)("ul",{className:o().firstTier,children:n.subDirectories?(0,i.jsx)(r.Z,{defaultActiveKey:m,children:(0,i.jsx)(s,{directories:n.subDirectories,activeKey:m})}):null})})]}):(0,i.jsx)("h2",{"item-id":n.id,className:"".concat(o().mainDir," accordion-header"),children:(0,i.jsx)("button",{className:d===n.id?"".concat(o().nonAcBtn," ").concat(o().active):"".concat(o().nonAcBtn),onClick:function(){return e=n.url,void(window.location.href=e);var e},children:n.dirName})})})},s=function(e){return e.directories.sort(n).map((function(e){return(0,i.jsx)(i.Fragment,{children:e.isDir&&e.position>0?(0,i.jsx)(i.Fragment,{children:(0,i.jsxs)(r.Z.Item,{eventKey:e.id,className:o().acItem,children:[(0,i.jsx)(r.Z.Header,{onClick:function(){return t(e.id)},"item-id":e.id,children:e.dirName}),(0,i.jsx)(r.Z.Body,{className:o().acBody,children:(0,i.jsx)("ul",{className:o().secondTier,children:e.subDirectories?(0,i.jsx)(r.Z,{defaultActiveKey:f,children:(0,i.jsx)(y,{directories:e.subDirectories,activeKey:f})}):null})})]})}):e.position>0?(0,i.jsx)("li",{children:"API Docs"===e.dirName?(0,i.jsx)("a",{id:e.id,className:d===e.id?o().active:null,href:"".concat(c.O)?"".concat(c.O)+e.url:e.url,target:"_blank",rel:"noreferrer",children:e.dirName}):(0,i.jsx)("a",{id:e.id,className:d===e.id?o().active:null,href:"".concat(c.O)?"".concat(c.O)+e.url:e.url,children:e.dirName})},e.id):null})}))},l=e.launcher,d=e.id,u=e.mainDir,m=e.sub,f=e.third,v=e.Toc.subDirectories.sort(n);function y(e){return e.directories.sort(n).map((function(e){return(0,i.jsx)(i.Fragment,{children:e.isDir&&e.position>0?(0,i.jsx)(i.Fragment,{children:(0,i.jsxs)(r.Z.Item,{eventKey:e.id,className:o().acItem,children:[(0,i.jsx)(r.Z.Header,{onClick:function(){return t(e.id)},"item-id":e.id,children:e.dirName}),(0,i.jsx)(r.Z.Body,{className:o().acBody,children:(0,i.jsx)("ul",{className:o().secondTier,children:e.subDirectories?(0,i.jsx)(r.Z,{defaultActiveKey:f,children:(0,i.jsx)(y,{directories:e.subDirectories,activeKey:f})}):null})})]})}):e.position>0?(0,i.jsx)("li",{children:(0,i.jsx)("a",{id:e.id,className:d===e.id?o().active:null,href:"".concat(c.O)?"".concat(c.O)+e.url:e.url,children:e.dirName})},e.id):null})}))}return(0,i.jsx)(i.Fragment,{children:(0,i.jsx)(r.Z,{defaultActiveKey:u,flush:!0,className:o().leftNavAccordian,children:v.map((function(e,n){return{learn:e.position>0?(0,i.jsx)(a,{category:e},n):null,rn:e.position>0?(0,i.jsx)(a,{category:e},n):null,archived:e.position>0?(0,i.jsx)(a,{category:e},n):null}[l]}))})})}},2157:function(e){e.exports={leftNavAccordian:"LeftNav_leftNavAccordian__i9BmP",headName:"LeftNav_headName__Z0Gbv",acItem:"LeftNav_acItem__wMNuO",mainDir:"LeftNav_mainDir__aO30Y",collapsed:"LeftNav_collapsed__eO0vU",accordionBody:"LeftNav_accordionBody__mzk_B",firstTier:"LeftNav_firstTier__KPVX9",acBody:"LeftNav_acBody__r7jSH",secondTier:"LeftNav_secondTier__nZWOX",active:"LeftNav_active__7vmPU",nonAcBtn:"LeftNav_nonAcBtn__RvVTg"}},5607:function(e,n,t){"use strict";t.d(n,{Z:function(){return B}});var i=t(4184),r=t.n(i),c=t(7294),a=t(5446),o=t(6792),s=t(6518);function l(e,n){return Array.isArray(e)?e.includes(n):e===n}const d=c.createContext({});d.displayName="AccordionContext";var u=d,m=t(5893);const f=c.forwardRef((({as:e="div",bsPrefix:n,className:t,children:i,eventKey:a,...d},f)=>{const{activeEventKey:v}=(0,c.useContext)(u);return n=(0,o.vE)(n,"accordion-collapse"),(0,m.jsx)(s.Z,{ref:f,in:l(v,a),...d,className:r()(t,n),children:(0,m.jsx)(e,{children:c.Children.only(i)})})}));f.displayName="AccordionCollapse";var v=f;const y=c.createContext({eventKey:""});y.displayName="AccordionItemContext";var x=y;const N=c.forwardRef((({as:e="div",bsPrefix:n,className:t,onEnter:i,onEntering:a,onEntered:s,onExit:l,onExiting:d,onExited:u,...f},y)=>{n=(0,o.vE)(n,"accordion-body");const{eventKey:N}=(0,c.useContext)(x);return(0,m.jsx)(v,{eventKey:N,onEnter:i,onEntering:a,onEntered:s,onExit:l,onExiting:d,onExited:u,children:(0,m.jsx)(e,{ref:y,...f,className:r()(t,n)})})}));N.displayName="AccordionBody";var h=N;const j=c.forwardRef((({as:e="button",bsPrefix:n,className:t,onClick:i,...a},s)=>{n=(0,o.vE)(n,"accordion-button");const{eventKey:d}=(0,c.useContext)(x),f=function(e,n){const{activeEventKey:t,onSelect:i,alwaysOpen:r}=(0,c.useContext)(u);return c=>{let a=e===t?null:e;r&&(a=Array.isArray(t)?t.includes(e)?t.filter((n=>n!==e)):[...t,e]:[e]),null==i||i(a,c),null==n||n(c)}}(d,i),{activeEventKey:v}=(0,c.useContext)(u);return"button"===e&&(a.type="button"),(0,m.jsx)(e,{ref:s,onClick:f,...a,"aria-expanded":Array.isArray(v)?v.includes(d):d===v,className:r()(t,n,!l(v,d)&&"collapsed")})}));j.displayName="AccordionButton";var _=j;const b=c.forwardRef((({as:e="h2",bsPrefix:n,className:t,children:i,onClick:c,...a},s)=>(n=(0,o.vE)(n,"accordion-header"),(0,m.jsx)(e,{ref:s,...a,className:r()(t,n),children:(0,m.jsx)(_,{onClick:c,children:i})}))));b.displayName="AccordionHeader";var p=b;const g=c.forwardRef((({as:e="div",bsPrefix:n,className:t,eventKey:i,...a},s)=>{n=(0,o.vE)(n,"accordion-item");const l=(0,c.useMemo)((()=>({eventKey:i})),[i]);return(0,m.jsx)(x.Provider,{value:l,children:(0,m.jsx)(e,{ref:s,...a,className:r()(t,n)})})}));g.displayName="AccordionItem";var A=g;const E=c.forwardRef(((e,n)=>{const{as:t="div",activeKey:i,bsPrefix:s,className:l,onSelect:d,flush:f,alwaysOpen:v,...y}=(0,a.Ch)(e,{activeKey:"onSelect"}),x=(0,o.vE)(s,"accordion"),N=(0,c.useMemo)((()=>({activeEventKey:i,onSelect:d,alwaysOpen:v})),[i,d,v]);return(0,m.jsx)(u.Provider,{value:N,children:(0,m.jsx)(t,{ref:n,...y,className:r()(l,x,f&&`${x}-flush`)})})}));E.displayName="Accordion";var B=Object.assign(E,{Button:_,Collapse:v,Item:A,Header:p,Body:h})}}]);