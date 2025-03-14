import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./MovieCarousel.css";

const moviesURL = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;
const imagesURL = "https://image.tmdb.org/t/p/w1280"; // Maior qualidade disponível

const MovieCarousel = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const res = await fetch(`${moviesURL}popular?api_key=${apiKey}&language=pt-BR`);
        const data = await res.json();
        setMovies(data.results.slice(0, 10)); // Pegando os 10 primeiros
      } catch (error) {
        console.error("Erro ao buscar filmes:", error);
      }
    };

    fetchMovies();
  }, []);

  return (
    <div className="carousel-container">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        loop={true}
      >
        {movies.map((movie) => (
          <SwiperSlide key={movie.id}>
            <div className="carousel-slide">
              <img src={`${imagesURL}${movie.backdrop_path}`} alt={movie.title} loading="lazy" />

              <div className="carousel-info">
                <h2>{movie.title}</h2>
                <p>{movie.overview.length > 150 ? movie.overview.substring(0, 150) + "..." : movie.overview}</p>
                <Link to={`/movie/${movie.id}`} className="details-btn">
                  Ver Detalhes
                </Link>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default MovieCarousel;
