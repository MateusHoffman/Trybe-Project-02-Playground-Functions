// Desafio 1
function compareTrue(bool1, bool2) {
  return bool1 && bool2;
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(sentence) {
  return sentence.split(' ');
}

// Desafio 4
function concatName(array) {
  let endItem = array[array.length - 1];
  let firstItem = array[0];
  return `${endItem}, ${firstItem}`;
}

// Desafio 5
function footballPoints(wins, ties) {
  return wins * 3 + ties * 1;
}

// Desafio 6
function highestCount(arrayNum) {
  let bigNum = {
    valueBigNum: arrayNum[0],
    bigRepeated: 0,
  };

  for (let value of arrayNum) {
    if (value === bigNum.valueBigNum) {
      bigNum.bigRepeated += 1;
    } else if (value > bigNum.valueBigNum) {
      bigNum.valueBigNum = value;
      bigNum.bigRepeated = 1;
    }
  }
  return bigNum.bigRepeated;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distMouseCat1 = Math.abs(mouse - cat1);
  let distMouseCat2 = Math.abs(mouse - cat2);

  if (distMouseCat1 < distMouseCat2) {
    return 'cat1';
  }
  if (distMouseCat1 > distMouseCat2) {
    return 'cat2';
  }
  return 'os gatos trombam e o rato foge';
}

// Desafio 8
function fizzBuzz(arrayNum) {
  let arrayStrings = [];

  for (let index = 0; index < arrayNum.length; index += 1) {
    if (arrayNum[index] % 3 === 0 && arrayNum[index] % 5 === 0) {
      arrayStrings.push('fizzBuzz');
    } else if (arrayNum[index] % 3 === 0 && arrayNum[index] % 5 !== 0) {
      arrayStrings.push('fizz');
    } else if (arrayNum[index] % 3 !== 0 && arrayNum[index] % 5 === 0) {
      arrayStrings.push('buzz');
    } else {
      arrayStrings.push('bug!');
    }
  }

  return arrayStrings;
}

// Desafio 9
function encode(string) {
  let letter = string.split('');
  let stringNum = [];
  for (let value of letter) {
    switch (value) {
    case 'a':
      stringNum.push(1);
      break;

    case 'e':
      stringNum.push(2);
      break;

    case 'i':
      stringNum.push(3);
      break;

    case 'o':
      stringNum.push(4);
      break;

    case 'u':
      stringNum.push(5);
      break;

    default:
      stringNum.push(value);
      break;
    }
  }
  return stringNum.join('');
}

function decode(stringNum) {
  let letter = stringNum.split('');
  let string = [];
  for (let value of letter) {
    switch (value) {
    case '1':
      string.push('a');
      break;

    case '2':
      string.push('e');
      break;

    case '3':
      string.push('i');
      break;

    case '4':
      string.push('o');
      break;

    case '5':
      string.push('u');
      break;

    default:
      string.push(value);
      break;
    }
  }
  return string.join('');
}

// Desafio 10
function techList(arrayNames, name) {
  // how to sort array alphabetically in javascriptJavascript - By Dr.Strange on Nov 15 2021 

  let nameTechAZ = arrayNames.sort((a, b) => a < b ? -1 : 1)
  let arrayObj = [];

  if (arrayNames == 0) {
    return 'Vazio!';
  } else {
    for (let index = 0; index < arrayNames.length; index += 1) {
      arrayObj[index] = {};
      arrayObj[index].tech = nameTechAZ[index];
      arrayObj[index].name = name;
    }
    return arrayObj;
  }
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
  techList,
};
