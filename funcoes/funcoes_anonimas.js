// Funções Anônimas

const soma = function(x, y) {
  return x + y
}

const imprimirResultado = function (a, b, operacao = soma) {
  console.log(operacao(a, b))
}

//imprimirResultado(3,4, soma)

const pessoa = {
  falar() {
    console.log('Opa')
  }
}
//pessoa.falar()






