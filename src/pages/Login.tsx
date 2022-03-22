import React, { Component } from "react";
import styled from "styled-components";
import axios from "axios";
import qs from "query-string";

import { Route, Link } from "react-router-dom";

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
  idInput: string;
  pwInput: string;
  // apiData: {
  //   success: boolean;
  //   result: string;
  // };
}

// const loginDB = (id: string, pw: string) => {};

// async await 함수를 사용할 때,

// try {
//   const data = axios.post("url");
//   console.log(data);
// } catch {
//   // 오류 발생시 실행
// }

class Login extends React.Component<Props, State> {
  state = {
    idInput: "",
    pwInput: "",
  };

  onChangeID = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { value } = e.currentTarget;
    console.log("IDInput값 변화 : ", value);
    this.setState({
      idInput: value,
    });
  };

  onChangePW = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { value } = e.currentTarget;
    console.log("PWInput값 변화 : ", value);
    this.setState({
      pwInput: value,
    });
  };

  onLogin = (e: React.FormEvent): void => {
    e.preventDefault();

    let data = {
      id: this.state.idInput,
      pw: this.state.pwInput,
    };
    const headers = {
      "Content-type": "application/x-www-form-urlencoded; charset=UTF-8",
      Accept: "*/*",
    };

    axios
      .post(
        "http://localhost:9001/apis/menus/login/users",
        qs.stringify(data),
        { headers }
      )
      .then((res) => {
        console.log(res.data["success"]);
        // console.log(JSON.stringify(res.data["success"]));
        // this.setState({
        //     console.log(JSON.stringify(res.data["success"])
        // })
        // commit("loginSuccess", asd);
      })
      .catch((error) => {
        console.log(error);
        // throw new Error(error);
      });
    // return JSON.stringify(res.data["success"]);
  };

  render(): React.ReactNode {
    return (
      <Div>
        <div>
          <H1>로그인</H1>
        </div>
        <div>
          <Label>아이디</Label>
          <Input
            placeholder="아이디를 입력하시오"
            onChange={this.onChangeID}
            value={this.state.idInput}
          ></Input>
        </div>
        <div>
          <Label>비밀번호</Label>
          <Input
            placeholder="비밀번호를 입력하시오"
            onChange={this.onChangePW}
            value={this.state.pwInput}
          ></Input>
        </div>
        <Link to="/todoList">
          <LoginButton type="submit" onClick={this.onLogin}>
            로그인 하기
          </LoginButton>
        </Link>
      </Div>
    );
  }
}

export default Login;
