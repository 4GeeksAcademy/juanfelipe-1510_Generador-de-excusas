import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
let who = ['The dog', 'My grandma', 'The mailman', 'My bird'];
let action = ['ate', 'peed', 'crushed', 'broke'];
let what = ['my homework', 'my phone', 'the car'];
let when = [
  'before the class',
  'when I was sleeping',
  'while I was exercising',
  'during my lunch',
  'while I was praying'
];


function getRandomElement(array) {
  let randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];

}

function generateExcuse() {
  let ranWho = getRandomElement(who);
  let ranWhat = getRandomElement(what);
  let ranAction = getRandomElement(action);
  let ranWhen = getRandomElement(when);
  let excuse = ranWho+" "+ranAction+" "+ranWhat+" "+ranWhen;
  document.getElementById('excuse').innerHTML = excuse;
}
generateExcuse();
};
