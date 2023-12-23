function getUniqueElements(inputArray) {
    let uniqueArray = [];
  
    // Iterate through the input array
    for (let i = 0; i < inputArray.length; i++) {
        let isUnique = true;
        
        // Check if the current element exists in the uniqueArray
        for (let j = 0; j < uniqueArray.length; j++) {
            if (inputArray[i] === uniqueArray[j]) {
                isUnique = false;
                break;
            }
        }

        // If the element is unique, add it to the uniqueArray
        if (isUnique) {
            uniqueArray.push(inputArray[i]);
        }
    }

    return uniqueArray;
}

// Example usage
let input = [1, 2, 2, 3, 4, 4, 5, 6, 6];
let result = getUniqueElements(input);
console.log(result); // Output: [1, 2, 3, 4, 5, 6]
