let booksId = [];
let booksName = [];
let bookStatus = [];
let inputQuantity = Number(prompt("Có bao nhiêu cuốn sách cần kiểm tra tình trạng hôm nay?"));

while (isNaN(inputQuantity) || inputQuantity <= 0) {
    inputQuantity = Number(prompt("Số lượng không hợp lệ. Vui lòng nhập số nguyên dương:"));
}

for (let i = 0; i < inputQuantity; i++) {
    let id = prompt(`Nhập MÃ sách thứ ${i + 1}:`);
    while (!id || id.trim() === "") {
        id = prompt(`Mã sách không được để trống. Nhập lại mã sách thứ ${i + 1}:`);
    }
    booksId.push(id);

    let name = prompt(`Nhập TÊN sách thứ ${i + 1}:`);
    while (!name || name.trim() === "") {
        name = prompt(`Tên sách không được để trống. Nhập lại tên sách thứ ${i + 1}:`);
    }
    booksName.push(name);

    let statusOpt = Number(prompt(`Tình trạng sách (1-3):\n1. Hỏng nhẹ\n2. Hỏng nặng\n3. Cần sửa gấp`));
    while (![1, 2, 3].includes(statusOpt)) {
        statusOpt = Number(prompt(`Lựa chọn không hợp lệ. Nhập lại (1-3):`));
    }

    let statusText = "";
    if (statusOpt === 1) statusText = "Hỏng nhẹ";
    else if (statusOpt === 2) statusText = "Hỏng nặng";
    else statusText = "Cần sửa gấp";
    
    bookStatus.push(statusText);
}

console.clear();
console.log("--- DANH SÁCH BAN ĐẦU ---");
for (let i = 0; i < booksId.length; i++) {
    console.log(`${i + 1}. [${booksId[i]}] ${booksName[i]} - Trạng thái: ${bookStatus[i]}`);
}

while (true) {
    let option = Number(prompt(`CHỌN CHỨC NĂNG:\n1. Sửa tình trạng\n2. Xóa sách khỏi danh sách\n0. Kết thúc và in báo cáo`));

    if (option === 0) {
        break;
    } 
    else if (option === 1) {
        let searchId = prompt("Nhập mã sách cần sửa:");
        let foundIndex = -1;

        for (let i = 0; i < booksId.length; i++) {
            if (booksId[i] === searchId) {
                foundIndex = i;
                break;
            }
        }

        if (foundIndex !== -1) {
            let newStatusOpt = Number(prompt(`Chọn trạng thái mới cho sách "${booksName[foundIndex]}" (1-5):\n1. Hỏng nhẹ\n2. Hỏng nặng\n3. Cần sửa gấp\n4. Đã sửa xong\n5. Loại bỏ`));
            while (![1, 2, 3, 4, 5].includes(newStatusOpt)) {
                newStatusOpt = Number(prompt(`Lựa chọn không hợp lệ. Nhập lại (1-5):`));
            }

            let newStatusText = "";
            if (newStatusOpt === 1) newStatusText = "Hỏng nhẹ";
            else if (newStatusOpt === 2) newStatusText = "Hỏng nặng";
            else if (newStatusOpt === 3) newStatusText = "Cần sửa gấp";
            else if (newStatusOpt === 4) newStatusText = "Đã sửa xong";
            else newStatusText = "Loại bỏ";

            bookStatus[foundIndex] = newStatusText;
            console.log(`Đã cập nhật trạng thái sách [${searchId}] thành: ${newStatusText}`);
        } else {
            console.log(`Không tìm thấy sách có mã: ${searchId}`);
        }
    } 
    else if (option === 2) {
        let deleteId = prompt("Nhập mã sách cần xóa:");
        let foundIndex = -1;

        for (let i = 0; i < booksId.length; i++) {
            if (booksId[i] === deleteId) {
                foundIndex = i;
                break;
            }
        }

        if (foundIndex !== -1) {
            let deletedName = booksName[foundIndex];
            booksId.splice(foundIndex, 1);
            booksName.splice(foundIndex, 1);
            bookStatus.splice(foundIndex, 1);
            console.log(`Đã xóa sách: ${deletedName}`);
        } else {
            console.log(`Không tìm thấy sách có mã: ${deleteId}`);
        }
    } 
    else {
        console.log("Lựa chọn không hợp lệ!");
        continue;
    }

    console.log("--- DANH SÁCH HIỆN TẠI ---");
    if (booksId.length === 0) {
        console.log("(Danh sách trống)");
    } else {
        for (let i = 0; i < booksId.length; i++) {
            console.log(`${i + 1}. [${booksId[i]}] ${booksName[i]} - Trạng thái: ${bookStatus[i]}`);
        }
    }
    console.log("--------------------------");
}

console.clear();
console.log("BÁO CÁO TỔNG KẾT");
console.log(`Tổng số sách còn lại trong danh sách: ${booksId.length}`);

let fixedCount = 0;
let discardedCount = 0;

for (let i = 0; i < bookStatus.length; i++) {
    if (bookStatus[i] === "Đã sửa xong") {
        fixedCount++;
    } else if (bookStatus[i] === "Loại bỏ") {
        discardedCount++;
    }
}

console.log(`Số sách "Đã sửa xong": ${fixedCount}`);
console.log(`Số sách trạng thái "Loại bỏ": ${discardedCount}`);
console.log("--- CHI TIẾT DANH SÁCH ---");
if (booksId.length === 0) {
    console.log("Không có sách nào.");
} else {
    for (let i = 0; i < booksId.length; i++) {
        console.log(`- [${booksId[i]}] ${booksName[i]}: ${bookStatus[i]}`);
    }
}