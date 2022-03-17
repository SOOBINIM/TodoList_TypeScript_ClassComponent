import React from "react";

type todoProps = {
  todoItem: {
    id: number;
    todoTitle: string;
    todoComplete: boolean;
  }[];
  createInput: string;
  onCreate: (e: React.FormEvent) => void;
  onDelete: (id: number) => void;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

type State = {};

export default class TodoCreate extends React.Component<todoProps, State> {
  render(): React.ReactNode {
    return (
      <div>
        <form onSubmit={this.props.onCreate}>
          <input onChange={this.props.onChange}></input>
          <button>등록</button>
        </form>
        <div>{this.props.todoItem}</div>
      </div>
    );
  }
}
