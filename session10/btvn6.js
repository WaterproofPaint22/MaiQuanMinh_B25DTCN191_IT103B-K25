const players = [
    { name: "Messi", position: "Forward", age: 36, goals: 25, assists: 15, matches: 34, yellowCards: 2 },
    { name: "Ronaldo", position: "Forward", age: 39, goals: 30, assists: 10, matches: 38, yellowCards: 4 },
    { name: "Neymar", position: "Forward", age: 32, goals: 18, assists: 20, matches: 32, yellowCards: 3 },
    { name: "De Bruyne", position: "Midfielder", age: 33, goals: 8, assists: 25, matches: 35, yellowCards: 1 },
    { name: "Kante", position: "Midfielder", age: 33, goals: 2, assists: 5, matches: 36, yellowCards: 0 },
    { name: "Van Dijk", position: "Defender", age: 33, goals: 5, assists: 3, matches: 33, yellowCards: 2 },
    { name: "Alisson", position: "Goalkeeper", age: 31, goals: 0, assists: 1, matches: 37, yellowCards: 0 }
];

function generateRankingReport(minMatches, teamPlayers) {
    const qualifiedPlayers = teamPlayers.filter(player => player.matches >= minMatches);

    if (qualifiedPlayers.length === 0) {
        console.log("Không có cầu thủ nào đạt đủ số trận yêu cầu.");
        return;
    }

    const mappedPlayers = qualifiedPlayers.map(player => {
        const performanceScore = Number(((player.goals + player.assists) / player.matches).toFixed(2));
        const efficiencyScore = Number((performanceScore - (player.yellowCards / player.matches) * 10).toFixed(2));

        return {
            ...player,
            performanceScore: performanceScore,
            efficiencyScore: efficiencyScore
        };
    });

    mappedPlayers.sort((a, b) => {
        if (b.efficiencyScore !== a.efficiencyScore) {
            return b.efficiencyScore - a.efficiencyScore;
        }
        if (b.performanceScore !== a.performanceScore) {
            return b.performanceScore - a.performanceScore;
        }
        return b.goals - a.goals;
    });

    const top3 = mappedPlayers.slice(0, 3);

    console.log("XẾP HẠNG ĐỘI BÓNG (từ minMatches trở lên)");
    top3.forEach((player, index) => {
        let nameFormatted = player.name.padEnd(8, " ");
        console.log(`${index + 1}. ${nameFormatted} - Efficiency: ${player.efficiencyScore.toFixed(2)} | Performance: ${player.performanceScore.toFixed(2)} | Goals: ${player.goals}`);
    });

    console.log(`\nTổng số cầu thủ xếp hạng: ${top3.length}`);
    console.log(`Cầu thủ xuất sắc nhất: ${top3[0].name}`);
    
    const avgEfficiency = top3.reduce((sum, player) => sum + player.efficiencyScore, 0) / top3.length;
    console.log(`Trung bình efficiency top 3: ${avgEfficiency.toFixed(2)}`);
}

let inputStr = prompt("Nhập số trận đấu tối thiểu để xét duyệt:");
let minMatchesInput = parseInt(inputStr);

if (!isNaN(minMatchesInput)) {
    generateRankingReport(minMatchesInput, players);
} else {
    console.log("Dữ liệu không hợp lệ. Vui lòng thử lại và nhập một con số.");
}