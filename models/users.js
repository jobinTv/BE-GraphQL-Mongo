const db = require('../config/mongo');

const getUsers = async (tableName) => {
   try{
    const result = await db.get().collection(tableName).find().toArray();
    return result;
   } 
   catch(e) {
       console.log(e, 'error');
   }
}

const insertUser = async (body, tableName) => {
    try{
        const result = await db.get().collection(tableName).find().toArray();
        await db.get().collection(tableName).insertOne({id: result.length++, ...body});
        return body;
    }
    catch(e){
        console.log(e, 'error');
    }
}

module.exports = { insertUser, getUsers };