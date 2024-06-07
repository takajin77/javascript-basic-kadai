// 変数を規定する1~100までのランダムを生み出す
let num=Math.floor(1+Math.random()*101);

// let num =10;
// 確認用
console.log(num);

if (num%3===0 && num%5===0) {
  console.log('3と5の倍数です');
}
else if (num%3===0) {
  console.log('3の倍数です');
}
else if (num%5===0) {
  console.log('5の倍数です');
}
else {
  console.log(num);
}
