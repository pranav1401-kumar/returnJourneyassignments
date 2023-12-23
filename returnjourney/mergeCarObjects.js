// Creating a function to merge two car objects
function mergeCarObjects(car1, car2) {
    // Creating a new object to store the merged properties
    let mergedCar = {};

    // Copying properties from car1 to mergedCar
    for (let key in car1) {
        mergedCar[key] = car1[key];
    }

    // Copying properties from car2 to mergedCar
    for (let key in car2) {
        mergedCar[key] = car2[key];
    }

    return mergedCar;
}

// Example car objects
let car1 = {
    brand: 'Toyota',
    model: 'Camry',
    year: 2020,
};

let car2 = {
    color: 'Red',
    price: 25000,
};

// Merging the car objects
let mergedCar = mergeCarObjects(car1, car2);
console.log(mergedCar);
