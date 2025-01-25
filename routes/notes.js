var express = require('express');
var router = express.Router();

// 接続情報を設定
const { MongoClient } = require("mongodb");
const uri = "";
const client = new MongoClient(uri);

router.get('/', async (req, res) => {
    try {
        // データベース、コレクションを指定
        const database = client.db('notes');
        const notes = database.collection('notes');

        // idが2のドキュメントを取得
        const query = { id: 2 };
        const note = await notes.findOne(query);

        // 結果をレスポンスとして返す
        res.json(note);
    } catch (err) {
        console.error(err);
        res.status(500).send('Internal Server Error');
    }
});

module.exports = router;

