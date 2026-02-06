let players = [
    "P001-Nguyễn Văn A-Thủ môn",
    "P002-Trần Thị B-Hậu vệ",
    "P003-Lê Văn C-Hậu vệ",
    "P004-Phạm Văn D-Tiền vệ",
    "P005-Hoàng Thị E-Tiền đạo",
    "P006-Vũ Minh F-Tiền đạo",
    "P007-Đặng Văn G-Thủ môn"
];

function printTeamRoster() {
    console.log("Danh sách đội bóng:");
    for (let i = 0; i < players.length; i++) {
        let parts = players[i].split("-");
        console.log(`${i + 1} ${parts[0]} | ${parts[1]} | ${parts[2]}`);
    }
}

function countPlayerByPosition(playerList) {
    let positionCounts = {};
    for (let i = 0; i < playerList.length; i++) {
        let parts = playerList[i].split("-");
        let position = parts[2];
        
        if (positionCounts[position]) {
            positionCounts[position]++;
        } else {
            positionCounts[position] = 1;
        }
    }
    return positionCounts;
}

function hasGoalkeeper() {
    for (let i = 0; i < players.length; i++) {
        let parts = players[i].split("-");
        if (parts[2] === "Thủ môn") {
            return true;
        }
    }
    return false;
}

printTeamRoster();

let resultCounts = countPlayerByPosition(players);
console.log("Thống kê số lượng cầu thủ theo vị trí:", resultCounts);

let checkGoalkeeper = hasGoalkeeper();
console.log(`Kiểm tra đội có thủ môn không: ${checkGoalkeeper}`);