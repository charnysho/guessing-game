'use strict'


var foodList = ['pasta', 'pizza', 'poke', 'sushi', 'seafood', 'meat', 'noodles', 'sandwich', 'soup', 'salad', 'snack'];
var favFoodList = ['pasta', 'sushi'];
var totalCorrectAnswers = 0;
var q1 = ['Is my name Olga?', 'y', 'yes'];
var q2 = ['Did I work as QA?', 'y', 'yes'];
var q3 = ['Did I take CCNA Routing and Switching class?', 'y', 'yes'];
var q4 = ['Do I have degree from Washington university?', 'n', 'no'];
var q5 = ['Do I want to be a painter?', 'n', 'no'];
var questions = [q1, q2, q3, q4, q5];
var guessingNumberGameAttempts = 4;
var favFoodGameAttempts = 6;
var maxRandomNumber = 10;


helloMessage();
yesNoQuestions(questions);
guessingNumberGame(getRandomInt(maxRandomNumber), guessingNumberGameAttempts);
askMultipleQuestions(foodList, favFoodList, favFoodGameAttempts);
showTotalScore();
goodByeMessage(usersName);


function yesNoQuestions(questions) {
  for (var i = 0; i < questions.length; i++) {
    askQuestion(questions[i]);
  }
}

function askQuestion(question) {
  var answer = prompt(question[0]);
  if(answer.toLowerCase() == question[1] || answer.toLowerCase() == question[2]) {
      console.log('Your answer is ' + answer + '. Correct!');
      alert('Correct answer!');
      totalCorrectAnswers = totalCorrectAnswers + 1
      console.log(totalCorrectAnswers);
  } else {
    console.log('Your answer is ' + answer + '. Wrong!');
    alert('Wrong answer!')
    }
}

function showTotalScore() {
  alert('Total correct answers: ' + totalCorrectAnswers);
}

function helloMessage() {
  var usersName = prompt('Hey there! What is your name?');
  alert('Hello there, ' + usersName + '!')
}

function askMultipleQuestions(wholeList, possibleAnswers, attemptNumber) {
  for(var i = 0; i < attemptNumber; i++) {
    var answer6 = prompt('Please guess a food: ' + wholeList + ' You have ' + attemptNumber + ' attempts');
    if(answer6 === possibleAnswers[0] || answer6 === possibleAnswers[1]) {
      alert('You are right!');
      totalCorrectAnswers = Number(totalCorrectAnswers) + 1
      break;
    } 
  }
  alert('All possible correct answers: ' + possibleAnswers[0] + ', ' + possibleAnswers[1]);
}

function guessingNumberGame(correctNumber, attemptNumber) {
  for(var i = 0; i < attemptNumber; i++) {
    var answer6 = prompt('Please guess the number.');
    if(checkRightNumber(correctNumber, answer6)) {
      break;
    } 
  }
  alert('Correct number is ' + correctNumber);
}

function checkRightNumber(correctNumber, guessingNumber) {
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

function goodByeMessage(usersName) {
  document.getElementById("seeYouLater").innerHTML = ('See you later, ' + usersName + '!').toUpperCase();
}

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}
