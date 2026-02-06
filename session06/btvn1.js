let integerArray = [];
let count = 0;
console.log("NHẬP 10 SỐ NGUYÊN:");

for (let i = 0; i < 10; i++) {
    let inputNum = Number(prompt(`Nhập số nguyên thứ ${i + 1}:`));
    
    while (isNaN(inputNum)) {
        inputNum = Number(prompt(`Giá trị không hợp lệ. Vui lòng nhập lại số thứ ${i + 1}:`));
    }
    
    integerArray.push(inputNum);
}

console.log("Mảng đã nhập:", integerArray);

for (let j = 0; j < integerArray.length; j++) {
    if (integerArray[j] >= 10) {
        count++;
    }
}

console.log(`Số lượng số nguyên lớn hơn hoặc bằng 10 là: ${count}`);