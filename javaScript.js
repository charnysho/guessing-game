'use strict'


var incorrectAnswerList = ['no', 'n'];
var correctAnswerList = ['yes', 'y'];
var correctNumber = getRandomInt(10);
var favoriteFood = ['pasta', 'pizza', 'poke', 'sushi', 'seafood', 'meat', 'noodles', 'sandwich', 'soup', 'salad', 'snack'];
var yesQuestions = ['Is my name Olga?', 'Did I work as QA?', 'Did I take CCNA Routing and Switching class?'];
var noQuestions = ['Do I have degree from Washington university?', 'Do I want to be a painter?'];
var totalCorrectAnswers = 0;


var usersName = prompt('Hey there! What is your name?');
alert('Hello there, ' + usersName + '!')

askQuestion(yesQuestions, correctAnswerList);
askQuestion(noQuestions, incorrectAnswerList);
guessingNumberGame();
favFoodGame();
alert('Total correct answers: ' + totalCorrectAnswers);
goodByeMessage(usersName);

function askQuestion(questionType, correctAnswer) {
  for (var i = 0; i < questionType.length; i++) {
    var answer = prompt(questionType[i]);
    quiz(answer, correctAnswer);
  }
}

function quiz(answer, correctAnswerList) {
  if(answer.toLowerCase() == correctAnswerList[0] || answer.toLowerCase() == correctAnswerList[1]) {
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
  var possibleAnswers = ['pasta', 'sushi'];
  var attemptNumber = 6;
  for(var i = 0; i < attemptNumber; i++) {
    var answer6 = prompt('Please guess a food: ' + favoriteFood + ' You have ' + attemptNumber + ' attempts');
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

function goodByeMessage(usersName) {
  document.getElementById("seeYouLater").innerHTML = ('See you later, ' + usersName + '!').toUpperCase();
}

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}
