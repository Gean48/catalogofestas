function contato(produto){
    const numero = "5533999140951"; // coloque seu numero com 55 + DDD
    const mensagem = encodeURIComponent("Olá! Tenho interesse no " + produto);
    window.open(`https://wa.me/${numero}?text=${mensagem}`, "_blank");
}
