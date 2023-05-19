import Profile from "./Profile";
import Statistics from "./Statistics";
import data from "../data/statistics.json"
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
      <section className="statistics">
        <h2 class="title">Upload stats</h2>
          <ul className="stat-list">
              {data.map(item => {
                return <Statistics stats={item}/>
              })}
          </ul>
      </section>
    </>
    )
}; 