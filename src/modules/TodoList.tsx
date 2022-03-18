// 액션 타입 생성

const CREATE = "todoList/CREATE" as const;
const DELETE = "todoList/DELETE" as const;

// 액션 생성자 생성

export const todoCreate = (createInput: string) => ({
  type: CREATE,
  payload: createInput,
});

// export const todoDelete = (id: number) => ({
//   type: DELETE,
//   payload: id,
// });

// state, action 작성
export type TodoForm = {
  id: number;
  todoTitle: string;
  todoComplete: boolean;
};

type TodoState = TodoForm[];

const initialState: TodoState = [
  { id: 0, todoTitle: "리액트 공부하기", todoComplete: true },
  { id: 1, todoTitle: "타입스크립트 공부하기", todoComplete: false },
  { id: 2, todoTitle: "퍼블리싱 공부하기", todoComplete: false },
];

type TodoAction = ReturnType<typeof todoCreate>;

export const todoReducer = (
  state: TodoState = initialState,
  action: TodoAction
) => {
  const { type } = action;
  switch (type) {
    case CREATE:
      const nextId: number = 3;
      return state.concat({
        id: nextId + 1,
        todoTitle: action.payload,
        todoComplete: false,
      });
    default:
      return state;
  }
};
