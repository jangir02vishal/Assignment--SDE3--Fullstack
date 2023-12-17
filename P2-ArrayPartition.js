// Function to find the minimum possible absolute difference by partitioning the array
function minimumAbsoluteDifference(nums) {
    const n = nums.length / 2;

    // Calculate the sum of all elements in the array
    const totalSum = nums.reduce((sum, num) => sum + num, 0);

    // Initialize an array to store the possible sums of the first partition
    const possibleSums = [0];

    // Iterate through the first half of the array and generate all possible sums
    for (let i = 0; i < n; i++) {
        const currentSums = [...possibleSums];
        for (const sum of currentSums) {
            possibleSums.push(sum + nums[i]);
        }
    }

    // Sort the array of possible sums
    possibleSums.sort((a, b) => a - b);

    // Initialize the minimum absolute difference with a large value
    let minAbsDiff = Infinity;

    // Iterate through the second half of the array and find the minimum absolute difference
    for (let i = n; i < 2 * n; i++) {
        const targetSum = totalSum / 2 - nums[i];
        const closestSum = binarySearchClosest(possibleSums, targetSum);
        const absDiff = Math.abs(totalSum - 2 * (closestSum + nums[i]));

        // Update the minimum absolute difference
        minAbsDiff = Math.min(minAbsDiff, absDiff);
    }

    return minAbsDiff;
}

// Binary search to find the closest sum in the array
function binarySearchClosest(arr, target) {
    let left = 0;
    let right = arr.length - 1;

    while (left < right) {
        const mid = Math.floor((left + right) / 2);
        if (arr[mid] === target) {
            return arr[mid];
        } else if (arr[mid] < target) {
            left = mid + 1;
        } else {
            right = mid;
        }
    }

    // At this point, 'left' is the closest index to the target
    if (left > 0 && Math.abs(arr[left - 1] - target) < Math.abs(arr[left] - target)) {
        return arr[left - 1];
    } else {
        return arr[left];
    }
}

// Unit tests
console.log(minimumAbsoluteDifference([3, 9, 7, 3]));      // Output: 2
console.log(minimumAbsoluteDifference([-36, 36]));           // Output: 72
console.log(minimumAbsoluteDifference([2, -1, 0, 4, -2, -9]));// Output: 0