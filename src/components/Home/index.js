import { Component } from "react";

import Navbar from "../Navbar";
import DishListItem from "../DishListItem";

import "./index.css";

const apiStatusConstants = {
  initial: "INITIAL",
  success: "SUCCESS",
  failure: "FAILURE",
};

class Home extends Component {
  state = { dishLists: [], apiStatus: apiStatusConstants.initial };

  componentDidMount() {
    this.getDishLists();
  }

  getDishLists = async () => {
    const apiUrl =
      "https://raw.githubusercontent.com/syook/react-dishpoll/main/db.json";
    const response = await fetch(apiUrl);
    if (response.ok === true) {
      const data = await response.json();
      this.setState({ dishLists: data, apiStatus: apiStatusConstants.success });
    } else {
      this.setState({ apiStatus: apiStatusConstants.failure });
    }
  };

  renderSuccessView = () => {
    const { dishLists } = this.state;
    return (
      <div className="h-list-cont">
        <h1 className="h-make-your-poll">Make your poll</h1>
        <ul className="dish-list-cont">
          {dishLists.map((eachItem) => (
            <DishListItem dishDetails={eachItem} key={eachItem.id} />
          ))}
        </ul>
      </div>
    );
  };

  onClickRetryButton = () => {
    this.getDishLists();
  };

  renderFailureView = () => (
    <div className="failure-bg">
      <h1 className="failure-text">Something went wrong</h1>
      <button
        onClick={this.onClickRetryButton}
        className="retry-button"
        type="button"
      >
        Retry
      </button>
    </div>
  );

  renderAllApiStatus = () => {
    const { apiStatus } = this.state;
    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderSuccessView();
      case apiStatusConstants.failure:
        return this.renderFailureView();
      default:
        return null;
    }
  };

  render() {
    const { dishLists } = this.state;
    return (
      <>
        <Navbar />
        <div className="home-bg">
          <div className="home-content">{this.renderAllApiStatus()}</div>
        </div>
      </>
    );
  }
}

export default Home;
