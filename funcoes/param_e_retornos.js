// Parametros e Retornos são opcionais

function area(largura, altura) {
  const area = largura * altura
  if(area > 20) {
    console.log(`Valor acima do permitido: ${area}m2.`)
  } else {
    return area
  }
}
//area(20, 2)
//area(2, 3, 17, 5)






