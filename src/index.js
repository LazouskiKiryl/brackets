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

// //   const st = '([{}])';
// //   const config3 = [['(', ')'], ['[', ']'], ['{', '}']];

//   let openBrackets = [];
//   let closeBrackets = [];

//   for (let pairBrackets of bracketsConfig) {
//     openBrackets.push(pairBrackets[0]);
//     closeBrackets.push(pairBrackets[1]);
//   }


//   let stack = [];
//   isOpenBracket('a');

//   for (let bracket of str) {
//     let index = closeBrackets.indexOf(bracket);
    

//     if (index === -1) {
//       stack.push(bracket);
//     } else  if (stack.pop() !== openBrackets[index]) {
//       return false;
//     }

//   }

//   return true;

//   let isOpenBracket = (br) => {

//   }
