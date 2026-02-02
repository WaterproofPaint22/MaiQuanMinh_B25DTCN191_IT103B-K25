let totalBorrowedBooks = Number(prompt(`Hôm nay có bao nhiêu lượt mượn sách?`));
for (let i = 0; i < totalBorrowedBooks; i++) {
    let borrowerName = prompt(`Nhập tên người mượn:`);
    let bookName = prompt(`Nhập tên sách:`);
    let borrowDate = Number(prompt(`Nhập ngày mượn (dd/mm/yyyy):`));
    if (borrowDate > 0 && borrowDate > 14) {
        console.log(`Cảnh báo: Thời gian mượn vượt quy định (tối đa 14 ngày)`);
    }
    else if (borrowDate <= 14) {
            console.log(`Mượn thành công`);
    } else {
        console.log(`Lỗi: Ngày mượn không hợp lệ`);
    }
}
console.log(`Đã hoàn thành thống kê ${totalBorrowedBooks} lượt mượn sách hôm nay.`);