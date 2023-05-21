import PropTypes from 'prop-types';
import { Container, Description, Photo, UnderPhoto, Stats, Label, Quantity } from './Profile.styled';
export default function Profile({ username, tag, location, avatar, stats }) {
    return (
    <Container>
        <Description >
                <Photo src={avatar} alt="User avatar"/>
                <UnderPhoto>{username}</UnderPhoto>
                <UnderPhoto>{tag}</UnderPhoto>
                <UnderPhoto>{location}</UnderPhoto>
        </Description>

        <Stats className="stats">
            <li>
                <Label>Followers: </Label>
                <Quantity>{stats.followers}</Quantity>
            </li>
            <li>
                <Label>Views: </Label>
                <Quantity>{stats.views}</Quantity>
            </li>
            <li>
                <Label>Likes: </Label>
                <Quantity>{stats.likes}</Quantity>
            </li>
        </Stats>
    </Container> );
}

Profile.propTypes = {
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.objectOf(PropTypes.number).isRequired
}