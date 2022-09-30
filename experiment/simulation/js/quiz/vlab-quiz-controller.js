/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */




/*
 * 
 * Author: P K JANA
 * IIT Kharagpur
 * 
 */

var i = 0;
var resultArray = [];
var questionCount = 0;

function quizInitialize() {
    document.getElementById("vqt-start").style.display = "none";
    document.getElementById("vqt-next").style.display = "block";

    questionCount = quizJSON.questions.length;
    if (i >= questionCount) {
        showResult();
        return;
    }
    var ansCount = quizJSON.questions[i].a.length;
    var questionOptions = "<p style=\"font-weight:bold;\">" + (i + 1) + ". " + quizJSON.questions[i].q + "</p>";
    for (var j = 0; j < ansCount; j++) {
        questionOptions = questionOptions + "<p><input type = \"radio\" name = \"ans\" value = \"" + j + "\"><label>" + quizJSON.questions[i].a[j].option + "</label></p>";

    }
    document.getElementById("vlab-quiz-question-answer-options").innerHTML = questionOptions;
    dynamicMathConveter();
}
function quizNext() {
    resultArray[i] = document.querySelector('input[name="ans"]:checked').value;
    i = i + 1;
    quizInitialize();
}
function showResult() {
    document.getElementById("vlab-quiz-question-answer-options").style.display = "none";
    document.getElementById("vlab-quiz-result").style.display = "block";
    document.getElementById("vqt-next").style.display = "none";
    document.getElementById("vqt-try-again").style.display = "block";

    var resultCount = 0;
    var level = "";
    var fullresult = "";

    for (var i = 0; i < questionCount; i++) {
        fullresult = fullresult + "<p><b>" + (i + 1) + ". " + quizJSON.questions[i].q + "</b></p>";
        var ansCount = quizJSON.questions[i].a.length;
        var k = -1;
        for (var j = 0; j < ansCount; j++) {
            fullresult = fullresult + "<p>(" + String.fromCharCode(97 + j) + ") " + quizJSON.questions[i].a[j].option + "</p>";
            if (quizJSON.questions[i].a[j].correct === true)
                k = j;
        }
        if (quizJSON.questions[i].a[resultArray[i]].correct === true) {
            resultCount++;
            fullresult = fullresult + "<p> You have choosen option (" + String.fromCharCode(97 + parseInt(resultArray[i])) + "). The answer is correct." + quizJSON.questions[i].correct;
        } else {
            fullresult = fullresult + "<p> You have choosen option (" + String.fromCharCode(97 + parseInt(resultArray[i])) + "). The answer is incorrect. The correct option is (" + String.fromCharCode(97 + k) + ")." + quizJSON.questions[i].incorrect;
        }
    }

    var resultPercent = (resultCount / questionCount) * 100;
    if (resultPercent >= 75) {
        level = quizJSON.info.level1;
    } else if (resultPercent >= 60) {
        level = quizJSON.info.level2;
    } else if (resultPercent >= 50) {
        level = quizJSON.info.level3;
    } else if (resultPercent >= 40) {
        level = quizJSON.info.level4;
    } else {
        level = quizJSON.info.level5;
    }

    document.getElementById("vlab-quiz-result").innerHTML = "<p> You have scored " + resultCount + " out of " + questionCount + ".</p><p>Your level is: " + level + "</p>" + fullresult;
    dynamicMathConveter()
}
function tryAgain() {
    document.getElementById("vlab-quiz-question-answer-options").style.display = "block";
    document.getElementById("vlab-quiz-result").style.display = "none";
    document.getElementById("vqt-next").style.display = "block";
    document.getElementById("vqt-try-again").style.display = "none";
    i = 0;
    resultArray = [];
    quizInitialize();
}
function dynamicMathConveter() {    
    MathJax.Hub.Queue(["Typeset", MathJax.Hub]);
}

