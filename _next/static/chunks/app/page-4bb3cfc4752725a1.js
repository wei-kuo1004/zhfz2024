(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{4225:function(e,t,s){Promise.resolve().then(s.bind(s,2271))},2271:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return a}});var c=s(7437),n=s(7138),l=s(6648),i=s(2265),r=e=>{let{clickCount:t}=e,s=new Date().toLocaleDateString();return(0,c.jsxs)("div",{className:"fixed bottom-0 mb-4 text-center",children:[(0,c.jsxs)("p",{children:["本日日期: ",s]}),(0,c.jsxs)("p",{children:["今日遊玩人次: ",t]})]})};function a(){let[e,t]=(0,i.useState)(0);return(0,i.useEffect)(()=>{let e=localStorage.getItem("clickCount");e&&t(parseInt(e,10))},[]),(0,i.useEffect)(()=>{localStorage.setItem("clickCount",e.toString())},[e]),(0,c.jsxs)("div",{className:"container mx-auto flex aspect-[1/1.8] min-h-screen flex-col items-center justify-center bg-p1-bg bg-cover p-6",children:[(0,c.jsx)("div",{className:"w-full flex-1 p-8"}),(0,c.jsx)("div",{className:"w-full flex-1 p-8"}),(0,c.jsx)("div",{className:"w-full flex-1 p-8",children:(0,c.jsx)(n.default,{href:"/secondScene",passHref:!0,onClick:()=>{t(e=>e+1)},children:(0,c.jsx)(l.default,{src:"images/PRD/p1-start.png",alt:"描述文字",width:800,height:600,priority:!0,style:{objectFit:"cover",width:"100%",height:"auto"}})})}),(0,c.jsx)(r,{clickCount:e})]})}}},function(e){e.O(0,[648,138,971,23,744],function(){return e(e.s=4225)}),_N_E=e.O()}]);