import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t}from"./iframe-BWqv3mhK.js";import{a as n,i as r,m as i,o as a,p as o,r as s}from"./AutoSubmitSelect-Dr4OMnV7.js";import{n as c,t as l}from"./PhotoGallery-BNXb-OHc.js";import{a as u,c as d,i as f,l as p,n as m,o as h,r as g,s as _,t as v,u as y}from"./ToolForm-DAHqMcOO.js";var b,x,S,C,w,T,E,D,O,k,A,j,M,N,P,F,I;function L(){return(L=e((()=>{c(),d(),y(),h(),a(),i(),f(),m(),r(),b=t(),x={title:`Shed`},S=[{value:`drills`,label:`Drills & drivers`},{value:`saws`,label:`Saws`},{value:`garden`,label:`Garden`}],C={render:()=>(0,b.jsxs)(`div`,{className:`flex flex-wrap gap-2`,children:[(0,b.jsx)(n,{status:`available`}),(0,b.jsx)(n,{status:`unavailable`}),(0,b.jsx)(n,{status:`hidden`}),(0,b.jsx)(n,{status:`on-loan`})]})},w={name:`Tool thumbs (the foam slot)`,render:()=>(0,b.jsxs)(`div`,{className:`flex flex-wrap gap-3`,children:[(0,b.jsx)(s,{src:o.drill,alt:`Drill`}),(0,b.jsx)(s,{alt:`No photo`}),(0,b.jsx)(s,{src:o.saw,alt:`Unavailable`,status:`unavailable`}),(0,b.jsx)(s,{alt:`Hidden, no photo`,status:`hidden`})]})},T={name:`Tool cards`,render:()=>(0,b.jsxs)(`ul`,{className:`flex flex-col gap-3`,children:[(0,b.jsx)(g,{href:`#`,name:`Combi drill`,subtitle:`DeWalt DCD796, 18V XR`,categoryName:`Drills & drivers`,status:`available`,coverUrl:o.drill}),(0,b.jsx)(g,{href:`#`,name:`Sliding mitre saw`,subtitle:`Makita LS1019`,categoryName:`Saws`,status:`unavailable`,coverUrl:o.saw}),(0,b.jsx)(g,{href:`#`,name:`Hedge trimmer`,subtitle:``,categoryName:`Garden`,status:`hidden`,coverUrl:null}),(0,b.jsx)(g,{href:`#`,name:`A tool with a really quite long name that has to truncate`,subtitle:`Brand Model-1234567890, Platform`,categoryName:`Other`,status:`available`,coverUrl:null})]})},E={name:`Tool form: new`,render:()=>(0,b.jsx)(v,{action:`#`,categories:S,submitLabel:`Add to shed`,cancelHref:`#`,photoSlots:4})},D={name:`Tool form: edit (battery, details open)`,render:()=>(0,b.jsx)(v,{action:`#`,categories:S,submitLabel:`Save changes`,cancelHref:`#`,values:{name:`Combi drill`,categoryId:`drills`,powerSource:`battery`,brand:`DeWalt`,model:`DCD796`,batteryPlatform:`DeWalt 18V XR`,batteryIncluded:`on`,condition:`good`,visible:`on`,available:`on`}})},O={name:`Tool form: errors`,render:()=>(0,b.jsx)(v,{action:`#`,categories:S,submitLabel:`Add to shed`,cancelHref:`#`,values:{name:``},errors:{name:`Give the tool a name, like "Mitre saw"`,categoryId:`Choose a category`,powerSource:`Choose how it's powered`}})},k={name:`Photo picker`,render:()=>(0,b.jsx)(p,{slots:4})},A={name:`Photo picker: full`,render:()=>(0,b.jsx)(p,{slots:0})},j={render:()=>(0,b.jsx)(u,{state:{q:`drill`,status:`available`},categories:S})},M=[{id:`a`,url:o.drill,width:800,height:600},{id:`b`,url:o.saw,width:800,height:600},{id:`c`,url:o.trimmer,width:800,height:600}],N={render:()=>(0,b.jsx)(l,{name:`Combi drill`,status:`available`,photos:M})},P={name:`Gallery: no photos`,render:()=>(0,b.jsx)(l,{name:`Combi drill`,status:`available`,photos:[]})},F={name:`Photo manager`,render:()=>(0,b.jsx)(_,{toolId:`t1`,photos:M})},I=[`StatusBadges`,`Thumbs`,`Cards`,`NewToolForm`,`EditToolForm`,`ToolFormErrors`,`Picker`,`PickerFull`,`Filters`,`Gallery`,`GalleryEmpty`,`Manager`],C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-wrap gap-2">
      <StatusBadge status="available" />
      <StatusBadge status="unavailable" />
      <StatusBadge status="hidden" />
      <StatusBadge status="on-loan" />
    </div>
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  name: "Tool thumbs (the foam slot)",
  render: () => <div className="flex flex-wrap gap-3">
      <ToolThumb src={STORY_PHOTOS.drill} alt="Drill" />
      <ToolThumb alt="No photo" />
      <ToolThumb src={STORY_PHOTOS.saw} alt="Unavailable" status="unavailable" />
      <ToolThumb alt="Hidden, no photo" status="hidden" />
    </div>
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  name: "Tool cards",
  render: () => <ul className="flex flex-col gap-3">
      <ToolCard href="#" name="Combi drill" subtitle="DeWalt DCD796, 18V XR" categoryName="Drills & drivers" status="available" coverUrl={STORY_PHOTOS.drill} />
      <ToolCard href="#" name="Sliding mitre saw" subtitle="Makita LS1019" categoryName="Saws" status="unavailable" coverUrl={STORY_PHOTOS.saw} />
      <ToolCard href="#" name="Hedge trimmer" subtitle="" categoryName="Garden" status="hidden" coverUrl={null} />
      <ToolCard href="#" name="A tool with a really quite long name that has to truncate" subtitle="Brand Model-1234567890, Platform" categoryName="Other" status="available" coverUrl={null} />
    </ul>
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  name: "Tool form: new",
  render: () => <ToolForm action="#" categories={categories} submitLabel="Add to shed" cancelHref="#" photoSlots={4} />
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  name: "Tool form: edit (battery, details open)",
  render: () => <ToolForm action="#" categories={categories} submitLabel="Save changes" cancelHref="#" values={{
    name: "Combi drill",
    categoryId: "drills",
    powerSource: "battery",
    brand: "DeWalt",
    model: "DCD796",
    batteryPlatform: "DeWalt 18V XR",
    batteryIncluded: "on",
    condition: "good",
    visible: "on",
    available: "on"
  }} />
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  name: "Tool form: errors",
  render: () => <ToolForm action="#" categories={categories} submitLabel="Add to shed" cancelHref="#" values={{
    name: ""
  }} errors={{
    name: 'Give the tool a name, like "Mitre saw"',
    categoryId: "Choose a category",
    powerSource: "Choose how it's powered"
  }} />
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  name: "Photo picker",
  render: () => <PhotoPicker slots={4} />
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  name: "Photo picker: full",
  render: () => <PhotoPicker slots={0} />
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  render: () => <ShedFilters state={{
    q: "drill",
    status: "available"
  }} categories={categories} />
}`,...j.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  render: () => <PhotoGallery name="Combi drill" status="available" photos={photos} />
}`,...N.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  name: "Gallery: no photos",
  render: () => <PhotoGallery name="Combi drill" status="available" photos={[]} />
}`,...P.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  name: "Photo manager",
  render: () => <PhotoManager toolId="t1" photos={photos} />
}`,...F.parameters?.docs?.source}}}})))()}L();export{T as Cards,D as EditToolForm,j as Filters,N as Gallery,P as GalleryEmpty,F as Manager,E as NewToolForm,k as Picker,A as PickerFull,C as StatusBadges,w as Thumbs,O as ToolFormErrors,I as __namedExportsOrder,x as default};