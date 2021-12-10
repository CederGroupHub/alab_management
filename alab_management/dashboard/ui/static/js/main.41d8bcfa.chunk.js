(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{137:function(e,n,t){"use strict";t.r(n);var a,c,s,i=t(0),r=t.n(i),l=t(25),j=t.n(l),d=t(15),o=t(13),b=t(40),x=t(18),p=t(41),O=t(189),h=t(99),u=t.n(h),m=t(100),g=t.n(m),v=t(184),f=t(185),y=t(177),k=t(175),N=t(178),w=t(174),S=t(188),C=t(179),I=t(17),E=t(97),R=t.n(E),T=t(96),_=t.n(T),A=t(32),z=t(1),D=["Heating","Moving","Weighting"],H={Weighting:{samples:["sample_1"],args:["Chemical Name","Amount"]},Heating:{samples:["sample_1","sample_2","sample_3","sample_4"],args:["setpoints"]},Moving:{samples:["sample"],args:["dest"]}},L=Object(I.a)(v.a)(a||(a=Object(d.a)(["\n    width: 256px;\n"]))),M=I.a.div(c||(c=Object(d.a)(["\n    padding: 0 12px 0 4px;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    background-color: ",";\n"])),A.a[50]),P=I.a.div(s||(s=Object(d.a)(["\n    padding: 4px 16px 8px 16px;\n    display: flex;\n    flex-direction: column\n"])));var F,W,B=function(e){var n=e.data,t=Object(i.useState)(""),a=Object(o.a)(t,2),c=a[0],s=a[1],r=Object(i.useState)(!1),l=Object(o.a)(r,2),j=l[0],d=l[1],b=Object(i.useState)({}),x=Object(o.a)(b,2),O=x[0],h=x[1],u=n.sampleNames,m=function(e){h((function(n){var t=e.target.value.split("."),a=Object(o.a)(t,2),c=a[0],s=a[1];return n[c]=s,n}))};return Object(z.jsxs)(z.Fragment,{children:[Object(z.jsx)(p.a,{type:"target",position:"left",style:{borderRadius:"0"}}),Object(z.jsx)(p.a,{type:"source",position:"right",style:{borderRadius:"10px"}}),Object(z.jsxs)(L,{children:[Object(z.jsxs)(M,{children:[Object(z.jsx)(f.a,{onClick:function(){d(!j)},children:j?Object(z.jsx)(_.a,{}):Object(z.jsx)(R.a,{})}),Object(z.jsx)(y.a,{id:"demo-simple-select-label",children:Object(z.jsx)("h4",{children:"Task: "})}),Object(z.jsx)(k.a,{labelId:"demo-simple-select-label",id:"demo-simple-select",label:"Task",variant:"standard",onChange:function(e){if(s(e.target.value),D.includes(e.target.value)){for(var n={},t=0;t<H[e.target.value].samples.length;t++)n[H[e.target.value].samples[t]]="";h(n)}else h({})},value:c,style:{marginLeft:"16px",flex:"1 0 0"},children:D.map((function(e){return Object(z.jsx)(N.a,{value:e,children:e},e)}))})]}),c&&!j&&Object(z.jsx)(w.a,{}),c&&!j&&Object(z.jsxs)(z.Fragment,{children:[Object(z.jsx)(P,{children:H[c].samples.map((function(e){return Object(z.jsxs)(S.a,{style:{margin:"8px 0"},children:[Object(z.jsx)(y.a,{id:e,children:e}),Object(z.jsx)(k.a,{labelId:e,id:"".concat(e,"-select"),label:e,size:"small",variant:"standard",onChange:m,value:O[e]?"".concat(e,".").concat(O[e]):O[e],style:{flex:"1 0 0",width:"200px"},children:u.map((function(n){return Object(z.jsx)(N.a,{value:"".concat(e,".").concat(n),children:n},"".concat(e,".").concat(n))}))})]},"".concat(e,"-form"))}))}),Object(z.jsx)(w.a,{}),Object(z.jsx)(P,{children:H[c].args.map((function(e){return Object(z.jsx)(C.a,{id:"outlined-required",variant:"standard",label:e},e)}))})]})]})]})},J=t(82),q=t(95),U=I.a.div(F||(F=Object(d.a)(["\n    height: calc(100vh - 60px - 36px - 32px - 1.2px);\n"]))),V=Object(I.a)(O.a)(W||(W=Object(d.a)(["\n  border-radius: 14px !important;\n"]))),G={task:B};var K,Q=function(e){var n=e.sampleNames,t=Object(i.useState)([{id:Object(J.a)(32),position:{x:50,y:100},type:"task",data:{sampleNames:n}}]),a=Object(o.a)(t,2),c=a[0],s=a[1],r=Object(i.useRef)(50),l=Object(i.useCallback)((function(){r.current+=280,s((function(e){return[].concat(Object(x.a)(e),[{id:Object(J.a)(32),position:{x:r.current,y:100},type:"task",data:{sampleNames:n}}])}))}),[n]);return Object(i.useEffect)((function(){s((function(e){return e.map((function(e){return e.data=Object(b.a)(Object(b.a)({},e.data),{},{sampleNames:n}),console.log(e),e}))}))}),[n]),Object(z.jsxs)("div",{children:[Object(z.jsxs)("div",{style:{padding:"16px",backgroundColor:q.a[100],borderBottom:"1.2px solid ".concat(q.a[300])},children:[Object(z.jsx)(V,{color:"primary",style:{margin:"0 8px"},variant:"contained",onClick:l,startIcon:Object(z.jsx)(u.a,{}),children:"Add Node"}),Object(z.jsx)(V,{color:"primary",style:{margin:"0 8px"},variant:"contained",startIcon:Object(z.jsx)(g.a,{}),children:"Submit"})]}),Object(z.jsx)(U,{children:Object(z.jsx)(p.c,{elements:c,onConnect:function(e){return s((function(n){return Object(p.b)(Object(b.a)({animated:!0},e),n)}))},onElementsRemove:function(e){return s((function(n){return Object(p.d)(e,n)}))},nodeTypes:G})})]})},X=t(182),Y=I.a.div(K||(K=Object(d.a)(["\n    display: flex;\n    align-items: baseline;\n    margin-bottom: 16px;\n"])));var Z=function(e){var n=e.style,t=e.sampleNames,a=e.setSampleNames,c=Object(i.useRef)(""),s=function(e){return function(){a((function(n){return n.filter((function(n){return n!==e}))}))}};return Object(z.jsxs)("div",{style:Object(b.a)(Object(b.a)({},n),{},{margin:"16px"}),children:[Object(z.jsxs)(Y,{children:[Object(z.jsx)(C.a,{id:"add_sample_input",size:"small",inputRef:c,style:{width:"50%"},label:"Sample Name",variant:"standard"}),Object(z.jsx)(O.a,{variant:"outlined",onClick:function(){a((function(e){return e.includes(c.current.value)?t:[].concat(Object(x.a)(t),[c.current.value])}))},style:{marginLeft:"16px"},children:"Add sample"})]}),Object(z.jsx)("h4",{children:"Samples:"}),t.map((function(e){return Object(z.jsx)(X.a,{style:{margin:"0 4px"},label:e,onDelete:s(e)},e)}))]})};var $,ee,ne,te=function(e){var n=e.sampleNames,t=e.setSampleNames;return Object(z.jsx)(Z,{sampleNames:n,setSampleNames:t})},ae=I.a.div($||($=Object(d.a)(["\n    display: flex;\n    height: calc(100vb-60px);\n"]))),ce=I.a.div(ee||(ee=Object(d.a)(["\n    background-color: ",";\n    width: 24%;\n    min-width: 320px;\n    max-width: 400px;\n    border-right: 1.2px solid ",";\n"])),q.a[100],q.a[300]),se=I.a.div(ne||(ne=Object(d.a)(["\n    flex: 1 0 0\n"])));var ie,re=function(){var e=Object(i.useState)([]),n=Object(o.a)(e,2),t=n[0],a=n[1];return Object(z.jsxs)(ae,{children:[Object(z.jsx)(ce,{children:Object(z.jsx)(te,{sampleNames:t,setSampleNames:a})}),Object(z.jsx)(se,{children:Object(z.jsx)(Q,{sampleNames:t})})]})},le=t(191),je=t(195),de=t(194),oe=t(190),be=t(192),xe=t(193),pe=t(183),Oe=I.a.div(ie||(ie=Object(d.a)(["\n  margin: 12px 16px;\n\n  .status {\n    font-family: Source Code Pro;\n    color: black;\n  }\n\n  .status-occupied {\n    color: red;\n  }\n\n  .status-idle {\n    color: green;\n  }\n  \n  .task-id {\n    font-family: Source Code Pro;\n  }\n\n  h3 {\n    padding: 4px 8px;\n  }\n"])));var he,ue=function(e){var n=e.devices;return Object(z.jsx)(oe.a,{style:{height:"100%"},component:v.a,children:Object(z.jsxs)(Oe,{children:[Object(z.jsx)(pe.a,{variant:"h5",children:"Device View"}),Object(z.jsxs)(le.a,{stickyHeader:!0,"aria-label":"device table",children:[Object(z.jsx)(be.a,{children:Object(z.jsxs)(xe.a,{children:[Object(z.jsx)(de.a,{children:Object(z.jsx)("b",{children:"Device Name"})}),Object(z.jsx)(de.a,{align:"center",children:Object(z.jsx)("b",{children:"Type"})}),Object(z.jsx)(de.a,{align:"center",children:Object(z.jsx)("b",{children:"Status"})}),Object(z.jsx)(de.a,{align:"center",children:Object(z.jsx)("b",{children:"Task"})})]})}),Object(z.jsx)(je.a,{children:n.map((function(e){return Object(z.jsxs)(xe.a,{sx:{"&:last-child td, &:last-child th":{border:0}},children:[Object(z.jsx)(de.a,{component:"th",scope:"row",children:e.name}),Object(z.jsx)(de.a,{align:"center",children:e.type}),Object(z.jsx)(de.a,{align:"center",children:Object(z.jsxs)("span",{className:"status status-".concat(e.status.toLowerCase()),children:["OCCUPIED"===e.status||"IDLE"===e.status?"\u2b24":""," ",e.status]})}),Object(z.jsx)(de.a,{align:"center",children:Object(z.jsx)("span",{className:"task-id",children:e.task})})]},e.name)}))})]})]})})},me=I.a.div(he||(he=Object(d.a)(["\n  margin: 12px 16px;\n\n  .status,\n  .task-id,\n  .task-type {\n    font-family: Source Code Pro;\n    color: black;\n  }\n\n  .task-id {\n    font-size: 80%;\n  }\n\n  .status-waiting {\n    color: blue;\n  }\n\n  .status-running {\n    color: red;\n  }\n\n  .status-error {\n    color: red;\n    font-weight: bold;\n  }\n\n  .status-ready {\n    color: green;\n  }\n\n  h3 {\n    padding: 4px 8px;\n  }\n"])));var ge,ve,fe,ye=function(e){var n=e.experiments;return console.log(n),Object(z.jsx)(oe.a,{style:{height:"100%"},component:v.a,children:Object(z.jsxs)(me,{children:[Object(z.jsx)(pe.a,{variant:"h5",children:"Running Experiments"}),Object(z.jsxs)(le.a,{stickyHeader:!0,"aria-label":"task table",children:[Object(z.jsx)(be.a,{children:Object(z.jsxs)(xe.a,{children:[Object(z.jsx)(de.a,{align:"center",children:Object(z.jsx)("b",{children:"Exp Name"})}),Object(z.jsx)(de.a,{align:"center",children:Object(z.jsx)("b",{children:"Task Id"})}),Object(z.jsx)(de.a,{align:"center",children:Object(z.jsx)("b",{children:"Type"})}),Object(z.jsx)(de.a,{align:"center",children:Object(z.jsx)("b",{children:"Status"})})]})}),Object(z.jsx)(je.a,{children:n.map((function(e){var n;return null===(n=e.tasks)||void 0===n?void 0:n.map((function(n,t){return Object(z.jsxs)(xe.a,{children:[0===t?Object(z.jsx)(de.a,{align:"center",rowSpan:e.tasks.length,component:"th",scope:"row",children:Object(z.jsx)("span",{className:"exp-name",children:e.name})}):Object(z.jsx)(z.Fragment,{}),Object(z.jsx)(de.a,{align:"center",children:Object(z.jsx)("span",{className:"task-id",children:n.id})}),Object(z.jsx)(de.a,{align:"center",children:Object(z.jsx)("span",{className:"task-type",children:n.type})}),Object(z.jsx)(de.a,{align:"center",children:Object(z.jsx)("span",{className:"status status-".concat(n.status.toLowerCase()),children:n.status})})]},n.id)}))}))})]})]})})},ke=t(101),Ne=t.n(ke),we=I.a.div(ge||(ge=Object(d.a)(["\n  margin: 12px 8px;\n  height: calc(100vh - 60px - 24px);\n  display: flex;\n"]))),Se=I.a.div(ve||(ve=Object(d.a)(["\n  height: 100%;\n  width: calc(50vw - 20px);\n  margin-right: 12px;\n"]))),Ce=I.a.div(fe||(fe=Object(d.a)(["\n  height: 100%;\n  width: calc(50vw - 8px);\n"])));var Ie,Ee,Re=function(){var e=Object(i.useState)({devices:[],experiments:[]}),n=Object(o.a)(e,2),t=n[0],a=n[1];return Ne()((function(){fetch("/api/status").then((function(e){return e.json()})).then((function(e){a(e)}))}),1e3),Object(z.jsxs)(we,{children:[Object(z.jsx)(Se,{children:Object(z.jsx)(ue,{devices:t.devices})}),Object(z.jsx)(Ce,{children:Object(z.jsx)(ye,{experiments:t.experiments})})]})},Te=t(196),_e=t(56),Ae=t(14),ze=Object(I.a)(Te.a)(Ie||(Ie=Object(d.a)(["\n  height: 60px !important;\n  box-shadow: 0px 2px 4px -1px rgb(0 0 0 / 14%),\n    0px 4px 5px 0px rgb(0 0 0 / 10%), 0px 1px 5px 0px rgb(0 0 0 / 6%) !important;\n  display: flex;\n  flex-direction: row !important;\n  align-items: center;\n\n  a {\n    color: inherit;\n    text-decoration: none;\n  }\n\n  .nav-link {\n    height: 100%;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    padding: 0 24px;\n    box-sizing: border-box;\n    filter: brightness(90%);\n    border-bottom: 4px solid transparent;\n  }\n\n  .nav-link: hover {\n    filter: brightness(85%);\n  }\n\n  .nav-link: active {\n    filter: brightness(75%);\n  }\n\n  .link-active {\n    text-shadow: .25px 0px .5px,\n    -.25px 0px .5px;  \n    border-bottom: 4px solid;\n    filter: brightness(100%) !important;\n  }\n"]))),De=I.a.nav(Ee||(Ee=Object(d.a)(["\n  margin: 0 12px;\n  display: flex;\n  height: 100%;\n  align-items: center\n"])));var He=function(){return Object(z.jsxs)(_e.a,{children:[Object(z.jsxs)(ze,{position:"relative",children:[Object(z.jsx)("div",{style:{display:"flex",alignItems:"center",fontWeight:500,fontSize:"1.3em",margin:"0 16px"},children:Object(z.jsx)(_e.b,{to:"/",children:"Alab Management"})}),Object(z.jsxs)(De,{children:[Object(z.jsx)(_e.c,{to:"/",className:function(e){return e.isActive?"link-active nav-link":"nav-link"},children:"Home"}),Object(z.jsx)(_e.c,{to:"/experiment",className:function(e){return e.isActive?"link-active nav-link":"nav-link"},children:"New Experiment"})]})]}),Object(z.jsxs)(Ae.c,{children:[Object(z.jsx)(Ae.a,{path:"/",element:Object(z.jsx)(Re,{})}),Object(z.jsx)(Ae.a,{path:"/experiment",element:Object(z.jsx)(re,{})})]})]})};t(132),t(133),t(134),t(135),t(136);j.a.render(Object(z.jsx)(r.a.StrictMode,{children:Object(z.jsx)(He,{})}),document.getElementById("root"))}},[[137,1,2]]]);
//# sourceMappingURL=main.41d8bcfa.chunk.js.map