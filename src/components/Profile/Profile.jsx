import PropTypes from 'prop-types';
import {formattingNumber} from '../../utils/formattingNumber';
import {ProfileCard, Description, Avatar, Name, Tag, Location, Stats, Item, Label, Quantity} from './Profile.styled';

export const Profile=({username, tag, location, avatar, stats: {followers, views, likes}})=>{
    followers = formattingNumber(followers);
    views= formattingNumber(views);
    likes=formattingNumber(likes);
    
    return <ProfileCard>
        <Description>
            <Avatar
            src={avatar}
            alt="User avatar"
            />
            <Name>{username}</Name>
            <Tag>@{tag}</Tag>
            <Location>{location}</Location>
        </Description>
        <Stats>
            <Item>
                <Label>Followers</Label>
                <Quantity>{followers}</Quantity>
            </Item>
             <Item>
                <Label>Views</Label>
                <Quantity>{views}</Quantity>
             </Item>
            <Item>
                <Label>Likes</Label>
                <Quantity>{likes}</Quantity>
            </Item>
         </Stats>
    </ProfileCard>
}

Profile.propTypes={
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats:  PropTypes.shape({
        followers: PropTypes.number.isRequired,
        views:  PropTypes.number.isRequired,
        likes: PropTypes.number.isRequired,
    }).isRequired,
    
};