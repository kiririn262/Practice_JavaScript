'use strict';

// console.log('Hello World!!');

// // for文
// for (let i = 0; i < 5; i += 1) {
//     console.log('Hello World!!');
//   }

// for (let biscuit = 1; biscuit <= 128; biscuit *= 2) {
//     console.log(`ポケットを叩くとビスケットが${biscuit}つ`);
//   }

// for (let a = 1; a <= 9; a += 1) {
//     for (let b = 1; b <= 9; b += 1) {
//       console.log(`${a} × ${b} = ${a * b}`);
//     }
//   }

// for (let num = 1; num <= 10; num += 1) {
//     let str;
//     if (num % 2 == 0) {
//       str = '偶数';
//     } else {
//       str = '奇数';
//     }
//     console.log(`${num}は${str}です`);
//   }

// for (let num = 1; num <= 10; num += 1) {
//     if (num % 5 == 0) {
//       break; // → for文から抜け出す（続きは実行されない）
//     }
//     console.log(num); // → 1 → 2 → 3 → 4
//   }
//   console.log('for文から出ました');

// for-of 文
// ループ定数
// for (const data of [1, 2, 'dog!', 1, 2, 'cat!']) {
//     console.log(data); // 1 → 2 → dog! → 1 → 2 → cat!
//   }

// for (const servant of ['犬', '猿', '雉']) {
//     for (let n = 1; n <= 3; n += 1) {
//       console.log(`${servant}${n}号！`);
//     }
//   }

// エレメントの生成(createElement)
// const element = document.querySelector('p'); もしくは const element = document.getElementById('message');

// const element = document.createElement('p');
// element.textContent = 'Hello World!!';
// console.log(element.textContent);

// 生成したエレメントを HTML に追加する(appendChild)
// const element = document.createElement('p');
// element.textContent = 'Hello World!!';
// document.body.appendChild(element);
// エレメントは querySelector なり getElementById で呼び出してくる必要があるはずですが、body 要素だけは特別に（呼び出さずとも）最初から用意されている

// const element = document.createElement('p');
// element.textContent = 'Hello World!!';
// main = document.querySelector('main');
// document.main.appendChild(element);

const ul = document.getElementById('list');
for(let i = 0; i < 5; i++){
    const li = document.createElement('li')
    // liは定数，textContentは変数
    li.textContent = `子要素${i}号`;
    ul.appendChild(li);
    //const li_element = document.createElement('li');
    //li_element.textContent = `子要素${i}号`;
    //ul.appendChild(li_element);
}