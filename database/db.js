import mongoose from "mongoose";
import dotenv from 'dotenv';

dotenv.config();

const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;


const Connection =async () => {
    const URL = `mongodb+srv://${USERNAME}:${PASSWORD}@whatsappclone.keaogzb.mongodb.net/?retryWrites=true&w=majority`;
    try{
        await mongoose.connect(URL, {useUnifiedTopology: true});
        console.log('Database connected succesfully');
    }catch(error){
        console.log('Error while connecting with the database', error.message );
    }
}

export default Connection;