import mongoose from "mongoose";

const Connection =async () => {
    const URL = 'mongodb+srv://kaushalyadav536:kaushal1111@whatsappclone.keaogzb.mongodb.net/?retryWrites=true&w=majority';
    try{
        await mongoose.connect(URL, {useUnifiedTopology: true});
        console.log('Database connected succesfully');
    }catch(error){
        console.log('Error while connecting with the database', error.message );
    }
}

export default Connection;