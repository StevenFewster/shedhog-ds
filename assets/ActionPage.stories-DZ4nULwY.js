import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t}from"./iframe-DyDTyzGL.js";import{n,r,t as i}from"./Button-B4nxyvYB.js";import{n as a,t as o}from"./Card-jZBcRYew.js";import{n as s,t as c}from"./Input-COve7tSG.js";import{n as l,t as u}from"./Notice-Cw8e9l4q.js";import{n as d,t as f}from"./Select-BsFNR9Eo.js";import{n as p,t as m}from"./Textarea-DJ1EQRsY.js";import{i as h,n as g}from"./dates-BYKp5ofl.js";import{n as _,t as v}from"./AppShell-yWa0MAOR.js";import{n as y,t as b}from"./AuthLayout-C_zhDK7X.js";function x(){return(0,C.jsx)(b,{title:`This link doesn't work`,children:(0,C.jsx)(u,{tone:`warning`,title:`We couldn't find that button`,action:(0,C.jsx)(`a`,{href:`/shed`,className:n({block:!0}),children:`Open Shedhog`}),children:`It may have been copied incompletely. You can do the same thing from inside Shedhog.`})})}function S({currentPath:e,user:t,view:r}){let a;switch(r.kind){case`used`:a=(0,C.jsxs)(u,{tone:`info`,title:`Already done`,action:w,children:[`This button was used on `,g(r.consumedAt,t.timezone),`. Nothing else to do.`]});break;case`expired`:a=(0,C.jsx)(u,{tone:`warning`,title:`This link has expired`,action:w,children:`Email buttons work for 7 days. You can still do this from inside Shedhog.`});break;case`wrong-account`:a=(0,C.jsxs)(u,{tone:`warning`,title:`This link is for someone else`,action:(0,C.jsx)(`form`,{method:`post`,action:`/logout`,children:(0,C.jsx)(i,{type:`submit`,variant:`secondary`,block:!0,children:`Sign out and switch account`})}),children:[`You're signed in as `,t.displayName,`, but this email was sent to a different account.`]});break;case`gone`:a=(0,C.jsx)(u,{tone:`info`,title:`Nothing to do here`,action:w,children:`What this link was for no longer exists.`});break;case`confirm`:{let e=r.description;a=e.alreadyDone?(0,C.jsx)(u,{tone:`info`,title:`Already done`,action:w,children:e.alreadyDone}):(0,C.jsxs)(o,{className:`flex flex-col gap-5`,children:[(0,C.jsxs)(`div`,{className:`flex flex-col gap-2`,children:[(0,C.jsx)(`h2`,{className:`text-3xl`,children:e.title}),(0,C.jsx)(`p`,{className:`text-muted`,children:e.body})]}),(0,C.jsxs)(`form`,{method:`post`,action:`/a/${r.token}`,className:`flex flex-col gap-5`,children:[e.fields?.map(e=>{let t={label:e.label,name:e.name,required:!0,hint:e.hint,defaultValue:r.values?.[e.name]??e.defaultValue,error:r.errors?.[e.name]};return e.type===`select`?(0,C.jsx)(f,{...t,options:e.options},e.name):(0,C.jsx)(c,{...t,type:`date`,min:e.min,max:e.max},e.name)}),e.note&&(0,C.jsx)(m,{label:e.note.label,name:`note`,placeholder:e.note.placeholder,hint:e.note.hint,rows:3,maxLength:500,defaultValue:r.values?.note}),(0,C.jsx)(i,{type:`submit`,size:`lg`,block:!0,variant:e.tone===`danger`?`danger`:`primary`,children:e.confirmLabel})]}),(0,C.jsx)(`a`,{href:`/shed`,className:n({variant:`ghost`,block:!0}),children:`Cancel`})]});break}}return(0,C.jsx)(v,{currentPath:e,user:t,pageTitleOverride:`Confirm`,children:a})}var C,w;function T(){return(T=e((()=>{_(),r(),a(),s(),l(),d(),p(),h(),y(),C=t(),w=(0,C.jsx)(`a`,{href:`/shed`,className:n({variant:`secondary`,block:!0}),children:`Go to your shed`}),x.__docgenInfo={description:`A broken or unknown button link. Shown even when signed out: it reveals nothing.`,methods:[],displayName:`InvalidActionLinkPage`},S.__docgenInfo={description:`/a/:token: the confirm page behind every email button. GET shows; POST acts.`,methods:[],displayName:`ActionPage`,props:{currentPath:{required:!0,tsType:{name:`string`},description:``},user:{required:!0,tsType:{name:`signature`,type:`object`,raw:`{ displayName: string; timezone: string }`,signature:{properties:[{key:`displayName`,value:{name:`string`,required:!0}},{key:`timezone`,value:{name:`string`,required:!0}}]}},description:``},view:{required:!0,tsType:{name:`union`,raw:`| { kind: "confirm"; token: string; description: ActionDescription; values?: Record<string, string>; errors?: Record<string, string> }
| { kind: "used"; consumedAt: Date }
| { kind: "expired" }
| { kind: "wrong-account" }
| { kind: "gone" }`,elements:[{name:`signature`,type:`object`,raw:`{ kind: "confirm"; token: string; description: ActionDescription; values?: Record<string, string>; errors?: Record<string, string> }`,signature:{properties:[{key:`kind`,value:{name:`literal`,value:`"confirm"`,required:!0}},{key:`token`,value:{name:`string`,required:!0}},{key:`description`,value:{name:`ActionDescription`,required:!0}},{key:`values`,value:{name:`Record`,elements:[{name:`string`},{name:`string`}],raw:`Record<string, string>`,required:!1}},{key:`errors`,value:{name:`Record`,elements:[{name:`string`},{name:`string`}],raw:`Record<string, string>`,required:!1}}]}},{name:`signature`,type:`object`,raw:`{ kind: "used"; consumedAt: Date }`,signature:{properties:[{key:`kind`,value:{name:`literal`,value:`"used"`,required:!0}},{key:`consumedAt`,value:{name:`Date`,required:!0}}]}},{name:`signature`,type:`object`,raw:`{ kind: "expired" }`,signature:{properties:[{key:`kind`,value:{name:`literal`,value:`"expired"`,required:!0}}]}},{name:`signature`,type:`object`,raw:`{ kind: "wrong-account" }`,signature:{properties:[{key:`kind`,value:{name:`literal`,value:`"wrong-account"`,required:!0}}]}},{name:`signature`,type:`object`,raw:`{ kind: "gone" }`,signature:{properties:[{key:`kind`,value:{name:`literal`,value:`"gone"`,required:!0}}]}}]},description:``}}}})))()}var E,D,O,k,A,j,M,N,P;function F(){return(F=e((()=>{T(),E=t(),D={title:`Pages/Email button (/a/:token)`,component:S,parameters:{shell:!1},args:{currentPath:`/a/TOKEN`,user:{displayName:`Sam`,timezone:`Europe/London`}}},O={args:{view:{kind:`confirm`,token:`TOKEN`,description:{title:`Lend your mitre saw to Priya?`,body:`Priya asked: "Saturday morning, about 3 days, for putting up a fence." Your terms: 7 days, she collects, split repair costs.`,confirmLabel:`Yes, lend it`,note:{label:`Note to Priya (optional)`,placeholder:`When can she collect?`}}}}},k={name:`Confirm (decline)`,args:{view:{kind:`confirm`,token:`TOKEN`,description:{title:`Say no to Priya?`,body:`She'll get an email saying the mitre saw isn't available.`,confirmLabel:`No, not this time`,tone:`danger`,note:{label:`Reason (optional)`}}}}},A={args:{view:{kind:`used`,consumedAt:new Date(`2026-09-22T13:05:00Z`)}}},j={args:{view:{kind:`expired`}}},M={args:{view:{kind:`wrong-account`}}},N={render:()=>(0,E.jsx)(x,{})},P=[`Confirm`,`ConfirmDanger`,`Used`,`Expired`,`WrongAccount`,`Invalid`],O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  args: {
    view: {
      kind: "confirm",
      token: "TOKEN",
      description: {
        title: "Lend your mitre saw to Priya?",
        body: 'Priya asked: "Saturday morning, about 3 days, for putting up a fence." Your terms: 7 days, she collects, split repair costs.',
        confirmLabel: "Yes, lend it",
        note: {
          label: "Note to Priya (optional)",
          placeholder: "When can she collect?"
        }
      }
    }
  }
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  name: "Confirm (decline)",
  args: {
    view: {
      kind: "confirm",
      token: "TOKEN",
      description: {
        title: "Say no to Priya?",
        body: "She'll get an email saying the mitre saw isn't available.",
        confirmLabel: "No, not this time",
        tone: "danger",
        note: {
          label: "Reason (optional)"
        }
      }
    }
  }
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  args: {
    view: {
      kind: "used",
      consumedAt: new Date("2026-09-22T13:05:00Z")
    }
  }
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  args: {
    view: {
      kind: "expired"
    }
  }
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  args: {
    view: {
      kind: "wrong-account"
    }
  }
}`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  render: () => <InvalidActionLinkPage />
}`,...N.parameters?.docs?.source}}}})))()}F();export{O as Confirm,k as ConfirmDanger,j as Expired,N as Invalid,A as Used,M as WrongAccount,P as __namedExportsOrder,D as default};