/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var quizJSON = {
    "info": {
        "name": "Test Your Knowledge!!",
        "main": "<p>Think you're smart enough to be on Jeopardy? Find out with this super crazy knowledge quiz!</p>",
        "results": "<p>Learn More.</p>",
        "level1": "Jeopardy Ready",
        "level2": "Jeopardy Contender",
        "level3": "Jeopardy Amateur",
        "level4": "Jeopardy Newb",
        "level5": "Stay in school, kid..." // no comma here
    },
    "questions": [
        {// Question 1 - Multiple Choice, Single True Answer
            "q": "What is the number of degree of freedom (DOF) in Movemaster RM-501",
            "a": [
                {"option": "5", "correct": true},
                {"option": "7", "correct": false},
                {"option": "6", "correct": false},
                {"option": "None of this", "correct": false} // no comma here
            ],
            "correct": "",
            "incorrect": "" // no comma here
        },
        {// Question 2 - Multiple Choice, Multiple True Answers, Select Any
            "q": "How many joints are there in the wrist of the Movemaster RM-501 robot",
            "a": [
                {"option": "2", "correct": true},
                {"option": "4", "correct": false},
                {"option": "3", "correct": false},
                {"option": "1", "correct": false} // no comma here
            ],
            "correct": "",
            "incorrect": "" // no comma here
        },
        {// Question 3 - Multiple Choice, Multiple True Answers, Select All
            "q": "What is the Px positional value of the Movemaster robot in a configuration [60, -45, -47, 0, 0]",
            "a": [
                {"option": "185.282", "correct": true},
                {"option": "320.917 m", "correct": false},
                {"option": "563.377 m", "correct": false},
                {"option": "-120.219 m", "correct": false} // no comma here
            ],
            "correct": "",
            "incorrect": "" // no comma here
        },
        {// Question 4
            "q": "What is the maximum paylod of the Robot ",
            "a": [
                {"option": "2 kg", "correct": false},
                {"option": "1.2 kg", "correct": true},
                {"option": "1 kg", "correct": false},
                {"option": "1.5 kg", "correct": false} // no comma here
            ],
            "correct": "",
            "incorrect": "" // no comma here
        },
        {// Question 5
            "q": "What is the range of wrist Roll",
            "a": [
                {"option": "&plusmn; 90", "correct": false},
                {"option": "&plusmn; 140", "correct": false},
                {"option": "&plusmn; 120", "correct": false},
                {"option": "&plusmn; 180", "correct": true} // no comma here
            ],
            "correct": "",
            "incorrect": "" // no comma here
        }
    ]
};

