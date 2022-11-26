import PropTypes from 'prop-types';
import css from './TransactionHistory.module.css';

export const TransactionHistory = ({ items }) => {
    return (
        <table className={css.transactionHistory}>
            <thead className={css.tableHead}>
                <tr>
                    <th className={css.tableHeading}>Type</th>
                    <th className={css.tableHeading}>Amount</th>
                    <th className={css.tableHeading}>Currency</th>
                </tr>
            </thead>

            <tbody>
                {items.map(item => {
                    return (
                        <tr key={item.id} className={css.tableRow}>
                            <td className={css.type}>{item.type}</td>
                            <td className={css.amount}>{item.amount}</td>
                            <td className={css.currency}>{item.currency}</td>
                        </tr>
                    );
                })}
            </tbody>
        </table>
    );
}

TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(PropTypes.exact({
        id: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        amount: PropTypes.string.isRequired,
        currency: PropTypes.string.isRequired,
    })).isRequired,
}