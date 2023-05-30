import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { PostContext } from '../../contexts/post.context';
import styled from 'styled-components';

function NavBar() {
  const navigate = useNavigate();
  const [searchValue, setSearchValue] = useState("");

  const handleNavigate = () => {
    navigate("/usuario");
  };

  const handleNavigatePost = () => {
    navigate("/NovoPost");
  };

  const handleSearchInputChange = (event) => {
    setSearchValue(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    console.log("Valor da pesquisa:", searchValue);
  };

  return (
    <NavBarContainer>
      <Logo>
        Criar Post
        <ion-icon name="logo-instagram" onClick={handleNavigatePost}></ion-icon>
        <span>ArtStyler</span>
      </Logo>
      <Pesquisa>
        <form onSubmit={handleSearchSubmit}>
          <input
            type="text"
            placeholder="Pesquisar"
            value={searchValue}
            onChange={handleSearchInputChange}
          />
        </form>
      </Pesquisa>
      <div>
        User
        <ion-icon name="paper-plane-outline" onClick={handleNavigate}></ion-icon>
      </div>
    </NavBarContainer>
  );
}

function Feed() {
  return (
    <FeedContainer>
      <Posts />
      <SideBar />
    </FeedContainer>
  );
}

function Post(props) {
  const { userName, userImage, contentImage, likedByImage, likedByText, initialLikesAmount, saved: isSaved, isLiked } = props;

  const [saved, setSaved] = useState(isSaved);
  const [liked, setLiked] = useState(isLiked);
  const [counter, setCounter] = useState(initialLikesAmount);
  const [animation, setAnimation] = useState(false);

  function clickLike() {
    if (liked === false) {
      setCounter(counter + 1);
    } else {
      setCounter(counter - 1);
    }
    setLiked(!liked);
  }

  function clickImage(event) {
    if (event.detail === 2) {
      setAnimation(true);
      if (liked === false) {
        setCounter(counter + 1);
        setLiked(true);
      }
      setTimeout(() => {
        setAnimation(false);
      }, 500);
    }
  }

  return (
    <PostContainer>
      <Topo>
        <Usuario>
          <img src={userImage} alt="User" />
          <NameUserPost>
            {userName}
          </NameUserPost>
        </Usuario>
        <Save>
          <ion-icon name="ellipsis-horizontal"></ion-icon>
        </Save>
      </Topo>
      <Conteudo>
        <img onClick={clickImage} src={contentImage} alt="Content" />
      </Conteudo>
      <Fundo>
        <AcoesFundo>
          <ion-icon
            onClick={clickLike}
            name={liked ? "heart" : "heart-outline"}
            className={liked ? "liked" : ""}
          ></ion-icon>
          <ion-icon name="chatbubble-outline"></ion-icon>
          <ion-icon name="paper-plane-outline"></ion-icon>
          <ion-icon
            onClick={() => setSaved(!saved)}
            name={saved ? "bookmark" : "bookmark-outline"}
          ></ion-icon>
        </AcoesFundo>
        <Curtidas>
          <img src={likedByImage} alt="Liked By" />
          <div>
            Curtido por <strong>{likedByText}</strong> e{" "}
            <strong>outras {counter} pessoas</strong>
          </div>
        </Curtidas>
      </Fundo>
    </PostContainer>
  );
}


function Posts() {
  const { posts } = useContext(PostContext);

  const staticPosts = [
    {
      userName: "meowed",
      userImage: "assets/img/meowed.svg",
      contentImage: "assets/img/gato-telefone.svg",
      likedByImage: "assets/img/respondeai.svg",
      likedByText: "respondeai",
      initialLikesAmount: 101523,
      saved: true,
      isLiked: false,
    },
    {
      userName: "barked",
      userImage: "assets/img/barked.svg",
      contentImage: "assets/img/dog.svg",
      likedByImage: "assets/img/adorable_animals.svg",
      likedByText: "adorable_animals",
      initialLikesAmount: 200541,
      saved: false,
      isLiked: true,
    },
  ];

  return (
    <PostsContainer>
      {posts.map((post, index) => (
        <Post
          key={index}
          userName={post.userName}
          userImage={post.userImage}
          contentImage={post.contentImage}
          likedByImage={post.likedByImage}
          likedByText={post.likedByText}
          initialLikesAmount={post.initialLikesAmount}
          saved={post.saved}
          isLiked={post.isLiked}
        />
      ))}
      {staticPosts.map((post, index) => (
        <Post
          key={index + posts.length} // Use um valor único para a chave do post estático
          userName={post.userName}
          userImage={post.userImage}
          contentImage={post.contentImage}
          likedByImage={post.likedByImage}
          likedByText={post.likedByText}
          initialLikesAmount={post.initialLikesAmount}
          saved={post.saved}
          isLiked={post.isLiked}
        />
      ))}
    </PostsContainer>
  );
}







function SideBar() {
  return (
    <SugestoesContainer>
      <Titulo>Confira esses blogs</Titulo>
      <SugestaoContainer>
        <img src="assets/img/bad.vibes.memes.svg" alt="User" />
        <UsuarioSugestao>
            <div className="nome">bad.vibes.memes</div>
            <div className="razao">Segue você</div>
        </UsuarioSugestao>
        <Seguir>Seguir</Seguir>
      </SugestaoContainer>
      <SugestaoContainer>
        <img src="assets/img/chibirdart.svg" alt="User" />
        <UsuarioSugestao>  
            <div className="nome">chibirdart</div>
            <div className="razao">Segue você</div>
        </UsuarioSugestao>
        <Seguir>Seguir</Seguir>
      </SugestaoContainer>
      <SugestaoContainer>
          <img src="assets/img/razoesparaacreditar.svg" alt="User" />
          <UsuarioSugestao>
             <div className="nome">razoesparaacreditar</div>
             <div className="razao">Novo no Instagram</div>
          </UsuarioSugestao>
          <Seguir>Seguir</Seguir>
      </SugestaoContainer>

      <SugestaoContainer>
        <img src="assets/img/adorable_animals.svg" alt="User" />
        <UsuarioSugestao>
            <div className="nome">adorable_animals</div>
            <div className="razao">Segue você</div>
        </UsuarioSugestao>
        <Seguir>Seguir</Seguir>
      </SugestaoContainer>
    </SugestoesContainer>
  );
}



      function App() {
return (
      <>
        <NavBar />
        <Feed />
      </>
      );
}

      export default App; 



const NavBarContainer = styled.div`
      position: fixed;
      top: 0;
      left: 0;
      background-color: white;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 10px;
      width: 100%;
      height: 50px;
      z-index: 999; /* Adicione um valor alto para a propriedade z-index para garantir que o NavBar esteja sempre no topo */
    `;



const Logo = styled.div`
      display: flex;
      align-items: center;
      font-size: 24px;
      font-weight: bold;
      `;

const Nome = styled.div`
      margin-left: 10px;
      `;

const Pesquisa = styled.div`
      flex: 1;
      margin: 0 20px;
      `;

const Input = styled.input`
      width: 350px;
      height: 30px;
      padding: 5px 10px;
      border-radius: 5px;
      border: none;
      outline: none;
      background-color: lightgray;
      color: white;

      `;


const Icones = styled.div`
      display: flex;
      align-items: center;
      color: white;
      cursor:pointer;

      ion-icon {
    &:not(:last-child) {
        margin-right: 10px;
        cursor:pointer
    }
  }
      `;

const PostsContainer = styled.div`
      background-color:black;
      margin-top:50px;
      display: flex;
      flex-direction: column; /* Define a direção dos elementos como coluna */
      margin-left:200px;
      
      `;
const PostContainer = styled.div`
      background-color: #222222;
      width: 600px;
      height: 625px;
      margin-bottom: 20px;
      position: relative;

      img {
      width: 100%;
      height: 100%;
      object-fit: cover;
        }
      `;
const IconesMobile = styled.div`
      cursor: pointer;
      `;

const FeedContainer = styled.div`
      display:flex;
      background-color:black;
      `;

const Esquerda = styled.div`
      /* Estilos para a seção esquerda */
      `;

const Topo = styled.div`
      display:flex;
      align-items:center;
      color:white;
      img {
        width:35px;
    }
      `;

const Usuario = styled.div`
      display:flex;
      align-items:center;
      margin-top:10px;
      margin-bottom:10px;
      margin-left:10px;
      justify-content:space-between	;
      img {
        width:40px;
        height:40px;
      }

      `;

const NameUserPost = styled.div`
      display:flex;
      justify-content:space-between;
      margin-left:10px;

      `;

const Save = styled.div`
      margin-left:420px;
      `;


const Acoes = styled.div`
      /* Estilos para as ações do post */
      `;

const Conteudo = styled.div`
      height: 500px; /* Defina a altura desejada */
      `;


const Fundo = styled.div`
          position: absolute;
          bottom: 5px;

      `;

const AcoesFundo = styled.div`
      display:flex;
      margin-top:5px;
      margin-left:15px;
      color:white;
      gap:5px;
      `;


const Curtidas = styled.div`
      display:flex;
      align-items:center;
      margin-top:10px;
      margin-left:10px;
      color:white;
      gap:5px;
      img {
        width:30px;
  }
      `;

const SugestoesContainer = styled.div`
      margin-left:150px;
      width:320px;
      height:420px;
      display: flex;
      flex-direction: column;
      padding: 10px;
      justify-content: space-between;
      margin-bottom: 10px;
      background-color: black;
      margin-top:15px;
      margin-left:100px;
      color:white;

      `;

const Titulo = styled.div`
      font-weight: bold;
      margin-bottom: 10px;
      `;

const SugestaoContainer = styled.div`
      display:flex;
      height: 50px; /* Defina a altura desejada */
      img {
        margin-top:-10px;
  }

      `;

const UsuarioSugestao = styled.div`
      margin-left:10px;
      `;

const Seguir = styled.div`
      color: blue;
      cursor: pointer;
      align-content:center;
      position: absolute;
      right:250px;`