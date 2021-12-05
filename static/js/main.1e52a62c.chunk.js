(this["webpackJsonpreact-dashboard-refactor"]=this["webpackJsonpreact-dashboard-refactor"]||[]).push([[0],{204:function(n,e,t){"use strict";t.r(e);var r,a,c,i,o,s,d,l,b,j,x,h,u,g,p,O,f,m,y,k,v,w,C,B,F,T,D,A,N,S,M,E,_,I,P,R,V,z=t(1),G=t.n(z),L=t(73),J=t.n(L),H=(t(87),t(6)),W=t(8),K=t(81),U=(t(88),t(2)),q=t(3),Q=t(0),Z=q.a.div(r||(r=Object(U.a)(["\n   background: ",";\n   /* width: 5.5rem;\n   height: 4rem;\n   border-radius: 45%; */\n   height: 90px;\n   width: 45px;\n   border-bottom-right-radius: 90px;\n   border-top-right-radius: 90px;\n   padding: .2rem;\n   display: grid;\n   place-items: center;\n   color: white;\n   position: absolute;\n   right: -45px;\n   top: 10rem;\n   cursor: pointer;\n   \n"])),(function(n){return n.col})),X=function(n){var e=n.clickFunc,t=n.icon,r=n.col;return Object(Q.jsx)(Z,{onClick:e,col:r,children:t})},Y=[{title:"Icons",icon:Object(Q.jsx)("i",{class:"bx bxs-happy-heart-eyes"}),link:"/react-dashboard-refactor"},{title:"Charts",icon:Object(Q.jsx)("i",{class:"bx bxs-bar-chart-alt-2"}),link:"/react-dashboard-refactor/charts"},{title:"Palette",icon:Object(Q.jsx)("i",{class:"bx bxs-palette"}),link:"/react-dashboard-refactor/palettes"},{title:"Tables",icon:Object(Q.jsx)("i",{class:"bx bx-table"}),link:"/react-dashboard-refactor/tables"},{title:"Buttons",icon:Object(Q.jsx)("i",{class:"bx bxs-joystick-button"}),link:"/react-dashboard-refactor/buttons"}],$=t(31),nn=q.a.nav(a||(a=Object(U.a)(["\n   /* background: ","; */\n   background: ",";\n   transition: all cubic-bezier(0.18, 0.89, 0.32, 1.28) 400ms;\n   position: absolute;\n   z-index: 999;\n   width: ",";\n   height: 100vh;\n   margin-right: 2rem;\n   position: fixed;\n      \n"])),(function(n){return n.bGround||"#212121"}),(function(n){return"linear-gradient(180deg, ".concat(n.bGround," 0%, ").concat(n.bGround2," 100%)")}),(function(n){return n.open?"355px":"0"})),en=q.a.div(c||(c=Object(U.a)(["\n   display: flex;\n   align-items: center;\n   height: 100%;\n   justify-content: center;\n   color: white;\n   overflow: hidden;\n"]))),tn=q.a.div(i||(i=Object(U.a)(["\n   display: flex;\n   align-items: center;\n   justify-content: space-between;\n   flex-direction: column;\n   height: 40%;\n   transition: .4s;\n   \n"]))),rn=Object(q.a)($.b)(o||(o=Object(U.a)(["\n   cursor: pointer;\n   position: relative;\n   display: grid;\n   place-items: center;\n   width: 100px;\n   font-size: 1.5rem;\n   font-weight: bold;\n   color: white;\n   text-decoration: none;\n   font-weight: 400;\n   display: flex;\n   justify-content: space-between;\n   align-items: center;\n   gap: 1rem;\n   width: 100%;\n   transition: all ease .4s;\n  \n\n   &.is-active{\n     \n      /* ::after{\n         content: '';\n         position: absolute;\n         background: rgba(255,255,255,0.1);\n         top: 0;\n         left: 0;\n         height: 3rem;\n         width: 10rem;\n         z-index: -1;\n         transition: all ease-in-out .3s;\n         opacity: .5;\n         \n      } */\n      border-bottom: 1px white solid;\n      \n   }\n  \n"]))),an=function(n){n.bGround,n.primary;var e=n.secondary,t=(n.accent,n.black,n.grey,n.width,n.shade),r=Object(z.useState)(!1),a=Object(W.a)(r,2),c=a[0],i=a[1],o=function(){var n=document.getElementById("main_content");i(!c),!0!==c?n.classList.add("open"):n.classList.remove("open")};return Object(Q.jsxs)(nn,{bGround:e,bGround2:t,open:c,onClick:function(){!0===c&&(i(!1),document.getElementById("main_content").classList.remove("open"))},children:[Object(Q.jsx)(en,{children:Object(Q.jsx)(tn,{children:Y.map((function(n){return Object(Q.jsxs)(rn,{to:n.link,children:[n.title,n.icon]})}))})}),!0===c?Object(Q.jsx)(X,{clickFunc:o,icon:Object(Q.jsx)("i",{class:"bx bx-align-right toggler"}),col:e}):Object(Q.jsx)(X,{clickFunc:o,icon:Object(Q.jsx)("i",{class:"bx bx-align-left toggler"}),col:e})]})},cn={primary:"#e6e6e6",secondary:"#29c0f5",shade:"#24dcc6",accent:"#0df2c9",black:"#494d66",grey:"grey",background:"#eee",lightText:"#fefefe",alpha:"#29bef585",textColor:"#494d66",glass:"rgb(198 199 202 / 20%)"},on={primary:"#181b21",secondary:"rgba(233,30,99)",shade:"#f97b65",accent:"#f61250",black:"#5e6872",grey:"#edf1f4",background:"#20222e",lightText:"#fefefe",alpha:"rgba(233,30,99,.4)",textColor:"#fefefe",glass:"rgb(198 199 202 / 20%)"},sn={primary:"#b7cefa0d",secondary:"#7F00FF",shade:"#e000b6",accent:"#df39e4",black:"#4d4c74",grey:"#edf1f4",background:"#070a0f",lightText:"#fefefe",alpha:"#7f00ff8f",textColor:"#fefefe",glass:"rgb(198 199 202 / 20%)"},dn=q.a.div(s||(s=Object(U.a)(["\n   /* background: ","; */\n   background: #f8faff;\n   height: 3rem;\n   width: 6rem;\n   /* position: absolute; */\n   top:.375rem;\n   right: .375rem;\n   border-radius: .25rem;\n   cursor: pointer;\n   box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;\n   border: 1px #e1e3e5 solid;\n   display: grid;\n   place-items: center;\n   position: fixed;\n   z-index: 999;\n"])),(function(n){return n.bg})),ln=q.a.div(d||(d=Object(U.a)(["\n   background: ",";\n   height: 2rem;\n   width: 5rem;\n   border-radius: 5px;\n"])),(function(n){return n.bg})),bn=function(n){n.primary;var e=n.secondary,t=(n.accent,n.black,n.grey,n.clickFunc);return Object(Q.jsx)(dn,{onClick:t,children:Object(Q.jsx)(ln,{bg:e})})},jn=t(4),xn=q.a.div(l||(l=Object(U.a)(["\n   border: 1px rgba(0, 0, 0, 0.1) solid;\n   background : ",";\n   border-radius: 5px;\n   transition: all ease .3s;\n   box-shadow: rgb(0 0 0 / 20%) 1px 4px 12px;\n   margin: 1em 0;\n   cursor: pointer;\n   overflow: hidden;\n   position: relative;\n   \n   \n   :hover{\n\n      box-shadow: 0px 2px 5px 0px rgba(0,0,0,0.24) , 0px 1px 10px 0px rgba(0,0,0,0.17) , 0px 2px 4px -1px rgba(0,0,0,0.28) ;\n   }\n   \n"])),(function(n){return n.bg})),hn=q.a.div(b||(b=Object(U.a)(["\n   height: 100px;\n   width: 100%;\n   background : ",";\n"])),(function(n){return n.swatchBg})),un=q.a.div(j||(j=Object(U.a)(["\n   margin: .75rem;\n   text-align: center;\n   background: ",";\n   user-select: all;\n"])),(function(n){return n.bg})),gn=q.a.small(x||(x=Object(U.a)(["\n   display: ",";\n   position: absolute;\n   font-weight: 700;\n   background: #15192573;\n   padding: 3px;\n   color: white;\n   width: 100%;\n   margin: auto;\n   top: 0;\n   left: 0;\n   text-align: center;\n"])),(function(n){return n.copied?"block":"none"})),pn=function(n){var e=n.bg,t=n.swatchBg,r=Object(z.useState)(!1),a=Object(W.a)(r,2),c=a[0],i=a[1];return Object(Q.jsxs)(xn,{bg:e,children:[Object(Q.jsx)(hn,{className:"swatch",swatchBg:t}),Object(Q.jsx)(un,{className:"info",onClick:function(n){document.execCommand("copy"),i(!c),setTimeout((function(){i(!1)}),800)},children:t}),Object(Q.jsx)(gn,{copied:c,children:"Copied!"})]})},On=q.a.div(h||(h=Object(U.a)(["\n\n   display: grid;\n   grid-template-columns: 1fr min(200ch, 100%) 1fr;\n   background: ",";\n   color: ",";\n   transition: .3s all;\n   width: 100%;\n   padding: 4rem;\n\n   > * input{\n      color: ",";\n   }\n   > * {\n   grid-column: 2;\n   }\n   > * .full-bleed {\n   width:100%;\n   grid-column: 1 / 4;\n   }\n\n   @media screen and (min-width: 768px){\n      height: 100%;\n   }\n\n   \n\n"])),(function(n){return n.background}),(function(n){return n.color}),(function(n){return n.color})),fn=q.a.div(u||(u=Object(U.a)(["\n   /* background: ",";\n   height: 100vh;\n   padding: 1.5rem; */\n\n   /* overflow-y: auto;\n   scroll-snap-type: y mandatory;\n   scroll-behavior: smooth;\n   -webkit-overflow-scrolling: touch; */\n\n   \n\n\n"])),(function(n){return n.bg})),mn=q.a.div(g||(g=Object(U.a)(["\n   background: ",";\n   padding: .875rem;\n   position: fixed;\n   width: 100%;\n   z-index: 0;\n   backdrop-filter: blur(20px);\n\n"])),(function(n){return n.headerBg})),yn=[{lighter:"#C8FACD",light:"#5BE584",main:"#00AB55",dark:"#007B55",darker:"#005249",contrastText:"#fff",name:"palette-1"},{lighter:"#D6E4FF",light:"#84A9FF",main:"#3366FF",dark:"#1939B7",darker:"#091A7A",contrastText:"#fff",name:"palette-2"},{lighter:"#D0F2FF",light:"#74CAFF",main:"#1890FF",dark:"#0C53B7",darker:"#04297A",contrastText:"#fff",name:"palette-3"},{lighter:"#E9FCD4",light:"#AAF27F",main:"#54D62C",dark:"#229A16",darker:"#08660D",contrastText:"#fff",name:"palette-4"},{lighter:"#FFF7CD",light:"#FFE16A",main:"#FFC107",dark:"#B78103",darker:"#7A4F01",contrastText:"#fff",name:"palette-5"},{lighter:"#FFE7D9",light:"#FFA48D",main:"#FF4842",dark:"#B72136",darker:"#7A0C2E",contrastText:"#fff",name:"palette-6"}],kn=q.a.div(p||(p=Object(U.a)(["\n   display: grid;\n   grid-template-columns: repeat(auto-fit, minmax(175px, 1fr));\n   grid-gap: 1rem;\n   margin: 5rem 0;\n   transition: all ease .4s;\n\n   img {\n   width: 100%;\n   height: 200px;\n   object-fit:cover;\n   }\n"]))),vn=function(n){n.background;var e=n.textColor,t=(n.alpha,n.glass),r=n.primary;return Object(Q.jsxs)(Q.Fragment,{children:[Object(Q.jsx)(mn,{headerBg:t,children:Object(Q.jsx)("h1",{style:{color:e},children:"Palettes"})}),Object(Q.jsx)(On,{color:e,children:Object(Q.jsx)(fn,{className:"main_content wrapper",id:"main_content",children:Object(Q.jsx)(kn,{children:yn.map((function(n,e){return Object(Q.jsxs)("div",{children:[Object(Q.jsx)(pn,{bg:r,swatchBg:n.darker}),Object(Q.jsx)(pn,{bg:r,swatchBg:n.dark}),Object(Q.jsx)(pn,{bg:r,swatchBg:n.main}),Object(Q.jsx)(pn,{bg:r,swatchBg:n.light}),Object(Q.jsx)(pn,{bg:r,swatchBg:n.lighter})]},e)}))})})})]})},wn=[{label:"Normal",rounded:!1},{label:"Normal",rounded:!1},{label:"Normal",rounded:!1},{label:"Normal",rounded:!1}],Cn=[{label:"Rounded",rounded:!0},{label:"Rounded",rounded:!0},{label:"Rounded",rounded:!0},{label:"Rounded",rounded:!0}],Bn=q.a.button(O||(O=Object(U.a)(["\n\n   width: 100%;\n   height: 4rem;\n   background: ",";\n   border: 1px solid ",";\n   border-radius: ",";\n   transition: background ease-in-out .8s;\n   cursor: pointer;\n\n   :hover{\n       background: ",";\n    }\n\n"])),(function(n){return n.buttonBg}),(function(n){return n.buttonBg}),(function(n){return n.rounded?"2rem":"7px"}),(function(n){return n.hoverBg})),Fn=q.a.div(f||(f=Object(U.a)(["\n    margin: 5rem auto;\n    /* display: grid;\n    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;\n    grid-gap: .875rem;\n    grid-template-rows: 1fr 1fr 1fr 1fr; */\n  \n    display: grid;\n    grid-template-columns: repeat(auto-fit,minmax(200px, 1fr));\n    grid-gap: 1rem;\n    max-width: 1000px;\n\n    \n    \n"]))),Tn=function(n){var e=n.glass,t=n.textColor,r=n.accent,a=n.alpha,c=n.secondary;return Object(Q.jsxs)(Q.Fragment,{children:[Object(Q.jsx)(mn,{headerBg:e,children:Object(Q.jsx)("h1",{style:{color:t},children:"Buttons"})}),Object(Q.jsx)(On,{color:t,children:Object(Q.jsx)(fn,{id:"main_content",className:"main_content",children:Object(Q.jsxs)(Fn,{children:[wn.map((function(n){return Object(Q.jsx)(Bn,{buttonBg:a,rounded:n.rounded,hoverBg:c,style:{color:t},children:n.label})})),Cn.map((function(n){return Object(Q.jsx)(Bn,{buttonBg:r,rounded:n.rounded,hoverBg:c,style:{color:t},children:n.label})}))]})})})]})},Dn=(q.a.div(m||(m=Object(U.a)(["\n\n"]))),q.a.div(y||(y=Object(U.a)(["\n\ndisplay: flex;\nalign-items: center;\njustify-content: center;\ngap: 1rem;\nflex-wrap: wrap;\npadding: 5rem 0;\n"])))),An=q.a.div(k||(k=Object(U.a)(["\n   width: 10rem;\n   height: 10rem;\n   background: ",";\n   border-radius: 8px;\n   display: grid;\n   place-items: center;\n\n"])),(function(n){return n.outerBg})),Nn=q.a.div(v||(v=Object(U.a)(["\n   width: 4rem;\n   height: 4rem;\n   background: ",";\n   border-radius: 1rem;\n   display: grid;\n   place-items: center;\n   border: 1px solid ",";\n\n"])),(function(n){return n.innerBg}),(function(n){return n.innerBg})),Sn=q.a.div(w||(w=Object(U.a)(["\n   i {\n\n     \n      \n   }\n"]))),Mn=function(n){var e=n.icon,t=n.innerBg,r=n.outerBg;return Object(Q.jsx)(An,{outerBg:r,children:Object(Q.jsx)(Nn,{innerBg:t,children:Object(Q.jsx)(Sn,{children:e})})})},En=[{icon:Object(Q.jsx)("i",{class:"bx bxs-home"})},{icon:Object(Q.jsx)("i",{class:"bx bx-ghost"})},{icon:Object(Q.jsx)("i",{class:"bx bxs-calendar-x"})},{icon:Object(Q.jsx)("i",{class:"bx bx-bulb"})},{icon:Object(Q.jsx)("i",{class:"bx bx-lock-open"})},{icon:Object(Q.jsx)("i",{class:"bx bx-layer"})},{icon:Object(Q.jsx)("i",{class:"bx bx-edit"})},{icon:Object(Q.jsx)("i",{class:"bx bx-ghost"})},{icon:Object(Q.jsx)("i",{class:"bx bxs-calendar-x"})},{icon:Object(Q.jsx)("i",{class:"bx bx-bulb"})},{icon:Object(Q.jsx)("i",{class:"bx bx-lock-open"})},{icon:Object(Q.jsx)("i",{class:"bx bx-layer"})},{icon:Object(Q.jsx)("i",{class:"bx bx-edit"})},{icon:Object(Q.jsx)("i",{class:"bx bx-ghost"})},{icon:Object(Q.jsx)("i",{class:"bx bxs-calendar-x"})},{icon:Object(Q.jsx)("i",{class:"bx bx-gift"})},{icon:Object(Q.jsx)("i",{class:"bx bx-error-circle"})},{icon:Object(Q.jsx)("i",{class:"bx bx-dock-top"})},{icon:Object(Q.jsx)("i",{class:"bx bx-detail"})},{icon:Object(Q.jsx)("i",{class:"bx bx-droplet"})},{icon:Object(Q.jsx)("i",{class:"bx bxs-eject"})},{icon:Object(Q.jsx)("i",{class:"bx bx-envelope"})},{icon:Object(Q.jsx)("i",{class:"bx bxs-discount"})},{icon:Object(Q.jsx)("i",{class:"bx bx-shopping-bag"})},{icon:Object(Q.jsx)("i",{class:"bx bx-trophy"})},{icon:Object(Q.jsx)("i",{class:"bx bx-edit"})},{icon:Object(Q.jsx)("i",{class:"bx bx-sun"})}],_n=function(n){n.background;var e=n.primary,t=n.alpha,r=n.accent,a=n.glass,c=n.textColor;return Object(Q.jsxs)(Q.Fragment,{children:[Object(Q.jsx)(mn,{headerBg:a,children:Object(Q.jsx)("h1",{style:{color:c},children:"Icons"})}),Object(Q.jsx)(On,{color:c,children:Object(Q.jsx)(fn,{id:"main_content",className:"main_content",children:Object(Q.jsx)(Dn,{children:En.map((function(n){return Object(Q.jsx)(Mn,{icon:n.icon,outerBg:e,innerBg:t,accent:r})}))})})})]})},In=t(80),Pn=q.a.div(C||(C=Object(U.a)(["\n  height: 400px;\n  width: 100%;\n\n"]))),Rn=function(n){var e=n.colorTheme,t=n.colorOutline,r=Array.from({length:40},(function(){return Math.floor(40*Math.random())}));return Object(Q.jsx)(Pn,{children:Object(Q.jsx)(In.a,{data:function(n){var a=n.getContext("2d").createLinearGradient(0,0,0,450);return a.addColorStop(0,e),a.addColorStop(.3,e),a.addColorStop(.8,"transparent"),{labels:["JUL","AUG","SEP","OCT","NOV","JAN","FEB","MAR","MOC","MOC","MOC","MOC","MOC","MOC","MOC"],datasets:[{label:"My First dataset",fill:!0,backgroundColor:a,borderColor:t,borderWidth:2,borderDash:[],borderDashOffset:0,pointBackgroundColor:t,pointBorderColor:"rgba(255,255,255,0)",pointHoverBackgroundColor:t,pointBorderWidth:20,pointHoverRadius:10,pointHoverBorderWidth:15,pointRadius:4,data:r}]}},options:{maintainAspectRatio:!1,animation:{easing:"easeInOutQuad",duration:520},plugins:{legend:{display:!1}},tooltips:{backgroundColor:"#f5f5f5",titleFontColor:"#333",bodyFontColor:"#666",bodySpacing:4,xPadding:12,mode:"nearest",intersect:0,position:"nearest"},responsive:!0,scales:{yAxes:[{gridLines:{display:!1},ticks:{display:!1}}],xAxes:[{barPercentage:1.6,gridLines:{display:!1},ticks:{display:!1}}]},elements:{line:{tension:.4}}}})})},Vn=q.a.div(B||(B=Object(U.a)(["\n\n   display: grid;\n   grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));\n   grid-gap: 1rem;\n   img {\n   width: 100%;\n   height: 200px;\n   object-fit:cover;\n   }\n   margin-top: 5rem;\n"]))),zn=q.a.div(F||(F=Object(U.a)(["\n   /* border: 1px rgba(0, 0, 0, 0.1) solid; */\n   padding: 1.2rem;\n   /* margin: 1rem; */\n   /* height: 350px; */\n   /* width: 450px; */\n   border-radius: 8px;\n   background: ",";\n   transition: all ease .4s;\n   /* box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px; */\n   :hover{\n\n     /* box-shadow: rgba(17, 12, 46, 0.15) 0px 48px 100px 0px; */\n   }\n"])),(function(n){return n.cardBg})),Gn=function(n){var e=n.secondary,t=(n.main,n.textColor),r=n.shade,a=n.primary,c=(n.background,n.alpha,n.glass);return Object(Q.jsxs)(Q.Fragment,{children:[Object(Q.jsx)(mn,{headerBg:c,children:Object(Q.jsx)("h1",{style:{color:t},children:"Charts"})}),Object(Q.jsx)(On,{color:t,children:Object(Q.jsxs)(fn,{id:"main_content",className:"main_content wrapper",children:[Object(Q.jsxs)(Vn,{children:[Object(Q.jsx)(zn,{cardBg:a,children:Object(Q.jsx)("h1",{children:"Card"})}),Object(Q.jsxs)(zn,{cardBg:a,children:[Object(Q.jsx)("h3",{children:"Chart"}),Object(Q.jsx)(Rn,{colorTheme:e,colorOutline:r})]})]}),Object(Q.jsx)(Rn,{colorTheme:e,colorOutline:r})]})})]})},Ln=q.a.div(T||(T=Object(U.a)(["\n   width: 100%;\n"]))),Jn=q.a.div(D||(D=Object(U.a)(["\n   width: ",";\n   background-color: ",";\n   box-shadow: 0px 0px 10px 2px ","47;\n   height: 12px;\n   border-radius: 20px 0 0 20px;\n   transition: ease-in-out all .3s;\n   margin: .375rem 0 1.5rem;\n\n"])),(function(n){return n.percentage}),(function(n){return n.col}),(function(n){return n.col})),Hn=q.a.div(A||(A=Object(U.a)(["\n\n   background: aliceblue;\n"]))),Wn=q.a.div(N||(N=Object(U.a)(["\n\n   display: flex;\n   justify-content: space-between;\n   align-items: center;\n"]))),Kn=function(n){var e=n.percentage,t=n.col,r=n.tech;return Object(Q.jsx)(Q.Fragment,{children:Object(Q.jsxs)(Ln,{children:[Object(Q.jsxs)(Wn,{children:[Object(Q.jsx)("div",{children:r}),Object(Q.jsx)("div",{className:"percentage",children:e})]}),Object(Q.jsx)(Hn,{className:"bar_div",children:Object(Q.jsx)(Jn,{percentage:e,col:t})})]})})},Un=q.a.div(S||(S=Object(U.a)(["\n\n   background: ",";\n   border-radius: ",";\n   padding: ",";\n   margin: ",";\n   /* min-width: 600px; */\n   overflow-x: auto;\n   scroll-snap-type: x mandatory;\n   scroll-behavior: smooth;\n   -webkit-overflow-scrolling: touch;\n   \n\n"])),(function(n){return n.dualTone?"":"white"}),(function(n){return n.dualTone?"":"6px"}),(function(n){return n.dualTone?"":"1rem"}),(function(n){return n.dualTone?"":"4rem 0"})),qn=q.a.h3(M||(M=Object(U.a)(["\n   font-weight: 500;\n   margin: ",";\n   color: ",";\n"])),(function(n){return n.dualTone?"1.5rem 0":"1.5rem 1rem"}),(function(n){return n.dualTone?"":"#202020"})),Qn=q.a.table(E||(E=Object(U.a)(["\n   background: white;\n   width: 100%;\n   margin: auto;\n   border-collapse: collapse;\n   text-align: center;\n   border-radius: 12px;\n   overflow: hidden;\n   border-spacing: 0;\n   /* box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px; */\n   box-shadow: ",";\n   /* margin-top: 5rem; */\n  \n   /* display: block;\n   & > *, table tr, table td, table th {\n    display: block;\n   }\n   & thead {\n    display: none;\n   } */\n\n   @media (max-width: 768px) {\n      td:nth-child(3),\n      th:nth-child(3) { \n         display: none; \n      }\n   }\n   @media (max-width: 600px){\n      td:nth-child(4), th:nth-child(4){\n         display: none;\n      }\n   }\n   @media (max-width: 374px){\n      font-size: .7rem;\n   }\n   \n   \n"])),(function(n){return n.dualTone?"rgba(0, 0, 0, 0.1) 0px 4px 12px":""})),Zn=q.a.thead(_||(_=Object(U.a)(["\n\n"]))),Xn=q.a.tbody(I||(I=Object(U.a)(["\n   color: #212121a2;\n\n"]))),Yn=q.a.tr(P||(P=Object(U.a)(["\n   border-bottom: 1px lightgrey solid;\n   text-transform: uppercase;\n   cursor: pointer;\n   transition: all .4s;\n\n   :hover{\n      background: linear-gradient(90deg, #ffffff12 0% ,#f2f2f2 40%, #ffffff12 62%);\n      box-shadow: 0px 20px 25px -5px rgba(0,0,0,0.1) , 0px 10px 10px -5px rgba(0,0,0,0.04) ;\n   }\n   :nth-child(odd){\n      background: ",";\n   }\n"])),(function(n){return n.dualTone?"#f5f5f5":""})),$n=q.a.th(R||(R=Object(U.a)(["\n   background: ",";\n   padding: 10px 15px;\n   height: 5rem;\n   color: ",";\n"])),(function(n){return n.tableBg}),(function(n){return n.dualTone?"white":"#212121ad"})),ne=q.a.td(V||(V=Object(U.a)(["\n   padding: 10px 15px;\n\n"]))),ee=[{id:1,favCity:"Cimongkor",Country:"Indonesia",countryCode:"ID",Visited:"1/23/2021"},{id:2,favCity:"Kadujangkung",Country:"Indonesia",countryCode:"ID",Visited:"10/8/2020"},{id:3,favCity:"Jiangna",Country:"China",countryCode:"CN",Visited:"10/18/2020"},{id:4,favCity:"Zongzhai",Country:"China",countryCode:"CN",Visited:"9/12/2021"},{id:5,favCity:"Kumba",Country:"Cameroon",countryCode:"CM",Visited:"1/23/2021"},{id:6,favCity:"Suchy D\u0105b",Country:"Poland",countryCode:"PL",Visited:"9/1/2021"}],te=[{id:1,skill:"Ambulatory",startDate:"5/16/2021",mastered:"true",percentage:"34%"},{id:2,skill:"ERP Software",startDate:"2/20/2021",mastered:"false",percentage:"81%"},{id:3,skill:"MDS 3.0",startDate:"7/19/2021",mastered:"true",percentage:"34%"},{id:4,skill:"Hand-drawn Typography",startDate:"1/11/2021",mastered:"false",percentage:"1%"},{id:5,skill:"Tally ERP",startDate:"8/27/2021",mastered:"true",percentage:"73%"},{id:6,skill:"Alcoholic Beverages",startDate:"2/20/2021",mastered:"true",percentage:"86%"}],re=function(n){var e=n.textColor,t=n.glass,r=n.secondary,a=Object(z.useState)("30%"),c=Object(W.a)(a,2),i=c[0],o=c[1];return Object(Q.jsxs)(Q.Fragment,{children:[Object(Q.jsx)(mn,{headerBg:t,children:Object(Q.jsx)("h1",{style:{color:e},children:"Tables"})}),Object(Q.jsx)(On,{color:e,children:Object(Q.jsxs)(fn,{id:"main_content",className:"main_content",children:[Object(Q.jsxs)(Un,{className:"text",dualTone:!0,children:[Object(Q.jsx)(qn,{dualTone:!0,children:"Themed Table"}),Object(Q.jsxs)(Qn,{dualTone:!0,children:[Object(Q.jsx)(Zn,{children:Object(Q.jsxs)(Yn,{gradientBg:r,children:[Object(Q.jsx)($n,{tableBg:r,dualTone:!0,children:"ID"}),Object(Q.jsx)($n,{tableBg:r,dualTone:!0,children:"Favorite City"}),Object(Q.jsx)($n,{tableBg:r,dualTone:!0,children:"Country"}),Object(Q.jsx)($n,{tableBg:r,dualTone:!0,children:"Country Code"}),Object(Q.jsx)($n,{tableBg:r,dualTone:!0,children:"Visted"})]})}),Object(Q.jsx)(Xn,{children:ee.map((function(n){return Object(Q.jsxs)(Yn,{dualTone:!0,children:[Object(Q.jsx)(ne,{children:n.id}),Object(Q.jsx)(ne,{children:n.favCity}),Object(Q.jsx)(ne,{children:n.Country}),Object(Q.jsx)(ne,{children:n.countryCode}),Object(Q.jsx)(ne,{children:n.Visited})]})}))})]})]}),Object(Q.jsxs)(Un,{className:"text",children:[Object(Q.jsx)(qn,{children:"Normal Table"}),Object(Q.jsxs)(Qn,{children:[Object(Q.jsx)(Zn,{children:Object(Q.jsxs)(Yn,{children:[Object(Q.jsx)($n,{children:"ID"}),Object(Q.jsx)($n,{children:"Skill"}),Object(Q.jsx)($n,{children:"Start Date"}),Object(Q.jsx)($n,{children:"Master"}),Object(Q.jsx)($n,{children:"Percentage"})]})}),Object(Q.jsxs)(Xn,{children:[te.map((function(n){return Object(Q.jsxs)(Yn,{dualTone:!1,children:[Object(Q.jsx)(ne,{children:n.id}),Object(Q.jsx)(ne,{children:n.skill}),Object(Q.jsx)(ne,{children:n.startDate}),Object(Q.jsx)(ne,{children:n.mastered}),Object(Q.jsx)(ne,{children:Object(Q.jsx)(Kn,{percentage:n.percentage,col:r})})]})})),Object(Q.jsxs)(Yn,{children:[Object(Q.jsx)(ne,{contentEditable:!0,children:"99"}),Object(Q.jsx)(ne,{children:"State"}),Object(Q.jsx)(ne,{children:"1 / 1 / 2022"}),Object(Q.jsx)(ne,{children:"True"}),Object(Q.jsxs)(ne,{children:[Object(Q.jsx)(Kn,{percentage:i+"%",col:"green"}),Object(Q.jsx)("input",{onChange:function(n){return o(n.target.value)},type:"range",value:i}),i]})]})]})]})]})]})})]})};var ae=function(){var n=cn,e=on,t=sn,r=Object(K.a)("theme",n),a=Object(W.a)(r,2),c=a[0],i=a[1];return document.querySelector("body").style.backgroundColor=c.background,Object(Q.jsx)($.a,{children:Object(Q.jsxs)("div",{className:"app",children:[Object(Q.jsx)(an,Object(H.a)({},c)),Object(Q.jsx)(bn,Object(H.a)(Object(H.a)({},c),{},{clickFunc:function(r){r.stopPropagation(),i(c===n?e:c===e?t:n)}})),Object(Q.jsxs)(jn.c,{children:[Object(Q.jsx)(jn.a,{path:"/react-dashboard-refactor/",exact:!0,children:Object(Q.jsx)(_n,Object(H.a)({},c))}),Object(Q.jsx)(jn.a,{path:"/react-dashboard-refactor/charts",children:Object(Q.jsx)(Gn,Object(H.a)({},c))}),Object(Q.jsx)(jn.a,{path:"/react-dashboard-refactor/palettes",children:Object(Q.jsx)(vn,Object(H.a)({},c))}),Object(Q.jsx)(jn.a,{path:"/react-dashboard-refactor/tables",children:Object(Q.jsx)(re,Object(H.a)({},c))}),Object(Q.jsx)(jn.a,{path:"/buttons",children:Object(Q.jsx)(Tn,Object(H.a)({},c))})]})]})})};J.a.render(Object(Q.jsx)(G.a.StrictMode,{children:Object(Q.jsx)(ae,{})}),document.getElementById("root"))},87:function(n,e,t){},88:function(n,e,t){}},[[204,1,2]]]);
//# sourceMappingURL=main.1e52a62c.chunk.js.map