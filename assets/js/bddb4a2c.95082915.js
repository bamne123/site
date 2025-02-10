"use strict";(self.webpackChunkmy_stie=self.webpackChunkmy_stie||[]).push([[8567],{8830:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>c,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>a});const s=JSON.parse('{"id":"leetcode/Easy/Two Sum","title":"Two Sum","description":"Two Sum is a classic problem in LeetCode where you\'re given an array of integers and a target sum, and you need to find two elements in the array that add up to the target sum.","source":"@site/docs/leetcode/Easy/Two Sum.md","sourceDirName":"leetcode/Easy","slug":"/leetcode/Easy/Two Sum","permalink":"/site/docs/leetcode/Easy/Two Sum","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/leetcode/Easy/Two Sum.md","tags":[],"version":"current","frontMatter":{},"sidebar":"leetcodeSidebar","previous":{"title":"Welcome","permalink":"/site/docs/leetcode/sytem-design/intro"},"next":{"title":"**Add Two Numbers**","permalink":"/site/docs/leetcode/Medium/Add Two Numbers"}}');var r=n(4848),o=n(8453);const i={},c=void 0,d={},a=[];function l(e){const t={code:"code",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"Two Sum"})," is a classic problem in ",(0,r.jsx)(t.strong,{children:"LeetCode"})," where you're given an array of integers and a target sum, and you need to find two elements in the array that add up to the target sum."]}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"Problem Statement:"}),"\nGiven an array of integers ",(0,r.jsx)(t.code,{children:"nums"})," and an integer ",(0,r.jsx)(t.code,{children:"target"}),", return indices of the two elements which add up to ",(0,r.jsx)(t.code,{children:"target"}),". You may assume that each input would have exactly one solution, and you may not use the same element twice."]}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"Example:"}),"\nInput: ",(0,r.jsx)(t.code,{children:"nums = [2, 7, 11, 15], target = 9"}),"\nOutput: ",(0,r.jsx)(t.code,{children:"Indices of the two elements which add up to 9: [0, 1]"})]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"Solution:"})}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-python",children:'def two_sum(nums, target):\n    """\n    Returns indices of the two elements which add up to the target sum.\n\n    Args:\n        nums (list): A list of integers.\n        target (int): The target sum.\n\n    Returns:\n        list: Indices of the two elements which add up to the target sum.\n    """\n    # Create a dictionary to store elements and their indices\n    num_dict = {}\n    \n    # Iterate through the array with two pointers\n    for i, num in enumerate(nums):\n        # Calculate the complement of the current number\n        complement = target - num\n        \n        # Check if the complement is in the dictionary\n        if complement in num_dict:\n            # Return the indices of the two elements\n            return [num_dict[complement], i]\n        \n        # Add the current number and its index to the dictionary\n        num_dict[num] = i\n    \n    # If no solution is found, return an empty list\n    return []\n'})}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"Time Complexity:"})," O(n)\n",(0,r.jsx)(t.strong,{children:"Space Complexity:"})," O(n)"]}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"Explanation:"}),"\nThe algorithm uses a dictionary to store elements and their indices. It iterates through the array with two pointers, ",(0,r.jsx)(t.code,{children:"i"})," and ",(0,r.jsx)(t.code,{children:"j"}),", where ",(0,r.jsx)(t.code,{children:"i"})," points to the current element and ",(0,r.jsx)(t.code,{children:"j"})," points to the next element. For each element, it calculates the complement of the current number with respect to the target sum. If the complement is in the dictionary, it means that there are two elements that add up to the target sum, so it returns their indices. If not, it adds the current number and its index to the dictionary."]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"Example Use Cases:"})}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"two_sum([2, 7, 11, 15], 9)"})," returns ",(0,r.jsx)(t.code,{children:"[0, 1]"})]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"two_sum([3, 2, 4], 6)"})," returns ",(0,r.jsx)(t.code,{children:"[1, 2]"})]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"two_sum([3, 3], 6)"})," returns ",(0,r.jsx)(t.code,{children:"[0, 1]"})]}),"\n"]})]})}function u(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>c});var s=n(6540);const r={},o=s.createContext(r);function i(e){const t=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),s.createElement(o.Provider,{value:t},e.children)}}}]);