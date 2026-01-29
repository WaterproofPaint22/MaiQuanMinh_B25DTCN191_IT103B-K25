let bookName = prompt("Nhập tên sách:");
let authorName = prompt("Nhập tên tác giả:");
let publicationYear = Number(prompt("Nhập năm xuất bản:"));
const currentYear = 2026;

if (publicationYear === currentYear) {
    console.log(`Đây là sách mới!`)
}
else if (currentYear - publicationYear <= 5) {
    console.log(`Sách khá mới.`)
}
else {
    console.log(`Sách đã cũ.`)
}