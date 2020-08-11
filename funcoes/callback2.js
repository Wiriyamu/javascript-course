// Funções Callback #2

const notas = [7.7, 6.5, 5.2, 8.9, 3.6, 7.1, 9.0]

// Sem callback
let notasBaixas = []
for (let i in notas) {
  if (notas[i] < 7) {
    notasBaixas.push(notas[i])
  }
}
// notasBaixas

// Com callback
const notasBaixas2 = notas.filter(nota => nota < 7)
//notasBaixas2

// Com callback extraindo a função arrow
const notasMenorQue7 = nota => nota < 7
const notasBaixas3 = notas.filter(notasMenorQue7)
//notasBaixas3







