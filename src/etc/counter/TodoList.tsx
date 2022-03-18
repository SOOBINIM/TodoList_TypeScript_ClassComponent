import React from "react";
import styled from "styled-components";
import TodoInput from "./TodoInput";
import DeleteIcon from "@mui/icons-material/Delete";

const Div = styled.div`
  margin: 0 auto;

  width: 860px;

  margin-top: 200px;

  background-color: #628784;
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
  background-color: #b5c5ae;

  width: 769px;
  border-radius: 10px;
  margin-bottom: 10px;
  padding: 15px 5px;

  display: flex;
  justify-content: space-between;
`;

const Form = styled.form`
  display: flex;
  justify-content: space-around;
  margin-right: 50px;
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

const noPointer = { cursor: "pointer" };

interface Props {}

interface State {
  todoItem: {
    id: number;
    todoTitle: string;
    todoComplete: boolean;
  }[];
  createInput: string;
}

export default class TodoList extends React.Component<Props, State> {
  id: number = 3;
  constructor(props: State) {
    super(props);
    this.state = {
      todoItem: [
        { id: 0, todoTitle: "리액트 공부하기", todoComplete: true },
        { id: 1, todoTitle: "타입스크립트 공부하기", todoComplete: false },
        { id: 2, todoTitle: "퍼블리싱 공부하기", todoComplete: false },
      ],
      createInput: "",
    };
  }

  componentDidMount() {
    // try {
    // console.log(typeof JSON.stringify(this.state.todoItem));
    console.log("componentDidMount");
    // const todoData = JSON.stringify(this.state.todoItem);
    // const storageTodoData = localStorage.getItem(todoData);
    // if (storageTodoData) {
    //   this.setState({
    //     todoItem: JSON.parse(storageTodoData),
    //   });
    //   console.log("storageTodoData : " + storageTodoData);
    // }
    // console.log("storageTodoData : " + storageTodoData);
    console.log(localStorage.getItem("todoData"));
    const localStorageData = localStorage.getItem("todoData");
    if (localStorageData) {
      this.setState({
        todoItem: JSON.parse(localStorageData),
      });
    }

    //   const todoData = localStorage.getItem(this.state.todoItem);

    //   if (todoData) {
    //     this.setState({
    //       todoItem: JSON.parse(todoData),
    //     });
    //   }
    // } catch (error) {
    //   console.log(error);
    // }
  }

  componentDidUpdate(nextProps: Props, nextState: State) {
    console.log("componentDidUpdate");

    if (
      JSON.stringify(nextState.todoItem) !== JSON.stringify(this.state.todoItem)
    ) {
      localStorage.setItem("todoData", JSON.stringify(this.state.todoItem));
      //   localStorage.setItem(JSON.stringify(this.state.todoItem));
    }

    // if (nextState.todoItem.length !== this.state.todoItem.length) {
    // }
  }

  onToggle = (toggle: boolean, e: React.MouseEvent): void => {
    // const togleChange = this.state.todoItem;
    // this.setState(({ todoItem }) => ({}));
    console.log(toggle);
  };

  onCreate = (e: React.FormEvent): void => {
    e.preventDefault();
    this.setState(({ todoItem, createInput }) => ({
      todoItem: todoItem.concat({
        id: this.id++,
        todoTitle: createInput,
        todoComplete: false,
      }),
      createInput: "",
    }));
  };

  onDelete = (id: number): void => {
    this.setState(({ todoItem }) => ({
      todoItem: todoItem.filter((data) => data.id !== id),
    }));
  };

  onChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
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
            onChange={this.onChange}
          />
          <CreateButton>등록</CreateButton>
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
                <div>
                  <DeleteIcon
                    fontSize="medium"
                    style={noPointer}
                    onClick={() => this.onDelete(data.id)}
                  >
                    삭제
                  </DeleteIcon>
                </div>
              </Li>
            ))}
          </Ul>
        </UlDiv>
      </Div>
    );
  }
}
