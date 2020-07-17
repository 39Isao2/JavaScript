# アコーディオンメニュー
よくある質問などで使われるTipsです。  

<img src="https://github.com/55Kaerukun/JavaScript/blob/master/images/qa.png" width="600px">
<br>

```
    $('#accordion dt').on('click',function(){
        $(this).next('dd').slideToggle();
    });
```

## 解説

dl,dt,ddタグでよく組まれます。(Q&Aの場合)  
slideToggle() はクリックやタップするたびに、スライド開閉する便利なjQueryの関数です。  
<br>
クリックしたdtタグ（自分自信） = $(this)  
の次のddタグ = next('dd')  
を開閉せよ = slideToggle()  
という記述です。
