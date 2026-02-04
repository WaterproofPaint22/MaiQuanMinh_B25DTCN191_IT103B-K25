let returnedBooks = [];
let input = Number(prompt(`Bạn muốn trả bao nhiêu cuốn sách?`));

if (input > 0) {
    for (let i = 0; i < input; i++) {
    let bookName = prompt(`Nhập tên cuốn sách thứ ${i + 1}:`);
    returnedBooks.push(bookName);
    }

    console.log(`Tổng số sách đã được trả: ${returnedBooks.length} cuốn`);
    console.log("Danh sách sách đã trả:");
    for (let j = 0; j < returnedBooks.length; j++) {
        console.log(`${j + 1}. ${returnedBooks[j]}`);
}
} else {
    console.log("Số lượng sách trả không hợp lệ. Vui lòng thử lại.");
}