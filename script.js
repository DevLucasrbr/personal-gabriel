function togglemode () {
    const html = document.documentElement
        html.classList.toggle("light")
    
    //if(html.classList.contains('light')) {
    //html.classList.remove('light')
    
    
    
    //pegar a tag img
    const img = document.querySelector('#profile img')
    
    
    
    //substituir a imagem
    
    if(html.classList.contains('light')) {
    //se tiver light mode, adicionar light
    img.setAttribute('src', './imagem/gabriel.jpg')

    } else {
    //se tiver sem light mode, manter a imagem normal
        img.setAttribute('src', './imagem/gabriel_laranja.jpg')
    }
}