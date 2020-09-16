# Tree.js入門
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
今回の場合は、3D空間を2Dとして表示する変換作業<br><br>
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
描画する内容。物体やライトなどをシーンに追加する。
```
const scene = new THREE.Scene();
```

## カメラの作成
3Dではどの視点から空間を撮影するか、というカメラの定義をします。<br>
今回はTHREE.PerspectiveCameraで画角、アスペクト比、描画開始距離、描画終了距離の4つの情報を使って定義します。<br><br>
<img src="https://github.com/55Kaerukun/JavaScript/blob/master/images/threeJS.png" width="600px" alt="">

```
// カメラの作成
// THREE.PerspectiveCamera(fov, aspect, near, far); 
// nearより手前は表示されない。farより奥は描画されない。

/* アスペクト比 */
// 描画される出力領域の縦横比	
window.innerWidth/window.innerHeight

const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 2000);

// プラスがz軸手前
camera.position.set(0, 0, +1000);

// 原点方向を見つめる
camera.lookAt(0, 0, 0);

```

## ライト

DirectionalLightという太陽光のような一定方向から差し込む光を追加しましょう。<br>
ライトもシーンに追加することで反映されます。 光源が斜めから差し込むように位置も変更。<br>

```

// new THREE.DirectionalLight(色);
const light = new THREE.DirectionalLight(0xffffff);

// ライトの位置を変更
light.position.set(100, 100, 100);

// シーンに追加
scene.add(light);

```

# あと少し！


## ヘルパーの表示
x,y,z軸を確認する為のヘルパーをシーンに追加します。

```
// axisヘルパーの表示
const axis = new THREE.AxisHelper(1000);
axis.position.set(0,0,0);
scene.add(axis);

```


## 立方体を作る
メッシュという表示用のオブジェクトを作成する。<br>
メッシュを作るには、ジオメトリ（形状）とマテリアル（素材）の二種類を用意する必要があります。<br>
ジオメトリとは頂点情報や面情報を持っています。Three.jsにはさまざまなジオメトリが用意されていますが、<br>
まずは立方体や直方体のような箱状の形状を生成するためのBoxGeometryを使用します。
```

// 立方体の作成
// ジオメトリ
const geometry = new THREE.BoxGeometry(300, 300, 300);

// マテリアル  color: 0xから始まる16進数
const material = new THREE.MeshLambertMaterial({color: 0x00FFFF}); //水色

const box = new THREE.Mesh(geometry, material); // ジオメトリとマテリアルを組み合わせてメッシュを作成
box.position.set(0,0,0);
scene.add(box); // シーンに追加

```
参考 : Three.jsのさまざまなマテリアル
https://ics.media/tutorial-three/material_variation/




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



## OrbitControls.jsを使ってみる
マウスで自在にカメラ移動できるOrbitControls.jsを使ってみましょう。
```
<!-- OrbitControls.jsを読み込む -->
<script src="OrbitControls.js"></script>

// cameraの定義の後に追記
const controls = new THREE.OrbitControls(camera);

```
参考: Three.jsのOrbitControlsで手軽にカメラを制御する
https://ics.media/tutorial-three/camera_orbitcontrols/




お疲れ様でした！その１<br>
現状の全コードはこちら。<br>

```

<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8"/>
</head>
<body>
  <canvas id="stage"></canvas>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/105/three.min.js"></script>
  <script src="OrbitControls.js"></script>
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
    
    // OrbitControlsの機能追加
    const controls = new THREE.OrbitControls(camera);
    
    // axisヘルパーの表示
    const axis = new THREE.AxisHelper(1000);
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
    const box = new THREE.Mesh(geometry, material);
    box.position.set(0,0,0);
    scene.add(box);


    // アニメーションで表示し続ける

    let tick = () => {
    
      // tick()を繰り返し呼び出している
      requestAnimationFrame(tick);

      // アニメーション処理をここに書く
      box.rotation.y += 0.01;

      // レンダリング
      renderer.render(scene, camera);

    }
    
    // 初回実行
    tick();
    
  });
  </script>
</body>
</html>
```




## 違うメッシュを追加してみよう

IcosahedronGeometryを追加してみましょう。<br>

<img src="https://github.com/55Kaerukun/JavaScript/blob/master/images/ico.png" width="200px" alt="box"> <br>

```
const icoGeometry = new THREE.IcosahedronGeometry( 100, 1 );
const icoMaterial = new THREE.MeshBasicMaterial({color: 0xa6b5d7, wireframe: true});
const ico = new THREE.Mesh(icoGeometry, icoMaterial);
ico.position.set(300,300,300);
scene.add(ico);

```
参考: IcosahedronGeometry(正２０面体)について<br>
http://gupuru.hatenablog.jp/entry/2013/12/06/204217

## カメラのアニメーション
カメラを自動でアニメーションしてみましょう。

```
let tick = () => {

  requestAnimationFrame(tick);
  
  // 原点にカメラを向けたまま移動
  camera.lookAt(0,0,0);
  
  // x座標を移動してみる(最終的に画面から消えてしまいます。)
  camera.position.x += 10;

  box.rotation.y += 0.01;

  // レンダリング
  renderer.render(scene, camera);

      
}
```


## カメラの円運動アニメーション
三角関数を使ってカメラのグルグル回るアニメーションを作ってみます。
```

// カメラを回す用の角度をグローバル変数で定義
let rot = 0;
    
let tick = () => {

  // tick()を繰り返し呼び出している
  requestAnimationFrame(tick);

  // アニメーション処理をここに書く
  box.rotation.y += 0.01;
  ico.rotation.y += 0.005;
      

  /* ここから追加*/
  // 角度を増やす
  rot++;

  // 度数からラジアンに変換する(公式)
  const radian = rot * Math.PI / 180;

  // カメラの円運動(x軸とy軸を回すのがポイント！)
  camera.position.x = 1000 * Math.sin(radian);
  camera.position.z = 1000 * Math.cos(radian);

  // 原点にカメラ方向を向ける
  camera.lookAt(0,0,0);
  
  // 特定のメッシュにカメラ方向を向ける場合
  //camera.lookAt(ico.position);
  
  
  // レンダリング
  renderer.render(scene, camera);

}
    

```

お疲れ様でした！！<br>
全ソースコードその2<br>

```

<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8"/>
</head>
<body>
  <canvas id="stage"></canvas>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/105/three.min.js"></script>
  <script src="OrbitControls.js"></script>
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
    
    // OrbitControlsの機能追加
    const controls = new THREE.OrbitControls(camera);
    
    // axisヘルパーの表示
    const axis = new THREE.AxisHelper(1000);
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
    const geometry = new THREE.BoxGeometry(100, 100, 100);

    // マテリアル  color: 0xから始まる16進数
    const material = new THREE.MeshLambertMaterial({color: 0x00FFFF}); //水色
    //const material = new THREE.MeshBasicMaterial({color: 0xa6b5d7, wireframe: true});
    const box = new THREE.Mesh(geometry, material);
    box.position.set(0,0,0);
    scene.add(box);

    const icoGeometry = new THREE.IcosahedronGeometry( 100, 1 );
    //const icoGeometry = new THREE.SphereGeometry( 200, 7, 7 );
    const icoMaterial = new THREE.MeshBasicMaterial({color: 0xa6b5d7, wireframe: true});
    const ico = new THREE.Mesh(icoGeometry, icoMaterial);
    ico.position.set(300,300,300);
    scene.add(ico);

    // カメラを回す用の角度
    let rot = 0;

    // アニメーションで表示し続ける
    let tick = () => {
        
      // tick()を繰り返し呼び出している
      requestAnimationFrame(tick);

      // アニメーション処理をここに書く
      box.rotation.y += 0.01;
      ico.rotation.y += 0.005;


      // 角度を増やす
      rot++;

      // ラジアンに変換する(公式)
      const radian = rot * Math.PI / 180;

      // 
      camera.position.x = 1000 * Math.sin(radian);
    　camera.position.z = 1000 * Math.cos(radian);

      // 原点方向を見つめる
      camera.lookAt(ico.position);

      // レンダリング
      renderer.render(scene, camera);

    }

    // 初回実行
    tick();


  });
  </script>
</body>
</html>

```






応用<br>
参考: Three.jsで大量のパーティクルを表示する方法<br>
https://ics.media/tutorial-three/points/

