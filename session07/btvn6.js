let players = [
    "P001-Nguyễn Văn A-Thủ môn",
    "P002-Trần Thị B-Hậu vệ",
    "P003-Lê Văn C-Hậu vệ",
    "P004-Phạm Văn D-Tiền vệ",
    "P005-Hoàng Thị E-Tiền đạo",
    "P006-Vũ Minh F-Tiền đạo",
    "P007-Đặng Văn G-Thủ môn"
];

function getAllPositions() {
    let uniquePositions = [];
    for (let i = 0; i < players.length; i++) {
        let parts = players[i].split("-");
        let position = parts[2];
        
        if (!uniquePositions.includes(position)) {
            uniquePositions.push(position);
        }
    }
    return uniquePositions;
}

function findPlayersWithLongestName() {
    let longestName = "";
    for (let i = 0; i < players.length; i++) {
        let parts = players[i].split("-");
        let name = parts[1];
        
        if (name.length > longestName.length) {
            longestName = name;
        }
    }
    return longestName;
}

function countPlayersStartingWithLetter(letter) {
    let count = 0;
    let searchChar = letter.toLowerCase();
    
    for (let i = 0; i < players.length; i++) {
        let parts = players[i].split("-");
        let name = parts[1];
        
        if (name.toLowerCase().startsWith(searchChar)) {
            count++;
        }
    }
    return count;
}

let positionsList = getAllPositions();
console.log("Danh sách các vị trí duy nhất:", positionsList);

let longestName = findPlayersWithLongestName();
console.log("Tên cầu thủ dài nhất:", longestName);

let searchLetter = "N";
let countByLetter = countPlayersStartingWithLetter(searchLetter);
console.log(`Số lượng cầu thủ có tên bắt đầu bằng chữ '${searchLetter}':`, countByLetter);