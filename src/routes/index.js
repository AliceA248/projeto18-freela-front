import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signin from "../pages/Signin";
import Signup from "../pages/Signup";
import Feed from "../pages/Feed";
import UserPage from "../pages/userPage";
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
          <Route path="/novoPost" element={<NovoPost />} />
          <Route path="/userPage" element={<UserPage />} />
        </Routes>
      </PostProvider>
    </BrowserRouter>
  );
}

export default RoutesApp;
