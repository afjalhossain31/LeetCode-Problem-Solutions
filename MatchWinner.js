/**
 * @param {number} teamAGoals
 * @param {number} teamBGoals
 * @returns {string}
 */
function matchWinner(teamAGoals, teamBGoals) {
    
    // Check team goals are valid numbers
    if (typeof teamAGoals !== "number" || typeof teamBGoals !== "number") {
        return "Invalid";
    }
    // Winner logic 
    if (teamAGoals > teamBGoals) {
        return "Team A Won";
    } else if (teamBGoals > teamAGoals) {
        return "Team B Won";
    } else {
        return "Draw";
    }
}

console.log(matchWinner(3, 1));      
console.log(matchWinner(2, 4));    
console.log(matchWinner(2, 2));   
console.log(matchWinner("3", 2));