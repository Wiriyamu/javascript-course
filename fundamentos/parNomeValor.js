const saudacao = 'Opa' // Contexto Léxico 1

function exec() {
  const saudacao = 'Falaa' // Contexto Léxico 2
  return saudacao
}

// Objeto são grupos aninhados de pares chave/valor
const cliente = {
  nome: 'Pedro',
  idade: 32,
  peso: 90,
  endereco: {
    logradouro: 'Rua muito legal',
    numero: 123
  }
}

console.log(saudacao);
console.log(exec());
console.log(cliente);