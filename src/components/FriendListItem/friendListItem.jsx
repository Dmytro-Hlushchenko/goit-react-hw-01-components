import PropTypes from 'prop-types';
import { FriendItem } from './FriendListItem.styled';


export default function FriendListItem({ avatar, name, isOnline}) {
        return (
            <FriendItem isOnline={isOnline}>
                    <span className="status"></span>
                    <img className="avatar" src={avatar} alt={name} width="48" />
                    <p className="name">{name}</p>
            </FriendItem>
            )
}

FriendListItem.propTypes = { 
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired
}

//Залежно від пропа isOnline, повинен змінюватися колір фону span.status. Це можна зробити за допомогою різних CSS-класів або Styled Components.