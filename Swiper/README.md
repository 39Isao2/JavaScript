# Swiper
JavaScriptのスライドショー制作のためのライブラリです。

<img src="http://hareumi.com/dhjs/swiper2.png" width="600px">
<br>

参考 <br>
公式サイト https://swiperjs.com/  <br>
ガリガリコード https://garigaricode.com/swiper/
<br>

# 公式サイト→Get Startedを見ながら制作しましょう
公式サイト https://swiperjs.com/  <br><br>



## 1、使用するcssとjsの読み込み

    <link rel="stylesheet" href="https://unpkg.com/swiper/swiper-bundle.min.css">
    <script src="https://unpkg.com/swiper/swiper-bundle.min.js"></script>
    
<br>

## 2、HTMLの記述

クラス名は原則いじらないようにしましょう。class="swiper-slide"のdiv内に画像を入れましょう。
	
    <div class="swiper-container">
        <div class="swiper-wrapper">
            <div class="swiper-slide"><img src="images/mainvisual1.jpg" alt=""></div>
            <div class="swiper-slide"><img src="images/mainvisual2.jpg" alt=""></div>
            <div class="swiper-slide"><img src="images/mainvisual3.jpg" alt=""></div>
        </div>

	    <!-- If we need pagination -->
	    <div class="swiper-pagination"></div>

	    <!-- If we need navigation buttons -->
	    <div class="swiper-button-prev"></div>
	    <div class="swiper-button-next"></div>

	    <!-- If we need scrollbar -->
	    <div class="swiper-scrollbar"></div>
    </div>

<br>

## 3、cssでサイズ調整


```
.swiper-container{
    width: 100%;
    height: auto;
}

/* 画像も横幅100%にする */
.swiper-container img{
  width: 100%;
  height: auto;
}

```



## 4、JavaScriptの記述

### デフォルト

    var swiper = new Swiper('.swiper-container');
    
### オプション navigation

```
var swiper = new Swiper('.swiper-container', {
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

```

### オプション navigation +  pagination

```
var swiper = new Swiper('.swiper-container', {
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: '.swiper-pagination',
  },
});

```


    
### オプション autoPlay + loop + autoplay

```

var swiper = new Swiper('.swiper-container', {

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: '.swiper-pagination',
  },
  autoplay: {
     delay: 500, // 次スライドまでの待機時間
  },
   speed: 1000, // スライドするスピード
   loop:true, 
   
});


```
 
### 参考:エフェクトの種類

```
effect: 'fade', <br>
effect: 'flip', <br>
```

など。デザインに合った、自分の目指すスライドショーを作りましょう。<br>
だいたいプラグインは、<br><br>
１、jsとcss読み込む  
２、jsで実行  
３、お好みで{内容:パラメータ}で調整という作りです。　以上。
