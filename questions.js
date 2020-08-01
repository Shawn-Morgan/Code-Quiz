const questionDictionary = [{question: "question text...", option1: "a", option2: "b", option3: "c", option4: "d", correct: 3}, 
                            {question: "next question text...", option1: "a", option2: "b", option3: "c", option4: "d", correct: 3}];

//holds question user is on
var questionNum = 0;

function answerGiven(optionNumber) {
    if (optionNumber == questionDictionary[questionNum].correct){
        //this is for handling correct responses
    }
        else {//for handling incorrect responses}
    }
    questionNum += 1;
    //set of the question and button text to the next question
    resetQuestion ();
}

function resetQuestion(){
    var question = document.getElementById("question");
    question.innerHTML = questionDictionary[questionNum].question
    var option1 = document.getElementById("opt1");
    option1.innerHTML = questionDictionary[questionNum].option1
    //do through opt4
}

resetQuestion()

//global variable for correct answers given
//html element that reports correct or incorrect selection - start with display none







