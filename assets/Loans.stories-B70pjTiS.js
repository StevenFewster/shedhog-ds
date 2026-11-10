import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t}from"./iframe-DyDTyzGL.js";import{a as n,i as r,n as i,o as a,r as o,t as s}from"./fixtures-C6MuVvYp.js";import{i as ee,r as c}from"./dates-BYKp5ofl.js";import{a as l,o as te,r as u,t as ne}from"./labels-g6D7fJxu.js";import{a as d,c as re,i as f,n as p,o as m,r as h,s as g,t as ie}from"./EmailLayout-n1UtHiGj.js";import{n as ae,r as oe}from"./InviteEmail-B407mrnu.js";import{r as se,t as _}from"./loanMachine-RYyR1bcN.js";function v(e,t,n){let r=e.tool.name,i=c(e.dueOn);if(t.role===`borrower`){let a=t.kind===`due_soon`?`The ${r} is due back tomorrow`:t.kind===`due_today`?`The ${r} is due back today`:`The ${r} is ${C(t.daysOverdue)} overdue`,o=[];return n.markReturned&&o.push({label:`I've given it back`,url:n.markReturned}),n.extend&&o.push({label:`Ask for longer`,url:n.extend}),{subject:a,preview:t.kind===`overdue`?`${e.owner.displayName} was expecting it on ${i}.`:`Due back ${i} to ${e.owner.displayName}.`,heading:a,lines:[t.kind===`overdue`?`${e.owner.displayName} was expecting it back on ${i}.`:`${e.owner.displayName} is expecting it back on ${i}.`,`${u[e.plan.handoverBack]}.`,...n.extend?[]:[`There are no extensions left on this loan, so check with them if you need longer.`]],buttons:o}}let a=t.kind===`due_soon`?`Your ${r} is due back tomorrow`:t.kind===`due_today`?`Your ${r} is due back today`:`Your ${r} is ${C(t.daysOverdue)} overdue`;return{subject:a,preview:`${e.borrower.displayName} has it, due ${i}.`,heading:a,lines:[t.kind===`overdue`?`${e.borrower.displayName} was due to bring it back on ${i}. We've reminded them too.`:`${e.borrower.displayName} has it until ${i}. We've reminded them too.`,`If it's already back, confirm it so the reminders stop.`],buttons:n.confirmReturn?[{label:`It's back`,url:n.confirmReturn}]:[]}}function ce(e,t,n){let r=`${e.borrower.displayName} would like the ${e.tool.name} for longer`;return{subject:r,preview:`Until ${c(t.untilOn)} instead of ${c(e.dueOn)}.`,heading:r,lines:[`They're asking to keep it until ${c(t.untilOn)}, ${l(t.days)} more than the ${c(e.dueOn)} you agreed.`],quote:t.note?{by:e.borrower.displayName,text:t.note}:null,buttons:[{label:`Yes, keep it longer`,url:n.approve},{label:`No`,url:n.decline}]}}function y(e,t){let n=t.status===`approved`,r=n?`You can keep the ${e.tool.name} until ${c(e.dueOn)}`:`${e.owner.displayName} needs the ${e.tool.name} back`;return{subject:r,preview:n?`${e.owner.displayName} said yes.`:`It's still due ${c(e.dueOn)}.`,heading:r,lines:[n?`${e.owner.displayName} said yes. It's now due back ${c(e.dueOn)}.`:`${e.owner.displayName} said no, so it's still due back ${c(e.dueOn)}.`],quote:t.replyNote?{by:e.owner.displayName,text:t.replyNote}:null,buttons:[]}}function b(e,t){let n=`${e.borrower.displayName} says the ${e.tool.name} is back`;return{subject:n,preview:`Check it over and confirm.`,heading:n,lines:[e.reportedCondition?`They say it's come back: ${_[e.reportedCondition].toLowerCase()}.`:`Check it over, then confirm it's back and how it came back.`],quote:e.returnNote?{by:e.borrower.displayName,text:e.returnNote}:null,callout:e.reportedCondition===`damaged`?w(e):null,buttons:[{label:`Confirm it's back`,url:t.confirm}]}}function x(e,t){let n=e.returnCondition,r=n===`damaged`,i=r?`The ${e.tool.name} came back damaged`:`Thanks for returning the ${e.tool.name}`;return{subject:i,preview:`${e.owner.displayName} confirmed it's back.`,heading:i,lines:[`${e.owner.displayName} confirmed it's back and marked it: ${_[n].toLowerCase()}.`,...r?[`Have a chat and sort it out between you.`]:[]],quote:t?{by:e.owner.displayName,text:t}:null,callout:r?w(e):null,buttons:[]}}function le(e){let t=`The ${e.tool.name} is now due back ${c(e.dueOn)}`;return{subject:t,preview:`${e.owner.displayName} changed the date.`,heading:t,lines:[`${e.owner.displayName} changed the return date to ${c(e.dueOn)}.`],buttons:[]}}function S(e,t){let n=`The ${e.tool.name} loan is off`,r=t===`owner`?e.owner.displayName:e.borrower.displayName;return{subject:n,preview:`${r} called it off.`,heading:n,lines:[t===`owner`?`${r} called it off before it was handed over.`:`${r} doesn't need it any more, so it's back in your shed for others to borrow.`],buttons:[]}}var C,w;function T(){return(T=e((()=>{ee(),te(),se(),C=e=>e===1?`a day`:l(e),w=e=>`Your agreed terms if it breaks: ${ne[e.plan.breakagePolicy]}.`})))()}function E({preview:e,heading:t,lines:n,quote:r,callout:i,buttons:a,loanUrl:o,settingsUrl:s}){return(0,D.jsxs)(p,{preview:e,heading:t,children:[n.map(e=>(0,D.jsx)(f,{children:e},e)),r&&(0,D.jsxs)(D.Fragment,{children:[(0,D.jsxs)(g,{style:{fontSize:`14px`,color:d.muted,margin:`0 0 4px`},children:[r.by,` wrote:`]}),(0,D.jsx)(ae,{children:r.text})]}),i&&(0,D.jsx)(g,{style:{fontSize:`16px`,fontWeight:700,color:d.yellow,margin:`0 0 16px`},children:i}),a.map((e,t)=>(0,D.jsx)(ie,{href:e.url,tone:e.tone??(t===0?`primary`:`secondary`),children:e.label},e.url)),(0,D.jsxs)(h,{children:[`See the loan in Shedhog: `,o]}),s&&(0,D.jsxs)(h,{children:[`Don't want reminders like this? Turn them off in your account: `,s]})]})}var D;function O(){return(O=e((()=>{re(),m(),oe(),D=t(),E.PreviewProps={subject:`The Mitre saw is due back tomorrow`,preview:`Due back Wed 30 Sep 2026 to Olive.`,heading:`The Mitre saw is due back tomorrow`,lines:[`Olive is expecting it back on Wed 30 Sep 2026.`,`Borrower brings it back.`],quote:null,callout:null,buttons:[{label:`I've given it back`,url:`http://localhost:5173/a/returned`},{label:`Ask for longer`,url:`http://localhost:5173/a/extend`}],loanUrl:`http://localhost:5173/loans/L1`},E.__docgenInfo={description:``,methods:[],displayName:`LoanEmail`,props:{subject:{required:!0,tsType:{name:`string`},description:``},preview:{required:!0,tsType:{name:`string`},description:``},heading:{required:!0,tsType:{name:`string`},description:``},lines:{required:!0,tsType:{name:`Array`,elements:[{name:`string`}],raw:`string[]`},description:``},quote:{required:!1,tsType:{name:`union`,raw:`{ by: string; text: string } | null`,elements:[{name:`signature`,type:`object`,raw:`{ by: string; text: string }`,signature:{properties:[{key:`by`,value:{name:`string`,required:!0}},{key:`text`,value:{name:`string`,required:!0}}]}},{name:`null`}]},description:``},callout:{required:!1,tsType:{name:`union`,raw:`string | null`,elements:[{name:`string`},{name:`null`}]},description:`Highlighted fact, e.g. the breakage terms when something came back damaged.`},buttons:{required:!0,tsType:{name:`Array`,elements:[{name:`signature`,type:`object`,raw:`{ label: string; url: string; tone?: "primary" | "secondary" }`,signature:{properties:[{key:`label`,value:{name:`string`,required:!0}},{key:`url`,value:{name:`string`,required:!0}},{key:`tone`,value:{name:`union`,raw:`"primary" | "secondary"`,elements:[{name:`literal`,value:`"primary"`},{name:`literal`,value:`"secondary"`}],required:!1}}]}}],raw:`LoanEmailButton[]`},description:``},loanUrl:{required:!0,tsType:{name:`string`},description:`Always-present link into the app.`},settingsUrl:{required:!1,tsType:{name:`string`},description:`Reminders only: where to turn them off.`}}}})))()}var k,A,j,M,N,P,F,I,L,R,z,B,V,H,U,W,G,K,q,J,Y,X,Z,Q;function $(){return($=e((()=>{T(),O(),a(),s(),k=t(),A={title:`Emails/Loans`,parameters:{shell:!1}},j=i(`/loans/L1`),M=i(`/account/settings#reminders`),N=(e,t,r=!1)=>(0,k.jsx)(n,{to:e,subject:t.subject,email:(0,k.jsx)(E,{...t,loanUrl:j,settingsUrl:r?M:void 0})}),P={markReturned:i(`/a/returned`),extend:i(`/a/extend`)},F=r(),I={name:`Reminder: due tomorrow (borrower)`,render:()=>N(`the borrower`,v(F,{role:`borrower`,kind:`due_soon`},P),!0)},L={name:`Reminder: due today (borrower)`,render:()=>N(`the borrower`,v(F,{role:`borrower`,kind:`due_today`},P),!0)},R={name:`Reminder: overdue (borrower)`,render:()=>N(`the borrower`,v(F,{role:`borrower`,kind:`overdue`,daysOverdue:3},P),!0)},z={name:`Reminder: overdue, no extensions left`,render:()=>N(`the borrower`,v(F,{role:`borrower`,kind:`overdue`,daysOverdue:1},{...P,extend:null}),!0)},B={name:`Reminder: due today (owner)`,render:()=>N(`the owner`,v(F,{role:`owner`,kind:`due_today`},{confirmReturn:i(`/a/back`)}),!0)},V={name:`Reminder: overdue (owner)`,render:()=>N(`the owner`,v(F,{role:`owner`,kind:`overdue`,daysOverdue:3},{confirmReturn:i(`/a/back`)}),!0)},H={name:`Asked for longer (owner)`,render:()=>N(`the owner`,ce(F,o(),{approve:i(`/a/yes`),decline:i(`/a/no`)}))},U={name:`Longer: yes (borrower)`,render:()=>N(`the borrower`,y(r({dueOn:`2026-11-21`}),o({status:`approved`,replyNote:`No rush, I won't need it till December.`})))},W={name:`Longer: no (borrower)`,render:()=>N(`the borrower`,y(F,o({status:`declined`,replyNote:`Sorry, I need it on Sunday.`})))},G={name:`Return date changed (borrower)`,render:()=>N(`the borrower`,le(r({dueOn:`2026-11-17`})))},K={name:`Says it's back (owner)`,render:()=>N(`the owner`,b(r({status:`return_pending`,reportedCondition:`same`}),{confirm:i(`/a/confirm`)}))},q={name:`Says it's back, damaged (owner)`,render:()=>N(`the owner`,b(r({status:`return_pending`,reportedCondition:`damaged`,returnNote:`The blade guard cracked, sorry. Happy to split a new one.`}),{confirm:i(`/a/confirm`)}))},J={name:`Confirmed back (borrower)`,render:()=>N(`the borrower`,x(r({status:`returned`,returnCondition:`same`}),`Thanks, all good!`))},Y={name:`Confirmed back, damaged (borrower)`,render:()=>N(`the borrower`,x(r({status:`returned`,returnCondition:`damaged`}),`Guard's cracked. Let's split it.`))},X={name:`Called off by the owner (borrower)`,render:()=>N(`the borrower`,S(r({status:`cancelled`}),`owner`))},Z={name:`Called off by the borrower (owner)`,render:()=>N(`the owner`,S(r({status:`cancelled`}),`borrower`))},Q=[`DueSoon`,`DueToday`,`Overdue`,`OverdueNoExtensions`,`OwnerDueToday`,`OwnerOverdue`,`AskedForLonger`,`LongerYes`,`LongerNo`,`DueChanged`,`MarkedReturned`,`MarkedReturnedDamaged`,`ReturnConfirmed`,`ReturnConfirmedDamaged`,`CalledOffByOwner`,`CalledOffByBorrower`],I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  name: "Reminder: due tomorrow (borrower)",
  render: () => frame("the borrower", reminderMessage(loan, {
    role: "borrower",
    kind: "due_soon"
  }, borrowerLinks), true)
}`,...I.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  name: "Reminder: due today (borrower)",
  render: () => frame("the borrower", reminderMessage(loan, {
    role: "borrower",
    kind: "due_today"
  }, borrowerLinks), true)
}`,...L.parameters?.docs?.source}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  name: "Reminder: overdue (borrower)",
  render: () => frame("the borrower", reminderMessage(loan, {
    role: "borrower",
    kind: "overdue",
    daysOverdue: 3
  }, borrowerLinks), true)
}`,...R.parameters?.docs?.source}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  name: "Reminder: overdue, no extensions left",
  render: () => frame("the borrower", reminderMessage(loan, {
    role: "borrower",
    kind: "overdue",
    daysOverdue: 1
  }, {
    ...borrowerLinks,
    extend: null
  }), true)
}`,...z.parameters?.docs?.source}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  name: "Reminder: due today (owner)",
  render: () => frame("the owner", reminderMessage(loan, {
    role: "owner",
    kind: "due_today"
  }, {
    confirmReturn: link("/a/back")
  }), true)
}`,...B.parameters?.docs?.source}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  name: "Reminder: overdue (owner)",
  render: () => frame("the owner", reminderMessage(loan, {
    role: "owner",
    kind: "overdue",
    daysOverdue: 3
  }, {
    confirmReturn: link("/a/back")
  }), true)
}`,...V.parameters?.docs?.source}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  name: "Asked for longer (owner)",
  render: () => frame("the owner", extensionRequestMessage(loan, sampleExtension(), {
    approve: link("/a/yes"),
    decline: link("/a/no")
  }))
}`,...H.parameters?.docs?.source}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  name: "Longer: yes (borrower)",
  render: () => frame("the borrower", extensionAnsweredMessage(sampleLoan({
    dueOn: "2026-11-21"
  }), sampleExtension({
    status: "approved",
    replyNote: "No rush, I won't need it till December."
  })))
}`,...U.parameters?.docs?.source}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  name: "Longer: no (borrower)",
  render: () => frame("the borrower", extensionAnsweredMessage(loan, sampleExtension({
    status: "declined",
    replyNote: "Sorry, I need it on Sunday."
  })))
}`,...W.parameters?.docs?.source}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  name: "Return date changed (borrower)",
  render: () => frame("the borrower", dueChangedMessage(sampleLoan({
    dueOn: "2026-11-17"
  })))
}`,...G.parameters?.docs?.source}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  name: "Says it's back (owner)",
  render: () => frame("the owner", markedReturnedMessage(sampleLoan({
    status: "return_pending",
    reportedCondition: "same"
  }), {
    confirm: link("/a/confirm")
  }))
}`,...K.parameters?.docs?.source}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  name: "Says it's back, damaged (owner)",
  render: () => frame("the owner", markedReturnedMessage(sampleLoan({
    status: "return_pending",
    reportedCondition: "damaged",
    returnNote: "The blade guard cracked, sorry. Happy to split a new one."
  }), {
    confirm: link("/a/confirm")
  }))
}`,...q.parameters?.docs?.source}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  name: "Confirmed back (borrower)",
  render: () => frame("the borrower", returnConfirmedMessage(sampleLoan({
    status: "returned",
    returnCondition: "same"
  }), "Thanks, all good!"))
}`,...J.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  name: "Confirmed back, damaged (borrower)",
  render: () => frame("the borrower", returnConfirmedMessage(sampleLoan({
    status: "returned",
    returnCondition: "damaged"
  }), "Guard's cracked. Let's split it."))
}`,...Y.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  name: "Called off by the owner (borrower)",
  render: () => frame("the borrower", loanCancelledMessage(sampleLoan({
    status: "cancelled"
  }), "owner"))
}`,...X.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  name: "Called off by the borrower (owner)",
  render: () => frame("the owner", loanCancelledMessage(sampleLoan({
    status: "cancelled"
  }), "borrower"))
}`,...Z.parameters?.docs?.source}}}})))()}$();export{H as AskedForLonger,Z as CalledOffByBorrower,X as CalledOffByOwner,G as DueChanged,I as DueSoon,L as DueToday,W as LongerNo,U as LongerYes,K as MarkedReturned,q as MarkedReturnedDamaged,R as Overdue,z as OverdueNoExtensions,B as OwnerDueToday,V as OwnerOverdue,J as ReturnConfirmed,Y as ReturnConfirmedDamaged,Q as __namedExportsOrder,A as default};