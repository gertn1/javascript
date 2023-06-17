function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    //var data = new Date()
    //var hora = data.getHours()
    var hora = 15

    msg.innerHTML= `Agora São ${hora} horas.`
    if(hora >= 0 && hora < 12){
        img.src = './fotos/Manha.jpg'
        document.body.style.background ="#e2cd9f"
    } 
    else if(hora >= 12 && hora < 18){
        img.src = './fotos/Tarde.jpg'
        document.body.style.background ="#b9846f"

    } 
    else{
        img.src = './fotos/Noite.jpg'
        document.body.style.background ="#515154"

    }
} 