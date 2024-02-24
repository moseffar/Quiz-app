const questions = [
    {
        question: "which is larget animal in the world?",
        answers: [
            { text : "blue whale", correct: true},
            { text : "shark", correct: false},
            { text : "elephant", correct: false},
            { text : "giraffet", correct: false},
        ]
    },
    {
        question: "who mohamed EL?",
        answers: [
            { text : "friend", correct: false},
            { text : "idk", correct: true},
            { text : "mcharemel", correct: false},
            { text : "deep", correct: false},
        ]
    },
    {
        question: "Name the Brain of a computer?",
        answers: [
            { text : "ROM", correct: false},
            { text : "clavier", correct: false},
            { text : "CPU", correct: true},
            { text : "RAM", correct: false},
        ]
    },
    {
        question: "What country is at the top in robotics?",
        answers: [
            { text : "Japan", correct: true},
            { text : "morocco", correct: false},
            { text : "spain", correct: false},
            { text : "USA", correct: false},
        ]
    }
];
const questionelement = document.getElementById("question");
const answerbtn = document.getElementById("answer-buttons");
const nextbtn = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextbtn.innerHTML = "Next"
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionelement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerbtn.appendChild(button);
    });
}

function  resetState(){
    nextbtn.style.display = "none";
    while(answerbtn.firstChild){
        answerbtn.removeChild(answerbtn.firstChild);
    }
}
startQuiz();