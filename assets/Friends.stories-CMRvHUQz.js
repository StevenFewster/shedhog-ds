import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t}from"./iframe-DyDTyzGL.js";import{a as n,i as r,n as i,r as a,t as o}from"./FriendRows-lf8yh54p.js";var s,c,l,u,d,f,p,m,h;function g(){return(g=e((()=>{n(),s=t(),c={title:`Friends`},l=new Date(`2026-09-01`),u={name:`Invite form`,render:()=>(0,s.jsx)(a,{})},d={name:`Invite form: error`,render:()=>(0,s.jsx)(a,{values:{email:`sam@`},error:`Enter a full email address, like sam@example.com`})},f={name:`Friend rows`,render:()=>(0,s.jsxs)(`ul`,{className:`flex flex-col gap-2`,children:[(0,s.jsx)(o,{id:`1`,name:`Priya Shah`,email:`priya@example.com`,since:l,timezone:`Europe/London`}),(0,s.jsx)(o,{id:`2`,name:`Sam O'Neill`,email:`sam.oneill@example.com`,since:l,timezone:`Europe/London`})]})},p={name:`Incoming requests`,render:()=>(0,s.jsxs)(`ul`,{className:`flex flex-col gap-3`,children:[(0,s.jsx)(i,{name:`Priya Shah`,message:`I've got a tile cutter if you need one!`,actionBase:`#`}),(0,s.jsx)(i,{name:`Jo`,message:null,actionBase:`#`})]})},m={name:`Waiting for a reply`,render:()=>(0,s.jsxs)(`ul`,{className:`flex flex-col gap-2`,children:[(0,s.jsx)(r,{label:`Dee Walker`,detail:`Friend request sent 20 Sep 2026`,actions:[{action:`#`,label:`Cancel request`,ariaLabel:`Cancel`}]}),(0,s.jsx)(r,{label:`new.neighbour@example.com`,detail:`Invited 2 Sep 2026`,expired:!0,actions:[{action:`#`,label:`Resend`,ariaLabel:`Resend`},{action:`#`,label:`Cancel invite`,ariaLabel:`Cancel invite`}]})]})},h=[`Invite`,`InviteError`,`Friends`,`Incoming`,`Pending`],u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  name: "Invite form",
  render: () => <InviteForm />
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  name: "Invite form: error",
  render: () => <InviteForm values={{
    email: "sam@"
  }} error="Enter a full email address, like sam@example.com" />
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  name: "Friend rows",
  render: () => <ul className="flex flex-col gap-2">
      <FriendRow id="1" name="Priya Shah" email="priya@example.com" since={since} timezone="Europe/London" />
      <FriendRow id="2" name="Sam O'Neill" email="sam.oneill@example.com" since={since} timezone="Europe/London" />
    </ul>
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  name: "Incoming requests",
  render: () => <ul className="flex flex-col gap-3">
      <IncomingRow name="Priya Shah" message="I've got a tile cutter if you need one!" actionBase="#" />
      <IncomingRow name="Jo" message={null} actionBase="#" />
    </ul>
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  name: "Waiting for a reply",
  render: () => <ul className="flex flex-col gap-2">
      <PendingRow label="Dee Walker" detail="Friend request sent 20 Sep 2026" actions={[{
      action: "#",
      label: "Cancel request",
      ariaLabel: "Cancel"
    }]} />
      <PendingRow label="new.neighbour@example.com" detail="Invited 2 Sep 2026" expired actions={[{
      action: "#",
      label: "Resend",
      ariaLabel: "Resend"
    }, {
      action: "#",
      label: "Cancel invite",
      ariaLabel: "Cancel invite"
    }]} />
    </ul>
}`,...m.parameters?.docs?.source}}}})))()}g();export{f as Friends,p as Incoming,u as Invite,d as InviteError,m as Pending,h as __namedExportsOrder,c as default};