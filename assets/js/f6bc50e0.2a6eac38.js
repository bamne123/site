"use strict";(self.webpackChunkmy_stie=self.webpackChunkmy_stie||[]).push([[118],{6071:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>c,default:()=>m,frontMatter:()=>i,metadata:()=>r,toc:()=>d});const r=JSON.parse('{"id":"leetcode/Easy/Two Sum","title":"1 - Two Sum","description":"Problem Information","source":"@site/docs/leetcode/Easy/1-Two Sum.md","sourceDirName":"leetcode/Easy","slug":"/leetcode/Easy/Two Sum","permalink":"/site/docs/leetcode/Easy/Two Sum","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/leetcode/Easy/1-Two Sum.md","tags":[],"version":"current","sidebarPosition":1,"frontMatter":{},"sidebar":"leetcodeSidebar","previous":{"title":"150-Day Roadmap","permalink":"/site/docs/leetcode/days-roadmap"},"next":{"title":"26 - Remove Duplicates from Sorted Array","permalink":"/site/docs/leetcode/Easy/Remove Duplicates from Sorted Array"}}');var l=t(4848),a=t(8453),s=t(5537),o=t(9329);const i={},c="1 - Two Sum",u={},d=[{value:"Problem Information",id:"problem-information",level:3},{value:"Problem Statement",id:"problem-statement",level:2},{value:"Examples",id:"examples",level:3},{value:"Constraints:",id:"constraints",level:3},{value:"Follow-up:",id:"follow-up",level:3},{value:"Complexity Analysis",id:"complexity-analysis",level:3},{value:"Code Implementation",id:"code-implementation",level:3},{value:"Step-by-Step Explanation",id:"step-by-step-explanation",level:3}];function h(e){const n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.header,{children:(0,l.jsx)(n.h1,{id:"1---two-sum",children:"1 - Two Sum"})}),"\n",(0,l.jsx)(n.h3,{id:"problem-information",children:"Problem Information"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:"Difficulty:"})," Easy"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:"Category:"})," Array, Hash Table"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:"Link:"})," ",(0,l.jsx)(n.a,{href:"https://leetcode.com/problems/two-sum/",children:"LeetCode"})]}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"problem-statement",children:"Problem Statement"}),"\n",(0,l.jsxs)(n.p,{children:["Given an array of integers ",(0,l.jsx)(n.code,{children:"nums"})," and an integer ",(0,l.jsx)(n.code,{children:"target"}),", return ",(0,l.jsxs)(n.em,{children:["indices of the two numbers such that they add up to ",(0,l.jsx)(n.code,{children:"target"})]}),"."]}),"\n",(0,l.jsxs)(n.p,{children:["You may assume that each input would have ",(0,l.jsxs)(n.strong,{children:[(0,l.jsx)("em",{children:"exactly"})," one solution"]}),", and you may not use the ",(0,l.jsx)(n.em,{children:"same"})," element twice."]}),"\n",(0,l.jsx)(n.p,{children:"You can return the answer in any order."}),"\n",(0,l.jsx)(n.h3,{id:"examples",children:"Examples"}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:"Example 1:"})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{children:"Input: nums = [2,7,11,15], target = 9\nOutput: [0,1]\nExplanation: Because nums[0] + nums[1] == 9, we return [0, 1].\n"})}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:"Example 2:"})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{children:"Input: nums = [3,2,4], target = 6\nOutput: [1,2]\n"})}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:"Example 3:"})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{children:"Input: nums = [3,3], target = 6\nOutput: [0,1]\n"})}),"\n",(0,l.jsx)(n.h3,{id:"constraints",children:"Constraints:"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.code,{children:"2 <= nums.length <= 10^4"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.code,{children:"-10^9 <= nums[i] <= 10^9"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.code,{children:"-10^9 <= target <= 10^9"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.strong,{children:"Only one valid answer exists."})}),"\n"]}),"\n",(0,l.jsx)(n.h3,{id:"follow-up",children:"Follow-up:"}),"\n",(0,l.jsxs)(n.p,{children:["Can you come up with an algorithm that is less than ",(0,l.jsx)(n.code,{children:"O(n^2)"})," time complexity?"]}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:"Video Explanation:"})}),"\n",(0,l.jsx)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/UXDSeD9mN-k",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowfullscreen:!0}),"\n",(0,l.jsx)(n.h3,{id:"complexity-analysis",children:"Complexity Analysis"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:"Time Complexity:"})," O(n)","\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"The algorithm iterates through the array once, building a hash table and checking for complements in constant time."}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:"Space Complexity:"})," O(n)","\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"The hash table can store up to n elements in the worst case."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.h3,{id:"code-implementation",children:"Code Implementation"}),"\n",(0,l.jsx)(s.A,{defaultValue:"python",groupId:"cody",values:[{label:"Python",value:"python"},{label:"JavaScript",value:"javascript"},{label:"Java",value:"java"},{label:"C#",value:"csharp"},{label:"Go",value:"go"}],children:(0,l.jsx)(o.A,{value:"python",children:(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-python",children:"def two_sum(nums, target):\n    num_map = {}\n    for i, num in enumerate(nums):\n        complement = target - num\n        if complement in num_map:\n            return [num_map[complement], i]\n        num_map[num] = i\n    return []\n"})})})}),"\n",(0,l.jsx)(n.h3,{id:"step-by-step-explanation",children:"Step-by-Step Explanation"}),"\n",(0,l.jsxs)(n.ol,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:"Create a hash map:"})," Initialize an empty dictionary ",(0,l.jsx)(n.code,{children:"num_map"})," to store numbers encountered so far as keys and their indices as values."]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:"Iterate through the array:"})," Loop through each number ",(0,l.jsx)(n.code,{children:"num"})," and its index ",(0,l.jsx)(n.code,{children:"i"})," in the input array ",(0,l.jsx)(n.code,{children:"nums"}),"."]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:"Calculate the complement:"})," For each number, calculate the ",(0,l.jsx)(n.code,{children:"complement"})," needed to reach the ",(0,l.jsx)(n.code,{children:"target"}),"."]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:"Check if complement exists:"})," Look up the ",(0,l.jsx)(n.code,{children:"complement"})," in the ",(0,l.jsx)(n.code,{children:"num_map"}),".","\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["If the ",(0,l.jsx)(n.code,{children:"complement"})," is found in the map, it means we have found a pair that sums to the ",(0,l.jsx)(n.code,{children:"target"}),". Return the indices of the current number and the complement from the map."]}),"\n",(0,l.jsxs)(n.li,{children:["If the ",(0,l.jsx)(n.code,{children:"complement"})," is not found, add the current number and its index to the ",(0,l.jsx)(n.code,{children:"num_map"})," for future lookups."]}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:"No solution:"})," If the loop completes without finding a pair, return an empty list indicating no solution was found."]}),"\n"]})]})}function m(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(h,{...e})}):h(e)}},9329:(e,n,t)=>{t.d(n,{A:()=>s});t(6540);var r=t(4164);const l={tabItem:"tabItem_Ymn6"};var a=t(4848);function s(e){let{children:n,hidden:t,className:s}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,r.A)(l.tabItem,s),hidden:t,children:n})}},5537:(e,n,t)=>{t.d(n,{A:()=>w});var r=t(6540),l=t(4164),a=t(5627),s=t(6347),o=t(372),i=t(604),c=t(1861),u=t(8749);function d(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:t}=e;return(0,r.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:t,attributes:r,default:l}}=e;return{value:n,label:t,attributes:r,default:l}}))}(t);return function(e){const n=(0,c.XI)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function m(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function p(e){let{queryString:n=!1,groupId:t}=e;const l=(0,s.W6)(),a=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,i.aZ)(a),(0,r.useCallback)((e=>{if(!a)return;const n=new URLSearchParams(l.location.search);n.set(a,e),l.replace({...l.location,search:n.toString()})}),[a,l])]}function x(e){const{defaultValue:n,queryString:t=!1,groupId:l}=e,a=h(e),[s,i]=(0,r.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!m({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const r=t.find((e=>e.default))??t[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:a}))),[c,d]=p({queryString:t,groupId:l}),[x,f]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[l,a]=(0,u.Dv)(t);return[l,(0,r.useCallback)((e=>{t&&a.set(e)}),[t,a])]}({groupId:l}),j=(()=>{const e=c??x;return m({value:e,tabValues:a})?e:null})();(0,o.A)((()=>{j&&i(j)}),[j]);return{selectedValue:s,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);i(e),d(e),f(e)}),[d,f,a]),tabValues:a}}var f=t(9136);const j={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var b=t(4848);function y(e){let{className:n,block:t,selectedValue:r,selectValue:s,tabValues:o}=e;const i=[],{blockElementScrollPositionUntilNextRender:c}=(0,a.a_)(),u=e=>{const n=e.currentTarget,t=i.indexOf(n),l=o[t].value;l!==r&&(c(n),s(l))},d=e=>{let n=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const t=i.indexOf(e.currentTarget)+1;n=i[t]??i[0];break}case"ArrowLeft":{const t=i.indexOf(e.currentTarget)-1;n=i[t]??i[i.length-1];break}}n?.focus()};return(0,b.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.A)("tabs",{"tabs--block":t},n),children:o.map((e=>{let{value:n,label:t,attributes:a}=e;return(0,b.jsx)("li",{role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:e=>{i.push(e)},onKeyDown:d,onClick:u,...a,className:(0,l.A)("tabs__item",j.tabItem,a?.className,{"tabs__item--active":r===n}),children:t??n},n)}))})}function v(e){let{lazy:n,children:t,selectedValue:a}=e;const s=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=s.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:(0,l.A)("margin-top--md",e.props.className)}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:s.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==a})))})}function g(e){const n=x(e);return(0,b.jsxs)("div",{className:(0,l.A)("tabs-container",j.tabList),children:[(0,b.jsx)(y,{...n,...e}),(0,b.jsx)(v,{...n,...e})]})}function w(e){const n=(0,f.A)();return(0,b.jsx)(g,{...e,children:d(e.children)},String(n))}},8453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>o});var r=t(6540);const l={},a=r.createContext(l);function s(e){const n=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:s(e.components),r.createElement(a.Provider,{value:n},e.children)}}}]);