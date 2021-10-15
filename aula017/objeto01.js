//a criaçao de um vetor OBJECT 

let amigo = {
nome: 'crab', 
peso: 88, 
sexo: 'M',
 engordar(p=0){
     console.log('engordou')
     this.peso += p // this é uma autoreferencia
 }
}
amigo.engordar(2)
console.log(`${amigo.nome} agora pesa ${amigo.peso}kg`)