import React from "react";

const PollContext = React.createContext({
  onClickVoteButton: () => {},
  pollList: [],
});

export default PollContext;
