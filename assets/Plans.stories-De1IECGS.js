import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t}from"./iframe-BWqv3mhK.js";import{a as n,i as r,o as i,s as a}from"./lendingPlan-BPKgXWgy.js";import{i as o,n as s,r as c,t as l}from"./PlanEditor-D4v7K5_j.js";import{c as u,n as d,o as f}from"./labels-g6D7fJxu.js";import{n as p,t as m}from"./PlanSummary-DMaXHRAr.js";import{n as h,r as g,t as _}from"./PlanTerms-DCMfT80H.js";function v(e,t){return n.filter(t=>t!==`extensionDays`||e.maxExtensions!==0).filter(t=>!(t===`notes`&&!e.notes)).map(n=>({key:n,label:d[n],value:u(n,e[n]),source:i(n,t)}))}function y(){return(y=e((()=>{f(),a()})))()}var b,x,S,C,w,T,E,D,O;function k(){return(k=e((()=>{a(),c(),y(),s(),p(),g(),b=t(),x={title:`Lending terms`},S={...r,durationDays:10,breakagePolicy:`split_cost`,notes:`Please clean off any sawdust`},C={render:()=>(0,b.jsx)(m,{plan:S})},w={name:`Field rows (default / custom)`,render:()=>(0,b.jsxs)(`dl`,{children:[(0,b.jsx)(_,{row:{key:`durationDays`,label:`Loan length`,value:`3 days`,source:`custom`}}),(0,b.jsx)(_,{row:{key:`breakagePolicy`,label:`If it breaks`,value:`Split the repair cost`,source:`default`}})]})},T={name:`Terms list`,render:()=>(0,b.jsx)(h,{rows:v({...S,durationDays:3},{durationDays:3})})},E={name:`Editor: default terms`,render:()=>(0,b.jsx)(l,{action:`#`,mode:`default`,values:o(S),defaults:S,cancelHref:`#`})},D={name:`Editor: one tool`,render:()=>(0,b.jsx)(l,{action:`#`,mode:`tool`,values:{durationDays:`3`,handoverOut:`owner_delivers`},defaults:S,cancelHref:`#`})},O=[`Summary`,`FieldRows`,`Terms`,`EditorDefaults`,`EditorTool`],C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: () => <PlanSummary plan={mine} />
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  name: "Field rows (default / custom)",
  render: () => <dl>
      <PlanFieldRow row={{
      key: "durationDays",
      label: "Loan length",
      value: "3 days",
      source: "custom"
    }} />
      <PlanFieldRow row={{
      key: "breakagePolicy",
      label: "If it breaks",
      value: "Split the repair cost",
      source: "default"
    }} />
    </dl>
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  name: "Terms list",
  render: () => <PlanTerms rows={termRows({
    ...mine,
    durationDays: 3
  }, {
    durationDays: 3
  })} />
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  name: "Editor: default terms",
  render: () => <PlanEditor action="#" mode="default" values={planToFormValues(mine)} defaults={mine} cancelHref="#" />
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  name: "Editor: one tool",
  render: () => <PlanEditor action="#" mode="tool" values={{
    durationDays: "3",
    handoverOut: "owner_delivers"
  }} defaults={mine} cancelHref="#" />
}`,...D.parameters?.docs?.source}}}})))()}k();export{E as EditorDefaults,D as EditorTool,w as FieldRows,C as Summary,T as Terms,O as __namedExportsOrder,x as default};