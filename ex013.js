//||
/*
domingo - 0
segunda - 1
terça   - 2
quarta  - 3
quinta  - 4
sexta   - 5
sabado  - 6
*/
console.log('Vo te falá que dia é hoje, seu viado! Preste atenção:')
var agora = new Date()
var diasem = agora.getDay()
switch (diasem){
    case 0: 
    console.log('É Domingo, carai')
    break
    case 1: 
    console.log('É seu cú seu viado (segunda)')
    break
    case 2: 
    console.log('É a puta q te pariu (terça)')
    break
    case 3: 
    console.log('É a casa do caralho (quarta)')
    break
    case 4: 
    console.log('É a buceta (quinta)')
    break
    case 5: 
    console.log('...é sexta')
    break
    case 6: 
    console.log('É a caralha (sárbado)')
    break
    default: 
    console.log('pelo amor de Deus...[ERRO]')
    break
}