import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FaHeart, FaShareAlt, FaStar, FaClock, FaPlay } from "react-icons/fa";
import "./Movie.css";

const moviesURL = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;
const imagesURL = import.meta.env.VITE_IMG;

const Movie = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [trailerKey, setTrailerKey] = useState(null);

  useEffect(() => {
    const getMovie = async () => {
      try {
        // Buscando detalhes do filme
        const movieUrl = `${moviesURL}${id}?api_key=${apiKey}&language=pt-BR`;
        const res = await fetch(movieUrl);
        const data = await res.json();

        if (res.status === 401) {
          console.error("Erro 401: API Key inválida ou ausente.");
          return;
        }

        setMovie(data);

        // Buscando trailer do filme
        const trailerUrl = `${moviesURL}${id}/videos?api_key=${apiKey}`;
        const trailerRes = await fetch(trailerUrl);
        const trailerData = await trailerRes.json();

        if (trailerData.results && trailerData.results.length > 0) {
          setTrailerKey(trailerData.results[0].key);
        }
      } catch (error) {
        console.error("Erro ao buscar filme:", error);
      }
    };

    getMovie();
  }, [id]);

  if (!movie) {
    return <p className="loading">Carregando...</p>;
  }

  return (
    <div className="movie-page">
      <div className="movie-container">
        
        {/* Agrupando imagem e trailer lado a lado */}
        <div className="movie-content">
          
          {/* Pôster do filme */}
          <div className="movie-poster">
            {movie.poster_path ? (
              <img src={`${imagesURL}${movie.poster_path}`} alt={movie.title} />
            ) : (
              <p>Imagem não disponível</p>
            )}
          </div>

          {/* Trailer ao lado */}
          {trailerKey && (
            <div className="movie-trailer">
              <h2><FaPlay /> Trailer</h2>
              <iframe
                src={`https://www.youtube.com/embed/${trailerKey}`}
                title="YouTube video player"
                frameBorder="0"
                allowFullScreen
              ></iframe>
            </div>
          )}
        </div>

        {/* Informações abaixo */}
        <div className="movie-info">
          <h1>
            {movie.title} ({movie.release_date ? movie.release_date.split("-")[0] : "Data desconhecida"})
          </h1>

          <div className="movie-actions">
            <button className="fav-btn">
              <FaHeart /> Adicionar aos Favoritos
            </button>
            <button className="share-btn">
              <FaShareAlt /> Compartilhar
            </button>
          </div>

          <p><FaStar /> {movie.vote_average ? movie.vote_average.toFixed(1) : "N/A"} / 10</p>
          <p><FaClock /> {movie.runtime ? `${movie.runtime} min` : "Duração desconhecida"}</p>

          <strong>Gêneros:</strong>
          <div className="genre-container">
            {movie.genres ? movie.genres.map((genre) => (
              <span key={genre.id} className="genre-badge">{genre.name}</span>
            )) : <p>Gêneros não disponíveis.</p>}
          </div>

          <p className="movie-description">{movie.overview || "Descrição não disponível."}</p>
        </div>

      </div>
    </div>
  );
};

export default Movie;
