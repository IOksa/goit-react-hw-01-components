import PropTypes from 'prop-types';
import {FriendCard, Status, Avatar,FriendName} from './FriendListItem.styled';

export const FriendListItem = ({id, avatar, name, isOnline})=>{
    return <FriendCard>
    <Status statusType={isOnline}></Status>
    <Avatar src={avatar} alt="User avatar" width="48" />
    <FriendName>{name}</FriendName>
  </FriendCard>
}

FriendListItem.propTypes={
    friends: PropTypes.arrayOf(
    PropTypes.exact({
        id: PropTypes.number.isRequired,
        avatar:  PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        isOnline: PropTypes.bool.isRequired,
    }).isRequired,
    ),
};    