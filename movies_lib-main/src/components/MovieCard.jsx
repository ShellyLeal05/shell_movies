import { Link } from "react-router-dom";
import { FaStar, FaHeart } from "react-icons/fa";
import { useState } from "react";
import axios from "axios";
import "./MovieCard.css"; // Certifique-se de importar o CSS correto

const imagesURL = import.meta.env.VITE_IMG;

const MovieCard = ({ movie, showLink = true }) => {
  const [favorited, setFavorited] = useState(false);

  const handleFavorite = async () => {
    try {
      const token = localStorage.getItem("token"); // Obtém o token do usuário logado
      if (!token) {
        alert("Você precisa estar logado para favoritar filmes!");
        return;
      }

      const response = await axios.post(
        "http://localhost:5000/api/favorites/add",
        {
          movieId: movie.id,
          title: movie.title,
          posterPath: movie.poster_path,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.status === 201) {
        setFavorited(true);
        alert("Filme favoritado com sucesso!");
      }
    } catch (error) {
      console.error("Erro ao favoritar o filme:", error);
      alert("Erro ao favoritar o filme.");
    }
  };

  return (
    <div className="movie-card">
      <img src={imagesURL + movie.poster_path} alt={movie.title} />
      <h2>{movie.title}</h2>
      <p>
        <FaStar /> {movie.vote_average.toFixed(1)}
      </p>

      {/* Botões alinhados corretamente */}
      <div className="buttons">
        {showLink && (
          <Link to={`/movie/${movie.id}`} className="details-btn">
            Ver Detalhes
          </Link>
        )}
        <button onClick={handleFavorite} className="fav-btn" disabled={favorited}>
          <FaHeart /> {favorited ? "Favoritado" : "Favoritar"}
        </button>
      </div>
    </div>
  );
};

export default MovieCard;
