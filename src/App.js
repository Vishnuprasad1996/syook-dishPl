import { Component } from "react";
import { Route, Switch } from "react-router-dom";

import Home from "./components/Home";
import Login from "./components/Login";
import PollContext from "./context/PollContext";
import PollTab from "./components/PollTab";

import "./App.css";

class App extends Component {
  state = { pollList: [] };

  onClickVoteButton = (dishDetails) => {
    const { pollList } = this.state;
    const pollObject = pollList.find(
      (eachList) => eachList.id === dishDetails.id
    );

    if (pollObject) {
      this.setState((prevState) => ({
        pollList: prevState.pollList.map((eachList) => {
          if (pollObject.id === eachList.id) {
            return {
              ...eachList,
              rank: dishDetails.rank,
              point: dishDetails.point,
            };
          }
          return eachList;
        }),
      }));
    } else {
      this.setState((prevState) => ({
        pollList: [...prevState.pollList, dishDetails],
      }));
    }
  };

  render() {
    const { pollList } = this.state;

    console.log(pollList);

    return (
      <PollContext.Provider
        value={{
          onClickVoteButton: this.onClickVoteButton,
          pollList,
        }}
      >
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route exact path="/" component={Login} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/poll" component={PollTab} />
        </Switch>
      </PollContext.Provider>
    );
  }
}

export default App;
