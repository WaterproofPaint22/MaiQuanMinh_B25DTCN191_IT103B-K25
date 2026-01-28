let bookName = prompt("Nhập tên sách: ");
let bookYearPublished = Number(prompt("Nhập năm xuất bản của sách: "));
let currentYear = Number(prompt("Nhập năm hiện tại: "));
let bookAge = currentYear - bookYearPublished;
console.log(`Sách: ${bookName}`);
console.log(`Năm xuất bản: ${bookYearPublished}`);
console.log(`Tuổi của sách: ${bookAge} năm`);