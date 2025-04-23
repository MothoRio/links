const lyrics = [
    "愛はどこからやってくるのでしょう", "自分の胸に問いかけた", "食べてみなくちゃ分からない事",
    "出会いの引力はどれほどか", "愛はどこからやってくるのでしょう", "自分の胸に問いかけた",
    "ニセモノなんか興味はないワ", "ホンモノだけ見つけたい", "あなたをずっと探してた",
];

let index = 0;
let timerId = null;  // `setTimeout` のIDを管理
let isRunning = true;  // 実行中かどうかのフラグ
const textElement = document.getElementById("lyrics");
const buttonElement = document.getElementById("restart");


function changeText() {
  if (index >= lyrics.length) {
      isRunning = false; // すべての歌詞を表示し終わったら実行を停止
      return;
  }

  textElement.style.opacity = 0; // フェードアウト
  setTimeout(() => {
      textElement.textContent = lyrics[index];
      textElement.style.opacity = 1; // フェードイン
      index++;
      timerId = setTimeout(changeText, 4640); // 次の歌詞へ
  }, 1000);
}

function restartLyrics() {
  if (isRunning) {
      clearTimeout(timerId);  // 既存の処理をクリア
  }

  index = 0;
  isRunning = true;  // 実行中フラグをセット
  changeText();  // 再スタート
}

changeText(); // 初回実行

buttonElement.addEventListener("click", restartLyrics);