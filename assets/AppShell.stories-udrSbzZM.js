import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t}from"./iframe-BWqv3mhK.js";import{n,r}from"./Button-DjKdLsXf.js";import{n as i,t as a}from"./EmptyState-CWCqC2OR.js";import{n as o,t as s}from"./AppShell-Dm4pfTB-.js";var c,l,u,d,f,p,m,h;function g(){return(g=e((()=>{r(),i(),o(),c=t(),l={title:`Layout/AppShell`,component:s,parameters:{shell:!1},args:{currentPath:`/shed`,title:`Your shed`},argTypes:{currentPath:{control:`inline-radio`,options:[`/shed`,`/search`,`/loans`,`/friends`,`/mailbox`]}},render:e=>(0,c.jsx)(s,{...e,children:(0,c.jsx)(a,{title:`Nothing in here yet`,body:`Add the tools you're happy to lend. Friends will see them when they search.`,action:(0,c.jsx)(`a`,{href:`/shed/new`,className:n(),children:`Add a tool`})})})},u={},d={args:{currentPath:`/search`,title:`Borrow a tool`}},f={name:`Mailbox with unread`,args:{user:{displayName:`Ben Borrower`,mailboxUnread:3}}},p={name:`Mailbox with unread (on the Mailbox)`,args:{currentPath:`/mailbox`,title:`Mailbox`,user:{displayName:`Ben Borrower`,mailboxUnread:3}}},m={args:{action:(0,c.jsx)(`a`,{href:`/shed/new`,className:n({className:`min-h-10 px-3 text-base`}),children:`Add`})}},h=[`Shed`,`Search`,`MailboxUnread`,`MailboxUnreadActive`,`WithAction`],u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    currentPath: "/search",
    title: "Borrow a tool"
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  name: "Mailbox with unread",
  args: {
    user: {
      displayName: "Ben Borrower",
      mailboxUnread: 3
    }
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  name: "Mailbox with unread (on the Mailbox)",
  args: {
    currentPath: "/mailbox",
    title: "Mailbox",
    user: {
      displayName: "Ben Borrower",
      mailboxUnread: 3
    }
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    action: <a href="/shed/new" className={buttonClasses({
      className: "min-h-10 px-3 text-base"
    })}>
        Add
      </a>
  }
}`,...m.parameters?.docs?.source}}}})))()}g();export{f as MailboxUnread,p as MailboxUnreadActive,d as Search,u as Shed,m as WithAction,h as __namedExportsOrder,l as default};