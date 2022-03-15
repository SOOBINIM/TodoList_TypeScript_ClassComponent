import React from "react";
import styled from "styled-components";
import TodoInput from "./TodoInput";

const Div = styled.div`
  margin: 0 auto;

  width: 860px;

  margin-top: 200px;

  background-color: #b4cfb0;
  border-radius: 50px;
`;

const UlDiv = styled.div`
  display: flex;
`;

const Ul = styled.ul``;

const Li = styled.li`
  list-style: none;
  font-size: 32px;
  font-weight: 400;
  background-color: #e5e3c9;

  width: 769px;
  border-radius: 10px;
  margin-bottom: 10px;
  padding: 15px 5px;
`;

const Form = styled.form`
  display: flex;
  justify-content: space-around;
  margin-right: 50px;
`;

const Button = styled.button`
  margin-top: 30px;
  width: 150px;
  height: 50px;
  border-radius: 30px;
  background-color: #94b49f;
  font-family: "Dongle", sans-serif;
  font-size: 30px;

  cursor: pointer;
  border: none;
  outline: none;
`;

interface Props {}

interface State {
  todoItem: {
    todoTitle: string;
    todoComplete: boolean;
  }[];
  createInput: string;
}

export default class TodoList extends React.Component<Props, State> {
  constructor(props: State) {
    super(props);
    this.state = {
      todoItem: [
        { todoTitle: "리액트 공부하기", todoComplete: true },
        { todoTitle: "타입스크립트 공부하기", todoComplete: false },
        { todoTitle: "퍼블리싱 공부하기", todoComplete: false },
      ],
      createInput: "",
    };
  }

  onToggle = (toggle: boolean, e: React.MouseEvent): void => {
    // const togleChange = this.state.todoItem;
    // this.setState(({ todoItem }) => ({}));
    console.log(toggle);
  };

  onCreate = (e: React.FormEvent): void => {
    e.preventDefault();
    console.log("@@@createInput : " + this.state.createInput);
    this.setState(({ todoItem, createInput }) => ({
      todoItem: todoItem.concat({
        todoTitle: createInput,
        todoComplete: false,
      }),
    }));
  };

  onChange = (e: React.ChangeEvent<HTMLInputElement>): any => {
    const { value } = e.currentTarget;
    this.setState({
      createInput: value,
    });
  };

  render(): React.ReactNode {
    return (
      <Div>
        <Form onSubmit={this.onCreate}>
          <TodoInput
            createInput={this.state.createInput}
            // onChange={this.onChange}
          />
          <Button>등록</Button>
        </Form>
        <UlDiv>
          <Ul>
            {this.state.todoItem.map((data, index) => (
              <Li
                key={index}
                onClick={(e: React.MouseEvent) =>
                  this.onToggle(data.todoComplete, e)
                }
              >
                {data.todoTitle}
              </Li>
            ))}
          </Ul>
        </UlDiv>
      </Div>
    );
  }
}
