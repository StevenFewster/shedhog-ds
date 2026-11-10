import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,p as n}from"./iframe-DyDTyzGL.js";import{n as r,r as i}from"./Wordmark-CHBsSDxF.js";import{n as a,t as o}from"./TopBarPill-Bimps2iv.js";import{a as s,i as c,n as l,t as u}from"./LoanParts-BAlz9q_Z.js";import{n as d,t as f}from"./Avatar-DME4EaEP.js";import{n as p,t as m}from"./Badge-DG7hLIcx.js";import{r as h,t as g}from"./Button-B4nxyvYB.js";import{n as _,t as v}from"./Card-jZBcRYew.js";import{n as y,t as b}from"./EmptyState-B1e0Ix_c.js";import{n as x,t as S}from"./Input-COve7tSG.js";import{n as C,t as w}from"./Notice-Cw8e9l4q.js";import{n as T,t as E}from"./Select-BsFNR9Eo.js";import{n as D,t as O}from"./Sheet-D4mIXF-y.js";import{n as k,t as A}from"./Textarea-DJ1EQRsY.js";import{n as j,t as M}from"./Toggle-BbrpwEij.js";function N({title:e,children:t}){return(0,I.jsxs)(`section`,{"aria-label":e,className:`flex flex-col gap-3 border-t border-rib pt-4`,children:[(0,I.jsx)(`h2`,{className:`text-2xl text-muted`,children:e}),t]})}function P(){let[e,t]=(0,F.useState)(!1);return(0,I.jsxs)(I.Fragment,{children:[(0,I.jsx)(g,{variant:`secondary`,onClick:()=>t(!0),children:`Open the sheet`}),(0,I.jsx)(O,{open:e,onClose:()=>t(!1),title:`Loan length`,children:(0,I.jsx)(`p`,{className:`text-muted`,children:`How long friends can keep a tool before it's due back.`})})]})}var F,I,L,R,z,B,V,H,U;function W(){return(W=e((()=>{F=n(),i(),a(),s(),d(),p(),h(),_(),y(),x(),C(),T(),D(),k(),j(),I=t(),L={title:`Design system/All components`,parameters:{layout:`fullscreen`}},R=[`primary`,`secondary`,`ghost`,`danger`],z=[`available`,`on-loan`,`overdue`,`hidden`,`custom`,`neutral`],B=[`info`,`success`,`warning`,`danger`],V=[{value:`saws`,label:`Saws`},{value:`drills`,label:`Drills and drivers`}],H={name:`All components`,render:()=>(0,I.jsxs)(`div`,{className:`mx-auto flex max-w-2xl flex-col gap-6 bg-case p-4`,children:[(0,I.jsx)(N,{title:`Wordmark`,children:(0,I.jsxs)(`div`,{className:`flex flex-col items-start gap-3`,children:[(0,I.jsx)(r,{size:`lg`}),(0,I.jsx)(r,{size:`md`}),(0,I.jsx)(r,{size:`sm`})]})}),(0,I.jsxs)(N,{title:`Buttons`,children:[R.map(e=>(0,I.jsxs)(`div`,{className:`flex flex-wrap gap-3`,children:[(0,I.jsx)(g,{variant:e,children:e[0].toUpperCase()+e.slice(1)}),(0,I.jsx)(g,{variant:e,size:`lg`,children:`Large`}),(0,I.jsx)(g,{variant:e,disabled:!0,children:`Disabled`})]},e)),(0,I.jsx)(g,{loading:!0,children:`Saving`})]}),(0,I.jsx)(N,{title:`Top-bar pill`,children:(0,I.jsx)(`div`,{className:`flex items-center gap-3`,children:(0,I.jsx)(o,{href:`#main`,label:`Tool`,accessibleName:`Add tool`})})}),(0,I.jsxs)(N,{title:`Form controls`,children:[(0,I.jsx)(S,{label:`Tool name`,name:`a`,placeholder:`e.g. Mitre saw`,hint:`What friends will search for`}),(0,I.jsx)(S,{label:`Brand`,name:`b`,defaultValue:`DeWalt`,error:`Keep the brand under 40 characters`}),(0,I.jsx)(S,{label:`Email`,name:`c`,defaultValue:`sam@example.com`,disabled:!0}),(0,I.jsx)(A,{label:`Note`,name:`d`,rows:2,placeholder:`When do you need it, and for how long?`}),(0,I.jsx)(E,{label:`Category`,name:`e`,options:V,placeholder:`Choose a category`}),(0,I.jsx)(E,{label:`Category`,name:`f`,options:V,error:`Choose a category`}),(0,I.jsx)(M,{label:`Visible to friends`,name:`g`,description:`Hidden tools stay in your shed only`,defaultChecked:!0}),(0,I.jsx)(M,{label:`Available to borrow`,name:`h`}),(0,I.jsx)(M,{label:`Disabled`,name:`i`,disabled:!0})]}),(0,I.jsxs)(N,{title:`Cards`,children:[(0,I.jsx)(v,{children:`Raised card, sitting on the foam.`}),(0,I.jsx)(v,{tone:`pocket`,children:`Pocket card, cut into the foam.`})]}),(0,I.jsx)(N,{title:`Badges`,children:(0,I.jsx)(`div`,{className:`flex flex-wrap gap-2`,children:z.map(e=>(0,I.jsx)(m,{tone:e,children:e},e))})}),(0,I.jsx)(N,{title:`Notices`,children:B.map(e=>(0,I.jsx)(w,{tone:e,title:`A ${e} notice`,children:`What happened, and what to do next.`},e))}),(0,I.jsx)(N,{title:`Empty state`,children:(0,I.jsx)(b,{title:`Your shed is empty`,body:`Add the tools you're happy to lend.`,action:(0,I.jsx)(g,{children:`Add a tool`})})}),(0,I.jsx)(N,{title:`Avatars`,children:(0,I.jsxs)(`div`,{className:`flex items-center gap-3`,children:[(0,I.jsx)(f,{name:`Olive Owner`,size:`sm`}),(0,I.jsx)(f,{name:`Ben Borrower`,size:`md`}),(0,I.jsx)(f,{name:`Cara`,size:`lg`})]})}),(0,I.jsx)(N,{title:`Due tags`,children:(0,I.jsxs)(`div`,{className:`flex flex-wrap items-center gap-3`,children:[(0,I.jsx)(u,{due:{label:`Due in 4 days`,tone:`later`,on:``}}),(0,I.jsx)(u,{due:{label:`Due tomorrow`,tone:`soon`,on:``}}),(0,I.jsx)(u,{due:{label:`2 days overdue`,tone:`overdue`,on:``}}),(0,I.jsx)(u,{due:{label:`Returned`,tone:`none`,on:``}})]})}),(0,I.jsx)(N,{title:`Loan card`,children:(0,I.jsx)(`ul`,{className:`flex flex-col gap-2`,children:(0,I.jsx)(l,{card:{id:`1`,href:`#main`,toolName:`Mitre saw`,person:`From Olive`,status:`out`,statusLabel:`Out on loan`,due:{label:`Due tomorrow`,tone:`soon`,on:``},attention:`Olive asked for it back`}})})}),(0,I.jsx)(N,{title:`Timeline`,children:(0,I.jsx)(c,{items:[{id:`1`,label:`You asked to borrow it`,when:`23 Sep 2026, 10:00`,note:`Saturday, for the fence`},{id:`2`,label:`Olive said yes`,when:`23 Sep 2026, 12:14`,note:null}]})}),(0,I.jsx)(N,{title:`Sheet`,children:(0,I.jsx)(P,{})})]})},U=[`AllComponents`],H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  name: "All components",
  render: () => <div className="mx-auto flex max-w-2xl flex-col gap-6 bg-case p-4">
      <Group title="Wordmark">
        <div className="flex flex-col items-start gap-3">
          <Wordmark size="lg" />
          <Wordmark size="md" />
          <Wordmark size="sm" />
        </div>
      </Group>

      <Group title="Buttons">
        {VARIANTS.map(v => <div key={v} className="flex flex-wrap gap-3">
            <Button variant={v}>{v[0].toUpperCase() + v.slice(1)}</Button>
            <Button variant={v} size="lg">
              Large
            </Button>
            <Button variant={v} disabled>
              Disabled
            </Button>
          </div>)}
        <Button loading>Saving</Button>
      </Group>

      <Group title="Top-bar pill">
        <div className="flex items-center gap-3">
          <TopBarPill href="#main" label="Tool" accessibleName="Add tool" />
        </div>
      </Group>

      <Group title="Form controls">
        <Input label="Tool name" name="a" placeholder="e.g. Mitre saw" hint="What friends will search for" />
        <Input label="Brand" name="b" defaultValue="DeWalt" error="Keep the brand under 40 characters" />
        <Input label="Email" name="c" defaultValue="sam@example.com" disabled />
        <Textarea label="Note" name="d" rows={2} placeholder="When do you need it, and for how long?" />
        <Select label="Category" name="e" options={OPTIONS} placeholder="Choose a category" />
        <Select label="Category" name="f" options={OPTIONS} error="Choose a category" />
        <Toggle label="Visible to friends" name="g" description="Hidden tools stay in your shed only" defaultChecked />
        <Toggle label="Available to borrow" name="h" />
        <Toggle label="Disabled" name="i" disabled />
      </Group>

      <Group title="Cards">
        <Card>Raised card, sitting on the foam.</Card>
        <Card tone="pocket">Pocket card, cut into the foam.</Card>
      </Group>

      <Group title="Badges">
        <div className="flex flex-wrap gap-2">
          {BADGES.map(t => <Badge key={t} tone={t}>
              {t}
            </Badge>)}
        </div>
      </Group>

      <Group title="Notices">
        {NOTICES.map(t => <Notice key={t} tone={t} title={\`A \${t} notice\`}>
            What happened, and what to do next.
          </Notice>)}
      </Group>

      <Group title="Empty state">
        <EmptyState title="Your shed is empty" body="Add the tools you're happy to lend." action={<Button>Add a tool</Button>} />
      </Group>

      <Group title="Avatars">
        <div className="flex items-center gap-3">
          <Avatar name="Olive Owner" size="sm" />
          <Avatar name="Ben Borrower" size="md" />
          <Avatar name="Cara" size="lg" />
        </div>
      </Group>

      <Group title="Due tags">
        <div className="flex flex-wrap items-center gap-3">
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
          label: "2 days overdue",
          tone: "overdue",
          on: ""
        }} />
          <DueTag due={{
          label: "Returned",
          tone: "none",
          on: ""
        }} />
        </div>
      </Group>

      <Group title="Loan card">
        <ul className="flex flex-col gap-2">
          <LoanCard card={{
          id: "1",
          href: "#main",
          toolName: "Mitre saw",
          person: "From Olive",
          status: "out",
          statusLabel: "Out on loan",
          due: {
            label: "Due tomorrow",
            tone: "soon",
            on: ""
          },
          attention: "Olive asked for it back"
        }} />
        </ul>
      </Group>

      <Group title="Timeline">
        <Timeline items={[{
        id: "1",
        label: "You asked to borrow it",
        when: "23 Sep 2026, 10:00",
        note: "Saturday, for the fence"
      }, {
        id: "2",
        label: "Olive said yes",
        when: "23 Sep 2026, 12:14",
        note: null
      }]} />
      </Group>

      <Group title="Sheet">
        <SheetDemo />
      </Group>
    </div>
}`,...H.parameters?.docs?.source}}}})))()}W();export{H as AllComponents,U as __namedExportsOrder,L as default};