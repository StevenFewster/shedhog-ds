import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t}from"./iframe-BWqv3mhK.js";import{n,t as r}from"./Input-JIedwGLc.js";import{n as i,t as a}from"./Select-CKkanyyT.js";import{n as o,t as s}from"./Textarea-B0hVHnZ5.js";import{n as c,t as l}from"./Toggle-BYgmTZVZ.js";var u,d,f,p,m,h,g,_,v,y,b;function x(){return(x=e((()=>{n(),i(),o(),c(),u=t(),d={title:`UI/Form controls`},f=[{value:`none`,label:`None (manual)`},{value:`corded`,label:`Corded`},{value:`battery`,label:`Battery`},{value:`petrol`,label:`Petrol`}],p={name:`Input`,render:()=>(0,u.jsx)(r,{label:`Tool name`,placeholder:`e.g. Mitre saw`})},m={name:`Input with hint`,render:()=>(0,u.jsx)(r,{label:`Battery platform`,hint:`So friends know if their batteries fit`,placeholder:`e.g. DeWalt 18V XR`})},h={name:`Input with error`,render:()=>(0,u.jsx)(r,{label:`Email`,type:`email`,defaultValue:`sam@`,error:`Enter a full email address, like sam@example.com`})},g={name:`Textarea (request note)`,render:()=>(0,u.jsx)(s,{label:`Note to the owner`,placeholder:`When do you need it and for how long? e.g. Saturday morning, about 3 days, for putting up a fence`,hint:`They'll see this with your request`})},_={name:`Select`,render:()=>(0,u.jsx)(a,{label:`Power source`,options:f,placeholder:`Choose one`})},v={render:()=>(0,u.jsxs)(`div`,{className:`flex flex-col gap-2`,children:[(0,u.jsx)(l,{label:`Visible to friends`,description:`Hidden tools never show in search`,defaultChecked:!0}),(0,u.jsx)(l,{label:`Available to borrow`}),(0,u.jsx)(l,{label:`Battery included`,disabled:!0})]})},y={name:`Together: tool form`,render:()=>(0,u.jsxs)(`form`,{className:`flex flex-col gap-5`,children:[(0,u.jsx)(r,{label:`Tool name`,defaultValue:`Combi drill`}),(0,u.jsx)(a,{label:`Power source`,options:f,defaultValue:`battery`}),(0,u.jsx)(r,{label:`Battery platform`,defaultValue:`DeWalt 18V XR`}),(0,u.jsx)(s,{label:`Description`,placeholder:`Anything a borrower should know`,rows:3}),(0,u.jsx)(l,{label:`Visible to friends`,defaultChecked:!0})]})},b=[`InputDefault`,`InputWithHint`,`InputWithError`,`TextareaNote`,`SelectDefault`,`Toggles`,`ToolForm`],p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  name: "Input",
  render: () => <Input label="Tool name" placeholder="e.g. Mitre saw" />
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  name: "Input with hint",
  render: () => <Input label="Battery platform" hint="So friends know if their batteries fit" placeholder="e.g. DeWalt 18V XR" />
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  name: "Input with error",
  render: () => <Input label="Email" type="email" defaultValue="sam@" error="Enter a full email address, like sam@example.com" />
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  name: "Textarea (request note)",
  render: () => <Textarea label="Note to the owner" placeholder="When do you need it and for how long? e.g. Saturday morning, about 3 days, for putting up a fence" hint="They'll see this with your request" />
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  name: "Select",
  render: () => <Select label="Power source" options={powerSources} placeholder="Choose one" />
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-2">
      <Toggle label="Visible to friends" description="Hidden tools never show in search" defaultChecked />
      <Toggle label="Available to borrow" />
      <Toggle label="Battery included" disabled />
    </div>
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  name: "Together: tool form",
  render: () => <form className="flex flex-col gap-5">
      <Input label="Tool name" defaultValue="Combi drill" />
      <Select label="Power source" options={powerSources} defaultValue="battery" />
      <Input label="Battery platform" defaultValue="DeWalt 18V XR" />
      <Textarea label="Description" placeholder="Anything a borrower should know" rows={3} />
      <Toggle label="Visible to friends" defaultChecked />
    </form>
}`,...y.parameters?.docs?.source}}}})))()}x();export{p as InputDefault,h as InputWithError,m as InputWithHint,_ as SelectDefault,g as TextareaNote,v as Toggles,y as ToolForm,b as __namedExportsOrder,d as default};