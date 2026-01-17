const params = new URLSearchParams(window.location.search);
const game = params.get("g");

if (game === "tictactoe") {
  document.getElementById("title").innerText = "Tic Tac Toe";
  const s = document.createElement("script");
  s.src = "games/tictactoe.js";
  document.getElementById("game-area").appendChild(s);
}
