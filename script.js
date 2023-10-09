function mudarTipoKanji() {
    const tipoSelecionado = document.getElementById('selecaoTipo').value;
    switch (tipoSelecionado) {
        case 'numerais':
            kanjiData = kanjiNumerais;
            kanjiData2 = kanjiNumeraisMeaning;
            iniciarQuadro();
            iniciarQuadro2();
            break;
        case 'hiragana':
            kanjiData = kanjiAlfabeto;
            iniciarQuadro();
            iniciarQuadro2();
            break;
        case 'katakana':
            kanjiData = kanjiAlfabetoKatakana;
            iniciarQuadro();
            iniciarQuadro2();
            break;
        case 'hiraganadigrafos':
            kanjiData = kanjiAlfabetoDigrafos;
            iniciarQuadro();
            iniciarQuadro2();
            break;
        default:
            kanjiData = kanjiNumerais;
            iniciarQuadro();
            iniciarQuadro2();
    }
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
'wa', 'wo', 'n', 
]

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
]

let kanjiOpcoesDigrafos = [
'ga', 'gi', 'gu', 'ge', 'go',
'za', 'ji', 'zu', 'ze', 'zo',
'da', 'ji', 'zu', 'de', 'do',
'ba', 'bi', 'bu', 'be', 'bo',
'pa', 'pi', 'pu', 'pe', 'po',
]

let kanjiAlfabetoDigrafos = [
    { kanji: 'が', meanings: kanjiOpcoesDigrafos, correctMeaning: 'Ga' },
    { kanji: 'ぎ', meanings: kanjiOpcoesDigrafos, correctMeaning: 'Gi' },
    { kanji: 'ぐ', meanings: kanjiOpcoesDigrafos, correctMeaning: 'Gu' },
    { kanji: 'げ', meanings: kanjiOpcoesDigrafos, correctMeaning: 'Ge' },
    { kanji: 'ご', meanings: kanjiOpcoesDigrafos, correctMeaning: 'Go' },
    { kanji: 'ざ', meanings: kanjiOpcoesDigrafos, correctMeaning: 'Za' },
    { kanji: 'じ', meanings: kanjiOpcoesDigrafos, correctMeaning: 'Ji' },
    { kanji: 'ず', meanings: kanjiOpcoesDigrafos, correctMeaning: 'Zu' },
    { kanji: 'ぜ', meanings: kanjiOpcoesDigrafos, correctMeaning: 'Ze' },
    { kanji: 'ぞ', meanings: kanjiOpcoesDigrafos, correctMeaning: 'Zo' },
    { kanji: 'だ', meanings: kanjiOpcoesDigrafos, correctMeaning: 'Da' },
    { kanji: 'ぢ', meanings: kanjiOpcoesDigrafos, correctMeaning: 'Ji' },
    { kanji: 'づ', meanings: kanjiOpcoesDigrafos, correctMeaning: 'Zu' },
    { kanji: 'で', meanings: kanjiOpcoesDigrafos, correctMeaning: 'De' },
    { kanji: 'ど', meanings: kanjiOpcoesDigrafos, correctMeaning: 'Do' },
    { kanji: 'ば', meanings: kanjiOpcoesDigrafos, correctMeaning: 'Ba' },
    { kanji: 'び', meanings: kanjiOpcoesDigrafos, correctMeaning: 'Bi' },
    { kanji: 'ぶ', meanings: kanjiOpcoesDigrafos, correctMeaning: 'Bu' },
    { kanji: 'べ', meanings: kanjiOpcoesDigrafos, correctMeaning: 'Be' },
    { kanji: 'ぼ', meanings: kanjiOpcoesDigrafos, correctMeaning: 'Bo' },
    { kanji: 'ぱ', meanings: kanjiOpcoesDigrafos, correctMeaning: 'Pa' },
    { kanji: 'ぴ', meanings: kanjiOpcoesDigrafos, correctMeaning: 'Pi' },
    { kanji: 'ぷ', meanings: kanjiOpcoesDigrafos, correctMeaning: 'Pu' },
    { kanji: 'ぺ', meanings: kanjiOpcoesDigrafos, correctMeaning: 'Pe' },
    { kanji: 'ぽ', meanings: kanjiOpcoesDigrafos, correctMeaning: 'Po' }
]

let kanjiAlfabetoKatakana = [
    { kanji: 'ア', meanings: kanjiLetras, correctMeaning: 'A' },
    { kanji: 'イ', meanings: kanjiLetras, correctMeaning: 'I' },
    { kanji: 'ウ', meanings: kanjiLetras, correctMeaning: 'U' },
    { kanji: 'エ', meanings: kanjiLetras, correctMeaning: 'E' },
    { kanji: 'オ', meanings: kanjiLetras, correctMeaning: 'O' },
    { kanji: 'カ', meanings: kanjiLetras, correctMeaning: 'Ka' },
    { kanji: 'キ', meanings: kanjiLetras, correctMeaning: 'Ki' },
    { kanji: 'ク', meanings: kanjiLetras, correctMeaning: 'Ku' },
    { kanji: 'ケ', meanings: kanjiLetras, correctMeaning: 'Ke' },
    { kanji: 'コ', meanings: kanjiLetras, correctMeaning: 'Ko' },
    { kanji: 'サ', meanings: kanjiLetras, correctMeaning: 'Sa' },
    { kanji: 'シ', meanings: kanjiLetras, correctMeaning: 'Shi' },
    { kanji: 'ス', meanings: kanjiLetras, correctMeaning: 'Su' },
    { kanji: 'セ', meanings: kanjiLetras, correctMeaning: 'Se' },
    { kanji: 'ソ', meanings: kanjiLetras, correctMeaning: 'So' },
    { kanji: 'タ', meanings: kanjiLetras, correctMeaning: 'Ta' },
    { kanji: 'チ', meanings: kanjiLetras, correctMeaning: 'Chi' },
    { kanji: 'ツ', meanings: kanjiLetras, correctMeaning: 'Tsu' },
    { kanji: 'テ', meanings: kanjiLetras, correctMeaning: 'Te' },
    { kanji: 'ト', meanings: kanjiLetras, correctMeaning: 'To' },
    { kanji: 'ナ', meanings: kanjiLetras, correctMeaning: 'Na' },
    { kanji: 'ニ', meanings: kanjiLetras, correctMeaning: 'Ni' },
    { kanji: 'ヌ', meanings: kanjiLetras, correctMeaning: 'Nu' },
    { kanji: 'ネ', meanings: kanjiLetras, correctMeaning: 'Ne' },
    { kanji: 'ノ', meanings: kanjiLetras, correctMeaning: 'No' },
    { kanji: 'ハ', meanings: kanjiLetras, correctMeaning: 'Ha' },
    { kanji: 'ヒ', meanings: kanjiLetras, correctMeaning: 'Hi' },
    { kanji: 'フ', meanings: kanjiLetras, correctMeaning: 'Fu' },
    { kanji: 'ヘ', meanings: kanjiLetras, correctMeaning: 'He' },
    { kanji: 'ホ', meanings: kanjiLetras, correctMeaning: 'Ho' },
    { kanji: 'マ', meanings: kanjiLetras, correctMeaning: 'Ma' },
    { kanji: 'ミ', meanings: kanjiLetras, correctMeaning: 'Mi' },
    { kanji: 'ム', meanings: kanjiLetras, correctMeaning: 'Mu' },
    { kanji: 'メ', meanings: kanjiLetras, correctMeaning: 'Me' },
    { kanji: 'モ', meanings: kanjiLetras, correctMeaning: 'Mo' },
    { kanji: 'ヤ', meanings: kanjiLetras, correctMeaning: 'Ya' },
    { kanji: 'ユ', meanings: kanjiLetras, correctMeaning: 'Yu' },
    { kanji: 'ヨ', meanings: kanjiLetras, correctMeaning: 'Yo' },
    { kanji: 'ラ', meanings: kanjiLetras, correctMeaning: 'Ra' },
    { kanji: 'リ', meanings: kanjiLetras, correctMeaning: 'Ri' },
    { kanji: 'ル', meanings: kanjiLetras, correctMeaning: 'Ru' },
    { kanji: 'レ', meanings: kanjiLetras, correctMeaning: 'Re' },
    { kanji: 'ロ', meanings: kanjiLetras, correctMeaning: 'Ro' },
    { kanji: 'ワ', meanings: kanjiLetras, correctMeaning: 'Wa' },
    { kanji: 'ヲ', meanings: kanjiLetras, correctMeaning: 'Wo' },
    { kanji: 'ン', meanings: kanjiLetras, correctMeaning: 'N' },
]

let currentKanjiIndex = 0;

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

let kanjiQuadro = [];
let kanjiQuadro2 = [];

function iniciarQuadro() {
    // Adicione todos os kanjis do tipo selecionado no quadro
    kanjiQuadro = kanjiData.slice(); // Copia a lista de kanjis
    // Atualize o quadro no HTML
    atualizarQuadro();
}

function iniciarQuadro2() {
    // Adicione todos os kanjis do tipo selecionado no quadro
    kanjiQuadro2 = kanjiData2.slice(); // Copia a lista de kanjis
    // Atualize o quadro no HTML
    atualizarQuadro2();
}

function atualizarQuadro() {
    const quadroElemento = document.getElementById('quadroKanjis');
    quadroElemento.innerHTML = ''; // Limpa o quadro

    // Adiciona os kanjis ao quadro
    kanjiQuadro.forEach(kanji => {
        const kanjiElemento = document.createElement('div');
        kanjiElemento.classList.add('kanjiQuadro');
        kanjiElemento.innerText = kanji.kanji;
        quadroElemento.appendChild(kanjiElemento);
    });
}

function atualizarQuadro2() {
    const quadroElemento = document.getElementById('quadro2Kanjis');
    quadroElemento.innerHTML = ''; // Limpa o quadro

    // Adiciona os kanjis ao quadro2
    kanjiQuadro.forEach(kanji => {
        const kanjiElemento = document.createElement('div');
        kanjiElemento.classList.add('kanjiQuadro');
        kanjiElemento.innerText = kanji.correctMeaning;
        quadroElemento.appendChild(kanjiElemento);
    });
}

function acenderKanji(index) {
    const kanjiElemento = document.querySelectorAll('.kanjiQuadro',)[index];
    kanjiElemento.classList.add('acendido');
}

function apagarQuadro() {
    const quadroElemento = document.getElementById('quadroKanjis', 'quadro2Kanjis');
    quadroElemento.innerHTML = ''; // Limpa o quadro
}

function checkAnswer(selectedMeaning) {
    if (selectedMeaning === kanjiData[currentKanjiIndex].correctMeaning) {
        acenderKanji(currentKanjiIndex);
    } else {
        apagarQuadro(), iniciarQuadro();
    }
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