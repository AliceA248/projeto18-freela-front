import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signin from "../pages/Signin";
import Signup from "../pages/Signup";
import Feed from "../pages/Feed";
import Usuario from "../pages/Usuario";
import NovoPost from "../pages/NovoPost";
import { PostProvider } from "../contexts/post.context";

function RoutesApp() {
  return (
    <BrowserRouter>
      <PostProvider>
        <Routes>
          <Route path="/" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/feed" element={<Feed />} />
          <Route path="/usuario" element={<Usuario />} />
          <Route path="/novoPost" element={<NovoPost />} />
        </Routes>
      </PostProvider>
    </BrowserRouter>
  );
}

export default RoutesApp;
