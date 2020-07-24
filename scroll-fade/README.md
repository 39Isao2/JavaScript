# スクロールアニメーション
JavaScriptでスクロール値を取得して、可視範囲に入ったらクラスを付けてcssアニメーションさせます。


## 1、まずはcssの準備

```
.scroll-effect{
  opacity : 0; /* 透明に */
  transform : translate(0, 45px); /* 実際の位置より45px下げる */
  transition : all 0.5s;  /* トランジションの設定 */
}
  
.scroll-in{
  opacity : 1; 
  transform : translate(0, 0); /* 元の位置に */
}

```


## 2、fadeInアニメーションさせたい要素にクラスをつける。


```

<!-- scroll-effect の部分を追記 -->

<section class="content01 scroll-effect">

<ul id="photo_list">
    <li class="scroll-effect">
</ul>

```



## 3、JavaScriptの記述

```

$(window).on('scroll load', function (){

    /* eachメソッドでscroll-effectクラス全ての要素を見にいく */

    $('.scroll-effect').each(function(){

        // 要素の高さを取得
        let targetPos = $(this).offset().top;

        // スクロールの値を取得
        let scroll = $(window).scrollTop();

        // ウインドウの高さを取得
        let windowHeight = $(window).height();

        // ターゲットが可視範囲に入ったらscroll-inクラスを付与
        if (scroll > targetPos - windowHeight){
            $(this).addClass('scroll-in');
        }

    });

});

```

図解してみる。<br>
<img src="https://github.com/55Kaerukun/JavaScript/blob/master/images/scroll.png" width="600px">



## cssのtransition-delayでアレンジしてみよう！


```
<!-- HTML -->
<ul id="photo_list">
    <li class="scroll-effect d1">〜〜〜</li>
    <li class="scroll-effect d2">〜〜〜</li>
    <li class="scroll-effect d3">〜〜〜</li>
</ul>

```


```

/* CSS */


/* transition-delay : 秒数; */

トランジション効果が始まるまでの待ち時間を指定できる。
（変化開始までの待ち時間）初期値は0s。


.d1{
  transition-delay:0.1s;
}
.d2{
  transition-delay:0.2s;
}
.d3{
  transition-delay:0.3s;
}


```

メモ : https://oku-log.com/blog/fadein/
