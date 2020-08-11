/* Math -> Este objeto é utilizado para realizar operações matemáticas, sejam elas aritméticas, 
   funções trigonométricas, funções de arredondamento e comparações.
*/

// Math.PI -> Valor de PI
const raio = 5.6
const area = Math.PI * Math.pow(raio, 2)
console.log(area);
console.log(area.toFixed(2));


// Math.abs -> Retorna o valor absoluto, o retorno sempre será positivo
const valor1 = Math.abs(-1234)
//console.log(valor1);

/* Math.ceil -> Se o numero for positivo, o valor é arredondado para cima, 
   senão se o valor for negativo é arrendondado para baixo.
*/
const valor2 = Math.ceil(14.6)
console.log(valor2);

// Math.floor -> A função Math.floor(x) retorna o menor número inteiro dentre o número "x".
const valor9 = Math.floor(45.95)
console.log(valor9);

// Math.max -> Este método retorna o maior valor entre dois números.
const valor5 = Math.max(3, 5)
console.log(valor5);

// Math.min -> Este método retorna o menor valor entre dois números.
const valor6 = Math.min(3, 5)
console.log(valor6);

//Math.pow(base, expoente) -> Método para fazer exponenciação
const valor3 = Math.pow(4, 2)
console.log(valor3);

/* Math.random -> Este método retorna um número aleatório entre 0 e 1 com até 15 dígitos. 
   Este número aleatório é definido através do relógio do computador.
*/
const valor4 = Math.random()
console.log(valor4);

// Math.round -> Com este método é possível arredondar um valor. 
const valor7 = Math.round(10.5)
console.log(valor7);

// Math.trunc -> Retorna a parte inteira de x, removendo quaisquer dígitos fracionários.
const valor8 = Math.trunc(13.37)
console.log(valor8);
