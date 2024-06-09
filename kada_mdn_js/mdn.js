// 本日の日付
const date = new Date();
console.log(date);
// 年/月/日を取得
const [month, day, year] = [
  date.getMonth()+1,
  date.getDate(),
  date.getFullYear(),
];
// 表示
console.log(year+'年'+month+'月'+day+'日');