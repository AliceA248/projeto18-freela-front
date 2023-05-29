import React from "react";
import styled from "styled-components";

const Usuario = ({ nome, email, fotoPerfil, biografia }) => {
  return (
    <Tela>
       <Container>
      <Title>Informações do Usuário</Title>
      <Info>Nome: {nome}</Info>
      <Info>Email: {email}</Info>
      <Info>Foto de Perfil: {fotoPerfil}</Info>
      <Info>Biografia: {biografia}</Info>
    </Container>
    </Tela>
   
  );
};

const Tela = styled.p`
   background-image: url("assets/img/grafite.png");
   width:100vw;
   height:100vw;
`;

const Container = styled.div`
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 800px;
  margin-left: 300px;
  margin-top: 200px;
 background-color:white;
`;


const Title = styled.h2`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
`;

const Info = styled.p`
  font-size: 16px;
  margin-bottom: 5px;
`;

export default Usuario;
