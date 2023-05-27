import PropTypes from 'prop-types';
export const TransactionHistoryItem=({id, type, amount, currency})=>{
   return <tr>
        <td>{type}</td>
        <td>{amount}</td>
        <td>{currency}</td>
    </tr>
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