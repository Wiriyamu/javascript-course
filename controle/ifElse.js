const imprimirResultado = nota => {
  if (nota >= 7) {
    console.log('Aprovado!');
  } else {
    console.log('Reprovado!');
  }
}

imprimirResultado(8.5)
imprimirResultado(7.5)
imprimirResultado(6.5)
imprimirResultado(5.5)