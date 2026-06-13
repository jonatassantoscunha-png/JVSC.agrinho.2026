function mostrar(id) {
  document.querySelectorAll("section").forEach(sec => {
    sec.classList.remove("active");
  });

  document.getElementById(id).classList.add("active");

  // limpa curiosidades ao trocar de aba
  document.querySelectorAll("[id^='curiosidade-']").forEach(el => {
    el.innerText = "";
  });
}

/* fatos ambientais */
const fatos = {
  sustentabilidade: [
    "Reciclar 1 tonelada de papel pode salvar cerca de 20 árvores.",
    "Uma pessoa gera em média 1 kg de lixo por dia.",
    "A produção de plástico no mundo passa de 300 milhões de toneladas por ano.",
    "Reciclar alumínio economiza até 95% de energia.",
    "A Terra perde milhões de hectares de floresta por ano."
  ],

  agua: [
    "Um banho de 10 minutos pode gastar até 180 litros de água.",
    "Uma torneira pingando pode desperdiçar mais de 40 litros por dia.",
    "O ser humano consome em média 3.000 litros de água por dia (indiretamente).",
    "A agricultura usa cerca de 70% da água doce do mundo.",
    "Apenas cerca de 2,5% da água do planeta é doce."
  ],

  poluicao: [
    "Mais de 8 milhões de toneladas de plástico vão para os oceanos por ano.",
    "A poluição do ar causa cerca de 7 milhões de mortes por ano.",
    "Um carro pode emitir mais de 4 toneladas de CO₂ por ano.",
    "O plástico pode demorar até 400 anos para se decompor.",
    "Mais de 90% das pessoas respiram ar poluído no mundo."
  ]
};

function curiosidade(tipo) {
  let lista = fatos[tipo];

  if (!lista) return;

  let aleatorio = Math.floor(Math.random() * lista.length);

  document.getElementById("curiosidade-" + tipo).innerText =
    "💡 " + lista[aleatorio];
}