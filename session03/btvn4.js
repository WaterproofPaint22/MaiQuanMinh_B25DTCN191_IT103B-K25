let totalBooks = 0;
let lostBooks = 0;
let outOfStockBooks = 0;
let highStockBooks = 0;
let normalStockBooks = 0;

console.clear();
console.log(`=== CHƯƠNG TRÌNH KIỂM KÊ KHO SÁCH CUỐI CA ===`);

while (true) {
    let isContinue = prompt(`Tiếp tục kiểm kê sách tiếp theo? (có/không):`).toLowerCase().trim();

    if (isContinue === `không`) {
        break;
    } else if (isContinue !== `có`) {
        console.log(`Vui lòng chỉ nhập 'có' hoặc 'không'!`);
        continue;
    }

    let bookCode = prompt(`Nhập mã sách (Không được để trống):`);
    while (!bookCode || bookCode.trim() === ``) {
        bookCode = prompt(`Mã sách là bắt buộc! Vui lòng nhập lại:`);
    }

    let bookName = prompt(`Nhập tên sách (Mã: ${bookCode}):`);
    
    let realQuantity = Number(prompt(`Số lượng thực tế trong kho (>= 0):`));
    if (isNaN(realQuantity) || realQuantity < 0) {
        console.log(`Lỗi: Số lượng phải là số nguyên >= 0. Bỏ qua sách này.`);
        continue;
    }

    let status = Number(prompt(`Tình trạng sách:\n1. Bình thường (Có thể mượn)\n2. Mất (Không còn trong kho)\nNhập số 1 hoặc 2:`));

    totalBooks++;

    let resultMessage = ``;

    if (status === 2) {
        resultMessage = `SÁCH MẤT`;
        lostBooks++; 
    } 
    else if (status === 1 && realQuantity === 0) {
        resultMessage = `SÁCH HẾT HÀNG (Vẫn còn trong hệ thống)`;
        outOfStockBooks++; 
    }
    else if (status === 1 && realQuantity >= 10) {
        resultMessage = `SÁCH TỒN KHO NHIỀU`;
        highStockBooks++;
    }
    else if (status === 1 && realQuantity > 0 && realQuantity < 10) {
        resultMessage = `SÁCH TỒN KHO BÌNH THƯỜNG`;
        normalStockBooks++;
    }
    else {
        resultMessage = `Lỗi: Trạng thái hoặc số lượng không hợp lệ`;
        totalBooks--; 
    }

    console.log(`- Mã: ${bookCode} | Tên: ${bookName} | SL: ${realQuantity} -> KẾT QUẢ: ${resultMessage}`);
}

console.log(`BÁO CÁO KIỂM KÊ CUỐI PHIÊN:`);
console.log(`Tổng số sách đã kiểm kê:    ${totalBooks} cuốn`);
console.log(`Số sách mất:                ${lostBooks} cuốn`);
console.log(`Số sách hết hàng:           ${outOfStockBooks} cuốn`);
console.log(`Số sách tồn kho nhiều:      ${highStockBooks} cuốn`);
console.log(`Số sách tồn kho bình thường:${normalStockBooks} cuốn`);