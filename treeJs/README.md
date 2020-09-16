# Tree.js超入門
HTMLの3D技術「WebGL」を扱いやすくしたライブラリです。

<img src="https://github.com/55Kaerukun/JavaScript/blob/master/images/treejs.png" width="600px" alt="three.jsの画像">
<br>

## 今回のゴール
簡単な図形の描画と回転アニメーション。<br><br>
<img src="https://github.com/55Kaerukun/JavaScript/blob/master/images/treeBox.png" width="210px" alt="box"> 
<img src="https://github.com/55Kaerukun/JavaScript/blob/master/images/ico.png" width="200px" alt="box"> <br>

## canvas要素を用意する
WebGLによるグラフィックはcanvasというタグの中に描いていきます。<br>
idを記載しましょう。canvas要素の大きさはJavaScriptを使って設定します。

```
<body>
  <canvas id="stage"></canvas>
</body>
```
## three.jsを読み込む

```
 <script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/105/three.min.js"></script>
```

## loadイベントの発火(HTMLが読み込まれたか)を確認
WebGLの処理はページの読み込みが終わってから実行させます。<br>
addEventListener()関数(jQueryでいうonメソッド)ページが読み込み終わったときに実行させたい命令を指定します。

```
<script>
window.addEventListener('load', () =>{
    // ここに実行したい処理
    alert('test');
});
</script>
```

## WebGLのレンダリングをするためのレンダラーを作成
レンダリングとは、複数データを計算処理によって、一つの状態としてまとめる作業。<br>
今回の場合は、3D空間を2Dとして表示する変換作業<br>
参考:デザインにおける「レンダリング」とは？デザイナーが持つべき知識とおすすめの方法 <br>
https://jp.renderpool.net/blog/%E3%83%87%E3%82%B6%E3%82%A4%E3%83%B3%E3%81%AE%E3%83%AC%E3%83%B3%E3%83%80%E3%83%AA%E3%83%B3%E3%82%B0#i
<br><br>

```
const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector('#stage')
});

// サイズを指定
const width = window.innerWidth;
const height = window.innerHeight;
renderer.setPixelRatio(window.devicePixelRatio); //deviceの解像度に合わせる
renderer.setSize(width, height);

/* const(定数)とは？ 再度、値を変更できない変数 */
```

## シーンの作成
```
const scene = new THREE.Scene();
```

## カメラの作成
3Dではどの視点から空間を撮影するか、というカメラの定義をします。<br>
今回はTHREE.PerspectiveCameraで画角、アスペクト比、描画開始距離、描画終了距離の4つの情報を使って定義します。
<img src="https://github.com/55Kaerukun/JavaScript/blob/master/images/nogson.png" width="600px" alt="">

```
// カメラの作成
const camera = new THREE.PerspectiveCamera(45, width / height, 1, 2000);
//camera.position.set(0, 1000, +1000);
camera.position.set(0, 0, +2000);

// 原点方向を見つめる
camera.lookAt(0, 0, 0);


/* アスペクト比 */
// 描画される出力領域の縦横比	
window.innerWidth/window.innerHeight
```

## ライト

DirectionalLightという太陽光のような一定方向から差し込む光を追加しましょう。<br>
ライトもシーンに追加することで反映されます。 光源が斜めから差し込むように位置も変更。<br>

```

// new THREE.DirectionalLight(色)
const light = new THREE.DirectionalLight(0xffffff);

// ライトの位置を変更
light.position.set(1, 1, 1);

// シーンに追加
scene.add(light);

```

# あと少し！

## 立方体を作る
メッシュという表示用のオブジェクトを作成する。<br>
メッシュを作るには、ジオメトリ（形状）とマテリアル（素材）の二種類を用意する必要があります。<br>
ジオメトリとは頂点情報や面情報を持っています。Three.jsにはさまざまなジオメトリが用意されていますが、<br>
今回は立方体や直方体のような箱状の形状を生成するためのBoxGeometryを使用します。
```

// 立方体の作成
// ジオメトリ
const geometry = new THREE.BoxGeometry(300, 300, 300);

// マテリアル  color: 0xから始まる16進数
const material = new THREE.MeshLambertMaterial({color: 0x00FFFF}); //水色
//const material = new THREE.MeshBasicMaterial({color: 0xa6b5d7, wireframe: true});

const box = new THREE.Mesh(geometry, material);
box.position.set(0,0,0);
scene.add(box);

```

## アニメーションでシーンを表示し続ける
requestAnimationFrame()というメソッドを使用して、<br>
引数として渡されたtick関数を、毎フレーム実行します。

```

// 初回実行
tick();

function tick() {
  requestAnimationFrame(tick);

  // アニメーション処理をここに書く
  box.rotation.y += 0.01;
  // box.rotation.z += 0.01;

  // レンダリングで表示
  renderer.render(scene, camera);

}


```

お疲れ様でした！<br>
全コードはこちら。<br>

```

<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8"/>
</head>
<body>
  <canvas id="stage"></canvas>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/105/three.min.js"></script>
  <script>
  window.addEventListener('load', () =>{
    // レンダリング環境を作成
    const renderer = new THREE.WebGLRenderer({
      canvas: document.querySelector('#stage')
    });



    // サイズを指定
    const width = window.innerWidth;
    const height = window.innerHeight;
    renderer.setSize(width, height);
    renderer.setPixelRatio(window.devicePixelRatio);

    // シーンの作成
    const scene = new THREE.Scene();

    // カメラの作成
    const camera = new THREE.PerspectiveCamera(45, width / height, 1, 2000);
    camera.position.set(0, 1000, +1000);
    //camera.position.set(0, 0, +2000);
    // 原点方向を見つめる
    camera.lookAt(0, 0, 0);
    
    // ヘルパー
    let axis = new THREE.AxisHelper(1000);
    axis.position.set(0,0,0);
    scene.add(axis);
    
    // ライト
    const light = new THREE.DirectionalLight(
      0xffffff
    );
    light.position.set(1, 1, 1);
    // シーンに追加
    scene.add(light);

    // 立方体の作成
    // ジオメトリ
    const geometry = new THREE.BoxGeometry(300, 300, 300);

    // マテリアル  color: 0xから始まる16進数
    const material = new THREE.MeshLambertMaterial({color: 0x00FFFF}); //水色
    //const material = new THREE.MeshBasicMaterial({color: 0xa6b5d7, wireframe: true});
    const box = new THREE.Mesh(geometry, material);
    box.position.set(0,0,0);
    scene.add(box);


    // アニメーションで表示し続ける
    // 初回実行
    tick();

    function tick() {
      requestAnimationFrame(tick);

      // アニメーション処理をここに書く
      box.rotation.y += 0.01;
      // box.rotation.z += 0.01;

      // レンダリングで表示
      renderer.render(scene, camera);

    }
  });
  </script>
</body>
</html>
```

## OrbitControls.jsを使ってみる
マウスで自在で3D空間を移動できるOrbitControls.jsを使ってみましょう。
```
<!-- OrbitControls.jsを読み込む -->
<script src="OrbitControls.js"></script>

// cameraの定義の後に追記
const controls = new THREE.OrbitControls(camera);

```
参考: Three.jsのOrbitControlsで手軽にカメラを制御する
https://ics.media/tutorial-three/camera_orbitcontrols/


## 違うメッシュにしてみよう。
ワイヤースレームとIcosahedronGeometryにしてみる。<br>

```
const geometry = new THREE.IcosahedronGeometry( 100, 1 );
const material = new THREE.MeshBasicMaterial({color: 0xa6b5d7, wireframe: true});

```





応用<br>
参考: Three.jsで大量のパーティクルを表示する方法<br>
https://ics.media/tutorial-three/points/

