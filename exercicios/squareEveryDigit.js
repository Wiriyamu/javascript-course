function squareDigits(num) {
  return Number(('' + num).split('').map(val => val * val).join(''))
}

console.log(squareDigits(9119))