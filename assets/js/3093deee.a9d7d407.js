"use strict";(self.webpackChunkmy_stie=self.webpackChunkmy_stie||[]).push([[3141],{6882:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>c,default:()=>m,frontMatter:()=>o,metadata:()=>r,toc:()=>d});const r=JSON.parse('{"id":"leetcode/Easy/Move Zeroes","title":"283 - Move Zeroes","description":"Problem Information","source":"@site/docs/leetcode/Easy/283-Move Zeroes.md","sourceDirName":"leetcode/Easy","slug":"/leetcode/Easy/Move Zeroes","permalink":"/site/docs/leetcode/Easy/Move Zeroes","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/leetcode/Easy/283-Move Zeroes.md","tags":[],"version":"current","sidebarPosition":283,"frontMatter":{},"sidebar":"leetcodeSidebar","previous":{"title":"169 - Majority Element","permalink":"/site/docs/leetcode/Easy/Majority Element"},"next":{"title":"977 - Squares of a Sorted Array","permalink":"/site/docs/leetcode/Easy/Squares of a Sorted Array"}}');var l=t(4848),s=t(8453),a=t(5537),i=t(9329);const o={},c="283 - Move Zeroes",u={},d=[{value:"Problem Information",id:"problem-information",level:2},{value:"Problem Statement",id:"problem-statement",level:2},{value:"Examples",id:"examples",level:3},{value:"Constraints",id:"constraints",level:3},{value:"Hints",id:"hints",level:3},{value:"Solution Approach",id:"solution-approach",level:2},{value:"Complexity Analysis",id:"complexity-analysis",level:3},{value:"Code Implementation",id:"code-implementation",level:3},{value:"Step-by-Step Explanation",id:"step-by-step-explanation",level:3},{value:"Alternative Approaches",id:"alternative-approaches",level:2},{value:"Common Mistakes and Pitfalls",id:"common-mistakes-and-pitfalls",level:2},{value:"Related Problems",id:"related-problems",level:2}];function h(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.header,{children:(0,l.jsx)(n.h1,{id:"283---move-zeroes",children:"283 - Move Zeroes"})}),"\n",(0,l.jsx)(n.h2,{id:"problem-information",children:"Problem Information"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:"Difficulty:"})," Easy"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:"Category:"})," Array, Two Pointers"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:"Link:"})," ",(0,l.jsx)(n.a,{href:"https://leetcode.com/problems/move-zeroes",children:"LeetCode"})]}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"problem-statement",children:"Problem Statement"}),"\n",(0,l.jsxs)(n.p,{children:["Given an integer array ",(0,l.jsx)(n.code,{children:"nums"}),", move all ",(0,l.jsx)(n.code,{children:"0"}),"'s to the end of it while maintaining the relative order of the non-zero elements."]}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:"Note:"})," that you must do this in-place without making a copy of the array."]}),"\n",(0,l.jsx)(n.h3,{id:"examples",children:"Examples"}),"\n",(0,l.jsxs)(n.p,{children:["Input: ",(0,l.jsx)(n.code,{children:"nums = [0,1,0,3,12]"}),"\nOutput: ",(0,l.jsx)(n.code,{children:"[1,3,12,0,0]"}),"\nExplanation: Non-zero elements are moved to the front while keeping their original order, and all zeros are moved to the end."]}),"\n",(0,l.jsx)(n.h3,{id:"constraints",children:"Constraints"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.code,{children:"1 <= nums.length <= 104"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.code,{children:"-104 <= nums[i] <= 104"})}),"\n"]}),"\n",(0,l.jsx)(n.h3,{id:"hints",children:"Hints"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Maintain the relative order of the non-zero elements."}),"\n",(0,l.jsx)(n.li,{children:"The array must be modified in-place."}),"\n",(0,l.jsx)(n.li,{children:"Minimize the total number of operations."}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"solution-approach",children:"Solution Approach"}),"\n",(0,l.jsx)(n.p,{children:"The solution uses a two-pointer approach to move non-zero elements to the front of the array while keeping track of where to place the next non-zero element."}),"\n",(0,l.jsx)(n.h3,{id:"complexity-analysis",children:"Complexity Analysis"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:"Time Complexity:"})," O(n)","\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Where n is the length of the input array. We iterate through the array once."}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:"Space Complexity:"})," O(1)","\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"The algorithm operates in-place and does not use any additional data structures."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.h3,{id:"code-implementation",children:"Code Implementation"}),"\n",(0,l.jsxs)(a.A,{defaultValue:"python",groupId:"cody",values:[{label:"python",value:"python"},{label:"javascript",value:"javascript"},{label:"go",value:"go"},{label:"java",value:"java"},{label:"csharp",value:"csharp"}],children:[(0,l.jsx)(i.A,{value:"python",children:(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-python",children:'class Solution:\n    def moveZeroes(self, nums: List[int]) -> None:\n        """\n        Do not return anything, modify nums in-place instead.\n        """\n        left = 0\n        for right in range(len(nums)):\n            if nums[right] != 0:\n                nums[left], nums[right] = nums[right], nums[left]\n                left += 1\n'})})}),(0,l.jsx)(i.A,{value:"javascript",children:(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-javascript",children:"/**\n * @param {number[]} nums\n * @return {void} Do not return anything, modify nums in-place instead.\n */\nvar moveZeroes = function(nums) {\n    let left = 0;\n    for (let right = 0; right < nums.length; right++) {\n        if (nums[right] !== 0) {\n            [nums[left], nums[right]] = [nums[right], nums[left]];\n            left++;\n        }\n    }\n};\n"})})}),(0,l.jsx)(i.A,{value:"go",children:(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-go",children:"func moveZeroes(nums []int)  {\n    left := 0\n    for right := 0; right < len(nums); right++ {\n        if nums[right] != 0 {\n            nums[left], nums[right] = nums[right], nums[left]\n            left++\n        }\n    }\n}\n"})})}),(0,l.jsx)(i.A,{value:"java",children:(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-java",children:"class Solution {\n    public void moveZeroes(int[] nums) {\n        int left = 0;\n        for (int right = 0; right < nums.length; right++) {\n            if (nums[right] != 0) {\n                int temp = nums[left];\n                nums[left] = nums[right];\n                nums[right] = temp;\n                left++;\n            }\n        }\n    }\n}\n"})})}),(0,l.jsx)(i.A,{value:"csharp",children:(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-csharp",children:"public class Solution {\n    public void MoveZeroes(int[] nums) {\n        int left = 0;\n        for (int right = 0; right < nums.Length; right++) {\n            if (nums[right] != 0) {\n                int temp = nums[left];\n                nums[left] = nums[right];\n                nums[right] = temp;\n                left++;\n            }\n        }\n    }\n}\n"})})})]}),"\n",(0,l.jsx)(n.h3,{id:"step-by-step-explanation",children:"Step-by-Step Explanation"}),"\n",(0,l.jsxs)(n.ol,{children:["\n",(0,l.jsx)(n.li,{children:"Initialize a left pointer to 0."}),"\n",(0,l.jsx)(n.li,{children:"Iterate through the array with the right pointer."}),"\n",(0,l.jsx)(n.li,{children:"If the element at the right pointer is not 0, swap it with the element at the left pointer and increment the left pointer."}),"\n",(0,l.jsx)(n.li,{children:"After iterating through the array, all non-zero elements will be at the front, and all zeros will be at the end."}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"alternative-approaches",children:"Alternative Approaches"}),"\n",(0,l.jsxs)(n.ol,{children:["\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:"Using Additional Array:"})}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Create a new array and copy all non-zero elements into it, then fill the remaining spaces with zeros."}),"\n",(0,l.jsx)(n.li,{children:"Time Complexity: O(n)"}),"\n",(0,l.jsx)(n.li,{children:"Space Complexity: O(n)"}),"\n",(0,l.jsx)(n.li,{children:"Trade-offs: Requires additional space, not in-place."}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:"Using List Comprehension (Python Specific):"})}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Create a new list by concatenating non-zero elements and zeros."}),"\n",(0,l.jsx)(n.li,{children:"Time Complexity: O(n)"}),"\n",(0,l.jsx)(n.li,{children:"Space Complexity: O(n)"}),"\n",(0,l.jsx)(n.li,{children:"Trade-offs: Creates a new list, not in-place."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"common-mistakes-and-pitfalls",children:"Common Mistakes and Pitfalls"}),"\n",(0,l.jsxs)(n.ol,{children:["\n",(0,l.jsx)(n.li,{children:"Not maintaining the relative order of non-zero elements."}),"\n",(0,l.jsx)(n.li,{children:"Using extra space when the problem requires an in-place solution."}),"\n",(0,l.jsx)(n.li,{children:"Incorrectly handling edge cases such as an array with all zeros or no zeros."}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"related-problems",children:"Related Problems"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"https://leetcode.com/problems/remove-element/",children:"Remove Element"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"https://leetcode.com/problems/sort-array-by-parity/",children:"Sort Array By Parity"})}),"\n"]})]})}function m(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(h,{...e})}):h(e)}},9329:(e,n,t)=>{t.d(n,{A:()=>a});t(6540);var r=t(4164);const l={tabItem:"tabItem_Ymn6"};var s=t(4848);function a(e){let{children:n,hidden:t,className:a}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,r.A)(l.tabItem,a),hidden:t,children:n})}},5537:(e,n,t)=>{t.d(n,{A:()=>w});var r=t(6540),l=t(4164),s=t(5627),a=t(6347),i=t(372),o=t(604),c=t(1861),u=t(8749);function d(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:t}=e;return(0,r.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:t,attributes:r,default:l}}=e;return{value:n,label:t,attributes:r,default:l}}))}(t);return function(e){const n=(0,c.XI)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function m(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function p(e){let{queryString:n=!1,groupId:t}=e;const l=(0,a.W6)(),s=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,o.aZ)(s),(0,r.useCallback)((e=>{if(!s)return;const n=new URLSearchParams(l.location.search);n.set(s,e),l.replace({...l.location,search:n.toString()})}),[s,l])]}function f(e){const{defaultValue:n,queryString:t=!1,groupId:l}=e,s=h(e),[a,o]=(0,r.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!m({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const r=t.find((e=>e.default))??t[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:s}))),[c,d]=p({queryString:t,groupId:l}),[f,x]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[l,s]=(0,u.Dv)(t);return[l,(0,r.useCallback)((e=>{t&&s.set(e)}),[t,s])]}({groupId:l}),v=(()=>{const e=c??f;return m({value:e,tabValues:s})?e:null})();(0,i.A)((()=>{v&&o(v)}),[v]);return{selectedValue:a,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);o(e),d(e),x(e)}),[d,x,s]),tabValues:s}}var x=t(9136);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var j=t(4848);function g(e){let{className:n,block:t,selectedValue:r,selectValue:a,tabValues:i}=e;const o=[],{blockElementScrollPositionUntilNextRender:c}=(0,s.a_)(),u=e=>{const n=e.currentTarget,t=o.indexOf(n),l=i[t].value;l!==r&&(c(n),a(l))},d=e=>{let n=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const t=o.indexOf(e.currentTarget)+1;n=o[t]??o[0];break}case"ArrowLeft":{const t=o.indexOf(e.currentTarget)-1;n=o[t]??o[o.length-1];break}}n?.focus()};return(0,j.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.A)("tabs",{"tabs--block":t},n),children:i.map((e=>{let{value:n,label:t,attributes:s}=e;return(0,j.jsx)("li",{role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:e=>{o.push(e)},onKeyDown:d,onClick:u,...s,className:(0,l.A)("tabs__item",v.tabItem,s?.className,{"tabs__item--active":r===n}),children:t??n},n)}))})}function b(e){let{lazy:n,children:t,selectedValue:s}=e;const a=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=a.find((e=>e.props.value===s));return e?(0,r.cloneElement)(e,{className:(0,l.A)("margin-top--md",e.props.className)}):null}return(0,j.jsx)("div",{className:"margin-top--md",children:a.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==s})))})}function y(e){const n=f(e);return(0,j.jsxs)("div",{className:(0,l.A)("tabs-container",v.tabList),children:[(0,j.jsx)(g,{...n,...e}),(0,j.jsx)(b,{...n,...e})]})}function w(e){const n=(0,x.A)();return(0,j.jsx)(y,{...e,children:d(e.children)},String(n))}},8453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>i});var r=t(6540);const l={},s=r.createContext(l);function a(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:a(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);