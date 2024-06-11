
// Javascriptで'btn'を押したとき使えるように変数宣言
const btn =document.getElementById('btn')

// クリックしたときに、'text'内の文字列を変更する
btn.addEventListener('click',() =>{
  document.getElementById('text').textContent='ボタンをクリックしました';

});