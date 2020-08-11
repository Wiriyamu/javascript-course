const produtos = [
  { nome: 'Notebook', preco: 2499, fragil: true },
  { nome: 'Ipad Pro', preco: 4499, fragil: true },
  { nome: 'Copo de Vidro', preco: 12.49, fragil: true },
  { nome: 'Copo de Plastico', preco: 18.49, fragil: false }
]

console.log(produtos.filter(p => p.fragil === true));

