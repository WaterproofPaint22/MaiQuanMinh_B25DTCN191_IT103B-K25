let totalRequests = 0;
let successCount = 0;
let rejectedCount = 0;
let pendingCount = 0;
console.clear();
console.log("=== HỆ THỐNG XỬ LÝ ĐẶT MƯỢN TRƯỚC ===");

while (true) {
    let isContinue = prompt("Có yêu cầu đặt mượn trước mới không? (có/không):").toLowerCase().trim();

    if (isContinue === "không") {
        break;
    } else if (isContinue !== "có") {
        alert("Vui lòng chỉ nhập 'có' hoặc 'không'!");
        continue;
    }

    let readerName = prompt("Nhập tên bạn đọc:");
    let bookId = prompt("Nhập mã sách muốn đặt:");
    let bookTitle = prompt("Nhập tên sách (tham khảo):");
    let waitingDays = Number(prompt("Số ngày dự kiến chờ (Nhập số nguyên >= 1):"));
    if (isNaN(waitingDays) || waitingDays < 1) {
        alert("Lỗi: Số ngày chờ không hợp lệ. Vui lòng nhập lại yêu cầu này.");
        continue;
    }

    let priority = Number(prompt("Mức ưu tiên:\n1. Sinh viên\n2. Giảng viên/NCS\n3. Nhân viên/Đặc cách\n(Nhập 1, 2 hoặc 3):"));
    if (![1, 2, 3].includes(priority)) {
        alert("Lỗi: Mức ưu tiên phải là 1, 2 hoặc 3.");
        continue;
    }

    totalRequests++;

    let logMessage = "";
    let logStatus = "";

    if (waitingDays > 45) {
        logMessage = "Từ chối: Thời gian chờ quá lâu (>45 ngày)";
        logStatus = "TỪ CHỐI";
        rejectedCount++;
    }
    else if (priority === 3) {
        logMessage = "Đặt trước thành công - Ưu tiên đặc cách cao nhất";
        logStatus = "THÀNH CÔNG";
        successCount++;
    }
    else if (priority === 2 && waitingDays <= 30) {
        logMessage = "Đặt trước thành công - Ưu tiên giảng viên/nghiên cứu";
        logStatus = "THÀNH CÔNG";
        successCount++;
    }
    else if (priority === 1 && waitingDays <= 21) {
        logMessage = "Đặt trước thành công";
        logStatus = "THÀNH CÔNG";
        successCount++;
    }
    else {
        logMessage = "Đặt trước tạm thời - Chờ xét duyệt thêm";
        logStatus = "CHỜ DUYỆT";
        pendingCount++;
    }

    console.log(`- Khách: ${readerName} | Ưu tiên: ${priority} | Chờ: ${waitingDays} ngày -> KẾT QUẢ: ${logStatus}`);
}

console.log("BÁO CÁO TỔNG KẾT CA LÀM VIỆC:");
console.log(`Tổng số yêu cầu đã xử lý:  ${totalRequests}`);
console.log(`Số yêu cầu thành công:     ${successCount}`);
console.log(`Số yêu cầu bị từ chối:     ${rejectedCount}`);
console.log(`Số yêu cầu chờ xét duyệt:  ${pendingCount}`);