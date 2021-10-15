/*
            deixei de ser burro com a Lara Carvalho:
            https://www.youtube.com/watch?v=hI5-spZ8d_c&ab_channel=LaraCarvalho

a sequencia abaixo foi usada pra testar a transferencia do server da api star wars
depois que foi testada e retornou no console.log (data) ..
depois disso, sumiremos com a linha de console.log   e vamos fazer inserçao de itens no html com essa desgraça de  info! 

const url = "http://swapi.dev/api/people/1"; //criei função que me leva pra url
        fetch(url)
        .then(res => { 
            res.json().then(data => {
                console.log(data)
            })
        })
        .catch(err => console.error('nao foi essa desgraça!', err ))
    ======================================================================
        GET ONE    -    GET   ALL


        GET ONE
    esse codigo aki debaixo é a REQUISIÇAO DE UM SÓ ELEMENTO dentro de um array
    ..nesse caso pegamos o data.name e criamos um <li> com uma variávele que recebe o h4 -mascara para data.name


        const url = "http://swapi.dev/api/people/1"; 
        fetch(url)
        .then(res => { 
            res.json()
           .then(data => {
                const ul = document.getElementById('info')
                const li = document.createElement('li')
                const h4 = document.createElement('h4')
                h4.innerHTML = `${data.name}`
                ul.appendChild(li)
                li.appendChild(h4) 
            }) 
        })
        .catch(err => console.error('nao foi essa desgraça!', err ))

=========================================================
abaixo vem a REQUISIÇAO MULTIPLA DE ITENS DE UMA API
GET  ALL

Vamos trocar a variável url  do fetch - pra nao haver conflito com o nome da var.
     
const urlAll = "http://swapi.dev/api/people"; 
fetch(urlAll)
.then(res => { 
    res.json()
   .then(data => {
        const chars = data.results //tudo na lista vai agora para chars
        return chars.map(char =>{
        const ul = document.getElementById('info')
        const li = document.createElement('li')
        const h4 = document.createElement('h4')
        h4.innerHTML = `${char.name}` //aki era (data.name)..mudou para: 
        ul.appendChild(li)
        li.appendChild(h4) 
   }) 
})
})
.catch(err => console.error('nao foi essa desgraça!', err ))
*/
const url1 = "http://swapi.dev/api/people/1";
const url2 = "http://swapi.dev/api/people/2";
const url3 = "http://swapi.dev/api/people/3";
const url4 = "http://swapi.dev/api/people/4";

    fetch(url1)
    .then(res => { 
        res.json()
        .then(data => {
            const luke = document.getElementById('luke')
            luke.innerHTML = data.name
        }) 
    })
    .catch(err => console.error('nao foi essa desgraça!', err ))

    
    fetch(url2)
    .then(res => { 
        res.json()
        .then(data => {
            const c3po = document.getElementById('c3po')
            c3po.innerHTML = data.name 
        }) 
    })
    .catch(err => console.error('nao foi essa desgraça!', err ))

    fetch(url3)
    .then(res => { 
        res.json()
        .then(data => {
            const r2d2 = document.getElementById('r2d2')
            r2d2.innerHTML = data.name 
        }) 
    })
    .catch(err => console.error('nao foi essa desgraça!', err ))


    fetch(url4)
    .then(res => { 
        res.json()
        .then(data => {
            const dv = document.getElementById('dv')
            dv.innerHTML = data.name 
        }) 
    })
    .catch(err => console.error('nao foi essa desgraça!', err ))
 