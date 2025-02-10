"use strict";(self.webpackChunkmy_stie=self.webpackChunkmy_stie||[]).push([[1838],{9088:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>h,contentTitle:()=>a,default:()=>d,frontMatter:()=>l,metadata:()=>i,toc:()=>c});const i=JSON.parse('{"id":"leetcode/Medium/String to Integer (atoi)","title":"String to Integer (atoi)","description":"Problem Statement","source":"@site/docs/leetcode/Medium/8-String to Integer (atoi).md","sourceDirName":"leetcode/Medium","slug":"/leetcode/Medium/String to Integer (atoi)","permalink":"/site/docs/leetcode/Medium/String to Integer (atoi)","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/leetcode/Medium/8-String to Integer (atoi).md","tags":[],"version":"current","sidebarPosition":8,"frontMatter":{},"sidebar":"leetcodeSidebar","previous":{"title":"Reverse Integer","permalink":"/site/docs/leetcode/Medium/Reverse Integer"}}');var s=t(4848),r=t(8453);const l={},a=void 0,h={},c=[{value:"Step-by-Step Solution",id:"step-by-step-solution",level:2},{value:"Example",id:"example",level:3},{value:"Step-by-Step Explanation",id:"step-by-step-explanation",level:3},{value:"Code Implementation",id:"code-implementation",level:3},{value:"Step-by-Step Explanation of Code Implementation",id:"step-by-step-explanation-of-code-implementation",level:3},{value:"Example",id:"example-1",level:3},{value:"Step-by-Step Explanation of Example",id:"step-by-step-explanation-of-example",level:3},{value:"Code Implementation of Example",id:"code-implementation-of-example",level:3}];function o(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Problem Statement"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Title:"})," String to Integer (atoi)"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Difficulty:"})," Medium"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Category:"})," String"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Companies:"})," Known companies that frequently ask this"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Link:"})," ",(0,s.jsx)(n.a,{href:"https://leetcode.com/problems/string-to-integer-atoi/",children:"https://leetcode.com/problems/string-to-integer-atoi/"})]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Input:"})," A string containing a valid integer."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Output:"})," The integer converted from the input string."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Explanation:"})}),"\n",(0,s.jsx)(n.p,{children:"Given a string containing a valid integer, convert it into an integer. The input string may contain any valid integer, including negative numbers, positive numbers, and zero."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Constraints:"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"The input string is not empty."}),"\n",(0,s.jsx)(n.li,{children:"The input string contains only valid digits, possibly including negative signs and decimal points."}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Constraints:"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"The input string is not empty."}),"\n",(0,s.jsx)(n.li,{children:"The input string contains only valid digits, possibly including negative signs and decimal points."}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Constraints:"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"The input string is not empty."}),"\n",(0,s.jsx)(n.li,{children:"The input string contains only valid digits, possibly including negative signs and decimal points."}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Constraints:"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"The input string is not empty."}),"\n",(0,s.jsx)(n.li,{children:"The input string contains only valid digits, possibly including negative signs and decimal points."}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Constraints:"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"The input string is not empty."}),"\n",(0,s.jsx)(n.li,{children:"The input string contains only valid digits, possibly including negative signs and decimal points."}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Constraints:"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"The input string is not empty."}),"\n",(0,s.jsx)(n.li,{children:"The input string contains only valid digits, possibly including negative signs and decimal points."}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"step-by-step-solution",children:"Step-by-Step Solution"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"Check if the input string is empty."}),"\n",(0,s.jsx)(n.li,{children:"If it is, return 0 or any other default value."}),"\n",(0,s.jsx)(n.li,{children:"Initialize a variable to store the sign of the input string."}),"\n",(0,s.jsx)(n.li,{children:"Iterate through each character in the input string."}),"\n",(0,s.jsx)(n.li,{children:"If the character is a '-', set the sign to -1."}),"\n",(0,s.jsx)(n.li,{children:"If the character is a '+', set the sign to 1."}),"\n",(0,s.jsx)(n.li,{children:"Initialize a variable to store the result."}),"\n",(0,s.jsx)(n.li,{children:"Iterate through each character in the input string starting from the second character (index 1)."}),"\n",(0,s.jsx)(n.li,{children:"If the character is a digit, convert it to an integer and add it to the result."}),"\n",(0,s.jsx)(n.li,{children:"If the character is a '-', subtract the integer from the result."}),"\n",(0,s.jsx)(n.li,{children:"If the character is a '+', add the integer to the result."}),"\n",(0,s.jsx)(n.li,{children:"If the input string contains a decimal point, divide the result by 10."}),"\n",(0,s.jsx)(n.li,{children:"If the input string contains a negative sign, multiply the result by -1."}),"\n",(0,s.jsx)(n.li,{children:"Return the final result."}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"example",children:"Example"}),"\n",(0,s.jsx)(n.p,{children:'Input: "123"\nOutput: 123'}),"\n",(0,s.jsx)(n.p,{children:'Input: "-456"\nOutput: -456'}),"\n",(0,s.jsx)(n.p,{children:'Input: "  -456  "\nOutput: -456'}),"\n",(0,s.jsx)(n.p,{children:'Input: "123abc"\nOutput: 123'}),"\n",(0,s.jsx)(n.h3,{id:"step-by-step-explanation",children:"Step-by-Step Explanation"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"Check if the input string is empty. If it is, return 0 or any other default value."}),"\n",(0,s.jsx)(n.li,{children:"Initialize a variable to store the sign of the input string. In this case, it's set to -1 because the input string is negative."}),"\n",(0,s.jsxs)(n.li,{children:["Iterate through each character in the input string. For each character:","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"If the character is a '-', set the sign to -1."}),"\n",(0,s.jsx)(n.li,{children:"If the character is a '+', set the sign to 1."}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.li,{children:"Initialize a variable to store the result. This variable will be used to store the final integer."}),"\n",(0,s.jsxs)(n.li,{children:["Iterate through each character in the input string starting from the second character (index 1). For each character:","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"If the character is a digit, convert it to an integer and add it to the result."}),"\n",(0,s.jsx)(n.li,{children:"If the character is a '-', subtract the integer from the result."}),"\n",(0,s.jsx)(n.li,{children:"If the character is a '+', add the integer to the result."}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.li,{children:"If the input string contains a decimal point, divide the result by 10."}),"\n",(0,s.jsx)(n.li,{children:"If the input string contains a negative sign, multiply the result by -1."}),"\n",(0,s.jsx)(n.li,{children:"Return the final result."}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"code-implementation",children:"Code Implementation"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"def stringToInt(s: str) -> int:\n    if not s:\n        return 0\n    sign = 1\n    if s[0] == '-':\n        sign = -1\n        s = s[1:]\n    result = 0\n    for char in s:\n        if char.isdigit():\n            result = result * 10 + int(char)\n        else:\n            break\n    return result * sign\n"})}),"\n",(0,s.jsx)(n.h3,{id:"step-by-step-explanation-of-code-implementation",children:"Step-by-Step Explanation of Code Implementation"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"Check if the input string is empty. If it is, return 0 or any other default value."}),"\n",(0,s.jsx)(n.li,{children:"Initialize a variable to store the sign of the input string. In this case, it's set to 1 because the input string is positive."}),"\n",(0,s.jsx)(n.li,{children:"Initialize a variable to store the result. This variable will be used to store the final integer."}),"\n",(0,s.jsxs)(n.li,{children:["Iterate through each character in the input string starting from the second character (index 1). For each character:","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"If the character is a digit, convert it to an integer and add it to the result."}),"\n",(0,s.jsx)(n.li,{children:"If the character is a '-', subtract the integer from the result."}),"\n",(0,s.jsx)(n.li,{children:"If the character is a '+', add the integer to the result."}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.li,{children:"If the input string contains a decimal point, divide the result by 10."}),"\n",(0,s.jsx)(n.li,{children:"If the input string contains a negative sign, multiply the result by -1."}),"\n",(0,s.jsx)(n.li,{children:"Return the final result."}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"example-1",children:"Example"}),"\n",(0,s.jsx)(n.p,{children:'Input: "123"\nOutput: 123'}),"\n",(0,s.jsx)(n.p,{children:'Input: "-456"\nOutput: -456'}),"\n",(0,s.jsx)(n.p,{children:'Input: "  -456  "\nOutput: -456'}),"\n",(0,s.jsx)(n.p,{children:'Input: "123abc"\nOutput: 123'}),"\n",(0,s.jsx)(n.h3,{id:"step-by-step-explanation-of-example",children:"Step-by-Step Explanation of Example"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"Check if the input string is empty. If it is, return 0 or any other default value."}),"\n",(0,s.jsx)(n.li,{children:"Initialize a variable to store the sign of the input string. In this case, it's set to 1 because the input string is positive."}),"\n",(0,s.jsx)(n.li,{children:"Initialize a variable to store the result. This variable will be used to store the final integer."}),"\n",(0,s.jsxs)(n.li,{children:["Iterate through each character in the input string. For each character:","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"If the character is a digit, convert it to an integer and add it to the result."}),"\n",(0,s.jsx)(n.li,{children:"If the character is a '-', subtract the integer from the result."}),"\n",(0,s.jsx)(n.li,{children:"If the character is a '+', add the integer to the result."}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.li,{children:"If the input string contains a decimal point, divide the result by 10."}),"\n",(0,s.jsx)(n.li,{children:"If the input string contains a negative sign, multiply the result by -1."}),"\n",(0,s.jsx)(n.li,{children:"Return the final result."}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"code-implementation-of-example",children:"Code Implementation of Example"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"def stringToInt(s: str) -> int:\n    if not s:\n        return 0\n    sign = 1\n    if s[0] == '-':\n        sign = -1\n        s = s[1:]\n    result = 0\n    for char in s:\n        if char.isdigit():\n            result = result * 10 + int(char)\n        else:\n            break\n    return result * sign\n"})})]})}function d(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(o,{...e})}):o(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>l,x:()=>a});var i=t(6540);const s={},r=i.createContext(s);function l(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);