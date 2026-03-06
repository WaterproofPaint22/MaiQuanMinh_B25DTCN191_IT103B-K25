const player = {
    name: "Messi",
    position: "Forward",
    age: 36,
    goals: 25,
    assist: 15,
};

let showPlayerInfo = (player) => {
    console.log(`Tên: ${player.name}`);
    console.log(`Vị trí: ${player.position}`);
    console.log(`Tuổi: ${player.age}`);
    console.log(`Bàn thắng mùa này: ${player.goals}`);
    console.log(`Số đường chuyền cuối cùng: ${player.assist}`);
    console.log(`\nTổng đóng góp: ${player.goals + player.assist}`);
    
};

showPlayerInfo(player);