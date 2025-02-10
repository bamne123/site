"use strict";(self.webpackChunkmy_stie=self.webpackChunkmy_stie||[]).push([[8240],{5330:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>d});const i=JSON.parse('{"id":"leetcode/Medium/Reverse Integer","title":"Reverse Integer","description":"Reverse Integer","source":"@site/docs/leetcode/Medium/Reverse Integer.md","sourceDirName":"leetcode/Medium","slug":"/leetcode/Medium/Reverse Integer","permalink":"/site/docs/leetcode/Medium/Reverse Integer","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/leetcode/Medium/Reverse Integer.md","tags":[],"version":"current","frontMatter":{},"sidebar":"leetcodeSidebar","previous":{"title":"Longest Substring Without Repeating Characters","permalink":"/site/docs/leetcode/Medium/Longest Substring Without Repeating Characters"},"next":{"title":"**String to Integer (atoi)**","permalink":"/site/docs/leetcode/Medium/String to Integer (atoi)"}}');var s=t(4848),r=t(8453);const o={},l=void 0,a={},d=[{value:"Problem Details",id:"problem-details",level:3},{value:"Full Problem Statement",id:"full-problem-statement",level:3},{value:"Explanation",id:"explanation",level:3},{value:"Time Complexity",id:"time-complexity",level:3},{value:"Space Complexity",id:"space-complexity",level:3},{value:"Solution Explanation",id:"solution-explanation",level:3},{value:"LeetCode Official Solution",id:"leetcode-official-solution",level:3},{value:"Example",id:"example",level:3}];function c(e){const n={a:"a",code:"code",h3:"h3",p:"p",pre:"pre",strong:"strong",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Reverse Integer"})}),"\n",(0,s.jsx)(n.h3,{id:"problem-details",children:"Problem Details"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Title:"})," Reverse Integer\n",(0,s.jsx)(n.strong,{children:"Link:"})," ",(0,s.jsx)(n.a,{href:"https://leetcode.com/problems/reverse-integer",children:"https://leetcode.com/problems/reverse-integer"})]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Problem Statement:"})}),"\n",(0,s.jsxs)(n.p,{children:["Given a 32-bit signed integer ",(0,s.jsx)(n.code,{children:"n"}),", reverse the digits of the integer."]}),"\n",(0,s.jsx)(n.h3,{id:"full-problem-statement",children:"Full Problem Statement"}),"\n",(0,s.jsxs)(n.p,{children:["The goal is to write a function that takes an integer ",(0,s.jsx)(n.code,{children:"n"})," as input and returns its reversed integer."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"class Solution:\n    def reverse(self, n: int) -> int:\n        # Convert the integer to a string to easily reverse it\n        str_n = str(n)\n        \n        # Reverse the string\n        reversed_str_n = str_n[::-1]\n        \n        # Convert the reversed string back to an integer\n        reversed_n = int(reversed_str_n)\n        \n        return reversed_n\n"})}),"\n",(0,s.jsx)(n.h3,{id:"explanation",children:"Explanation"}),"\n",(0,s.jsxs)(n.p,{children:["The given solution converts the integer ",(0,s.jsx)(n.code,{children:"n"})," to a string ",(0,s.jsx)(n.code,{children:"str_n"})," to easily reverse it. It then uses Python's slice notation ",(0,s.jsx)(n.code,{children:"str_n[::-1]"})," to reverse the string. Finally, it converts the reversed string back to an integer ",(0,s.jsx)(n.code,{children:"reversed_n"})," and returns it."]}),"\n",(0,s.jsx)(n.h3,{id:"time-complexity",children:"Time Complexity"}),"\n",(0,s.jsx)(n.p,{children:"The time complexity of this solution is O(1), as it only needs to make one pass through the input integer."}),"\n",(0,s.jsx)(n.h3,{id:"space-complexity",children:"Space Complexity"}),"\n",(0,s.jsx)(n.p,{children:"The space complexity of this solution is O(1), as it only uses a constant amount of space to store the input integer and the reversed string."}),"\n",(0,s.jsx)(n.h3,{id:"solution-explanation",children:"Solution Explanation"}),"\n",(0,s.jsx)(n.p,{children:"The solution explains the problem by providing a clear explanation of what is being asked. It also includes an example and code snippet to illustrate the solution."}),"\n",(0,s.jsx)(n.h3,{id:"leetcode-official-solution",children:"LeetCode Official Solution"}),"\n",(0,s.jsx)(n.p,{children:"If no solution is provided by the user, the LeetCode official solution is:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"class Solution:\n    def reverse(self, n: int) -> int:\n        sign = -1 if n < 0 else 1\n        n *= sign\n        \n        reversed_n = 0\n        while n > 0:\n            reversed_n = reversed_n * 10 + n % 10\n            n //= 10\n        \n        return sign * reversed_n\n"})}),"\n",(0,s.jsx)(n.h3,{id:"example",children:"Example"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"# Test the solution\nsolution = Solution()\nprint(solution.reverse(123))  # Output: 321\nprint(solution.reverse(-456))  # Output: -654\n"})}),"\n",(0,s.jsx)(n.p,{children:"In this solution, the sign of the input integer is preserved and reversed before being multiplied back to its original value. The reversed integer is then returned as the result."})]})}function u(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>l});var i=t(6540);const s={},r=i.createContext(s);function o(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);