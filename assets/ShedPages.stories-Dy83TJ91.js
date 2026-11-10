import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t}from"./iframe-DyDTyzGL.js";import{n,t as r}from"./TopBarPill-Bimps2iv.js";import{n as i,r as a,t as o}from"./Button-B4nxyvYB.js";import{n as s,t as c}from"./Card-jZBcRYew.js";import{n as l,t as u}from"./EmptyState-B1e0Ix_c.js";import{n as d,t as f}from"./Notice-Cw8e9l4q.js";import{a as p,m,o as h,p as g}from"./AutoSubmitSelect-nsa5JmaI.js";import{n as _,t as v}from"./AppShell-yWa0MAOR.js";import{n as y,r as b}from"./PlanTerms-BIHmX9vp.js";import{n as x,t as S}from"./PhotoGallery-CjwfxN-P.js";import{a as ee,c as te,i as ne,n as re,o as ie,p as ae,r as oe,s as C,t as w}from"./ToolForm-Bi3egQrq.js";import{n as T,t as E}from"./ShedNotices-BaN0utZY.js";function D({user:e,tools:t,totalCount:n,filters:r,categories:a,notice:o}){if(n===0)return(0,O.jsxs)(v,{currentPath:`/shed`,title:`Your shed`,user:e,children:[(0,O.jsx)(E,{success:o??null,problems:[]}),(0,O.jsx)(u,{title:`Nothing in here yet`,body:`Add the tools you're happy to lend. Friends will see them when they search.`,action:(0,O.jsx)(`a`,{href:`/shed/new`,className:i(),children:`Add your first tool`})})]});let s=`${t.length} of ${n} ${n===1?`tool`:`tools`}`;return(0,O.jsxs)(v,{currentPath:`/shed`,title:`Your shed`,user:e,action:k,children:[(0,O.jsx)(E,{success:o??null,problems:[]}),(0,O.jsx)(ee,{state:r,categories:a}),(0,O.jsx)(`p`,{className:`text-sm text-muted`,"aria-live":`polite`,children:s}),t.length===0?(0,O.jsx)(u,{title:`No tools match`,body:`Try a different search or filter.`,action:(0,O.jsx)(`a`,{href:`/shed`,className:i({variant:`secondary`}),children:`Clear filters`})}):(0,O.jsx)(`ul`,{"aria-label":`Your tools`,className:`flex flex-col gap-3`,children:t.map(({id:e,...t})=>(0,O.jsx)(oe,{...t},e))})]})}var O,k;function A(){return(A=e((()=>{_(),n(),ie(),ne(),a(),l(),T(),O=t(),k=(0,O.jsx)(r,{href:`/shed/new`,label:`Tool`,accessibleName:`Add tool`}),D.__docgenInfo={description:``,methods:[],displayName:`ShedListPage`,props:{user:{required:!0,tsType:{name:`signature`,type:`object`,raw:`{ displayName: string }`,signature:{properties:[{key:`displayName`,value:{name:`string`,required:!0}}]}},description:``},tools:{required:!0,tsType:{name:`Array`,elements:[{name:`unknown`}],raw:`(ToolCardProps & { id: string })[]`},description:``},totalCount:{required:!0,tsType:{name:`number`},description:``},filters:{required:!0,tsType:{name:`ShedFilterState`},description:``},categories:{required:!0,tsType:{name:`Array`,elements:[{name:`SelectOption`}],raw:`SelectOption[]`},description:``},notice:{required:!1,tsType:{name:`union`,raw:`string | null`,elements:[{name:`string`},{name:`null`}]},description:``}}}})))()}function j({toolId:e,field:t,value:n,label:r}){return(0,N.jsxs)(`form`,{method:`post`,action:`/shed/${e}/flags`,className:`flex-1`,children:[(0,N.jsx)(`input`,{type:`hidden`,name:t,value:n?`true`:`false`}),(0,N.jsx)(o,{type:`submit`,variant:`secondary`,block:!0,children:r})]})}function M({user:e,tool:t,photos:n,terms:r,notices:a={success:null,problems:[]}}){let o=r.filter(e=>e.source===`custom`).length,s=[[`Category`,t.categoryName],[`Power`,t.power],...t.batteryPlatform?[[`Battery platform`,t.batteryPlatform]]:[],...t.power===`Battery`?[[`Battery and charger`,t.batteryIncluded?`Included`:`Not included`]]:[],[`Condition`,t.condition]];return(0,N.jsxs)(v,{pageTitleOverride:t.name,currentPath:`/shed/${t.id}`,user:e,action:(0,N.jsx)(`a`,{href:`/shed/${t.id}/edit`,className:i({variant:`secondary`,className:`min-h-10 px-3 text-base`}),children:`Edit`}),children:[(0,N.jsx)(E,{...a}),(0,N.jsx)(S,{photos:n,name:t.name,status:t.status}),(0,N.jsxs)(`div`,{className:`flex flex-col gap-2`,children:[(0,N.jsx)(`h1`,{className:`text-5xl text-chalk`,children:t.name}),t.subtitle&&(0,N.jsx)(`p`,{className:`text-lg text-muted`,children:t.subtitle}),(0,N.jsx)(`div`,{children:(0,N.jsx)(p,{status:t.status})})]}),(0,N.jsxs)(`div`,{className:`flex gap-3`,children:[(0,N.jsx)(j,{toolId:t.id,field:`available`,value:!t.available,label:t.available?`Mark not available`:`Mark available`}),(0,N.jsx)(j,{toolId:t.id,field:`visible`,value:!t.visible,label:t.visible?`Hide from friends`:`Show to friends`})]}),(0,N.jsxs)(c,{as:`section`,"aria-label":`Details`,children:[(0,N.jsx)(`dl`,{className:`grid grid-cols-[auto_1fr] gap-x-6 gap-y-3`,children:s.map(([e,t])=>(0,N.jsxs)(`div`,{className:`contents`,children:[(0,N.jsx)(`dt`,{className:`text-muted`,children:e}),(0,N.jsx)(`dd`,{className:`font-semibold`,children:t})]},e))}),t.description&&(0,N.jsx)(`p`,{className:`mt-4 border-t border-rib pt-4 whitespace-pre-line`,children:t.description})]}),(0,N.jsxs)(c,{as:`section`,"aria-labelledby":`terms-heading`,className:`flex flex-col gap-3`,children:[(0,N.jsxs)(`div`,{className:`flex items-baseline justify-between gap-3`,children:[(0,N.jsx)(`h2`,{id:`terms-heading`,className:`text-3xl`,children:`Lending terms`}),(0,N.jsx)(`span`,{className:`text-sm text-muted`,children:o===0?`Your defaults`:`${o} custom`})]}),(0,N.jsx)(y,{rows:r,label:`Lending terms for ${t.name}`}),(0,N.jsx)(`a`,{href:`/shed/${t.id}/terms`,className:i({variant:`secondary`,block:!0}),children:`Change terms for this tool`})]}),(0,N.jsx)(`a`,{href:`/shed`,className:i({variant:`ghost`,block:!0}),children:`Back to your shed`})]})}var N;function P(){return(P=e((()=>{_(),b(),x(),h(),a(),s(),T(),N=t(),M.__docgenInfo={description:``,methods:[],displayName:`ToolDetailPage`,props:{user:{required:!0,tsType:{name:`signature`,type:`object`,raw:`{ displayName: string }`,signature:{properties:[{key:`displayName`,value:{name:`string`,required:!0}}]}},description:``},tool:{required:!0,tsType:{name:`signature`,type:`object`,raw:`{
  id: string;
  name: string;
  subtitle: string;
  categoryName: string;
  status: ToolStatus;
  visible: boolean;
  available: boolean;
  power: string;
  batteryPlatform: string | null;
  batteryIncluded: boolean;
  condition: string;
  description: string | null;
}`,signature:{properties:[{key:`id`,value:{name:`string`,required:!0}},{key:`name`,value:{name:`string`,required:!0}},{key:`subtitle`,value:{name:`string`,required:!0}},{key:`categoryName`,value:{name:`string`,required:!0}},{key:`status`,value:{name:`ToolStatus`,required:!0}},{key:`visible`,value:{name:`boolean`,required:!0}},{key:`available`,value:{name:`boolean`,required:!0}},{key:`power`,value:{name:`string`,required:!0}},{key:`batteryPlatform`,value:{name:`union`,raw:`string | null`,elements:[{name:`string`},{name:`null`}],required:!0}},{key:`batteryIncluded`,value:{name:`boolean`,required:!0}},{key:`condition`,value:{name:`string`,required:!0}},{key:`description`,value:{name:`union`,raw:`string | null`,elements:[{name:`string`},{name:`null`}],required:!0}}]}},description:``},photos:{required:!0,tsType:{name:`Array`,elements:[{name:`GalleryPhoto`}],raw:`GalleryPhoto[]`},description:``},terms:{required:!0,tsType:{name:`Array`,elements:[{name:`TermRow`}],raw:`TermRow[]`},description:`Effective lending terms, each marked default or custom.`},notices:{required:!1,tsType:{name:`signature`,type:`object`,raw:`{ success: string | null; problems: string[] }`,signature:{properties:[{key:`success`,value:{name:`union`,raw:`string | null`,elements:[{name:`string`},{name:`null`}],required:!0}},{key:`problems`,value:{name:`Array`,elements:[{name:`string`}],raw:`string[]`,required:!0}}]}},description:``,defaultValue:{value:`{ success: null, problems: [] }`,computed:!1}}}}})))()}function F({user:e,categories:t,values:n,errors:r,suggest:i=!1}){return(0,R.jsxs)(v,{currentPath:`/shed/new`,title:`Add a tool`,user:e,children:[r&&Object.keys(r).length>0&&(0,R.jsx)(f,{tone:`danger`,title:`Check the highlighted fields`,children:`If you'd picked photos, add them again. They aren't kept when the form has a problem.`}),(0,R.jsx)(w,{action:`/shed/new`,categories:t,submitLabel:`Add to shed`,cancelHref:`/shed`,values:n,errors:r,photoSlots:4,suggest:i})]})}function I({user:e,toolId:t,toolName:n,categories:r,values:a,errors:o,photos:s,notices:l={success:null,problems:[]}}){return(0,R.jsxs)(v,{currentPath:`/shed/${t}/edit`,title:`Edit ${n}`,user:e,children:[(0,R.jsx)(E,{...l}),(0,R.jsxs)(c,{as:`section`,"aria-labelledby":`photos-heading`,className:`flex flex-col gap-4`,children:[(0,R.jsx)(`h2`,{id:`photos-heading`,className:`text-3xl`,children:`Photos`}),(0,R.jsx)(C,{toolId:t,photos:s})]}),(0,R.jsxs)(c,{as:`section`,"aria-labelledby":`details-heading`,className:`flex flex-col gap-4`,children:[(0,R.jsx)(`h2`,{id:`details-heading`,className:`text-3xl`,children:`Details`}),(0,R.jsx)(w,{action:`/shed/${t}/edit`,categories:r,submitLabel:`Save changes`,cancelHref:`/shed/${t}`,values:a,errors:o})]}),(0,R.jsx)(`a`,{href:`/shed/${t}/delete`,className:i({variant:`ghost`,block:!0,className:`text-tag`}),children:`Remove from shed`})]})}function L({user:e,toolId:t,toolName:n,onLoan:r=!1}){return r?(0,R.jsx)(v,{currentPath:`/shed/${t}/delete`,title:`Remove tool?`,user:e,children:(0,R.jsx)(f,{tone:`warning`,title:`${n} is on loan`,action:(0,R.jsxs)(`a`,{href:`/shed/${t}`,className:i({variant:`secondary`,block:!0}),children:[`Back to `,n]}),children:`You can remove it once it's back in your shed.`})}):(0,R.jsx)(v,{currentPath:`/shed/${t}/delete`,title:`Remove tool?`,user:e,children:(0,R.jsxs)(c,{className:`flex flex-col gap-5`,children:[(0,R.jsxs)(`p`,{className:`text-lg`,children:[(0,R.jsx)(`strong`,{className:`font-semibold`,children:n}),` will disappear from your shed and your friends' searches, and its photos will be deleted.`]}),(0,R.jsx)(`p`,{className:`text-muted`,children:`Past loans keep its name. Anyone waiting to hear about borrowing it is told it's gone. This can't be undone.`}),(0,R.jsx)(`form`,{method:`post`,action:`/shed/${t}/delete`,children:(0,R.jsxs)(o,{type:`submit`,variant:`danger`,size:`lg`,block:!0,children:[`Remove `,n]})}),(0,R.jsx)(`a`,{href:`/shed/${t}`,className:i({variant:`ghost`,block:!0}),children:`Keep it`})]})})}var R;function z(){return(z=e((()=>{_(),te(),re(),a(),s(),d(),ae(),T(),R=t(),F.__docgenInfo={description:``,methods:[],displayName:`NewToolPage`,props:{user:{required:!0,tsType:{name:`signature`,type:`object`,raw:`{ displayName: string }`,signature:{properties:[{key:`displayName`,value:{name:`string`,required:!0}}]}},description:``},categories:{required:!0,tsType:{name:`Array`,elements:[{name:`SelectOption`}],raw:`SelectOption[]`},description:``},values:{required:!1,tsType:{name:`ToolFormValues`},description:``},errors:{required:!1,tsType:{name:`ToolFormErrors`},description:``},suggest:{required:!1,tsType:{name:`boolean`},description:`Offer "Fill in from photo" (PLAN-13).`,defaultValue:{value:`false`,computed:!1}}}},I.__docgenInfo={description:``,methods:[],displayName:`EditToolPage`,props:{user:{required:!0,tsType:{name:`signature`,type:`object`,raw:`{ displayName: string }`,signature:{properties:[{key:`displayName`,value:{name:`string`,required:!0}}]}},description:``},toolId:{required:!0,tsType:{name:`string`},description:``},toolName:{required:!0,tsType:{name:`string`},description:``},categories:{required:!0,tsType:{name:`Array`,elements:[{name:`SelectOption`}],raw:`SelectOption[]`},description:``},values:{required:!0,tsType:{name:`ToolFormValues`},description:``},errors:{required:!1,tsType:{name:`ToolFormErrors`},description:``},photos:{required:!0,tsType:{name:`Array`,elements:[{name:`GalleryPhoto`}],raw:`GalleryPhoto[]`},description:``},notices:{required:!1,tsType:{name:`signature`,type:`object`,raw:`{ success: string | null; problems: string[] }`,signature:{properties:[{key:`success`,value:{name:`union`,raw:`string | null`,elements:[{name:`string`},{name:`null`}],required:!0}},{key:`problems`,value:{name:`Array`,elements:[{name:`string`}],raw:`string[]`,required:!0}}]}},description:``,defaultValue:{value:`{ success: null, problems: [] }`,computed:!1}}}},L.__docgenInfo={description:``,methods:[],displayName:`DeleteToolPage`,props:{user:{required:!0,tsType:{name:`signature`,type:`object`,raw:`{ displayName: string }`,signature:{properties:[{key:`displayName`,value:{name:`string`,required:!0}}]}},description:``},toolId:{required:!0,tsType:{name:`string`},description:``},toolName:{required:!0,tsType:{name:`string`},description:``},onLoan:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`false`,computed:!1}}}}})))()}var B,V,H,U,W,G,K,q,J,Y,X,Z,Q;function $(){return($=e((()=>{m(),A(),P(),z(),B=t(),V={title:`Pages/Shed`,parameters:{shell:!1}},H={displayName:`Sam O'Neill`},U=[{value:`drills`,label:`Drills & drivers`},{value:`saws`,label:`Saws`},{value:`garden`,label:`Garden`}],W=[{id:`1`,href:`#`,name:`Combi drill`,subtitle:`DeWalt DCD796, 18V XR`,categoryName:`Drills & drivers`,status:`available`,coverUrl:g.drill},{id:`2`,href:`#`,name:`Hedge trimmer`,subtitle:`Bosch`,categoryName:`Garden`,status:`unavailable`,coverUrl:g.trimmer},{id:`3`,href:`#`,name:`Mitre saw`,subtitle:`Makita LS1019`,categoryName:`Saws`,status:`available`,coverUrl:g.saw},{id:`4`,href:`#`,name:`Router`,subtitle:``,categoryName:`Other`,status:`hidden`,coverUrl:null}],G={render:()=>(0,B.jsx)(D,{user:H,tools:W,totalCount:4,filters:{},categories:U})},K={render:()=>(0,B.jsx)(D,{user:H,tools:[],totalCount:0,filters:{},categories:U})},q={render:()=>(0,B.jsx)(D,{user:H,tools:[],totalCount:4,filters:{q:`laser level`},categories:U})},J={render:()=>(0,B.jsx)(F,{user:H,categories:U})},Y={render:()=>(0,B.jsx)(M,{user:H,notices:{success:`Added to your shed`,problems:[]},terms:[{key:`durationDays`,label:`Loan length`,value:`3 days`,source:`custom`},{key:`maxExtensions`,label:`Extensions allowed`,value:`1 extension`,source:`default`},{key:`extensionDays`,label:`Each extension`,value:`7 days`,source:`default`},{key:`handoverOut`,label:`Getting it`,value:`Borrower collects`,source:`default`},{key:`handoverBack`,label:`Bringing it back`,value:`Borrower brings it back`,source:`default`},{key:`breakagePolicy`,label:`If it breaks`,value:`Split the repair cost`,source:`custom`}],photos:[{id:`a`,url:g.drill,width:800,height:600},{id:`b`,url:g.saw,width:800,height:600}],tool:{id:`1`,name:`Combi drill`,subtitle:`DeWalt DCD796, 18V XR`,categoryName:`Drills & drivers`,status:`available`,visible:!0,available:!0,power:`Battery`,batteryPlatform:`DeWalt 18V XR`,batteryIncluded:!0,condition:`Good`,description:`Two batteries and the charger are in the case. Chuck is a little stiff.`}})},X={render:()=>(0,B.jsx)(I,{user:H,toolId:`1`,toolName:`Combi drill`,categories:U,values:{name:`Combi drill`,categoryId:`drills`,powerSource:`battery`,visible:`on`,available:`on`},photos:[{id:`a`,url:g.drill,width:800,height:600}],notices:{success:null,problems:[`A tool can have up to 4 photos`]}})},Z={render:()=>(0,B.jsx)(L,{user:H,toolId:`1`,toolName:`Combi drill`})},Q=[`List`,`Empty`,`NoMatches`,`NewTool`,`Detail`,`Edit`,`Delete`],G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  render: () => <ShedListPage user={user} tools={tools} totalCount={4} filters={{}} categories={categories} />
}`,...G.parameters?.docs?.source}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  render: () => <ShedListPage user={user} tools={[]} totalCount={0} filters={{}} categories={categories} />
}`,...K.parameters?.docs?.source}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  render: () => <ShedListPage user={user} tools={[]} totalCount={4} filters={{
    q: "laser level"
  }} categories={categories} />
}`,...q.parameters?.docs?.source}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  render: () => <NewToolPage user={user} categories={categories} />
}`,...J.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  render: () => <ToolDetailPage user={user} notices={{
    success: "Added to your shed",
    problems: []
  }} terms={[{
    key: "durationDays",
    label: "Loan length",
    value: "3 days",
    source: "custom"
  }, {
    key: "maxExtensions",
    label: "Extensions allowed",
    value: "1 extension",
    source: "default"
  }, {
    key: "extensionDays",
    label: "Each extension",
    value: "7 days",
    source: "default"
  }, {
    key: "handoverOut",
    label: "Getting it",
    value: "Borrower collects",
    source: "default"
  }, {
    key: "handoverBack",
    label: "Bringing it back",
    value: "Borrower brings it back",
    source: "default"
  }, {
    key: "breakagePolicy",
    label: "If it breaks",
    value: "Split the repair cost",
    source: "custom"
  }]} photos={[{
    id: "a",
    url: STORY_PHOTOS.drill,
    width: 800,
    height: 600
  }, {
    id: "b",
    url: STORY_PHOTOS.saw,
    width: 800,
    height: 600
  }]} tool={{
    id: "1",
    name: "Combi drill",
    subtitle: "DeWalt DCD796, 18V XR",
    categoryName: "Drills & drivers",
    status: "available",
    visible: true,
    available: true,
    power: "Battery",
    batteryPlatform: "DeWalt 18V XR",
    batteryIncluded: true,
    condition: "Good",
    description: "Two batteries and the charger are in the case. Chuck is a little stiff."
  }} />
}`,...Y.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  render: () => <EditToolPage user={user} toolId="1" toolName="Combi drill" categories={categories} values={{
    name: "Combi drill",
    categoryId: "drills",
    powerSource: "battery",
    visible: "on",
    available: "on"
  }} photos={[{
    id: "a",
    url: STORY_PHOTOS.drill,
    width: 800,
    height: 600
  }]} notices={{
    success: null,
    problems: ["A tool can have up to 4 photos"]
  }} />
}`,...X.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  render: () => <DeleteToolPage user={user} toolId="1" toolName="Combi drill" />
}`,...Z.parameters?.docs?.source}}}})))()}$();export{Z as Delete,Y as Detail,X as Edit,K as Empty,G as List,J as NewTool,q as NoMatches,Q as __namedExportsOrder,V as default};