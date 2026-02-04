let readerCardIds = [];
let readerNames = [];
let borrowedBookCodes = [];
let overdueDays = [];
let inputQuantity = Number(prompt("Hôm nay có bao nhiêu bạn đọc bị ghi nhận quá hạn?"));

while (isNaN(inputQuantity) || inputQuantity <= 0) {
    inputQuantity = Number(prompt("Số lượng không hợp lệ. Vui lòng nhập số nguyên dương:"));
}

for (let i = 0; i < inputQuantity; i++) {
    let id = prompt(`Nhập mã thẻ bạn đọc thứ ${i + 1}:`);
    let isDuplicate = false;

    if (readerCardIds.includes(id)) {
        isDuplicate = true;
    }

    while (!id || id.trim() === "" || isDuplicate) {
        if (isDuplicate) {
            id = prompt(`Mã thẻ "${id}" đã tồn tại! Vui lòng nhập mã khác:`);
        } else {
            id = prompt(`Mã thẻ không được để trống. Nhập lại mã thẻ thứ ${i + 1}:`);
        }
        isDuplicate = readerCardIds.includes(id);
    }
    readerCardIds.push(id);

    let name = prompt(`Nhập tên bạn đọc thứ ${i + 1}:`);
    while (!name || name.trim() === "") {
        name = prompt(`Tên bạn đọc không hợp lệ. Nhập lại tên bạn đọc thứ ${i + 1}:`);
    }
    readerNames.push(name);

    let books = prompt(`Nhập các mã sách đang mượn (cách nhau bởi dấu phẩy):`);
    while (!books || books.trim() === "") {
        books = prompt(`Mã sách không hợp lệ. Nhập lại:`);
    }
    borrowedBookCodes.push(books);

    let days = Number(prompt(`Nhập số ngày quá hạn của bạn đọc thứ ${i + 1}:`));
    while (isNaN(days) || days < 0) {
        days = Number(prompt(`Số ngày phải >= 0. Nhập lại:`));
    }
    overdueDays.push(days);
}

console.clear();
console.log(`Danh sách bạn đọc quá hạn (${inputQuantity} người):`);

let countOver10Days = 0;
let jsAndPytReaderIds = "";
let maxOverdueIndex = 0;
let countOver7Days = 0;

for (let j = 0; j < inputQuantity; j++) {
    console.log(`${j + 1}. Mã thẻ: ${readerCardIds[j]} | Tên: ${readerNames[j]} | Sách đang mượn: ${borrowedBookCodes[j]} | Quá hạn: ${overdueDays[j]} ngày`);

    if (overdueDays[j] >= 10) {
        countOver10Days++;
    }

    let currentBooks = borrowedBookCodes[j];
    if (currentBooks.includes("JS") && currentBooks.includes("PYT")) {
        if (jsAndPytReaderIds !== "") {
            jsAndPytReaderIds += ", ";
        }
        jsAndPytReaderIds += readerCardIds[j];
    }

    if (overdueDays[j] > overdueDays[maxOverdueIndex]) {
        maxOverdueIndex = j;
    }

    if (overdueDays[j] >= 7) {
        countOver7Days++;
    }
}

console.log(`Tổng số bạn đọc quá hạn >= 10 ngày: ${countOver10Days} người`);
console.log(`Các bạn đọc đang mượn cả sách JS* và PYT*: ${jsAndPytReaderIds || "Không có"}`);
console.log(`Bạn đọc có số ngày quá hạn cao nhất: ${readerNames[maxOverdueIndex]} (${overdueDays[maxOverdueIndex]} ngày)`);

if (countOver7Days === 0) {
    console.log("Tình hình trả sách hôm nay khá tốt!");
} else if (countOver7Days >= 1 && countOver7Days <= 4) {
    console.log("Cần gửi nhắc nhở cho một số bạn đọc!");
} else {
    console.log("Tình trạng quá hạn nghiêm trọng! Cần liên hệ ngay!");
}