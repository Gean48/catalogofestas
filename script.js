function contato(nome, valor, imagem){
  const numero = "5533999140951";
  const mensagem =
    `Olá! Tenho interesse no ${nome}\nValor: ${valor}\n${imagem}`;
  window.open(
    `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`,
    "_blank"
  );
}
