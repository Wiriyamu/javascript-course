// This e a função Bind

const pessoa = {
  saudação: 'Bom Dia!',
  falar() {
    console.log(this.saudação)
  }
}
const falar = pessoa.falar
//falar() // Conflito entre paradigmas: funcional e OO

const falarDePessoa = pessoa.falar.bind(pessoa)
//falarDePessoa()









