let totalReturns = Number(prompt("Hôm nay có bao nhiêu lượt trả sách?"));
let lateCount = 0;

for (let i = 1; i <= totalReturns; i++) {
    console.log(`--- Xử lý lượt trả thứ ${i} ---`);
    
    let borrowerName = prompt(`Lượt ${i}: Nhập tên người trả:`);
    let bookTitle = prompt(`Lượt ${i}: Nhập tên sách:`);
    let daysBorrowed;
    do {
        daysBorrowed = Number(prompt(`Lượt ${i}: Số ngày đã mượn thực tế:`));

        if (daysBorrowed < 1 || isNaN(daysBorrowed)) {
            alert("Lỗi: Số ngày không hợp lệ! Vui lòng nhập lại.");
        }
    } while (daysBorrowed < 1 || isNaN(daysBorrowed));

    if (daysBorrowed <= 14) {
        console.log(`Trả đúng hạn.`);
    } 
    else if (daysBorrowed <= 21) {
        console.log(`Trả muộn nhẹ - Phạt nhắc nhở.`);
        lateCount++;
    } 
    else {
        console.log(`Quá hạn nghiêm trọng - Cần ghi biên bản phạt.`);
        lateCount++;
    }
}
console.log(`Tổng kết:`);
console.log(`- Tổng số lượt trả: ${totalReturns}`);
console.log(`- Số lượt trả muộn: ${lateCount}`);