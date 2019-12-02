const intro = document.querySelector("#intro");
const play = document.querySelector(".play");
const endGame = document.querySelector("#endGame");

const rules=["스트라이크!", "볼!","안타!","아웃!"];
const baseballRule={
  "스트라이크!":{
    id:0,
    maxValue:2,
    curValue:0},
  "볼!":{
    id:1,
    maxValue:3,
    curValue:0},
  "안타!":{
    id:2,
    maxValue:undefined,
    curValue:0},
  "아웃!":{
    id:3,
    maxValue:2,
    curValue:0}
}

function initScore(rule){
  baseballRule["스트라이크!"].curValue = 0;
  baseballRule["볼!"].curValue = 0;
  ++baseballRule[rule].curValue;
}

function printCurrentScore(rule, movePlayer){
  if(movePlayer===true){
    play.innerHTML += `${rules[rule]} 다음 타자가 타석에 입장했습니다.<br>${baseballRule["스트라이크!"].curValue}S ${baseballRule["볼!"].curValue}B ${baseballRule["아웃!"].curValue}O<br><br>`; 
  } else if(movePlayer===false){
    play.innerHTML += `${rules[rule]}<br>${rules[rule] ==="스트라이크!"? "아웃!":"안타!"} 다음 타자가 타석에 입장했습니다.<br>${baseballRule["스트라이크!"].curValue}S ${baseballRule["볼!"].curValue}B ${baseballRule["아웃!"].curValue}O<br><br>`; 
  } else{
    play.innerHTML += `${rules[rule]}<br>${baseballRule["스트라이크!"].curValue}S ${baseballRule["볼!"].curValue}B ${baseballRule["아웃!"].curValue}O<br><br>`;
  }
  return play.innerHTML;
}
// 스트라이크존 점수에 따른 메세지 출력
function baseballZone(ruleNumber){
  let movePlayer=undefined;

  if(rules[ruleNumber]==="안타!"||rules[ruleNumber]==="아웃!"){   //순수 안타, 아웃일 경우
    initScore(rules[ruleNumber]);
    movePlayer=true;
  } else if(baseballRule[rules[ruleNumber]].maxValue < baseballRule[rules[ruleNumber]].curValue+1){ //스트라이크, 볼 max값 넘을때
    rules[ruleNumber] === "스트라이크!" ? initScore("아웃!") : initScore("안타!");
    movePlayer=false;
  } else{ //스트라이크, 볼 누적 여유가 있는 경우
    ++baseballRule[rules[ruleNumber]].curValue;
  }
  printCurrentScore(ruleNumber, movePlayer);
}
// 스트라이크, 볼, 안타, 아웃 random 선택
function pickRandom(){
  return baseballZone(Math.floor(Math.random()*rules.length));
}
// 게임 실행시 제일 상단 message
function introFnc(){
  return "신나는 야구 게임!<br>첫 번째 타자가 타석에 입장했습니다.<br><br>";
}
// 실행
function init(){
  intro.innerHTML = introFnc();

  let curGame = setInterval(()=>{
    pickRandom();
    if(baseballRule["아웃!"].curValue>baseballRule["아웃!"].maxValue){
      clearInterval(curGame);
      endGame.innerHTML = `최종 안타수: ${baseballRule["안타!"].curValue}<br>GAME OVER`;
    }
  }, 1000);
}

init();