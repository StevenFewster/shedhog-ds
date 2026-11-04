import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t}from"./iframe-BWqv3mhK.js";import{m as n,p as r}from"./AutoSubmitSelect-Dr4OMnV7.js";import{a as i,i as a,o,r as s,t as c}from"./BorrowParts-CfrJGoVF.js";var l,u,d,f,p,m,h,g;function _(){return(_=e((()=>{n(),o(),l=t(),u={title:`Borrowing`},d=e=>({id:`t1`,href:`#`,name:`Mitre saw`,subtitle:`Makita LS1019`,ownerName:`Olive`,status:`available`,coverUrl:r.saw,terms:[`7 days`,`Borrower collects`,`Split repair costs`],mine:null,canRequest:!0,...e}),f={name:`Friend tool cards`,render:()=>(0,l.jsxs)(`ul`,{className:`flex flex-col gap-3`,children:[(0,l.jsx)(c,{card:d({}),back:`#`}),(0,l.jsx)(c,{card:d({id:`2`,name:`Combi drill`,coverUrl:r.drill,mine:`listed`}),back:`#`}),(0,l.jsx)(c,{card:d({id:`3`,name:`Hedge trimmer`,coverUrl:r.trimmer,mine:`requested`,canRequest:!1}),back:`#`}),(0,l.jsx)(c,{card:d({id:`4`,name:`Pressure washer`,coverUrl:null,status:`on-loan`,canRequest:!1}),back:`#`}),(0,l.jsx)(c,{card:d({id:`5`,name:`Tile cutter`,coverUrl:null,status:`unavailable`,canRequest:!1}),back:`#`})]})},p={render:()=>(0,l.jsx)(i,{state:{q:`saw`,available:!0},categories:[{value:`saws`,label:`Saws`}]})},m={name:`Request list bar`,render:()=>(0,l.jsx)(s,{count:3})},h={name:`Request rows`,render:()=>(0,l.jsxs)(`ul`,{className:`flex flex-col gap-3`,children:[(0,l.jsx)(a,{side:`owner`,row:{id:`1`,toolName:`Mitre saw`,person:`Ben`,note:`Saturday morning, about 3 days`,status:`pending`,statusLabel:`Waiting for an answer`,replyNote:null,dueOn:null}}),(0,l.jsx)(a,{side:`borrower`,row:{id:`2`,toolName:`Ladder`,person:`Cara`,note:null,status:`pending`,statusLabel:`Waiting for an answer`,replyNote:null,dueOn:null}}),(0,l.jsx)(a,{side:`borrower`,row:{id:`3`,toolName:`Combi drill`,person:`Olive`,note:null,status:`approved`,statusLabel:`Yes, due back Wed 30 Sep 2026`,replyNote:`Collect after 6`,dueOn:`2026-09-30`}}),(0,l.jsx)(a,{side:`borrower`,row:{id:`4`,toolName:`Tile cutter`,person:`Olive`,note:null,status:`declined`,statusLabel:`No`,replyNote:`Using it myself`,dueOn:null}}),(0,l.jsx)(a,{side:`borrower`,row:{id:`5`,toolName:`Pressure washer`,person:`Olive`,note:null,status:`auto_declined`,statusLabel:`Lent to someone else`,replyNote:null,dueOn:null}})]})},g=[`Cards`,`Filters`,`ListBar`,`Requests`],f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  name: "Friend tool cards",
  render: () => <ul className="flex flex-col gap-3">
      <FriendToolCard card={card({})} back="#" />
      <FriendToolCard card={card({
      id: "2",
      name: "Combi drill",
      coverUrl: STORY_PHOTOS.drill,
      mine: "listed"
    })} back="#" />
      <FriendToolCard card={card({
      id: "3",
      name: "Hedge trimmer",
      coverUrl: STORY_PHOTOS.trimmer,
      mine: "requested",
      canRequest: false
    })} back="#" />
      <FriendToolCard card={card({
      id: "4",
      name: "Pressure washer",
      coverUrl: null,
      status: "on-loan",
      canRequest: false
    })} back="#" />
      <FriendToolCard card={card({
      id: "5",
      name: "Tile cutter",
      coverUrl: null,
      status: "unavailable",
      canRequest: false
    })} back="#" />
    </ul>
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => <SearchFilters state={{
    q: "saw",
    available: true
  }} categories={[{
    value: "saws",
    label: "Saws"
  }]} />
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  name: "Request list bar",
  render: () => <RequestListBar count={3} />
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  name: "Request rows",
  render: () => <ul className="flex flex-col gap-3">
      <RequestRow side="owner" row={{
      id: "1",
      toolName: "Mitre saw",
      person: "Ben",
      note: "Saturday morning, about 3 days",
      status: "pending",
      statusLabel: "Waiting for an answer",
      replyNote: null,
      dueOn: null
    }} />
      <RequestRow side="borrower" row={{
      id: "2",
      toolName: "Ladder",
      person: "Cara",
      note: null,
      status: "pending",
      statusLabel: "Waiting for an answer",
      replyNote: null,
      dueOn: null
    }} />
      <RequestRow side="borrower" row={{
      id: "3",
      toolName: "Combi drill",
      person: "Olive",
      note: null,
      status: "approved",
      statusLabel: "Yes, due back Wed 30 Sep 2026",
      replyNote: "Collect after 6",
      dueOn: "2026-09-30"
    }} />
      <RequestRow side="borrower" row={{
      id: "4",
      toolName: "Tile cutter",
      person: "Olive",
      note: null,
      status: "declined",
      statusLabel: "No",
      replyNote: "Using it myself",
      dueOn: null
    }} />
      <RequestRow side="borrower" row={{
      id: "5",
      toolName: "Pressure washer",
      person: "Olive",
      note: null,
      status: "auto_declined",
      statusLabel: "Lent to someone else",
      replyNote: null,
      dueOn: null
    }} />
    </ul>
}`,...h.parameters?.docs?.source}}}})))()}_();export{f as Cards,p as Filters,m as ListBar,h as Requests,g as __namedExportsOrder,u as default};