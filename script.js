function contato(produto){
    const numero = "5599999999999"; // coloque seu numero com 55 + DDD
    const mensagem = encodeURIComponent("Olá! Tenho interesse no " + produto);
    window.open(`https://wa.me/${numero}?text=${mensagem}`, "_blank");
}

let index = 0;

function mover(direcao){
    const track = document.querySelector(".carousel-track");
    const cards = document.querySelectorAll(".carousel .card");
    const total = cards.length;

    index += direcao;

    if(index < 0) index = total - 1;
    if(index >= total) index = 0;

    const tamanho = cards[0].offsetWidth + 20;
    track.style.transform = `translateX(${-index * tamanho}px)`;
}

setInterval(() => mover(1), 4000);