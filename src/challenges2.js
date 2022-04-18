// Desafio 11
function only11Num(numbers) {
  return numbers.length === 11;
}

function bigger9smaller0(numbers) {
  for (let number of numbers) {
    if (number < 0 || number > 9) {
      return false;
    }
  }
  return true;
}

function repeated3Time(currentNumber, numbers) {
  let cont = 0;
  for (let number of numbers) {
    if (currentNumber === number) {
      cont += 1;
    }
  }
  return cont < 3;
}

function NumbersValid(numbers) {
  for (let i = 0; i < numbers.length; i += 1) {
    if (!repeated3Time(numbers[i], numbers)) {
      return false;
    }
  }
  return bigger9smaller0(numbers);
}

function generatePhoneNumber(numbers) {
  if (!only11Num(numbers)) {
    return 'Array com tamanho incorreto.';
  }
  if (!NumbersValid(numbers)) {
    return 'não é possível gerar um número de telefone com esses valores';
  }
  return `(${numbers[0]}${numbers[1]}) ${numbers[2]}${numbers[3]}${numbers[4]}${numbers[5]}${numbers[6]}-${numbers[7]}${numbers[8]}${numbers[9]}${numbers[10]}`;
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  if (
    lineA < lineB + lineC &&
    lineA > Math.abs(lineB - lineC) &&
    lineB < lineA + lineC &&
    lineB > Math.abs(lineA - lineC) &&
    lineC < lineB + lineA &&
    lineC > Math.abs(lineA - lineC)
  ) {
    return true;
  }
  return false;
}

// Desafio 13
function hydrate(string) {
  let amount = 0;
  for (const value of string) {
    if (value >= 1) {
      let valueNum = parseInt(value)
      amount += valueNum;
    }
  }
  if(amount === 1){
    return `${amount} copo de água`;
  } else {
    return `${amount} copos de água`;
  }
}
console.log(hydrate('1 cachaça, 5 cervejas e 1 copo de vinho'));

module.exports = {
  generatePhoneNumber,
  hydrate,
  triangleCheck,
};
