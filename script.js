const quizContainer = document.getElementById('quiz');
const resultsContainer = document.getElementById('results');
const submitButton = document.getElementById('submit');

const questions = [
    {
        question: "Quando foi criado o dia das mulheres?",
        answers: {
            a: "Dia 07",
            b: "Dia 08",
            c: "Dia 15"
        },
        correctAnswer: "c"
    },
    {
        question: "qual mês foi criado?",
        answers: {
            a: "Janeiro",
            b: "´,março''
            c: "Dezembro"
        },
        correctAnswer: "b"
    },
    {
        question: "figura importante no dia das mulheres?",
        answers: {
            a: "Zumbi dos palmares ",
            b: "Clara zetkin",
        },
        correctAnswer: "a"
    }
];

function buildQuiz() {
    const output = [];
    questions.forEach((currentQuestion, questionNumber) => {
        const answers = [];
        for (letter in currentQuestion.answers) {
            answers.push(
                `<label>
                    <input type="radio" name="question${questionNumber}" value="${letter}">
                    ${letter} :
                    ${currentQuestion.answers[letter]}
                </label>`
            );
        }
        output.push(
            `<div class="question"> ${currentQuestion.question} </div>
            <div class="answers"> ${answers.join('')} </div>`
        );
    });
    quizContainer.innerHTML = output.join('');
}

function showResults() {
    const answerContainers = quizContainer.querySelectorAll('.answers');
    let numCorrect = 0;
    questions.forEach((currentQuestion, questionNumber) => {
        const answerContainer = answerContainers[questionNumber];
        const selector = `input[name=question${questionNumber}]:checked`;
        const userAnswer = (answerContainer.querySelector(selector) || {}).value;
        if (userAnswer === currentQuestion.correctAnswer) {
            numCorrect++;
            answerContainers[questionNumber].style.color = 'green';
        } else {
            answerContainers[questionNumber].style.color = 'red';
        }
    });
    resultsContainer.innerHTML = `${numCorrect} de ${questions.length} questões corretas`;
}

buildQuiz();
submitButton.addEventListener('click', showResults);
