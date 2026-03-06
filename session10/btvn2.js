const player = {
    name: "De Bruyne",
    position: "Midfielder",
    goals: 8,
    assist: 25,
    matchesPlayed: 35,
};

function addPerformanceScore(player) {
    const performancePerMatch = ((player.goals + player.assist) / player.matchesPlayed).toFixed(2);
    player.performancePerMatch = performancePerMatch;
    if (performancePerMatch >= 1.0) {
        player.isKeyPlayer = true;
    } else {
        player.isKeyPlayer = false;
    }
    console.log(player);
}

addPerformanceScore(player);