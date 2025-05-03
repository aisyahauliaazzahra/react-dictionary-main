import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("loggedIn");
    navigate("/login");
  };

  return (
    <div style={{ padding: "50px" }}>
      <h2>Selamat datang di Dictionary App!</h2>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Home;
