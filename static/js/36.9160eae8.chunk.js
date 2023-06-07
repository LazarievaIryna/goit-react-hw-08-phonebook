"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[36],{5036:function(n,e,t){t.r(e),t.d(e,{default:function(){return B}});var r,a,i,o,c,s,u,d=t(9439),l=t(2791),h=t(9434),p=t(168),x=t(6444),m=x.ZP.form(r||(r=(0,p.Z)(["\n  display: flex;\n  flex-direction: column;\n  height: 180px;\n  width: 290px;\n  align-items: center;\n  border: 2px solid black;\n  padding: 10px;\n"]))),f=x.ZP.label(a||(a=(0,p.Z)(["\n  display: flex;\n  flex-direction: column;\n  text-align: left;\n  margin-bottom: 10px;\n"]))),g=x.ZP.input(i||(i=(0,p.Z)(["\n  padding: 5px;\n  margin-top: 10px;\n  width: fit-content;\n  border: 1px solid grey;\n"]))),b=x.ZP.button(o||(o=(0,p.Z)(["\n  font-size: 12px;\n  width: fit-content;\n  height: auto;\n  background-color: transparent;\n  border: 1px solid grey;\n  border-radius: 4px;\n  padding: 3px;\n  :hover {\n    background-color: blue;\n  }\n"]))),j=t(6916),v=function(n){return n.contacts.items},Z=function(n){return n.contacts.isLoading},y=function(n){return n.contacts.error},w=function(n){return n.filter},k=(0,j.P1)([v,w],(function(n,e){var t=e.toLowerCase();return n.filter((function(n){return n.name.toLowerCase().includes(t)}))})),C=t(3634),P=t(184),F=function(){var n=(0,l.useState)(""),e=(0,d.Z)(n,2),t=e[0],r=e[1],a=(0,l.useState)(""),i=(0,d.Z)(a,2),o=i[0],c=i[1],s=(0,h.v9)(v),u=(0,h.I0)();return(0,P.jsxs)(m,{onSubmit:function(n){n.preventDefault();var e={name:t,number:o},a=s.find((function(n){return n.number===o}));return s.some((function(n){return n.name===t}))?alert('Contact with name "'.concat(t,'" is already in contacts')):a?alert("Contact with number ".concat(a.number," is already in  ").concat(a.name)):(u((0,C.uK)(e)),r(""),void c(""))},children:[(0,P.jsxs)(f,{children:["Name",(0,P.jsx)(g,{type:"text",value:t,name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,onChange:function(n){r(n.currentTarget.value)}})]}),(0,P.jsxs)(f,{children:["Number",(0,P.jsx)(g,{type:"tel",value:o,name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0,onChange:function(n){c(n.currentTarget.value)}})]}),(0,P.jsx)(b,{type:"submit",children:"Add contact"})]})},z=x.ZP.button(c||(c=(0,p.Z)(["\n  margin-left: 10px;\n  width: fit-content;\n  height: auto;\n  background-color: transparent;\n  border: 1px solid grey;\n  border-radius: 4px;\n  padding: 3px;\n  :hover,\n  :focus {\n    background-color: blue;\n  }\n"]))),A=x.ZP.li(s||(s=(0,p.Z)(["\n  margin-bottom: 10px;\n  /* display: flex;\n  justify-content: space-between; */\n"]))),L=function(n){var e=n.contact,t=e.name,r=e.number,a=e.id,i=(0,h.I0)();return(0,P.jsx)(P.Fragment,{children:(0,P.jsxs)(A,{children:[t,": ",r,(0,P.jsx)(z,{type:"button",onClick:function(){return i((0,C.GK)(a))},children:"Delete"})]})})},I=x.ZP.ul(u||(u=(0,p.Z)(["\n  width: fit-content;\n  margin-left: auto;\n  margin-right: auto;\n  text-align: initial;\n"]))),T=function(){var n=(0,h.v9)(k);return(0,P.jsx)(I,{children:n.map((function(n){return(0,P.jsx)(L,{contact:n},n.id)}))})},_=function(n){var e=n.children;return(0,P.jsx)("p",{children:e})},N=t(3165),S=function(){var n=(0,h.I0)(),e=(0,h.v9)(w);return(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)("p",{children:"Find contacts by name"}),(0,P.jsx)("input",{type:"text",name:"filter",value:e,onChange:function(e){return n((0,N.T)(e.target.value))}})]})},q=t(2757),D=t.n(q),K=function(n){var e=n.isLoading;return(0,P.jsx)(D(),{color:"#36d7b7",cssOverride:{},loading:e,margin:2,size:13,width:15})};function B(){var n=(0,h.I0)(),e=(0,h.v9)(v),t=(0,h.v9)(Z),r=(0,h.v9)(y);return(0,l.useEffect)((function(){n((0,C.yF)())}),[n]),(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)("h1",{children:"Phonebook"}),(0,P.jsx)(F,{}),(0,P.jsx)("h2",{children:"Contacts"}),r&&(0,P.jsx)(_,{children:r}),e.length>0&&(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)(S,{}),(0,P.jsx)(T,{})]}),!t&&0===e.length&&(0,P.jsx)("p",{children:"There is no contacts"}),(0,P.jsx)(K,{isLoading:t})]})}}}]);
//# sourceMappingURL=36.9160eae8.chunk.js.map