function findCommonElements(arr1, arr2) {
    let common = [];

    // Loop through each element in the first array
    for (let i = 0; i < arr1.length; i++) {
        // Check if the element is present in the second array and not already in common
        if (arr2.indexOf(arr1[i]) !== -1 && common.indexOf(arr1[i]) === -1) {
            common.push(arr1[i]);
        }
    }

    return common;
}

// Example arrays
let array1 = [1, 2, 3, 4, 5];
let array2 = [3, 4, 5, 6, 7];

// Finding common elements
let result = findCommonElements(array1, array2);
console.log(result); // Output: [3, 4, 5]
