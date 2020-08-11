// Object.preventExtensions -> Pode ser excluido mas não pode ser modificado

const produto = Object.preventExtensions({
  nome: 'Qualquer',
  preco: 1.99,
  tag: 'Promoção'
})

console.log('Extensível', Object.isExtensible(produto));
produto.nome = 'Borracha'
produto.descricao = 'Borracha escolar branca'
delete produto.tag
console.log(produto);

// Object.seal = Não pode ser incluido e excluido mas pode ser modificado

const pessoa = {
  nome: 'Juliana',
  idade: 35
}
Object.seal(pessoa)
console.log('Selado', Object.isSealed(pessoa));

pessoa.sobrenome = 'Silva'
delete pessoa.nome
pessoa.idade = 29
console.log(pessoa);

// Object.freeze = selado + valores constantes

