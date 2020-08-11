/* Implemente um método que aceite 3 valores inteiros a, b, c.
O método deve retornar true se um triângulo puder ser construído com os lados de determinado comprimento e
false em qualquer outro caso.
(Nesse caso, todos os triângulos devem ter superfície maior que 0 para serem aceitos).
*/

const isTriangle = (sideA, sideB, sideC) => sideA + sideB > sideC && sideA + sideC > sideB && sideB + sideC > sideA ? true : false

console.log(isTriangle(7, 2, 2));

