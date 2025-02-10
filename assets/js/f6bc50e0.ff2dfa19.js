"use strict";(self.webpackChunkmy_stie=self.webpackChunkmy_stie||[]).push([[118],{6071:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>h});const s=JSON.parse('{"id":"leetcode/Easy/Two Sum","title":"Two Sum","description":"Two Sum","source":"@site/docs/leetcode/Easy/1-Two Sum.md","sourceDirName":"leetcode/Easy","slug":"/leetcode/Easy/Two Sum","permalink":"/site/docs/leetcode/Easy/Two Sum","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/leetcode/Easy/1-Two Sum.md","tags":[],"version":"current","sidebarPosition":1,"frontMatter":{},"sidebar":"leetcodeSidebar","previous":{"title":"Welcome","permalink":"/site/docs/leetcode/intro"}}');var r=n(4848),i=n(8453);const a={},o=void 0,l={},h=[{value:"Problem Statement",id:"problem-statement",level:3},{value:"Solution Complexity",id:"solution-complexity",level:3},{value:"Step-by-Step Explanation",id:"step-by-step-explanation",level:3}];function c(e){const t={code:"code",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"Two Sum"})}),"\n",(0,r.jsx)(t.h3,{id:"problem-statement",children:"Problem Statement"}),"\n",(0,r.jsx)(t.p,{children:"Given an array of integers and a target sum, return the indices of the two numbers that add up to the target sum. If such a pair exists, return the pair; otherwise, return an empty array."}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"Constraints"})}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["The input array ",(0,r.jsx)(t.code,{children:"nums"})," is not null and contains only non-negative integers."]}),"\n",(0,r.jsxs)(t.li,{children:["The ",(0,r.jsx)(t.code,{children:"target"})," is not null and is equal to the sum of the elements in ",(0,r.jsx)(t.code,{children:"nums"}),"."]}),"\n"]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"Examples"})}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["Input: ",(0,r.jsx)(t.code,{children:"nums = [2, 7, 11, 15], target = 9"}),"\nOutput: ",(0,r.jsx)(t.code,{children:"[0, 1]"})]}),"\n",(0,r.jsxs)(t.li,{children:["Input: ",(0,r.jsx)(t.code,{children:"nums = [3, 2, 4], target = 6"}),"\nOutput: ",(0,r.jsx)(t.code,{children:"[1, 2]"})]}),"\n",(0,r.jsxs)(t.li,{children:["Input: ",(0,r.jsx)(t.code,{children:"nums = [3, 3], target = 6"}),"\nOutput: ",(0,r.jsx)(t.code,{children:"[0, 1]"})]}),"\n",(0,r.jsxs)(t.li,{children:["Input: ",(0,r.jsx)(t.code,{children:"nums = [5], target = 10"}),"\nOutput: ",(0,r.jsx)(t.code,{children:"[]"})]}),"\n"]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"Explanation"})}),"\n",(0,r.jsx)(t.p,{children:"We can solve this problem using a two-pointer technique along with a hash table to store the elements of the array and their indices. Here's a step-by-step explanation of the solution:"}),"\n",(0,r.jsxs)(t.ol,{children:["\n",(0,r.jsxs)(t.li,{children:["Create a hash table ",(0,r.jsx)(t.code,{children:"numToIndex"})," to store the elements of the array and their indices."]}),"\n",(0,r.jsxs)(t.li,{children:["Iterate over the array using the ",(0,r.jsx)(t.code,{children:"i"})," variable, which represents the current element being processed."]}),"\n",(0,r.jsxs)(t.li,{children:["For each element ",(0,r.jsx)(t.code,{children:"nums[i]"}),", calculate its complement ",(0,r.jsx)(t.code,{children:"target - nums[i]"}),"."]}),"\n",(0,r.jsx)(t.li,{children:"If the complement is already in the hash table, it means we've found a pair that adds up to the target. Return the indices of the complement and the current element."}),"\n",(0,r.jsx)(t.li,{children:"If the complement is not in the hash table, add the current element and its index to the hash table."}),"\n",(0,r.jsx)(t.li,{children:"Continue iterating over the array until all elements have been processed."}),"\n"]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"Code Implementation"})}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-javascript",children:"/**\n * Returns the indices of the two numbers that add up to the target sum.\n * If such a pair exists, returns the pair; otherwise, returns an empty array.\n *\n * @param {number[]} nums - The input array of integers.\n * @param {number} target - The target sum.\n * @returns {number[]} The indices of the two numbers that add up to the target sum.\n */\n\nfunction twoSum(nums, target) {\n  // Create a hash table to store the elements of the array and their indices.\n  const numToIndex = {};\n  \n  // Iterate over the array using the i variable, which represents the current element being processed.\n  for (let i = 0; i < nums.length; i++) {\n    // Calculate the complement of the current element.\n    const complement = target - nums[i];\n    \n    // If the complement is already in the hash table, it means we've found a pair that adds up to the target.\n    if (numToIndex[complement]) {\n      // Return the indices of the complement and the current element.\n      return [numToIndex[complement], i];\n    }\n    \n    // If the complement is not in the hash table, add the current element and its index to the hash table.\n    numToIndex[nums[i]] = i;\n  }\n  \n  // If no pair is found that adds up to the target, return an empty array.\n  return [];\n}\n\n// Example usage:\nconst nums = [2, 7, 11, 15];\nconst target = 9;\nconsole.log(twoSum(nums, target)); // Output: [0, 1]\n"})}),"\n",(0,r.jsx)(t.h3,{id:"solution-complexity",children:"Solution Complexity"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"Time complexity: O(n), where n is the number of elements in the array."}),"\n",(0,r.jsx)(t.li,{children:"Space complexity: O(n), where n is the number of elements in the array."}),"\n"]}),"\n",(0,r.jsx)(t.h3,{id:"step-by-step-explanation",children:"Step-by-Step Explanation"}),"\n",(0,r.jsxs)(t.ol,{children:["\n",(0,r.jsxs)(t.li,{children:["Create a hash table ",(0,r.jsx)(t.code,{children:"numToIndex"})," to store the elements of the array and their indices."]}),"\n",(0,r.jsxs)(t.li,{children:["Iterate over the array using the ",(0,r.jsx)(t.code,{children:"i"})," variable, which represents the current element being processed."]}),"\n",(0,r.jsxs)(t.li,{children:["For each element ",(0,r.jsx)(t.code,{children:"nums[i]"}),", calculate its complement ",(0,r.jsx)(t.code,{children:"target - nums[i]"}),"."]}),"\n",(0,r.jsx)(t.li,{children:"If the complement is already in the hash table, it means we've found a pair that adds up to the target. Return the indices of the complement and the current element."}),"\n",(0,r.jsx)(t.li,{children:"If the complement is not in the hash table, add the current element and its index to the hash table."}),"\n",(0,r.jsx)(t.li,{children:"Continue iterating over the array until all elements have been processed."}),"\n"]})]})}function d(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>o});var s=n(6540);const r={},i=s.createContext(r);function a(e){const t=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),s.createElement(i.Provider,{value:t},e.children)}}}]);