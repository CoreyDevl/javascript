//||
var agora = new Date()
var hora = agora.getHours()
console.log(`agora são ${hora} horas.`)
console.log(`...e sabe do que é hora?`)
if (hora > 24) {
    console.log(`Esse relógio só marca até a hora 24 - seu cavalo`)
} else if (hora > 5 && hora <= 12) {
    console.log(`É hora de dar o cuzao. Bom dia, burro.`)
} else {
    if (hora >= 12 && hora < 18) {
        console.log('É hora de usar droga! Boa tarde, desgraça!')
    } else if (hora >= 19 && hora < 23) {
        console.log('Tomá cachaça carai! Boa noite, seu animal!')
    } else {
        console.log(`Vai dormir sua peste, são ${hora} horas.`)
    }
}
