# 初めてのJavaScript
入門！JavaScript<br><br>
<img src="https://github.com/55Kaerukun/img/blob/master/20170123165644.png" width="100px">
<br>

## 何はともあれ、とりあえず書いてみよう！
alert関数（windowにポップアップを表示。）<br>

```
<script>
    alert('こんにちはJavaScript');
</script>

// javaScriptはhtmlの中に記述する場合は  <script>タグから</script>  の中に記述します。
```

<br>
<br>
<br>

## JavaScriptとは
1995年 NetScape社のブレダン・アイク氏が開発。（ポケモン赤、緑と同い年）<br><br>
<img src="https://github.com/55Kaerukun/img/blob/master/fushigi.png" width="120px"><br><br>
もともとは「Webページを動かす」ことを目的に作られたが、<br>
今や「サーバーとのデータのやりとり」、「スマホアプリ」、「デスクトップアプリ」などできるマルチプレーヤー。<br>
主にブラウザで動く。<br>

**よく間違えられるが、「Java」とは全く違う言語です！<br>

webページ内でのアニメーションは<br>
jsでイベント検知→CSSアニメーションが現在主流。<br>
例: スクロールの値をjsで測って、cssアニメでふわっと表示。  
例: https://www.ikuple.com/


<br>
<br>
<br>

## jQueryで練習しよう！ (jsの仕組みを理解する)
<img src="https://github.com/55Kaerukun/img/blob/master/jquery-1.jpg" width="200px"><br>
jQueryとは、JavaScriptを簡易的に書けるようにしたライブラリ。<br>
<br>
コーポレートサイトやLP制作などによく使われます。js入門にも最適。<br>

jQuery公式サイト<br>
https://code.jquery.com/


```

// まずは本体を読み込む
<script src="https://code.jquery.com/jquery-3.4.1.min.js"></script>

```


```

<script>
    // 基本の書き方 
    $(document).ready(function(){
        console.log('jQueryの基本');
    });
</script>

```

readyファンクションの簡略系

```
// ここにjQueryを書く
<script>
    // 基本の書き方 
    $(function(){
	console.log('jQueryの基本');
    });
</script>
```

<br>
<br>
<br>


<!--## 変数と定数と関数  ここどうしよ、、、、、、、

```
<script>
    $(function(){
    
          $('.target').fadeOut();
	  
	  // 変数timeを定義
	  let time = 1000;
	  $('.target').fadeOut(time);
	  
    });
</script>
```
-->


## 「イベント」とは？ブラウザのふるまいを検知（超重要）
$()で捕まえて、on()できっかけ登録、functionの中に内容を記載<br><br>
<img src="https://github.com/55Kaerukun/dh19_9_JavaScript/blob/master/images/jquery_func.png" width="800px"><br><br>
<img src="https://github.com/55Kaerukun/img/blob/master/piyo.png" width="200px"><br>

イベント名 | 内容
--- | ---
load | HTML読み込み完了時
resize | ブラウザの幅が変更された時に発生
scroll | スクロールした時に発生
click | 要素をクリックした時に発生
keypress | キーが押された時に発生


などなど<br>
参考:jQuery イベントの種類<br>
https://qiita.com/temori1919/items/bcbfc4a93301ef902d1d

<br><br>


## clickイベント

```
// cssアニメ定義


```


```
<script>
　　$(function(){
  
        // ボタンクリックでaddClass
        $("#btn").on('click',function(){
          $('.target').fadeOut();
        });

    });
</script>
```

## resizeイベント
```
// cssアニメ定義


```


```
<script>
　　$(function(){
  
        // ボタンクリックでaddClass
        $("#btn").on('resize',function(){
          $('.target').fadeOut();
        });

    });
</script>
```



## scrollイベント


```
// cssアニメ定義


```


```
<script>
　　$(function(){
  
        // ボタンクリックでaddClass
        $("#btn").on('scroll',function(){
          $('.target').fadeOut();
        });

    });
</script>
```


<br>
<br>
<br>
<br>
<br>

## おまけ jQueryをバニラjsで。
jQueryのありがたみを知りましょう！


### onClick
    /* バニラjs */
    document.querySelector('#btn').addEventListener('click', function(){
 	    document.body.style.backgroundColor = "aqua";
    });
    
    /* jQuery */
    $('#btn').on("click",function(){
        $('body').css('background','aqua');
    });


