var startButton = document.getElementById('start-btn')
var nextButton = document.getElementById('next-btn')
var questionContainerEl = document.getElementById('question-container')
var questionElement = document.getElementById('question')
var answerButtonsEl = document.getElementById('answer-buttons')

var randomQuestions, currentQuestionIndex
//var currentQuestionIndex

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
    currentQuestionIndex++
    setNextQuestion()
})

function startGame() {
    //console.log('Started')
    startButton.classList.add('hide')

    //consider adding function to create random questions//
    randomQuestions = questions.sort(() => Math.random() - .5)

    currentQuestionIndex = 0
    questionContainerEl.classList.remove('hide')
    setNextQuestion()
}

function setNextQuestion() {
    resetState()
    showQuestion(randomQuestions[currentQuestionIndex])
}

function showQuestion(question) {
    //what's the difference between innerText and innerHTML?//
    questionElement.innerHTML = question.question
    //for loop...
    question.answers.forEach(answer => {
        var button = document.createElement('button')
        //what's the difference between innerText and innerHTML?//
        button.innerHTML = answer.text
        button.classList.add('btn')
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', selectAnswer)
        answerButtonsEl.appendChild(button)
    })

}

function resetState() {
    clearStatusClass(document.body)
    nextButton.classList.add('hide')
    //if else statement...
    while (answerButtonsEl.firstChild) {
        answerButtonsEl.removeChild(answerButtonsEl.firstChild)
    }
}

function selectAnswer (event) {
    var selectedButton = event.target
    var correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerButtonsEl.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })
    if (randomQuestions.length > currentQuestionIndex + 1) {
        nextButton.classList.remove('hide') 
    } else {
        startButton.innerHTML = 'Restart'
        startButton.classList.remove('hide')
    }
}

function setStatusClass(element, correct) {
    clearStatusClass(element)
    if (correct) {
        element.classList.add('correct')
    } else {
        element.classList.add('wrong')
    }
}

function clearStatusClass(element) {
    element.classList.remove('correct')
    element.classList.remove('wrong')
}

var questions = [
    {
        question: 'what is 5 + 5',
        answers: [
            { text: '4', correct: true },
            { text: '22', correct: false }
        ]
    },

    {
        question: 'what is 6 + 6',
        answers: [
            { text: '4', correct: true },
            { text: '22', correct: false }
        ]
    },

    {
        question: 'what is 7 + 7',
        answers: [
            { text: '4', correct: true },
            { text: '22', correct: false }
        ]
    },

    {
        question: 'what is 8 + 5',
        answers: [
            { text: '4', correct: true },
            { text: '22', correct: false }
        ]
    }
];