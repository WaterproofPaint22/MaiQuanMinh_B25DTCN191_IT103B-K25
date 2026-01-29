let bookName = prompt(`Nhập tên sách:`);
let bookCount = prompt(`Nhập số lượng sách`);

if (bookCount < 0) {
    console.log(`Số lượng sách không hợp lệ.`);
}
else if (bookCount > 0 && bookCount < 10) {
    console.log(`Thư viện có ít sách.`);
}
else if (bookCount >= 10 && bookCount <= 20) {
    console.log(`Thư viện có số lượng sách vừa đủ.`);
}
else {
    console.log(`Thư viện có nhiều sách.`);
}