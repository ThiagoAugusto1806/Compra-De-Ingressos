function comprar() {
  let tipoIngresso = document.getElementById("tipo-ingresso").value;
  let qtdIngresso = document.getElementById("qtd").value;
  let qtdDisponivel = document.getElementById(
    `qtd-${tipoIngresso}`
  ).textContent;
  if (parseInt(qtdIngresso) > parseInt(qtdDisponivel) ||
    isNaN == false || qtdIngresso <= 0) {
    alert("Quantidade de ingressos invalida");
    return;
  }
  let novaQtdDisponivel = parseInt(qtdDisponivel - qtdIngresso);
  document.getElementById(
    `qtd-${tipoIngresso}`
  ).innerHTML = `${novaQtdDisponivel}`;
}
