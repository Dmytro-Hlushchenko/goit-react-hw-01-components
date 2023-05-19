import Profile from "./Profile";
import Statistics from "./Statistics";
import data from "../data/statistics.json";
import user from "../data/user.json";

export const App = () => {
  return (
    <>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title={data.title} stats={data} />
    </>
    )
}; 