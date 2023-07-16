import mongoose from "mongoose";

const condectarDB  = async () =>{
    try {
        const conecciona = await mongoose.connect(process.env.MONGO_URI,{
            useNewUrlParser:true, 
            useUnifiedTopology:true,
        });
        const url = `conectado a mongodb server ${conecciona.Connection.host}- en el puerto ${conecciona.Connection.port}`
        console.log(url);
    } catch (error) {
        console.log(`${error.message}`);
        process.exit(1);
         }
};

export default condectarDB;

