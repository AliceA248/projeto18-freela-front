import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { PostContext } from '../../contexts/post.context'
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
      userName: 'YourUsername',
      userImage: 'assets/img/9gag.svg',
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
    <div>
      <h2>Novo Post</h2>
      <input
        type="text"
        placeholder="URL da imagem"
        value={imageUrl}
        onChange={(e) => setImageUrl(e.target.value)}
      />
      <textarea
        placeholder="Descrição"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      ></textarea>
      <button onClick={handleAddPost}>Adicionar Post</button>
      <button onClick={handleNavigateFeed}>Ir para o Feed</button>
    </div>
  );
}

export default NovoPost;



// Estilos e componentes adicionais (se necessário)


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
  margin-left:560px;
  margin-top:80px;
`;

export const Label = styled.label`
  font-size: 18px;
  font-weight: 600;
  color: #676767;
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
const Input = styled.input`  
`;

const ContainerCadastro = styled.div`
  background-image: ${props => `url(${props.imageUrl})`};
  height: 700px;
`;



const MyButton = styled.button`
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

