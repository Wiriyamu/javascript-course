/* Escreva uma função JavaScript para encontrar o maior dos cinco números. 
   Exiba uma caixa de alerta para mostrar o resultado.
*/

// 1. Solução -> Usando Reduce -> MELHOR SOLUÇÃO!

const maiorDosCincoNumerosReduce = vetor => {
  const maiorNum = vetor.reduce((acc, cur) => Math.max(acc, cur))
  console.log(`O número ${maiorNum} é o maior! - Reduce`);
}
maiorDosCincoNumerosReduce([2, 4, 6, 8, 10])

// 2. Solução -> Usando Spead Operator

function maiorDosCincoNumeros(vetor) {
  const maiorNum = Math.max(...vetor)
  return console.log(`O número ${maiorNum} é o maior! - spread`);
}
maiorDosCincoNumeros([2, 4, 6, 8, 10])

// 3. Solução -> Usando Spead apply

const maiorDosCincoNumerosApply = vetor => {
  const maiorNum = Math.max.apply(null, vetor)
  return console.log(`O número ${maiorNum} é o maior! - apply`);
}

maiorDosCincoNumerosApply([2, 4, 6, 8, 10])