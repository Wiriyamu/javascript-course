const produto = new Object
produto.nome = 'Cadeira'
produto.preco = 200

console.log(produto);
delete produto.preco

console.log(produto);

const carro = {
  modelo: 'A4',
  valor: 89000,
  proprietario: {
    nome: 'Raul',
    idade: 56,
    endereco: {
      logradouro: 'Rua ABC',
      numero: 123
    }
  },
  condutores: [
    {
      nome: 'Júnior',
      idade: 19
    },
    {
      nome: 'Ana',
      idade: 42
    }
  ],
  calcularValorSeguro: function () {
    // ...
  }
}

carro.proprietario.endereco.numero = 1000
console.log(carro);

delete carro.condutores
delete carro.proprietario.endereco
delete carro.calcularValorSeguro
console.log(carro);