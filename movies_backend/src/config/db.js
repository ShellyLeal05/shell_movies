import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config(); // <- Esta linha garante que as variáveis do .env sejam carregadas

const connectDB = async () => {
    try {
        if (!process.env.MONGO_URI) {
            throw new Error("MONGO_URI não está definida no .env");
        }

        const conn = await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        console.log(`✅ MongoDB conectado: ${conn.connection.host}`);
    } catch (error) {
        console.error(`❌ Erro ao conectar ao MongoDB: ${error.message}`);
        process.exit(1);
    }
};

export default connectDB;
