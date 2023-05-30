import React, { useEffect, useState } from "react";
import Input from "../../components/Input";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import styled from "styled-components";

const MyButton = ({ Text, onClick, Type = "button" }) => {
  return (
    <Button type={Type} onClick={onClick}>
      {Text}
    </Button>
  );
};

function ChangeBackgroundImage({ children }) {
  const [currentImage, setCurrentImage] = useState(0);
  const images = [
    "assets/img/grafite.png",
    "assets/img/art1.png",
    "assets/img/unplash.png"
  ];

  useEffect(() => {
    // Função para trocar a imagem a cada 5 segundos
    const changeImage = () => {
      setCurrentImage((current) => (current + 1) % images.length);
    };

    const timeout = setTimeout(changeImage, 5000);

    return () => clearTimeout(timeout); // Limpa o timeout ao desmontar o componente
  }, []);

  return (
    <ContainerCadastro imageUrl={images[currentImage]}>
      {children}
    </ContainerCadastro>
  );
}

const Signup = () => {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmarSenha, setConfirmarSenha] = useState("");
  const [fotoPerfil, setFotoPerfil] = useState("");
  const [biografia, setBiografia] = useState("");
  const [error, setError] = useState("");
  const [isRegistered, setIsRegistered] = useState(false);
  const navigate = useNavigate();

  const { signup } = useAuth();

  const handleSignup = () => {
    if (!email || !senha || !confirmarSenha) {
      setError("Preencha todos os campos");
      return;
    } else if (senha !== confirmarSenha) {
      setError("As senhas não são iguais");
      return;
    } else if (biografia.length > 200) {
      setError("A biografia deve ter no máximo 200 caracteres");
      return;
    } else if (!isValidUrl(fotoPerfil)) {
      setError("A foto de perfil deve ser uma URL válida");
      return;
    }

    const res = signup(email, senha);

    if (res) {
      setError(res);
      return;
    }

    setIsRegistered(true);
  };

  const isValidUrl = (url) => {
    try {
      new URL(url);
      return true;
    } catch (error) {
      return false;
    }
  };

  useEffect(() => {
    if (isRegistered) {
      // No componente Signup, após o registro bem-sucedido
      navigate("/userPage", { state: { nome, email, fotoPerfil, biografia } });

    }
  }, [isRegistered, navigate]);

  return (
    <ChangeBackgroundImage>
      <Wrapper>
        <Logo>ArtStyler</Logo>
        <Container>
          <Content>
            <Input
              type="nome"
              placeholder="Digite seu nome"
              value={nome}
              onChange={(e) => [setNome(e.target.value), setError("")]}
            />
            <Input
              type="email"
              placeholder="Digite seu E-mail"
              value={email}
              onChange={(e) => [setEmail(e.target.value), setError("")]}
            />
            <Input
              type="text"
              placeholder="Foto de Perfil"
              value={fotoPerfil}
              onChange={(e) => [setFotoPerfil(e.target.value), setError("")]}
            />
            <Input
              type="text"
              placeholder="Biografia"
              value={biografia}
              onChange={(e) => [setBiografia(e.target.value), setError("")]}
            />
            <Input
              type="password"
              placeholder="Digite sua Senha"
              value={senha}
              onChange={(e) => [setSenha(e.target.value), setError("")]}
            />
            <Input
              type="password"
              placeholder="Confirme sua Senha"
              value={confirmarSenha}
              onChange={(e) => [
                setConfirmarSenha(e.target.value),
                setError("")
              ]}
            />
            <LabelError>{error}</LabelError>
            <MyButton Text="Inscrever-se" onClick={handleSignup} />
            <LabelSignin>
              Já tem uma conta?
              <Strong>
                <Link to="/"> Entre</Link>
              </Strong>
            </LabelSignin>
          </Content>
        </Container>
      </Wrapper>
    </ChangeBackgroundImage>
  );
};

export default Signup;






const Logo = styled.div`
  background: black;
  color: white;
  padding: 20px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  text-shadow: 2px 2px #333;
  font-size: 3rem;
  font-family: "Arial Black", sans-serif;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9999;
`;


export const Content = styled.div`
  gap: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 500px;
  box-shadow: 0 1px 2px #0003;
  background-color: white;
  max-width: 350px;
  padding: 20px;
  border-radius: 5px;
  margin-top: 80px;
  img {
    width:200px;
  }
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 80px;
`;

export const Label = styled.label`
  font-size: 18px;
  font-weight: 600;
  color: #676767;
  margin-top:50px;
`;

export const LabelSignin = styled.label`
  font-size: 16px;
  color: #676767;
`;

export const LabelError = styled.label`
  font-size: 14px;
  color: red;
`;

export const Strong = styled.strong`
  cursor: pointer;

  a {
    text-decoration: none;
    color: #676767;
  }
`;

const Container = styled.div`  

`;


const ContainerCadastro = styled.div`
  background-image: ${props => `url(${props.imageUrl})`};
  height: 700px;
`;



const Button = styled.button`
  padding: 16px 20px;
  outline: none;
  border: none;
  border-radius: 5px;
  width: 100%;
  cursor: pointer;
  background-color: black;
  color: white;
  font-weight: 600;
  font-size: 16px;
  max-width: 350px;
  margin: 3px;

  &:active {
    transform: scale(0.97);
  }
`;

