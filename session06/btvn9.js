let numberArray = [];

let running = true;

while (running) {
    let menu = 
        `================== MENU ===================\n` +
        `1. Nhập số phần tử và giá trị các phần tử\n` +
        `2. In ra giá trị các phần tử đang quản lý\n` +
        `3. In ra giá trị các phần tử chẵn và tính tổng\n` +
        `4. In ra giá trị lớn nhất và nhỏ nhất trong mảng\n` +
        `5. In ra các phần tử là số nguyên tố trong mảng và tính tổng\n` +
        `6. Nhập vào một số và thống kê trong mảng có bao nhiêu phần tử đó\n` +
        `7. Thêm một phần tử vào vị trí chỉ định\n` +
        `8. Thoát\n` +
        `=========================================\n`;

let choice = Number(prompt(menu + "Lựa chọn của bạn: "));

    switch (choice) {
        case 1:
            numberArray = [];
            let n = Number(prompt("Nhập số lượng phần tử của mảng:"));
            while (isNaN(n) || n <= 0) {
                n = Number(prompt("Số lượng không hợp lệ. Vui lòng nhập một số nguyên dương:"));
            }

            for (let i = 0; i < n; i++) {
                let inputNum = Number(prompt(`Nhập phần tử thứ ${i + 1}:`));
                while (isNaN(inputNum)) {
                    inputNum = Number(prompt(`Giá trị không hợp lệ. Nhập lại phần tử thứ ${i + 1}:`));
                }
                numberArray.push(inputNum);
            }
            console.log("Đã nhập mảng thành công.", numberArray);
            break;
        case 2:
            console.log("Mảng hiện tại: ", numberArray);
            break;
        case 3:
            let evenNumbers = [];
            let evenSum = 0;

            for (let i = 0; i < numberArray.length; i++) {
                if (numberArray[i] % 2 === 0) {
                    evenNumbers.push(numberArray[i]);
                    evenSum += numberArray[i];
                }
            }
            console.log("Các phần tử chẵn trong mảng: ", evenNumbers);
            console.log(`Tổng các phần tử chẵn là: ${evenSum}`);
            break;
        case 4:
            if (numberArray.length === 0) {
                console.log("Mảng rỗng.");
            } else {
                let max = Math.max(...numberArray);
                let min = Math.min(...numberArray);
                console.log(`Giá trị lớn nhất trong mảng là: ${max}`);
                console.log(`Giá trị nhỏ nhất trong mảng là: ${min}`);
            }
            break;
        case 5:
            let primeNumbers = [];
            let primeSum = 0;
            for (let i = 0; i < numberArray.length; i++) {
                let currentNum = numberArray[i];
                let isPrime = true;
                if (currentNum < 2) {
                    isPrime = false;
                } else {
                    for (let j = 2; j <= Math.sqrt(currentNum); j++) {
                        if (currentNum % j === 0) {
                            isPrime = false;
                            break;
                        }
                    }
                }

                if (isPrime) {
                    primeNumbers.push(currentNum);
                    primeSum += currentNum;
                }
            }
            console.log("Các phần tử là số nguyên tố trong mảng: ", primeNumbers);
            console.log(`Tổng các phần tử là số nguyên tố là: ${primeSum}`);
            break;
        case 6:
            let searchNum = Number(prompt("Nhập số cần thống kê:"));
            let count = 0;

            for (let i = 0; i < numberArray.length; i++) {
                if (numberArray[i] === searchNum) {
                    count++;
                }
            }
            console.log(`Số phần tử có giá trị ${searchNum} trong mảng là: ${count}`);
            break;
        case 7:
            let newNum = Number(prompt("Nhập số cần thêm vào mảng:"));
            let index = Number(prompt("Nhập vị trí cần thêm:"));
            if (index >= 0 && index <= numberArray.length) {
                numberArray.splice(index, 0, newNum);
                console.log("Đã thêm phần tử vào vị trí chỉ định.");
            } else {
                console.log("Vị trí không hợp lệ.");
            }
            break;
        case 8:
            console.log("Thoát chương trình.");
            running = false;
            break;
        default:
            console.log("Lựa chọn không hợp lệ. Vui lòng chọn lại.");
    }
}