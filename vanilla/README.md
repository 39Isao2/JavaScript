# JavaScript道場

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

### イベントをバニラjsで

```

// jQueryのon()メソッドがaddEventListenerメソッド

document.addEventListener('DOMContentLoaded', () => {
    alert('html読み込み！');
});

// ↑ jQueryだと
$(function(){
    alert('html読み込み！');
});


// 要素の取得はquerySelectorメソッドを使う
document.querySelector('body');
document.querySelector('#target');



// 問題！ボタンクリックでbodyの背景を赤にしてみましょう！
// ヒント
let bgColor = 'red';
document.querySelector('body').style.backgroundColor = bgColor;


```
