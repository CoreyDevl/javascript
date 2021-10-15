let num = [3, 1, 2] // ESSE É O ARRAY QUE VAMOS ESTUDAR ' num  ' 
/*
console.log(`nosso vetor é o ${num} seu cu é meu`)
num [4] = 9   // assim o indice [4] é ocupado com 9
console.log(`${num}`)  
num.push(9)   //assim o primeiro indice vazio vai receber o 9
console.log(`${num}`)
num.length //me diz quantos elementos tem um array
num.sort() //reordena elementos do array 
console.log(`o vetor tem ${num.length} elementos`)
console.log(`o seu cu ${num[0]}`) //ele não valida posições em branco, tras o 9 pra frente e o 9 fica no elemento 3
num.sort()
num.push(4)
console.log(`olha como ficou ${num}`)
num.sort()
console.log(`olha como ficou ${num}`)
console.log(`peraih..`)
num.sort()
console.log(`olha como ficou ${num}`)
num.sort()
console.log(`olha como ficou ${num}`)
num.sort()
console.log(`olha como ficou ${num}`)
console.log(num[2])
*/
for ( let pos = 0 ; pos <= num.length  ; pos++) {
    console.log( num[pos] )
}
pos = num.indexOf(3)

if (pos == -1){
    console.log(`seu cu seu viado`)
}else{
    num.sort()
    console.log(`o numero 3 está no seu cu e tb na posi ${pos}`)
}
