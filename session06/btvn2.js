let integerArray = [];

for (let i = 0; i < 10; i++) {
    let inputNum = Number(prompt(`Nhập số nguyên thứ ${i + 1}:`));
    
    while (isNaN(inputNum) || integerArray.includes(inputNum)) {
        if (integerArray.includes(inputNum)) {
            inputNum = Number(prompt(`Số ${inputNum} đã tồn tại. Vui lòng nhập số khác:`));
        } else {
            inputNum = Number(prompt(`Giá trị không hợp lệ. Vui lòng nhập lại số thứ ${i + 1}:`));
        }
    }
    
    integerArray.push(inputNum);
}

let maxValue = integerArray[0];
let maxIndex = 0;

for (let j = 1; j < integerArray.length; j++) {
    if (integerArray[j] > maxValue) {
        maxValue = integerArray[j];
        maxIndex = j;
    }
}

console.log("Mảng đã nhập:", integerArray);
console.log(`Phần tử có giá trị lớn nhất là: ${maxValue}`);
console.log(`Vị trí của phần tử đó là: ${maxIndex}`);