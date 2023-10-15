const startBtn = document.querySelector('.start-btn button ');
const rulesFild = document.querySelector('.rules-list');
const exitBtn = rulesFild.querySelector('.exit');
const conBtn = rulesFild.querySelector('.continue');
const quizEle = document.getElementById('question_el');
const nextEle = quizEle.querySelector('.nextq');
const secEle= document.querySelector('.second-2');
const nextEl = secEle.querySelector('.nextq');
const thiEle = document.querySelector('.third-3');
const nextE = thiEle.querySelector('.nextq');
const fourEle = document.querySelector('.four-4');
const next= fourEle.querySelector('.nextq');
const resultEle = document.getElementById('result');
const replyQ = resultEle.querySelector('.reply-btn');
const quitQ = resultEle.querySelector('.quit-btn');

startBtn.onclick = function(){
  rulesFild.classList.add('show');
} 
exitBtn.onclick = function(){
  rulesFild.classList.remove('show');
}
conBtn.onclick = function(){
  startBtn.classList.remove('show');
  rulesFild.classList.remove('show');
  quizEle.classList.add('show');
}
nextEle.onclick = function(){
  startBtn.classList.remove('show');
  quizEle.classList.remove('show');
  secEle.classList.add('show');
}
nextEl.onclick = function(){
  startBtn.classList.remove('show');
  quizEle.classList.remove('show');
  secEle.classList.remove('show');
  thiEle.classList.add('show');
} 
nextE.onclick = function(){
  startBtn.classList.remove('show');
  quizEle.classList.remove('show');
  secEle.classList.remove('show');
  thiEle.classList.remove('show');
  fourEle.classList.add('show');
} 
next.onclick = function(){
  fourEle.classList.remove('show');
  resultEle.classList.add('show');
} 
replyQ.onclick = function(){
  resultEle.classList.remove('show');
  quizEle.classList.add('show');
  correctEle.classList.remove('correct');
  correctEl.classList.remove('correct');
  correctE.classList.remove('correct');
  correct.classList.remove('correct');
} 
quitQ.onclick = function(){
  resultEle.classList.remove('show');
  startBtn.classList.add('show');
} 
const optionsEle = document.querySelector('.options-list');
let correctEle = document.getElementById('a');
let correctEl = document.getElementById('b');
let correctE = document.getElementById('c');
let correct = document.getElementById('d');

correctEle.onclick = function(){
  correctEle.classList.add('correct');
}
correctEl.onclick = function(){
  correctEl.classList.add('correct');
}
correctE.onclick = function() {
  correctE.classList.add('correct');
}
correct.onclick = function() {
  correct.classList.add('correct');
}