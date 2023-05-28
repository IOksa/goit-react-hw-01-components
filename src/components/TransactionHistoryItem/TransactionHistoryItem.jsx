import PropTypes from 'prop-types';
import {TableDataRow, TableRow} from './TransactionHistoryItem.styled';

export const TransactionHistoryItem=({id, type, amount, currency})=>{
   return <TableRow>
        <TableDataRow>{type}</TableDataRow>
        <TableDataRow>{amount}</TableDataRow>
        <TableDataRow>{currency}</TableDataRow>
    </TableRow>
}

TransactionHistoryItem.propTypes={
    items: PropTypes.arrayOf(
    PropTypes.exact({
        id: PropTypes.string.isRequired,
        type:  PropTypes.string.isRequired,
        amount: PropTypes.string.isRequired,
        currency: PropTypes.string.isRequired,
    }).isRequired,
    ),
};