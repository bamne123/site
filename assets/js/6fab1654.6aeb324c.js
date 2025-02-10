"use strict";(self.webpackChunkmy_stie=self.webpackChunkmy_stie||[]).push([[7612],{7323:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>r,default:()=>u,frontMatter:()=>l,metadata:()=>i,toc:()=>c});const i=JSON.parse('{"id":"leetcode/Medium/String to Integer (atoi)","title":"**String to Integer (atoi)**","description":"Problem Statement","source":"@site/docs/leetcode/Medium/String to Integer (atoi).md","sourceDirName":"leetcode/Medium","slug":"/leetcode/Medium/String to Integer (atoi)","permalink":"/site/docs/leetcode/Medium/String to Integer (atoi)","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/leetcode/Medium/String to Integer (atoi).md","tags":[],"version":"current","frontMatter":{},"sidebar":"leetcodeSidebar","previous":{"title":"Reverse Integer","permalink":"/site/docs/leetcode/Medium/Reverse Integer"},"next":{"title":"**Zigzag Conversion**","permalink":"/site/docs/leetcode/Medium/Zigzag Conversion"}}');var s=n(4848),o=n(8453);const l={},r="String to Integer (atoi)",a={},c=[{value:"Problem Statement",id:"problem-statement",level:3},{value:"Example",id:"example",level:3},{value:"Full Problem Statement",id:"full-problem-statement",level:3},{value:"Solution Explanation",id:"solution-explanation",level:3},{value:"LeetCode Official Solution",id:"leetcode-official-solution",level:3},{value:"Code",id:"code",level:3},{value:"Example Use Cases",id:"example-use-cases",level:3},{value:"Time and Space Complexity",id:"time-and-space-complexity",level:3}];function d(e){const t={a:"a",code:"code",h1:"h1",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.header,{children:(0,s.jsx)(t.h1,{id:"string-to-integer-atoi",children:(0,s.jsx)(t.strong,{children:"String to Integer (atoi)"})})}),"\n",(0,s.jsx)(t.h3,{id:"problem-statement",children:"Problem Statement"}),"\n",(0,s.jsx)(t.p,{children:"Given a string containing a single integer, convert it to an integer."}),"\n",(0,s.jsx)(t.h3,{id:"example",children:"Example"}),"\n",(0,s.jsx)(t.p,{children:'Input: "123"\nOutput: 123'}),"\n",(0,s.jsx)(t.p,{children:'Input: "123abc"\nOutput: 123'}),"\n",(0,s.jsx)(t.p,{children:'Input: "abc123"\nOutput: 123'}),"\n",(0,s.jsx)(t.h3,{id:"full-problem-statement",children:"Full Problem Statement"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.a,{href:"https://leetcode.com/problems/string-to-integer-atoi/",children:"https://leetcode.com/problems/string-to-integer-atoi/"})}),"\n",(0,s.jsx)(t.h3,{id:"solution-explanation",children:"Solution Explanation"}),"\n",(0,s.jsx)(t.p,{children:"The problem can be solved using a simple and efficient algorithm that iterates over the string, finding the first non-digit character and storing its value in a variable."}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-markdown",children:'# Solution\n\n## Time Complexity\nO(n), where n is the length of the input string.\n\n## Space Complexity\nO(1), as we only use a constant amount of space to store the current digit value.\n\n## Explanation\n\n```python\ndef lengthOfLongestSubstring(s):\n    """\n    Returns the length of the longest substring without repeating digits.\n    """\n    n = len(s)\n    max_len = 0\n    last = -1\n    for i in range(n):\n        # If the current character is not in the set, add it to the set and update the max_len\n        if s[i] not in s:\n            if i - last > max_len:\n                max_len = i - last\n            s[last] = s[i]\n            last = i\n    return max_len\n'})}),"\n",(0,s.jsx)(t.h3,{id:"leetcode-official-solution",children:"LeetCode Official Solution"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.a,{href:"https://leetcode.com/problems/string-to-integer-atoi/",children:"https://leetcode.com/problems/string-to-integer-atoi/"})}),"\n",(0,s.jsx)(t.h3,{id:"code",children:"Code"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-python",children:'def lengthOfLongestSubstring(s):\n    """\n    Returns the length of the longest substring without repeating digits.\n    """\n    n = len(s)\n    max_len = 0\n    last = -1\n    for i in range(n):\n        # If the current character is not in the set, add it to the set and update the max_len\n        if s[i] not in s:\n            if i - last > max_len:\n                max_len = i - last\n            s[last] = s[i]\n            last = i\n    return max_len\n'})}),"\n",(0,s.jsx)(t.h3,{id:"example-use-cases",children:"Example Use Cases"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["Convert a string to an integer without repeating digits: ",(0,s.jsx)(t.code,{children:'s = "123abc123"'})," -> ",(0,s.jsx)(t.code,{children:"max_len = 3"})]}),"\n",(0,s.jsxs)(t.li,{children:["Convert a string to an integer with repeating digits: ",(0,s.jsx)(t.code,{children:'s = "abc123"'})," -> ",(0,s.jsx)(t.code,{children:"max_len = 0"})]}),"\n"]}),"\n",(0,s.jsx)(t.h3,{id:"time-and-space-complexity",children:"Time and Space Complexity"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Time Complexity: O(n), where n is the length of the input string."}),"\n",(0,s.jsx)(t.li,{children:"Space Complexity: O(1), as we only use a constant amount of space to store the current digit value."}),"\n"]})]})}function u(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>l,x:()=>r});var i=n(6540);const s={},o=i.createContext(s);function l(e){const t=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),i.createElement(o.Provider,{value:t},e.children)}}}]);