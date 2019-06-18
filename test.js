const arr = [2,7,11,15]

var twoSum = function(nums, target) {
    
    for (let i = 0; i <= nums.length - 1; i++) {
        const left = target - nums[i];
        
        const copyNums = [...nums];
        delete copyNums[i];
        
        const ind = copyNums.indexOf(left);
        console.log(ind)
        if(ind > 0) {
            console.log(ind, "hey")
            return [i, ind];
        }
    }
        
    
};

const result = twoSum(arr, 26)
result