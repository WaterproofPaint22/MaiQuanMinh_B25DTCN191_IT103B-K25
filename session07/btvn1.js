let playerIds = [];
let playerPositions = [];
let playerCount = Number(prompt("Có bao nhiêu cầu thủ cần nhập vào đội bóng?"));

while (isNaN(playerCount) || playerCount <= 0) {
    playerCount = Number(prompt("Số lượng không hợp lệ. Vui lòng nhập số nguyên dương:"));
}

for (let i = 0; i < playerCount; i++) {
    let id = prompt(`Nhập mã cầu thủ thứ ${i + 1}:`);
    let isDuplicate = false;

    if (playerIds.includes(id)) {
        isDuplicate = true;
    }

    while (!id || id.trim() === "" || isDuplicate) {
        if (isDuplicate) {
            id = prompt(`Mã cầu thủ "${id}" đã tồn tại! Vui lòng nhập mã khác:`);
        } else {
            id = prompt(`Mã cầu thủ không hợp lệ. Nhập lại mã cầu thủ thứ ${i + 1}:`);
        }
        isDuplicate = playerIds.includes(id);
    }
    playerIds.push(id);

    let positionCode = Number(prompt(`Nhập vị trí (1: Thủ môn, 2: Hậu vệ, 3: Tiền vệ, 4: Tiền đạo):`));
    while (![1, 2, 3, 4].includes(positionCode)) {
        positionCode = Number(prompt(`Lựa chọn không hợp lệ. Nhập lại (1-4):`));
    }

    let positionName = "";
    if (positionCode === 1) positionName = "Thủ môn";
    else if (positionCode === 2) positionName = "Hậu vệ";
    else if (positionCode === 3) positionName = "Tiền vệ";
    else positionName = "Tiền đạo";
    
    playerPositions.push(positionName);
}

function printTeamRoster() {
    console.log(`Đội bóng hiện tại (${playerIds.length} cầu thủ):`);
    for (let i = 0; i < playerIds.length; i++) {
        console.log(`${i + 1}. ${playerIds[i]} - ${playerPositions[i]}`);
    }
}

function findPlayersByPosition(positionToFind) {
    let foundIndices = [];
    for (let i = 0; i < playerPositions.length; i++) {
        if (playerPositions[i] === positionToFind) {
            foundIndices.push(i);
        }
    }
    return foundIndices;
}

printTeamRoster();

let searchCode = Number(prompt("Nhập vị trí cầu thủ muốn đếm số lượng (1: Thủ môn, 2: Hậu vệ, 3: Tiền vệ, 4: Tiền đạo):"));
while (![1, 2, 3, 4].includes(searchCode)) {
    searchCode = Number(prompt("Lựa chọn không hợp lệ. Nhập lại (1-4):"));
}

let searchPosition = "";
if (searchCode === 1) searchPosition = "Thủ môn";
else if (searchCode === 2) searchPosition = "Hậu vệ";
else if (searchCode === 3) searchPosition = "Tiền vệ";
else searchPosition = "Tiền đạo";

let resultIndices = findPlayersByPosition(searchPosition);

console.log(`Số cầu thủ ở vị trí ${searchPosition}: ${resultIndices.length}`);
console.log(`Các chỉ số cầu thủ ở vị trí ${searchPosition}: ${resultIndices.join(", ") || "Không có"}`);