'use strict'

var usersName = prompt('Hey there! What is your name?')
print('Hello ' + usersName);

var name = prompt('Is my name Olga?');
var work = prompt('Did my work as QA?');
var university = prompt('Do I have degree from Washinghtom university?');
var job = prompt('Do I want to be a painter?');
var passedClass = prompt('Did I take CCNA Routing and Switching class?'); 

var yes = 'yes';
var y = 'y';
var no = 'no';
var n = 'n';

if(name.toLowerCase() == yes || name.toLowerCase() == y) {
  console.log('Correct answer!');
  alert('Correct answer!');
} else {
  console.log('Wrong answer!');
  alert('Wrong answer!')
}

print('See you later ' + usersName);