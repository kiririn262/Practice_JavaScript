// 定義していない変数があるとエラー
'use strict';

// console.log(10 + 5); //15
// console.log((10 + 5) * 2 / 5 + 4);  // → 10
// console.log(-5 + 8);  // → 3
// console.log(2 ** 3);  // → 8
// console.log(10 % 3);  // → 1（10÷3は3余り1）

// console.log('Hello' + ' ' + 'World' + '!!'); // → Hello World!!
// console.log('1たす1は' + 2); // →　1たす1は2

// // BMI：体重[kg]/(身長[m]*身長[m])
// console.log('体重' + 50 + 'kg／身長' + 155 + 'cmのBMI：');
// console.log(55 / (1.65 * 1.65)); // → 20.20..

// // 定数／constant variable
// const weight = 50, height = 1.55;
// console.log('体重' + weight + 'kg／身長' + height * 100 + 'cmのBMI：');
// console.log(weight / (height * height)); // → 20.20..

// const who = 'World!!';
// console.log('Hello ' + who);
// console.log('Good Morning! ' + who);

// // 変数／variable
// let weight = 50;
// weight = 60; // 代入によって値を変更している

// let who = 'World!!';
// console.log('Hello ' + who);
// who = "everyone!!";
// console.log('Good Morning! ' + who);

// // 代入演算子
// let x = 10;
// x += 5 // x = x + 5;
// console.log(x); // → 15

// // インクリメント・デクリメント
// let x = 0;
// x++;
// console.log(x); // → 1
// x--;
// console.log(x); // → 0

// // リテラル （TypeScriptのみ）
// const name: string = 'OJK';
// let price: number;
// price = 400;
// price = '400yen';  // 変数priceはNumber型なのでエラーになる