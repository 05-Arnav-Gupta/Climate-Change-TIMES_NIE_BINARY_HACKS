var score = document.getElementById('score');
var totalScore = document.getElementById('totalScore');

var count =  0;
var scoreCount = 0;

var qaSet = document.querySelectorAll('.qa_set');
var qaAns = document.querySelectorAll('.qa_set .qa_ans_row input');

qaAns.forEach(function(qaAnsRowSingle) {
  qaAnsRowSingle.addEventListener('click', function(){
    setTimeout(function(){
      step();
    },1000)
    var valid = this.getAttribute("valid");
    if(valid=="valid"){
      scoreCount += 10;
      totalScore.innerHTML = scoreCount;
      score.innerHTML = scoreCount;
    }
  });
});


function step() {
  count +=1;
  for(var i = 0; i < qaSet.length; i++){
    qaSet[i].className='qa_set';


  qaSet[count].className='qa_set active'
}
}
