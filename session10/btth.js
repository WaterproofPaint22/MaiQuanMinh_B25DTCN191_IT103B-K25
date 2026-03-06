let squad = [
    { id: 1, name: "Nguyen Van A", goals: 10, position: "FW" },
    { id: 2, name: "Tran Van B", goals: 5,  position: "MF" },
    { id: 3, name: "Le Van C",   goals: 0,  position: "DF" },
    { id: 4, name: "Pham Van D", goals: 12, position: "FW" },
    { id: 5, name: "Dang Van E", goals: 0,  position: "GK" }
];

let choice = Number(prompt("--- QUẢN LÝ ĐỘI BÓNG (OBJECT)---\n1. Xem danh sách\n2. Thêm cầu thủ\n3. Tìm kiếm (theo ID)\n4. Cập nhật bàn thắng\n5. Xóa cầu thủ\n0. Thoát\n"));
switch (choice) {
    case 1:
        console.log("Đội hình hiện tại:");
        squad.forEach(player => {
            console.log(`Mã ${player.id} - ${player.name} (${player.position}): ${player.goals} bàn`);
        });
        break;
    case 2:
        let newName = prompt("Nhập tên cầu thủ: ");
        let newGoals = Number(prompt("Nhập số bàn thắng: "));
        let newPosition = prompt("Nhập vị trí: ");
        let newId = squad.length + 1;
        let newPlayer = { id: newId, name: newName, goals: newGoals, position: newPosition };
        squad.push(newPlayer);
        console.log("Thêm cầu thủ thành công!");
        break;
    case 3:
        let searchId = Number(prompt("Nhập ID cầu thủ cần tìm: "));
        let foundPlayer = squad.find(player => player.id === searchId);
        if (foundPlayer) {
            console.log(`Thông tin cầu thủ: Mã ${foundPlayer.id} - ${foundPlayer.name} (${foundPlayer.position}): ${foundPlayer.goals} bàn`);
        } else {
            console.log("Không tìm thấy cầu thủ với ID này.");
        }
        break;
    case 4:
        let goalId = Number(prompt("Nhập ID cầu thủ vừa ghi bàn: "));
        let goalPlayer = squad.find(player => player.id === goalId);
        if (goalPlayer) {
            goalPlayer.goals += 1;
            console.log(`Đã cập nhật bàn thắng cho cầu thủ ${goalPlayer.name} thành ${goalPlayer.goals}.`);
        } else {
            console.log("Không tìm thấy cầu thủ với ID này.");
        }
        break;
    case 5:
        let removeId = Number(prompt("Nhập ID cầu thủ cần xóa: "));
        let indexToRemove = squad.findIndex(player => player.id === removeId);
        if (indexToRemove !== -1) {
            squad.splice(indexToRemove, 1);
            console.log("Đã xóa cầu thủ khỏi đội.");
        } else {
            console.log("Không tìm thấy cầu thủ với ID này.");
        }
        break;
    case 0:
        console.log("Thoát chương trình.");
        break;
    default:
        console.log("Lựa chọn không hợp lệ. Vui lòng chọn lại.");
}