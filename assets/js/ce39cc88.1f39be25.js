"use strict";(self.webpackChunkmy_stie=self.webpackChunkmy_stie||[]).push([[2293],{9:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>h});const s=JSON.parse('{"id":"leetcode/Medium/Longest Substring Without Repeating Characters","title":"Longest Substring Without Repeating Characters","description":"Problem Title: Longest Substring Without Repeating Characters","source":"@site/docs/leetcode/Medium/Longest Substring Without Repeating Characters.md","sourceDirName":"leetcode/Medium","slug":"/leetcode/Medium/Longest Substring Without Repeating Characters","permalink":"/site/docs/leetcode/Medium/Longest Substring Without Repeating Characters","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/leetcode/Medium/Longest Substring Without Repeating Characters.md","tags":[],"version":"current","frontMatter":{},"sidebar":"leetcodeSidebar","previous":{"title":"**Problem Title: Longest Palindromic Substring**","permalink":"/site/docs/leetcode/Medium/Longest Palindromic Substring"}}');var r=n(4848),i=n(8453);const a={},o=void 0,c={},h=[{value:"Example:",id:"example",level:2},{value:"Time &amp; Space Complexity:",id:"time--space-complexity",level:2},{value:"Solution:",id:"solution",level:2},{value:"Explanation:",id:"explanation",level:2}];function l(e){const t={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"Problem Title:"})," ",(0,r.jsx)(t.a,{href:"https://leetcode.com/problems/longest-substring-without-repeating-characters",children:"Longest Substring Without Repeating Characters"})]}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"Difficulty:"})," Medium"]}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"Tags:"})," Hash Table, String, Sliding Window"]}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"Problem Statement:"}),"\nGiven a string ",(0,r.jsx)(t.code,{children:"s"}),", return the length of the ",(0,r.jsx)(t.strong,{children:"longest substring without repeating characters"}),". The input string is already in the format with all characters as unique."]}),"\n",(0,r.jsx)(t.h2,{id:"example",children:"Example:"}),"\n",(0,r.jsxs)(t.p,{children:["Input: ",(0,r.jsx)(t.code,{children:'s = "abcba"'})]}),"\n",(0,r.jsxs)(t.p,{children:["Output: ",(0,r.jsx)(t.code,{children:"2"})]}),"\n",(0,r.jsxs)(t.p,{children:["Explanation: The longest substring without repeating characters is ",(0,r.jsx)(t.code,{children:'"abcba"'}),", which has a length of 2."]}),"\n",(0,r.jsx)(t.h2,{id:"time--space-complexity",children:"Time & Space Complexity:"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"Time Complexity:"})," O(n)"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"Space Complexity:"})," O(n)"]}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"solution",children:"Solution:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-python",children:'def lengthOfLongestSubstring(s: str) -> int:\n    """\n    Returns the length of the longest substring without repeating characters.\n\n    :param s: The input string.\n    :return: The length of the longest substring without repeating characters.\n    """\n    if not s:  \n        return 0\n    \n    start = 0  # Index of the start of the current substring\n    max_len = 0  # Maximum length of the substring without repeating characters\n    char_set = set()  # Set to store the characters in the current substring\n\n    for end in range(len(s)):\n        while s[end] in char_set:  \n            # If the current character is in the set, remove the character at the start of the substring\n            char_set.remove(s[start])\n            start += 1\n        \n        char_set.add(s[end])  \n        # Add the current character to the set\n        max_len = max(max_len, end - start + 1)\n\n    return max_len\n'})}),"\n",(0,r.jsx)(t.h2,{id:"explanation",children:"Explanation:"}),"\n",(0,r.jsxs)(t.p,{children:["This solution uses a sliding window approach with a set to keep track of the characters in the current substring. It iterates over the string using ",(0,r.jsx)(t.code,{children:"end"})," as the index of the current character, and ",(0,r.jsx)(t.code,{children:"start"})," as the index of the start of the current substring. If the current character is already in the set, it removes the character at the start of the substring and moves the start to the right. If the current character is not in the set, it adds the character to the set and updates the maximum length."]})]})}function d(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>o});var s=n(6540);const r={},i=s.createContext(r);function a(e){const t=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),s.createElement(i.Provider,{value:t},e.children)}}}]);