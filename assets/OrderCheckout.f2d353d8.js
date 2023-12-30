import{D as X,n as Y,_ as ee,r as T,Q as $,j as te,o as u,k as S,p as v,G as se,i as N,q as le,K as ae}from"./FooterComponent.d17fd1d1.js";import{Q as oe}from"./QImg.e9a086cd.js";import{a5 as ne,r as n,j as ue,q as de,t as d,u as _,v as s,x as l,y as o,a7 as z,ab as W,F as U,C as I,D as V,E as F,A as O,a6 as i,z as c,L as ie}from"./index.71b39bf9.js";const re=l("img",{src:"static/logo.png",alt:"",style:{width:"100px"}},null,-1),ce={class:"row justify-center items-center ys"},pe=l("span",{class:"text-deep-purple-14 text-bold"},"Information",-1),me=l("div",null,"Payment",-1),ve=l("div",{class:"text-h6 ys"},"Shipping Addresses",-1),_e=l("div",{class:"text-caption"}," Select an address where order is to be delivered ",-1),fe={class:"text-center"},ye=l("div",null,"Add Address",-1),xe=["onClick"],he={class:"text-body1"},we={class:"text-bold"},be={class:"row justify-between"},ge={class:"text-dark"},ke={class:"text-caption text-grey-6"},qe=l("div",null,[l("div",{class:"text-body1"},"Subtotal:"),l("div",{class:"text-caption"},"Before Taxes and Fees")],-1),Ve={class:"text-subtitle1"},Ce=l("span",{class:"text-bold"},"$",-1),$e={class:"row justify-between"},Se=l("div",{class:"text-body1"},"Taxes and Fees:",-1),ze={class:"text-subtitle1"},Fe=l("span",{class:"text-bold"},"$",-1),Qe={class:"row justify-end text-h6"},je=l("span",{class:"on-left"},"Total: ",-1),Ae={class:"row justify-center q-mt-xl"},Me={key:0},Ne={key:1,class:"row items-center justify-evenly"},De={__name:"OrderCheckout",setup(Ue){const B=ne(),L=X(),D=Y(),E=n(!1),f=n(0),Q=n(0),j=n([]),A=n([]),G=async()=>{j.value=[],A.value=[],f.value=0,Q.value=0;for(const a of D.items)try{const t=await I.get(`/product/${a.product_id}`);j.value.push(t.data),A.value.push(a.quantity),f.value+=t.data.price*a.quantity}catch(t){console.error(t)}Q.value=f.value*.06625},K=async()=>{if(r.value===null){const t={first_name:x.value,last_name:h.value,street:w.value,street2:b.value,city:g.value,state:k.value,zip_code:q.value};try{const e=await I.post(`address/add/${B.user.value.sub.split("|")[1]}`,t);r.value={id:e.data.id,first_name:e.data.first_name,last_name:e.data.last_name,street:e.data.street,street2:e.data.street2,city:e.data.city,state:e.data.state,zip_code:e.data.zip_code}}catch(e){console.error(e)}}const a={cartItems:D.items,address_id:r.value.id};try{const t=await I.post(`/order/checkout/session?customer_email=${B.user.value.email}`,a);window.location.href=t.data.url}catch(t){console.error(t)}},p=n(window.innerWidth),P=()=>{p.value=window.innerWidth};ue(async()=>{window.addEventListener("resize",P),await G()}),de(()=>{window.removeEventListener("resize",P)});const y=[L.getSelectedAddress,...L.getAddresses],R=a=>`${a.street}${a.street2?" "+a.street2:""}, ${a.city} ${a.state} ${a.zip_code} ${a.country}`,m=n(!1),r=n(y[0]),C=n(null),Z=ae,x=n(null),h=n(null),w=n(null),b=n(null),g=n(null),k=n(null),q=n(null),H=a=>{r.value=a,m.value=!1,x.value=a.first_name,h.value=a.last_name,w.value=a.street,b.value=a.street2?a.street2:null,g.value=a.city,k.value=a.state,q.value=a.zip_code},J=()=>{r.value=null,m.value=!0,x.value=null,h.value=null,w.value=null,b.value=null,g.value=null,k.value=null,q.value=null};return(a,t)=>(d(),_(U,null,[s(ee),l("div",{class:z(["q-my-xl main",p.value>1e3?"row justify-around":""])},[s(T,{class:z(p.value>1e3?"":"q-mx-xl q-mb-xl"),style:W([{height:"fit-content"},p.value>1e3?"width: 100%; max-width: 60%;":""])},{default:o(()=>[s(u,{class:"text-center"},{default:o(()=>[re,l("div",ce,[l("div",null,[l("span",{class:"cursor-pointer",onClick:t[0]||(t[0]=e=>a.$router.push("/cart"))}," Cart "),s(S,{name:"chevron_right",size:"24px"})]),l("div",null,[pe,s(S,{name:"chevron_right",size:"24px"})]),me])]),_:1}),s(u,null,{default:o(()=>[ve,_e]),_:1}),s(u,{class:"q-pt-none"},{default:o(()=>[m.value?F("",!0):(d(),V($,{key:0,class:"full-width",style:{border:"2px solid grey","border-radius":"1rem"},flat:"",color:"grey-6",onClick:t[1]||(t[1]=e=>J())},{default:o(()=>[l("div",fe,[s(S,{name:"add",size:"30px"}),ye])]),_:1})),(d(!0),_(U,null,O(y.slice(0,C.value?y.length:3),e=>(d(),_("div",{class:z(["cursor-pointer q-my-md q-pa-lg",e.id===(r.value?r.value.id:r.value)?"selected-address":"address"]),key:e.id,onClick:M=>H(e)},[l("div",he,[l("div",we,i(e.first_name)+" "+i(e.last_name),1),c(" "+i(R(e)),1)])],10,xe))),128))]),_:1}),y.length>3?(d(),V(u,{key:0,class:"q-pt-none",align:"right"},{default:o(()=>[l("div",{class:"q-pa-sm text-grey-6 text-caption cursor-pointer",style:{width:"fit-content"},onClick:t[2]||(t[2]=e=>C.value=!C.value)},i(C.value?"View Less":"View More..."),1)]),_:1})):F("",!0),m.value?(d(),V(u,{key:1,class:"q-py-none"},{default:o(()=>[s($,{class:"full-width",label:"Cancel",color:"red",flat:"",onClick:t[3]||(t[3]=e=>(m.value=!1,r.value=y[0]))})]),_:1})):F("",!0),m.value?(d(),V(u,{key:2,class:"q-pt-none"},{default:o(()=>[s(v,{class:"q-my-md",label:"First Name",modelValue:x.value,"onUpdate:modelValue":t[4]||(t[4]=e=>x.value=e),modelModifiers:{trim:!0},standout:"bg-grey-3 text-deep-purple-14","input-class":"text-dark",dense:""},null,8,["modelValue"]),s(v,{label:"Last Name",modelValue:h.value,"onUpdate:modelValue":t[5]||(t[5]=e=>h.value=e),modelModifiers:{trim:!0},standout:"bg-grey-3 text-deep-purple-14 ","input-class":"text-dark",dense:""},null,8,["modelValue"]),s(v,{class:"q-my-md",label:"Street Address",modelValue:w.value,"onUpdate:modelValue":t[6]||(t[6]=e=>w.value=e),modelModifiers:{trim:!0},standout:"bg-grey-3 text-deep-purple-14","input-class":"text-dark",dense:""},null,8,["modelValue"]),s(v,{label:"Apt, suite, unit, building, floor, etc.",standout:"bg-grey-3 text-deep-purple-14","input-class":"text-dark",modelValue:b.value,"onUpdate:modelValue":t[7]||(t[7]=e=>b.value=e),modelModifiers:{trim:!0},dense:""},null,8,["modelValue"]),s(v,{class:"q-my-md",label:"City",standout:"bg-grey-3 text-deep-purple-14","input-class":"text-dark",modelValue:g.value,"onUpdate:modelValue":t[8]||(t[8]=e=>g.value=e),modelModifiers:{trim:!0},dense:""},null,8,["modelValue"]),l("div",be,[s(se,{standout:"bg-grey-3 text-deep-purple-14",style:{width:"100%","max-width":"49%"},label:"State","emit-value":"","map-options":"",modelValue:k.value,"onUpdate:modelValue":t[9]||(t[9]=e=>k.value=e),options:ie(Z),dense:""},{"selected-item":o(e=>[l("span",ge,i(e.opt.label),1)]),_:1},8,["modelValue","options"]),s(v,{label:"ZIP Code",modelValue:q.value,"onUpdate:modelValue":t[10]||(t[10]=e=>q.value=e),modelModifiers:{trim:!0},standout:"bg-grey-3 text-deep-purple-14","input-class":"text-dark",mask:"#####",dense:"",style:{width:"100%","max-width":"49%"}},null,8,["modelValue"])])]),_:1})):F("",!0)]),_:1},8,["class","style"]),l("div",{class:z(p.value>1e3?"":"q-mx-xl"),style:W(p.value>1e3?"width: 100%; max-width: 30%;":"")},[s(T,{class:"oswald",style:{height:"fit-content"},bordered:""},{default:o(()=>[s(u,{class:"q-mx-xs"},{default:o(()=>[s(u,{class:"text-h6 q-pa-none"},{default:o(()=>[c(" Checkout Details: ")]),_:1}),s(N),(d(!0),_(U,null,O(j.value,(e,M)=>(d(),V(u,{key:M},{default:o(()=>[s(u,{horizontal:""},{default:o(()=>[s(oe,{src:`static/products/${e.image}`,width:"48px",height:"48px",ratio:1,style:{"border-radius":"0.5rem"}},null,8,["src"]),s(u,{class:"text-body2 q-pa-none q-pl-md"},{default:o(()=>[c(i(e.name)+" ",1),l("div",ke,i(A.value[M])+" @ "+i(e.price.toFixed(2))+" each ",1)]),_:2},1024)]),_:2},1024)]),_:2},1024))),128)),s(N),s(u,{class:"row justify-between q-pa-none q-pt-sm"},{default:o(()=>[qe,l("div",Ve,[Ce,c(" "+i(f.value.toFixed(2)),1)])]),_:1})]),_:1}),s(u,{class:"q-mx-sm"},{default:o(()=>[l("div",$e,[Se,l("div",ze,[Fe,c(" "+i(Q.value.toFixed(2)),1)])])]),_:1}),s(N,{inset:""}),s(u,{class:"q-mx-sm"},{default:o(()=>[l("div",Qe,[je,c("$"+i((f.value*1.06625).toFixed(2)),1)])]),_:1})]),_:1}),l("div",Ae,[s($,{class:"full-width rounded-borders q-mb-md",label:"Continue Shopping",color:"dark",push:"",onClick:t[11]||(t[11]=e=>a.$router.push("/"))}),s($,{class:"full-width rounded-borders",color:"deep-purple-14",push:"",onClick:t[12]||(t[12]=e=>(K(),E.value=!0))},{default:o(()=>[E.value?(d(),_("div",Ne,[s(le,{color:"white",size:"1em",thickness:8})])):(d(),_("div",Me,[s(S,{name:"confirmation_number",class:"on-left"}),c(" Place Order ")]))]),_:1})])],6)],2),s(te)],64))}};export{De as default};
