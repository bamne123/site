"use strict";(self.webpackChunkmy_stie=self.webpackChunkmy_stie||[]).push([[5184],{3576:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>l});const s=JSON.parse('{"id":"leetcode/Easy/Valid Parentheses","title":"**Valid Parentheses**","description":"Problem Statement","source":"@site/docs/leetcode/Easy/Valid Parentheses.md","sourceDirName":"leetcode/Easy","slug":"/leetcode/Easy/Valid Parentheses","permalink":"/site/docs/leetcode/Easy/Valid Parentheses","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/leetcode/Easy/Valid Parentheses.md","tags":[],"version":"current","frontMatter":{},"sidebar":"leetcodeSidebar","previous":{"title":"Two Sum","permalink":"/site/docs/leetcode/Easy/Two Sum"},"next":{"title":"Median of Two Sorted Arrays","permalink":"/site/docs/leetcode/Hard/Median of Two Sorted Arrays"}}');var r=n(4848),a=n(8453);const i={},o="Valid Parentheses",c={},l=[{value:"<strong>Problem Statement</strong>",id:"problem-statement",level:2},{value:"<strong>Explanation</strong>",id:"explanation",level:2},{value:"<strong>Solution</strong>",id:"solution",level:2},{value:"<strong>Example Use Cases</strong>",id:"example-use-cases",level:2}];function h(e){const t={code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.header,{children:(0,r.jsx)(t.h1,{id:"valid-parentheses",children:(0,r.jsx)(t.strong,{children:"Valid Parentheses"})})}),"\n",(0,r.jsx)(t.h2,{id:"problem-statement",children:(0,r.jsx)(t.strong,{children:"Problem Statement"})}),"\n",(0,r.jsxs)(t.p,{children:["Given a string containing just the characters ",(0,r.jsx)(t.code,{children:"("})," and ",(0,r.jsx)(t.code,{children:")"}),", determine if the input string is valid."]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"Example 1:"})}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:'Input: "()"\nOutput: true\n\nInput: "()"\nOutput: true\n\nInput: "(())"\nOutput: false\n'})}),"\n",(0,r.jsx)(t.h2,{id:"explanation",children:(0,r.jsx)(t.strong,{children:"Explanation"})}),"\n",(0,r.jsxs)(t.p,{children:['This problem is a classic example of a "valid parentheses" problem. The idea is to use a stack to keep track of the opening parentheses. When a closing parenthesis is encountered, we check if the top of the stack has the corresponding opening parenthesis. If it does, we pop the opening parenthesis from the stack. If it doesn\'t, we return ',(0,r.jsx)(t.code,{children:"false"}),". If we finish checking all the parentheses without returning ",(0,r.jsx)(t.code,{children:"false"}),", we return ",(0,r.jsx)(t.code,{children:"true"}),"."]}),"\n",(0,r.jsx)(t.h2,{id:"solution",children:(0,r.jsx)(t.strong,{children:"Solution"})}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-python",children:'def validParentheses(s: str) -> bool:\n    """\n    Returns true if the input string contains only valid parentheses, false otherwise.\n    """\n    stack = []\n    for char in s:\n        # If the character is an opening parenthesis, push it to the stack\n        if char == "(":\n            stack.append(char)\n        # If the character is a closing parenthesis, check if the stack is empty\n        elif char == ")":\n            # If the stack is empty, return false because there\'s no matching opening parenthesis\n            if not stack:\n                return False\n            # If the stack is not empty, pop the opening parenthesis from the stack\n            else:\n                stack.pop()\n    # After checking all characters, return true if the stack is empty\n    return not stack\n'})}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"Time Complexity"}),": O(n), where n is the length of the input string. We iterate through the string once to check each character."]}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"Space Complexity"}),": O(n), where n is the length of the input string. We use a stack to store the opening parentheses, so the maximum size of the stack is equal to the length of the input string."]}),"\n",(0,r.jsx)(t.h2,{id:"example-use-cases",children:(0,r.jsx)(t.strong,{children:"Example Use Cases"})}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:'Valid Parentheses: "()"'}),"\n",(0,r.jsx)(t.li,{children:'Invalid Parentheses: "(())", "()()()"'}),"\n",(0,r.jsx)(t.li,{children:'No Parentheses: "abab"'}),"\n"]})]})}function d(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>o});var s=n(6540);const r={},a=s.createContext(r);function i(e){const t=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),s.createElement(a.Provider,{value:t},e.children)}}}]);