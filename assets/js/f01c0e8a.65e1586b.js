"use strict";(self.webpackChunkmy_stie=self.webpackChunkmy_stie||[]).push([[1361],{9504:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>c,default:()=>h,frontMatter:()=>l,metadata:()=>s,toc:()=>d});const s=JSON.parse('{"id":"leetcode/Medium/3Sum Closest","title":"3Sum Closest","description":"3Sum Closest","source":"@site/docs/leetcode/Medium/3Sum Closest.md","sourceDirName":"leetcode/Medium","slug":"/leetcode/Medium/3Sum Closest","permalink":"/site/docs/leetcode/Medium/3Sum Closest","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/leetcode/Medium/3Sum Closest.md","tags":[],"version":"current","frontMatter":{},"sidebar":"leetcodeSidebar","previous":{"title":"Regular Expression Matching","permalink":"/site/docs/leetcode/Hard/Regular Expression Matching"},"next":{"title":"**3Sum**","permalink":"/site/docs/leetcode/Medium/3Sum"}}');var r=n(4848),i=n(8453);const l={},c=void 0,o={},d=[];function u(e){const t={code:"code",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"3Sum Closest"})}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"Problem Statement:"})}),"\n",(0,r.jsxs)(t.p,{children:["Given an array of integers ",(0,r.jsx)(t.code,{children:"nums"})," and an integer ",(0,r.jsx)(t.code,{children:"target"}),", return the sum of the three elements in ",(0,r.jsx)(t.code,{children:"nums"})," that are closest to ",(0,r.jsx)(t.code,{children:"target"}),"."]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"Example:"})}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["Input: ",(0,r.jsx)(t.code,{children:"nums = [-1, 0, 1, 2, -1, -4], target = 0"})]}),"\n",(0,r.jsxs)(t.li,{children:["Output: ",(0,r.jsx)(t.code,{children:"3"})," (since ",(0,r.jsx)(t.code,{children:"nums = [-1, -1, 2]"})," is closest to ",(0,r.jsx)(t.code,{children:"target = 0"}),")"]}),"\n"]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"Constraints:"})}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.code,{children:"1 <= nums.length <= 5 * 10^4"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.code,{children:"0 <= target <= 5 * 10^4"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.code,{children:"-10^5 <= nums[i] <= 10^5"})}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"i"})," is 0-indexed"]}),"\n"]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"Solution:"})}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-python",children:"def threeSumClosest(nums, target):\n    nums.sort()\n    closest_sum = float('inf')\n    result = []\n\n    for i in range(len(nums) - 2):\n        # Skip duplicate values\n        if i > 0 and nums[i] == nums[i - 1]:\n            continue\n\n        left, right = i + 1, len(nums) - 1\n\n        while left < right:\n            current_sum = nums[i] + nums[left] + nums[right]\n\n            if current_sum < target:\n                left += 1\n            elif current_sum > target:\n                right -= 1\n            else:\n                # Update the closest sum if necessary\n                if abs(current_sum - target) < abs(closest_sum - target):\n                    closest_sum = current_sum\n                    result = [nums[i], nums[left], nums[right]]\n\n                # Move the pointers\n                if current_sum < target:\n                    left += 1\n                else:\n                    right -= 1\n\n    return closest_sum\n"})}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"Explanation:"})}),"\n",(0,r.jsxs)(t.ol,{children:["\n",(0,r.jsxs)(t.li,{children:["First, sort the input array ",(0,r.jsx)(t.code,{children:"nums"}),"."]}),"\n",(0,r.jsxs)(t.li,{children:["Initialize the closest sum to infinity (",(0,r.jsx)(t.code,{children:"float('inf')"}),") and an empty result list (",(0,r.jsx)(t.code,{children:"[]"}),")."]}),"\n",(0,r.jsx)(t.li,{children:"Iterate through the array, considering each element as the first element of the three-sum closest to the target."}),"\n",(0,r.jsxs)(t.li,{children:["For each element, initialize two pointers (",(0,r.jsx)(t.code,{children:"left"})," and ",(0,r.jsx)(t.code,{children:"right"}),") to the next element and the last element of the array, respectively."]}),"\n",(0,r.jsx)(t.li,{children:"While the pointers haven't crossed each other, calculate the current sum of the three elements."}),"\n",(0,r.jsx)(t.li,{children:"If the current sum is less than the target, move the left pointer to the right to increase the sum."}),"\n",(0,r.jsx)(t.li,{children:"If the current sum is greater than the target, move the right pointer to the left to decrease the sum."}),"\n",(0,r.jsx)(t.li,{children:"If the current sum is equal to the target, update the closest sum if necessary and add the current three numbers to the result list."}),"\n",(0,r.jsx)(t.li,{children:"Move both pointers after each iteration."}),"\n",(0,r.jsx)(t.li,{children:"Finally, return the closest sum found."}),"\n"]}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"Time Complexity:"})," O(n^2)"]}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"Space Complexity:"})," O(1) (excluding the output space for the result list and the target value)"]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"Example Use Cases:"})}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"nums = [-1, 0, 1, 2, -1, -4], target = 0"})," returns ",(0,r.jsx)(t.code,{children:"3"})]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"nums = [1, 2, 3, 4, 5], target = 6"})," returns ",(0,r.jsx)(t.code,{children:"-1"})]}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>l,x:()=>c});var s=n(6540);const r={},i=s.createContext(r);function l(e){const t=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),s.createElement(i.Provider,{value:t},e.children)}}}]);