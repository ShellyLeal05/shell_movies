import express from "express";
import Favorite from "../models/Favorite.js";
import authMiddleware from "../middleware/authMiddleware.js";

const router = express.Router();

// Adicionar filme aos favoritos
router.post("/add", authMiddleware, async (req, res) => {
    const { movieId, title, posterPath } = req.body;
    const userId = req.user.id;

    try {
        const newFavorite = new Favorite({ user: userId, movieId, title, posterPath });
        await newFavorite.save();
        res.status(201).json({ message: "Filme favoritado!" });
    } catch (error) {
        res.status(500).json({ message: "Erro ao salvar favorito" });
    }
});

// Remover filme dos favoritos
router.delete("/remove/:id", authMiddleware, async (req, res) => {
    try {
        await Favorite.findOneAndDelete({ user: req.user.id, movieId: req.params.id });
        res.json({ message: "Filme removido dos favoritos" });
    } catch (error) {
        res.status(500).json({ message: "Erro ao remover favorito" });
    }
});

export default router;
