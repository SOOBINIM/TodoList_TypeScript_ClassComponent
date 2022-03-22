import { Outlet } from "react-router-dom";
import styled from "styled-components";
import TodoTicker from "../TodoTicker";

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

const Layout = () => {
  return (
    <div>
      <Header>
        <TodoTicker tickerText="수빈아 할수 있어!" />
      </Header>
      <Body>
        <Outlet />
      </Body>
    </div>
  );
};

export default Layout;
