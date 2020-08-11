/* Polycarpus trabalha como DJ na melhor boate de Berland e costuma usar música dubstep em sua performance. 
Recentemente, ele decidiu pegar algumas músicas antigas e fazer remixes de dubstep a partir delas.

Vamos supor que uma música consiste em algum número de palavras (que não contêm WUB). 
Para fazer o remix do dubstep dessa música, Polycarpus insere um certo número de palavras "WUB" 
antes da primeira palavra da música (o número pode ser zero), após a última palavra (o número pode ser zero) 
e entre as palavras ( pelo menos uma entre qualquer par de palavras vizinhas) e, em seguida, o garoto cola 
todas as palavras, incluindo "WUB", em uma sequência e toca a música no clube.

Por exemplo, uma música com as palavras "I AM X" pode se transformar em um remix do dubstep como 
"WUBWUBIWUBAMWUBWUBX" e não pode se transformar em "WUBWUBIAMWUBX".

Recentemente, Jonny ouviu a nova faixa de dubstep de Polycarpus, mas como ele não gosta de música moderna, 
ele decidiu descobrir qual era a música inicial que Polycarpus remixou. 
Ajude Jonny a restaurar a música original.

Entrada
A entrada consiste em uma única sequência não vazia, composta apenas por letras maiúsculas em inglês, 
o comprimento da sequência não excede 200 caracteres

Resultado
Retorne as palavras da música inicial que Polycarpus usou para fazer um remix de dubsteb. 
Separe as palavras com um espaço.
*/

function songDecoder(song) {
  const mySong = song.replace(/WUB/g, ',')

  console.log(mySong);

}

songDecoder("AWUBBWUBC");
songDecoder("AWUBWUBWUBBWUBWUBWUBC");
songDecoder("WUBAWUBBWUBCWUB");
songDecoder("WUBWEWUBAREWUBWUBTHEWUBCHAMPIONSWUBMYWUBFRIENDWUB");