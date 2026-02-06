let playerIds = ["P001", "P002", "P003", "P004", "P005"];
let playerNames = ["Nguyễn Văn A", "Trần Thị B", "Lê Văn C", "Phạm Văn D", "Hoàng Thị E"];
let playerJerseyNumbers = [10, 7, 8, 9, 11];

function printTeamRoster() {
    console.log("Danh sách đội bóng hiện tại:");
    for (let i = 0; i < playerIds.length; i++) {
        console.log(`${i + 1}. Mã: ${playerIds[i]} - Tên: ${playerNames[i]} - Số áo: ${playerJerseyNumbers[i]}`);
    }
}

function updatePlayerNameAndJersey(playerId, newName, newJerseyNumber) {
    let index = playerIds.indexOf(playerId);
    if (index !== -1) {
        playerNames[index] = newName;
        playerJerseyNumbers[index] = newJerseyNumber;
        return true;
    }
    return false;
}

let targetId = prompt("Nhập mã cầu thủ muốn cập nhật (ví dụ: P001):");

if (playerIds.includes(targetId)) {
    let newName = prompt(`Nhập tên mới cho cầu thủ (Mã: ${targetId}):`);
    while (!newName || newName.trim() === "") {
        newName = prompt("Tên không được để trống. Vui lòng nhập lại:");
    }

    let newJerseyNumber = Number(prompt("Nhập số áo mới (số nguyên từ 1-99):"));
    while (isNaN(newJerseyNumber) || newJerseyNumber < 1 || newJerseyNumber > 99) {
        newJerseyNumber = Number(prompt("Số áo không hợp lệ. Vui lòng nhập số từ 1 đến 99:"));
    }

    let isSuccess = updatePlayerNameAndJersey(targetId, newName, newJerseyNumber);

    if (isSuccess) {
        console.log("Thông báo: Cập nhật thành công!");
        printTeamRoster();
    } else {
        console.log("Lỗi: Không thể cập nhật thông tin.");
    }
} else {
    console.log("Thông báo: Không tìm thấy cầu thủ với mã này!");
}