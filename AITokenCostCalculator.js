function calculateAiCost(tokensUsed) {
    
    if (typeof tokensUsed !== "number" || tokensUsed < 0) {
        return "Invalid";
    }

    if (tokensUsed <= 500) {
        return 0;
    }

    let extraTokens = tokensUsed - 500;
    let blocks = Math.floor(extraTokens / 100);

    return blocks * 5;
}

console.log(calculateAiCost(450));
console.log(calculateAiCost(600));
console.log(calculateAiCost(750));