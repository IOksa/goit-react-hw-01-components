import {Profile} from 'components/Profile/Profile';
import {Statistics} from 'components/Statistics/Statistics';
import user from '../../user.json';
import data from '../../data.json';
import friends from '../../friends.json';
import { FriendList } from '../FriendList/FriendList';
import transactions from '../../transactions.json';
import {TransactionHistory} from '../TransactionHistory/TransactionHistory';
import { Container } from './App.styled';

export const App = () => {
  return (
    <>
      <Container>
      <Profile
      username={user.username}
      tag={user.tag}
      location={user.location}
      avatar={user.avatar}
      stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <Statistics stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
      </Container>
    </>
  )
};
