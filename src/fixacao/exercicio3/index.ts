/*
A função abaixo pergunta à pessoa suas três cores favoritas e imprime no console um array contendo essas três cores. 

Refatore a função para o Typescript.
*/

//o console está como um array então o retorno é void. A função não tem um  retorno no final, só um console.log

function imprimeTresCoresFavoritas(): void {
  //process sempre retorna uma string
  const cor1: string = process.argv[2]
  const cor2: string = process.argv[3]
  const cor3: string = process.argv[4]

  console.log([cor1, cor2, cor3])
}

imprimeTresCoresFavoritas()

