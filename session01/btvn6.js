let bookName = prompt("Nhập tên cuốn sách: ");
let bookId = prompt("Nhập mã sách: ");
let standardizedBookName = bookName.trim().toLowerCase();
let bookCode = `LIB - ${standardizedBookName} - ${bookID}`;
console.log(`Tên sách gốc ${bookName}`);
console.log(`Mã sách chuẩn hóa: ${bookCode}`);