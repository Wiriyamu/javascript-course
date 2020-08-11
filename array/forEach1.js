const aprovados = ['Agatha', 'Aldo', 'Daniel', 'Raquel']

aprovados.forEach((nome, index) => {
  console.log(`${index + 1} ${nome}`);
})

aprovados.forEach(e => console.log(e))

const exibirAprovados = (aprovado, index) => console.log(index, aprovado);
aprovados.forEach(exibirAprovados)