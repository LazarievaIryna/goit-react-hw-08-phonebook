"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[476],{1476:function(e,n,t){t.r(n),t.d(n,{default:function(){return B}});var r=t(9439),i=t(2791),a=t(9434),o=t(4087),c=t(6192),u=t(7806),l=t(8208),s=t(9140),p=t(4224),f=t(6914),d=(0,t(5903).I)({d:"M2.20731,0.0127209 C2.1105,-0.0066419 1.99432,-0.00664663 1.91687,0.032079 C0.871279,0.438698 0.212942,1.92964 0.0580392,2.95587 C-0.426031,6.28627 2.20731,9.17133 4.62766,11.0689 C6.77694,12.7534 10.9012,15.5223 13.3409,12.8503 C13.6507,12.5211 14.0186,12.037 13.9993,11.553 C13.9412,10.7397 13.186,10.1588 12.6051,9.71349 C12.1598,9.38432 11.2304,8.47427 10.6495,8.49363 C10.1267,8.51299 9.79754,9.05515 9.46837,9.38432 L8.88748,9.96521 C8.79067,10.062 7.55145,9.24878 7.41591,9.15197 C6.91248,8.8228 6.4284,8.45491 6.00242,8.04829 C5.57644,7.64167 5.18919,7.19632 4.86002,6.73161 C4.7632,6.59607 3.96933,5.41495 4.04678,5.31813 C4.04678,5.31813 4.72448,4.58234 4.91811,4.2919 C5.32473,3.67229 5.63453,3.18822 5.16982,2.45243 C4.99556,2.18135 4.78257,1.96836 4.55021,1.73601 C4.14359,1.34875 3.73698,0.942131 3.27227,0.612963 C3.02055,0.419335 2.59457,0.0708094 2.20731,0.0127209 Z",displayName:"PhoneIcon",viewBox:"0 0 14 14"}),m=t(9085),h="NOT_FOUND";var v=function(e,n){return e===n};function x(e,n){var t="object"===typeof n?n:{equalityCheck:n},r=t.equalityCheck,i=void 0===r?v:r,a=t.maxSize,o=void 0===a?1:a,c=t.resultEqualityCheck,u=function(e){return function(n,t){if(null===n||null===t||n.length!==t.length)return!1;for(var r=n.length,i=0;i<r;i++)if(!e(n[i],t[i]))return!1;return!0}}(i),l=1===o?function(e){var n;return{get:function(t){return n&&e(n.key,t)?n.value:h},put:function(e,t){n={key:e,value:t}},getEntries:function(){return n?[n]:[]},clear:function(){n=void 0}}}(u):function(e,n){var t=[];function r(e){var r=t.findIndex((function(t){return n(e,t.key)}));if(r>-1){var i=t[r];return r>0&&(t.splice(r,1),t.unshift(i)),i.value}return h}return{get:r,put:function(n,i){r(n)===h&&(t.unshift({key:n,value:i}),t.length>e&&t.pop())},getEntries:function(){return t},clear:function(){t=[]}}}(o,u);function s(){var n=l.get(arguments);if(n===h){if(n=e.apply(null,arguments),c){var t=l.getEntries(),r=t.find((function(e){return c(e.value,n)}));r&&(n=r.value)}l.put(arguments,n)}return n}return s.clearCache=function(){return l.clear()},s}function y(e){var n=Array.isArray(e[0])?e[0]:e;if(!n.every((function(e){return"function"===typeof e}))){var t=n.map((function(e){return"function"===typeof e?"function "+(e.name||"unnamed")+"()":typeof e})).join(", ");throw new Error("createSelector expects all input-selectors to be functions, but received the following types: ["+t+"]")}return n}function b(e){for(var n=arguments.length,t=new Array(n>1?n-1:0),r=1;r<n;r++)t[r-1]=arguments[r];var i=function(){for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];var a,o=0,c={memoizeOptions:void 0},u=r.pop();if("object"===typeof u&&(c=u,u=r.pop()),"function"!==typeof u)throw new Error("createSelector expects an output function after the inputs, but received: ["+typeof u+"]");var l=c,s=l.memoizeOptions,p=void 0===s?t:s,f=Array.isArray(p)?p:[p],d=y(r),m=e.apply(void 0,[function(){return o++,u.apply(null,arguments)}].concat(f)),h=e((function(){for(var e=[],n=d.length,t=0;t<n;t++)e.push(d[t].apply(null,arguments));return a=m.apply(null,e)}));return Object.assign(h,{resultFunc:u,memoizedResultFunc:m,dependencies:d,lastResult:function(){return a},recomputations:function(){return o},resetRecomputations:function(){return o=0}}),h};return i}var g=b(x),j=function(e){return e.contacts.items},w=function(e){return e.contacts.isLoading},C=function(e){return e.contacts.error},O=function(e){return e.filter},k=g([j,O],(function(e,n){var t=n.toLowerCase();return e.filter((function(e){return e.name.toLowerCase().includes(t)}))})),_=t(3634),A=t(184),E=function(){var e=(0,i.useState)(""),n=(0,r.Z)(e,2),t=n[0],h=n[1],v=(0,i.useState)(""),x=(0,r.Z)(v,2),y=x[0],b=x[1],g=(0,a.v9)(j),w=(0,a.I0)();return(0,A.jsxs)(o.xu,{as:"form",w:"auto",display:"inline-grid",onSubmit:function(e){e.preventDefault();var n={name:t,number:y},r=g.find((function(e){return e.number===y}));g.some((function(e){return e.name===t}))?m.Am.error('Contact with name "'.concat(t,'" is already in contacts')):r?m.Am.error("Contact with number ".concat(r.number," is already in  ").concat(r.name)):(w((0,_.uK)(n)),h(""),b(""))},children:[(0,A.jsxs)(c.B,{mb:"10px",children:[(0,A.jsx)(u.Z,{bottom:"0px",top:"28px",children:(0,A.jsx)(f.r,{color:"black.300"})}),(0,A.jsxs)(l.l,{width:"300px",m:"0",children:["Name",(0,A.jsx)(s.I,{type:"text",name:"name",value:t,variant:"filled",pl:"35px",mt:"5px",mb:"10px",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,onChange:function(e){h(e.currentTarget.value)}})]})]}),(0,A.jsxs)(c.B,{mb:"10px",children:[(0,A.jsx)(u.Z,{bottom:"0px",top:"28px",children:(0,A.jsx)(d,{color:"black.300"})}),(0,A.jsxs)(l.l,{width:"300px",m:"0",children:["Number",(0,A.jsx)(s.I,{type:"tel",name:"number",value:y,variant:"filled",pl:"35px",mt:"5px",mb:"10px",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0,onChange:function(e){b(e.currentTarget.value)}})]})]}),(0,A.jsx)(p.z,{colorScheme:"pink",type:"submit",color:"black",size:"md",height:"30px",width:"-webkit-fill-available",marginTop:"10px",marginBottom:"20px",children:"Add contact"})]})},I=function(e){var n=e.contact,t=n.name,r=n.number,i=n.id,c=(0,a.I0)();return(0,A.jsxs)(o.xu,{as:"li",display:"flex",alignItems:"center",justifyContent:"space-evenly",mb:"10px",children:[(0,A.jsx)(o.xu,{mr:"5px",children:t})," : ",(0,A.jsx)(o.xu,{ml:"5px",children:r}),(0,A.jsx)(p.z,{onClick:function(){return c((0,_.GK)(i))},colorScheme:"pink",type:"button",color:"black",size:"md",height:"28px",width:"auto",ml:"10px",children:"Delete"})]})},S=function(){var e=(0,a.v9)(k);return(0,A.jsx)(o.xu,{as:"ul",minWidth:"300px",children:e.map((function(e){return(0,A.jsx)(I,{contact:e},e.id)}))})},z=function(e){var n=e.children;return(0,A.jsx)("p",{children:n})},P=t(3165),M=function(){var e=(0,a.I0)(),n=(0,a.v9)(O);return(0,A.jsxs)(o.xu,{display:"inline-grid",w:"300px",justifyItems:"center",children:[(0,A.jsx)("p",{children:"Find contacts by name"}),(0,A.jsx)(c.B,{mb:"10px",children:(0,A.jsx)(s.I,{type:"text",name:"filter",value:n,onChange:function(n){return e((0,P.T)(n.target.value))},variant:"filled",pl:"35px",mt:"5px",mb:"10px"})})]})},L=t(2757),F=t.n(L),Z=function(e){var n=e.isLoading;return(0,A.jsx)(F(),{color:"#36d7b7",cssOverride:{},loading:n,margin:2,size:13,width:15})};function B(){var e=(0,a.I0)(),n=(0,a.v9)(j),t=(0,a.v9)(w),r=(0,a.v9)(C);return(0,i.useEffect)((function(){e((0,_.yF)())}),[e]),(0,A.jsxs)(o.xu,{display:"flex",flexDirection:"column",alignItems:"center",children:[(0,A.jsx)("h1",{children:"Phonebook"}),(0,A.jsx)(E,{}),r&&(0,A.jsx)(z,{children:r}),n.length>0&&(0,A.jsxs)(A.Fragment,{children:[(0,A.jsx)(M,{}),(0,A.jsx)(S,{})]}),!t&&0===n.length&&(0,A.jsx)("p",{children:"There is no contacts"}),(0,A.jsx)(Z,{isLoading:t})]})}},2757:function(e,n,t){var r=this&&this.__assign||function(){return r=Object.assign||function(e){for(var n,t=1,r=arguments.length;t<r;t++)for(var i in n=arguments[t])Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i]);return e},r.apply(this,arguments)},i=this&&this.__createBinding||(Object.create?function(e,n,t,r){void 0===r&&(r=t);var i=Object.getOwnPropertyDescriptor(n,t);i&&!("get"in i?!n.__esModule:i.writable||i.configurable)||(i={enumerable:!0,get:function(){return n[t]}}),Object.defineProperty(e,r,i)}:function(e,n,t,r){void 0===r&&(r=t),e[r]=n[t]}),a=this&&this.__setModuleDefault||(Object.create?function(e,n){Object.defineProperty(e,"default",{enumerable:!0,value:n})}:function(e,n){e.default=n}),o=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var n={};if(null!=e)for(var t in e)"default"!==t&&Object.prototype.hasOwnProperty.call(e,t)&&i(n,e,t);return a(n,e),n},c=this&&this.__rest||function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)n.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(t[r[i]]=e[r[i]])}return t};Object.defineProperty(n,"__esModule",{value:!0});var u=o(t(2791)),l=t(8945),s=(0,t(7074).createAnimation)("GridLoader","0% {transform: scale(1)} 50% {transform: scale(0.5); opacity: 0.7} 100% {transform: scale(1); opacity: 1}","grid"),p=function(e){return Math.random()*e};n.default=function(e){var n=e.loading,t=void 0===n||n,i=e.color,a=void 0===i?"#000000":i,o=e.speedMultiplier,f=void 0===o?1:o,d=e.cssOverride,m=void 0===d?{}:d,h=e.size,v=void 0===h?15:h,x=e.margin,y=void 0===x?2:x,b=c(e,["loading","color","speedMultiplier","cssOverride","size","margin"]),g=(0,l.parseLengthAndUnit)(v),j=(0,l.parseLengthAndUnit)(y),w=3*parseFloat(g.value.toString())+6*parseFloat(j.value.toString()),C=r({width:"".concat(w).concat(g.unit),fontSize:0,display:"inline-block"},m),O=function(e){return{display:"inline-block",backgroundColor:a,width:"".concat((0,l.cssValue)(v)),height:"".concat((0,l.cssValue)(v)),margin:(0,l.cssValue)(y),borderRadius:"100%",animationFillMode:"both",animation:"".concat(s," ").concat((e/100+.6)/f,"s ").concat(e/100-.2,"s infinite ease")}};return t?u.createElement("span",r({style:C},b,{ref:function(e){e&&e.style.setProperty("width","".concat(w).concat(g.unit),"important")}}),u.createElement("span",{style:O(p(100))}),u.createElement("span",{style:O(p(100))}),u.createElement("span",{style:O(p(100))}),u.createElement("span",{style:O(p(100))}),u.createElement("span",{style:O(p(100))}),u.createElement("span",{style:O(p(100))}),u.createElement("span",{style:O(p(100))}),u.createElement("span",{style:O(p(100))}),u.createElement("span",{style:O(p(100))})):null}},7074:function(e,n){Object.defineProperty(n,"__esModule",{value:!0}),n.createAnimation=void 0;n.createAnimation=function(e,n,t){var r="react-spinners-".concat(e,"-").concat(t);if("undefined"==typeof window||!window.document)return r;var i=document.createElement("style");document.head.appendChild(i);var a=i.sheet,o="\n    @keyframes ".concat(r," {\n      ").concat(n,"\n    }\n  ");return a&&a.insertRule(o,0),r}},8945:function(e,n){Object.defineProperty(n,"__esModule",{value:!0}),n.cssValue=n.parseLengthAndUnit=void 0;var t={cm:!0,mm:!0,in:!0,px:!0,pt:!0,pc:!0,em:!0,ex:!0,ch:!0,rem:!0,vw:!0,vh:!0,vmin:!0,vmax:!0,"%":!0};function r(e){if("number"===typeof e)return{value:e,unit:"px"};var n,r=(e.match(/^[0-9.]*/)||"").toString();n=r.includes(".")?parseFloat(r):parseInt(r,10);var i=(e.match(/[^0-9]*$/)||"").toString();return t[i]?{value:n,unit:i}:(console.warn("React Spinners: ".concat(e," is not a valid css value. Defaulting to ").concat(n,"px.")),{value:n,unit:"px"})}n.parseLengthAndUnit=r,n.cssValue=function(e){var n=r(e);return"".concat(n.value).concat(n.unit)}},6914:function(e,n,t){t.d(n,{r:function(){return r}});var r=(0,t(5903).I)({displayName:"CheckCircleIcon",d:"M12,0A12,12,0,1,0,24,12,12.014,12.014,0,0,0,12,0Zm6.927,8.2-6.845,9.289a1.011,1.011,0,0,1-1.43.188L5.764,13.769a1,1,0,1,1,1.25-1.562l4.076,3.261,6.227-8.451A1,1,0,1,1,18.927,8.2Z"})}}]);
//# sourceMappingURL=476.dc8e1fc5.chunk.js.map