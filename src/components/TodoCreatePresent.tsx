import React from "react";
import styled from "styled-components";
import DeleteIcon from "@mui/icons-material/Delete";

const Div = styled.div`
  margin: 0 auto;

  width: 860px;

  margin-top: 200px;

  background-color: #628784;
  border-radius: 50px;
`;

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

const CreateButton = styled.button`
  margin-top: 30px;
  width: 150px;
  height: 50px;
  border-radius: 30px;
  background-color: #89a698;
  font-family: "Dongle", sans-serif;
  font-size: 30px;

  cursor: pointer;
  border: none;
  outline: none;
`;

const Form = styled.form`
  display: flex;
  justify-content: space-around;
  margin-right: 50px;
`;

const UlDiv = styled.div`
  display: flex;
`;

const Li = styled.li`
  list-style: none;
  font-size: 32px;
  font-weight: 400;
  background-color: #b5c5ae;

  width: 769px;
  border-radius: 10px;
  margin-bottom: 10px;
  padding: 15px 5px;

  display: flex;
  justify-content: space-between;
`;

const noPointer = { cursor: "pointer" };

type todoProps = {
  todoItem: {
    id: number;
    todoTitle: string;
    todoComplete: boolean;
  }[];
  createInput: string;
  onCreate: (e: React.FormEvent) => void;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onDelete: (id: number) => void;
};

export default class TodoCreate extends React.Component<todoProps> {
  render(): React.ReactNode {
    return (
      <Div>
        <Form onSubmit={this.props.onCreate}>
          <Input
            onChange={this.props.onChange}
            placeholder="할일을 입력 하세요."
            // value={createInput}
            value={this.props.createInput}
          ></Input>
          <CreateButton>등록</CreateButton>
        </Form>
        <UlDiv>
          <ul>
            {this.props.todoItem.map((data) => (
              <Li>
                {data.todoTitle}
                <div>
                  <DeleteIcon
                    fontSize="medium"
                    style={noPointer}
                    onClick={() => this.props.onDelete(data.id)}
                  >
                    삭제
                  </DeleteIcon>
                </div>
              </Li>
            ))}
          </ul>
        </UlDiv>
      </Div>
    );
  }
}
