function contato(nome, valor, link){
  const numero = "5533999140951";
  const mensagem =
`Olá! Tenho interesse no *${nome}*
Valor: ${valor}
Link do kit: ${link}`;
  
  window.open(
    `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`,
    "_blank"
  );
}
