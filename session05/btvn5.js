let booksId = [];
let booksName = [];
let booksCategory = [];
let inventoryQuantity = [];
let inputQuantity = Number(prompt("Có bao nhiêu loại sách cần nhập thông tin hôm nay?"));

while (isNaN(inputQuantity) || inputQuantity <= 0) {
    inputQuantity = Number(prompt("Số lượng không hợp lệ. Vui lòng nhập số nguyên dương:"));
}

for (let i = 0; i < inputQuantity; i++) {
    let id = prompt(`Nhập mã sách thứ ${i + 1}:`);
    let isDuplicate = false;

    if (booksId.includes(id)) {
        isDuplicate = true;
    }

    while (!id || id.trim() === "" || isDuplicate) {
        if (isDuplicate) {
            id = prompt(`Mã sách "${id}" đã tồn tại! Vui lòng nhập mã khác cho sách thứ ${i + 1}:`);
        } else {
            id = prompt(`Mã sách không được để trống. Nhập lại mã sách thứ ${i + 1}:`);
        }
        
        isDuplicate = booksId.includes(id);
    }
    booksId.push(id);

    let name = prompt(`Nhập tên sách thứ ${i + 1}:`);
    while (!name || name.trim() === "") {
        name = prompt(`Tên sách không hợp lệ. Nhập lại tên sách thứ ${i + 1}:`);
    }
    booksName.push(name);

    let category = prompt(`Nhập các thể loại của sách thứ ${i + 1} (cách nhau bởi dấu phẩy):`);
    while (!category || category.trim() === "") {
        category = prompt(`Thể loại không hợp lệ. Nhập lại (ví dụ: Lập trình,Web):`);
    }
    booksCategory.push(category);

    let qty = Number(prompt(`Nhập số lượng tồn kho của sách thứ ${i + 1}:`));
    while (isNaN(qty) || qty < 0) {
        qty = Number(prompt(`Số lượng phải >= 0. Nhập lại:`));
    }
    inventoryQuantity.push(qty);
}

let countProgramming = 0;
let jsWebBooksIds = [];
let minQtyIndex = 0; 

for (let j = 0; j < inputQuantity; j++) {
    let currentCategory = booksCategory[j].toLowerCase();

    if (currentCategory.includes("lập trình")) {
        countProgramming++;
    }

    if (currentCategory.includes("javascript") && currentCategory.includes("web")) {
        jsWebBooksIds.push(booksId[j]);
    }

    if (inventoryQuantity[j] < inventoryQuantity[minQtyIndex]) {
        minQtyIndex = j;
    }
}

console.log(`Tổng số sách thuộc thể loại 'Lập trình': ${countProgramming}`);
console.log("Danh sách mã sách thuộc cả hai thể loại 'JavaScript' và 'Web':");

if (jsWebBooksIds.length > 0) {
    for (let k = 0; k < jsWebBooksIds.length; k++) {
        console.log(jsWebBooksIds[k]);
    }
} else {
    console.log("Không có sách nào thỏa mãn.");
}

console.log("Loại sách có số lượng tồn kho thấp nhất:");
console.log(`Mã sách: ${booksId[minQtyIndex]}, Tên sách: ${booksName[minQtyIndex]}, Tồn kho: ${inventoryQuantity[minQtyIndex]}`);