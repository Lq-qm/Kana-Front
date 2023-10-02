function mudarTipoKanji() {
    const tipoSelecionado = document.getElementById('selecaoTipo').value;

    // Dependendo do tipo selecionado, atualize a lista de kanjis
    switch (tipoSelecionado) {
        case 'numerais':
            kanjiData = kanjiNumerais;
            break;
        case 'alfabeto':
            kanjiData = kanjiAlfabeto;
            break;
        // Adicione mais tipos conforme necessário
        default:
            kanjiData = kanjiNumerais;
    }
    // Reinicie o jogo com os novos kanjis
    resetarJogo();
}
let kanjiNumeraisMeaning = ['Zero', 'Ichi', 'Ni', 'San', 'Shi', 'Go', 'Roku', 'Nana', 'Hachi', 'Kyu', 'Ju', 'Hyaku', 'Sen', 'Man', 'Hyakuman', 'Oku', 'Choo', 'Kei', 'En'];

let kanjiNumerais = [
    { kanji: '零', meanings: kanjiNumeraisMeaning, correctMeaning: 'Zero' },
    { kanji: '一', meanings: kanjiNumeraisMeaning, correctMeaning: 'Ichi' },
    { kanji: '二', meanings: kanjiNumeraisMeaning, correctMeaning: 'Ni' },
    { kanji: '三', meanings: kanjiNumeraisMeaning, correctMeaning: 'San' },
    { kanji: '四', meanings: kanjiNumeraisMeaning, correctMeaning: 'Shi' },
    { kanji: '五', meanings: kanjiNumeraisMeaning, correctMeaning: 'Go' },
    { kanji: '六', meanings: kanjiNumeraisMeaning, correctMeaning: 'Roku' },
    { kanji: '七', meanings: kanjiNumeraisMeaning, correctMeaning: 'Nana' },
    { kanji: '八', meanings: kanjiNumeraisMeaning, correctMeaning: 'Hachi' },
    { kanji: '九', meanings: kanjiNumeraisMeaning, correctMeaning: 'Kyu' },
    { kanji: '十', meanings: kanjiNumeraisMeaning, correctMeaning: 'Ju' },
    { kanji: '百', meanings: kanjiNumeraisMeaning, correctMeaning: 'Hyaku' },
    { kanji: '千', meanings: kanjiNumeraisMeaning, correctMeaning: 'Sen' },
    { kanji: '万', meanings: kanjiNumeraisMeaning, correctMeaning: 'Man' },
    { kanji: '百万', meanings: kanjiNumeraisMeaning, correctMeaning: 'Hyakuman' },
    { kanji: '億', meanings: kanjiNumeraisMeaning, correctMeaning: 'Oku' },
    { kanji: '兆', meanings: kanjiNumeraisMeaning, correctMeaning: 'Choo' },
    { kanji: '京', meanings: kanjiNumeraisMeaning, correctMeaning: 'Kei' },
    { kanji: '円', meanings: kanjiNumeraisMeaning, correctMeaning: 'En' },
    // Adicione mais kanjis conforme necessário
];

let kanjiLetras = [
'A', 'I', 'U', 'E', 'O', 
'Ka', 'Ki', 'Ku', 'Ke', 'Ko', 
'Sa', 'Shi', 'Su', 'Se', 'So', 
'Ta', 'Chi', 'Tsu', 'Te', 'To', 
'Na', 'Ni', 'Nu', 'Ne', 'No', 
'Ha', 'Hi', 'fu', 'He', 'Ho',
'ma', 'mi', 'mu', 'me', 'mo',
'ya', 'yu', 'yo', 
'ra', 'ri', 'ru', 're', 'ro',
'wa', 'wo', 'n']

let kanjiAlfabeto = [
    { kanji: 'あ', meanings: kanjiLetras, correctMeaning: 'A' },
    { kanji: 'い', meanings: kanjiLetras, correctMeaning: 'I' },
    { kanji: 'う', meanings: kanjiLetras, correctMeaning: 'U' },
    { kanji: 'え', meanings: kanjiLetras, correctMeaning: 'E' },
    { kanji: 'お', meanings: kanjiLetras, correctMeaning: 'O' },
    { kanji: 'か', meanings: kanjiLetras, correctMeaning: 'Ka' },
    { kanji: 'け', meanings: kanjiLetras, correctMeaning: 'Ke' },
    { kanji: 'き', meanings: kanjiLetras, correctMeaning: 'Ki' },
    { kanji: 'こ', meanings: kanjiLetras, correctMeaning: 'Ko' },
    { kanji: 'く', meanings: kanjiLetras, correctMeaning: 'Ku' },
    { kanji: 'さ', meanings: kanjiLetras, correctMeaning: 'Sa' },
    { kanji: 'し', meanings: kanjiLetras, correctMeaning: 'Shi' },
    { kanji: 'す', meanings: kanjiLetras, correctMeaning: 'Su' },
    { kanji: 'せ', meanings: kanjiLetras, correctMeaning: 'Se' },
    { kanji: 'そ', meanings: kanjiLetras, correctMeaning: 'So' },
    { kanji: 'た', meanings: kanjiLetras, correctMeaning: 'Ta' },
    { kanji: 'ち', meanings: kanjiLetras, correctMeaning: 'Chi' },
    { kanji: 'つ', meanings: kanjiLetras, correctMeaning: 'Tsu' },
    { kanji: 'て', meanings: kanjiLetras, correctMeaning: 'Te' },
    { kanji: 'と', meanings: kanjiLetras, correctMeaning: 'To' },
    { kanji: 'な', meanings: kanjiLetras, correctMeaning: 'Na' },
    { kanji: 'に', meanings: kanjiLetras, correctMeaning: 'Ni' },
    { kanji: 'ぬ', meanings: kanjiLetras, correctMeaning: 'Nu' },
    { kanji: 'ね', meanings: kanjiLetras, correctMeaning: 'Ne' },
    { kanji: 'の', meanings: kanjiLetras, correctMeaning: 'No' },
    { kanji: 'は', meanings: kanjiLetras, correctMeaning: 'Ha' },
    { kanji: 'ひ', meanings: kanjiLetras, correctMeaning: 'Hi' },
    { kanji: 'ふ', meanings: kanjiLetras, correctMeaning: 'Fu' },
    { kanji: 'へ', meanings: kanjiLetras, correctMeaning: 'He' },
    { kanji: 'ほ', meanings: kanjiLetras, correctMeaning: 'Ho' },
    { kanji: 'ま', meanings: kanjiLetras, correctMeaning: 'Ma' },
    { kanji: 'み', meanings: kanjiLetras, correctMeaning: 'Mi' },
    { kanji: 'む', meanings: kanjiLetras, correctMeaning: 'Mu' },
    { kanji: 'め', meanings: kanjiLetras, correctMeaning: 'Me' },
    { kanji: 'も', meanings: kanjiLetras, correctMeaning: 'Mo' },
    { kanji: 'や', meanings: kanjiLetras, correctMeaning: 'Ya' },
    { kanji: 'ゆ', meanings: kanjiLetras, correctMeaning: 'Yu' },
    { kanji: 'よ', meanings: kanjiLetras, correctMeaning: 'Yo' },
    { kanji: 'ら', meanings: kanjiLetras, correctMeaning: 'Ra' },
    { kanji: 'り', meanings: kanjiLetras, correctMeaning: 'Ri' },
    { kanji: 'る', meanings: kanjiLetras, correctMeaning: 'Ru' },
    { kanji: 'れ', meanings: kanjiLetras, correctMeaning: 'Re' },
    { kanji: 'ろ', meanings: kanjiLetras, correctMeaning: 'Ro' },
    { kanji: 'わ', meanings: kanjiLetras, correctMeaning: 'Wa' },
    { kanji: 'を', meanings: kanjiLetras, correctMeaning: 'Wo' },
    { kanji: 'ん', meanings: kanjiLetras, correctMeaning: 'N' },
    
    // Adicione mais kanjis conforme necessario
]

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

// Resetar o jogo
function resetarJogo() {
    score = 0;
    currentKanjiIndex = Math.floor(Math.random() * kanjiData.length);
    kanjiDisplay.innerText = kanjiData[currentKanjiIndex].kanji;
    generateRandomOptions();
}