import PropTypes from 'prop-types';
import { FriendItem } from './FriendListItem.styled';
import { Status } from './FriendListItem.styled';


export default function FriendListItem({ avatar, name, isOnline}) {
        return (
            <FriendItem isOnline={isOnline}>
                    <Status isOnline={isOnline}></Status>
                    <img src={avatar} alt={name} width="48" />
                    <p>{name}</p>
            </FriendItem>
            )
}

FriendListItem.propTypes = { 
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired
}