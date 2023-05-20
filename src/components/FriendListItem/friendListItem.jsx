import PropTypes from 'prop-types';
export default function FriendListItem({friends}) {
    {
        return(
            friends.map(item => { 
                return (
                <li key={item.id} className="item">
                    <span className="status" ></span>
                    <img className="avatar" src={item.avatar} alt={item.name} width="48" />
                        <p className="name">{item.name}</p>
                </li>
            )
        }))
}
}