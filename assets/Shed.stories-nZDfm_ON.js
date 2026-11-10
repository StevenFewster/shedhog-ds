import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t}from"./iframe-DyDTyzGL.js";import{a as n,i as r,m as i,o as a,p as o,r as s}from"./AutoSubmitSelect-nsa5JmaI.js";import{n as c,t as l}from"./PhotoGallery-CjwfxN-P.js";import{a as u,c as d,d as f,f as p,i as m,l as h,n as g,o as _,r as v,s as y,t as b,u as x}from"./ToolForm-Bi3egQrq.js";var S,C,w,T,E,D,O,k,A,j,M,N,P,F,I,L,R,z,B,V,H;function U(){return(U=e((()=>{c(),d(),x(),_(),a(),p(),i(),m(),g(),r(),S=t(),C={title:`Shed`},w=[{value:`drills`,label:`Drills & drivers`},{value:`saws`,label:`Saws`},{value:`garden`,label:`Garden`}],T={render:()=>(0,S.jsxs)(`div`,{className:`flex flex-wrap gap-2`,children:[(0,S.jsx)(n,{status:`available`}),(0,S.jsx)(n,{status:`unavailable`}),(0,S.jsx)(n,{status:`hidden`}),(0,S.jsx)(n,{status:`on-loan`})]})},E={name:`Tool thumbs (the foam slot)`,render:()=>(0,S.jsxs)(`div`,{className:`flex flex-wrap gap-3`,children:[(0,S.jsx)(s,{src:o.drill,alt:`Drill`}),(0,S.jsx)(s,{alt:`No photo`}),(0,S.jsx)(s,{src:o.saw,alt:`Unavailable`,status:`unavailable`}),(0,S.jsx)(s,{alt:`Hidden, no photo`,status:`hidden`})]})},D={name:`Tool cards`,render:()=>(0,S.jsxs)(`ul`,{className:`flex flex-col gap-3`,children:[(0,S.jsx)(v,{href:`#`,name:`Combi drill`,subtitle:`DeWalt DCD796, 18V XR`,categoryName:`Drills & drivers`,status:`available`,coverUrl:o.drill}),(0,S.jsx)(v,{href:`#`,name:`Sliding mitre saw`,subtitle:`Makita LS1019`,categoryName:`Saws`,status:`unavailable`,coverUrl:o.saw}),(0,S.jsx)(v,{href:`#`,name:`Hedge trimmer`,subtitle:``,categoryName:`Garden`,status:`hidden`,coverUrl:null}),(0,S.jsx)(v,{href:`#`,name:`A tool with a really quite long name that has to truncate`,subtitle:`Brand Model-1234567890, Platform`,categoryName:`Other`,status:`available`,coverUrl:null})]})},O={name:`Tool form: new`,render:()=>(0,S.jsx)(b,{action:`#`,categories:w,submitLabel:`Add to shed`,cancelHref:`#`,photoSlots:4})},k={name:`Tool form: edit (battery, details open)`,render:()=>(0,S.jsx)(b,{action:`#`,categories:w,submitLabel:`Save changes`,cancelHref:`#`,values:{name:`Combi drill`,categoryId:`drills`,powerSource:`battery`,brand:`DeWalt`,model:`DCD796`,batteryPlatform:`DeWalt 18V XR`,batteryIncluded:`on`,condition:`good`,visible:`on`,available:`on`}})},A={name:`Tool form: errors`,render:()=>(0,S.jsx)(b,{action:`#`,categories:w,submitLabel:`Add to shed`,cancelHref:`#`,values:{name:``},errors:{name:`Give the tool a name, like "Mitre saw"`,categoryId:`Choose a category`,powerSource:`Choose how it's powered`}})},j={name:`Photo picker`,render:()=>(0,S.jsx)(h,{slots:4})},M={name:`Photo picker: full`,render:()=>(0,S.jsx)(h,{slots:0})},N={render:()=>(0,S.jsx)(u,{state:{q:`drill`,status:`available`},categories:w})},P=[{id:`a`,url:o.drill,width:800,height:600},{id:`b`,url:o.saw,width:800,height:600},{id:`c`,url:o.trimmer,width:800,height:600}],F={render:()=>(0,S.jsx)(l,{name:`Combi drill`,status:`available`,photos:P})},I={name:`Gallery: no photos`,render:()=>(0,S.jsx)(l,{name:`Combi drill`,status:`available`,photos:[]})},L={name:`Photo manager`,render:()=>(0,S.jsx)(y,{toolId:`t1`,photos:P})},R=new File([`x`],`saw.jpg`,{type:`image/jpeg`}),z={ok:!0,suggestion:{values:{name:`Mitre saw`,categoryId:`saws`,powerSource:`corded`,brand:`Makita`},unsure:[`model`,`condition`]}},B={render:()=>(0,S.jsxs)(`form`,{className:`flex flex-col gap-3`,children:[(0,S.jsx)(f,{photo:R,shrink:async e=>({file:e,width:504,height:378}),ask:async()=>z}),(0,S.jsxs)(`label`,{className:`flex flex-col gap-1 text-chalk`,children:[`What is it? `,(0,S.jsx)(`input`,{name:`name`,className:`border border-edge bg-pocket p-2`})]}),(0,S.jsxs)(`label`,{className:`flex flex-col gap-1 text-chalk`,children:[`Brand `,(0,S.jsx)(`input`,{name:`brand`,className:`border border-edge bg-pocket p-2`})]})]})},V={name:`Fill in from photo: can't help`,render:()=>(0,S.jsx)(`form`,{children:(0,S.jsx)(f,{photo:R,shrink:async e=>({file:e,width:504,height:378}),ask:async()=>({ok:!1,message:`That's 20 suggestions today. Fill this one in yourself, or try again tomorrow.`})})})},H=[`StatusBadges`,`Thumbs`,`Cards`,`NewToolForm`,`EditToolForm`,`ToolFormErrors`,`Picker`,`PickerFull`,`Filters`,`Gallery`,`GalleryEmpty`,`Manager`,`FillInFromPhoto`,`FillInFromPhotoProblem`],T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-wrap gap-2">
      <StatusBadge status="available" />
      <StatusBadge status="unavailable" />
      <StatusBadge status="hidden" />
      <StatusBadge status="on-loan" />
    </div>
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  name: "Tool thumbs (the foam slot)",
  render: () => <div className="flex flex-wrap gap-3">
      <ToolThumb src={STORY_PHOTOS.drill} alt="Drill" />
      <ToolThumb alt="No photo" />
      <ToolThumb src={STORY_PHOTOS.saw} alt="Unavailable" status="unavailable" />
      <ToolThumb alt="Hidden, no photo" status="hidden" />
    </div>
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  name: "Tool cards",
  render: () => <ul className="flex flex-col gap-3">
      <ToolCard href="#" name="Combi drill" subtitle="DeWalt DCD796, 18V XR" categoryName="Drills & drivers" status="available" coverUrl={STORY_PHOTOS.drill} />
      <ToolCard href="#" name="Sliding mitre saw" subtitle="Makita LS1019" categoryName="Saws" status="unavailable" coverUrl={STORY_PHOTOS.saw} />
      <ToolCard href="#" name="Hedge trimmer" subtitle="" categoryName="Garden" status="hidden" coverUrl={null} />
      <ToolCard href="#" name="A tool with a really quite long name that has to truncate" subtitle="Brand Model-1234567890, Platform" categoryName="Other" status="available" coverUrl={null} />
    </ul>
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  name: "Tool form: new",
  render: () => <ToolForm action="#" categories={categories} submitLabel="Add to shed" cancelHref="#" photoSlots={4} />
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
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
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  name: "Tool form: errors",
  render: () => <ToolForm action="#" categories={categories} submitLabel="Add to shed" cancelHref="#" values={{
    name: ""
  }} errors={{
    name: 'Give the tool a name, like "Mitre saw"',
    categoryId: "Choose a category",
    powerSource: "Choose how it's powered"
  }} />
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  name: "Photo picker",
  render: () => <PhotoPicker slots={4} />
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  name: "Photo picker: full",
  render: () => <PhotoPicker slots={0} />
}`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  render: () => <ShedFilters state={{
    q: "drill",
    status: "available"
  }} categories={categories} />
}`,...N.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  render: () => <PhotoGallery name="Combi drill" status="available" photos={photos} />
}`,...F.parameters?.docs?.source}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  name: "Gallery: no photos",
  render: () => <PhotoGallery name="Combi drill" status="available" photos={[]} />
}`,...I.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  name: "Photo manager",
  render: () => <PhotoManager toolId="t1" photos={photos} />
}`,...L.parameters?.docs?.source}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  render: () => <form className="flex flex-col gap-3">
      <SuggestFromPhoto photo={storyPhoto} shrink={async f => ({
      file: f,
      width: 504,
      height: 378
    })} ask={async () => suggestion} />
      <label className="flex flex-col gap-1 text-chalk">
        What is it? <input name="name" className="border border-edge bg-pocket p-2" />
      </label>
      <label className="flex flex-col gap-1 text-chalk">
        Brand <input name="brand" className="border border-edge bg-pocket p-2" />
      </label>
    </form>
}`,...B.parameters?.docs?.source},description:{story:`"Fill in from photo" inside a form: press it to see the fields fill (a canned answer, no network).`,...B.parameters?.docs?.description}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  name: "Fill in from photo: can't help",
  render: () => <form>
      <SuggestFromPhoto photo={storyPhoto} shrink={async f => ({
      file: f,
      width: 504,
      height: 378
    })} ask={async () => ({
      ok: false,
      message: "That's 20 suggestions today. Fill this one in yourself, or try again tomorrow."
    })} />
    </form>
}`,...V.parameters?.docs?.source}}}})))()}U();export{D as Cards,k as EditToolForm,B as FillInFromPhoto,V as FillInFromPhotoProblem,N as Filters,F as Gallery,I as GalleryEmpty,L as Manager,O as NewToolForm,j as Picker,M as PickerFull,T as StatusBadges,E as Thumbs,A as ToolFormErrors,H as __namedExportsOrder,C as default};