# モーダルウインドウ
写真や画像の拡大によく使用されます。<br>
Remodalというプラグインを紹介します。  

## Remodalのサイトから必要ファイルを読み込み
<br>公式サイト : http://vodkabears.github.io/remodal/
<br>使い方参考サイト : https://125naroom.com/web/3202 

<br>この3つが必要<br>
<br>remodal.css
<br>remodal-default-theme.css
<br>remodal.min.js



```

<!-- cssの読み込み -->
<link rel="stylesheet" type="text/css" href="css/remodal.css">
<link rel="stylesheet" type="text/css" href="css/remodal-default-theme.css">

<!-- jsの読み込み -->
<script type="text/javascript" src="js/remodal.min.js"></script>


```



## HTML

```

<!-- モーダルボタン -->
<a href="#modal">モーダルボタン</a>
 
<!-- モーダルに出てくる内容 -->
<div class="remodal" data-remodal-id="modal">
	<button data-remodal-action="close" class="remodal-close"></button>
	<p>ここにtextやimgを記述</p>
</div>


```

## サムネイル画像に適用してみる

```

<li class="d1 scroll-effect">
    <!-- モーダルボタン -->
    <a href="#modal1"><img src="images/thum01.jpg" alt="アクティビティ01"></a>
    <!-- モーダルに出てくる内容 -->
    <div class="remodal" data-remodal-id="modal1">
	<img src="images/thum01.jpg" alt="アクティビティ01"></a>
	<button data-remodal-action="cancel" class="remodal-cancel">閉じる</button>
    </div>
</li>


<!-- 注意: ボタンのaタグのid名と、data-remodal-id名は同じにする -->

```


## cssの調整(レスポンシブ対応)

```

/* Remodalのcss */

/* 画像のレスポンシブ対応 */
.remodal img{
    width:100%;
    height:auto;
}

/* キャンセルボタンの位置調整 */
.remodal-cancel{
  margin-top: 20px;
}

```



<!--
closeボタンを変更

ボタンのソースをこちらに変更 
 <button data-remodal-action="cancel" class="remodal-cancel">閉じる</button>

-->

メモ(今回のリストのソース)<br>
https://gist.github.com/55Kaerukun/cd694d00b922452b3aba3ce3e3e70800
