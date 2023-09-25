import data from "../data/statistics.json";
import user from "../data/user.json";
import friends from "../data/friends.json";
import items from "../data/transactions.json"

import Profile from "./Profile";
import Statistics from "./Statistics";
import FriendList from "../components/FriendList";
import TransactionHistory from "./TransactionHistory/";


export default function App () {
  return (
    <>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats} />
      <Statistics title={data.title} stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={items}/>
    </>
  );
}; 