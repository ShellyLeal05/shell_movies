import mongoose from "mongoose";

const FavoriteSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    movieId: { type: String, required: true },
    title: { type: String, required: true },
    posterPath: { type: String },
}, { timestamps: true });

export default mongoose.model("Favorite", FavoriteSchema);
