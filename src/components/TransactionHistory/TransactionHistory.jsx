import PropTypes from 'prop-types';
import {TransactionHistoryItem} from '../TransactionHistoryItem/TransactionHistoryItem';
import {TableTransactionHistory, TableRow, TableHeadRow} from './TransactionHistory.styled';


export const TransactionHistory = ({items})=>{
    return <TableTransactionHistory>
    <thead>
      <TableRow>
        <TableHeadRow>Type</TableHeadRow>
        <TableHeadRow>Amount</TableHeadRow>
        <TableHeadRow>Currency</TableHeadRow>
      </TableRow>
    </thead>
  
    <tbody>
    {items.map(({id, type, amount, currency}) => (
        <TransactionHistoryItem key={id} type={type} amount={amount} currency={currency}/>))}
    </tbody>
  </TableTransactionHistory>
}

TransactionHistory.propTypes={
    items: PropTypes.arrayOf(
    PropTypes.exact({
        id: PropTypes.string.isRequired,
        type:  PropTypes.string.isRequired,
        amount: PropTypes.string.isRequired,
        currency: PropTypes.string.isRequired,
    }).isRequired,
    ),
};  