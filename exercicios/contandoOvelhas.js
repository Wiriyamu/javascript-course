/* CodeWars - Desafio

  Considere uma matriz / lista de ovelhas onde algumas ovelhas podem estar
  faltando. Precisamos de uma função que conte o número de ovelhas
  presentes na matriz (verdadeiro meio presente).

  Por exemplo,
  [true,  true,  true,  false,
  true,  true,  true,  true ,
  true,  false, true,  false,
  true,  false, false, true ,
  true,  true,  true,  true ,
  false, false, true,  true]

  A resposta correta seria 17.
  Dica: não se esqueça de verificar se há valores ruins como null/undefined
*/

// Minha Solução

function countSheeps(arrayOfSheep) {
  const trueSheeps = arrayOfSheep.filter(sheep => sheep === true)
  const lengthSheeps = trueSheeps.length
  return console.log(`Existem ${lengthSheeps} no Total`);
}

// Melhor Solução

function countSheepsTest(arrayOfSheep) {
  const trueSheeps = arrayOfSheep.filter(Boolean)
  console.log(trueSheeps);
}

countSheepsTest([true, true, true, false,
  true, true, true, true,
  true, false, true, false,
  true, false, false, true])