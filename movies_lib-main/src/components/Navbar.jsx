import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BiSearchAlt2 } from "react-icons/bi";
import ShellIcon from "../assets/shell-icon.png"; // Adicione a imagem da concha na pasta assets

import "./Navbar.css";

const Navbar = () => {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!search) return;
    navigate(`/search?q=${search}`, { replace: true });
    setSearch("");
  };

  return (
    <nav id="navbar">
      {/* Logo com a imagem da concha */}
      <div className="logo">
        <img src={ShellIcon} alt="Shell Movies" className="shell-icon" />
        <h2>
          <Link to="/">Shell Movies</Link>
        </h2>
      </div>

      {/* Links de navegação */}
      <ul className="nav-links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/favorites">Favoritos</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/register">Registrar</Link>
        </li>
      </ul>

      {/* Barra de busca */}
      <form onSubmit={handleSubmit} className="search-form">
        <input
          type="text"
          placeholder="Busque um filme"
          onChange={(e) => setSearch(e.target.value)}
          value={search}
        />
        <button type="submit">
          <BiSearchAlt2 />
        </button>
      </form>
    </nav>
  );
};

export default Navbar;
