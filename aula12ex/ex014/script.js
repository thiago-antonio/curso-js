function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    if (hora >= 0 && hora < 12) {
        //bom dia 
        img.src = 'imagem-dia.png'
        document.body.style.background = '#e2cd9f'
        msg.innerHTML = `Agora sao ${hora} horas, bom dia!`
    } else if (hora >= 12 && hora <= 18) {
        //boa tarde
        img.src = 'imagem-tarde.png'
        document.body.style.background = '#b9846f'
        msg.innerHTML = `Agora sao ${hora} horas, boa tarde!`
    } else {
        //boa noite
        img.src = 'imagem-noite.png' 
        document.body.style.background = '#515154'
        msg.innerHTML = `Agora sao ${hora} horas, boa noite!`
    }

}
