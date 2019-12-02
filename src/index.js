const intro = document.querySelector("#intro");
const play = document.querySelector(".play");
const endGame = document.querySelector("#endGame");
const baseballRule=["스트라이크!", "볼!", "안타!", "아웃!"];

let countGame=0;
let strike=0, ball=0, safty =0, out=0;

function countZone(aBaseball){
  switch(aBaseball){
    case 0: // 스트라이크+아웃일 경우
      if(strike === 2){
        play.innerHTML = play.innerHTML + 
                        `${baseballRule[0]}<br>${baseballRule[3]} 다음 타자가 타석에 입장했습니다.<br>${strike}S ${ball}B ${out}O<br><br>`;
        strike=0;
        ball=0;
        ++safty;
      } else{
        ++strike;
        play.innerHTML = play.innerHTML + 
                        `${baseballRule[aBaseball]}<br>${strike}S ${ball}B ${out}O<br><br>`;
      }
      break;
    case 1: // 볼일 경우
      if(ball===3){
        play.innerHTML = play.innerHTML + 
                        `${baseballRule[2]} 다음 타자가 타석에 입장했습니다.<br>${strike}S ${ball}B ${out}O<br><br>`;
        strike =0;
        ball=0;
        ++safty;
      } else{
        ++ball;
        play.innerHTML = play.innerHTML + 
                        `${baseballRule[aBaseball]}<br>${strike}S ${ball}B ${out}O<br><br>`;
      }
      break;
    case 2: // 안타일 경우
      strike = 0;
      ball = 0;
      ++safty;
      play.innerHTML = play.innerHTML + 
                      `${baseballRule[aBaseball]} 다음 타자가 타석에 입장했습니다.<br>${strike}S ${ball}B ${out}O<br><br>`;
      break;
    case 3: //아웃일 경우
      strike = 0;
      ball = 0;
      ++out;
      play.innerHTML = play.innerHTML + 
                      `${baseballRule[aBaseball]} 다음 타자가 타석에 입장했습니다.<br>${strike}S ${ball}B ${out}O<br><br>`;
      break;
  }
}
function pickRandom(){
  countZone(Math.floor(Math.random()*4));
  ++countGame;
}
// 게임 실행시 제일 상단 message
function introFnc(){
  intro.innerHTML = "신나는 야구 게임!<br>첫 번째 타자가 타석에 입장했습니다.<br><br>";
}
// 실행
function init(){
  introFnc();
  let inter = setInterval(()=>{
    pickRandom();
    if(out>2){
      clearInterval(inter);
      endGame.innerHTML = `최종 안타수: ${safty}<br>GAME OVER`;
    }
  }, 1000);
}

init();