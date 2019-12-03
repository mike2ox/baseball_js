const menuDesc = document.getElementById("menuDesc");
let choice = undefined;

const teams = [{
    id:1,
    name:undefined,
    players:[]
}, {
    id:2,
    name:undefined,
    players:[]
}]
const playerInfo = {
    name:undefined,
    battingAve:0
}

function dataSave(){
    
}

function dataPrint(){

}

function handleSubmit(e){
    e.preventDefault();
    const selectNum = document.getElementById("selectNum");

    // console.log(selectNum.value);
    if(selectNum.value === '1'){
        selectNum.remove();
        menuDesc.innerHTML += 1;
        dataSave();
    } else if(selectNum.value === '2'){
        dataPrint();
    } else{
        alert("잘못된 입력입니다.");
        selectNum.value = '';
    }
}

function init(){
    const menuForm = document.getElementById("menu-form");

    menuDesc.innerHTML = `신나는 야구시합<br>
    1. 데이터 입력<br>2. 데이터 출력<br><br>
    메뉴 선택 (1 - 2) `;
    
    menuForm.addEventListener("submit", handleSubmit);
    
}

init();