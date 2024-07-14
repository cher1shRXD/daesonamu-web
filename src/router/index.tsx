import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../pages/login";
import Home from "../pages/home";
import Signup from "../pages/signup";
import Layout from "../layouts/Layout";
import Write from "../pages/write";
import Shorts from "../pages/shorts";
import Board from "../pages/board";
import Detail from "../pages/detail";
import Edit from "../pages/edit";
import NotFound from "../pages/not_found";
import Profile from "../pages/user";
import CodingBoard from "../pages/coding";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/signup" element={<Signup />}></Route>
          <Route path="/write" element={<Write />}></Route>
          <Route path="/shorts" element={<Shorts />}></Route>
          <Route path="/free-board" element={<Board />}></Route>
          <Route path="/coding-board" element={<CodingBoard />}></Route>
          <Route path="/user" element={<Profile />}></Route>
          <Route path="/post/:id" element={<Detail />}></Route>
          <Route path="/edit/:id" element={<Edit />}></Route>
          <Route path="/*" element={<NotFound />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
