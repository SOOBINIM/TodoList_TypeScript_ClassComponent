import React from "react";
import TodoList from "./component/counter/TodoList";
import TodoTicker from "./component/counter/TodoTicker";
import BookList from "./component/counter/BookList";

import "./App.css";
import styled from "styled-components";

const Header = styled.div`
  position: relative;
  background-color: #789395;
`;

const Body = styled.body`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: #e5e3c9;
`;

export default class App extends React.Component {
  render() {
    return (
      <div>
        <Header>
          <TodoTicker />
        </Header>
        <Body>
          <BookList />
          <TodoList />
        </Body>
        <footer></footer>
      </div>
    );
  }
}
