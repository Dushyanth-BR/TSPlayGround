"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ListNode_1 = require("./ListNode");
class LeetCodeNew {
    callFunction() {
        //helloWorld();
        // twoSum([3,2,4], 6);
        // isPalindrome(10);
        // romanToInt("MCMXCIV");
        // longestCommonPrefix(["flower","flow","flight"]);
        // isValid("([])");
        let list1 = new ListNode_1.ListNode(1, new ListNode_1.ListNode(2, new ListNode_1.ListNode(4)));
        let list2 = new ListNode_1.ListNode(1, new ListNode_1.ListNode(3, new ListNode_1.ListNode(4)));
        mergeTwoLists(list1, list2);
    }
}
exports.default = LeetCodeNew;
function mergeTwoLists(list1, list2) {
    if (list1 == null)
        return list2;
    if (list2 == null)
        return list1;
    if (list1.val < list2.val) {
    }
}
;
function isValid(s) {
    let paranthsMap = new Map([
        ["{", "}"],
        ["(", ")"],
        ["[", "]"],
    ]);
    if (s.length % 2)
        return false;
    let paranths = [];
    let isValid = s.split('').every((par) => {
        if (paranthsMap.has(par)) {
            paranths.push(par);
        }
        else if (par != paranthsMap.get(paranths.pop() ?? "")) {
            return false;
        }
        return true;
    });
    return isValid && paranths.length == 0;
}
;
function longestCommonPrefix(strs) {
    let longPrefix = "";
    let sample = strs[0];
    for (let i = 0; i < sample.length; i++) {
        let char = sample.charAt(i);
        for (let str of strs) {
            if (str.charAt(i) != char) {
                return longPrefix;
            }
        }
        longPrefix += char;
    }
    return longPrefix;
}
;
function romanToInt(s) {
    let romanIntMap = new Map([
        ["I", 1],
        ["V", 5],
        ["X", 10],
        ["L", 50],
        ["C", 100],
        ["D", 500],
        ["M", 1000]
    ]);
    let result = 0;
    for (let i = 0; i < s.length; i++) {
        let cur = romanIntMap.get(s.charAt(i)) ?? 0;
        let next = romanIntMap.get(s.charAt(i + 1)) ?? 0;
        if (cur < next)
            result -= cur;
        else
            result += cur;
    }
    return result;
}
;
function isPalindrome(x) {
    if (x < 0)
        return false;
    let xString = x.toString().split("");
    for (let i = 0; i < xString.length / 2; i++) {
        if (xString[i] != xString[xString.length - 1 - i])
            return false;
    }
    return true;
}
;
function twoSum(nums, target) {
    let hashMap = new Map();
    nums.forEach((num, index) => hashMap.set(num, index));
    for (let i = 0; i < nums.length; i++) {
        let compliment = target - nums[i];
        if (hashMap.get(compliment) ?? -1 > -1) {
            return [hashMap.get(compliment) ?? Infinity, i];
        }
    }
    return [];
}
;
function helloWorld() {
    console.log("Hello world! New LeetCode file");
}
//# sourceMappingURL=LeetCodeNew.js.map