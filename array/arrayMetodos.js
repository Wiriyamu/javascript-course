const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']
pilotos.pop() // Remove o último item do Array

console.log(pilotos);

pilotos.push('Verstappen')
console.log(pilotos);

pilotos.shift() // Remove o primeiro item do array
console.log(pilotos);

pilotos.unshift('Hamilton') // Adiciona item no primeiro index do array 
console.log(pilotos);

// Splice pode adicionar e remover os elementos
// Adicionar
pilotos.splice(2, 0, 'Bottas', 'Massa')
console.log(pilotos);

// Remover
pilotos.splice(3, 1)
console.log(pilotos);

const algunsPilotos = pilotos.slice(2) // Novo array
console.log(algunsPilotos);

const algunsPilotos2 = pilotos.slice(1, 4)
console.log(algunsPilotos2);