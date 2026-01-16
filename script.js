function contato(nome, valor, imagem){
  const numero = "5533999140951";

  const linkImagem = window.location.href.replace("index.html","") + imagem;

  const mensagem = encodeURIComponent(
    `Olá! Tenho interesse no *${nome}*\n` +
    `💰 Valor do aluguel: ${valor}\n` +
    `📸 Imagem do kit: ${linkImagem}`
  );

  window.open(`https://wa.me/${numero}?text=${mensagem}`, "_blank");
}

function verMais(nome, descricao, valor){
  document.getElementById("modalTitulo").innerText = nome;
  document.getElementById("modalDescricao").innerText = descricao;
  document.getElementById("modalPreco").innerText = "Valor do aluguel: " + valor;

  document.getElementById("modal").style.display = "flex";
}

function fecharModal(){
  document.getElementById("modal").style.display = "none";
}
