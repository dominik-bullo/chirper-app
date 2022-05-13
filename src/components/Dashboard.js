import { connect } from "react-redux";
import Tweet from "./Tweet";

const Dashboard = (props) => {
  return (
    <div>
      <h3 className="center">Your timeline</h3>
      <ul className="dahboard-list">
        {props.tweetIDs.map((id) => (
          <li key={id}>
            <Tweet id={id} />
          </li>
        ))}
      </ul>
    </div>
  );
};

const mapStateToProps = ({ tweets }) => ({
  tweetIDs: Object.keys(tweets).sort(
    (a, b) => tweets[b].timestamp - tweets[a].timestamp
  ),
});

export default connect(mapStateToProps)(Dashboard);
