import { Component } from "react";

import PollContext from "../../context/PollContext";

import "./index.css";

const rankPointList = {
  rankFirst: "Rank 1",
  rankSecond: "Rank 2",
  rankThird: "Rank 3",
};

class DishListItem extends Component {
  state = { rank: "No Rank", point: 0 };

  renderRankPoint = (event) => {
    switch (event.target.value) {
      case rankPointList.rankFirst:
        return this.setState({ point: 30 });
      case rankPointList.rankSecond:
        return this.setState({ point: 20 });
      case rankPointList.rankThird:
        return this.setState({ point: 10 });
      default:
        return null;
    }
  };

  onChangeOptions = (event) => {
    this.setState({ rank: event.target.value });
    this.renderRankPoint(event);
  };

  render() {
    return (
      <PollContext.Consumer>
        {(value) => {
          const { onClickVoteButton, pollList } = value;

          const { dishDetails } = this.props;
          const { dishName, description, image } = dishDetails;
          const { rank, point } = this.state;

          const onClickPollButton = () => {
            onClickVoteButton({ ...dishDetails, rank, point });
          };

          const isPollReachedMax = pollList.length > 3;

          return (
            <li className="dishItem">
              <img src={image} alt={dishName} />
              <p className="name">Name : {dishName}</p>
              <p className="desc">{description}</p>
              <div className="button-cont">
                <div className="rank-cont">
                  <label htmlFor="rank" className="rank-text">
                    Select Rank
                  </label>
                  <select
                    value={rank}
                    onChange={this.onChangeOptions}
                    id="rank"
                  >
                    <option value="No Rank">No Rank</option>
                    <option value="Rank 1">Rank 1</option>
                    <option value="Rank 2">Rank 2</option>
                    <option value="Rank 3">Rank 3</option>
                  </select>
                </div>
                <button
                  disabled={isPollReachedMax}
                  onClick={onClickPollButton}
                  className="vote-button"
                  type="button"
                >
                  Vote
                </button>
              </div>
            </li>
          );
        }}
      </PollContext.Consumer>
    );
  }
}

export default DishListItem;
