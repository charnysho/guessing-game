'use strict'

var usersName = prompt('Hey there! What is your name?')
alert('Hello there, ' + usersName + '!')

var name = prompt('Is my name Olga?');
quizz(name, yes);
var work = prompt('Did I work as QA?');
quizz(work, yes);
var university = prompt('Do I have degree from Washinghtom university?');
quizz(university, no);
var job = prompt('Do I want to be a painter?');
quizz(job, no);
var passedClass = prompt('Did I take CCNA Routing and Switching class?'); 
quizz(passedClass, yes);

var yes = 'yes';
var y = 'y';
var no = 'no';
var n = 'n';

function quizz(answer, correctAnswer) {
  if(name.toLowerCase() == yes || name.toLowerCase() == y) {
    console.log('Correct answer!');
    alert('Correct answer!');
  } else {
    console.log('Wrong answer!');
    alert('Wrong answer!')
  }
}

document.getElementById("seeYouLater").innerHTML = 'See you later, ' + usersName;