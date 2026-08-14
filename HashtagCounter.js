function countHashtags(caption) {
    if (typeof caption !== "string") {
        return "Invalid";
    }

    const words = caption.split(" ");
    let hashtagCount = 0;
    let longestTag = "";

    for (const word of words) {
        if (word.startsWith("#")) {
            const tag = word.slice(1);
            hashtagCount++;

            if (tag.length > longestTag.length) {
                longestTag = tag;
            }
        }
    }

    return {
        hashtagCount,
        longestTag
    };
}
console.log(countHashtags("This is a #test caption with #multiple #hashtags and a #longesthashtag"));

