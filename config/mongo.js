const { MongoClient } = require('mongodb');

const uri = process.env.MONGO_URL;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true});

const state = {client: null};


exports.connect = async () => {
    try{
        state.client = await client.connect();
    }
    catch (e){
        console.log(e, 'error');
    }
}

exports.close =  async () => {
    await state.client.close();
    return true;
}

exports.get = () => state.client.db();