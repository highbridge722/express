const { MongoClient } = require("mongodb");

// 下のURIをご自分の値に変更してください
const uri = "mongodb+srv://highbridge722:F4AWno5p2LdIa1rw@cluster0.zk86k.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const client = new MongoClient(uri);

async function run() {
    try {
        await client.connect();
        console.log("Connected correctly to server");

        const database = client.db('notes');
        const notes = database.collection('notes');

        // idが2のドキュメントを削除
        const result = await notes.deleteOne({ id: 2 });
        console.log(result);

    } catch (err) {
        console.error(err);
    } finally {
        // 最後にクライアントをクローズする
        await client.close();
    }
}

run().catch(console.dir);
