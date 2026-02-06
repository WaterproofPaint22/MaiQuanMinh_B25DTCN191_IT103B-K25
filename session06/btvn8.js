let elementCount = Number(prompt("Nhập số lượng phần tử của mảng:"));

while (isNaN(elementCount) || elementCount <= 0) {
    elementCount = Number(prompt("Số lượng không hợp lệ. Vui lòng nhập số nguyên dương:"));
}

let fibonacciArray = [];

for (let i = 0; i < elementCount; i++) {
    let inputNum = Number(prompt(`Nhập phần tử thứ ${i + 1}:`));
    while (isNaN(inputNum)) {
        inputNum = Number(prompt(`Giá trị không hợp lệ. Nhập lại phần tử thứ ${i + 1}:`));
    }
    fibonacciArray.push(inputNum);
}

console.log("Mảng đã nhập:", fibonacciArray);

let isFibonacciSequence = true;

if (fibonacciArray.length < 3) {
    console.log("Mảng quá ngắn để kiểm tra dãy Fibonacci.");
} else {
    for (let j = 2; j < fibonacciArray.length; j++) {
        if (fibonacciArray[j] !== fibonacciArray[j - 1] + fibonacciArray[j - 2]) {
            isFibonacciSequence = false;
            break;
        }
    }
}

if (isFibonacciSequence) {
    console.log("Là dãy số fibonacci.");
} else {
    console.log("Không phải dãy số fibonacci.");
}