(function(){"use strict";var t={7983:function(t,e,a){var n=a(5130),l=a(6768);const s={id:"app"},d={class:"menu"},i={class:"menu-list"};function u(t,e){const a=(0,l.g2)("router-link"),n=(0,l.g2)("router-view");return(0,l.uX)(),(0,l.CE)("div",s,[(0,l.Lk)("article",d,[(0,l.Lk)("ul",i,[(0,l.Lk)("li",null,[(0,l.bF)(a,{class:"menu-item",to:"/"},{default:(0,l.k6)((()=>e[0]||(e[0]=[(0,l.eW)("Home")]))),_:1})]),(0,l.Lk)("li",null,[(0,l.bF)(a,{class:"menu-item",to:"/about"},{default:(0,l.k6)((()=>e[1]||(e[1]=[(0,l.eW)("Study")]))),_:1})]),(0,l.Lk)("li",null,[(0,l.bF)(a,{class:"menu-item",to:"/animation"},{default:(0,l.k6)((()=>e[2]||(e[2]=[(0,l.eW)("Animation")]))),_:1})]),(0,l.Lk)("li",null,[(0,l.bF)(a,{class:"menu-item",to:"/guideHome"},{default:(0,l.k6)((()=>e[3]||(e[3]=[(0,l.eW)("Guide")]))),_:1})])])]),(0,l.bF)(n)])}var o=a(1241);const b={},r=(0,o.A)(b,[["render",u],["__scopeId","data-v-daa0f19c"]]);var c=r,v=a(1387),p=a(4232);const m={class:"bouncy-text"};var k={__name:"HelloWorld",props:{msg:String},setup(t){const e=t;return(t,a)=>((0,l.uX)(),(0,l.CE)("div",null,[(0,l.Lk)("p",m,[((0,l.uX)(!0),(0,l.CE)(l.FK,null,(0,l.pI)(e.msg,((t,e)=>((0,l.uX)(),(0,l.CE)("span",{key:e},(0,p.v_)(t),1)))),128))])]))}};const y=(0,o.A)(k,[["__scopeId","data-v-9debeeea"]]);var L=y;const f={class:"home"},h="SSOMI'sGuide";var g={__name:"HomeView",setup(t){return(t,e)=>((0,l.uX)(),(0,l.CE)("div",f,[(0,l.bF)(L,{msg:h})]))}};const _=(0,o.A)(g,[["__scopeId","data-v-5d893b9b"]]);var x=_,w=(a(8992),a(4520),a(144));const z=["onUpdate:modelValue"],F=["onClick"],T=["disabled"],C={key:0},W={key:1};var E={__name:"StudyView",setup(t){let e=0;const a=(0,w.KR)(""),s=(0,w.KR)(!1),d=(0,w.KR)([{id:e++,text:"HTML 배우기",done:!0},{id:e++,text:"JavaScript 배우기",done:!0},{id:e++,text:"Vue 배우기",done:!1}]),i=(0,l.EW)((()=>s.value?d.value.filter((t=>!t.done)):d.value));function u(){d.value=[...d.value,{id:e++,text:a.value,done:!1}],a.value=""}function o(t){d.value=d.value.filter((e=>e!==t))}const b=(0,w.KR)(null);(0,l.sV)((()=>{b.value.textContent="마운트 되었어요!"}));const r=(0,w.KR)(1),c=(0,w.KR)(null);async function v(){c.value=null;const t=await fetch(`https://jsonplaceholder.typicode.com/todos/${r.value}`);c.value=await t.json()}return v(),(0,l.wB)(r,v),(t,e)=>((0,l.uX)(),(0,l.CE)(l.FK,null,[(0,l.Lk)("section",null,[(0,l.Lk)("form",{onSubmit:(0,n.D$)(u,["prevent"])},[(0,l.bo)((0,l.Lk)("input",{"onUpdate:modelValue":e[0]||(e[0]=t=>a.value=t),required:"",placeholder:"new todo"},null,512),[[n.Jo,a.value]]),e[3]||(e[3]=(0,l.Lk)("button",{class:"addBtn"},"Add Todo",-1))],32),(0,l.Lk)("ul",null,[((0,l.uX)(!0),(0,l.CE)(l.FK,null,(0,l.pI)(i.value,(t=>((0,l.uX)(),(0,l.CE)("li",{key:t.id},[(0,l.bo)((0,l.Lk)("input",{type:"checkbox","onUpdate:modelValue":e=>t.done=e},null,8,z),[[n.lH,t.done]]),(0,l.Lk)("span",{class:(0,p.C4)({done:t.done})},(0,p.v_)(t.text),3),(0,l.Lk)("button",{class:"deleteBtn",onClick:e=>o(t)},"X",8,F)])))),128))]),(0,l.Lk)("button",{class:"todoBtn",onClick:e[1]||(e[1]=t=>s.value=!s.value)},(0,p.v_)(s.value?"show all":"Hide completed"),1)]),(0,l.Lk)("section",null,[(0,l.Lk)("p",{ref_key:"pElementRef",ref:b},"안녕",512)]),(0,l.Lk)("section",null,[(0,l.Lk)("p",null,"할 일 id: "+(0,p.v_)(r.value),1),(0,l.Lk)("button",{class:"nextTodoBtn",onClick:e[2]||(e[2]=t=>r.value++),disabled:!c.value},"다음 할 일 가져오기",8,T),c.value?((0,l.uX)(),(0,l.CE)("pre",W,(0,p.v_)(c.value),1)):((0,l.uX)(),(0,l.CE)("p",C,"로딩..."))]),e[4]||(e[4]=(0,l.Lk)("section",null,null,-1))],64))}};const S=(0,o.A)(E,[["__scopeId","data-v-6c15f2da"]]);var A=S;const H={class:"challenge","data-challenge":"12"};function B(t,e){return(0,l.uX)(),(0,l.CE)("section",H,e[0]||(e[0]=[(0,l.Fv)('<div class="challenge-wrap" data-v-4c18bbe8><div class="mdl-wrap" data-v-4c18bbe8><div class="ani-snow" data-v-4c18bbe8></div><div class="ani-snow2" data-v-4c18bbe8></div><div class="challenge-today-walking" data-v-4c18bbe8><div class="today-walking-tit" data-v-4c18bbe8><span data-v-4c18bbe8>오늘의 걸음수</span><h2 data-v-4c18bbe8><span data-v-4c18bbe8>7,002</span> 걸음</h2></div><button type="button" class="linkup" data-v-4c18bbe8>걸음수 연동하러 가기</button></div><div class="ani-deer" data-v-4c18bbe8></div></div></div>',1)]))}const G={},O=(0,o.A)(G,[["render",B],["__scopeId","data-v-4c18bbe8"]]);var X=O;const j={class:"guidemenu"},I={class:"guidemenu-list"};function K(t,e){const a=(0,l.g2)("router-link");return(0,l.uX)(),(0,l.CE)("article",j,[(0,l.Lk)("ul",I,[(0,l.Lk)("li",null,[(0,l.bF)(a,{class:"guidemenu-item",to:"/guideHome/guideButton"},{default:(0,l.k6)((()=>e[0]||(e[0]=[(0,l.eW)("Button")]))),_:1})]),(0,l.Lk)("li",null,[(0,l.bF)(a,{class:"guidemenu-item",to:"/guideHome/guideText"},{default:(0,l.k6)((()=>e[1]||(e[1]=[(0,l.eW)("Text")]))),_:1})])])])}const N={},R=(0,o.A)(N,[["render",K],["__scopeId","data-v-133435b5"]]);var M=R,P={__name:"GuideHome",setup(t){return(t,e)=>{const a=(0,l.g2)("router-view");return(0,l.uX)(),(0,l.CE)(l.FK,null,[(0,l.bF)(M),(0,l.bF)(a)],64)}}};const V=P;var Y=V;const U={class:"guide"},q={class:"guide-box"},D={class:"guide-btn-box"},$={class:"mdl-btn-wrap"},J=["data-size","data-style"],Q=["data-size","data-style","disabled"],Z={class:"mdl-btn-wrap"},tt=["data-size","data-style"],et=["data-size","data-style","disabled"],at={class:"mdl-btn-wrap"},nt=["data-size","data-style"],lt=["data-size","data-style","disabled"],st={class:"mdl-btn-wrap"},dt=["data-size","data-style"],it=["data-size","data-style","disabled"],ut={class:"mdl-btn-wrap"},ot=["data-size","data-style"],bt=["data-size","data-style","disabled"],rt={class:"mdl-btn-wrap"},ct=["data-size","data-style"],vt=["data-size","data-style","disabled"],pt={class:"mdl-btn-wrap"},mt=["data-size","data-style"],kt=["data-size","data-style","disabled"],yt={class:"mdl-btn-wrap"},Lt=["data-size","data-style"],ft=["data-size","data-style","disabled"],ht={class:"mdl-btn-wrap"},gt=["data-size","data-style"],_t=["data-size","data-style","disabled"],xt={class:"mdl-btn-wrap"},wt=["data-size","data-style"],zt=["data-size","data-style","disabled"],Ft={class:"mdl-btn-wrap"},Tt=["data-size","data-style"],Ct=["data-size","data-style","disabled"],Wt={class:"mdl-btn-wrap"},Et=["data-size","data-style"],St=["data-size","data-style","disabled"],At={class:"mdl-btn-wrap"},Ht=["data-size","data-style"],Bt=["data-size","data-style","disabled"],Gt={class:"mdl-btn-wrap"},Ot=["data-size","data-style"],Xt=["data-size","data-style","disabled"],jt=["disabled"];var It={__name:"GuideButton",setup(t){const e={large:"large",medium:"medium",small:"small"},a={btnFiled:"filed",btnYellow:"tonal-yellow",btnGray:"tonal-gray",btnLine:"outlined",btnLineS:"outlined-s"},n={btnText:"시작하기"},s=(0,w.KR)(!0);return(t,d)=>((0,l.uX)(),(0,l.CE)("article",U,[d[6]||(d[6]=(0,l.Fv)('<h2 data-v-03ea2331>Button</h2><p class="guide-txt" data-v-03ea2331> 버튼의 높이에 따라 Large/Medium/Small로 나뉘며, 동일한 크기의 버튼에서도 중요도에 따라 Filled부터, 눈에 띄는 컬러부터 사용합니다. 가이드는 너비 375px을 기준으로 하며, Full 또는 Half 사용시 디바이스의 너비에 따라 달라집니다. 사용자에게 많은 선택과 행동을 요구하는 것은 혼란을 줄 수 있어 한 페이지에서 최소한의 버튼을 사용하도록 합니다. </p><h3 data-v-03ea2331>Guide wrap</h3><div class="guide-box" data-v-03ea2331><div class="guide-wrap" data-v-03ea2331><div style="width:100%;height:4rem;position:relative;" data-v-03ea2331><div class="guide-item" data-v-03ea2331></div></div></div><hr class="line" data-v-03ea2331><div class="guide-wrap" data-v-03ea2331><div style="width:100%;height:4rem;position:relative;" data-v-03ea2331><div class="guide-item" data-v-03ea2331></div></div><div style="width:100%;height:4rem;position:relative;" data-v-03ea2331><div class="guide-item" data-v-03ea2331></div></div></div><hr class="line" data-v-03ea2331><div class="guide-wrap" data-v-03ea2331><div style="width:10rem;height:4rem;position:relative;" data-v-03ea2331><div class="guide-item" data-v-03ea2331></div></div></div></div><h3 data-v-03ea2331>New</h3>',5)),(0,l.Lk)("div",q,[(0,l.Lk)("div",D,[(0,l.Lk)("h4",null,(0,p.v_)(e.large),1),(0,l.Lk)("div",$,[(0,l.Lk)("button",{type:"button",class:"mdl-btn","data-size":e.large,"data-style":a.btnFiled},[(0,l.Lk)("span",null,(0,p.v_)(n.btnText),1)],8,J),(0,l.Lk)("button",{type:"button",class:"mdl-btn","data-size":e.large,"data-style":a.btnFiled,disabled:s.value},[(0,l.Lk)("span",null,(0,p.v_)(n.btnText),1)],8,Q)]),(0,l.Lk)("div",Z,[(0,l.Lk)("button",{type:"button",class:"mdl-btn","data-size":e.large,"data-style":a.btnYellow},[(0,l.Lk)("span",null,(0,p.v_)(n.btnText),1)],8,tt),(0,l.Lk)("button",{type:"button",class:"mdl-btn","data-size":e.large,"data-style":a.btnYellow,disabled:s.value},[(0,l.Lk)("span",null,(0,p.v_)(n.btnText),1)],8,et)]),(0,l.Lk)("div",at,[(0,l.Lk)("button",{type:"button",class:"mdl-btn","data-size":e.large,"data-style":a.btnGray},[(0,l.Lk)("span",null,(0,p.v_)(n.btnText),1)],8,nt),(0,l.Lk)("button",{type:"button",class:"mdl-btn","data-size":e.large,"data-style":a.btnGray,disabled:s.value},[(0,l.Lk)("span",null,(0,p.v_)(n.btnText),1)],8,lt)]),(0,l.Lk)("div",st,[(0,l.Lk)("button",{type:"button",class:"mdl-btn","data-size":e.large,"data-style":a.btnLine},[(0,l.Lk)("span",null,(0,p.v_)(n.btnText),1)],8,dt),(0,l.Lk)("button",{type:"button",class:"mdl-btn","data-size":e.large,"data-style":a.btnLine,disabled:s.value},[(0,l.Lk)("span",null,(0,p.v_)(n.btnText),1)],8,it)]),d[2]||(d[2]=(0,l.Lk)("hr",{class:"line"},null,-1)),(0,l.Lk)("h4",null,(0,p.v_)(e.medium),1),(0,l.Lk)("div",ut,[(0,l.Lk)("button",{type:"button",class:"mdl-btn","data-size":e.medium,"data-style":a.btnFiled},[(0,l.Lk)("span",null,(0,p.v_)(n.btnText),1)],8,ot),(0,l.Lk)("button",{type:"button",class:"mdl-btn","data-size":e.medium,"data-style":a.btnFiled,disabled:s.value},[(0,l.Lk)("span",null,(0,p.v_)(n.btnText),1)],8,bt)]),(0,l.Lk)("div",rt,[(0,l.Lk)("button",{type:"button",class:"mdl-btn","data-size":e.medium,"data-style":a.btnYellow},[(0,l.Lk)("span",null,(0,p.v_)(n.btnText),1)],8,ct),(0,l.Lk)("button",{type:"button",class:"mdl-btn","data-size":e.medium,"data-style":a.btnYellow,disabled:s.value},[(0,l.Lk)("span",null,(0,p.v_)(n.btnText),1)],8,vt)]),(0,l.Lk)("div",pt,[(0,l.Lk)("button",{type:"button",class:"mdl-btn","data-size":e.medium,"data-style":a.btnGray},[(0,l.Lk)("span",null,(0,p.v_)(n.btnText),1)],8,mt),(0,l.Lk)("button",{type:"button",class:"mdl-btn","data-size":e.medium,"data-style":a.btnGray,disabled:s.value},[(0,l.Lk)("span",null,(0,p.v_)(n.btnText),1)],8,kt)]),(0,l.Lk)("div",yt,[(0,l.Lk)("button",{type:"button",class:"mdl-btn","data-size":e.medium,"data-style":a.btnLine},[(0,l.Lk)("span",null,(0,p.v_)(n.btnText),1)],8,Lt),(0,l.Lk)("button",{type:"button",class:"mdl-btn","data-size":e.medium,"data-style":a.btnLine,disabled:s.value},[(0,l.Lk)("span",null,(0,p.v_)(n.btnText),1)],8,ft)]),(0,l.Lk)("div",ht,[(0,l.Lk)("button",{type:"button",class:"mdl-btn","data-size":e.medium,"data-style":a.btnLineS},[(0,l.Lk)("span",null,(0,p.v_)(n.btnText),1)],8,gt),(0,l.Lk)("button",{type:"button",class:"mdl-btn","data-size":e.medium,"data-style":a.btnLineS,disabled:s.value},[(0,l.Lk)("span",null,(0,p.v_)(n.btnText),1)],8,_t)]),d[3]||(d[3]=(0,l.Lk)("hr",{class:"line"},null,-1)),(0,l.Lk)("h4",null,(0,p.v_)(e.small),1),(0,l.Lk)("div",xt,[(0,l.Lk)("button",{type:"button",class:"mdl-btn","data-size":e.small,"data-style":a.btnFiled},[(0,l.Lk)("span",null,(0,p.v_)(n.btnText),1)],8,wt),(0,l.Lk)("button",{type:"button",class:"mdl-btn","data-size":e.small,"data-style":a.btnFiled,disabled:s.value},[(0,l.Lk)("span",null,(0,p.v_)(n.btnText),1)],8,zt)]),(0,l.Lk)("div",Ft,[(0,l.Lk)("button",{type:"button",class:"mdl-btn","data-size":e.small,"data-style":a.btnYellow},[(0,l.Lk)("span",null,(0,p.v_)(n.btnText),1)],8,Tt),(0,l.Lk)("button",{type:"button",class:"mdl-btn","data-size":e.small,"data-style":a.btnYellow,disabled:s.value},[(0,l.Lk)("span",null,(0,p.v_)(n.btnText),1)],8,Ct)]),(0,l.Lk)("div",Wt,[(0,l.Lk)("button",{type:"button",class:"mdl-btn","data-size":e.small,"data-style":a.btnGray},[(0,l.Lk)("span",null,(0,p.v_)(n.btnText),1)],8,Et),(0,l.Lk)("button",{type:"button",class:"mdl-btn","data-size":e.small,"data-style":a.btnGray,disabled:s.value},[(0,l.Lk)("span",null,(0,p.v_)(n.btnText),1)],8,St)]),(0,l.Lk)("div",At,[(0,l.Lk)("button",{type:"button",class:"mdl-btn","data-size":e.small,"data-style":a.btnLine},[(0,l.Lk)("span",null,(0,p.v_)(n.btnText),1)],8,Ht),(0,l.Lk)("button",{type:"button",class:"mdl-btn","data-size":e.small,"data-style":a.btnLine,disabled:s.value},[(0,l.Lk)("span",null,(0,p.v_)(n.btnText),1)],8,Bt)]),(0,l.Lk)("div",Gt,[(0,l.Lk)("button",{type:"button",class:"mdl-btn","data-size":e.small,"data-style":a.btnLineS},[(0,l.Lk)("span",null,(0,p.v_)(n.btnText),1)],8,Ot),(0,l.Lk)("button",{type:"button",class:"mdl-btn","data-size":e.small,"data-style":a.btnLineS,disabled:s.value},[(0,l.Lk)("span",null,(0,p.v_)(n.btnText),1)],8,Xt)]),d[4]||(d[4]=(0,l.Lk)("hr",{class:"line"},null,-1)),d[5]||(d[5]=(0,l.Lk)("h4",null,"Text",-1)),(0,l.Lk)("div",null,[d[1]||(d[1]=(0,l.Lk)("button",{type:"button",class:"mdl-btn"},[(0,l.Lk)("span",null,"7일간 보지 않기")],-1)),(0,l.Lk)("button",{type:"button",class:"mdl-btn",disabled:s.value},d[0]||(d[0]=[(0,l.Lk)("span",null,"7일간 보지 않기",-1)]),8,jt)])])])]))}};const Kt=(0,o.A)(It,[["__scopeId","data-v-03ea2331"]]);var Nt=Kt;const Rt={class:"guide"},Mt={class:"guide-box"},Pt={class:"guide-wrap"},Vt={class:"h-1"},Yt={class:"h-2"},Ut={class:"h-3"},qt={class:"h-4"},Dt={class:"h-5"},$t={class:"guide-box"},Jt={class:"guide-wrap"},Qt={class:"body-1-700"},Zt={class:"body-1-400"},te={class:"body-2-700"},ee={class:"body-2-500"},ae={class:"body-2-400"},ne={class:"body-2-300"},le={class:"body-3-700"},se={class:"body-3-500"},de={class:"body-3-400"},ie={class:"body-4-700"},ue={class:"body-4-500"},oe={class:"body-4-400"},be={class:"body-4-300"},re={class:"guide-box"},ce={class:"guide-wrap"},ve={class:"em-1"},pe={class:"guide-box"},me={class:"guide-wrap"},ke={class:"cpt-1-400"},ye={class:"cpt-1-300"},Le={class:"cpt-2"};function fe(t,e){const a=(0,l.g2)("guide");return(0,l.uX)(),(0,l.CE)("article",Rt,[e[25]||(e[25]=(0,l.Lk)("h2",null,"Text",-1)),e[26]||(e[26]=(0,l.Lk)("p",{class:"guide-txt"},[(0,l.eW)(" 가독성을 고려하여 폰트의 Size와 Weight를 텍스트 스타일로 지정해 디자인과 개발 효율을 높이는 것을 목표로 합니다."),(0,l.Lk)("br"),(0,l.eW)(" 1줄이상의 행간값은 동일하게 가져가며, 디바이스의 너비에 따라 확대 또는 축소됩니다. "),(0,l.Lk)("br"),(0,l.eW)(" 가이드 행간은 너비 375px을 기준이며, 1px=0.1rem으로 퍼블에서 적용된다. "),(0,l.Lk)("br"),(0,l.eW)(" 예) 360px 너비에서 행간은 0.09rem으로 적용됩니다. ")],-1)),e[27]||(e[27]=(0,l.Lk)("h3",null,"heading",-1)),(0,l.Lk)("div",Mt,[(0,l.Lk)("div",Pt,[(0,l.Lk)("h1",Vt,[(0,l.bF)(a),e[0]||(e[0]=(0,l.eW)("Heading 1"))]),(0,l.Lk)("h2",Yt,[(0,l.bF)(a),e[1]||(e[1]=(0,l.eW)("Heading 2"))]),(0,l.Lk)("h3",Ut,[(0,l.bF)(a),e[2]||(e[2]=(0,l.eW)("Heading 3"))]),(0,l.Lk)("h4",qt,[(0,l.bF)(a),e[3]||(e[3]=(0,l.eW)("Heading 4"))]),(0,l.Lk)("h5",Dt,[(0,l.bF)(a),e[4]||(e[4]=(0,l.eW)("Heading 5"))])])]),e[28]||(e[28]=(0,l.Lk)("h3",null,"body Text",-1)),(0,l.Lk)("div",$t,[(0,l.Lk)("div",Jt,[(0,l.Lk)("p",Qt,[(0,l.bF)(a),e[5]||(e[5]=(0,l.eW)("body 1-700"))]),(0,l.Lk)("p",Zt,[(0,l.bF)(a),e[6]||(e[6]=(0,l.eW)("body 1-400"))]),e[18]||(e[18]=(0,l.Lk)("hr",{class:"line"},null,-1)),(0,l.Lk)("p",te,[(0,l.bF)(a),e[7]||(e[7]=(0,l.eW)("body 2-700"))]),(0,l.Lk)("p",ee,[(0,l.bF)(a),e[8]||(e[8]=(0,l.eW)("body 2-500"))]),(0,l.Lk)("p",ae,[(0,l.bF)(a),e[9]||(e[9]=(0,l.eW)("body 2-400"))]),(0,l.Lk)("p",ne,[(0,l.bF)(a),e[10]||(e[10]=(0,l.eW)("body 2-300"))]),e[19]||(e[19]=(0,l.Lk)("hr",{class:"line"},null,-1)),(0,l.Lk)("p",le,[(0,l.bF)(a),e[11]||(e[11]=(0,l.eW)("body 3-700"))]),(0,l.Lk)("p",se,[(0,l.bF)(a),e[12]||(e[12]=(0,l.eW)("body 3-500"))]),(0,l.Lk)("p",de,[(0,l.bF)(a),e[13]||(e[13]=(0,l.eW)("body 3-400"))]),e[20]||(e[20]=(0,l.Lk)("hr",{class:"line"},null,-1)),(0,l.Lk)("p",ie,[(0,l.bF)(a),e[14]||(e[14]=(0,l.eW)("body 4-700"))]),(0,l.Lk)("p",ue,[(0,l.bF)(a),e[15]||(e[15]=(0,l.eW)("body 4-500"))]),(0,l.Lk)("p",oe,[(0,l.bF)(a),e[16]||(e[16]=(0,l.eW)("body 4-400"))]),(0,l.Lk)("p",be,[(0,l.bF)(a),e[17]||(e[17]=(0,l.eW)("body 4-300"))])])]),e[29]||(e[29]=(0,l.Lk)("h3",null,"em Text",-1)),(0,l.Lk)("div",re,[(0,l.Lk)("div",ce,[(0,l.Lk)("em",ve,[(0,l.bF)(a),e[21]||(e[21]=(0,l.eW)("em 1"))])])]),e[30]||(e[30]=(0,l.Lk)("h3",null,"caption Text",-1)),(0,l.Lk)("div",pe,[(0,l.Lk)("div",me,[(0,l.Lk)("p",ke,[(0,l.bF)(a),e[22]||(e[22]=(0,l.eW)("caption 1-400"))]),(0,l.Lk)("p",ye,[(0,l.bF)(a),e[23]||(e[23]=(0,l.eW)("caption 1-300"))]),(0,l.Lk)("p",Le,[(0,l.bF)(a),e[24]||(e[24]=(0,l.eW)("caption 2"))])])])])}const he={},ge=(0,o.A)(he,[["render",fe],["__scopeId","data-v-47bd9cfa"]]);var _e=ge;const xe=[{path:"/",name:"Home",component:x},{path:"/about",name:"About",component:A},{path:"/Animation",name:"Animation",component:X},{path:"/guideHome",name:"GuideHome",component:Y,redirect:{name:"GuideButtonChild"},children:[{path:"guideButton",name:"GuideButtonChild",component:Nt},{path:"guideText",name:"GuideTextChild",component:_e}]},{path:"/:pathMatch(.*)*",name:"NotFound",component:()=>a.e(696).then(a.bind(a,696))}],we=(0,v.aE)({history:(0,v.LA)("/ssomi_vue/"),routes:xe});var ze=we,Fe=a(782),Te=(0,Fe.y$)({state:{},getters:{},mutations:{},actions:{},modules:{}});(0,n.Ef)(c).use(Te).use(ze).mount("#app")}},e={};function a(n){var l=e[n];if(void 0!==l)return l.exports;var s=e[n]={exports:{}};return t[n].call(s.exports,s,s.exports,a),s.exports}a.m=t,function(){var t=[];a.O=function(e,n,l,s){if(!n){var d=1/0;for(b=0;b<t.length;b++){n=t[b][0],l=t[b][1],s=t[b][2];for(var i=!0,u=0;u<n.length;u++)(!1&s||d>=s)&&Object.keys(a.O).every((function(t){return a.O[t](n[u])}))?n.splice(u--,1):(i=!1,s<d&&(d=s));if(i){t.splice(b--,1);var o=l();void 0!==o&&(e=o)}}return e}s=s||0;for(var b=t.length;b>0&&t[b-1][2]>s;b--)t[b]=t[b-1];t[b]=[n,l,s]}}(),function(){a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,{a:e}),e}}(),function(){a.d=function(t,e){for(var n in e)a.o(e,n)&&!a.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})}}(),function(){a.f={},a.e=function(t){return Promise.all(Object.keys(a.f).reduce((function(e,n){return a.f[n](t,e),e}),[]))}}(),function(){a.u=function(t){return"js/"+t+".b2985ee9.js"}}(),function(){a.miniCssF=function(t){return"css/"+t+".9aef5662.css"}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={},e="ssomi_vue:";a.l=function(n,l,s,d){if(t[n])t[n].push(l);else{var i,u;if(void 0!==s)for(var o=document.getElementsByTagName("script"),b=0;b<o.length;b++){var r=o[b];if(r.getAttribute("src")==n||r.getAttribute("data-webpack")==e+s){i=r;break}}i||(u=!0,i=document.createElement("script"),i.charset="utf-8",i.timeout=120,a.nc&&i.setAttribute("nonce",a.nc),i.setAttribute("data-webpack",e+s),i.src=n),t[n]=[l];var c=function(e,a){i.onerror=i.onload=null,clearTimeout(v);var l=t[n];if(delete t[n],i.parentNode&&i.parentNode.removeChild(i),l&&l.forEach((function(t){return t(a)})),e)return e(a)},v=setTimeout(c.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=c.bind(null,i.onerror),i.onload=c.bind(null,i.onload),u&&document.head.appendChild(i)}}}(),function(){a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){a.p="/ssomi_vue/"}(),function(){if("undefined"!==typeof document){var t=function(t,e,n,l,s){var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",a.nc&&(d.nonce=a.nc);var i=function(a){if(d.onerror=d.onload=null,"load"===a.type)l();else{var n=a&&a.type,i=a&&a.target&&a.target.href||e,u=new Error("Loading CSS chunk "+t+" failed.\n("+n+": "+i+")");u.name="ChunkLoadError",u.code="CSS_CHUNK_LOAD_FAILED",u.type=n,u.request=i,d.parentNode&&d.parentNode.removeChild(d),s(u)}};return d.onerror=d.onload=i,d.href=e,n?n.parentNode.insertBefore(d,n.nextSibling):document.head.appendChild(d),d},e=function(t,e){for(var a=document.getElementsByTagName("link"),n=0;n<a.length;n++){var l=a[n],s=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(s===t||s===e))return l}var d=document.getElementsByTagName("style");for(n=0;n<d.length;n++){l=d[n],s=l.getAttribute("data-href");if(s===t||s===e)return l}},n=function(n){return new Promise((function(l,s){var d=a.miniCssF(n),i=a.p+d;if(e(d,i))return l();t(n,i,null,l,s)}))},l={524:0};a.f.miniCss=function(t,e){var a={696:1};l[t]?e.push(l[t]):0!==l[t]&&a[t]&&e.push(l[t]=n(t).then((function(){l[t]=0}),(function(e){throw delete l[t],e})))}}}(),function(){var t={524:0};a.f.j=function(e,n){var l=a.o(t,e)?t[e]:void 0;if(0!==l)if(l)n.push(l[2]);else{var s=new Promise((function(a,n){l=t[e]=[a,n]}));n.push(l[2]=s);var d=a.p+a.u(e),i=new Error,u=function(n){if(a.o(t,e)&&(l=t[e],0!==l&&(t[e]=void 0),l)){var s=n&&("load"===n.type?"missing":n.type),d=n&&n.target&&n.target.src;i.message="Loading chunk "+e+" failed.\n("+s+": "+d+")",i.name="ChunkLoadError",i.type=s,i.request=d,l[1](i)}};a.l(d,u,"chunk-"+e,e)}},a.O.j=function(e){return 0===t[e]};var e=function(e,n){var l,s,d=n[0],i=n[1],u=n[2],o=0;if(d.some((function(e){return 0!==t[e]}))){for(l in i)a.o(i,l)&&(a.m[l]=i[l]);if(u)var b=u(a)}for(e&&e(n);o<d.length;o++)s=d[o],a.o(t,s)&&t[s]&&t[s][0](),t[s]=0;return a.O(b)},n=self["webpackChunkssomi_vue"]=self["webpackChunkssomi_vue"]||[];n.forEach(e.bind(null,0)),n.push=e.bind(null,n.push.bind(n))}();var n=a.O(void 0,[504],(function(){return a(7983)}));n=a.O(n)})();
//# sourceMappingURL=app.0667f28e.js.map