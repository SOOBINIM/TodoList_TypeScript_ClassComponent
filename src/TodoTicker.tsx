import Ticker from "react-ticker";
import React from "react";
import { Mode } from "@mui/icons-material";

interface Props {
  tickerText: string;
}

interface State {}

export default class TodoTicker extends React.Component<Props, State> {
  render(): React.ReactNode {
    return (
      <div>
        <Ticker>
          {() => (
            <>
              <h1 style={{ paddingRight: "0.5em" }}>{this.props.tickerText}</h1>
            </>
          )}
        </Ticker>
      </div>
    );
  }
}
