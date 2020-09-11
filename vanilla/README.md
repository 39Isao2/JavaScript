# JavaScriptの文法
硬派に素のjsを勉強していきましょう。

## 変数と定数
データを一時的にパソコンのメモリに保存する箱。<br>
簡単に例えると「万能なコップ」「ミネラルウォーター」や「コーラ」が入れられる。<br>
jsの変数には、関数や配列など様々な型が入れられる。

```
"use strict";

// 変数の宣言
let color;

// 変数の代入
color = 'red';

// 変数の宣言(書き方2)
let color = 'red';

/* ES2015以前のバージョンでは
    var color = 'red'; のように
    var が使用されていた。
*/

// 変数の上書き
color = 'blue';


// 定数 (一度代入したら値の変更ができない)
const TAX = 1.10;
TAX = 2.0; // エラー


```
"use strict"; とは<br>
strictモード(厳格モード)について<br>
参考: https://www.sejuku.net/blog/58342



## イベントをバニラjsで
jQueryのon()メソッドが、addEventListenerメソッド
```

document.addEventListener('DOMContentLoaded', () => {
    alert('html読み込み！');
});

// ↑ jQueryだと
$(function(){
    alert('html読み込み！');
});

```

### 要素の取得はquerySelectorメソッドを使う
document.querySelector('body'); <br>
document.querySelector('#target');  <br>

```

// 例:ボタンの取得
document.querySelector('#btn');

// jQueryだと
$('#btn');


```

### 問題！ボタンクリックでbodyの背景を赤にしてみましょう！

```

(ターゲット).addEventListener('イベント名', () => {
    // やりたいこと
});

// ヒント！(背景を赤にするコード)
document.querySelector('body').style.backgroundColor = 'red';


```


## if文 (条件分岐)

```
if (条件式) {
    条件式が成り立った場合にここを通る
}

let num = 100;
if (num > 50) {
    console.log("numは50より大きいです。");
}



/**   elseの使い方  **/

if (条件式) {
    条件式が成り立った場合にここを通る
}else{
    条件式が成り立たなければここを通る
}

let num = 50;

if (num > 100) {
    console.log("numは100より大きいです。");
} else {
    console.log("numは100より小さいです");
}


/**  文字列の一致 **/

let animal = "ねこ";

if(animal == "ねこ"){
    alert('ねこを飼っています。');
} else {
    alert('ねこを飼っていません');
}


```




## 配列

値を順序付けて複数格納できるローカールームのようなもの。<br>
位置を使用して配列にアクセスする（0から数えます）


<img src="https://github.com/55Kaerukun/Processing/raw/master/images/array.jpg" width="500px" style="max-width:100%;">

```
let fruits = ['イチゴ', 'メロン', 'リンゴ', 'バナナ'];

alert(fruits[1]); // メロン

// 配列の末尾に要素を追加する
fruits.push('キウイ');

// 配列の末尾の要素を削除する
fruits.pop();

```


## for文 (繰り返し処理)
カウンタ変数を使った繰り返し処理です。（配列と相性が良い）

```

for ( カウンタ変数定義と初期化 ; 繰り返し回数の指定 ; カウンタ加算幅 ){
   // 実際に実行する処理
}

for (let i = 0; i < 3; i++) {
   console.log(i);
}

結果

// 1
// 2
// 3



// 配列の要素数回す。
let fruits = ['イチゴ', 'メロン', 'リンゴ', 'バナナ'];
for (let i = 0; i < fruits.length; i++) {
   console.log(fruits[i]);
}

 

/* 使用例 */
let fruits = ['イチゴ', 'メロン', 'リンゴ', 'バナナ'];

let fragment = document.createDocumentFragment(); // 後で一気にいれる為の箱
// for文でpタグ大量生成
for(let i =0; i < fruits.length; i++){
    let liTag = document.createElement('p'); // pタグを作成
    let fruit = document.createTextNode(fruits[i]); 
    liTag.appendChild(fruit); //pタグにfruits[i]を挿入
    fragment.appendChild(liTag);  
}

// mainタグを取得
let mainArea = document.querySelector("main");

// 最後に一気に追加！
mainArea.appendChild(fragment);

```


### 時間の扱い

```

// 1秒後に実行
setTimeout(() => {
  document.querySelector('body').classList.add('red');
}, 1000);
    
    
// 繰り返し処理
let num = 0;
let count = () => {
  num ++;
  console.log(num);

  if(num == 10){
    // タイマーが取り消される。
    clearInterval(timer);
  }
};


// 1秒ごとにcount()が発動
let timer = setInterval(count, 1000);
    
```


## 関数
複数の処理をひとまとめにして実行できるようにする機能。<br>
例えると「自動販売」のようなもので、「コインを入れて、ボタンを押すと、何かが出てくる」ような仕組み<br>
解説参考: https://kitsune.blog/function

<br>

    // カフェの設定でいきます。

    let order = () => {
        alert('おはようございます、コーヒーを一杯どうぞ');
    }
    order();
    
    
    // 引数ありver
    let drink = 'カフェラテ';
    
    let order = (drink) => {
        alert('おはようございます、'+  drink + 'を一杯どうぞ');
    }
    
    order(drink);
    
    
    
    // 返り値（return）
    let drink = "コーヒー";
    
    let order = (drink) => {
        let price = 300;
        return price;
    }
    
    // コーヒーの値段
    let coffeePrice = getPrice(drink);
    alert(coffeePrice); // 300
    
    
    
ES6のコードを変換（トランスパイル）<br>
https://barikanblog.com/javascript-es6-babel/ <br>

参考 : 注意！IE11で使えない最新JavaScritコード（ES6）2018年9月24日 <br>
https://blog.capilano-fw.com/?p=1273


<br>
<br>
<br>

