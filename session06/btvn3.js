let elementCount = Number(prompt("Nhập số lượng phần tử của mảng:"));

while (isNaN(elementCount) || elementCount <= 0) {
    elementCount = Number(prompt("Số lượng không hợp lệ. Vui lòng nhập số nguyên dương:"));
}

let numberArray = [];

for (let i = 0; i < elementCount; i++) {
    let inputNum = Number(prompt(`Nhập phần tử thứ ${i + 1}:`));
    while (isNaN(inputNum)) {
        inputNum = Number(prompt(`Giá trị không hợp lệ. Nhập lại phần tử thứ ${i + 1}:`));
    }
    numberArray.push(inputNum);
}

let negativeCount = 0;

for (let j = 0; j < numberArray.length; j++) {
    if (numberArray[j] < 0) {
        negativeCount++;
    }
}

console.log("Mảng đã nhập:", numberArray);
console.log(`Số lượng số nguyên âm trong mảng là: ${negativeCount}`);