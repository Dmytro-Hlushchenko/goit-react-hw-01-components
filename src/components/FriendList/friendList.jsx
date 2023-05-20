import FriendListItem from "components/FriendListItem/"

export default function FriendList({ friends }) {
    return(
    <ul className="friend-list">
        <FriendListItem friends={friends}/>
    </ul>
    )
}