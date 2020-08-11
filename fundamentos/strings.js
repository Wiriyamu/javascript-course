/* Strings -> Strings são sequências de caracteres, escritas entre aspas simples ou duplas. 
  Para facilitar o processamento de textos o JavaScript dispõe do objeto String, 
  a partir do qual temos acesso a diversos métodos utilizados para esse fim.
*/

// Exemplo de String + método
const posicaoTraco = '98453-5647'.indexOf('-')
console.log(posicaoTraco);

/* Escape de Caracteres

  Para escrevermos certos caracteres em string precisamos utilizar uma sintaxe especial 
  chamada notação com barra invertida ou escape notation.

  A seguinte tabela nos demonstra quais caracteres podem ser obtidos dessa forma:

  \' -> Aspas simples
  \" -> Aspas duplas
  \\ -> Contra Barra
  \n -> Quebra de linha
  \t -> Tab
  \uXXXX -> Caractere unicode
*/

const frase = 'Erro na validação do cadastro. \nO campo nome é de preenchimento obrigatório'
console.log(frase);

// Métodos 
const escola = 'cod3r'

// charAt -> Retorna o caractere no índice especificado
console.log(escola.charAt(4));

// concat -> Combina o texto de duas strings e retorna uma nova string.
console.log('Escola '.concat(escola).concat('!'));

// length -> Retorna o comprimento da minha string
console.log(escola.length);

/* includes -> Este método permite determinar se uma string contém outra string. 
  É case sensitive. Retorna true ou false
*/
console.log(escola.includes('d3r'));

/* indexOf -> Retorna o índice dentro do objeto String chamado da primeira ocorrência do valor especificado, 
  ou -1 se não encontrado.
*/
console.log(escola.indexOf('3'));

/* replace -> Usado para encontrar uma combinação entre uma expressão regular e uma string, 
  e para substituir uma substring combinada com uma nova substring.

*/
console.log(escola.replace(3, 'e'));

// Slice ->  extrai um texto de uma string e retorna uma nova string. 
console.log(escola.slice(3, 5));
// retornando somente um único índice
console.log(escola.slice(3, -1));

// split -> Separa um objeto String em um array de strings separando a string em substrings.
console.log('Ana, Maria, Pedro'.split(','));

// substring -> Retorna os caracteres em uma string entre dois índices na string.
console.log(escola.substring(1));

// tostring -> Retorna uma string que representa o objeto especificado
const numero = 10
console.log(numero.toString());

// trim -> Retira o espaço em branco desde o início e o fim da string
const spaceString = '    hello    '
console.log(spaceString.trim());