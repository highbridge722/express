const { MongoClient } = require("mongodb");

// 下のURIをご自分の値に変更してください
const uri = "mongodb+srv://highbridge722:F4AWno5p2LdIa1rw@cluster0.zk86k.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

async function run() {
    try {
        await client.connect();
        console.log("Connected correctly to server");

        const database = client.db('notes');
        const notes = database.collection('notes');

        // データを登録
        const query = [
            {
                id: 1,
                title: 'ノート１のタイトルです',
                subTitle: 'ノート１のサブタイトルです',
                bodyText: 'ノート１の本文です'
            },
            {
                id: 2,
                title: 'ノート２のタイトルです',
                subTitle: 'ノート２のサブタイトルです',
                bodyText: 'ノート２の本文です'
            }
        ];

        const note = await notes.insertMany(query);
        console.log(note);

    } catch (err) {
        console.error(err);
    } finally {
        // 最後にクライアントをクローズする
        await client.close();
    }
}

run().catch(console.dir);
