import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t}from"./iframe-BWqv3mhK.js";import{n,t as r}from"./Avatar-ldyrZlTn.js";import{n as i,t as a}from"./Badge-3SgpYowN.js";import{n as o,r as s}from"./Button-DjKdLsXf.js";import{n as c,t as l}from"./Card-C5NK3tgu.js";import{n as u,t as d}from"./EmptyState-CWCqC2OR.js";var f,p,m,h,g,_,v,y;function b(){return(b=e((()=>{n(),i(),s(),c(),u(),f=t(),p={title:`UI/Surfaces`},m={render:()=>(0,f.jsxs)(`div`,{className:`flex flex-col gap-4`,children:[(0,f.jsxs)(l,{children:[(0,f.jsx)(`h3`,{className:`text-2xl`,children:`Raised card`}),(0,f.jsx)(`p`,{className:`text-muted`,children:`Sits on the foam. Use for grouped content.`})]}),(0,f.jsxs)(l,{tone:`pocket`,children:[(0,f.jsx)(`h3`,{className:`text-2xl`,children:`Pocket`}),(0,f.jsx)(`p`,{className:`text-muted`,children:`Cut into the foam. Use for a tool's slot.`})]})]})},h={render:()=>(0,f.jsxs)(`div`,{className:`flex flex-wrap gap-2`,children:[(0,f.jsx)(a,{tone:`available`,children:`Available`}),(0,f.jsx)(a,{tone:`on-loan`,children:`On loan`}),(0,f.jsx)(a,{tone:`overdue`,children:`2 days overdue`}),(0,f.jsx)(a,{tone:`hidden`,children:`Hidden`}),(0,f.jsx)(a,{tone:`custom`,children:`Custom`}),(0,f.jsx)(a,{children:`Garden`})]})},g={render:()=>(0,f.jsxs)(`div`,{className:`flex items-center gap-3`,children:[(0,f.jsx)(r,{name:`Sam O'Neill`,size:`sm`}),(0,f.jsx)(r,{name:`Priya Shah`}),(0,f.jsx)(r,{name:`Jo`,size:`lg`})]})},_={name:`Empty state`,render:()=>(0,f.jsx)(d,{title:`Nothing in here yet`,body:`Add the tools you're happy to lend. Friends will see them when they search.`,action:(0,f.jsx)(`a`,{href:`/shed/new`,className:o(),children:`Add a tool`})})},v={name:`Together: tool slot`,render:()=>(0,f.jsxs)(l,{tone:`pocket`,as:`article`,className:`flex items-center gap-4`,children:[(0,f.jsx)(`div`,{className:`size-16 shrink-0 rounded-latch bg-foam`,"aria-hidden":`true`}),(0,f.jsxs)(`div`,{className:`flex min-w-0 flex-1 flex-col gap-1`,children:[(0,f.jsx)(`h3`,{className:`truncate text-2xl`,children:`Combi drill`}),(0,f.jsx)(`p`,{className:`truncate text-sm text-muted`,children:`DeWalt DCD796, 18V XR`})]}),(0,f.jsx)(a,{tone:`on-loan`,children:`On loan`})]})},y=[`Cards`,`Badges`,`Avatars`,`Empty`,`ToolSlot`],m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-4">
      <Card>
        <h3 className="text-2xl">Raised card</h3>
        <p className="text-muted">Sits on the foam. Use for grouped content.</p>
      </Card>
      <Card tone="pocket">
        <h3 className="text-2xl">Pocket</h3>
        <p className="text-muted">Cut into the foam. Use for a tool's slot.</p>
      </Card>
    </div>
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-wrap gap-2">
      <Badge tone="available">Available</Badge>
      <Badge tone="on-loan">On loan</Badge>
      <Badge tone="overdue">2 days overdue</Badge>
      <Badge tone="hidden">Hidden</Badge>
      <Badge tone="custom">Custom</Badge>
      <Badge>Garden</Badge>
    </div>
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex items-center gap-3">
      <Avatar name="Sam O'Neill" size="sm" />
      <Avatar name="Priya Shah" />
      <Avatar name="Jo" size="lg" />
    </div>
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  name: "Empty state",
  render: () => <EmptyState title="Nothing in here yet" body="Add the tools you're happy to lend. Friends will see them when they search." action={<a href="/shed/new" className={buttonClasses()}>
          Add a tool
        </a>} />
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  name: "Together: tool slot",
  render: () => <Card tone="pocket" as="article" className="flex items-center gap-4">
      <div className="size-16 shrink-0 rounded-latch bg-foam" aria-hidden="true" />
      <div className="flex min-w-0 flex-1 flex-col gap-1">
        <h3 className="truncate text-2xl">Combi drill</h3>
        <p className="truncate text-sm text-muted">DeWalt DCD796, 18V XR</p>
      </div>
      <Badge tone="on-loan">On loan</Badge>
    </Card>
}`,...v.parameters?.docs?.source}}}})))()}b();export{g as Avatars,h as Badges,m as Cards,_ as Empty,v as ToolSlot,y as __namedExportsOrder,p as default};