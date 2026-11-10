import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t}from"./iframe-DyDTyzGL.js";import{a as n,i as r,n as i,o as a,s as o,t as s}from"./ShoutParts-B6YvuB6D.js";var c,l,u,d,f,p,m,h,g,_,v;function y(){return(y=e((()=>{o(),c=t(),l={title:`Shout outs`},u={id:`s1`,href:`#`,message:`Hey, has anyone got a mitre saw I can borrow this weekend?`,who:`You asked`,when:`20 Oct 2026, 10:30`,status:`2 friends replied`,unread:1,isNew:!1,closed:!1},d={render:()=>(0,c.jsx)(n,{q:`mitre saw`,nothingFound:!0})},f={name:`Prompt: all on loan`,render:()=>(0,c.jsx)(n,{q:`ladder`,nothingFound:!1})},p={render:()=>(0,c.jsx)(a,{message:`Hey, has anyone got a mitre saw I can borrow this weekend?`,who:`Ben asked`,when:`20 Oct 2026, 10:30`})},m={name:`Quote: closed`,render:()=>(0,c.jsx)(a,{message:`Anyone got a wallpaper steamer?`,who:`You asked`,when:`2 Oct 2026, 18:02`,closed:!0})},h={render:()=>(0,c.jsxs)(`ul`,{className:`flex flex-col gap-2`,children:[(0,c.jsx)(i,{row:u}),(0,c.jsx)(i,{row:{...u,id:`s2`,who:`Olive asked`,message:`Does anyone have a pressure washer?`,status:`Reply if you can help`,unread:0,isNew:!0}}),(0,c.jsx)(i,{row:{...u,id:`s3`,message:`Anyone got a tile cutter?`,status:`No replies`,unread:0,closed:!0}})]})},g={render:()=>(0,c.jsxs)(`ul`,{className:`flex flex-col gap-2`,children:[(0,c.jsx)(s,{row:{href:`#`,name:`Olive Owner`,preview:`I've got one you can borrow. Pop round Saturday.`,when:`20 Oct, 10:42`,count:`1 message`,unread:1}}),(0,c.jsx)(s,{row:{href:`#cara`,name:`Cara Friend`,preview:`You: Thanks anyway!`,when:`20 Oct, 11:05`,count:`3 messages`,unread:0}})]})},_={render:()=>(0,c.jsx)(r,{label:`Messages with Olive`,messages:[{id:`1`,mine:!1,author:`Olive`,body:`I've got one you can borrow.`,when:`20 Oct, 10:42`},{id:`2`,mine:!0,author:`You`,body:`Brilliant! Could I collect Saturday morning?`,when:`20 Oct, 10:50`},{id:`3`,mine:!1,author:`Olive`,body:`Any time after 9. The blade's new, so go easy.`,when:`20 Oct, 11:01`}]})},v=[`Prompt`,`PromptAllOut`,`Quote`,`QuoteClosed`,`MailboxRows`,`ConversationRows`,`Messages`],d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => <ShoutOutPrompt q="mitre saw" nothingFound />
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  name: "Prompt: all on loan",
  render: () => <ShoutOutPrompt q="ladder" nothingFound={false} />
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => <ShoutQuote message="Hey, has anyone got a mitre saw I can borrow this weekend?" who="Ben asked" when="20 Oct 2026, 10:30" />
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  name: "Quote: closed",
  render: () => <ShoutQuote message="Anyone got a wallpaper steamer?" who="You asked" when="2 Oct 2026, 18:02" closed />
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => <ul className="flex flex-col gap-2">
      <MailboxRow row={row} />
      <MailboxRow row={{
      ...row,
      id: "s2",
      who: "Olive asked",
      message: "Does anyone have a pressure washer?",
      status: "Reply if you can help",
      unread: 0,
      isNew: true
    }} />
      <MailboxRow row={{
      ...row,
      id: "s3",
      message: "Anyone got a tile cutter?",
      status: "No replies",
      unread: 0,
      closed: true
    }} />
    </ul>
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => <ul className="flex flex-col gap-2">
      <ConversationRow row={{
      href: "#",
      name: "Olive Owner",
      preview: "I've got one you can borrow. Pop round Saturday.",
      when: "20 Oct, 10:42",
      count: "1 message",
      unread: 1
    }} />
      <ConversationRow row={{
      href: "#cara",
      name: "Cara Friend",
      preview: "You: Thanks anyway!",
      when: "20 Oct, 11:05",
      count: "3 messages",
      unread: 0
    }} />
    </ul>
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: () => <MessageList label="Messages with Olive" messages={[{
    id: "1",
    mine: false,
    author: "Olive",
    body: "I've got one you can borrow.",
    when: "20 Oct, 10:42"
  }, {
    id: "2",
    mine: true,
    author: "You",
    body: "Brilliant! Could I collect Saturday morning?",
    when: "20 Oct, 10:50"
  }, {
    id: "3",
    mine: false,
    author: "Olive",
    body: "Any time after 9. The blade's new, so go easy.",
    when: "20 Oct, 11:01"
  }]} />
}`,..._.parameters?.docs?.source}}}})))()}y();export{g as ConversationRows,h as MailboxRows,_ as Messages,d as Prompt,f as PromptAllOut,p as Quote,m as QuoteClosed,v as __namedExportsOrder,l as default};