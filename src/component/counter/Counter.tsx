import React from "react";

interface Props {}

interface State {
  score: number;
  color: Array<number>;
}

export default class Counter extends React.Component<Props, State> {
  constructor(props: State) {
    super(props);
    this.state = {
      score: 0,
      color: [150, 300, 300],
    };
  }

  onIncrease = (): void => {
    this.setState(({ score }) => ({ score: score + 1 }));
  };

  onDecrease = (): void => {
    this.setState(({ score }) => ({ score: score - 1 }));
  };

  onChangeBackground = (): void => {
    const randomColor = [
      Math.floor(Math.random() * 55 + 200),
      Math.floor(Math.random() * 55 + 200),
      Math.floor(Math.random() * 55 + 200),
    ];
    this.setState(({ color }) => ({ color: randomColor }));
  };

  render(): React.ReactNode {
    const style = {
      backgroundColor: `rgb(${this.state.color[0]},${this.state.color[1]},${this.state.color[2]})`,
    };

    return (
      <div style={style}>
        {this.state.score}
        <div>
          <button onClick={this.onIncrease}>+</button>
          <button onClick={this.onDecrease}>-</button>
          <button onClick={this.onChangeBackground}>Change Color</button>
        </div>
      </div>
    );
  }
}
