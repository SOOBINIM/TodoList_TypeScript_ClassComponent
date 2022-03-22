import React from "react";
import "./App.css";
import TodoCreateContain from "./containers/TodoCreateContain";
import { Route, Routes, BrowserRouter as Routers } from "react-router-dom";
import Layout from "./pages/Layout";
import Login from "./pages/Login";

import NotFound from "./pages/NotFound";

export default class App extends React.Component {
  render() {
    return (
      <Routers>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/todoList" element={<TodoCreateContain />}></Route>;
            <Route index element={<Login />}></Route>
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </Routers>
    );
  }
}
