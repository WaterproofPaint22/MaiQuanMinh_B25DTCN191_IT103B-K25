let players = [];

function pushPlayer(id, name, position) {
    let playerString = `${id}-${name}-${position}`;
    players.push(playerString);
}

function printTeamRoster() {
    console.log(`Danh sách đội bóng hiện tại (${players.length} cầu thủ):`);
    for (let i = 0; i < players.length; i++) {
        let infoParts = players[i].split("-");
        console.log(`${i + 1}. Mã: ${infoParts[0]} | Tên: ${infoParts[1]} | Vị trí: ${infoParts[2]}`);
    }
}

let playerCount = Number(prompt("Có bao nhiêu cầu thủ cần nhập vào đội bóng?"));

while (isNaN(playerCount) || playerCount <= 0) {
    playerCount = Number(prompt("Số lượng không hợp lệ. Vui lòng nhập số nguyên dương:"));
}

for (let i = 0; i < playerCount; i++) {
    let id = prompt(`Nhập mã cầu thủ thứ ${i + 1}:`);
    let isDuplicate = false;

    for (let j = 0; j < players.length; j++) {
        let currentId = players[j].split("-")[0];
        if (currentId === id) {
            isDuplicate = true;
            break;
        }
    }

    while (!id || id.trim() === "" || isDuplicate) {
        if (isDuplicate) {
            id = prompt(`Mã cầu thủ "${id}" đã tồn tại! Vui lòng nhập mã khác:`);
        } else {
            id = prompt(`Mã cầu thủ không hợp lệ. Nhập lại mã cầu thủ thứ ${i + 1}:`);
        }
        
        isDuplicate = false;
        for (let j = 0; j < players.length; j++) {
            let currentId = players[j].split("-")[0];
            if (currentId === id) {
                isDuplicate = true;
                break;
            }
        }
    }

    let name = prompt(`Nhập tên cầu thủ thứ ${i + 1}:`);
    while (!name || name.trim() === "") {
        name = prompt(`Tên cầu thủ không hợp lệ. Nhập lại tên cầu thủ thứ ${i + 1}:`);
    }

    let positionCode = Number(prompt(`Nhập vị trí (1: Thủ môn, 2: Hậu vệ, 3: Tiền vệ, 4: Tiền đạo):`));
    while (![1, 2, 3, 4].includes(positionCode)) {
        positionCode = Number(prompt(`Lựa chọn không hợp lệ. Nhập lại (1-4):`));
    }

    let position = "";
    if (positionCode === 1) position = "Thủ môn";
    else if (positionCode === 2) position = "Hậu vệ";
    else if (positionCode === 3) position = "Tiền vệ";
    else position = "Tiền đạo";

    pushPlayer(id, name, position);
}

printTeamRoster();