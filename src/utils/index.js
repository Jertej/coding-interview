export function drawChristmasTree(height) {
    let star = "*";
    let space = " ";
    let spaceCount = height-1;
    let starCount = 1;
    let tree = '';

    if (height <= 2) {
        return '';
    }

    for(let i = 1; i < height; i++) {
        tree +=(`<h4>${space.repeat(spaceCount)}${star.repeat(starCount)}${space.repeat(spaceCount)}</h4>`);
        spaceCount -= 1;
        starCount += 2;
    }

    return tree;
}

export function checkBracketsBalance (brackets) {
    let expectToBalance = [];
    return [...brackets].every(bracket => {
        switch (bracket) {
            case "(": return expectToBalance.push(")");
            case "[": return expectToBalance.push("]");
            case "{": return expectToBalance.push("}");
            case ")":
            case "]":
            case "}":
                return expectToBalance.pop() === bracket;
            default: return false;
        }
    }) && !expectToBalance.length;
}