const teamHistory = [
    {
        name: "Messi",
        position: "Forward",
        nationality: "Argentina",
        seasons: {
            "2022-2023": { matches: 34, goals: 21, assists: 14, yellowCards: 3 },
            "2023-2024": { matches: 32, goals: 25, assists: 15, yellowCards: 2 },
            "2024-2025": { matches: 28, goals: 18, assists: 12, yellowCards: 1 },
        }
    },
    {
        name: "Ronaldo",
        position: "Forward",
        nationality: "Portugal",
        seasons: {
            "2022-2023": { matches: 38, goals: 28, assists: 8, yellowCards: 5 },
            "2023-2024": { matches: 35, goals: 30, assists: 10, yellowCards: 4 },
            "2024-2025": { matches: 30, goals: 22, assists: 9, yellowCards: 3 },
        }
    }
];

function generatePlayerSeasonReport(playerName, historyArray) {
    const player = historyArray.find(p => p.name === playerName);

    if (!player) {
        return `Không tìm thấy cầu thủ ${playerName}`;
    }

    let totalMatches = 0;
    let totalGoals = 0;
    let totalAssists = 0;
    let totalYellowCards = 0;

    let bestSeasonName = "";
    let maxGoals = -1;
    let maxAssists = -1;

    for (let seasonKey in player.seasons) {
        let stats = player.seasons[seasonKey];

        totalMatches += stats.matches;
        totalGoals += stats.goals;
        totalAssists += stats.assists;
        totalYellowCards += stats.yellowCards;

        if (stats.goals > maxGoals || (stats.goals === maxGoals && stats.assists > maxAssists)) {
            maxGoals = stats.goals;
            maxAssists = stats.assists;
            bestSeasonName = seasonKey;
        }
    }

    let avgGoals = totalMatches > 0 ? Number((totalGoals / totalMatches).toFixed(2)) : 0;
    let avgAssists = totalMatches > 0 ? Number((totalAssists / totalMatches).toFixed(2)) : 0;

    return {
        name: player.name,
        position: player.position,
        nationality: player.nationality,
        careerStats: {
            totalMatches: totalMatches,
            totalGoals: totalGoals,
            totalAssists: totalAssists,
            totalYellowCards: totalYellowCards,
            averageGoalsPerMatch: avgGoals,
            averageAssistsPerMatch: avgAssists,
            bestSeason: {
                season: bestSeasonName,
                goals: maxGoals,
                assists: maxAssists
            }
        }
    };
}

let input = prompt("Nhập tên cầu thủ bạn muốn xem báo cáo (ví dụ: Messi, Ronaldo):");

if (input !== null && input.trim() !== "") {
    let report = generatePlayerSeasonReport(input.trim(), teamHistory);
    console.log(report);
} else {
    console.log("Bạn chưa nhập tên cầu thủ hoặc đã hủy thao tác.");
}