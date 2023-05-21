import FriendListItem from "components/FriendListItem/"
import PropTypes from 'prop-types';
import { List } from "./FriendList.styled";
export default function FriendList({ friends }) {
    return(
        <List>
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
        </List>
    )
}

FriendList.propTypes = { 
    friends: PropTypes.PropTypes.arrayOf(PropTypes.object).isRequired
}