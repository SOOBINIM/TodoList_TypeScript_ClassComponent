import React, { Component } from "react";
import styled from "styled-components";
import axios from "axios";

const Div = styled.div`
  margin: 0 auto;
  width: 860px;
  height: 372px;
  margin-top: 200px;
  background-color: #628784;
  border-radius: 50px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Input = styled.input`
  margin: 0 auto;
  margin-top: 10px;
  margin-left: 30px;
  width: 250px;
  height: 50px;
  /* padding-left: 40px; */
  border: none;
  border-radius: 50px;
  font-size: large;
  font-family: "Dongle", sans-serif;

  ::placeholder {
    font-size: 20px;
    text-align: center;
  }
`;

const H1 = styled.h1`
  width: 769px;
  border-radius: 10px;
  margin-left: auto;
  margin-right: auto;
  /* margin-bottom: 10px; */
  padding: 15px 5px;
  text-align: center;

  background-color: #b5c5ae;
`;

const Label = styled.label`
  font-size: x-large;
  font-family: "Dongle", sans-serif;
`;

const LoginButton = styled.button`
  margin-top: 30px;
  width: 769px;
  height: 50px;
  border-radius: 30px;
  background-color: #89a698;
  font-family: "Dongle", sans-serif;
  font-size: 30px;

  cursor: pointer;
  border: none;
  outline: none;
`;

interface Props {}

interface State {
  reqObj: {
    id: string;
    pw: string;
  };
}

// const loginDB = (id: string, pw: string) => {};

const url =
  "https://9acf627a-ff2c-40b7-a746-0f83c951d2dd.mock.pstmn.io/login/success";

axios
  .post(url, {
    id: "soo2",
    pw: "soobin",
  })
  .then(function (response) {
    console.log(response.data);
  })
  .catch(function (error) {
    console.log(error);
  })
  .then(function () {
    // 항상 실행
  });

// async await 함수를 사용할 때,

// try {
//   const data = axios.post("url");
//   console.log(data);
// } catch {
//   // 오류 발생시 실행
// }

class Login extends React.Component<Props, State> {
  render(): React.ReactNode {
    return (
      <Div>
        <div>
          <H1>로그인</H1>
        </div>
        <div>
          <Label>아이디</Label>
          <Input placeholder="아이디를 입력하시오"></Input>
        </div>
        <div>
          <Label>비밀번호</Label>
          <Input placeholder="비밀번호를 입력하시오"></Input>
        </div>
        <LoginButton type="submit">로그인 하기</LoginButton>
      </Div>
    );
  }
}

export default Login;
