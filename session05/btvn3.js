let booksIds = [];
let booksName = [];
let inventoryQuantity = [];
let input = Number(prompt(`Có bao nhiêu loại sách cần kiểm tra bổ sung hôm nay?`));

for (let i = 0; i < input; i++) {
    let bookId = prompt(`Nhập mã sách thứ ${i + 1}:`);
    while (!bookId || bookId.trim() === "") {
        bookId = prompt(`Mã sách không hợp lệ. Vui lòng nhập lại mã sách thứ ${i + 1}:`);
    }
    booksIds.push(bookId);

    let bookName = prompt(`Nhập tên sách thứ ${i + 1}:`);
    while (!bookName || bookName.trim() === "") {
        bookName = prompt(`Tên sách không hợp lệ. Vui lòng nhập lại tên sách thứ ${i + 1}:`);
    }
    booksName.push(bookName);

    let qty = Number(prompt(`Nhập số lượng tồn kho của sách thứ ${i + 1}:`));
    while (isNaN(qty) || qty < 0) {
        qty = Number(prompt(`Số lượng không hợp lệ. Vui lòng nhập lại (>= 0):`));
    }
    inventoryQuantity.push(qty);
}

console.clear();
console.log(`Danh sách sách cần xem xét bổ sung (${booksIds.length} loại):`);

let lowStockCount = 0;
let outOfStockCodes = "";

for (let j = 0; j < booksIds.length; j++) {
    console.log(`${j + 1}. Mã: ${booksIds[j]} - Tên: ${booksName[j]} - Còn: ${inventoryQuantity[j]} bản`);

    if (inventoryQuantity[j] <= 5) {
        lowStockCount++;
    }

    if (inventoryQuantity[j] === 0) {
        if (outOfStockCodes !== "") {
            outOfStockCodes += ", ";
        }
        outOfStockCodes += booksIds[j];
    }
}

console.log(`\nSố sách có tồn kho <= 5 bản: ${lowStockCount} loại`);
console.log(`Các mã sách đã hết hàng (0 bản): ${outOfStockCodes || "Không có"}`);