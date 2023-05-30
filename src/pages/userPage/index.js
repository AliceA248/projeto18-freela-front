import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";

const UserPage = () => {
  const location = useLocation();
  const { nome, email, fotoPerfil, biografia } = location.state;
  const navigate = useNavigate();


  const handleNavigatePaginaInicial = () => {
    navigate("/feed");
  };


  return (
    <div>
      <Logo>ArtStyler</Logo>
      <Container>
        <img src={fotoPerfil} alt="Foto de Perfil" />
        <h2>Informações do Usuário</h2>
        <p>Nome: {nome}</p>
        <p>Email: {email}</p>
        <p>Biografia: {biografia}</p>
        <button onClick={handleNavigatePaginaInicial}>Ir para o feed</button>
      </Container>

    </div>
  );
};

export default UserPage;




const Logo = styled.div`
  background: black;
  color: white;
  padding: 20px;
  text-align: center;
  display:flex;
  justify-content:center;
  align-items:center;
  text-shadow: 2px 2px #333;
  font-size: 3rem;
  font-family: "Arial Black", sans-serif;
  width: 100vw;
  height:90px;
  position: fixed;
  top: 0;
  left: 0;
`;

const Tela = styled.div`
  margin: 0;
  background-image: url("assets/img/grafite.png");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Container = styled.div`
  padding: 40px;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 800px;
  max-width: 90%;
  background-color: #fff;
  color: #333;
  margin-left:300px;
  margin-top:200px;
  img {
    width:200px;
  }
  h2 {
    margin-top:15px;
    font-size: 24px;
    font-weight: bold;
    color: #333;
    margin-top: 20px;
  }
  p {
    margin-top:10px;
  }

  @media (max-width: 900px) {
    width: 90%;
    padding: 30px;
  }
`;




