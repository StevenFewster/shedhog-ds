import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,p as n}from"./iframe-DyDTyzGL.js";import{n as r,r as i,t as a}from"./Button-B4nxyvYB.js";import{n as o,t as s}from"./Card-jZBcRYew.js";import{n as c,t as l}from"./EmptyState-B1e0Ix_c.js";import{n as u,t as d}from"./Notice-Cw8e9l4q.js";import{n as f,t as p}from"./Textarea-DJ1EQRsY.js";import{n as m,t as h}from"./AppShell-yWa0MAOR.js";import{i as g,n as _,o as v,r as y,s as b,t as x}from"./ShoutParts-B6YvuB6D.js";import{i as S,n as C,r as w,t as T}from"./shoutOuts-DVYdheU9.js";function E({shoutOutId:e,friendId:t}){return(0,D.useEffect)(()=>{fetch(`/mailbox/read`,{method:`POST`,body:new URLSearchParams({shoutOutId:e,friendId:t})}).catch(()=>{})},[e,t]),null}var D;function O(){return(O=e((()=>{D=n()})))()}function k({user:e,friendCount:t,values:n,error:i,limited:o}){return t===0?(0,N.jsx)(h,{currentPath:`/shout-out`,title:`Shout out`,user:e,children:(0,N.jsx)(l,{title:`No one to shout to yet`,body:`A shout out goes to all your friends on Shedhog. Invite a few first.`,action:(0,N.jsx)(`a`,{href:`/friends`,className:r({variant:`secondary`}),children:`Invite a friend`})})}):(0,N.jsxs)(h,{currentPath:`/shout-out`,title:`Shout out`,user:e,children:[(0,N.jsxs)(`p`,{className:`text-lg text-muted`,children:[`Ask `,P(t),` at once. Each gets an email and can reply here; only you see their replies, in your Mailbox.`]}),o&&(0,N.jsxs)(d,{tone:`warning`,title:`That's three today`,children:[`You can send `,3,` shout outs a day. Try again tomorrow, or check your Mailbox for replies.`]}),(0,N.jsx)(s,{as:`section`,"aria-label":`Your shout out`,className:`flex flex-col gap-4`,children:(0,N.jsxs)(`form`,{method:`post`,action:`/shout-out`,className:`flex flex-col gap-5`,children:[(0,N.jsx)(`input`,{type:`hidden`,name:`q`,value:n.q}),(0,N.jsx)(p,{label:`What are you after?`,name:`message`,rows:4,required:!0,maxLength:280,placeholder:w,defaultValue:n.message,error:i??void 0,hint:`Say what and when. Change the words however you like.`}),(0,N.jsxs)(a,{type:`submit`,size:`lg`,block:!0,disabled:o,children:[(0,N.jsx)(y,{className:`size-6`}),`Send to `,t===1?`1 friend`:`${t} friends`]})]})})]})}function A({user:e,mine:t,fromFriends:n,notice:i}){return(0,N.jsxs)(h,{currentPath:`/mailbox`,title:`Mailbox`,user:e,action:(0,N.jsx)(`a`,{href:`/shout-out`,className:r({variant:`secondary`,className:`min-h-10 px-3 text-base`}),children:`Shout out`}),children:[i&&(0,N.jsx)(d,{tone:`success`,title:i}),t.length===0&&n.length===0?(0,N.jsx)(l,{title:`Nothing here yet`,body:`When you can't find a tool, shout out to all your friends at once. Their replies, and their shout outs, land here.`,action:(0,N.jsx)(`a`,{href:`/shout-out`,className:r({variant:`secondary`}),children:`Start a shout out`})}):(0,N.jsxs)(N.Fragment,{children:[(0,N.jsxs)(`section`,{"aria-labelledby":`mine`,className:`flex flex-col gap-3`,children:[(0,N.jsx)(`h2`,{id:`mine`,className:`text-3xl text-chalk`,children:`Your shout outs`}),t.length?(0,N.jsx)(`ul`,{className:`flex flex-col gap-2`,children:t.map(e=>(0,N.jsx)(_,{row:e},e.id))}):(0,N.jsx)(`p`,{className:`text-muted`,children:`Can't find something in your friends' sheds? Shout out and ask them all.`})]}),(0,N.jsxs)(`section`,{"aria-labelledby":`theirs`,className:`flex flex-col gap-3`,children:[(0,N.jsx)(`h2`,{id:`theirs`,className:`text-3xl text-chalk`,children:`From friends`}),n.length?(0,N.jsx)(`ul`,{className:`flex flex-col gap-2`,children:n.map(e=>(0,N.jsx)(_,{row:e},e.id))}):(0,N.jsx)(`p`,{className:`text-muted`,children:`When a friend shouts out, it shows here.`})]})]})]})}function j({user:e,shoutOut:t,conversations:n,notice:r}){return(0,N.jsxs)(h,{currentPath:`/mailbox/${t.id}`,user:e,pageTitleOverride:`Your shout out`,children:[(0,N.jsx)(`a`,{href:`/mailbox`,className:`text-muted underline-offset-4 hover:underline`,children:`Mailbox`}),(0,N.jsx)(`h1`,{className:`sr-only`,children:`Your shout out`}),r&&(0,N.jsx)(d,{tone:`success`,title:r}),(0,N.jsx)(v,{message:t.message,who:`You asked`,when:t.when,closed:!t.open}),(0,N.jsxs)(`p`,{className:`text-muted`,children:[`Sent to `,t.sentTo===1?`1 friend`:`${t.sentTo} friends`,`. Each reply is just between you and them.`]}),(0,N.jsxs)(`section`,{"aria-labelledby":`replies`,className:`flex flex-col gap-3`,children:[(0,N.jsx)(`h2`,{id:`replies`,className:`text-3xl text-chalk`,children:`Replies`}),n.length?(0,N.jsx)(`ul`,{className:`flex flex-col gap-2`,children:n.map(e=>(0,N.jsx)(x,{row:e},e.href))}):(0,N.jsx)(`p`,{className:`text-muted`,children:t.open?`No replies yet. We'll email you when someone answers.`:`No one replied this time.`})]}),t.open&&(0,N.jsx)(`form`,{method:`post`,action:`/mailbox/${t.id}/close`,children:(0,N.jsx)(a,{type:`submit`,variant:`ghost`,block:!0,children:`Sorted, thanks: close it`})})]})}function M({user:e,shoutOut:t,withName:n,side:r,friendId:i,messages:o,action:c,values:l={},error:u,sent:f,markRead:m=!0}){let _=r===`asker`?`/mailbox/${t.id}`:`/mailbox`;return(0,N.jsxs)(h,{currentPath:`/mailbox/${t.id}`,user:e,pageTitleOverride:r===`asker`?`Replies from ${n}`:`${n}'s shout out`,children:[m&&(0,N.jsx)(E,{shoutOutId:t.id,friendId:i}),(0,N.jsx)(`a`,{href:_,className:`text-muted underline-offset-4 hover:underline`,children:r===`asker`?`All replies`:`Mailbox`}),(0,N.jsx)(v,{message:t.message,who:t.who,when:t.when,closed:!t.open}),(0,N.jsx)(`h1`,{className:`text-4xl text-chalk`,children:r===`asker`?`You and ${n}`:`Your reply to ${n}`}),r===`friend`&&(0,N.jsxs)(`p`,{className:`text-muted`,children:[`Only `,n,` sees this conversation.`]}),f&&(0,N.jsx)(d,{tone:`success`,title:`Sent to ${n}`}),o.length?(0,N.jsx)(g,{messages:o,label:`Messages with ${n}`}):(0,N.jsx)(`p`,{className:`text-muted`,children:`Nothing yet. Got one, or know who has?`}),t.open?(0,N.jsx)(s,{as:`section`,"aria-label":`Reply`,className:`flex flex-col gap-4`,children:(0,N.jsxs)(`form`,{method:`post`,action:c,className:`flex flex-col gap-5`,children:[(0,N.jsx)(p,{label:`Reply to ${n}`,name:`body`,rows:3,required:!0,maxLength:C,defaultValue:l.body,placeholder:r===`friend`?T:`Brilliant, when suits?`,error:u??void 0}),(0,N.jsx)(a,{type:`submit`,block:!0,children:`Send reply`})]})}):(0,N.jsx)(d,{title:`This shout out is closed`,children:r===`asker`?`You closed it, or it's over two weeks old.`:`${n} has sorted it, or it's over two weeks old.`})]})}var N,P;function F(){return(F=e((()=>{m(),O(),b(),i(),o(),c(),u(),f(),S(),N=t(),P=e=>e===1?`your friend`:e===2?`both your friends`:`all ${e} of your friends`,k.__docgenInfo={description:`/shout-out: one box, pre-filled from the search, sent to every friend.`,methods:[],displayName:`ShoutOutPage`,props:{user:{required:!0,tsType:{name:`signature`,type:`object`,raw:`{ displayName: string; mailboxUnread?: number }`,signature:{properties:[{key:`displayName`,value:{name:`string`,required:!0}},{key:`mailboxUnread`,value:{name:`number`,required:!1}}]}},description:``},friendCount:{required:!0,tsType:{name:`number`},description:``},values:{required:!0,tsType:{name:`signature`,type:`object`,raw:`{ message: string; q: string }`,signature:{properties:[{key:`message`,value:{name:`string`,required:!0}},{key:`q`,value:{name:`string`,required:!0}}]}},description:``},error:{required:!1,tsType:{name:`union`,raw:`string | null`,elements:[{name:`string`},{name:`null`}]},description:``},limited:{required:!1,tsType:{name:`boolean`},description:``}}},A.__docgenInfo={description:`/mailbox: your shout outs and your friends'.`,methods:[],displayName:`MailboxPage`,props:{user:{required:!0,tsType:{name:`signature`,type:`object`,raw:`{ displayName: string; mailboxUnread?: number }`,signature:{properties:[{key:`displayName`,value:{name:`string`,required:!0}},{key:`mailboxUnread`,value:{name:`number`,required:!1}}]}},description:``},mine:{required:!0,tsType:{name:`Array`,elements:[{name:`MailboxRowProps`}],raw:`MailboxRowProps[]`},description:``},fromFriends:{required:!0,tsType:{name:`Array`,elements:[{name:`MailboxRowProps`}],raw:`MailboxRowProps[]`},description:``},notice:{required:!1,tsType:{name:`union`,raw:`string | null`,elements:[{name:`string`},{name:`null`}]},description:``}}},j.__docgenInfo={description:`The asker's view: their shout out and each friend's private conversation.`,methods:[],displayName:`ShoutOutThreadPage`,props:{user:{required:!0,tsType:{name:`signature`,type:`object`,raw:`{ displayName: string; mailboxUnread?: number }`,signature:{properties:[{key:`displayName`,value:{name:`string`,required:!0}},{key:`mailboxUnread`,value:{name:`number`,required:!1}}]}},description:``},shoutOut:{required:!0,tsType:{name:`signature`,type:`object`,raw:`{ id: string; message: string; when: string; open: boolean; sentTo: number }`,signature:{properties:[{key:`id`,value:{name:`string`,required:!0}},{key:`message`,value:{name:`string`,required:!0}},{key:`when`,value:{name:`string`,required:!0}},{key:`open`,value:{name:`boolean`,required:!0}},{key:`sentTo`,value:{name:`number`,required:!0}}]}},description:``},conversations:{required:!0,tsType:{name:`Array`,elements:[{name:`ConversationRowProps`}],raw:`ConversationRowProps[]`},description:``},notice:{required:!1,tsType:{name:`union`,raw:`string | null`,elements:[{name:`string`},{name:`null`}]},description:``}}},M.__docgenInfo={description:`One private conversation between the asker and a friend.`,methods:[],displayName:`ConversationPage`,props:{user:{required:!0,tsType:{name:`signature`,type:`object`,raw:`{ displayName: string; mailboxUnread?: number }`,signature:{properties:[{key:`displayName`,value:{name:`string`,required:!0}},{key:`mailboxUnread`,value:{name:`number`,required:!1}}]}},description:``},shoutOut:{required:!0,tsType:{name:`signature`,type:`object`,raw:`{ id: string; message: string; who: string; when: string; open: boolean }`,signature:{properties:[{key:`id`,value:{name:`string`,required:!0}},{key:`message`,value:{name:`string`,required:!0}},{key:`who`,value:{name:`string`,required:!0}},{key:`when`,value:{name:`string`,required:!0}},{key:`open`,value:{name:`boolean`,required:!0}}]}},description:`Who asked ("Ben asked" / "You asked") and the ask itself.`},withName:{required:!0,tsType:{name:`string`},description:`The other person in this conversation.`},side:{required:!0,tsType:{name:`union`,raw:`"asker" | "friend"`,elements:[{name:`literal`,value:`"asker"`},{name:`literal`,value:`"friend"`}]},description:``},friendId:{required:!0,tsType:{name:`string`},description:``},messages:{required:!0,tsType:{name:`Array`,elements:[{name:`MessageProps`}],raw:`MessageProps[]`},description:``},action:{required:!0,tsType:{name:`string`},description:`Where the reply form posts.`},values:{required:!1,tsType:{name:`signature`,type:`object`,raw:`{ body?: string }`,signature:{properties:[{key:`body`,value:{name:`string`,required:!1}}]}},description:`"I've got one" pre-fills the box.`,defaultValue:{value:`{}`,computed:!1}},error:{required:!1,tsType:{name:`union`,raw:`string | null`,elements:[{name:`string`},{name:`null`}]},description:``},sent:{required:!1,tsType:{name:`boolean`},description:``},markRead:{required:!1,tsType:{name:`boolean`},description:`Off in Storybook, which has no server to tell.`,defaultValue:{value:`true`,computed:!1}}}}})))()}var I,L,R,z,B,V,H,U,W,G,K,q,J,Y,X,Z;function Q(){return(Q=e((()=>{S(),F(),I=t(),L={title:`Pages/Shout outs`,parameters:{shell:!1}},R={displayName:`Ben Borrower`,mailboxUnread:2},z=`Hey, has anyone got a mitre saw I can borrow this weekend?`,B={id:`s1`,href:`#`,message:z,who:`You asked`,when:`20 Oct 2026, 10:30`,status:`2 friends replied`,unread:1,isNew:!1,closed:!1},V={render:()=>(0,I.jsx)(k,{user:R,friendCount:6,values:{message:z,q:`mitre saw`}})},H={name:`Shout out: blank`,render:()=>(0,I.jsx)(k,{user:R,friendCount:2,values:{message:``,q:``}})},U={name:`Shout out: daily limit`,render:()=>(0,I.jsx)(k,{user:R,friendCount:6,values:{message:z,q:``},limited:!0})},W={name:`Shout out: no friends`,render:()=>(0,I.jsx)(k,{user:R,friendCount:0,values:{message:``,q:``}})},G={render:()=>(0,I.jsx)(A,{user:R,mine:[B,{...B,id:`s3`,message:`Anyone got a tile cutter?`,status:`No replies`,unread:0,closed:!0,when:`2 Oct 2026, 18:02`}],fromFriends:[{...B,id:`s2`,who:`Olive asked`,message:`Does anyone have a pressure washer?`,status:`Reply if you can help`,unread:0,isNew:!0}]})},K={name:`Mailbox: empty`,render:()=>(0,I.jsx)(A,{user:{displayName:`Ben Borrower`},mine:[],fromFriends:[]})},q={render:()=>(0,I.jsx)(j,{user:R,shoutOut:{id:`s1`,message:z,when:`20 Oct 2026, 10:30`,open:!0,sentTo:6},conversations:[{href:`#olive`,name:`Olive Owner`,preview:`I've got one you can borrow. Pop round Saturday.`,when:`20 Oct, 10:42`,count:`1 message`,unread:1},{href:`#cara`,name:`Cara Friend`,preview:`You: Thanks anyway!`,when:`20 Oct, 11:05`,count:`3 messages`,unread:0}]})},J=[{id:`1`,mine:!1,author:`Olive`,body:`I've got one you can borrow.`,when:`20 Oct, 10:42`},{id:`2`,mine:!0,author:`You`,body:`Brilliant! Could I collect Saturday morning?`,when:`20 Oct, 10:50`}],Y={name:`Conversation: asker`,render:()=>(0,I.jsx)(M,{user:R,shoutOut:{id:`s1`,message:z,who:`You asked`,when:`20 Oct 2026, 10:30`,open:!0},withName:`Olive Owner`,side:`asker`,friendId:`o`,messages:J,action:`#`,markRead:!1})},X={name:`Conversation: friend saying they've got one`,render:()=>(0,I.jsx)(M,{user:{displayName:`Olive Owner`},shoutOut:{id:`s1`,message:z,who:`Ben Borrower asked`,when:`20 Oct 2026, 10:30`,open:!0},withName:`Ben Borrower`,side:`friend`,friendId:`o`,messages:[],action:`#`,markRead:!1,values:{body:T}})},Z=[`ShoutOut`,`ShoutOutEmpty`,`ShoutOutLimit`,`ShoutOutNoFriends`,`Mailbox`,`MailboxEmpty`,`Replies`,`ConversationAsker`,`ConversationFriend`],V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  render: () => <ShoutOutPage user={user} friendCount={6} values={{
    message: ask,
    q: "mitre saw"
  }} />
}`,...V.parameters?.docs?.source}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  name: "Shout out: blank",
  render: () => <ShoutOutPage user={user} friendCount={2} values={{
    message: "",
    q: ""
  }} />
}`,...H.parameters?.docs?.source}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  name: "Shout out: daily limit",
  render: () => <ShoutOutPage user={user} friendCount={6} values={{
    message: ask,
    q: ""
  }} limited />
}`,...U.parameters?.docs?.source}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  name: "Shout out: no friends",
  render: () => <ShoutOutPage user={user} friendCount={0} values={{
    message: "",
    q: ""
  }} />
}`,...W.parameters?.docs?.source}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  render: () => <MailboxPage user={user} mine={[row, {
    ...row,
    id: "s3",
    message: "Anyone got a tile cutter?",
    status: "No replies",
    unread: 0,
    closed: true,
    when: "2 Oct 2026, 18:02"
  }]} fromFriends={[{
    ...row,
    id: "s2",
    who: "Olive asked",
    message: "Does anyone have a pressure washer?",
    status: "Reply if you can help",
    unread: 0,
    isNew: true
  }]} />
}`,...G.parameters?.docs?.source}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  name: "Mailbox: empty",
  render: () => <MailboxPage user={{
    displayName: "Ben Borrower"
  }} mine={[]} fromFriends={[]} />
}`,...K.parameters?.docs?.source}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  render: () => <ShoutOutThreadPage user={user} shoutOut={{
    id: "s1",
    message: ask,
    when: "20 Oct 2026, 10:30",
    open: true,
    sentTo: 6
  }} conversations={[{
    href: "#olive",
    name: "Olive Owner",
    preview: "I've got one you can borrow. Pop round Saturday.",
    when: "20 Oct, 10:42",
    count: "1 message",
    unread: 1
  }, {
    href: "#cara",
    name: "Cara Friend",
    preview: "You: Thanks anyway!",
    when: "20 Oct, 11:05",
    count: "3 messages",
    unread: 0
  }]} />
}`,...q.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  name: "Conversation: asker",
  render: () => <ConversationPage user={user} shoutOut={{
    id: "s1",
    message: ask,
    who: "You asked",
    when: "20 Oct 2026, 10:30",
    open: true
  }} withName="Olive Owner" side="asker" friendId="o" messages={messages} action="#" markRead={false} />
}`,...Y.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  name: "Conversation: friend saying they've got one",
  render: () => <ConversationPage user={{
    displayName: "Olive Owner"
  }} shoutOut={{
    id: "s1",
    message: ask,
    who: "Ben Borrower asked",
    when: "20 Oct 2026, 10:30",
    open: true
  }} withName="Ben Borrower" side="friend" friendId="o" messages={[]} action="#" markRead={false} values={{
    body: OFFER_REPLY
  }} />
}`,...X.parameters?.docs?.source}}}})))()}Q();export{Y as ConversationAsker,X as ConversationFriend,G as Mailbox,K as MailboxEmpty,q as Replies,V as ShoutOut,H as ShoutOutEmpty,U as ShoutOutLimit,W as ShoutOutNoFriends,Z as __namedExportsOrder,L as default};