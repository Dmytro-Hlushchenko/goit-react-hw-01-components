import PropTypes from 'prop-types';
export default function FriendListItem({avatar, name, isOnline, id}) {
    {
        return (
            <li className="item">
                    <span className="status" ></span>
                    <img className="avatar" src={avatar} alt={name} width="48" />
                    <p className="name">{name}</p>
            </li>
            )
}
}

FriendListItem.propTypes = { 
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
    id:PropTypes.number.isRequired
}

//Залежно від пропа isOnline, повинен змінюватися колір фону span.status. Це можна зробити за допомогою різних CSS-класів або Styled Components.