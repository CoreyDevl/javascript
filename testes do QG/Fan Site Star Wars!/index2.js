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
const plan1 = "https://swapi.dev/api/planets/1/";
const plan8 = "https://swapi.dev/api/planets/8/";
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

    fetch(url1)
    .then(res => { 
        res.json()
        .then(data => {
            const luke = document.getElementById('lklist')
            const ul = document.getElementById('lklist')
            const li = document.createElement('li')
            const name = document.createElement('name')
            name.innerHTML = `<p><strong>Nome:</strong> ${data.name} </p>`
            const gender = document.createElement('gender')
            gender.innerHTML = `<p><strong>Sexo:</strong> ${data.gender} (homem, segundo ele mesmo) </p>`
            const height = document.createElement('height')
            height.innerHTML = `<p><strong>Altura:</strong> ${data.height} (baixim)</p>`
            const massa = document.createElement('massa')
            massa.innerHTML = `<p><strong>Massa:</strong> ${data.mass} (leve pra carai)</p>`
            const hair = document.createElement('hair')
            hair.innerHTML = `<p><strong>Cabelo:</strong> ${data.hair_color} (loirim) </p>`
            const skin = document.createElement('skin')
            skin.innerHTML = `<p><strong>Cor da pele:</strong> ${data.skin_color} (branca) </p>`
            const eye = document.createElement('eye')
            eye.innerHTML = `<p><strong>Cor dos olhos:</strong> ${data.eye_color} (azul) </p>`
            const ano = document.createElement('ano')
            ano.innerHTML = `<p><strong>Ano de nascimento:</strong> ${data.birth_year} (BBY-before Battle Yavin-antes da batalha de Yavin) </p>`
            

            fetch (plan1)
            .then (planets => {
                planets.json()
            .then (plans => {
                const planeta = document.createElement('planeta')
            planeta.innerHTML = `<p><strong>Planeta natal:</strong> ${plans.name}</p>`
                const back = document.createElement('back')
                back.innerHTML = `<a href='#ceu'>voltar</a>`
                
            ul.appendChild(li)
            li.appendChild(planeta)
            ul.appendChild(li)
            li.appendChild(back)
        })
            })

            ul.appendChild(li)
            li.appendChild(name)
            ul.appendChild(li)
            li.appendChild(gender)
            ul.appendChild(li)
            li.appendChild(height)
            ul.appendChild(li)
            li.appendChild(massa)
            ul.appendChild(li)
            li.appendChild(hair)
            ul.appendChild(li)
            li.appendChild(skin)
            ul.appendChild(li)
            li.appendChild(eye)
            ul.appendChild(li)
            li.appendChild(ano)

     

        }) 
    })
    .catch(err => console.error('nao foi essa desgraça!', err ))


    fetch(url2)
    .then(res => { 
        res.json()
        .then(data => {
            const c3po = document.getElementById('c3list')
            const ul = document.getElementById('c3list')
            const li = document.createElement('li')
            const name = document.createElement('name')
            name.innerHTML = `<p><strong>Nome:</strong> ${data.name} </p>`
            const gender = document.createElement('gender')
            gender.innerHTML = `<p><strong>Sexo:</strong> ${data.gender} (robô que se comporta como um homem afeminado) </p>`
            const height = document.createElement('height')
            height.innerHTML = `<p><strong>Altura:</strong> ${data.height} </p>`
            const massa = document.createElement('massa')
            massa.innerHTML = `<p><strong>Massa:</strong> ${data.mass} (deve ser feito de alumínio)</p>`
            const hair = document.createElement('hair')
            hair.innerHTML = `<p><strong>Cabelo:</strong> ${data.hair_color} (não tem) </p>`
            const skin = document.createElement('skin')
            skin.innerHTML = `<p><strong>Cor da lataria:</strong> ${data.skin_color} (dourado) </p>`
            const eye = document.createElement('eye')
            eye.innerHTML = `<p><strong>Cor do display:</strong> ${data.eye_color} (amarelo) </p>`
            const ano = document.createElement('ano')
            ano.innerHTML = `<p><strong>Ano de nascimento:</strong> ${data.birth_year}</p>`
            

            fetch (plan1)
            .then (planets => {
                planets.json()
            .then (plans => {
                const planeta = document.createElement('planeta')
                planeta.innerHTML = `<p><strong>Planeta natal:</strong> ${plans.name}</p>`
                    const back = document.createElement('back')
                    back.innerHTML = `<a href='#ceu'>voltar</a>`
                    
                ul.appendChild(li)
                li.appendChild(planeta)
                ul.appendChild(li)
                li.appendChild(back)
            })
            })

            ul.appendChild(li)
            li.appendChild(name)
            ul.appendChild(li)
            li.appendChild(gender)
            ul.appendChild(li)
            li.appendChild(height)
            ul.appendChild(li)
            li.appendChild(massa)
            ul.appendChild(li)
            li.appendChild(hair)
            ul.appendChild(li)
            li.appendChild(skin)
            ul.appendChild(li)
            li.appendChild(eye)
            ul.appendChild(li)
            li.appendChild(ano)

     

        }) 
    })
    .catch(err => console.error('nao foi essa desgraça!', err ))


    fetch(url3)
    .then(res => { 
        res.json()
        .then(data => {
            const r2d2 = document.getElementById('r2list')
            const ul = document.getElementById('r2list')
            const li = document.createElement('li')
            const name = document.createElement('name')
            name.innerHTML = `<p><strong>Nome:</strong> ${data.name} </p>`
            const gender = document.createElement('gender')
            gender.innerHTML = `<p><strong>Sexo:</strong> ${data.gender} (robô que simula uma lixeira animada) </p>`
            const height = document.createElement('height')
            height.innerHTML = `<p><strong>Altura:</strong> ${data.height} </p>`
            const massa = document.createElement('massa')
            massa.innerHTML = `<p><strong>Massa:</strong> ${data.mass} (deve ser feito de alumínio)</p>`
            const hair = document.createElement('hair')
            hair.innerHTML = `<p><strong>Cabelo:</strong> ${data.hair_color} (não tem) </p>`
            const skin = document.createElement('skin')
            skin.innerHTML = `<p><strong>Cor da lataria:</strong> ${data.skin_color} (branco e azul) </p>`
            const eye = document.createElement('eye')
            eye.innerHTML = `<p><strong>Cor do display:</strong> ${data.eye_color} (vermelho) </p>`
            const ano = document.createElement('ano')
            ano.innerHTML = `<p><strong>Ano de nascimento:</strong> ${data.birth_year}</p>`
            

            fetch (plan8)
            .then (planets => {
                planets.json()
            .then (plans => {
                const planeta = document.createElement('planeta')
                planeta.innerHTML = `<p><strong>Planeta natal:</strong> ${plans.name}</p>`
                    const back = document.createElement('back')
                    back.innerHTML = `<a href='#ceu'>voltar</a>`
                    
                ul.appendChild(li)
                li.appendChild(planeta)
                ul.appendChild(li)
                li.appendChild(back)
            })
            })

            ul.appendChild(li)
            li.appendChild(name)
            ul.appendChild(li)
            li.appendChild(gender)
            ul.appendChild(li)
            li.appendChild(height)
            ul.appendChild(li)
            li.appendChild(massa)
            ul.appendChild(li)
            li.appendChild(hair)
            ul.appendChild(li)
            li.appendChild(skin)
            ul.appendChild(li)
            li.appendChild(eye)
            ul.appendChild(li)
            li.appendChild(ano)

     

        }) 
    })
    .catch(err => console.error('nao foi essa desgraça!', err ))

    fetch(url4)
    .then(res => { 
        res.json()
        .then(data => {
            const dv = document.getElementById('dvlist')
            const ul = document.getElementById('dvlist')
            const li = document.createElement('li')
            const name = document.createElement('name')
            name.innerHTML = `<p><strong>Nome:</strong> ${data.name} </p>`
            const gender = document.createElement('gender')
            gender.innerHTML = `<p><strong>Sexo:</strong> ${data.gender} (Transformista) </p>`
            const height = document.createElement('height')
            height.innerHTML = `<p><strong>Altura:</strong> ${data.height} </p>`
            const massa = document.createElement('massa')
            massa.innerHTML = `<p><strong>Massa:</strong> ${data.mass} (deve ser feito de alumínio)</p>`
            const hair = document.createElement('hair')
            hair.innerHTML = `<p><strong>Cabelo:</strong> ${data.hair_color} (não tem) </p>`
            const skin = document.createElement('skin')
            skin.innerHTML = `<p><strong>Cor da pele:</strong> ${data.skin_color} (branco defunto) </p>`
            const eye = document.createElement('eye')
            eye.innerHTML = `<p><strong>Cor dos olhos:</strong> ${data.eye_color} (amarelo) </p>`
            const ano = document.createElement('ano')
            ano.innerHTML = `<p><strong>Ano de nascimento:</strong> ${data.birth_year}</p>`
            

            fetch (plan1)
            .then (planets => {
                planets.json()
            .then (plans => {
                const planeta = document.createElement('planeta')
                planeta.innerHTML = `<p><strong>Planeta natal:</strong> ${plans.name}</p>`
                    const back = document.createElement('back')
                    back.innerHTML = `<a href='#ceu'>voltar</a>`
                    
                ul.appendChild(li)
                li.appendChild(planeta)
                ul.appendChild(li)
                li.appendChild(back)
            })
            })

            ul.appendChild(li)
            li.appendChild(name)
            ul.appendChild(li)
            li.appendChild(gender)
            ul.appendChild(li)
            li.appendChild(height)
            ul.appendChild(li)
            li.appendChild(massa)
            ul.appendChild(li)
            li.appendChild(hair)
            ul.appendChild(li)
            li.appendChild(skin)
            ul.appendChild(li)
            li.appendChild(eye)
            ul.appendChild(li)
            li.appendChild(ano)

     

        }) 
    })
    .catch(err => console.error('nao foi essa desgraça!', err ))






 /*
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

 fetch(url1)
.then(res => { 
    res.json()
   .then(data2 => {
        const data2 = data2.results  
        return data2.map(data2 =>{
        const ul = document.getElementById('lklist')
        const li = document.createElement('li')
        const h4 = document.createElement('h4')
        h4.innerHTML = data2.name
        ul.appendChild(li)
        li.appendChild(h4) 
   }) 
})
})
.catch(err => console.error('nao foi essa desgraça!', err ))
*/