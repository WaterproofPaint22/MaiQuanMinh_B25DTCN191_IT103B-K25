let charArray = [];
let inputQuantity = Number(prompt("Nhập số lượng phần tử của mảng (n):"));

while (isNaN(inputQuantity) || inputQuantity <= 0) {
    inputQuantity = Number(prompt("Số lượng không hợp lệ. Vui lòng nhập số nguyên dương:"));
}

for (let i = 0; i < inputQuantity; i++) {
    let inputChar = prompt(`Nhập ký tự thứ ${i + 1}:`);
    
    while (inputChar === null || inputChar.trim() === "") {
        inputChar = prompt(`Ký tự không được để trống. Nhập lại ký tự thứ ${i + 1}:`);
    }
    
    charArray.push(inputChar);
}

let sumNumericValues = 0;

for (let j = 0; j < charArray.length; j++) {
    if (!isNaN(charArray[j])) {
        sumNumericValues += Number(charArray[j]);
    }
}

console.log("Mảng ký tự đã nhập:", charArray);
console.log(`Tổng các ký tự là số trong mảng: ${sumNumericValues}`);