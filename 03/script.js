'use strict';

// // テンプレート構文
// const bmi = 27;
// console.log(`あなたのBMIは${bmi}です`);

// console.log(`身長：${height} 体重：${weight} → BMIは${bmi}です`);
// console.log('身長：' + height + ' 体重：' + weight + '→ BMIは' + bmi + 'です');

// // if 文／if statement
// const bmi = 27;
// console.log(`あなたのBMIは${bmi}：`);

// // 条件分岐
// if (bmi > 25) {
//   console.log('肥満です');
// }

// const bmi = 20;  // 25以下
// console.log(`あなたのBMIは${bmi}：`);

// if (bmi > 25) {  // 条件が満たされない
//   console.log('肥満です');  // この部分は実行されない
// }

// // 比較演算子
// const num1 = 5;
// const num2 = 10;

// if (num1 >= num2) {
//   console.log('num1 は num2 以上の値です');
// }
// const message = 'Thank you';

// if (message == 'Thank you') {
//   console.log('Thank you, too');
// }

// // JavaScriptは数値（Number 型）と数字（String 型）を区別しない
// const num = 10;  // Number型
// const strNum = '10';  // String型

// if (num == strNum) {
//   console.log('文字列の10と数値の10は等しい');  // 表示される
// }
// // JavaScript にも「数値」と「数字」を区別する厳格な等価演算子 === と !==がある

// const bmi = 19;
// // if (18.5 <= bmi < 25)はできない
// // 二重構文
// if (bmi >= 18.5) {
//     // ここにはBMIが18.5以上の場合だけ到達する
//     if (bmi < 25) {
//       // ここにはBMIが18.5以上かつ25未満の場合だけ到達する
//       console.log('適正体重です');
//     }
//   }
// // 論理演算子
// if (bmi >= 18.5 && bmi < 25) {
//     console.log('適正体重です');
//   }

// const bmi = 27;
// console.log(`あなたのBMIは${bmi}：`);

// if (bmi > 25) {
//   console.log('肥満です');  // 25より大きいときに表示
// } else if (bmi < 18.5) {
//   console.log('低体重です');  // 18.5より小さいときに表示
// } else {
//   console.log('適正体重です');  // 25以下のときに表示
// }

// 三項演算子
// const 定数 = 条件式 ? A : B;
// A … 条件式が満たされたときに代入される値
// B … 条件式が満たされなかったときに代入される値

// const msg = bmi > 25 ? '肥満です' : '肥満ではありません';
// console.log(msg);

// 'use strict';

// // 入力ダイアログから値を指定する
// const bmi = window.prompt('BMIの値を入力してください');
// console.log(`あなたのBMIは${bmi}：`);

// if (bmi > 25) {
//   console.log('肥満です');  // 25より大きいときに表示
// } else if (bmi < 18.5) {
//   console.log('低体重です');  // 18.5より小さいときに表示
// } else {
//   console.log('適正体重です');  // 25以下のときに表示
// }

// const p_element = document.querySelector('p');
// console.log(p_element.textContent);
// p_element.textContent = '置き換えたい値';

// 'use strict';

const bmi = window.prompt('BMIの値を入力してください');
// const p_element = document.querySelector('p');
const p_element = document.getElementById('message')
// console.log(`あなたのBMIは${bmi}：`);
p_element.textContent = `あなたのBMIは${bmi}：`;

if (bmi > 25) {
  p_element.textContent += '肥満です';
} else if (bmi < 18.5) {
  p_element.textContent += '低体重です';
} else {
  p_element.textContent += '適正体重です';
}

// // エレメントを呼び出す(getElementById)
// const element = document.querySelector('p');
// console.log(element.textContent);  // → 1番目のp要素
// const element = document.getElementById('second');
// // const element = document.getElementById('message')
// console.log(element.textContent);  // → 2番目のp要素
//該当する全ての要素を呼び出す querySelectorAll 配列
// class 属性や name 属性、タグ名で要素を呼び出すメソッドもある
// querySelector メソッドの引数にCSS セレクタ が使用できる
// querySelector('p:nth-child(2)')
// CSSセレクタ：https://developer.mozilla.org/ja/docs/Web/CSS/CSS_Selectors