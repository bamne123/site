"use strict";(self.webpackChunkmy_stie=self.webpackChunkmy_stie||[]).push([[4905],{1549:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>h,frontMatter:()=>l,metadata:()=>r,toc:()=>c});const r=JSON.parse('{"id":"leetcode/Medium/Reverse Integer","title":"Reverse Integer","description":"Reverse Integer","source":"@site/docs/leetcode/Medium/7-Reverse Integer.md","sourceDirName":"leetcode/Medium","slug":"/leetcode/Medium/Reverse Integer","permalink":"/site/docs/leetcode/Medium/Reverse Integer","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/leetcode/Medium/7-Reverse Integer.md","tags":[],"version":"current","sidebarPosition":7,"frontMatter":{},"sidebar":"leetcodeSidebar","previous":{"title":"**Zigzag Conversion**","permalink":"/site/docs/leetcode/Medium/Zigzag Conversion"}}');var s=t(4848),i=t(8453);const l={},o=void 0,d={},c=[{value:"Problem Statement",id:"problem-statement",level:3},{value:"Examples",id:"examples",level:4},{value:"Constraints",id:"constraints",level:4},{value:"Solution Approach",id:"solution-approach",level:3},{value:"Code Implementation",id:"code-implementation",level:3},{value:"Step-by-Step Explanation",id:"step-by-step-explanation",level:3},{value:"Example Use Cases",id:"example-use-cases",level:3},{value:"Time and Space Complexity",id:"time-and-space-complexity",level:3}];function a(e){const n={code:"code",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Reverse Integer"})}),"\n",(0,s.jsx)(n.h3,{id:"problem-statement",children:"Problem Statement"}),"\n",(0,s.jsx)(n.p,{children:"Reverse an integer."}),"\n",(0,s.jsx)(n.h4,{id:"examples",children:"Examples"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"reverseInteger(123)"})," returns ",(0,s.jsx)(n.code,{children:"321"})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"reverseInteger(-456)"})," returns ",(0,s.jsx)(n.code,{children:"-654"})]}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"constraints",children:"Constraints"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"The input integer is non-negative."}),"\n",(0,s.jsx)(n.li,{children:"The output integer is also non-negative."}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"solution-approach",children:"Solution Approach"}),"\n",(0,s.jsx)(n.p,{children:"We can solve this problem by using the following approach:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"Convert the integer to a string."}),"\n",(0,s.jsx)(n.li,{children:"Reverse the string using slicing with a step of -1."}),"\n",(0,s.jsx)(n.li,{children:"Convert the reversed string back to an integer."}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"code-implementation",children:"Code Implementation"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"def reverseInteger(x: int) -> int:\n    # Convert the integer to a string\n    str_x = str(x)\n    \n    # Reverse the string\n    reversed_str_x = str_x[::-1]\n    \n    # Convert the reversed string back to an integer\n    reversed_int_x = int(reversed_str_x)\n    \n    # If the reversed integer is negative, return - reversed_int_x\n    if reversed_int_x < 0:\n        return -reversed_int_x\n    \n    # Return the reversed integer\n    return reversed_int_x\n"})}),"\n",(0,s.jsx)(n.h3,{id:"step-by-step-explanation",children:"Step-by-Step Explanation"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["Convert the integer ",(0,s.jsx)(n.code,{children:"x"})," to a string using ",(0,s.jsx)(n.code,{children:"str(x)"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:["Reverse the string using slicing with a step of -1 using ",(0,s.jsx)(n.code,{children:"str_x[::-1]"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:["Convert the reversed string back to an integer using ",(0,s.jsx)(n.code,{children:"int(reversed_str_x)"}),"."]}),"\n",(0,s.jsx)(n.li,{children:"If the reversed integer is negative, return - reversed_int_x."}),"\n",(0,s.jsx)(n.li,{children:"Return the reversed integer."}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"example-use-cases",children:"Example Use Cases"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"# Test the function with a positive integer\nprint(reverseInteger(123))  # Output: 321\n\n# Test the function with a negative integer\nprint(reverseInteger(-456))  # Output: -654\n"})}),"\n",(0,s.jsx)(n.h3,{id:"time-and-space-complexity",children:"Time and Space Complexity"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Time complexity: O(log n), where n is the absolute value of the input integer."}),"\n",(0,s.jsx)(n.li,{children:"Space complexity: O(n), where n is the absolute value of the input integer."}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>l,x:()=>o});var r=t(6540);const s={},i=r.createContext(s);function l(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);