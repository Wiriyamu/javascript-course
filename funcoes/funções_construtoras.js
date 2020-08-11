// Funções Construtoras

function Carro(velocidadeMaxima = 200, delta = 5) {
  //atributo privado
  let velocidadeAtual = 0
  
  //Método público
  this.acelerar = function () {
    if(velocidadeAtual + delta <= velocidadeMaxima) {
      velocidadeAtual += delta
    } else {
      velocidadeAtual = velocidadeMaxima
    }
  }
  
  // Método Público
  
  this.getVelocidadeAtual = function () {
    return velocidadeAtual
  }
}

const uno = new Carro
uno.acelerar()
uno.getVelocidadeAtual()






