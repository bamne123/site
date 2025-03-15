"use strict";(self.webpackChunkmy_stie=self.webpackChunkmy_stie||[]).push([[118],{6071:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>c,default:()=>m,frontMatter:()=>o,metadata:()=>r,toc:()=>d});const r=JSON.parse('{"id":"leetcode/Easy/Two Sum","title":"Two Sum","description":"Problem Information","source":"@site/docs/leetcode/Easy/1-Two Sum.md","sourceDirName":"leetcode/Easy","slug":"/leetcode/Easy/Two Sum","permalink":"/site/docs/leetcode/Easy/Two Sum","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/leetcode/Easy/1-Two Sum.md","tags":[],"version":"current","sidebarPosition":1,"frontMatter":{},"sidebar":"leetcodeSidebar","previous":{"title":"Welcome","permalink":"/site/docs/leetcode/intro"},"next":{"title":"Median of Two Sorted Arrays","permalink":"/site/docs/leetcode/Hard/Median of Two Sorted Arrays"}}');var a=t(4848),l=t(8453),s=t(5537),i=t(9329);const o={},c="Two Sum",u={},d=[{value:"Problem Information",id:"problem-information",level:2},{value:"Problem Statement",id:"problem-statement",level:2},{value:"Examples",id:"examples",level:3},{value:"Constraints",id:"constraints",level:3},{value:"Hints",id:"hints",level:3},{value:"Solution Approach",id:"solution-approach",level:2},{value:"Complexity Analysis",id:"complexity-analysis",level:3},{value:"Code Implementation",id:"code-implementation",level:3},{value:"Step-by-Step Explanation",id:"step-by-step-explanation",level:3},{value:"Alternative Approaches",id:"alternative-approaches",level:2},{value:"Common Mistakes and Pitfalls",id:"common-mistakes-and-pitfalls",level:2},{value:"Related Problems",id:"related-problems",level:2}];function h(e){const n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,l.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.header,{children:(0,a.jsx)(n.h1,{id:"two-sum",children:"Two Sum"})}),"\n",(0,a.jsx)(n.h2,{id:"problem-information",children:"Problem Information"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:"Difficulty:"})," Easy"]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:"Category:"})," Array, Hash Table"]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:"Link:"})," ",(0,a.jsx)(n.a,{href:"https://leetcode.com/problems/two-sum",children:"LeetCode"})]}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"problem-statement",children:"Problem Statement"}),"\n",(0,a.jsxs)(n.p,{children:["Given an array of integers ",(0,a.jsx)(n.code,{children:"nums"})," and an integer ",(0,a.jsx)(n.code,{children:"target"}),", return ",(0,a.jsxs)(n.em,{children:["indices of the two numbers such that they add up to ",(0,a.jsx)(n.code,{children:"target"})]}),"."]}),"\n",(0,a.jsxs)(n.p,{children:["You may assume that each input would have ",(0,a.jsxs)(n.strong,{children:[(0,a.jsx)(n.em,{children:"exactly"})," one solution"]}),", and you may not use the ",(0,a.jsx)(n.em,{children:"same"})," element twice."]}),"\n",(0,a.jsx)(n.p,{children:"You can return the answer in any order."}),"\n",(0,a.jsx)(n.h3,{id:"examples",children:"Examples"}),"\n",(0,a.jsxs)(n.p,{children:["Input: ",(0,a.jsx)(n.code,{children:"nums = [2,7,11,15], target = 9"}),"\nOutput: ",(0,a.jsx)(n.code,{children:"[0,1]"}),"\nExplanation: ",(0,a.jsx)(n.code,{children:"Because nums[0] + nums[1] == 9, we return [0, 1]"}),"."]}),"\n",(0,a.jsx)(n.h3,{id:"constraints",children:"Constraints"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.code,{children:"2 <= nums.length <= 10^4"})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.code,{children:"-10^9 <= nums[i] <= 10^9"})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.code,{children:"-10^9 <= target <= 10^9"})}),"\n",(0,a.jsx)(n.li,{children:"Only one valid answer exists."}),"\n"]}),"\n",(0,a.jsx)(n.h3,{id:"hints",children:"Hints"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Maintain a hash table of numbers already seen."}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"solution-approach",children:"Solution Approach"}),"\n",(0,a.jsxs)(n.p,{children:["The solution iterates through the ",(0,a.jsx)(n.code,{children:"nums"})," array. For each number, it checks if the complement (target - number) exists in a hash table. If it does, the indices of the current number and its complement are returned. Otherwise, the current number and its index are added to the hash table."]}),"\n",(0,a.jsx)(n.h3,{id:"complexity-analysis",children:"Complexity Analysis"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:"Time Complexity:"})," O(n)","\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["Where n is the length of the input array ",(0,a.jsx)(n.code,{children:"nums"}),". We iterate through the array once. Hash table lookups take O(1) time on average."]}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:"Space Complexity:"})," O(n)","\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"In the worst case, we store all n elements of the array in the hash table."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.h3,{id:"code-implementation",children:"Code Implementation"}),"\n",(0,a.jsxs)(s.A,{defaultValue:"python",groupId:"cody",values:[{label:"python",value:"python"},{label:"javascript",value:"javascript"},{label:"go",value:"go"},{label:"java",value:"java"},{label:"csharp",value:"csharp"}],children:[(0,a.jsx)(i.A,{value:"python",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:"def twoSum(nums, target):\n    numMap = {}\n    for i, num in enumerate(nums):\n        complement = target - num\n        if complement in numMap:\n            return [numMap[complement], i]\n        else:\n            numMap[num] = i\n"})})}),(0,a.jsx)(i.A,{value:"javascript",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-javascript",children:"function twoSum(nums, target) {\n    const numMap = {};\n    for (let i = 0; i < nums.length; i++) {\n        const complement = target - nums[i];\n        if (complement in numMap) {\n            return [numMap[complement], i];\n        } else {\n            numMap[nums[i]] = i;\n        }\n    }\n}\n"})})}),(0,a.jsx)(i.A,{value:"go",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-go",children:"func twoSum(nums []int, target int) []int {\n    numMap := make(map[int]int)\n    for i, num := range nums {\n        complement := target - num\n        if j, ok := numMap[complement]; ok {\n            return []int{j, i}\n        } else {\n            numMap[num] = i\n        }\n    }\n    return []int{}\n}\n"})})}),(0,a.jsx)(i.A,{value:"java",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",children:"import java.util.HashMap;\nimport java.util.Map;\n\nclass Solution {\n    public int[] twoSum(int[] nums, int target) {\n        Map<Integer, Integer> numMap = new HashMap<>();\n        for (int i = 0; i < nums.length; i++) {\n            int complement = target - nums[i];\n            if (numMap.containsKey(complement)) {\n                return new int[] { numMap.get(complement), i };\n            } else {\n                numMap.put(nums[i], i);\n            }\n        }\n        return new int[] {};\n    }\n}\n"})})}),(0,a.jsx)(i.A,{value:"csharp",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-csharp",children:"using System.Collections.Generic;\n\npublic class Solution {\n    public int[] TwoSum(int[] nums, int target) {\n        Dictionary<int, int> numMap = new Dictionary<int, int>();\n        for (int i = 0; i < nums.Length; i++) {\n            int complement = target - nums[i];\n            if (numMap.ContainsKey(complement)) {\n                return new int[] { numMap[complement], i };\n            } else {\n                numMap[nums[i]] = i;\n            }\n        }\n        return new int[] {};\n    }\n}\n"})})})]}),"\n",(0,a.jsx)(n.h3,{id:"step-by-step-explanation",children:"Step-by-Step Explanation"}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsxs)(n.li,{children:["Initialize a hash table ",(0,a.jsx)(n.code,{children:"numMap"})," to store each number and its index."]}),"\n",(0,a.jsxs)(n.li,{children:["Iterate through the ",(0,a.jsx)(n.code,{children:"nums"})," array using a ",(0,a.jsx)(n.code,{children:"for"})," loop, with index ",(0,a.jsx)(n.code,{children:"i"})," and value ",(0,a.jsx)(n.code,{children:"num"}),"."]}),"\n",(0,a.jsxs)(n.li,{children:["Calculate the ",(0,a.jsx)(n.code,{children:"complement"})," needed to reach the ",(0,a.jsx)(n.code,{children:"target"})," (i.e., ",(0,a.jsx)(n.code,{children:"complement = target - num"}),")."]}),"\n",(0,a.jsxs)(n.li,{children:["Check if the ",(0,a.jsx)(n.code,{children:"complement"})," is already present as a key in the ",(0,a.jsx)(n.code,{children:"numMap"}),".","\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["If yes, return a new array containing the index of the ",(0,a.jsx)(n.code,{children:"complement"})," (obtained from ",(0,a.jsx)(n.code,{children:"numMap[complement]"}),") and the current index ",(0,a.jsx)(n.code,{children:"i"}),"."]}),"\n",(0,a.jsxs)(n.li,{children:["If no, add the current number ",(0,a.jsx)(n.code,{children:"num"})," as a key to the ",(0,a.jsx)(n.code,{children:"numMap"})," with its index ",(0,a.jsx)(n.code,{children:"i"})," as the value."]}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.li,{children:"If no solution is found after iterating through the entire array (which, according to the problem statement, should not happen), you can return an empty array."}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"alternative-approaches",children:"Alternative Approaches"}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"Brute Force"})}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Time Complexity: O(n^2)"}),"\n",(0,a.jsx)(n.li,{children:"Space Complexity: O(1)"}),"\n",(0,a.jsx)(n.li,{children:"Trade-offs: Simple to implement, but not efficient for large arrays."}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"Sorted Array and Two Pointers"})}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Time Complexity: O(n log n)"}),"\n",(0,a.jsx)(n.li,{children:"Space Complexity: O(n)"}),"\n",(0,a.jsx)(n.li,{children:"Trade-offs: Requires sorting the array first, which can be slower than the hash table approach. It also changes the relative indices of the input array which may be undesirable."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"common-mistakes-and-pitfalls",children:"Common Mistakes and Pitfalls"}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsx)(n.li,{children:"Forgetting to handle the case where no solution exists (though the problem states there is exactly one solution)."}),"\n",(0,a.jsx)(n.li,{children:"Returning the same index twice."}),"\n",(0,a.jsx)(n.li,{children:"Not checking for integer overflow when calculating the complement."}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"related-problems",children:"Related Problems"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"https://leetcode.com/problems/3sum",children:"3Sum"})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"https://leetcode.com/problems/4sum",children:"4Sum"})}),"\n"]})]})}function m(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}},9329:(e,n,t)=>{t.d(n,{A:()=>s});t(6540);var r=t(4164);const a={tabItem:"tabItem_Ymn6"};var l=t(4848);function s(e){let{children:n,hidden:t,className:s}=e;return(0,l.jsx)("div",{role:"tabpanel",className:(0,r.A)(a.tabItem,s),hidden:t,children:n})}},5537:(e,n,t)=>{t.d(n,{A:()=>w});var r=t(6540),a=t(4164),l=t(5627),s=t(6347),i=t(372),o=t(604),c=t(1861),u=t(8749);function d(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:t}=e;return(0,r.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:t,attributes:r,default:a}}=e;return{value:n,label:t,attributes:r,default:a}}))}(t);return function(e){const n=(0,c.XI)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function m(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function p(e){let{queryString:n=!1,groupId:t}=e;const a=(0,s.W6)(),l=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,o.aZ)(l),(0,r.useCallback)((e=>{if(!l)return;const n=new URLSearchParams(a.location.search);n.set(l,e),a.replace({...a.location,search:n.toString()})}),[l,a])]}function x(e){const{defaultValue:n,queryString:t=!1,groupId:a}=e,l=h(e),[s,o]=(0,r.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!m({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const r=t.find((e=>e.default))??t[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:l}))),[c,d]=p({queryString:t,groupId:a}),[x,j]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[a,l]=(0,u.Dv)(t);return[a,(0,r.useCallback)((e=>{t&&l.set(e)}),[t,l])]}({groupId:a}),f=(()=>{const e=c??x;return m({value:e,tabValues:l})?e:null})();(0,i.A)((()=>{f&&o(f)}),[f]);return{selectedValue:s,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);o(e),d(e),j(e)}),[d,j,l]),tabValues:l}}var j=t(9136);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var b=t(4848);function g(e){let{className:n,block:t,selectedValue:r,selectValue:s,tabValues:i}=e;const o=[],{blockElementScrollPositionUntilNextRender:c}=(0,l.a_)(),u=e=>{const n=e.currentTarget,t=o.indexOf(n),a=i[t].value;a!==r&&(c(n),s(a))},d=e=>{let n=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const t=o.indexOf(e.currentTarget)+1;n=o[t]??o[0];break}case"ArrowLeft":{const t=o.indexOf(e.currentTarget)-1;n=o[t]??o[o.length-1];break}}n?.focus()};return(0,b.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":t},n),children:i.map((e=>{let{value:n,label:t,attributes:l}=e;return(0,b.jsx)("li",{role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:e=>{o.push(e)},onKeyDown:d,onClick:u,...l,className:(0,a.A)("tabs__item",f.tabItem,l?.className,{"tabs__item--active":r===n}),children:t??n},n)}))})}function v(e){let{lazy:n,children:t,selectedValue:l}=e;const s=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=s.find((e=>e.props.value===l));return e?(0,r.cloneElement)(e,{className:(0,a.A)("margin-top--md",e.props.className)}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:s.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==l})))})}function y(e){const n=x(e);return(0,b.jsxs)("div",{className:(0,a.A)("tabs-container",f.tabList),children:[(0,b.jsx)(g,{...n,...e}),(0,b.jsx)(v,{...n,...e})]})}function w(e){const n=(0,j.A)();return(0,b.jsx)(y,{...e,children:d(e.children)},String(n))}},8453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>i});var r=t(6540);const a={},l=r.createContext(a);function s(e){const n=r.useContext(l);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),r.createElement(l.Provider,{value:n},e.children)}}}]);