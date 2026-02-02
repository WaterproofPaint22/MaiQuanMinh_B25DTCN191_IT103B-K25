let successfulRenewals = 0;
let failedRenewals = 0;
console.clear();
console.log(`CHƯƠNG TRÌNH HỖ TRỢ GIA HẠN SÁCH`);

while (true) {
    let isContinue = prompt(`Có yêu cầu gia hạn mới không? (nhập 'có' hoặc 'không'):`).toLowerCase().trim();

    if (isContinue === "không") {
        break;
    } else if (isContinue !== "có") {
        console.log(`Vui lòng chỉ nhập 'có' hoặc 'không'!`);
        continue;
    }

    let readerName = prompt(`Nhập tên bạn đọc:`);
    let bookTitle = prompt(`Nhập tên sách:`);
    let borrowedDays = Number(prompt(`Số ngày đã mượn hiện tại:`));
    let extensionDays = Number(prompt(`Số ngày muốn gia hạn thêm:`));

    if (borrowedDays < 1 || extensionDays < 1 || isNaN(borrowedDays) || isNaN(extensionDays)) {
        console.log(`Số ngày phải là số nguyên dương.`);
        continue;
    }

    let totalDays = borrowedDays + extensionDays;

    if (totalDays > 60) {
        console.log(`Không được gia hạn: Tổng thời gian vượt quá 60 ngày tối đa.`);
        failedRenewals++;
    }
    else if (borrowedDays > 45) {
        console.log(`Không được gia hạn: Đã mượn quá lâu (> 45 ngày).`);
        failedRenewals++;
    }
    else {
        console.log(`Gia hạn thành công.`);
        successfulRenewals++;
    }
}

console.log(`THỐNG KÊ:`);
console.log(`Số lần gia hạn thành công: ${successfulRenewals}`);
console.log(`Số lần gia hạn không thành công: ${failedRenewals}`);
console.log(`Tổng số yêu cầu đã xử lý: ${successfulRenewals + failedRenewals}`);