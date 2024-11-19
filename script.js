const sentences = [
    { text: "Je nutné omluvit se jim.", correctAnswer: "Věta podmětná" },
    { text: "Řekl, že nebude odmlouvat učitelům.", correctAnswer: "Věta předmětná" },
    { text: "Bojím se, že někteří z vás nedostudují.", correctAnswer: "Věta předmětná" },
    { text: "Přeji ti, abys byl zdráv.", correctAnswer: "Věta předmětná" },
    { text: "Pověz mi, co čteš, a já ti povím, jaký jsi.", correctAnswer: "Věta předmětná" },
    { text: "Nevím, kdo mi to říkal.", correctAnswer: "Věta předmětná" },
    { text: "Poraďte mi, kde mám vysadit stromky.", correctAnswer: "Věta předmětná" },
    { text: "Závodníci, kteří projeli cílovou páskou, byli bouřlivě pozdraveni.", correctAnswer: "Věta přívlastková" },
    { text: "Je-li podstatné jméno rozvito neshodným přívlastkem,", correctAnswer: "Věta přívlastková" },
    { text: "Závodníci z Francie, kteří projeli cílem první, byli bouřlivě pozdravováni.", correctAnswer: "Věta přívlastková" },
    { text: "Mám obavu, že mnozí studenti dostatečně neovládají tuto látku.", correctAnswer: "Věta přívlastková" },
    { text: "Čekal na příležitost, aby mi to řekl.", correctAnswer: "Věta přívlastková" },
    { text: "Kladu si otázku, jak mám postupovat dál.", correctAnswer: "Věta přívlastková" },
    { text: "Učitel pozoroval žáka, jak schovává tahák do rukávu.", correctAnswer: "Věta doplňková" },
    { text: "Viděl jsem králíky, jak poskakují v trávě.", correctAnswer: "Věta doplňková" },
    { text: "Zahlédl jsem srnku, jak se mihla mezi stromy a zmizela v houští.", correctAnswer: "Věta doplňková" },
    { text: "Babička slyšela sousedy, jak si o nás hlasitě povídají.", correctAnswer: "Věta doplňková" },
    { text: "Znáš ty děti, co běhají bosé?", correctAnswer: "Věta doplňková" },
    { text: "Byl všude, kde se něco dělo.", correctAnswer: "Věta příslovečná - místní" },
    { text: "Půjdu zase, odkud jsem přišel.", correctAnswer: "Věta příslovečná - místní" },
    { text: "Budu čekat, dokud se neozveš.", correctAnswer: "Věta příslovečná - časová" },
    { text: "Když chodil do školy, bydlel u svých rodičů.", correctAnswer: "Věta příslovečná - časová" },
    { text: "Dělal to, jak nejlíp dovedl.", correctAnswer: "Věta příslovečná - způsobová" },
    { text: "Najednou zmizel, jako by se po něm zem slehla.", correctAnswer: "Věta příslovečná - způsobová" },
    { text: "Choval se tak, jako by si sám sebou nebyl jist.", correctAnswer: "Věta příslovečná - způsobová" },
    { text: "Tvářil se, že bys mu raději ruku nepodal.", correctAnswer: "Věta příslovečná - způsobová" },
    { text: "Loudal se po chodníku, jen co noha nohu mine.", correctAnswer: "Věta příslovečná - měrová" },
    { text: "Čím jsem starší, tím jsem chytřejší.", correctAnswer: "Věta příslovečná - měrová" },
    { text: "Darů dostal, co jen unesl.", correctAnswer: "Věta příslovečná - měrová" },
    { text: "Družstvo Sparty prohrálo, protože nebylo dobře sehraným celkem.", correctAnswer: "Věta příslovečná - příčinná/důvodová" },
    { text: "Nepřišel na hodinu českého jazyka, poněvadž se obával pětky.", correctAnswer: "Věta příslovečná - příčinná/důvodová" },
    { text: "Uděláme všechno, abychom dostali jedničku z českého jazyka.", correctAnswer: "Věta příslovečná - účelová" },
    { text: "Aby mě uslyšel, musel jsem křičet.", correctAnswer: "Věta příslovečná - účelová" },
    { text: "Kdybychom tak často nesledovali sportovní utkání, měli bychom ve škole lepší známky.", correctAnswer: "Věta příslovečná - podmínková" },
    { text: "Jestli dnes přijede tetička, upečeme k obědu husu.", correctAnswer: "Věta příslovečná - podmínková" },
    { text: "Ačkoli jsem vás varovala, nepolepšili jste se.", correctAnswer: "Věta příslovečná - přípustková" },
    { text: "Musíte se to naučit, i když se vám nechce.", correctAnswer: "Věta příslovečná - přípustková" }
];

let currentIndex = 0;
let correctAnswersCount = 0;

function shuffleSentences() {
    for (let i = sentences.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [sentences[i], sentences[j]] = [sentences[j], sentences[i]];
    }
}

function loadQuestion() {
    if (currentIndex < sentences.length) {
        document.getElementById("sentence").innerText = sentences[currentIndex].text;
        document.getElementById("correct-answer").innerText = '';
        document.getElementById("next-btn").style.display = 'none';
        document.getElementById("result").style.display = 'none';
    } else {
        showResult();
    }
}

function checkAnswer(button, answer) {
    const correctAnswer = sentences[currentIndex].correctAnswer;
    const feedback = document.getElementById("correct-answer");

    if (answer === correctAnswer) {
        correctAnswersCount++;
        feedback.innerText = "Správně!";
        feedback.style.color = 'green';
    } else {
        feedback.innerText = `Špatně! Správná odpověď je: ${correctAnswer}`;
        feedback.style.color = 'red';
    }

    currentIndex++;
    document.getElementById("next-btn").style.display = 'block';
}

function nextQuestion() {
    loadQuestion();
}

function showResult() {
    const result = document.getElementById("result");
    result.innerHTML = `Počet správných odpovědí: ${correctAnswersCount} z ${sentences.length}`;
    result.style.display = 'block';
    document.getElementById("restart-btn").style.display = 'block';
}

function restartGame() {
    currentIndex = 0;
    correctAnswersCount = 0;
    shuffleSentences();
    loadQuestion();
    document.getElementById("restart-btn").style.display = 'none';
}

shuffleSentences();
loadQuestion();
