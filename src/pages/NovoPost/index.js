import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { PostContext } from '../../contexts/post.context';
import styled from 'styled-components';

function NovoPost() {
  const { addPost } = useContext(PostContext);
  const [imageUrl, setImageUrl] = useState('');
  const [description, setDescription] = useState('');
  const navigate = useNavigate();

  const isValidUrl = (url) => {
    const urlPattern = /^https?:\/\/.*/;
    return urlPattern.test(url);
  };

  const handleAddPost = () => {
    if (!isValidUrl(imageUrl)) {
      // Exibir mensagem de erro para URL inválida
      console.log('URL inválida');
      return;
    }

    if (description.trim() === '') {
      // Exibir mensagem de erro para descrição vazia
      console.log('Descrição vazia');
      return;
    }

    const newPost = {
      userName: 'Voce S2',
      userImage: 'assets/img/cool.png',
      contentImage: imageUrl,
      likedByImage: 'assets/img/9gag.svg',
      likedByText: '',
      initialLikesAmount: 0,
      saved: false,
      isLiked: false,
      description: description,
    };

    addPost(newPost);
    navigate('/feed');
  };

  const handleNavigateFeed = () => {
    navigate('/feed');
  };

  return (
    <Container>
      <Logo>ArtStyler</Logo>
      <Heading>Novo Post</Heading>
      <Input
        type="text"
        placeholder="URL da imagem"
        value={imageUrl}
        onChange={(e) => setImageUrl(e.target.value)}
      />
      <TextArea
        placeholder="Descrição"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      ></TextArea>
      <ButtonContainer>
          <Button onClick={handleAddPost}>Adicionar Post</Button>
          <Button onClick={handleNavigateFeed}>Ir para o Feed</Button>
      </ButtonContainer>
      
    </Container>
  );
}


const Heading = styled.div`
  font-size: 24px;
  color: #333;
  margin-top: 160px;
  font-family: 'Arial', sans-serif;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 2px;
`;


const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

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




const Input = styled.input`
  width: 100%;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
  margin-bottom: 16px;
  margin-top:10px;
`;

const ButtonContainer = styled.div`
    display:flex;


`;


const TextArea = styled.textarea`
  width: 100%;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
  margin-bottom: 16px;
  resize: vertical;
`;

const Button = styled.button`
  background-color: darkgray;
  color: white;
  padding: 12px 24px;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
  margin-left:5px;

  &:hover {
    background-color: gray;
  }
`;

export default NovoPost;
