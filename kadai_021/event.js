
// ボタンをJavascriptで使用できるように変数宣言
const btn = document.getElementById('btn');

// クリックイベント処理
btn.addEventListener('click' ,()=> {
  // 2秒(2000msec)タイマーを入れる
  setTimeout(()=>{
    document.getElementById('text').textContent='ボタンをクリックしました';
  } ,2000);
});