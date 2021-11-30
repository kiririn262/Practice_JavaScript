'use strict';

// const profile = ['OJK', 'A', 165, 52];
// console.log(`血液型: ${profile[1]}`);  // → 血液型: A

// const obj = { a: 'A', b: 'B', c: 'C' };

// // プロパティ名 a を直接指定する
// console.log(obj.a);     // → A （ドット記法）
// console.log(obj['a']);  // → A （ブラケット記法）

// // プロパティ名 a を定数に代入してから指定する
// const prop = 'a';
// console.log(obj.prop);  // → undefined
// console.log(obj[prop]); // → A
// console.log(obj['prop']); // → undefined

// const obj = { a: 'A', b: 'B', c: 'C' };

// for (const el of obj) {
//   console.log(el);  // → エラー
// }

// const obj = { a: 'A', b: 'B', c: 'C' };

// for (const prop in obj) {
//     // プロパティ名
//     console.log(prop);       // → a → b → c
//     // オブジェクトの値
//     console.log(obj[prop]);  // → A → B → C
// }

// const obj = { a: 'A', b: 'B', c: 'C' };

// for (const [prop, val] of Object.entries(obj)) {
//   console.log(prop); // → a → b → c
//   console.log(val);  // → A → B → C
// }

// const profile = {
//     name: 'OJK',
//     bloodType: 'A',
//     // 配列
//     servants: ['犬', '猿', '雉'],
//     // オブジェクト
//     style: { height: 165, weight: 52, waist: 76 },
//   };

//   console.log(profile.servants[2]);  // → 雉
// console.log(profile.style.height); // → 165

// // profile.servantsは単なる配列
// for (const servant of profile.servants) {
//   console.log(`家来: ${servant}`); // → 家来: 犬 → 家来: 猿 → 家来: 雉
// }

// // profile.styleは単なるオブジェクト
// const myStyle = profile.style;
// for (const prop in myStyle) {
//   console.log(`${prop} is ${myStyle[prop]}`); // → height is 165 → 略
// }

// // Object.entriesを使ってfor-of文で書く
// for (const [prop, val] of Object.entries(profile)) {
//   if (prop == 'name' || prop == 'bloodType') {
//     console.log(`${prop}は${val}です`);
//   }
// }

const evList = [
    { name: 'サンダース', type: 'でんき', weight: 24.5, ability: 'ちくでん' },
    { name: 'ブースター', type: 'ほのお', weight: 25.0, ability: 'もらいび' },
    { name: 'エーフィ', type: 'エスパー', weight: 26.5, ability: 'シンクロ' },
    { name: 'ブラッキー', type: 'あく', weight: 27.0, ability: 'シンクロ' },
    { name: 'リーフィア', type: 'くさ', weight: 25.5, ability: 'リーフガード' },
    { name: 'ニンフィア', type: 'フェアリー', weight: 23.5, ability: 'メロメロボディ' },
    { name: 'グレイシア', type: 'こおり', weight: 25.9, ability: 'ゆきがくれ' },
    { name: 'シャワーズ', type: 'みず', weight: 29.0, ability: 'ちょすい' },
  ];

//   for (const ev of evList) {
//     console.log(`${ev.name}のタイプは${ev.type}です`);
//   }

//   const dazoList = evList.map((ev) => `${ev.name}だぞ`);
// for (const n of dazoList) {
//   console.log(n); // 'サンダースだぞ' →　'ブースターだぞ' → ...
// }

// const nameList = evList
//   .filter((ev) => ev.weight > 25) // 条件式でオブジェクトを抽出
//   .map((ev) => `${ev.name}（${ev.weight}kg）`);  // 加工

// // nameListは普通の配列
// for (const n of nameList) {
//   console.log(n);  // エーフィ（26.5kg） → ブラッキー（27.0kg) → ...
// }

evList
  .filter((ev) => ev.weight > 25)
  .map((ev) => `${ev.name}（${ev.weight}kg）`)
  .forEach((ev) => {
    console.log(ev);
  });

//   for (const ev of evList) {
//     if (ev.weight > 25) {
//       console.log(`${ev.name}（${ev.weight}kg）`);
//     }
//   }