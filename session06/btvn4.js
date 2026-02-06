let charArray = [];
let inputLength = Number(prompt("Nhập số lượng ký tự của mảng:"));

while (isNaN(inputLength) || inputLength <= 0) {
    inputLength = Number(prompt("Số lượng không hợp lệ. Vui lòng nhập số nguyên dương:"));
}

for (let i = 0; i < inputLength; i++) {
    let inputChar = prompt(`Nhập ký tự thứ ${i + 1}:`);
    
    while (inputChar === null || inputChar.trim() === "") {
        inputChar = prompt(`Ký tự không được để trống. Nhập lại ký tự thứ ${i + 1}:`);
    }
    
    charArray.push(inputChar);
}

let numericCount = 0;

for (let j = 0; j < charArray.length; j++) {
    if (!isNaN(charArray[j]) && charArray[j].trim() !== "") {
        numericCount++;
    }
}

console.log("Mảng ký tự đã nhập:", charArray);
console.log(`Số lượng ký tự số trong mảng là: ${numericCount}`);