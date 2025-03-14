import { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";
import MovieCarousel from "../components/MovieCarousel";
import axios from "axios";

import "./MoviesGrid.css";

const moviesURL = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;

const Home = () => {
  const [topMovies, setTopMovies] = useState([]);
  const [popularMovies, setPopularMovies] = useState([]);

  // Função para buscar os filmes mais bem avaliados
  const getTopRatedMovies = async () => {
    try {
      const res = await axios.get(`${moviesURL}top_rated?api_key=${apiKey}&language=pt-BR`);
      setTopMovies(res.data.results);
    } catch (error) {
      console.error("Erro ao buscar filmes mais bem avaliados:", error);
    }
  };

  // Função para buscar filmes populares
  const getPopularMovies = async () => {
    try {
      const res = await axios.get(`${moviesURL}popular?api_key=${apiKey}&language=pt-BR`);
      setPopularMovies(res.data.results);
    } catch (error) {
      console.error("Erro ao buscar filmes populares:", error);
    }
  };

  useEffect(() => {
    getTopRatedMovies();
    getPopularMovies();
  }, []);

  return (
    <div className="home-container">
      {/* Carrossel de filmes */}
      <MovieCarousel movies={topMovies} />

      {/* Seção de Filmes Populares */}
      <div className="movies-section">
        <h2 className="section-title">🔥 Filmes Populares</h2>
        <div className="movies-grid">
          {popularMovies.length > 0 ? (
            popularMovies.map((movie) => <MovieCard key={movie.id} movie={movie} />)
          ) : (
            <p>Carregando filmes...</p>
          )}
        </div>
      </div>

      {/* Seção de Melhores Filmes */}
      <div className="movies-section">
        <h2 className="section-title">🏆 Melhores Avaliados</h2>
        <div className="movies-grid">
          {topMovies.length > 0 ? (
            topMovies.map((movie) => <MovieCard key={movie.id} movie={movie} />)
          ) : (
            <p>Carregando filmes...</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
