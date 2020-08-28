# アコーディオンメニュー
よくある質問などで使われるTipsです。  

<img src="https://github.com/55Kaerukun/JavaScript/blob/master/images/qa.png" width="600px">
<br>

## HTML

```
<dl id="accordion">
    <dt>Q1、平均年齢や男女比を教えて下さい。</dt>
    <dd>A、平均年齢は29歳です。男女比は、男性8割、女性2割ほどです。</dd>
    <dt>Q2、どのような服装で働いていますか？</dt>
    <dd>A、基本的には服装髪型共に自由です。メンバーそれぞれが働きやすいスタイルで仕事をしています。お客様にお会いするときなどは、失礼のない服装をしています。</dd>
    <dt>Q3、ここに質問。</dt>
    <dd>A、ここに回答。ここに回答。ここに回答。</dd>
    <dt>Q4、ここに質問。</dt>
    <dd>A、ここに回答。ここに回答。ここに回答。</dd>
</dl>
```

## jQueryのコード

```
$('#accordion dt').on('click',function(){
    $(this).next('dd').slideToggle();
});
```

## 解説  $(this)の扱いが肝です。

dl,dt,ddタグでよく組まれます。(Q&Aの場合)  
slideToggle() はクリックやタップするたびに、スライド開閉する便利なjQueryの関数です。  
<br>
クリックしたdtタグ（自分自信） = $(this)  
の次のddタグ = next('dd')  
を開閉せよ = slideToggle()  
という記述です。
