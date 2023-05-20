import FriendListItem from "components/FriendListItem/"
import PropTypes from 'prop-types';
export default function FriendList({ friends }) {
    return(
    <ul className="friend-list">
        <FriendListItem friends={friends}/>
    </ul>
    )
}

FriendList.propTypes = { 
    friends: PropTypes.PropTypes.arrayOf(PropTypes.object)
}