function abrirExperimento() {
  const resultado = document.getElementById("resultado");
  const introducao = document.getElementById("introducao");

  // Esconde a introdução após iniciar o experimento
  if (introducao) introducao.style.display = "none";

  const vivo = '<span style="color: red">Gato VIVO 🔴 (pílula vermelha)</span>';
  const morto = '<span style="color: blue">Gato MORTO 🔵 (pílula azul)</span>';
  const vivoOuMorto = Math.random() < 0.5 ? vivo : morto;

  resultado.innerHTML = `&gt;&gt;&gt; Resultado: ${vivoOuMorto}`;
}

// Efeito de digitação linha por linha
function digitarTexto(elemento, linhas, delayEntreLinhas = 1000) {
  let i = 0;
  function digitarProxima() {
    if (i < linhas.length) {
      const linha = document.createElement("pre");
      linha.classList.add("linha");
      linha.textContent = linhas[i];
      elemento.appendChild(linha);
      i++;
      setTimeout(digitarProxima, delayEntreLinhas);
    }
  }
  digitarProxima();
}

// Iniciar digitação assim que a página carregar
window.onload = () => {
  const introEl = document.getElementById("introducao");
  const mensagens = [
    ">>> Bem-vindo ao Sistema de Simulação Quântica [GATO.SIM]",
    ">>> Neste experimento, o estado do gato será determinado no momento da observação.",
    ">>> A escolha é sua: abrir a caixa e encarar a realidade?",
    ">>> Pressione [ ABRIR EXPERIMENTO ] para colapsar o sistema."
  ];
  digitarTexto(introEl, mensagens, 1200);
};
