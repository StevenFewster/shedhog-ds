import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t}from"./iframe-DyDTyzGL.js";import{a as n,i as r,n as i,r as a,t as o}from"./LoanParts-BAlz9q_Z.js";var s,c,l,u,d,f,p,m;function h(){return(h=e((()=>{n(),s=t(),c={title:`Loans`},l=e=>({id:`L1`,href:`#`,toolName:`Mitre saw`,person:`From Olive`,status:`out`,statusLabel:`Out on loan`,due:{label:`Due in 4 days`,tone:`later`,on:`Sun 27 Sep 2026`},attention:null,...e}),u={render:()=>(0,s.jsx)(a,{active:`borrowed`,counts:{borrowed:3,lent:1}})},d={name:`Due tags`,render:()=>(0,s.jsxs)(`div`,{className:`flex flex-col items-start gap-3`,children:[(0,s.jsx)(o,{due:{label:`Due in 4 days`,tone:`later`,on:``}}),(0,s.jsx)(o,{due:{label:`Due tomorrow`,tone:`soon`,on:``}}),(0,s.jsx)(o,{due:{label:`3 days overdue`,tone:`overdue`,on:``}}),(0,s.jsx)(o,{due:{label:`Returned`,tone:`none`,on:``}}),(0,s.jsx)(`div`,{className:`rounded-pocket bg-foam p-4`,children:(0,s.jsx)(o,{due:{label:`Due today`,tone:`soon`,on:``},size:`lg`})})]})},f={render:()=>(0,s.jsxs)(`ul`,{className:`flex flex-col gap-2`,children:[(0,s.jsx)(i,{card:l({due:{label:`2 days overdue`,tone:`overdue`,on:``}})}),(0,s.jsx)(i,{card:l({id:`L2`,toolName:`Combi drill`,person:`With Ben`,due:{label:`Due tomorrow`,tone:`soon`,on:``},attention:`Ben asked for longer`})}),(0,s.jsx)(i,{card:l({id:`L3`,toolName:`Ladder`,status:`approved`,due:{label:`Due Wed 30 Sep 2026`,tone:`later`,on:``},attention:`Waiting to collect`})}),(0,s.jsx)(i,{card:l({id:`L4`,toolName:`Tile cutter`,status:`returned`,due:{label:`Returned`,tone:`none`,on:``}})})]})},p={render:()=>(0,s.jsx)(r,{items:[{id:`1`,label:`You asked to borrow it`,when:`23 Sep 2026, 10:00`,note:`Saturday morning, about 3 days`},{id:`2`,label:`Olive said yes`,when:`23 Sep 2026, 12:14`,note:`Collect any evening after 6`},{id:`3`,label:`You marked it handed over`,when:`26 Sep 2026, 18:30`,note:null},{id:`4`,label:`You asked for longer`,when:`29 Sep 2026, 09:02`,note:`The rain held us up`}]})},m=[`Tabs`,`DueTags`,`Cards`,`History`],u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => <LoanTabs active="borrowed" counts={{
    borrowed: 3,
    lent: 1
  }} />
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  name: "Due tags",
  render: () => <div className="flex flex-col items-start gap-3">
      <DueTag due={{
      label: "Due in 4 days",
      tone: "later",
      on: ""
    }} />
      <DueTag due={{
      label: "Due tomorrow",
      tone: "soon",
      on: ""
    }} />
      <DueTag due={{
      label: "3 days overdue",
      tone: "overdue",
      on: ""
    }} />
      <DueTag due={{
      label: "Returned",
      tone: "none",
      on: ""
    }} />
      <div className="rounded-pocket bg-foam p-4">
        <DueTag due={{
        label: "Due today",
        tone: "soon",
        on: ""
      }} size="lg" />
      </div>
    </div>
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => <ul className="flex flex-col gap-2">
      <LoanCard card={card({
      due: {
        label: "2 days overdue",
        tone: "overdue",
        on: ""
      }
    })} />
      <LoanCard card={card({
      id: "L2",
      toolName: "Combi drill",
      person: "With Ben",
      due: {
        label: "Due tomorrow",
        tone: "soon",
        on: ""
      },
      attention: "Ben asked for longer"
    })} />
      <LoanCard card={card({
      id: "L3",
      toolName: "Ladder",
      status: "approved",
      due: {
        label: "Due Wed 30 Sep 2026",
        tone: "later",
        on: ""
      },
      attention: "Waiting to collect"
    })} />
      <LoanCard card={card({
      id: "L4",
      toolName: "Tile cutter",
      status: "returned",
      due: {
        label: "Returned",
        tone: "none",
        on: ""
      }
    })} />
    </ul>
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => <Timeline items={[{
    id: "1",
    label: "You asked to borrow it",
    when: "23 Sep 2026, 10:00",
    note: "Saturday morning, about 3 days"
  }, {
    id: "2",
    label: "Olive said yes",
    when: "23 Sep 2026, 12:14",
    note: "Collect any evening after 6"
  }, {
    id: "3",
    label: "You marked it handed over",
    when: "26 Sep 2026, 18:30",
    note: null
  }, {
    id: "4",
    label: "You asked for longer",
    when: "29 Sep 2026, 09:02",
    note: "The rain held us up"
  }]} />
}`,...p.parameters?.docs?.source}}}})))()}h();export{f as Cards,d as DueTags,p as History,u as Tabs,m as __namedExportsOrder,c as default};