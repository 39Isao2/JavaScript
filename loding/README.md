# ローディングアニメーション
webページが表示されるまでの待機時間用アニメーション。  
もともとは読み込みストレス軽減のために使われ始めたが、  
今は演出やブランディングなどにも使用されています。  
<br>
<br>
<img src="https://github.com/55Kaerukun/JavaScript/blob/master/images/loding1.png" width="600px">


#### cssアニメ、gifアニメ、svgアニメ、動画、色んな方法で制作されるが、、
https://projects.lukehaas.me/css-loaders/  <br>
今回はこの「 Single Element CSS Spinners 」を使って実装していきたいと思います。


## ローディングアニメーションのcssをコピペする

<br>
<img src="https://github.com/55Kaerukun/JavaScript/blob/master/images/loding2.png" width="600px">
<br>
注:colorを黒にしとく<br>



```
.loader {
  /*color: #ffffff;*/
  color:#333;
}

```


## アニメーションを中央配置する為のコードを記述

```
<div class="loader-wrap">
	<div class="loader">Loading...</div>
</div>
```


cssでローディングアニメーションを上下左右中央配置に。

```
.loader-wrap {
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    background: #fff;
}

```

## もともとのページのコンテンツは非表示にしておく

```
/* loading用 */
#container{
  display: none;
}

```

## JavaScriptの記述

```

//ページの読み込みが完了したらアニメーションを非表示
// $(window).on('load',function(){
// 	$('.loader-wrap').fadeOut();
//  $('#container').fadeIn();
// });

//ページの読み込みが完了してなくても3秒後にアニメーションを非表示にする
setTimeout(function(){
    $('.loader-wrap').fadeOut();
    $('#container').fadeIn();
},3000);


```
