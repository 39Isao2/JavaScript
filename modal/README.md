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



## closeボタンを変更

```

 <!-- ボタンのソースをこちらに変更 -->
 <button data-remodal-action="cancel" class="remodal-cancel">閉じる</button>

```


## 今回の全てのソース
```

<section id="content02">
            <h2>サブタイトル02</h2>
            <ul id="photo_list">

                <li class="d1 scroll-effect">
                    <a href="#modal1"><img src="images/thum01.jpg" alt="アクティビティ01"></a>
                    <!-- モーダルに出てくる内容 -->
                    <div class="remodal" data-remodal-id="modal1">
                        <img src="images/thum01.jpg" alt="アクティビティ01"></a>
                        <button data-remodal-action="cancel" class="remodal-cancel">閉じる</button>
                    </div>
                </li>

                <li class="d2 scroll-effect">
                    <a href="#modal2">
                        <img src="images/thum02.jpg" alt="アクティビティ02">
                    </a>
                    <!-- モーダルに出てくる内容 -->
                    <div class="remodal" data-remodal-id="modal2">
                        <img src="images/thum02.jpg" alt="アクティビティ01"></a>
                        <button data-remodal-action="cancel" class="remodal-cancel">閉じる</button>
                    </div>
                </li>

                <li class="d3 scroll-effect">
                    <a href="#modal3">
                        <img src="images/thum03.jpg" alt="アクティビティ03">
                    </a>
                    <!-- モーダルに出てくる内容 -->
                    <div class="remodal" data-remodal-id="modal3">
                        <img src="images/thum03.jpg" alt="アクティビティ01"></a>
                        <button data-remodal-action="cancel" class="remodal-cancel">閉じる</button>
                    </div>
                </li>
                <li class="d4 scroll-effect">
                    <a href="#modal4"><img src="images/thum01.jpg" alt="アクティビティ01"></a>
                    <!-- モーダルに出てくる内容 -->
                    <div class="remodal" data-remodal-id="modal4">
                        <img src="images/thum01.jpg" alt="アクティビティ01"></a>
                        <button data-remodal-action="cancel" class="remodal-cancel">閉じる</button>
                    </div>
                </li>
                <li class="d5 scroll-effect">
                    <a href="#modal5">
                        <img src="images/thum02.jpg" alt="アクティビティ02">
                    </a>
                    <!-- モーダルに出てくる内容 -->
                    <div class="remodal" data-remodal-id="modal5">
                        <img src="images/thum02.jpg" alt="アクティビティ01"></a>
                        <button data-remodal-action="cancel" class="remodal-cancel">閉じる</button>
                    </div>
                </li>
                <li class="d6 scroll-effect"><a href="#modal6">
                    <img src="images/thum03.jpg" alt="アクティビティ03"></a>
                    <!-- モーダルに出てくる内容 -->
                    <div class="remodal" data-remodal-id="modal6">
                        <img src="images/thum03.jpg" alt="アクティビティ01"></a>
                        <button data-remodal-action="cancel" class="remodal-cancel">閉じる</button>
                    </div>
                </li>
            </ul>
        </section>

```
