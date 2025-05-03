import React from "react";
import { useNavigate } from "react-router-dom";
import "./Header.css";

const Header = ({ category, setCategory, word, setWord }) => {
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setWord(e.target.value);
  };

  const goToDetailPage = () => {
    navigate("/IstilahDetail");
  };

  return (
    <div className="glosariumz-header">
      <div className="search-container">
        <span className="search-icon">🔍</span>
        <input
          type="text"
          value={word}
          onChange={handleInputChange}
          placeholder="Ubur-ubur ikan Lele, cari disini Lee"
        />
            <button className="btn login" onClick={() => navigate(`/istilah`)}>
              Cari
            </button>  
      </div>
    </div>
  );
};

export default Header;
