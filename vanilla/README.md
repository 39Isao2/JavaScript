# JavaScript道場
硬派に素のjsを勉強していきましょう。

## 変数と定数
データを一時的にパソコンのメモリに保存する箱。<br>
簡単に例えると「万能なコップ」「ミネラルウォーター」や「コーラ」が入れられる。<br>
そしてjsの変数には、なぜかコップに「東京都」などが入れられる<br>

```

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


// 問題！ボタンクリックでbodyの背景を赤にしてみましょう！（ちょっと難しいけどjs理解！）

(ターゲット).addEventListener('イベント名', () => {
    // やりたいこと
});



// ヒント！(背景を赤にするコードはこの2行)
let bgColor = 'red';
document.querySelector('body').style.backgroundColor = 'red';


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


//配列の要素数回す。

for (let i = 0; i < fruits.length; i++) {
   console.log( fruits[i] );
}


```

## if文 (条件分岐)

## 関数
複数の処理をひとまとめにして実行できるようにする機能。<br>
例えると「自動販売」のようなもので、「コインを入れて、ボタンを押すと、何かが出てくる」ような仕組み<br>
解説参考: https://kitsune.blog/function


<br>
<img src="http://hareumi.com/jskouza/sutaba.png" width="150px">
<br>

    // カフェの設定でいきます。

    
    // アロー関数で書いてみよう！
    let order = () => {
        alert("おはようございます、コーヒーを一杯どうぞ");
    }
    order();
    
    
    // 引数ありver
    let drink = "カフェラテ";
    let order = (drink) => {
        alert("おはようございます、"+  drink +" を一杯どうぞ");
    }
    order(drink);
    
    
    
    // 返り値（return）
    let drink = "コーヒー";
    
    let order = (drink) => {
        let price = 290;
        return price;
    }
    
    // コーヒーの値段
    let coffeePrice = getPrice(drink);
    alert(coffeePrice); // 290
    
    
    
    setTimeout(() => {
      document.querySelector('.target').classList.add('fadeout');
    }, 1000);
    
ES6のコードを変換（トランスパイル）<br>
https://barikanblog.com/javascript-es6-babel/ <br>

参考 : 注意！IE11で使えない最新JavaScritコード（ES6）2018年9月24日 <br>
https://blog.capilano-fw.com/?p=1273


<br>
<br>
<br>

