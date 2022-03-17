import TodoCreate from "../components/TodoCreatePresent";

import { useSelector, useDispatch } from "react-redux";

import * as actions from "../modules/TodoList";
import { RootState } from "../modules/RootReducer";

function TodoContainer() {
  const todoList = useSelector((state: RootState) => state.todoReducer);
  const dispatch = useDispatch();

  const onCreate = () => {
    dispatch(actions.todoCreate);
  };
  const onDelete = () => {
    dispatch(actions.todoDelete);
  };

  const onChange = () => {
    //   dispatch(actions.)
  };

  //   return <TodoCreate todoItem={todoList} onCreate={onCreate} />;
}

export default TodoContainer;

// todoItem: [
//     { id: 0, todoTitle: "리액트 공부하기", todoComplete: true },
//     { id: 1, todoTitle: "타입스크립트 공부하기", todoComplete: false },
//     { id: 2, todoTitle: "퍼블리싱 공부하기", todoComplete: false },
//   ],
//   createInput: "",
//   idCount: 3,
