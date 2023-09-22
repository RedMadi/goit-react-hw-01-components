import PropTypes from 'prop-types';
import { ListItem, Status, Image, Paragraph } from './FriendListItem.styled';
import { GrStatusGoodSmall } from 'react-icons/gr';

export const FriendListItem = ({ avatar, name, status }) => {
  return (
    <ListItem>
      <Status>
        <GrStatusGoodSmall status={`${status}`} />
      </Status>
      <Image className="avatar" src={avatar} alt="User avatar" width="48" />
      <Paragraph className="name">{name}</Paragraph>
    </ListItem>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool,
};
