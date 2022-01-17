var canvas, backgroundImage;

var gameState = 0;
var contestantCount;
var allContestants;
var answer;
var database;

var question, contestant, quiz;
var num = 0;

function setup(){
  canvas = createCanvas(850,400);
  database = firebase.database();
  quiz = new Quiz();
  quiz.getState();
  quiz.start();
  question = new Question();
}


function draw(){
  background("pink");
  if(contestantCount === 4){
    quiz.update(1);
  }
  if(gameState === 1){
    clear();
    quiz.play();
    num = num+1;
    
  }

  if(num === 60){
    quiz.update(0);
  }

  if(gameState === 0){
    question.display();
  }
}
