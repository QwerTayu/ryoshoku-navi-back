const functions = require('firebase-functions/v1');
const line = require('@line/bot-sdk');
// import * as admin from 'firebase-admin';

// admin.initializeApp();
// const db = admin.firestore();

const config = {
  channelAccessToken: functions.config().line.channel_access_token,
  channelSecret: functions.config().line.channel_secret
};

const client = new line.Client(config);

exports.lineWebhook = functions
    .region("asia-northeast1")
    .https.onRequest(async (request, response) => {
      const signature = request.get("x-line-signature");

      if (!signature || !line.validateSignature(
          request.rawBody, config.channelSecret, signature
      )) {
        throw new
        line.SignatureValidationFailed(
            "signature validation failedで失敗ですわ！",
            signature
        );
      }
      const res = request.body.events[0];
      
      try {
        await actionPien(res);
      } catch (err) {
        console.log(err);
      }
    });

const actionPien = async (event) => {
  const userId = event.source.userId;
  if (event.type !== 'postback') {
    return;
  }
    try {
      const message = [
        {
          type: "text",
          text: event.postback.data
        },
        {
          type: "text",
          text: "ぴえん"
        }
      ];
      client.replyMessage(event.replyToken, message);
      // return addPien(userId, event.timestamp);
    } catch (error) {
      console.error(JSON.stringify(error));
      return Promise.resolve(null);
    }
};

// const addPien = async (userId, timestamp) => {
//   const pienDate = timestampToTime(timestamp);
//   const pienEvent = {
//     pienTime: pienDate,
//   };
  
//   return db.collection(`users/${userId}/piens`).add(pienEvent);
// }

// 引数 timestamp の単位はミリ秒
const timestampToTime = (timestamp) => {
  const date = new Date(timestamp);
  const yyyy = `${date.getFullYear()}`;
  // .slice(-2)で文字列中の末尾の2文字を取得する
  // `0${date.getHoge()}`.slice(-2) と書くことで０埋めをする
  const MM = `0${date.getMonth() + 1}`.slice(-2); // getMonth()の返り値は0が基点
  const dd = `0${date.getDate()}`.slice(-2);
  const HH = `0${date.getHours() + 9}`.slice(-2); // 日本時間になるよう+9h
  const mm = `0${date.getMinutes()}`.slice(-2);
  const ss = `0${date.getSeconds()}`.slice(-2);

  return `${yyyy}/${MM}/${dd} ${HH}:${mm}:${ss}`;
}
