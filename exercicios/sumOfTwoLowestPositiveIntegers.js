/* Crie uma função que retorne a soma dos dois números positivos mais baixos, 
  considerando uma matriz de no mínimo 4 inteiros positivos. 
  Nenhum número flutuante ou número inteiro não positivo será passado.

  Por exemplo, quando uma matriz é passada como [19, 5, 42, 2, 77], a saída deve ser 7.
*/

function sumTwoSmallestNumbers(numbers) {
  numbers.sort((a, b) => a - b)
  return numbers[0] + numbers[1]
}
console.log(sumTwoSmallestNumbers([19, 5, 42, 2, 77]))
