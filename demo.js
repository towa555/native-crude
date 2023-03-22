const { MongoClient } = require('mongodb')



async function main() {

    const uri = "mongodb+srv://towa555666:NUS06Ot8Gc24waK2nod@cluster0.6c8qddv.mongodb.net/?retryWrites=true&w=majority";


    const client = new MongoClient(uri)

    try {
        await client.connect();

        await listDatabases(client)
    } catch (e) {
        console.error(e)
    }finally{
     await client.close();
    }

}

main().catch(console.error);
async function listDatabases(client) {
const databaselist = await client.db().admin().listDatabases();

 console.log("databaselist:")
 databaselist.database.forEach(db =>{
    console.log(`-${db.name}`)
 })
}