module.exports = function check(str, bracketsConfig) {

    let pairsBrackets = [];
    let lengthStr = str.length;

    for (let i = 0; i < bracketsConfig.length; i++) {
        pairsBrackets.push(bracketsConfig[i][0] + bracketsConfig[i][1]);
    }

    while (true) {
        for (let i = 0; i < pairsBrackets.length; i++) {
            str = str.replace(pairsBrackets[i], '');
        }

        if (str.length == 0) return true;
        if (lengthStr == str.length) return false;

        lengthStr = str.length;
    }
}
