import Ticker from "react-ticker";
import React from "react";

interface Props {}

interface State {}

export default class TodoTicker extends React.Component<Props, State> {
  render(): React.ReactNode {
    return (
      <div>
        <Ticker>
          {() => (
            <>
              <h1 style={{ paddingRight: "0.5em" }}>수빈아 할 수 있어!</h1>
            </>
          )}
        </Ticker>
      </div>
    );
  }
}