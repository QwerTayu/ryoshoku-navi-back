# ryoshoku-navi-back
寮食なびバックエンド

`npm install -g firebase-tools`

`firebase login`

下記コマンドでエミュレーターをスタート
`npx firebase emulators:start`


下記がエンドポイント
```
http://localhost:5001/ryoshoku-navi-app/us-central1/
```

デプロイ
```
 firebase deploy --only functions
 