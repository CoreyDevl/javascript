
let valor = [1, 3, 4, 2, 1]
/*for (let pos = 0; pos <= valor.length ; pos++){
    console.log(`a posi ${pos} tem o elemento valor ${valor[pos]}`)
}
agora se liga no crime logo abaixo
*/
for(let pos in valor ) {
    console.log(`A posi ${pos} ta cheia com ${valor[pos]}`)
}
