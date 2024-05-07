const mongoose  = require('mongoose');

const connectDb = async ()=>{
    try{
        const  connect = await mongoose.connect(process.env.CONNECTION_STRING || process.env.MONGO_URL);
        console.log("Database connected", connect.connection.host, connect.connection.name)

    } catch(error){
        console.log("Error in DB Connection: /n/n/n",error);
        process.exit(1);
    }
}

module.exports = connectDb