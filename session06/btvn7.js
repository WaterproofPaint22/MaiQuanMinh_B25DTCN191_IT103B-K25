let elementCount = Number(prompt("Nhập số lượng phần tử của mảng (n):"));

while (isNaN(elementCount) || elementCount <= 0) {
    elementCount = Number(prompt("Số lượng không hợp lệ. Vui lòng nhập số nguyên dương:"));
}

let numberArray = [];

for (let i = 0; i < elementCount; i++) {
    let inputNum = Number(prompt(`Nhập giá trị phần tử thứ ${i + 1}:`));
    while (isNaN(inputNum)) {
        inputNum = Number(prompt(`Giá trị không hợp lệ. Nhập lại phần tử thứ ${i + 1}:`));
    }
    numberArray.push(inputNum);
}

console.log("Mảng đã nhập:", numberArray);

if (numberArray.length < 2 ) {
    console.log("Không đủ phần tử để tìm số lớn thứ hai.");
} else {
    let largest = -Infinity;
    let secondLargest = -Infinity;
    for (let j = 0; j < numberArray.length; j++) {
        let current = numberArray[j];
        if (current > largest) {
            secondLargest = largest;
            largest = current;
        } else if (current > secondLargest && current < largest) {
            secondLargest = current;
        }
    }

    if (secondLargest === -Infinity) {
        console.log("Không có số lớn thứ hai trong mảng.");
        } else {
        console.log(`Số lớn thứ hai trong mảng là: ${secondLargest}`);
    }
}