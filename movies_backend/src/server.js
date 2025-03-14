import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoutes.js";
import favoriteRoutes from "./routes/favoriteRoutes.js";

// Configurar variáveis de ambiente
dotenv.config();

// Conectar ao MongoDB
connectDB();

const app = express();

// Middlewares
app.use(express.json());
app.use(cors());

// Rotas
app.use("/api/auth", authRoutes);
app.use("/api/favorites", favoriteRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🔥 Servidor rodando na porta ${PORT}`));
