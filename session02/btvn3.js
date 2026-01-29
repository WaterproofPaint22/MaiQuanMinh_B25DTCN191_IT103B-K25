let bookName = prompt("Nhập tên sách:");
let bookType = prompt("Nhập thể loại sách (Khoa học, Lịch sử, Văn học, Truyện):");
let bookStatus = prompt("Nhập tình trạng sách (có sẵn/đã mượn):");

if (bookType.toLowerCase() === "Khoa học" || bookType === "Lịch sử") {
    if (bookStatus.toLowerCase() === "có sẵn") {
        console.log(`Sách này có sẵn trong thư viện.`);
    }
    else {
        console.log(`Sách này đã được mượn.`);
    }
}
else if (bookType.toLowerCase() === "Văn học" || bookType === "Truyện") {
    console.log(`Sách này có thể đọc giải trí`);
}
else {
    console.log(`Thể loại sách không hợp lệ.`);
}