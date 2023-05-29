import React, { useEffect,useState } from "react";
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


function ChangeBackgroundImage( {children} ) {
  const [currentImage, setCurrentImage] = useState(0);
  const images = [
    "assets/img/grafite.png",
    "assets/img/art1.png",
    "assets/img/imagem.png"
  ];

  useEffect(() => {
    // Função para trocar a imagem a cada 5 segundos
    const changeImage = () => {
      setCurrentImage(current => (current + 1) % images.length);
    };

    const timeout = setTimeout(changeImage, 5000);

    return () => clearTimeout(timeout); // Limpa o timeout ao desmontar o componente
  }, []);

  return (
    <Container imageUrl={images[currentImage]}>
      {children}
    </Container>
  );
}



const Signin = () => {
  const { signin } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [error, setError] = useState("");

  const handleLogin = () => {
    if (!email | !senha) {
      setError("Preencha todos os campos");
      return;
    }

    const res = signin(email, senha);

    if (res) {
      setError(res);
      return;
    }

    navigate("/feed");
  };

  return (
    <>
    <ChangeBackgroundImage>
    <Logo>ArtStyler</Logo>
     <Container>
      <Label>LOGIN</Label>
      <Content>
        <Input
          type="email"
          placeholder="Digite seu E-mail"
          value={email}
          onChange={(e) => [setEmail(e.target.value), setError("")]}
        />
        <Input
          type="password"
          placeholder="Digite sua Senha"
          value={senha}
          onChange={(e) => [setSenha(e.target.value), setError("")]}
        />
        <LabelError>{error}</LabelError>
        <MyButton Text="Entrar" onClick={handleLogin} />
        <LabelSignup>
          Não tem uma conta?
          <Strong>
            <Link to="/signup">&nbsp;Registre-se</Link>
          </Strong>
        </LabelSignup>
      </Content>
    </Container>
    </ChangeBackgroundImage>
    
    </>
   
  );
};

export default Signin;


export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-image: ${props => `url(${props.imageUrl})`};
  height: 720px;
`;

export const Content = styled.div`
  gap: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  box-shadow: 0 1px 2px #0003;
  background-color: white;
  max-width: 350px;
  padding: 20px;
  border-radius: 5px;
`;

export const Label = styled.label`
  font-size: 18px;
  font-weight: 600;
  color: white;
  margin-bottom:10px;
`;

export const LabelSignup = styled.label`
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
  height:80px;
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



