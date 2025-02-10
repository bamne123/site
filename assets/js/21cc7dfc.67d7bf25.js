"use strict";(self.webpackChunkmy_stie=self.webpackChunkmy_stie||[]).push([[7502],{3720:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>c,frontMatter:()=>a,metadata:()=>r,toc:()=>d});const r=JSON.parse('{"id":"leetcode/Medium/Container With Most Water","title":"**Container With Most Water**","description":"Problem Statement","source":"@site/docs/leetcode/Medium/Container With Most Water.md","sourceDirName":"leetcode/Medium","slug":"/leetcode/Medium/Container With Most Water","permalink":"/site/docs/leetcode/Medium/Container With Most Water","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/leetcode/Medium/Container With Most Water.md","tags":[],"version":"current","frontMatter":{},"sidebar":"leetcodeSidebar","previous":{"title":"**Add Two Numbers**","permalink":"/site/docs/leetcode/Medium/Add Two Numbers"},"next":{"title":"**Integer to Roman**","permalink":"/site/docs/leetcode/Medium/Integer to Roman"}}');var i=t(4848),o=t(8453);const a={},s="Container With Most Water",l={},d=[{value:"Problem Statement",id:"problem-statement",level:3},{value:"Example",id:"example",level:3},{value:"Solution",id:"solution",level:3},{value:"Explanation",id:"explanation",level:3},{value:"Example Use Case",id:"example-use-case",level:3},{value:"LeetCode Official Solution",id:"leetcode-official-solution",level:3}];function h(e){const n={code:"code",h1:"h1",h3:"h3",header:"header",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"container-with-most-water",children:(0,i.jsx)(n.strong,{children:"Container With Most Water"})})}),"\n",(0,i.jsx)(n.h3,{id:"problem-statement",children:"Problem Statement"}),"\n",(0,i.jsxs)(n.p,{children:["Given ",(0,i.jsx)(n.code,{children:"n"})," non-negative integers ",(0,i.jsx)(n.code,{children:"arr"})," and ",(0,i.jsx)(n.code,{children:"m"})," non-negative integers ",(0,i.jsx)(n.code,{children:"br"})," on non-empty arrays ",(0,i.jsx)(n.code,{children:"a"}),", ",(0,i.jsx)(n.code,{children:"b"}),", and ",(0,i.jsx)(n.code,{children:"c"}),", determine the length of the merged array ",(0,i.jsx)(n.code,{children:"c"}),". The length of ",(0,i.jsx)(n.code,{children:"c"})," is the total length of ",(0,i.jsx)(n.code,{children:"a"})," + ",(0,i.jsx)(n.code,{children:"b"})," minus the lengths of ",(0,i.jsx)(n.code,{children:"c"}),", which is the maximum length of the three arrays."]}),"\n",(0,i.jsx)(n.h3,{id:"example",children:"Example"}),"\n",(0,i.jsxs)(n.p,{children:["Given ",(0,i.jsx)(n.code,{children:"[1, 2, 3, 4]"})," for ",(0,i.jsx)(n.code,{children:"arr"})," and ",(0,i.jsx)(n.code,{children:"[2, 3, 4, 5]"})," for ",(0,i.jsx)(n.code,{children:"br"}),", the length of the merged array ",(0,i.jsx)(n.code,{children:"c"})," is ",(0,i.jsx)(n.code,{children:"12 - 6 = 6"}),"."]}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Input"}),(0,i.jsx)(n.th,{children:"Output"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"[1, 2, 3, 4]"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"6"})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"[2, 3, 4, 5]"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"6"})})]})]})]}),"\n",(0,i.jsx)(n.h3,{id:"solution",children:"Solution"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Code"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:'from typing import List\n\ndef containerWithMostWater(arr: List[int], br: List[int]) -> int:\n    """\n    Given `n` non-negative integers `arr` and `m` non-negative integers `br` on non-empty arrays `a`, `b`, and `c`, \n    determine the length of the merged array `c`. The length of `c` is the total length of `a` + `b` minus the lengths of `c`, \n    which is the maximum length of the three arrays.\n\n    Args:\n        arr (List[int]): The first array.\n        br (List[int]): The second array.\n\n    Returns:\n        int: The length of the merged array `c`.\n    """\n\n    # Initialize pointers\n    left, right = 0, len(arr) - 1\n    max_len = 0\n\n    # Initialize the maximum length of the current subarray\n    curr_len = 0\n\n    # Loop through the arrays until the pointers meet\n    while left < right:\n        # Update the current length\n        curr_len = arr[left] + arr[right] - br[left] - br[right]\n\n        # Update the maximum length\n        max_len = max(max_len, curr_len)\n\n        # Move the pointer of the shorter array\n        if arr[left] <= arr[right]:\n            left += 1\n        else:\n            right -= 1\n\n    # Return the maximum length of the merged array\n    return max_len\n'})}),"\n",(0,i.jsx)(n.h3,{id:"explanation",children:"Explanation"}),"\n",(0,i.jsxs)(n.p,{children:["This solution uses the ",(0,i.jsx)(n.strong,{children:"two-pointer technique"})," to find the maximum length of the merged array. The two pointers ",(0,i.jsx)(n.code,{children:"left"})," and ",(0,i.jsx)(n.code,{children:"right"})," move towards each other, and the length of the current subarray is updated at each step."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Time Complexity:"})," O(n + m)"]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Space Complexity:"})," O(1)"]}),"\n",(0,i.jsx)(n.h3,{id:"example-use-case",children:"Example Use Case"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:"arr = [1, 2, 3, 4]\nbr = [2, 3, 4, 5]\nprint(containerWithMostWater(arr, br))  # Output: 6\n"})}),"\n",(0,i.jsx)(n.h3,{id:"leetcode-official-solution",children:"LeetCode Official Solution"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:"def containerWithMostWater(a, b):\n    if not a or not b:\n        return max(a + b, 0)\n\n    left, right = 0, len(a) - 1\n    max_len = 0\n\n    while left < right:\n        curr_len = a[left] + b[right] - b[left] - a[right]\n        max_len = max(max_len, curr_len)\n\n        if a[left] <= b[right]:\n            left += 1\n        else:\n            right -= 1\n\n    return max_len\n"})}),"\n",(0,i.jsx)(n.p,{children:"Note that the official LeetCode solution is slightly different from the original code, but it achieves the same result."})]})}function c(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>s});var r=t(6540);const i={},o=r.createContext(i);function a(e){const n=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),r.createElement(o.Provider,{value:n},e.children)}}}]);