import FriendListItem from "components/FriendListItem/"
import PropTypes from 'prop-types';
export default function FriendList({ friends }) {
    return(
        <ul className="friend-list">
            {friends.map(item => {
                return(
                    <FriendListItem
                    key={item.id}
                    avatar={item.avatar}
                    name={item.name}
                    isOnline={item.isOnline}
                    />
                )
            })}    
        </ul>
    )
}

FriendList.propTypes = { 
    friends: PropTypes.PropTypes.arrayOf(PropTypes.object).isRequired
}