let btnNext = document.querySelector('.next')
let btnBack = document.querySelector('.back')

let container = document.querySelector('.container')
let lista = document.querySelector('.container .lista')
let thumb = document.querySelector('.thumb')

btnNext.onclick = () => moveItemOnClickNext('next')
btnBack.onclick = () => moveItemOnClickNext('back')

function moveItemOnClickNext(type) {
    let listaItens = document.querySelectorAll('.lista .lista_item')
    let thumbItens = document.querySelectorAll('.thumb .thumb-item')
      console.log(listaItens)
      console.log(thumbItens)
    if (type == 'next') {
        // Move o primeiro item para o final do container pai 
        lista.appendChild(listaItens[0])
        thumb.appendChild(thumbItens[0])
        container.classList.add('next')
    } else{
        // Move o último item para o início do container pai
        lista.prepend(listaItens[listaItens.length - 1])
        thumb.prepend(thumbItens[thumbItens.length - 1])
        container.classList.add('back')
    }
    // Remove a classe de animação após ela terminar (ajuste o tempo conforme seu CSS)
    setTimeout(() => {
        container.classList.remove('next')
        container.classList.remove('back')
    }, 500)

}