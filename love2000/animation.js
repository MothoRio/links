const lyrics = [
    "愛はどこからやってくるのでしょう", "自分の胸に問いかけた", "食べてみなくちゃ分からない事",
    "出会いの引力はどれほどか", "愛はどこからやってくるのでしょう", "自分の胸に問いかけた",
    "ニセモノなんか興味はないワ", "ホンモノだけ見つけたい", "あなたをずっと探してた",
];

let index = 0;
const textElement = document.getElementById("lyrics");
const buttonElement = document.getElementById("restart");


function changeText() {
    if (index < lyrics.length) {
      textElement.style.opacity = 0; // フェードアウト
      setTimeout(() => {
        textElement.textContent = lyrics[index];
        textElement.style.opacity = 1; // フェードイン
        index++;
        setTimeout(changeText, 4640); // 次のテキストを表示
      }, 1000); // 1秒後にテキストを変更
    }
  }

changeText(); // 初回実行

buttonElement.addEventListener("click", () => {
  index = 0;
  changeText();
});