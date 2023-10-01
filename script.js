// Lista de kanjis e seus significados
const kanjimeaning = ['Um', 'Dois', 'Três', 'Quatro', 'Cinco', 'Seis', 'Sete', 'Oito', 'Nove', 'Dez'];

const kanjiData = [
    { kanji: '一', meanings: kanjimeaning, correctMeaning: 'Um' },
    { kanji: '二', meanings: kanjimeaning, correctMeaning: 'Dois' },
    { kanji: '三', meanings: kanjimeaning, correctMeaning: 'Três' },
    { kanji: '四', meanings: kanjimeaning, correctMeaning: 'Quatro' },
    { kanji: '五', meanings: kanjimeaning, correctMeaning: 'Cinco' },
    { kanji: '六', meanings: kanjimeaning, correctMeaning: 'Seis' },
    { kanji: '七', meanings: kanjimeaning, correctMeaning: 'Sete' },
    { kanji: '八', meanings: kanjimeaning, correctMeaning: 'Oito' },
    { kanji: '九', meanings: kanjimeaning, correctMeaning: 'Nove' },
    { kanji: '十', meanings: kanjimeaning, correctMeaning: 'Dez' },
    // Adicione mais kanjis conforme necessário
];

let currentKanjiIndex = 0;
let score = 0;

const kanjiDisplay = document.getElementById('kanjiDisplay');
const optionsContainer = document.getElementById('options');
const scoreValue = document.getElementById('scoreValue');

function generateRandomOptions() {
    optionsContainer.innerHTML = '';

    // Embaralha as opções
    const shuffledOptions = kanjiData[currentKanjiIndex].meanings.sort(() => Math.random() - 0.5);

    shuffledOptions.forEach((meaning) => {
        const optionButton = document.createElement('button');
        optionButton.innerText = meaning;
        optionButton.addEventListener('click', () => checkAnswer(meaning));
        optionsContainer.appendChild(optionButton);
    });
}

function checkAnswer(selectedMeaning) {
    if (selectedMeaning === kanjiData[currentKanjiIndex].correctMeaning) {
        score++;
    } else {
        score = 0;
    }

    // Atualiza a pontuação na tela
    scoreValue.innerText = score;

    // Gera um novo kanji
    currentKanjiIndex = Math.floor(Math.random() * kanjiData.length);
    kanjiDisplay.innerText = kanjiData[currentKanjiIndex].kanji;
    generateRandomOptions();
}

// Inicia o jogo
currentKanjiIndex = Math.floor(Math.random() * kanjiData.length);
kanjiDisplay.innerText = kanjiData[currentKanjiIndex].kanji;
generateRandomOptions();

function atualizarRecompensa() {
    const imagemRecompensa = document.getElementById('imagemRecompensa');
    if (score >= 5) {
        imagemRecompensa.src = 'recompensa-nivel-1.jpg'; // Adicione o nome da imagem para a pontuação específica
    } else if (score >= 10) {
        imagemRecompensa.src = 'recompensa-nivel-2.jpg'; // Adicione o nome da imagem para a pontuação específica
    } else {
        imagemRecompensa.src = 'recompensa-default.jpg'; // Imagem padrão se não atender aos critérios
    }
}