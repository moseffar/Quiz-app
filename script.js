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
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}

function  resetState(){
    nextbtn.style.display = "none";
    while(answerbtn.firstChild){
        answerbtn.removeChild(answerbtn.firstChild);
    }
}

function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }else{
        selectedBtn.classList.add("Incorrect");
    }
    Array.from(answerbtn.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextbtn.style.display = "block";
}

function showScore(){
    resetState();
    questionelement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextbtn.innerHTML = `Play Again`;
    nextbtn.style.display = "block";
}

function handleNextbtn(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        showScore();
    }
}

nextbtn.addEventListener("click", ()=>{
    if(currentQuestionIndex < questions.length){
        handleNextbtn();
    }else{
        startQuiz();
    }
})

startQuiz();