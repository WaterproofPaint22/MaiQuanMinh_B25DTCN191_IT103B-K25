let bookName = prompt("Nhập tên sách:");
let borrowerName = prompt("Nhập tên người mượn:");
let bookStatus = prompt("Nhập tình trạng sách (có sẵn/đã mượn/không có sẵn):");
let borrowDays = Number(prompt("Nhập số ngày mượn:"));
let libraryCardStatus = prompt("Bạn đã có thẻ thư viện chưa? (chưa/rồi):");
if (bookStatus.toLowerCase() === "có sẵn" && libraryCardStatus.toLowerCase() === "rồi") {
    console.log(`Chúc mừng, bạn có thể mượn sách này.`);
}
else if (bookStatus.toLowerCase() === "đã mượn" && borrowDays<30) {
    if (libraryCardStatus.toLowerCase() === "rồi") {
        console.log(`Sách đang được mượn, vui lòng đợi đến khi trả lại.`);
    }
    else {
        console.log(`Bạn không thể mượn sách nếu không có thẻ thư viện.`);
    }
}
else if (tinhTrangSach === "không có sẵn") {
    console.log(`Sách này hiện tại không có sẵn trong thư viện, bạn có thể đăng ký mượn sau.`);
}
else {
    console.log(`Thông tin không hợp lệ, vui lòng nhập lại.`);
}