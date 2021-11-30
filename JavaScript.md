# javascriptのチートシート

JavaScriptの備忘録

より詳しく知りたいなら分かりやすく解説されている参考を見るべし

## 01. おまじない

```js
// 定義していない変数があるとエラー
'use strict';
```

## 02. document : HTMLドキュメントに対する操作

### HTMLのテキストを追加

``` js
document.write('Hello World!!');
```

### HTMLのPタグを指定してテキストを書き換える

``` js
document.querySelector('p').textContent = 'Hello World!!';
```

### エレメントを呼び出す(getElementById)

```js
const element = document.querySelector('p');
console.log(element.textContent);  // → 1番目のp要素

// idを指定して呼び出す <p id="second">
const element = document.getElementById('second');
console.log(element.textContent);  // → 2番目のp要素

// idを指定して呼び出す <p id="message">
 const element = document.getElementById('message')
```

該当する全ての要素を呼び出す querySelectorAll 配列
class 属性や name 属性、タグ名で要素を呼び出すメソッドもある

querySelector メソッドの引数にCSS セレクタ が使用できる

```js
querySelector('p:nth-child(2)')
```

CSSセレクタ：https://developer.mozilla.org/ja/docs/Web/CSS/CSS_Selectors

### エレメントの生成(createElement)

```js
const element = document.createElement('p');
```

### 生成したエレメントをHTMLに追加する(appendChild)

```js
const element = document.createElement('p');
element.textContent = 'Hello World!!';
// エレメントは querySelector なり getElementById で呼び出してくる必要がある
main = document.querySelector('main');
document.main.appendChild(element);
// body 要素だけは特別に（呼び出さずとも）最初から用意されている
document.body.appendChild(element);
```

## 03. window : ブラウザのウィンドウに対する操作

### Windowのポップアップで表示する

``` js
window.alert('Hello World!!');
```

### Windowの入力ダイアログから値を指定する

```js
const bmi = window.prompt('BMIの値を入力してください');
```

## 04. console : ブラウザのコンソールに対する操作

### コンソールにログ表示

``` js
console.log('Hello World!!');
```

## 05. 変数

### 定数／constant variable

``` js
const weight = 50, height = 1.55;
console.log('体重' + weight + 'kg／身長' + height * 100 + 'cmのBMI：');
console.log(weight / (height * height)); // → 20.20..

const who = 'World!!';
console.log('Hello ' + who);
console.log('Good Morning! ' + who);
```

### 変数／variable

``` js
let weight = 50;
weight = 60; // 代入によって値を変更している

let who = 'World!!';
console.log('Hello ' + who);
who = "everyone!!";
console.log('Good Morning! ' + who);
```

### テンプレート構文

バッククォートで囲むことで${変数}と記述可能

```js
const bmi = 27;
console.log(`あなたのBMIは${bmi}です`);

console.log(`身長：${height} 体重：${weight} → BMIは${bmi}です`);
console.log('身長：' + height + ' 体重：' + weight + '→ BMIは' + bmi + 'です');
```

## 06. if文について

JavaScriptは数値（Number型）と数字（String型）を区別しない

```js
const num = 10;  // Number型
const strNum = '10';  // String型

if (num == strNum) {
  console.log('文字列の10と数値の10は等しい');  // 表示される
}
```

JavaScriptにも「数値」と「数字」を区別する厳格な等価演算子 === と !==がある

### 三項演算子

```js
const 定数 = 条件式 ? A : B;
// A … 条件式が満たされたときに代入される値
// B … 条件式が満たされなかったときに代入される値

const msg = bmi > 25 ? '肥満です' : '肥満ではありません';
console.log(msg);
```

### if文の例

```js
'use strict';
// 入力ダイアログで値を指定
const bmi = window.prompt('BMIの値を入力してください');

// HTMLのPタグを指定
// const p_element = document.querySelector('p');
// 属性で指定
const p_element = document.getElementById('message')

// 指定したPタグのテキストに出力
p_element.textContent = `あなたのBMIは${bmi}：`;

// 分岐で追記
if (bmi > 25) {
  p_element.textContent += '肥満です';
} else if (bmi < 18.5) {
  p_element.textContent += '低体重です';
} else {
  p_element.textContent += '適正体重です';
}
```

## 07. for文について

### for文の例

```js
'use strict';

for (let i = 0; i < 5; i += 1) {
    console.log('Hello World!!');
}

for (let biscuit = 1; biscuit <= 128; biscuit *= 2) {
    console.log(`ポケットを叩くとビスケットが${biscuit}つ`);
}

for (let a = 1; a <= 9; a += 1) {
    for (let b = 1; b <= 9; b += 1) {
        console.log(`${a} × ${b} = ${a * b}`);
    }
}

for (let num = 1; num <= 10; num += 1) {
    let str;
    if (num % 2 == 0) {
      str = '偶数';
    } else {
      str = '奇数';
    }
    console.log(`${num}は${str}です`);
  }

for (let num = 1; num <= 10; num += 1) {
    if (num % 5 == 0) {
      break; // → for文から抜け出す（続きは実行されない）
    }
    console.log(num); // → 1 → 2 → 3 → 4
  }
  console.log('for文から出ました');
```

### for-of文

ループ定数

```js
for (const data of [1, 2, 'dog!', 1, 2, 'cat!']) {
    console.log(data); // 1 → 2 → dog! → 1 → 2 → cat!
  }

for (const servant of ['犬', '猿', '雉']) {
    for (let n = 1; n <= 3; n += 1) {
      console.log(`${servant}${n}号！`);
    }
  }
```

### for文によるHTMLのListタグ生成

```js
const ul = document.getElementById('list');
for(let i = 0; i < 5; i++){
    const li_element = document.createElement('li');
    // li_elementは定数，textContentは変数
    li_element.textContent = `子要素${i}号`;
    ul.appendChild(li_element);
}
```

## 08. 配列

### 配列／arrayの宣言

```js
// 定数
const array = [1, 2, 'dog!', 1, 2, 'cat!'];

// 変数
let array = [1, 2, 'dog!', 1, 2, 'cat!'];
```

```js
console.log(array[0]); // → 1

const animal = array[2];
console.log(animal); // → dog!

// arrayの“要素”は定数ではないので代入可
array[3] = 'pig!';
array[4] += array[0];
console.log(array); // → [1, 2, 'dog!', 'pig!', 3, 'cat!']

// arrayは定数なので代入できないエラー
array = [1, 2, 3, 'dah', '!!'];
```

### 連続で処理

```js
const array = [1, 2, 3, 'dah', '!!'];

for (let i = 0; i < 5; i += 1) {
  console.log(array[i]); // → 1, 2, 3, dah, !!
  array[i] = i;  // 要素の値の書き換え
}

console.log(array); // → [0, 1, 2, 3, 4]
```

#### 長さ(length)

```js
console.log(array.length); // → 5

const array = [1, 2, 3, 'dah', '!!'];
// 配列の要素数だけループ処理
for (let i = 0; i < array.length; i += 1) {
  console.log(array[i]);
}
```

JavaScriptの配列は途中で長さを変えることができる（要素を追加したり削除したりすることができる）のでlengthを使うのがよい

#### 配列はfor-of文

lengthプロパティやインデックスを使わず簡潔に書けるのでfor-of文を使うのが一般的

```js
const array = [1, 2, 3];
for (const el of array) {
  console.log(el);  // 1 → 2 → 3
  // ループ定数（el）は定数なので代入はできない
  // el = 'Hello World!!';
}
```

配列の要素書き換えにはfor文で行うよりmapメソッドの方がよい

### 要素の追加

末尾要素のインデックスを指定して追加
lengthを使うことで間違いなく末尾に追加できる

```js
const array = [0, 1, 2, 3];
// array[4] = 'end';
array[array.length] = 'end';
console.log(array); // → [0, 1, 2, 3, 'end']
```

抜かされてしまった要素には “undefined”（未定義）という値が入る
（Chromeではemptyと表記されるが正しくはundefined）

```js
array[5] = 'end';
console.log(array); // → [0, 1, 2, 3, empty, 'end']
console.log(array[4]); // → undefined
```

**Tips**

```js
//undefinedの例
let x;  // 初期値なしで変数宣言
console.log(x);  // → undefined

// undefinedはデータ型なので''などの引用符で囲わない
if (x == undefined) {
  console.log('xが未定義だよ');
}
```

### 配列の基本メソッド

#### 配列の先頭や末尾に要素を追加／削除するメソッド

末尾要素の追加（push）と削除（pop）、先頭要素の追加（unshift）と削除（shift）

```js
const array = [1, 2, 3];

array.push(4);     // 末尾に追加 [1, 2, 3, 4]
array.unshift(0);  // 先頭に追加 [0, 1, 2, 3, 4]
array.pop();       // 末尾の要素を削除 [0, 1, 2, 3]
array.shift();     // 先頭の要素を削除 [1, 2, 3]

// 要素の取り出し
const tail = array.pop();
console.log(tail);  // → 3

let head = array.shift();
console.log(head);  // → 1

console.log(array)
```

#### 配列の途中に要素を挿入・削除するspliceメソッド

```js
const array = [1, 2, 3];

// 配列.splice(インデックス, 0, 挿入する要素) // 挿入
array.splice(1, 0, 'A');  // インデックス 1 に'A'を挿入 [1, 'A', 2, 3]

// 配列.splice(インデックス, 1) // 削除（抽出）
array.splice(2, 1);       // インデックス 2 を削除 [1, 'A', 3]

// 配列のインデックス -1 は末尾要素を示す
array.splice(-1, 1) // 末尾要素を削除
```

#### indexOfメソッド

引数で指定した値を配列が持っているか照合し、持っていた場合はそのインデックスを戻り値として返します。一致するものがなかった場合は -1を返します。

```js
const インデックス = 配列.indexOf(照合する値)

// 特定の値を削除する
const array = ['a', 'b', 'c'];

const index = array.indexOf('b'); // 戻り値：1
if (index != -1) {
  array.splice(index, 1);  // → ['a', 'c']
}
```

#### ラムダ式／Lambda expression
メソッドを「.」でつなげることで処理を連続して適用できる利点
（map, filter, reduce, some, every, findなど）
繰り返し処理を for ブロックに入れずに “式” として書ける利点

**mapメソッド**
元の配列の各要素を加工して新しい配列を作りだす

```js
const 新しい配列 = 元の配列.map((要素) => 加工処理);

// 配列の各要素の後ろに「号」という文字を付ける
const array = [1, 2, 3];

const newArray = array.map((el) => el + '号');
console.log(newArray);  // → [1号, 2号, 3号]
```

**filterメソッド**
元の配列から条件を満たした要素だけを抽出して新しい配列を作り出す

```js
const 新しい配列 = 元の配列.filter((要素) => 抽出条件);

// 1 ～ 5 の値を持った配列から 3 より大きい値を抽出し、新しい配列として生成
const array = [1, 2, 3, 4, 5];

const newArray = array.filter((el) => el > 3);
console.log(newArray);  // → [4, 5]
```

**連続処理**
filterとmapを同時に行う

```js
const array = [1, 2, 3, 4, 5];

const newArray = array.filter((el) => el > 3).map((el) => el + '号');
console.log(newArray);  // → [4号, 5号]
```

**Lambda式や三項演算子は重要**

## 09. オブジェクト

各要素にキーワードを設定して、そのキーワードで要素を選択

```js
{ プロパティ名: 値, プロパティ名: 値, ... }
// アクセス法は2種類
オブジェクト.プロパティ名    // ドット記法
オブジェクト['プロパティ名'] // ブラケット記法
profile.bloodType
profile['bloodType']


const profile = { name: 'OJK', bloodType: 'A', height: 165, weight: 52 };
console.log(`血液型: ${profile['bloodType']}`); // → 血液型: A
```

ブラケット法は文字列で指定している
```js
const obj = { a: 'A', b: 'B', c: 'C' };

// プロパティ名 a を直接指定する
console.log(obj.a);     // → A （ドット記法）
console.log(obj['a']);  // → A （ブラケット記法）

// プロパティ名 a を定数に代入してから指定する
const prop = 'a';
console.log(obj.prop);  // → undefined
console.log(obj[prop]); // → A
console.log(obj['prop']); // → undefined
```

### for-in文

```js
for (const プロパティ名 in オブジェクト)

const obj = { a: 'A', b: 'B', c: 'C' };

for (const prop in obj) {
  // プロパティ名
  console.log(prop);       // → a → b → c
  //オブジェクトの値
  console.log(obj[prop]);  // → A → B → C
}
```

### for-of文でも使えるように
 for-of文で統一したい…という人は、Object.entriesメソッド

```js
for (const [プロパティ名, 値] of Object.entries(オブジェクト))

const obj = { a: 'A', b: 'B', c: 'C' };

for (const [prop, val] of Object.entries(obj)) {
  console.log(prop); // → a → b → c
  console.log(val);  // → A → B → C
}
```

###  forEachメソッド

```js
配列.forEach((要素) => 処理);

evList
  .filter((ev) => ev.weight > 25)
  .map((ev) => `${ev.name}（${ev.weight}kg）`)
  .forEach((ev) => {
    console.log(ev);
  });
```

# 参考

- [文系大学生のためのJavaScript入門](https://zenn.dev/ojk/books/intro-to-javascript/viewer/js-loop)
