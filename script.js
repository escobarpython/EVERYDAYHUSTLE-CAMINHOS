const cards = [
    {
        text: "Mudanças Clímaticas.",
        image: "",
        options: [
            { text: "Implementar restrições rigorosas sobre emissões de carbono (Causará diminuição de empregos).", result: "Avance 3 casas. Você investiu em tecnologia sustentável." },
            { text: "Continuar com políticas antigas e arriscar um aumento da temperatura global.", result: "Volte 2 casas. Desastres naturais causam interrupções em sua jornada." },

        ]
    },
    {
        text: "Desigualdade de Renda.",
        image: "",
        options: [
            { text: "Implementar um imposto sobre grandes fortunas para redistribuir riqueza.", result: "Troque de lugar com o jogador de sua escolha. Sua decisão atrai aliados que fortalecem sua posição." },
            { text: "Manter um sistema que favorece os ricos, 'incentivando' a criação de empregos.", result: "Volte 1 casa. O crescimento econõmico não beneficia a todos." },

        ]
    },
    {
        text: "Tecnologia e Privacidade",
        image: "",
        options: [
            { text: "Regular severamente as empresas de tecnologia para proteger a privacidade dos usuários.", result: "Avance 2 casas. Você se torna um defensor da privacidade." },
            { text: "Permitir que as empresas continuem a coletar os dados pessoais, promovendo a inovação.", result: "Mude de direção (ex: siga a direita, ou permaneça indo reto)." },

        ]
    },
    {
        text: "Imigração",
        image: "",
        options: [
            { text: "Aumentar as restrições de imigração para proteger os empregos e a cultura.", result: "Volte 2 casas. Sua decisão causa diversos protestos que impedem seu avanço" },
            { text: "Facilitar a imigração, promovendo a diversidade e aumentando a mão de obra.", result: "Avance 3 casas. Você promove diversidade e inovação." },

        ]
    },
    {
        text: "Educação e Acesso.",
        image: "",
        options: [
            { text: "Investir pesadamente em educação pública gratuita, o que exigiria altos impostos.", result: "Avance 4 casas. Seu investimento em educação gera um futuro promissor." },
            { text: "Manter um sistema educacional baseado em taxas que proporcionaria melhores recursos a quem pode pagar.", result: "Volte 1 casa. O acesso desigual à educação causa frustração." },

        ]
    },
]

let selectedCard;

function getRandomCard() {
    const randomIndex = Math.floor(Math.random() * cards.length);
    return cards[randomIndex];
}

function initializeCard() {
    selectedCard = getRandomCard();
    document.getElementById("card-text").innerText = selectedCard.text;
    document.getElementById("card-image").src = selectedCard.image;

    // Exibir as duas primeiras opções
    const selectedOptions = selectedCard.options.slice(0, 2);

    document.getElementById("option1").innerText = selectedOptions[0].text;
    document.getElementById("option2").innerText = selectedOptions[1].text;

    // Armazenar as mensagens para uso posterior
    document.getElementById("option1").dataset.message = selectedOptions[0].result;
    document.getElementById("option2").dataset.message = selectedOptions[1].result;
}

function flipCard() {
    const cardInner = document.getElementById("card-inner");
    const currentTransform = cardInner.style.transform;
    cardInner.style.transform = currentTransform === "rotateY(0deg)" ? "rotateY(180deg)" : "rotateY(0deg)";
}

function showMessage(option) {
    const message = document.getElementById(`option${option}`).dataset.message; // Corrigido aqui
    document.getElementById("modal-message").innerText = message;
    document.getElementById("modal").style.display = "flex";
}

function closeModal() {
    document.getElementById("modal").style.display = "none";
}

// Inicializa a carta ao carregar a página
initializeCard();