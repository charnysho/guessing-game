'use strict'

var usersName = prompt('Hey there! What is your name?')
alert('Hello there, ' + usersName + '!')

var yes = 'yes';
var y = 'y';
var no = 'no';
var n = 'n';
var correctNumber = getRandomInt(10);
var favouritefood = ['pasta', 'pizza', 'poke', 'suchi', 'seafood', 'meat', 'noodles', 'sandwich', 'soup', 'salad', 'snack'];
var yesQuestions = ['Is my name Olga?', 'Did I work as QA?', 'Did I take CCNA Routing and Switching class?'];
var noQuestions = ['Do I have degree from Washinghtom university?', 'Do I want to be a painter?'];
var totalCorrectAnswers = null;

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

for (var i = 0; i < yesQuestions.length; i++) {
  var answer = prompt(yesQuestions[i]);
  quizz(answer, yes, y);
}

for (var i = 0; i < noQuestions.length; i++) {
  var answer = prompt(noQuestions[i]);
  quizz(answer, no, n);
}

guessingNumberGame();
favFoodGame();
alert('Total correct answers: ' + totalCorrectAnswers);

function quizz(answer, correctAnswer1, correctAnswer2) {
  if(answer.toLowerCase() == correctAnswer1 || answer.toLowerCase() == correctAnswer2) {
    console.log('Your answer is ' + answer + '. Correct!');
    alert('Correct answer!');
    totalCorrectAnswers = totalCorrectAnswers + 1
    console.log(totalCorrectAnswers);
  } else {
    console.log('Your answer is ' + answer + '. Wrong!');
    alert('Wrong answer!')
  }
}

function favFoodGame() {
  var possibleAnswers = ['pasta', 'suchi'];
  var attemptNumber = 6;
  for(var i = 0; i < attemptNumber; i++) {
    var answer6 = prompt('Please guess a food: ' + favouritefood + ' You have ' + attemptNumber + ' attempts');
    if(answer6 === possibleAnswers[0] || answer6 === possibleAnswers[1]) {
      alert('You are right!');
      totalCorrectAnswers = Number(totalCorrectAnswers) + 1
      break;
    } 
  }
  alert('All possible correct answers: ' + possibleAnswers[0] + ', ' + possibleAnswers[1]);
}

function guessingNumberGame() {
  var attemptNumber = 4;
  var a;
  for(var i = 0; i < attemptNumber; i++) {
    var answer6 = prompt('Please guess the number.');
    if(checkRightNumber(answer6)) {
      break;
    } 
  }
  alert('Correct number is ' + correctNumber);
}

function checkRightNumber(guessingNumber) {
  var num = parseInt(guessingNumber);
  if(!isNaN(num)) {
    if(num > correctNumber) {
      alert('Number is too high!');
    } else if(num < correctNumber) {
      alert('Number is too low!');
    } else if(num === correctNumber) {
      alert('You are right!');
      totalCorrectAnswers = Number(totalCorrectAnswers) + 1
      return true;
    } 
  } else {
    alert('It is not a number');
  }
}

document.getElementById("seeYouLater").innerHTML = ('See you later, ' + usersName + '!').toUpperCase();