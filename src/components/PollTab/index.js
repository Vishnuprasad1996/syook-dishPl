import PollContext from "../../context/PollContext";
import Navbar from "../Navbar";

import "./index.css";

const PollTab = () => (
  <PollContext.Consumer>
    {(value) => {
      const { pollList } = value;

      const sortedList = pollList.sort((a, b) => (a.point < b.point ? 1 : -1));

      return (
        <>
          <Navbar />
          <div className="poll-tab-bg">
            <ul className="poll-content">
              {sortedList.map((eachItem) => (
                <li className="poll-item-list" key={eachItem.id}>
                  <div>
                    <img
                      className="poll-img"
                      src={eachItem.image}
                      alt={eachItem.dishName}
                    />
                    <p className="poll-desc">Name: {eachItem.dishName}</p>
                  </div>
                  <div>
                    <p className="poll-desc">Rank: {eachItem.rank}</p>
                    <p className="poll-desc">Point: {eachItem.point}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </>
      );
    }}
  </PollContext.Consumer>
);

export default PollTab;
