// Array

// Acessando indices do array
const valores = [7.7, 8.9, 6.3, 9.2]
console.log(valores[0], valores[3]);
console.log(valores[4]);

// Verificando o tamanho do array
valores[4] = 10
console.log(valores);
console.log(valores.length);

// Mistura de tipos em array
valores.push({ id: 3 }, false, null, 'teste')
console.log(valores);

// Métodos array

const produtos = [
  { nome: "Note 8 pro", preco: 1460 },
  { nome: "Galaxy S8 plus", preco: 2099 },
  { nome: "LG G7 thinQ", preco: 2379 },
  { nome: "Motorola One Zoom", preco: 1784 },
  { nome: "Iphone 7 plus", preco: 2079 },
  { nome: "Huawei P20 Lite", preco: 1499 },
  { nome: "Galaxy M30", preco: 1400 },
  { nome: "Asus Zenfone 5Z", preco: 1360 },
  { nome: "Xiaomi MI A2", preco: 1050 },
  { nome: "Multilaser H", preco: 1349 },
]

const produtosNome = produtos.map(p => p.nome)
console.log(produtosNome);

const produtosCaros = produtos.filter(p => p.preco > 1500)
console.log(produtosCaros);

const produtosSoma = produtos.reduce((prevVal, elem) => prevVal + elem.preco, 0)
console.log(produtosSoma);

const produtosSearch = produtos.find(p => p.preco === 2000)
console.log(produtosSearch);

const produtosAll = produtos.every(p => p.preco > 1500)
console.log(produtosAll);
