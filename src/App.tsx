import React from "react";
import TodoTicker from "./etc/counter/TodoTicker";
import "./App.css";
import styled from "styled-components";
import TodoCreateContain from "./containers/TodoCreateContain";

const Header = styled.div`
  position: relative;
  background-color: #2f4858;
  color: white;
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
        <React.StrictMode>
          <Body>
            <TodoCreateContain />

            {/* <TodoCreate />
          <TodoList /> */}
          </Body>
        </React.StrictMode>
        <footer></footer>
      </div>
    );
  }
}
