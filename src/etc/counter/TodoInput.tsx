import React from "react";
import styled from "styled-components";

interface Props {
  createInput: string;
  onChange(e: React.ChangeEvent<HTMLInputElement>): void;
}

interface State {}

const Input = styled.input`
  margin: 0 auto;
  margin-top: 30px;
  margin-left: 30px;
  width: 500px;
  height: 50px;
  padding-left: 40px;
  border: none;
  border-radius: 50px;
  font-family: "Dongle", sans-serif;

  ::placeholder {
    font-size: 20px;
    text-align: center;
  }
`;

export default class TodoInput extends React.Component<Props, State> {
  render(): React.ReactNode {
    const { createInput } = this.props;
    console.log("B createInput : " + this.props.createInput);

    return (
      <div>
        <Input
          onChange={this.props.onChange}
          placeholder="할일을 입력 하세요."
          value={createInput}
        ></Input>
      </div>
    );
  }
}
