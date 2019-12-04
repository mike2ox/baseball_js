const span = document.createElement("span");
const input = document.createElement("input");

const teams = [
  {
    id: 1,
    name: undefined,
    maxNum: 9,
    players: []
  },
  {
    id: 2,
    name: undefined,
    maxNum: 9,
    players: []
  }
];
const playerInfo = {
  name: undefined,
  battingAve: 0
};

function handleInfoSubmit() {}

function dataSave() {
  const li = document.createElement("ul");
  const infoSpan = document.createElement("span");
  const form = document.createElement("form");

  for (let num = 1; num <= teams[0].maxNum; ++num) {
    infoSpan.innerText = `${num} 번 타자 정보 입력>`;

    form.appendChild(infoSpan);
    form.appendChild(input);
    li.appendChild(form);
    form.addEventListener("submit", e => {
      e.preventDefault();
      console.log(input.value);
    });
  }
}

function dataPrint() {}

function handleSubmit(e) {
  e.preventDefault();

  switch (input.value) {
    case "1":
      input.setAttribute("disabled", "false");
      input.setAttribute("readonly", "true");
      dataSave(input.value);
      break;
    case "2":
      input.setAttribute("disabled", "false");
      input.setAttribute("readonly", "true");
      dataPrint();
      break;
    default:
      alert("정상 선택지가 아닙니다.");
      input.value = "";
  }
}

function setInputAtt(info) {
  if ("disabled" in info.attributes)
    info.attributes.removeNamedItem("disabled");
  if ("readonly" in info.attributes)
    info.attributes.removeNamedItem("readonly");

  info.setAttribute("id", "selectNum");
  info.setAttribute("type", "text");
  info.setAttribute("style", "border:0px;");
  info.setAttribute("autocomplete", "off");
}

function showMenu() {
  const menuSelect = document.querySelector(".menu-select");
  const form = document.createElement("form");

  form.setAttribute("method", "get");
  form.setAttribute("id", "menuform");
  menuSelect.setAttribute("style","padding-left: 0px;" );

  setInputAtt(input);
  span.innerHTML = `신나는 야구시합<br>1. 데이터 입력<br>2. 데이터 출력<br><br>
                      메뉴 선택 (1 - 2)`;

  form.appendChild(span);
  form.appendChild(input);
  menuSelect.appendChild(form);
  form.addEventListener("submit", handleSubmit);
}

function init() {
  showMenu();
}

init();
