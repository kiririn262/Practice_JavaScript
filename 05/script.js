'use strict';

// // 配列の宣言
// const array = [1, 2, 'dog!', 1, 2, 'cat!'];

// console.log(array[0]); // → 1
// const animal = array[2];
// console.log(animal); // → dog!
// array[3] = 'pig!';   // arrayの“要素”は定数ではないので代入可
// array[4] += array[0];
// console.log(array); // → [1, 2, 'dog!', 'pig!', 3, 'cat!']

// array = [1, 2, 3, 'dah', '!!'];  // arrayそのものは定数なのでエラー

// const array = [1, 2, 3, 'dah', '!!'];

// for (let i = 0; i < 5; i += 1) {
//   console.log(array[i]); // → 1, 2, 3, dah, !!
//   array[i] = i;  // 要素の値の書き換え
// }

// console.log(array); // → [0, 1, 2, 3, 4]

// console.log(array.length); // → 5

// const array = [0, 1, 2, 3];
// // array[4] = 'end';
// array[array.length] = 'end';
// console.log(array); // → [0, 1, 2, 3, 'end']

// const array = [0, 1, 2, 3];
// array[5] = 'end';
// console.log(array); // → [0, 1, 2, 3, empty, 'end']
// console.log(array[4]); // → undefined

// //undefinedの例
// let x;  // 初期値なしで変数宣言
// console.log(x);  // → undefined

// if (x == undefined) {
//   console.log('xが未定義だよ');
// }

// const array = [1, 2, 3];

// array.push(4);     // 末尾に追加 [1, 2, 3, 4]
// array.unshift(0);  // 先頭に追加 [0, 1, 2, 3, 4]
// array.pop();       // 末尾の要素を削除 [0, 1, 2, 3]
// array.shift();     // 先頭の要素を削除 [1, 2, 3]

// // 要素の取り出し
// const tail = array.pop();
// console.log(tail);  // → 3

// let head = array.shift();
// console.log(head);  // → 1

// const array = [1, 2, 3];

// // 配列.splice(インデックス, 0, 挿入する要素) // 挿入
// array.splice(1, 0, 'A');  // インデックス 1 に'A'を挿入 [1, 'A', 2, 3]

// // 配列.splice(インデックス, 1) // 削除（抽出）
// array.splice(2, 1);       // インデックス 2 を削除 [1, 'A', 3]

// console.log(array)

// <演習> ----------------------------------------------
'use strict';

// const etoList = ['ネズミ', 'ウシ', 'トラ', 'ウサギ'];

// // ul要素を呼び出す（定数ul）
// const ul = document.getElementById('list');

// for (const eto of etoList) {
//   // liエレメントを生成（定数li）
//   const li = document.createElement('li');
//   // liエレメントの内容を配列arrayの各要素に
//   li.textContent = eto;
//   // liエレメントをulエレメントの子要素にする
//   ul.appendChild(li);
// }

// // 配列を同時に扱う場合はfor文が活躍
// for (let i = 0; i < etoList.length; i += 1) {
//     const li = document.createElement('li');
//     li.textContent = etoList[i];  // 配列要素をインデックスで指定する
//     ul.appendChild(li);
// }

const numList = [1, 2, 3, 4, 5, 6, 7, 8];
// //for-ofで表記
// const ul = document.getElementById('list');
// for(const num of numList){
//     if(num % 2 == 0){
//         const li = document.createElement('li');
//         li.textContent = 'No.' + num;
//         ul.appendChild(li);
//     }
// }

// Lambda式で表記
const evenList = numList.filter((num) => num % 2 == 0).map((even) => 'No.' + even)

// ul要素を呼び出す（定数ul）
const ul = document.getElementById('list');

// 出力
for (const num of evenList) {
    const li = document.createElement('li');
    li.textContent = num;
    ul.appendChild(li);
}
// console.log(evenList);