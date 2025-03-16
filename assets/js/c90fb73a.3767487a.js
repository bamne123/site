"use strict";(self.webpackChunkmy_stie=self.webpackChunkmy_stie||[]).push([[4712],{8213:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>d,contentTitle:()=>c,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>m});const i=JSON.parse('{"id":"leetcode/Hard/Median of Two Sorted Arrays","title":"Median of Two Sorted Arrays","description":"Problem Information","source":"@site/docs/leetcode/Hard/4-Median of Two Sorted Arrays.md","sourceDirName":"leetcode/Hard","slug":"/leetcode/Hard/Median of Two Sorted Arrays","permalink":"/site/docs/leetcode/Hard/Median of Two Sorted Arrays","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/leetcode/Hard/4-Median of Two Sorted Arrays.md","tags":[],"version":"current","sidebarPosition":4,"frontMatter":{},"sidebar":"leetcodeSidebar","previous":{"title":"977 - Squares of a Sorted Array","permalink":"/site/docs/leetcode/Easy/Squares of a Sorted Array"},"next":{"title":"Add Two Numbers","permalink":"/site/docs/leetcode/Medium/Add Two Numbers"}}');var r=t(4848),a=t(8453),l=t(5537),s=t(9329);const o={},c="Median of Two Sorted Arrays",d={},m=[{value:"Problem Information",id:"problem-information",level:2},{value:"Problem Statement",id:"problem-statement",level:2},{value:"Examples",id:"examples",level:3},{value:"Constraints",id:"constraints",level:3},{value:"Hints",id:"hints",level:3},{value:"Solution Approach",id:"solution-approach",level:2},{value:"Complexity Analysis",id:"complexity-analysis",level:3},{value:"Code Implementation",id:"code-implementation",level:3},{value:"Step-by-Step Explanation",id:"step-by-step-explanation",level:3},{value:"Alternative Approaches",id:"alternative-approaches",level:2},{value:"Common Mistakes and Pitfalls",id:"common-mistakes-and-pitfalls",level:2},{value:"Related Problems",id:"related-problems",level:2}];function h(n){const e={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.R)(),...n.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.header,{children:(0,r.jsx)(e.h1,{id:"median-of-two-sorted-arrays",children:"Median of Two Sorted Arrays"})}),"\n",(0,r.jsx)(e.h2,{id:"problem-information",children:"Problem Information"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.strong,{children:"Difficulty:"})," Hard"]}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.strong,{children:"Category:"})," Array, Binary Search, Divide and Conquer"]}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.strong,{children:"Link:"})," ",(0,r.jsx)(e.a,{href:"https://leetcode.com/problems/median-of-two-sorted-arrays",children:"LeetCode"})]}),"\n"]}),"\n",(0,r.jsx)(e.h2,{id:"problem-statement",children:"Problem Statement"}),"\n",(0,r.jsxs)(e.p,{children:["Given two sorted arrays ",(0,r.jsx)(e.code,{children:"nums1"})," and ",(0,r.jsx)(e.code,{children:"nums2"})," of size ",(0,r.jsx)(e.code,{children:"m"})," and ",(0,r.jsx)(e.code,{children:"n"})," respectively, return the median of the two sorted arrays."]}),"\n",(0,r.jsx)(e.p,{children:"The overall run time complexity should be O(log (m+n))."}),"\n",(0,r.jsx)(e.h3,{id:"examples",children:"Examples"}),"\n",(0,r.jsxs)(e.p,{children:["Input: ",(0,r.jsx)(e.code,{children:"nums1 = [1,3], nums2 = [2]"}),"\nOutput: ",(0,r.jsx)(e.code,{children:"2.00000"}),"\nExplanation: ",(0,r.jsx)(e.code,{children:"merged array = [1,2,3]"})," and the median is 2."]}),"\n",(0,r.jsx)(e.h3,{id:"constraints",children:"Constraints"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:(0,r.jsx)(e.code,{children:"nums1.length == m"})}),"\n",(0,r.jsx)(e.li,{children:(0,r.jsx)(e.code,{children:"nums2.length == n"})}),"\n",(0,r.jsx)(e.li,{children:(0,r.jsx)(e.code,{children:"0 <= m <= 1000"})}),"\n",(0,r.jsx)(e.li,{children:(0,r.jsx)(e.code,{children:"0 <= n <= 1000"})}),"\n",(0,r.jsx)(e.li,{children:(0,r.jsx)(e.code,{children:"1 <= m + n <= 2000"})}),"\n",(0,r.jsx)(e.li,{children:(0,r.jsx)(e.code,{children:"-10^6 <= nums1[i], nums2[i] <= 10^6"})}),"\n"]}),"\n",(0,r.jsx)(e.h3,{id:"hints",children:"Hints"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"To solve this problem efficiently, you can use binary search to find the correct partition of the arrays."}),"\n",(0,r.jsx)(e.li,{children:"Consider the edge cases where one of the arrays is empty."}),"\n",(0,r.jsx)(e.li,{children:"Make sure to handle both odd and even length merged arrays."}),"\n"]}),"\n",(0,r.jsx)(e.h2,{id:"solution-approach",children:"Solution Approach"}),"\n",(0,r.jsx)(e.p,{children:"The problem can be solved using binary search. The main idea is to find the correct partition in both arrays such that all elements to the left of the partition are smaller than all elements to the right of the partition. Once the correct partition is found, the median can be easily computed based on whether the total number of elements is even or odd."}),"\n",(0,r.jsx)(e.h3,{id:"complexity-analysis",children:"Complexity Analysis"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.strong,{children:"Time Complexity:"})," O(log(min(m, n)))","\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"We perform binary search on the smaller array to find the correct partition. The time complexity is logarithmic with respect to the size of the smaller array."}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.strong,{children:"Space Complexity:"})," O(1)","\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"We use a constant amount of extra space regardless of the input size."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(e.h3,{id:"code-implementation",children:"Code Implementation"}),"\n",(0,r.jsxs)(l.A,{defaultValue:"python",groupId:"cody",values:[{label:"python",value:"python"},{label:"javascript",value:"javascript"},{label:"go",value:"go"},{label:"java",value:"java"},{label:"csharp",value:"csharp"}],children:[(0,r.jsx)(s.A,{value:"python",children:(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-python",children:"class Solution:\n    def findMedianSortedArrays(self, nums1: list[int], nums2: list[int]) -> float:\n        if len(nums1) > len(nums2):\n            nums1, nums2 = nums2, nums1\n        m, n = len(nums1), len(nums2)\n        low, high = 0, m\n        while low <= high:\n            partitionX = (low + high) // 2\n            partitionY = (m + n + 1) // 2 - partitionX\n\n            maxLeftX = nums1[partitionX - 1] if partitionX > 0 else float('-inf')\n            minRightX = nums1[partitionX] if partitionX < m else float('inf')\n\n            maxLeftY = nums2[partitionY - 1] if partitionY > 0 else float('-inf')\n            minRightY = nums2[partitionY] if partitionY < n else float('inf')\n\n            if maxLeftX <= minRightY and maxLeftY <= minRightX:\n                if (m + n) % 2 == 0:\n                    return (max(maxLeftX, maxLeftY) + min(minRightX, minRightY)) / 2\n                else:\n                    return max(maxLeftX, maxLeftY)\n            elif maxLeftX > minRightY:\n                high = partitionX - 1\n            else:\n                low = partitionX + 1\n"})})}),(0,r.jsx)(s.A,{value:"javascript",children:(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-javascript",children:"/**\n * @param {number[]} nums1\n * @param {number[]} nums2\n * @return {number}\n */\nvar findMedianSortedArrays = function(nums1, nums2) {\n    if (nums1.length > nums2.length) {\n        [nums1, nums2] = [nums2, nums1];\n    }\n    const m = nums1.length;\n    const n = nums2.length;\n    let low = 0;\n    let high = m;\n    while (low <= high) {\n        const partitionX = Math.floor((low + high) / 2);\n        const partitionY = Math.floor((m + n + 1) / 2) - partitionX;\n\n        const maxLeftX = partitionX > 0 ? nums1[partitionX - 1] : -Infinity;\n        const minRightX = partitionX < m ? nums1[partitionX] : Infinity;\n\n        const maxLeftY = partitionY > 0 ? nums2[partitionY - 1] : -Infinity;\n        const minRightY = partitionY < n ? nums2[partitionY] : Infinity;\n\n        if (maxLeftX <= minRightY && maxLeftY <= minRightX) {\n            if ((m + n) % 2 === 0) {\n                return (Math.max(maxLeftX, maxLeftY) + Math.min(minRightX, minRightY)) / 2;\n            } else {\n                return Math.max(maxLeftX, maxLeftY);\n            }\n        } else if (maxLeftX > minRightY) {\n            high = partitionX - 1;\n        } else {\n            low = partitionX + 1;\n        }\n    }\n};\n"})})}),(0,r.jsx)(s.A,{value:"go",children:(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-go",children:"func findMedianSortedArrays(nums1 []int, nums2 []int) float64 {\n    if len(nums1) > len(nums2) {\n        nums1, nums2 = nums2, nums1\n    }\n    m, n := len(nums1), len(nums2)\n    low, high := 0, m\n    for low <= high {\n        partitionX := (low + high) / 2\n        partitionY := (m + n + 1) / 2 - partitionX\n\n        maxLeftX := -1 << 31 // Minimum int\n        if partitionX > 0 {\n            maxLeftX = nums1[partitionX-1]\n        }\n        minRightX := 1<<31 - 1 // Maximum int\n        if partitionX < m {\n            minRightX = nums1[partitionX]\n        }\n\n        maxLeftY := -1 << 31\n        if partitionY > 0 {\n            maxLeftY = nums2[partitionY-1]\n        }\n        minRightY := 1<<31 - 1\n        if partitionY < n {\n            minRightY = nums2[partitionY]\n        }\n\n        if maxLeftX <= minRightY && maxLeftY <= minRightX {\n            if (m+n)%2 == 0 {\n                return float64(max(maxLeftX, maxLeftY)+min(minRightX, minRightY)) / 2.0\n            } else {\n                return float64(max(maxLeftX, maxLeftY))\n            }\n        } else if maxLeftX > minRightY {\n            high = partitionX - 1\n        } else {\n            low = partitionX + 1\n        }\n    }\n    return 0.0\n}\n\nfunc max(a, b int) int {\n    if a > b {\n        return a\n    }\n    return b\n}\n\nfunc min(a, b int) int {\n    if a < b {\n        return a\n    }\n    return b\n}\n"})})}),(0,r.jsx)(s.A,{value:"java",children:(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-java",children:"class Solution {\n    public double findMedianSortedArrays(int[] nums1, int[] nums2) {\n        if (nums1.length > nums2.length) {\n            int[] temp = nums1;\n            nums1 = nums2;\n            nums2 = temp;\n        }\n        int m = nums1.length;\n        int n = nums2.length;\n        int low = 0;\n        int high = m;\n        while (low <= high) {\n            int partitionX = (low + high) / 2;\n            int partitionY = (m + n + 1) / 2 - partitionX;\n\n            int maxLeftX = (partitionX == 0) ? Integer.MIN_VALUE : nums1[partitionX - 1];\n            int minRightX = (partitionX == m) ? Integer.MAX_VALUE : nums1[partitionX];\n\n            int maxLeftY = (partitionY == 0) ? Integer.MIN_VALUE : nums2[partitionY - 1];\n            int minRightY = (partitionY == n) ? Integer.MAX_VALUE : nums2[partitionY];\n\n            if (maxLeftX <= minRightY && maxLeftY <= minRightX) {\n                if ((m + n) % 2 == 0) {\n                    return (double) (Math.max(maxLeftX, maxLeftY) + Math.min(minRightX, minRightY)) / 2;\n                } else {\n                    return (double) Math.max(maxLeftX, maxLeftY);\n                }\n            } else if (maxLeftX > minRightY) {\n                high = partitionX - 1;\n            } else {\n                low = partitionX + 1;\n            }\n        }\n        return 0.0;\n    }\n}\n"})})}),(0,r.jsx)(s.A,{value:"csharp",children:(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-csharp",children:"public class Solution {\n    public double FindMedianSortedArrays(int[] nums1, int[] nums2) {\n        if (nums1.Length > nums2.Length) {\n            (nums1, nums2) = (nums2, nums1);\n        }\n        int m = nums1.Length;\n        int n = nums2.Length;\n        int low = 0;\n        int high = m;\n        while (low <= high) {\n            int partitionX = (low + high) / 2;\n            int partitionY = (m + n + 1) / 2 - partitionX;\n\n            int maxLeftX = (partitionX == 0) ? int.MinValue : nums1[partitionX - 1];\n            int minRightX = (partitionX == m) ? int.MaxValue : nums1[partitionX];\n\n            int maxLeftY = (partitionY == 0) ? int.MinValue : nums2[partitionY - 1];\n            int minRightY = (partitionY == n) ? int.MaxValue : nums2[partitionY];\n\n            if (maxLeftX <= minRightY && maxLeftY <= minRightX) {\n                if ((m + n) % 2 == 0) {\n                    return (double)(Math.Max(maxLeftX, maxLeftY) + Math.Min(minRightX, minRightY)) / 2;\n                } else {\n                    return (double)Math.Max(maxLeftX, maxLeftY);\n                }\n            } else if (maxLeftX > minRightY) {\n                high = partitionX - 1;\n            } else {\n                low = partitionX + 1;\n            }\n        }\n        return 0.0;\n    }\n}\n"})})})]}),"\n",(0,r.jsx)(e.h3,{id:"step-by-step-explanation",children:"Step-by-Step Explanation"}),"\n",(0,r.jsxs)(e.ol,{children:["\n",(0,r.jsxs)(e.li,{children:["Ensure ",(0,r.jsx)(e.code,{children:"nums1"})," is the smaller array to optimize binary search."]}),"\n",(0,r.jsxs)(e.li,{children:["Initialize binary search boundaries ",(0,r.jsx)(e.code,{children:"low"})," and ",(0,r.jsx)(e.code,{children:"high"})," to ",(0,r.jsx)(e.code,{children:"0"})," and ",(0,r.jsx)(e.code,{children:"m"})," respectively."]}),"\n",(0,r.jsxs)(e.li,{children:["In a loop, calculate ",(0,r.jsx)(e.code,{children:"partitionX"})," and ",(0,r.jsx)(e.code,{children:"partitionY"})," to divide arrays."]}),"\n",(0,r.jsxs)(e.li,{children:["Determine ",(0,r.jsx)(e.code,{children:"maxLeftX"}),", ",(0,r.jsx)(e.code,{children:"minRightX"}),", ",(0,r.jsx)(e.code,{children:"maxLeftY"}),", ",(0,r.jsx)(e.code,{children:"minRightY"})," based on partition positions, handling edge cases with ",(0,r.jsx)(e.code,{children:"-Infinity"})," and ",(0,r.jsx)(e.code,{children:"Infinity"}),"."]}),"\n",(0,r.jsxs)(e.li,{children:["If partitions are correct (",(0,r.jsx)(e.code,{children:"maxLeftX <= minRightY && maxLeftY <= minRightX"}),"), calculate the median based on the parity of ",(0,r.jsx)(e.code,{children:"(m + n)"}),"."]}),"\n",(0,r.jsxs)(e.li,{children:["If ",(0,r.jsx)(e.code,{children:"maxLeftX > minRightY"}),", adjust ",(0,r.jsx)(e.code,{children:"high"})," to search in the lower half."]}),"\n",(0,r.jsxs)(e.li,{children:["Otherwise, adjust ",(0,r.jsx)(e.code,{children:"low"})," to search in the upper half."]}),"\n",(0,r.jsx)(e.li,{children:"Return the calculated median."}),"\n"]}),"\n",(0,r.jsx)(e.h2,{id:"alternative-approaches",children:"Alternative Approaches"}),"\n",(0,r.jsxs)(e.ol,{children:["\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.strong,{children:"Merge and Find Median"})}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"Time Complexity: O(m + n)"}),"\n",(0,r.jsx)(e.li,{children:"Space Complexity: O(m + n)"}),"\n",(0,r.jsx)(e.li,{children:"Trade-offs: Simple implementation but does not meet the logarithmic time complexity requirement."}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.strong,{children:"Binary Search on Elements"})}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"Time Complexity: O(log(10^6)), assuming the range of numbers is -10^6 to 10^6."}),"\n",(0,r.jsx)(e.li,{children:"Space Complexity: O(1)"}),"\n",(0,r.jsx)(e.li,{children:"Trade-offs: Not optimal if the range of numbers is very large."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(e.h2,{id:"common-mistakes-and-pitfalls",children:"Common Mistakes and Pitfalls"}),"\n",(0,r.jsxs)(e.ol,{children:["\n",(0,r.jsx)(e.li,{children:"Incorrectly handling edge cases, like empty arrays."}),"\n",(0,r.jsx)(e.li,{children:"Not considering the parity of the total elements when computing the median."}),"\n",(0,r.jsx)(e.li,{children:"Integer overflow when calculating partition indices."}),"\n"]}),"\n",(0,r.jsx)(e.h2,{id:"related-problems",children:"Related Problems"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:(0,r.jsx)(e.a,{href:"https://leetcode.com/problems/merge-two-sorted-lists/",children:"Merge Two Sorted Lists"})}),"\n",(0,r.jsx)(e.li,{children:(0,r.jsx)(e.a,{href:"https://leetcode.com/problems/find-k-closest-elements/",children:"Find K Closest Elements"})}),"\n"]})]})}function u(n={}){const{wrapper:e}={...(0,a.R)(),...n.components};return e?(0,r.jsx)(e,{...n,children:(0,r.jsx)(h,{...n})}):h(n)}},9329:(n,e,t)=>{t.d(e,{A:()=>l});t(6540);var i=t(4164);const r={tabItem:"tabItem_Ymn6"};var a=t(4848);function l(n){let{children:e,hidden:t,className:l}=n;return(0,a.jsx)("div",{role:"tabpanel",className:(0,i.A)(r.tabItem,l),hidden:t,children:e})}},5537:(n,e,t)=>{t.d(e,{A:()=>X});var i=t(6540),r=t(4164),a=t(5627),l=t(6347),s=t(372),o=t(604),c=t(1861),d=t(8749);function m(n){return i.Children.toArray(n).filter((n=>"\n"!==n)).map((n=>{if(!n||(0,i.isValidElement)(n)&&function(n){const{props:e}=n;return!!e&&"object"==typeof e&&"value"in e}(n))return n;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof n.type?n.type:n.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(n){const{values:e,children:t}=n;return(0,i.useMemo)((()=>{const n=e??function(n){return m(n).map((n=>{let{props:{value:e,label:t,attributes:i,default:r}}=n;return{value:e,label:t,attributes:i,default:r}}))}(t);return function(n){const e=(0,c.XI)(n,((n,e)=>n.value===e.value));if(e.length>0)throw new Error(`Docusaurus error: Duplicate values "${e.map((n=>n.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(n),n}),[e,t])}function u(n){let{value:e,tabValues:t}=n;return t.some((n=>n.value===e))}function p(n){let{queryString:e=!1,groupId:t}=n;const r=(0,l.W6)(),a=function(n){let{queryString:e=!1,groupId:t}=n;if("string"==typeof e)return e;if(!1===e)return null;if(!0===e&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:e,groupId:t});return[(0,o.aZ)(a),(0,i.useCallback)((n=>{if(!a)return;const e=new URLSearchParams(r.location.search);e.set(a,n),r.replace({...r.location,search:e.toString()})}),[a,r])]}function f(n){const{defaultValue:e,queryString:t=!1,groupId:r}=n,a=h(n),[l,o]=(0,i.useState)((()=>function(n){let{defaultValue:e,tabValues:t}=n;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(e){if(!u({value:e,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${e}" but none of its children has the corresponding value. Available values are: ${t.map((n=>n.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return e}const i=t.find((n=>n.default))??t[0];if(!i)throw new Error("Unexpected error: 0 tabValues");return i.value}({defaultValue:e,tabValues:a}))),[c,m]=p({queryString:t,groupId:r}),[f,x]=function(n){let{groupId:e}=n;const t=function(n){return n?`docusaurus.tab.${n}`:null}(e),[r,a]=(0,d.Dv)(t);return[r,(0,i.useCallback)((n=>{t&&a.set(n)}),[t,a])]}({groupId:r}),g=(()=>{const n=c??f;return u({value:n,tabValues:a})?n:null})();(0,s.A)((()=>{g&&o(g)}),[g]);return{selectedValue:l,selectValue:(0,i.useCallback)((n=>{if(!u({value:n,tabValues:a}))throw new Error(`Can't select invalid tab value=${n}`);o(n),m(n),x(n)}),[m,x,a]),tabValues:a}}var x=t(9136);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var j=t(4848);function b(n){let{className:e,block:t,selectedValue:i,selectValue:l,tabValues:s}=n;const o=[],{blockElementScrollPositionUntilNextRender:c}=(0,a.a_)(),d=n=>{const e=n.currentTarget,t=o.indexOf(e),r=s[t].value;r!==i&&(c(e),l(r))},m=n=>{let e=null;switch(n.key){case"Enter":d(n);break;case"ArrowRight":{const t=o.indexOf(n.currentTarget)+1;e=o[t]??o[0];break}case"ArrowLeft":{const t=o.indexOf(n.currentTarget)-1;e=o[t]??o[o.length-1];break}}e?.focus()};return(0,j.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":t},e),children:s.map((n=>{let{value:e,label:t,attributes:a}=n;return(0,j.jsx)("li",{role:"tab",tabIndex:i===e?0:-1,"aria-selected":i===e,ref:n=>{o.push(n)},onKeyDown:m,onClick:d,...a,className:(0,r.A)("tabs__item",g.tabItem,a?.className,{"tabs__item--active":i===e}),children:t??e},e)}))})}function y(n){let{lazy:e,children:t,selectedValue:a}=n;const l=(Array.isArray(t)?t:[t]).filter(Boolean);if(e){const n=l.find((n=>n.props.value===a));return n?(0,i.cloneElement)(n,{className:(0,r.A)("margin-top--md",n.props.className)}):null}return(0,j.jsx)("div",{className:"margin-top--md",children:l.map(((n,e)=>(0,i.cloneElement)(n,{key:e,hidden:n.props.value!==a})))})}function v(n){const e=f(n);return(0,j.jsxs)("div",{className:(0,r.A)("tabs-container",g.tabList),children:[(0,j.jsx)(b,{...e,...n}),(0,j.jsx)(y,{...e,...n})]})}function X(n){const e=(0,x.A)();return(0,j.jsx)(v,{...n,children:m(n.children)},String(e))}},8453:(n,e,t)=>{t.d(e,{R:()=>l,x:()=>s});var i=t(6540);const r={},a=i.createContext(r);function l(n){const e=i.useContext(a);return i.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function s(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(r):n.components||r:l(n.components),i.createElement(a.Provider,{value:e},n.children)}}}]);