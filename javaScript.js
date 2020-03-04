'use strict'

var usersName = prompt('Hey there! What is your name?')
alert('Hello there, ' + usersName + '!')

var yes = 'yes';
var y = 'y';
var no = 'no';
var n = 'n';

var name = prompt('Is my name Olga?');
quizz(name, yes, y);
var work = prompt('Did I work as QA?');
quizz(work, yes, y);
var university = prompt('Do I have degree from Washinghtom university?');
quizz(university, no, n);
var job = prompt('Do I want to be a painter?');
quizz(job, no, n);
var passedClass = prompt('Did I take CCNA Routing and Switching class?'); 
quizz(passedClass, yes, y);

function quizz(answer, correctAnswer1, correctAnswer2) {
  if(answer.toLowerCase() == correctAnswer1 || answer.toLowerCase() == correctAnswer2) {
    console.log('Your answer is ' + answer + '. Correct!');
    alert('Correct answer!');
  } else {
    console.log('Your answer is ' + answer + '. Wrong!');
    alert('Wrong answer!')
  }
}

document.getElementById("seeYouLater").innerHTML = 'See you later, ' + usersName;