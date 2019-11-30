import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import Lampu from "./components/Lampu";
import styled from "styled-components";

const AppStyle = styled.div`
  .container {
    width: 100vw;
    height: 50vh;
  }
`;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      warna: ""
    };
    this.handleType = this.handleType.bind(this);
  }

  handleType(event) {
    this.setState({
      warna: event.target.value
    });
  }

  render() {
    return (
      <AppStyle>
        <div>
          <Lampu warna={this.state.warna} />
          <input onChange={this.handleType} />
        </div>
      </AppStyle>
    );
  }
}

ReactDOM.render(<App nama="Leo" />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
