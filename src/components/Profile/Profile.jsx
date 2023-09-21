import PropTypes from 'prop-types';
import {
  Image,
  Container,
  Description,
  Stats,
  List,
  Paragraph,
} from './Profile.styled';

export const Profile = ({ username, tag, location, avatar, stats }) => (
  <Container>
    <Description>
      <Image src={avatar} alt="User avatar" className="avatar" />
      <Paragraph className="name">{username}</Paragraph>
      <Paragraph className="tag">{tag}</Paragraph>
      <Paragraph className="location">{location}</Paragraph>
    </Description>
    <Stats>
      <List>
        <span className="label">Followers</span>
        <span className="quantity">{stats.followers}</span>
      </List>
      <List>
        <span className="label">Views</span>
        <span className="quantity">{stats.views}</span>
      </List>
      <List>
        <span className="label">Likes</span>
        <span className="quantity">{stats.likes}</span>
      </List>
    </Stats>
  </Container>
);

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.exact({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
};
