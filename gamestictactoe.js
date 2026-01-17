const area = document.getElementById("game-area");
area.innerHTML = '<div id="board"></div><br><button onclick="reset()">Restart</button>';

let turn = "X";
const board = document.getElementById("board");

for (let i = 0; i < 9; i++) {
  const btn = document.createElement("button");
  btn.style.width = "80px";
  btn.style.height = "80px";
  btn.style.fontSize = "30px";
  btn.onclick = () => {
    if (btn.innerText === "") {
      btn.innerText = turn;
      turn = turn === "X" ? "O" : "X";
    }
  };
  board.appendChild(btn);
}

function reset() {
  location.reload();
}
