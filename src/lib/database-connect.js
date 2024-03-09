
import mongoose from "mongoose";

const {MONGO_URI} = process.env;

if(!MONGO_URI) {
    throw new Error('Define MongoDB environment variables!')
}

const connection = {};

export const databaseConnect = async () => {
    if(connection.isConnected)  return ;
    const databaseConnection = await mongoose.connect(MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology : true
    })
    console.log("databaseConnection ===>", databaseConnection.connections[0].readyState);
    connection.isConnected = databaseConnection.connections[0].readyState
}