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


下記コマンドで環境変数を設定
```
$ firebase functions:config:set line.channel_secret="channelSecret"

$ firebase functions:config:set line.channel_access_token="channelAccessToken"
```



リッチメニュー
```
curl -v -X POST https://api.line.me/v2/bot/richmenu -H 'Authorization: Bearer {チャンネルアクセストークン}' -H 'Content-Type: application/json' -d '{
    "size": {
      "width": 2500,
      "height": 1686
    },
    "selected": false,
    "name": "MENU",
    "chatBarText": "Tap here",
    "areas": [
      {
        "bounds": {
          "x": 0,
          "y": 0,
          "width": 833,
          "height": 843
        },
        "action": {
          "type": "postback",
          "data": "pien"
        }
      },
      {
        "bounds": {
          "x": 834,
          "y": 0,
          "width": 1666,
          "height": 843
        },
        "action": {
          "type": "postback",
          "data": "RECORD"
        }
      },
      {
        "bounds": {
          "x": 0,
          "y": 844,
          "width": 833,
          "height": 843
        },
        "action": {
          "type": "postback",
          "data": "MENU"
        }
      },
      {
        "bounds": {
          "x": 834,
          "y": 844,
          "width": 833,
          "height": 843
        },
        "action": {
          "type": "postback",
          "data": "CHECK"
        }
      },
      {
        "bounds": {
          "x": 1668,
          "y": 844,
          "width": 833,
          "height": 843
        },
        "action": {
          "type": "postback",
          "data": "SETTING"
        }
      }
    ]
}'
```

```
curl --http1.1 -v -X POST https://api-data.line.me/v2/bot/richmenu/richmenu-リッチメニューアイディー/content -H 'Authorization: Bearer {チャンネルアクセストークン}' -H 'Content-Type: image/jpeg' -T richmenu.png
```

```
curl -v -X POST https://api.line.me/v2/bot/user/all/richmenu/richmenu-リッチメニューアイディー -H 'Authorization: Bearer {チャンネルアクセストークン}'
```
