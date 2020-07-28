# smooth-scroll.js 
目的地までスクロールして移動してくれる便利なプラグインです。  

<img src="https://github.com/55Kaerukun/JavaScript/blob/master/images/smooth-scroll.png" width="600px">
<br><br>
公式のGitHubページ https://github.com/cferdinandi/smooth-scroll <br><br>
使い方参考サイト:  スムーズな移動！「smooth-scroll.js」で固定ヘッダーも考慮したページ内リンク<br>
https://haniwaman.com/smooth-scroll-js/

<br>
<br>

## まずはGitHubから最新版をダウンロードしてHTMLに読み込む

使用するのは、dist内のsmooth-scroll.polyfills.min.js <br>

```
<script src="js/smooth-scroll.polyfills.min.js"></script>

```

## HTMLにリンク設定

```

    <!-- ナビゲーション部分 -->
    <ul>
        <li><a data-scroll href="#section1">navi01</a></li>
        <li><a data-scroll href="#section2">navi02</a></li>
        <li><a data-scroll href="#section3">navi03</a></li>
        <li><a data-scroll href="#section4">navi04</a></li>
    </ul>


    <!-- リンク先の箇所にIDを指定 -->
    <section id="section1" class="content01">
    <section id="section2" class="content01">


```

## JavaScriptのコード


```

// これだけです。
var scroll = new SmoothScroll('a[href*="#"]', {
    header: '#global-nav',
    // speed: 1000,
});


```
