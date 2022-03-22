// import { useSelector, useDispatch } from "react-redux";
// import { ThermostatOutlined } from "@mui/icons-material";
import React from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { Navigate } from "react-router-dom";

// 프레젠테이셔널 컴포넌트
import TodoCreate from "../components/TodoCreatePresent";
// 투트 리듀서의 타입 -> 리듀서 state 값 타입
import { RootState } from "../modules/RootReducer";
// 리듀서에서 액션 생성 함수  가져옴
import * as actions from "../modules/TodoList";

type DispatchProps = {
  todoCreate: typeof actions.todoCreate;
  todoItem: actions.TodoForm[];
  todoDelete: typeof actions.todoDelete;
};
type StateProps = ReturnType<typeof mapStateToProps>;
type TodoContainerProps = StateProps & DispatchProps;

class TodoContainer extends React.Component<TodoContainerProps> {
  state = {
    createInput: "",
  };

  onChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { value } = e.currentTarget;
    console.log("Input값 변화 : ", value);
    this.setState({
      createInput: value,
    });
  };
  onCreate = (e: React.FormEvent): void => {
    e.preventDefault();
    console.log("onCreate 클릭");
    this.props.todoCreate(this.state.createInput);
  };

  onDelete = (id: number): void => {
    console.log("삭제삭제 : " + id);
    this.props.todoDelete(id);
  };

  render(): React.ReactNode {
    const isLoggedIn = true;
    if (!isLoggedIn) {
      return <Navigate to="/" replace={true} />;
    }
    return (
      <div>
        <TodoCreate
          todoItem={this.props.todoItem}
          createInput={this.state.createInput}
          // onCreate={this.props.}
          onDelete={this.onDelete}
          onCreate={this.onCreate}
          onChange={this.onChange}
        />
      </div>
      //      <form onSubmit={this.props.onCreate}>
      // <input onChange={this.props.onChange}></input>
    );
  }
}

// 리덕스 스토어의 상태를 조회해서 어떤 것들을 props로 넣어줄지 정의
const mapStateToProps = (state: RootState) => ({
  todoItem: state.todoReducer,
});

// 액션을 디스패치하는 함수를 만들어서 props로 넣어줌
// const mapDispatchProps = (dispatch: DispatchProps) => ({
//   onCreate: (createInput: string) => dispatch(actions.todoCreate(createInput)),
// });

const mapDispatchProps = (dispatch: Dispatch) => {
  return {
    todoCreate: (createInput: string) =>
      dispatch(actions.todoCreate(createInput)),
    todoDelete: (id: number) => dispatch(actions.todoDelete(id)),
  };
};

// connect
export default connect(mapStateToProps, mapDispatchProps)(TodoContainer);

// 동일 코드
// const enhance = connect(mapStateToProps, mapDispatchProps);
// export default enhance(TodoContainer)

// function TodoContainer() {
//   const todoList = useSelector((state: RootState) => state.todoReducer);
//   const dispatch = useDispatch();

//   const onCreate = () => {
//     dispatch(actions.todoCreate);
//   };
//   const onDelete = () => {
//     dispatch(actions.todoDelete);
//   };

//   const onChange = () => {
//     //   dispatch(actions.)
//   };

//   return <TodoCreate todoItem={todoList} />;
//   //   return <TodoCreate todoItem={todoList} onCreate={onCreate} />;
// }

// export default TodoContainer;

// todoItem: [
//     { id: 0, todoTitle: "리액트 공부하기", todoComplete: true },
//     { id: 1, todoTitle: "타입스크립트 공부하기", todoComplete: false },
//     { id: 2, todoTitle: "퍼블리싱 공부하기", todoComplete: false },
//   ],
//   createInput: "",
//   idCount: 3,
