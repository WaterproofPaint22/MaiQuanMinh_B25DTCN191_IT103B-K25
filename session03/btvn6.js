let totalFeedback = 0;
let seriousCount = 0;
let mediumCount = 0;
let mildCount = 0;
let suggestionCount = 0;
let positiveCount = 0;
console.clear();
console.log(`=== HỆ THỐNG XỬ LÝ PHẢN HỒI BẠN ĐỌC ===`);

while (true) {
    let isContinue = prompt(`Có khiếu nại/phản hồi mới từ bạn đọc không? (có/không)`).toLowerCase().trim();

    if (isContinue === `không`) {
        break;
    } else if (isContinue !== `có`) {
        alert(`Vui lòng chỉ nhập 'có' hoặc 'không'!`);
        continue;
    }

    let readerName = prompt(`Tên bạn đọc (Bắt buộc):`);
    while (!readerName || readerName.trim() === ``) {
        readerName = prompt(`Tên không được để trống! Nhập lại tên bạn đọc:`);
    }

    let cardId = prompt(`Mã thẻ bạn đọc (Enter để bỏ qua):`);

    let type = Number(prompt(`Loại phản hồi:\n1. Phàn nàn / Khiếu nại\n2. Đề xuất cải thiện\n3. Phản hồi tích cực / Khen ngợi\n(Nhập 1, 2 hoặc 3):`));
    while (![1, 2, 3].includes(type)) {
        type = Number(prompt(`Loại không hợp lệ. Vui lòng nhập 1, 2 hoặc 3:`));
    }

    let severity = 0;
    if (type === 1) {
        severity = Number(prompt(`Mức độ nghiêm trọng:\n1. Nhẹ\n2. Trung bình\n3. Nghiêm trọng\n(Nhập 1, 2 hoặc 3):`));
        while (![1, 2, 3].includes(severity)) {
            severity = Number(prompt(`Mức độ không hợp lệ. Vui lòng nhập 1, 2 hoặc 3:`));
        }
    }

    let content = prompt(`Nội dung ngắn gọn (tham khảo):`);

    totalFeedback++;

    let logMessage = ``;
    let resultStatus = ``;

    if (type === 1 && severity === 3) {
        logMessage = `→ Chuyển ngay lãnh đạo - Khiếu nại nghiêm trọng`;
        resultStatus = `NGHIÊM TRỌNG`;
        seriousCount++;
    }
    else if (type === 1 && severity === 2) {
        logMessage = `→ Ghi nhận, sẽ xử lý trong ngày - Khiếu nại trung bình`;
        resultStatus = `TRUNG BÌNH`;
        mediumCount++;
    }
    else if (type === 1 && severity === 1) {
        logMessage = `→ Xử lý ngay tại quầy - Khiếu nại nhẹ`;
        resultStatus = `NHẸ`;
        mildCount++;
    }
    else if (type === 2) {
        logMessage = `→ Cảm ơn! Đề xuất đã được ghi nhận`;
        resultStatus = `ĐỀ XUẤT`;
        suggestionCount++;
    }
    else if (type === 3) {
        logMessage = `→ Cảm ơn bạn đã phản hồi tích cực!`;
        resultStatus = `KHEN NGỢI`;
        positiveCount++;
    }

    console.log(`- Khách: ${readerName} | Loại: ${type} | Mức: ${severity || 'N/A'} | KQ: ${logMessage}`);
}

console.log(`BÁO CÁO TỔNG KẾT CA LÀM VIỆC:`);
console.log(`∑ Tổng số phản hồi đã xử lý: ${totalFeedback}`);
console.log(`Khiếu nại Nghiêm trọng:      ${seriousCount}`);
console.log(`Khiếu nại Trung bình:        ${mediumCount}`);
console.log(`Khiếu nại Nhẹ:               ${mildCount}`);
console.log(`Đề xuất cải thiện:           ${suggestionCount}`);
console.log(`Phản hồi tích cực:           ${positiveCount}`);