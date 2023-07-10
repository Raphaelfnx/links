function mudar(){

    //Apropriando os elementos com as variáveis
    const html = document.documentElement
    const img = document.getElementById('foto-perfil')

    //Alternando classe
    html.classList.toggle('light')

    //Condição para alternar imagem
    if(html.classList.contains('light')){
        img.setAttribute('src', './src/avatar.jpg')
    } else {
        img.setAttribute('src', './src/avatar2.jpg')
    }
}

