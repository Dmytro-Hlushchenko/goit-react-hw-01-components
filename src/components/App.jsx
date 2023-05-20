import Profile from "./Profile";
import Statistics from "./Statistics";
import data from "../data/statistics.json";
import user from "../data/user.json";
import friends from "../data/friends.json";
import FriendList from "../components/FriendList";
// import FriendListItem from "./FriendListItem";

export default () => {
  return (
    <>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats} />
      <Statistics title={data.title} stats={data} />
      <FriendList friends={friends}/>
</>
  );
}; 