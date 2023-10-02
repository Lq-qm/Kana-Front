// Lista de kanjis e seus significados
const kanjiMeaning = ['Zero', 'Ichi', 'Ni', 'San', 'Shi', 'Go', 'Roku', 'Nana', 'Hachi', 'Kyu', 'Ju', 'Hyaku', 'Sen', 'Man', 'Hyakuman', 'Oku', 'Choo', 'Kei', 'En'];

const kanjiData = [
    { kanji: '零', meanings: kanjiMeaning, correctMeaning: 'Zero' },
    { kanji: '一', meanings: kanjiMeaning, correctMeaning: 'Ichi' },
    { kanji: '二', meanings: kanjiMeaning, correctMeaning: 'Ni' },
    { kanji: '三', meanings: kanjiMeaning, correctMeaning: 'San' },
    { kanji: '四', meanings: kanjiMeaning, correctMeaning: 'Shi' },
    { kanji: '五', meanings: kanjiMeaning, correctMeaning: 'Go' },
    { kanji: '六', meanings: kanjiMeaning, correctMeaning: 'Roku' },
    { kanji: '七', meanings: kanjiMeaning, correctMeaning: 'Nana' },
    { kanji: '八', meanings: kanjiMeaning, correctMeaning: 'Hachi' },
    { kanji: '九', meanings: kanjiMeaning, correctMeaning: 'Kyu' },
    { kanji: '十', meanings: kanjiMeaning, correctMeaning: 'Ju' },
    { kanji: '百', meanings: kanjiMeaning, correctMeaning: 'Hyaku' },
    { kanji: '千', meanings: kanjiMeaning, correctMeaning: 'Sen' },
    { kanji: '万', meanings: kanjiMeaning, correctMeaning: 'Man' },
    { kanji: '百万', meanings: kanjiMeaning, correctMeaning: 'Hyakuman' },
    { kanji: '億', meanings: kanjiMeaning, correctMeaning: 'Oku' },
    { kanji: '兆', meanings: kanjiMeaning, correctMeaning: 'Choo' },
    { kanji: '京', meanings: kanjiMeaning, correctMeaning: 'Kei' },
    { kanji: '円', meanings: kanjiMeaning, correctMeaning: 'En' },
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