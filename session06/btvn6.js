let mixedData = [0, 1, false, 2, "", 3, "Hello", null, undefined, NaN, "World"];
let truthyData = [];
console.log("Original Array:", mixedData);

for (let i = 0; i < mixedData.length; i++) {
    if (mixedData[i]) {
        truthyData.push(mixedData[i]);
    }
}

console.log("Filtered Array (No Falsy):", truthyData);