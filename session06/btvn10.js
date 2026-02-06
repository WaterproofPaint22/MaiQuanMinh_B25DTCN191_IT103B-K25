let numberArray = [];

while (true) {
    let menu = 
        "================== MENU ===================\n" +
        "1. Nhập số phần tử cần nhập và giá trị các phần tử\n" +
        "2. In ra giá trị các phần tử đang quản lý\n" +
        "3. In ra các phần tử chẵn, tính tổng và sắp xếp giảm dần\n" +
        "4. In ra giá trị lớn nhất, nhỏ nhất và vị trí của chúng\n" +
        "5. In ra các số nguyên tố trong mảng và tính tổng\n" +
        "6. Nhập một số và đếm số lần xuất hiện trong mảng\n" +
        "7. Thêm một phần tử vào vị trí chỉ định\n" +
        "8. Xóa một phần tử theo giá trị\n" +
        "9. Sắp xếp mảng theo thứ tự tăng dần hoặc giảm dần\n" +
        "0. Thoát\n" +
        "============================================";

    let userChoice = Number(prompt(menu + "\nLựa chọn của bạn:"));

    if (userChoice === 1) {
        numberArray = [];
        let n = Number(prompt("Nhập số lượng phần tử:"));
        while (isNaN(n) || n <= 0) {
            n = Number(prompt("Số lượng phải là số nguyên dương."));
        }

        for (let i = 0; i < n; i++) {
            let val = Number(prompt(`Nhập phần tử thứ ${i + 1}:`));
            while (isNaN(val)) {
                val = Number(prompt(`Giá trị không hợp lệ. Vui lòng nhập lại phần tử thứ ${i + 1}:`));
            }
            numberArray.push(val);
        }
        console.log("Đã nhập dữ liệu thành công!");
    } 
    else if (userChoice === 2) {
        console.log("Mảng đang quản lý:", numberArray);
    } 
    else if (userChoice === 3) {
        let evenNumbers = [];
        let evenSum = 0;

        for (let i = 0; i < numberArray.length; i++) {
            if (numberArray[i] % 2 === 0) {
                evenNumbers.push(numberArray[i]);
                evenSum += numberArray[i];
            }
        }

        evenNumbers.sort((a, b) => b - a);
        console.log("Các số chẵn (đã sắp xếp giảm dần):", evenNumbers);
        console.log("Tổng các số chẵn:", evenSum);
    } 
    else if (userChoice === 4) {
        if (numberArray.length === 0) {
            console.log("Mảng rỗng!");
        } else {
            let maxVal = numberArray[0];
            let minVal = numberArray[0];
            let maxIndices = [];
            let minIndices = [];

            // Tìm giá trị Max/Min
            for (let i = 1; i < numberArray.length; i++) {
                if (numberArray[i] > maxVal) maxVal = numberArray[i];
                if (numberArray[i] < minVal) minVal = numberArray[i];
            }

            // Tìm vị trí
            for (let i = 0; i < numberArray.length; i++) {
                if (numberArray[i] === maxVal) maxIndices.push(i);
                if (numberArray[i] === minVal) minIndices.push(i);
            }

            console.log(`Giá trị LỚN NHẤT: ${maxVal} (tại vị trí index: ${maxIndices.join(", ")})`);
            console.log(`Giá trị NHỎ NHẤT: ${minVal} (tại vị trí index: ${minIndices.join(", ")})`);
        }
    } 
    else if (userChoice === 5) {
        let primeSum = 0;
        let primeNumbers = [];

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
        console.log("Các số nguyên tố:", primeNumbers);
        console.log("Tổng các số nguyên tố:", primeSum);
    } 
    else if (userChoice === 6) {
        let searchNum = Number(prompt("Nhập số cần đếm:"));
        let count = 0;

        for (let i = 0; i < numberArray.length; i++) {
            if (numberArray[i] === searchNum) {
                count++;
            }
        }
        console.log(`Số ${searchNum} xuất hiện ${count} lần trong mảng.`);
    } 
    else if (userChoice === 7) {
        let insertVal = Number(prompt("Nhập giá trị cần thêm:"));
        let insertIndex = Number(prompt(`Nhập vị trí index cần thêm (0 - ${numberArray.length}):`));

        if (insertIndex >= 0 && insertIndex <= numberArray.length) {
            numberArray.splice(insertIndex, 0, insertVal);
            console.log(`Đã thêm ${insertVal} vào vị trí ${insertIndex}.`);
            console.log("Mảng mới:", numberArray);
        } else {
            console.log("Vị trí không hợp lệ!");
        }
    } 
    else if (userChoice === 8) {
        let deleteVal = Number(prompt("Nhập giá trị cần xóa:"));
        let index = numberArray.indexOf(deleteVal);

        if (index !== -1) {
            numberArray.splice(index, 1);
            console.log(`Đã xóa phần tử ${deleteVal} đầu tiên tìm thấy.`);
            console.log("Mảng mới:", numberArray);
        } else {
            console.log(`Không tìm thấy giá trị ${deleteVal} trong mảng.`);
        }
    }
    else if (userChoice === 9) {
        let sortType = Number(prompt("Chọn kiểu sắp xếp:\n1. Tăng dần\n2. Giảm dần"));
        
        if (sortType === 1) {
            numberArray.sort((a, b) => a - b);
            console.log("Mảng đã sắp xếp tăng dần:", numberArray);
        } else if (sortType === 2) {
            numberArray.sort((a, b) => b - a);
            console.log("Mảng đã sắp xếp giảm dần:", numberArray);
        } else {
            console.log("Lựa chọn sắp xếp không hợp lệ.");
        }
    }
    else if (userChoice === 0) {
        console.log("Chương trình kết thúc. Tạm biệt!");
        break;
    } 
    else {
        console.log("Lựa chọn không hợp lệ. Vui lòng chọn từ 0 đến 9.");
    }
}