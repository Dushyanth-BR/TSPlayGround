"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ListNode_1 = require("./ListNode");
class LeetCode {
    helloWorld() {
        console.log("hello world -- new ");
    }
    twoSum(nums, target) {
        let numMap = new Map();
        for (let i = 0; i < nums.length; i++) {
            if (numMap.get(target - nums[i])) {
                return [numMap.get(target - nums[i]) ?? 0, i];
            }
            numMap.set(nums[i], i);
        }
        return [-1, -1];
    }
    ;
    isPalindrome(x) {
        let total = 0;
        let temp = x;
        while (temp > 0) {
            let y = Math.floor(temp % 10);
            temp = Math.floor(temp / 10);
            total = total * 10 + y;
        }
        return x == total;
    }
    ;
    romanToInt(s) {
        let romalNumerals = new Map([
            ["I", 1],
            ["V", 5],
            ["X", 10],
            ["L", 50],
            ["C", 100],
            ["D", 500],
            ["M", 1000],
        ]);
        let numeralsArr = s.split('');
        let sum = numeralsArr.reduce((acc, cur, index, arr) => {
            let curValue = romalNumerals.get(cur) ?? 0;
            let nextValue = romalNumerals.get(arr[index + 1]) ?? 0;
            return acc + ((curValue < nextValue) ? -curValue : curValue);
        }, 0);
        return sum;
    }
    ;
    longestCommonPrefix(strs) {
        let charArray = [];
        let result = [];
        let minLength = strs[0].length;
        strs.forEach(data => {
            charArray.push(data.split(''));
            minLength = Math.min(minLength, data.length);
        });
        for (let i = 0; i < minLength; i++) {
            let char = charArray[0][i];
            for (let j = 0; j < charArray.length; j++) {
                if (charArray[j][i] != char) {
                    char = "";
                    break;
                }
            }
            if (char === "") {
                break;
            }
            result.push(char);
        }
        return result.join('');
    }
    ;
    isValid(s) {
        if (s.length % 2 !== 0)
            return false;
        let parMap = new Map([
            ["{", "}"],
            ["[", "]"],
            ["(", ")"],
        ]);
        let arr = [];
        let isValid = s.split('').every((par) => {
            if (parMap.has(par)) {
                arr.push(par);
            }
            else if (parMap.get(arr.pop() ?? "") != par) {
                return false;
            }
            return true;
        });
        return isValid && arr.length == 0;
    }
    ;
    mergeTwoLists(list1, list2) {
        if (list1 == null)
            return list2;
        if (list2 == null)
            return list1;
        let mergeList;
        if (list1.val < list2.val) {
            mergeList = new ListNode_1.ListNode(list1.val, this.mergeTwoLists(list1.next, list2));
        }
        else {
            mergeList = new ListNode_1.ListNode(list2.val, this.mergeTwoLists(list1, list2.next));
        }
        return mergeList;
    }
    ;
    callFunction() {
        //removeDuplicates([0,0,1,1,1,2,2,3,3,4]);
        //removeElement([3,2,2,3], 3);
        //strStr("a", "a");
        //searchInsert([1,3,5,6], 2);
        //lengthOfLastWord("Hello World");
        //plusOne([8,9,9,9]);
        //addBinary("1010", "1011");
        //mySqrt(6);
        //climbStairs(10);
        //merge([1,2,3,0,0,0], 3, [4,5,6], 3);
        //inorderTraversal(new TreeNode(1,null,new TreeNode(2,new TreeNode(3))));
        //maxDepth(new TreeNode(3, new TreeNode(9), new TreeNode(20, new TreeNode(15), new TreeNode(7))));
        //console.log(quickSort([3, 6, 8, 10, 1, 2, 1]));
        //console.log(mergeSort([3, 6, 8, 10, 1, 2, 1]));
        // console.log("Fibo number        : ", fibonacci(20));
        // console.log("Fibo calculations  : ", calculations);
        console.log("Fibo number        : ", fibonacciMemoized()(50));
        console.log("Fibo calculations  : ", calculations);
    }
}
exports.default = LeetCode;
function maxDepth(root) {
    let maxDepth = 0;
    let curDepth = 0;
    _findDepth(root);
    return maxDepth;
    function _findDepth(node) {
        if (!node)
            return;
        curDepth++;
        maxDepth = Math.max(maxDepth, curDepth);
        _findDepth(node.left);
        _findDepth(node.right);
        curDepth--;
    }
}
;
function isSymmetric(root) {
    let symmetry = true;
    _isSymmetry(root?.left ?? null, root?.right ?? null);
    return symmetry;
    function _isSymmetry(left, right) {
        if ((left == null && right == null) || !symmetry)
            return;
        if (left == null || right == null || left.val !== right.val) {
            symmetry = false;
            return;
        }
        _isSymmetry(left.left, right.right);
        _isSymmetry(left.right, right.left);
    }
}
;
function isSameTree(p, q) {
    let same = true;
    _isSame(p, q);
    function _isSame(pNode, qNode) {
        if ((pNode == null && qNode == null) || !same)
            return;
        if (qNode?.val !== pNode?.val || pNode == null || qNode == null) {
            same = false;
            return;
        }
        _isSame(pNode.left, qNode.left);
        _isSame(pNode.right ?? null, qNode.right);
    }
    return same;
}
;
function inorderTraversal(root) {
    let numArr = [];
    let tempArr = [];
    let node = root;
    while (node || tempArr.length) {
        while (node) {
            tempArr.push(node);
            node = node.left;
        }
        node = tempArr.pop() ?? null;
        numArr.push(node?.val ?? 0);
        node = node?.right ?? null;
    }
    // traverse(root);
    return numArr;
    // function traverse(node : TreeNode | null){
    //     if(!node) return;
    //     numArr.push(node.val);
    //     if(node?.left) traverse(node.left);
    //     if(node?.right) traverse(node.right);
    // }
}
;
function merge(nums1, m, nums2, n) {
    let i = 0;
    nums2.forEach(num => {
        while (nums1[i] <= num && i < m) {
            i++;
        }
        nums1.pop();
        nums1.splice(i, 0, num);
        i++;
        m++;
    });
}
;
function removeDuplicates(nums) {
    if (nums.length <= 1)
        return nums.length;
    let count = 0;
    nums.forEach((num) => {
        if (nums[count] != num) {
            count++;
            nums[count] = num;
        }
    });
    return count + 1;
}
;
function removeElement(nums, val) {
    let count = 0;
    nums.forEach((num) => {
        if (num != val) {
            nums[count] = num;
            count++;
        }
    });
    return count;
}
;
function strStr(haystack, needle) {
    for (let i = 0; i <= haystack.length - needle.length; i++) {
        let sliceWord = haystack.slice(i, i + needle.length);
        if (sliceWord == needle) {
            return i;
        }
    }
    return -1;
}
;
function searchInsert(nums, target) {
    let left = 0;
    let right = nums.length - 1;
    while (left <= right) {
        let middle = Math.floor((left + right) / 2);
        if (nums[middle] == target) {
            return middle;
        }
        else if (target < nums[middle]) {
            left = middle + 1;
        }
        else if (nums[middle] < target) {
            right = middle - 1;
        }
    }
    return left;
}
;
function lengthOfLastWord(s) {
    let wordArray = s.trim().split(' ');
    return wordArray.pop()?.length ?? 0;
}
;
function plusOne(digits) {
    let carryFwd = 1;
    let resultArray = digits.reduceRight((acc, val) => {
        let plusOne = val + carryFwd;
        if (plusOne < 10) {
            carryFwd = 0;
            acc.unshift(plusOne);
        }
        else {
            acc.unshift(0);
        }
        return acc;
    }, []);
    if (carryFwd)
        resultArray.unshift(1);
    return resultArray;
}
;
function addBinary(a, b) {
    let aLen = a.length - 1;
    let bLen = b.length - 1;
    let carry = 0;
    let result = "";
    while (aLen >= 0 || bLen >= 0) {
        let temp = +(a[aLen] ?? 0) + +(b[bLen] ?? 0) + carry;
        if (temp == 3) {
            carry = 1;
            result = "1" + result;
        }
        else if (temp == 2) {
            carry = 1;
            result = "0" + result;
        }
        else if (temp == 1) {
            carry = 0;
            result = "1" + result;
        }
        else {
            carry = 0;
            result = "0" + result;
        }
        aLen--;
        bLen--;
    }
    if (carry)
        result = "1" + result;
    return result;
}
;
function mySqrt(x) {
    let result = BST(0, x);
    function BST(left, right) {
        if (left >= right)
            return left;
        let mid = Math.floor((left + right) / 2);
        if (mid * mid <= x && (mid + 1) * (mid + 1) > x)
            return mid;
        if (mid * mid > x) {
            return BST(left, mid - 1);
        }
        else {
            return BST(mid + 1, right);
        }
    }
    return result;
}
;
function climbStairs(n) {
    let num = [1, 2];
    for (let i = 2; i < n; i++) {
        num[i] = num[i - 1] + num[i - 2];
    }
    return num[n - 1];
}
;
function deleteDuplicates(head) {
    let node = head;
    while (node) {
        let _val = node.val;
        while (node.next?.val == _val) {
            node.next = node.next?.next;
        }
        node = node.next;
    }
    return head;
}
;
let calculations = 0;
function fibonacci(num) {
    calculations++;
    if (num <= 2)
        return num;
    return fibonacci(num - 1) + fibonacci(num - 2);
}
function fibonacciMemoized() {
    let cache = new Map();
    return function fibo(num) {
        calculations++;
        let hashVal = cache.get(num);
        if (!!hashVal)
            return hashVal ?? 0;
        if (num < 2)
            return num;
        hashVal = fibo(num - 1) + fibo(num - 2);
        cache.set(num, hashVal);
        return hashVal;
    };
}
//# sourceMappingURL=LeetCode.js.map