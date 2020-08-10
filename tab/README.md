# タブメニューの作りかた

<img src="https://github.com/55Kaerukun/JavaScript/blob/master/images/qa.png" width="600px">
<br>

## htmlの記述
タブの切り替えバーとなる部分と、コンテンツの中身の部分のHTMLを作成

```
<!-- ここからタブ -->
<section>
<ul class="tab-bar">
    <li class="tab is-active">タブ１</li>
    <li class="tab">タブ2</li>
    <li class="tab">タブ3</li>
</ul>
<!--タブを切り替えて表示するコンテンツ-->
<div class="tab-contents">
    <div class="tab-content is-active">タブ１の内容タブ１内容タブ１内容</div>
    <div class="tab-content">タブ2の内容タブ2の内容タブ2の内容</div>
    <div class="tab-content">タブ3の内容タブ3の内容タブ3の内容</div>
</div>
</section>
<!-- ここまでタブ -->

```

## CSSの記述

バーやコンテンツを横並びや縦並びなど、<br>
デザインによって調整する

```

/* ここからtab切り替え記述 */
.tab-bar{
    display: flex;
}
.tab{
    flex-grow: 1;
    padding:10px;
    list-style:none;
    border:solid 1px #CCC;
    text-align:center;
    cursor:pointer;
}
.tab-contents{
    width: 100%;
    height: 100px;
    padding: 20px;
    box-sizing: border-box;
    background: #fff;
    border: 1px solid #ccc;
    border-top: none;
}
.tab-content{
    display: none;
}
.tab-content.is-active{
    display: block;
}
.tab.is-active{
    background-color: rgba(0,0,0,0.7);
    color:#FFF;
    transition: all 0.2s;
}


```

## jQueryの記述

```

$(function(){

    $('.tab').on('click', function(){

        // is-activeクラスがついてるのを全部外す
        $('.is-active').removeClass('is-active');

        // クリックしたタブにis-activeクラスを付与
        $(this).addClass('is-active');

        // クリックしたタブからインデックス番号(何番目か)を取得
        let index = $(this).index();

        // クリックしたタブと同じインデックス番号をもつコンテンツを表示
        $('.tab-content').eq(index).addClass('is-active');
    });
    
});


```