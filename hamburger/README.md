# ハンバーガーメニュー
スマホサイトでよく見かける、<br>
通称(ハンバーガーメニュー)を作ってみましょう！<br><br>









## ボタン部分のHTML

```
<!-- ボタン部分のHTML -->
<button type="button" class="menu-trigger">
    <span></span>
</button>

```


## CSSでボタンの背景（枠）を制作

<img src="https://github.com/55Kaerukun/JavaScript/blob/master/images/hum1.png" width="400px">


```
/* ボタンの枠を作る */
.menu-trigger {
  width: 56px;
  height: 60px;
  position: fixed;
  top: 0;
  right: 0;
  /*outline: none;*/  /*クリックした際のボタン周りの線を消す*/
}

```


## 線を表示させる(3つ重なった状態)

<img src="https://github.com/55Kaerukun/JavaScript/blob/master/images/hum2.png" width="400px">

```

/* 中央の線 */
.menu-trigger span{
  width: 32px;
  height: 3px;
  background:#333;
  position: absolute;
  top: 0;
  left: 0;
}


/* 上下の線 */
.menu-trigger span:before,
.menu-trigger span:after{
  position: absolute;
  display: block; 
  content: "";
  width: 32px;
  height: 3px;
  background:#333;
}

```


## 上下の線をずらす。

<img src="https://github.com/55Kaerukun/JavaScript/blob/master/images/hum3.png" width="400px">


```
/* 上下の線の位置調整 */
.menu-trigger span:before{
  transform: translate(0,13px);
  transition:0.3s all;
}

.menu-trigger span:after{
  transform: translate(0,-13px);
  transition:0.3s all;
}

```

## ボタンをクリックした時に傾ける

<img src="https://github.com/55Kaerukun/JavaScript/blob/master/images/hum4.png" width="400px">

```

.menu-trigger.active span:before{
  transform: rotate(-45deg);
}

.menu-trigger.active span{
 background: rgba(0,0,0,0);
}

.menu-trigger.active span:after{
 transform: rotate(45deg);
}

```


## JavaScriptの記述

```

$(function() {
  
  $('.menu-trigger').on('click', function() {
    $(this).toggleClass('active');
    $('#global-nav').toggleClass('active');
  });

});


```


## 調整

```

/* 追加 */

.menu-trigger{
  display: none; /*PCの時は消しておく*/
  -webkit-appearance: none; /* Crome用フォ-ム要素の初期化*/
  appearance: none; /*フォ-ム要素の初期化*/
  border: none;
  /* background: transparent; 背景を透明に */ 
}

@media (max-width:767px) {
  .menu-trigger{
    display: block;
  } 
}

/* spanの色変更 */
```
