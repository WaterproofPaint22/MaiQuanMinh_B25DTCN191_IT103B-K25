let overdueBooks = [];
let input = Number(prompt(`Hôm nay có bao nhiêu cuốn sách bị trả muộn?`));
if (input > 0) {
    for (let i = 0; i < input; i++) {
        let bookName = prompt(`Nhập tên cuốn sách bị trả muộn thứ ${i + 1}:`);
        overdueBooks.push(bookName);
    }
    console.log(`Tổng số sách bị trả muộn: ${overdueBooks.length} cuốn`);
    console.log("Danh sách sách bị trả muộn:");
    let longTitleCount = 0;
    for (let j = 0; j < overdueBooks.length; j++) {
        let currentBooks = overdueBooks[j];
        console.log(`${j + 1}. ${overdueBooks[j]}`);
        if (currentBooks.length > 20) {
            longTitleCount++;
        }
    }
    console.log(`Số cuốn sách có tên dài hơn 20 ký tự: ${longTitleCount} cuốn`);
} else {
    console.log("Số lượng sách trả muộn không hợp lệ. Vui lòng thử lại.");
}