import React from "react";
import styled from "styled-components";
import TodoTicker from "../TodoTicker";
import HomeIcon from "@mui/icons-material/Home";
import { Javascript } from "@mui/icons-material";

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
`;

const Footer = styled.footer`
  position: relative;
  color: red;
`;

const buttonStlye = {
  cursor: "pointer",
  height: "300px",
  width: "300px",
  color: "black",
};

interface Props {}

interface State {}

export default class NotFound extends React.Component<Props, State> {
  render(): React.ReactNode {
    return (
      <div>
        <Wrap>
          <h1>홈으로 가자</h1>
          <HomeIcon
            style={buttonStlye}
            onClick={() => window.location.replace("/")}
          ></HomeIcon>
        </Wrap>
        <Footer></Footer>
      </div>
    );
  }
}
