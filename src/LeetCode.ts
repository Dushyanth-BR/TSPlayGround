import { ListNode, TreeNode } from "./ListNode";

export default class LeetCode{
    
    public helloWorld(){
        console.log("hello world -- new ");
    }

    public twoSum(nums: number[], target: number): number[] {
    
        let numMap = new Map<number, number>();
    
        for(let i=0; i<nums.length; i++){
            if(numMap.get(target-nums[i])){
                return [numMap.get(target-nums[i]) ?? 0, i];
            }
            numMap.set(nums[i], i);
        }
        return [-1, -1];
    };


    public isPalindrome(x: number): boolean {
        let total = 0;
        let temp = x;
        while(temp>0){
            let y = Math.floor(temp%10);
            temp = Math.floor(temp/10);
            total = total*10 + y;
        }
        return x == total;
    };

    public romanToInt(s: string): number {
        let romalNumerals = new Map([
            ["I", 1],
            ["V", 5],
            ["X", 10],
            ["L", 50],
            ["C", 100],
            ["D", 500],
            ["M", 1000],
        ])

        let numeralsArr = s.split('');

        let sum = numeralsArr.reduce((acc, cur, index, arr)=>{
            let curValue = romalNumerals.get(cur) ?? 0;
            let nextValue = romalNumerals.get(arr[index+1]) ?? 0;

            return acc + ( (curValue<nextValue) ? -curValue : curValue);
        }, 0);
        return sum;
    };

    public longestCommonPrefix(strs: string[]): string {
        let charArray : string[][] = [];
        let result : string[] = [];
        let minLength : number = strs[0].length;

        strs.forEach(data => {
            charArray.push(data.split(''));
            minLength = Math.min(minLength, data.length);
        })

        for(let i=0; i< minLength; i++){

            let char = charArray[0][i];
            for(let j=0; j<charArray.length; j++){
                if(charArray[j][i] != char){
                    char = "";
                    break;
                }
            }
            if(char === ""){
                break;
            }
            result.push(char);
        }
        
        

        return result.join('');


    };

    public isValid(s: string): boolean {
        if (s.length % 2 !== 0) return false;
        let parMap = new Map([
            ["{", "}"],
            ["[", "]"],
            ["(", ")"],
        ]);

        let arr : string[] = [];
        let isValid = s.split('').every((par)=>{
            if(parMap.has(par)){
                arr.push(par);
            }else if(parMap.get(arr.pop() ?? "") != par) {
                return false;
            }
            return true;
        });
        return isValid && arr.length == 0;
    };

    public mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
    
        if(list1 == null) return list2;
        if(list2 == null) return list1;

        let mergeList : ListNode;

        if(list1.val<list2.val){
            mergeList = new ListNode(list1.val, this.mergeTwoLists(list1.next, list2));
        }else{
            mergeList = new ListNode(list2.val, this.mergeTwoLists(list1, list2.next));
        }

        return mergeList;
    };

    public callFunction(){
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



function maxDepth(root: TreeNode | null): number {
    let maxDepth : number = 0;
    let curDepth : number = 0;
    _findDepth(root);

    return maxDepth;

    function _findDepth(node : TreeNode | null){
        if(!node) return;
        curDepth++;
        maxDepth = Math.max(maxDepth, curDepth);
        _findDepth(node.left);
        _findDepth(node.right);
        curDepth--;

    }
    
};

function isSymmetric(root: TreeNode | null): boolean {
    let symmetry : boolean = true;

    _isSymmetry(root?.left ?? null, root?.right ?? null);

    return symmetry;

    function _isSymmetry(left : TreeNode | null, right : TreeNode | null){
        if((left == null && right == null) || !symmetry) return;
        if(left ==null || right==null || left.val !== right.val){
            symmetry = false;
            return;
        }
        _isSymmetry(left.left, right.right);
        _isSymmetry(left.right, right.left);
    }
    
};

function isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {
    let same : boolean = true
    
    _isSame(p, q);

    function _isSame(pNode : TreeNode|null, qNode : TreeNode|null){
        if((pNode == null && qNode==null) || !same) return;
        if(qNode?.val !== pNode?.val || pNode == null || qNode == null) 
        {
            same = false; 
            return;
        }
        _isSame(pNode.left, qNode.left);
        _isSame(pNode.right ?? null, qNode.right);
    }

    return same;
    
};

function inorderTraversal(root: TreeNode | null): number[] {
    let numArr : number[] = [];
    let tempArr : (TreeNode | null)[] = [];
    let node : (TreeNode | null) = root;

    while(node || tempArr.length){
        while(node){
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
    
};

function merge(nums1: number[], m: number, nums2: number[], n: number): void {
    let i = 0;
    nums2.forEach(num =>{
        while(nums1[i]<=num && i<m){
            i++;
        }
        nums1.pop();
        nums1.splice(i, 0, num);
        i++;
        m++;
    })
    
};


function removeDuplicates(nums: number[]): number {
    if(nums.length <= 1) return  nums.length;
    let count : number = 0;
    nums.forEach((num)=>{
        if(nums[count]!=num){
            count++;
            nums[count] = num;
        }
    });
    return count+1;
};

function removeElement(nums: number[], val: number): number {
    let count = 0;
    nums.forEach((num)=>{
        if(num!=val){
            nums[count] = num;
            count++;
        }
    });

    return count;
};

function strStr(haystack: string, needle: string): number {
    for(let i=0; i<=haystack.length-needle.length; i++){
        let sliceWord = haystack.slice(i, i + needle.length);
        if(sliceWord == needle){
            return i;
        }
    }
    return -1;


};

function searchInsert(nums: number[], target: number): number {
    
    let left : number = 0;
    let right : number = nums.length-1;

    while(left<=right){
        let middle = Math.floor((left+right)/2);

        if(nums[middle]==target){
            return middle;
        } else if(target < nums[middle]){
            left = middle+1;
        }else if(nums[middle] < target){
            right = middle-1;
        } 
    }

    return left;

};
function lengthOfLastWord(s: string): number {

    let wordArray = s.trim().split(' ');
    return wordArray.pop()?.length ?? 0;
    
};

function plusOne(digits: number[]): number[] {
    let carryFwd = 1;
    let resultArray = digits.reduceRight((acc : number[], val)=>{
                            let plusOne = val+carryFwd;

                            if(plusOne<10){
                                carryFwd = 0;
                                acc.unshift(plusOne);
                            }else{
                                acc.unshift(0);
                            }
                            return acc;
                        }, []);

    if(carryFwd) resultArray.unshift(1);

    return resultArray;


};

function addBinary(a: string, b: string): string {
    let aLen : number = a.length-1;
    let bLen : number = b.length-1;
    let carry : number = 0;

    let result : string = "";

    while(aLen>=0 || bLen>=0){
        
        let temp = +(a[aLen] ?? 0)+ +(b[bLen] ?? 0) +carry;
        if(temp==3){
            carry = 1;
            result = "1" + result;
        }else if(temp==2){
            carry = 1;
            result = "0" + result;
        }else if(temp==1){
            carry = 0;
            result = "1" + result;
        }else{
            carry = 0;
            result = "0" + result;
        }
        aLen--;
        bLen--;
    }
    if(carry) result = "1" + result;

    return result;
};
function mySqrt(x: number): number {
    
    
    let result = BST(0, x);


    function BST(left : number, right : number) : number{
        if(left>=right) return left;

        let mid = Math.floor((left+right)/2);
        if(mid*mid<=x && (mid+1)*(mid+1)>x) return mid;
        if(mid*mid > x){
            return BST(left, mid-1);
        }else{
            return BST(mid+1, right);
        }
    }



    return result;
};

function climbStairs(n: number): number {
    let num : number[] = [ 1, 2];
    for(let i=2; i<n; i++){
        num[i]= num[i-1] + num[i-2];
    }
    return num[n-1];
};

function deleteDuplicates(head: ListNode | null): ListNode | null {
    let node = head;

    while(node){
        let _val = node.val;
        while(node.next?.val == _val){
            node.next = node.next?.next
        }
        node = node.next;
    }

    return head;
    
};

let calculations: number = 0;

function fibonacci(num: number): number{
    calculations++;
    if(num <= 2) return num;
    return fibonacci(num-1) + fibonacci(num-2);
}

function fibonacciMemoized(){
    let cache = new Map<number, number>();

    return function fibo(num: number): number{
        calculations++;
        let hashVal = cache.get(num);
        if(!!hashVal) return hashVal ?? 0;

        if(num<2) return num;

        hashVal = fibo(num-1) + fibo(num-2);
        cache.set(num, hashVal);

        return hashVal;

    }

}

