"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
    }
    ;
}
exports.default = LeetCode;
//# sourceMappingURL=LeetCode.1.js.map