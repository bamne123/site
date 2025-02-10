"use strict";(self.webpackChunkmy_stie=self.webpackChunkmy_stie||[]).push([[435],{9767:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>d,default:()=>c,frontMatter:()=>i,metadata:()=>r,toc:()=>l});const r=JSON.parse('{"id":"leetcode/Hard/Median of Two Sorted Arrays","title":"Median of Two Sorted Arrays","description":"Problem Title: Median of Two Sorted Arrays","source":"@site/docs/leetcode/Hard/Median of Two Sorted Arrays.md","sourceDirName":"leetcode/Hard","slug":"/leetcode/Hard/Median of Two Sorted Arrays","permalink":"/site/docs/leetcode/Hard/Median of Two Sorted Arrays","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/leetcode/Hard/Median of Two Sorted Arrays.md","tags":[],"version":"current","frontMatter":{},"sidebar":"leetcodeSidebar","previous":{"title":"**Valid Parentheses**","permalink":"/site/docs/leetcode/Easy/Valid Parentheses"},"next":{"title":"Regular Expression Matching","permalink":"/site/docs/leetcode/Hard/Regular Expression Matching"}}');var o=t(4848),s=t(8453);const i={},d=void 0,a={},l=[{value:"Problem Title: Median of Two Sorted Arrays",id:"problem-title-median-of-two-sorted-arrays",level:3},{value:"Difficulty: Hard",id:"difficulty-hard",level:4},{value:"LeetCode Official Solutions",id:"leetcode-official-solutions",level:2},{value:"Additional Features",id:"additional-features",level:3}];function m(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h3,{id:"problem-title-median-of-two-sorted-arrays",children:"Problem Title: Median of Two Sorted Arrays"}),"\n",(0,o.jsx)(n.h4,{id:"difficulty-hard",children:"Difficulty: Hard"}),"\n",(0,o.jsx)(n.p,{children:"The problem asks us to find the median of two sorted arrays."}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Problem Statement:"}),"\nGiven two sorted arrays ",(0,o.jsx)(n.code,{children:"nums1"})," and ",(0,o.jsx)(n.code,{children:"nums2"}),", return the median of the two arrays merged into one. If the total number of elements is odd, the median is the middle element. If the total number of elements is even, the median is the average of the two middle elements."]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"Example:"})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"Input: nums1 = [1, 3]\nInput: nums2 = [2]\nOutput: 2\n"})}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Explanation:"}),"\nTo solve this problem, we can use a two-pointer technique. We start by comparing the first elements of ",(0,o.jsx)(n.code,{children:"nums1"})," and ",(0,o.jsx)(n.code,{children:"nums2"}),". If the first element is smaller, we move the pointer in ",(0,o.jsx)(n.code,{children:"nums1"})," one step forward. If the first element is larger, we move the pointer in ",(0,o.jsx)(n.code,{children:"nums2"})," one step forward. We continue this process until we reach the end of one of the arrays."]}),"\n",(0,o.jsx)(n.p,{children:"Here's the code in Markdown:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-md",children:"# Problem Title: Median of Two Sorted Arrays\n#### Difficulty: Hard\n\n#### Problem Statement:\nGiven two sorted arrays `nums1` and `nums2`, return the median of the two arrays merged into one. If the total number of elements is odd, the median is the middle element. If the total number of elements is even, the median is the average of the two middle elements.\n\n## Explanation\nTo solve this problem, we can use a two-pointer technique. We start by comparing the first elements of `nums1` and `nums2`. If the first element is smaller, we move the pointer in `nums1` one step forward. If the first element is larger, we move the pointer in `nums2` one step forward. We continue this process until we reach the end of one of the arrays.\n\n## Time & Space Complexity\n- **Time Complexity:** O(n + m)\n- **Space Complexity:** O(1)\n\n## Solution\n```language\ndef findMedianSortedArrays(self, nums1: List[int], nums2: List[int]) -> float:\n    merged = []\n    i, j = 0, 0\n    \n    while i < len(nums1) and j < len(nums2):\n        if nums1[i] < nums2[j]:\n            merged.append(nums1[i])\n            i += 1\n        else:\n            merged.append(nums2[j])\n            j += 1\n            \n    merged += nums1[i:]\n    merged += nums2[j:]\n    \n    if len(merged) % 2 == 0:\n        return (merged[len(merged) // 2 - 1] + merged[len(merged) // 2]) / 2\n    else:\n        return merged[len(merged) // 2]\n"})}),"\n",(0,o.jsx)(n.h2,{id:"leetcode-official-solutions",children:"LeetCode Official Solutions"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"https://leetcode.com/problems/median-of-two-sorted-arrays/",children:"LeetCode Solution"})}),"\n"]}),"\n",(0,o.jsx)(n.h3,{id:"additional-features",children:"Additional Features"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:'If no solution is provided by the user, leave the "Solution" section empty.'}),"\n",(0,o.jsx)(n.li,{children:"If the problem is not found, respond with a polite message."}),"\n",(0,o.jsx)(n.li,{children:"Ensure that the JSON structure is valid and all fields are properly filled."}),"\n"]})]})}function c(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(m,{...e})}):m(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>d});var r=t(6540);const o={},s=r.createContext(o);function i(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);