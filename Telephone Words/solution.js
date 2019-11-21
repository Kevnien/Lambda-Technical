digits_to_letters = {
    0: '0',
    1: '1',
    2: 'ABC',
    3: 'DEF',
    4: 'GHI',
    5: 'JKL',
    6: 'MNO',
    7: 'PQRS',
    8: 'TUV',
    9: 'WXYZ'
  }
  
function telephone_words(digits) {
  let answer = [];
  const firstSet = digits_to_letters[digits.charAt(0)];

  for (let i = 0; i < firstSet.length; i++) {
    answer.push(firstSet.charAt(i));
  }
  for (let i = 1; i < digits.length; i++) {
    const newAnswer = [];
    answer.forEach(element => {
      let charSet = digits_to_letters[digits[i]];
      for (let j = 0; j < charSet.length; j++) {
        newAnswer.push(element + charSet[j]);
      }
    })
    answer = newAnswer;
  }
  return answer;
}

// tests
console.log(telephone_words('27'));
console.log(telephone_words('2735'));