

function cagar() {
    //na linha 7 criei li que ja cria LI (listItem)
    //na linha 8 crio 'iv' que vem de form que tem NAME 'form_main', e lista
    //na linha 9 crio node de texto ('it') com o ('iv') 
        let li = document.createElement('LI') 
        let input_value = document.form_main.lista.value 
        let input_text = document.createTextNode(input_value)

        li.appendChild(input_text) //list item recebe 'it'
        document.querySelector('ul').appendChild(li) //digo ao ul criar append com li
        document.form_main.lista.value = "" //o value de lista é "" (nao entendi)

        createclosebutton(li) //quando roda o bloco, esse outro vai rodar no fim
}
    
    function createclosebutton(li) { 

        let span = document.createElement("span"); //criei obj span
        let txt = document.createTextNode(" \u00D7");//criei un 'x' 
        span.className = "close"               //class para o span
        span.appendChild(txt)//span agrega a txt, que foi criada acima com o 'x'
        li.appendChild(span)    //li agrega span
        
    span.onclick = () =>span.parentElement.style.display = "none"
}  //essa linha acima, NO CLIC a todos 'span', esconda o display (suma)

    document.querySelectorAll('li').forEach(createclosebutton);
//essa linha acima, está fora da função e gera um closebuttn pra cada li
//Na linha abaixo acionamos em 'ul' gatilhos de click, que adicionam linha no texto (classe checked)      
    document.querySelector('ul').addEventListener('click', (e) => {
    if (e.target.tagName =='LI') //se o clic foi em algum tagname LI
    e.target.classList.toggle('checked') //..entao tira ou coloca o css checked
})
    
    
    
    
    
    
    
    
    
    
    
    
    /*
    
    let lis = document.getElementById('lista')
    let tab = document.getElementById('tab')
    let imput_value = document.section.lista.value
    let imput_text = document.createTextNode(imput_value)

    li.appendChild(imput_text)
    document.querySelector('ul').appendChild('li')
    document.section.lista.value = ""

    createclosebutton(li)

    if (lis.value.length == 0) {
        alert('erro')
    }else{
        let c = Text(lis.innerText)
        let item = document.createElement('option')
        item.text = `oi ${c}`
        tab.appendChild(item)
    }
}
 
*/