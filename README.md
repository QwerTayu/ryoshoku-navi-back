# ryoshoku-navi-back
寮食なびバックエンド

`npm install -g firebase-tools`

`firebase login`

下記コマンドでエミュレーターをスタート
`npx firebase emulators:start`

下記コマンドで終了
`npx kill-port 4000`


下記がエンドポイント
```
http://localhost:5001/ryoshoku-navi-app/us-central1/
```

デプロイ
```
 firebase deploy --only functions
```


デプロイ先
```
https://helloworld-2ufsha4fmq-uc.a.run.app/helloworld
```

など


https://firebase.google.com/docs/functions/get-started?hl=ja&authuser=2&_gl=1*1qsg2ww*_up*MQ..*_ga*OTEzMjA3NzkyLjE3MjcwOTc5ODg.*_ga_CW55HF8NVT*MTcyODI1NDA3OS43LjEuMTcyODI1NDI4Mi41Mi4wLjA.&gen=2nd
