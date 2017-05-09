var question_choices = ['firebase.database().ref()child("questions").child("db_t_or_f")',
                        'firebase.database().ref()child("questions").child("db_multiple_answer")',
                        'firebase.database().ref()child("questions").child("db_single_answer")'
                        ]
var random_question_choices = question_choices[Math.floor(Math.random() * question_choices.length)];

var question = document.getElementById('question');
var dbRefQuestion = random_question_choices;


var answer = {

}
