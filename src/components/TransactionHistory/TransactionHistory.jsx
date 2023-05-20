import Transaction from "components/Transaction/"
import PropTypes from 'prop-types';

export default function TransactionHistory({items}) { 
    return (
        <table className="transaction-history">
            <thead>
             <tr>
                <th>Type</th>
                <th>Amount</th>
                <th>Currency</th>
             </tr>
            </thead>

            <tbody>
                <Transaction items={items} />
            </tbody>
        </table>
            )
}

TransactionHistory.propTypes = { 
    items: PropTypes.PropTypes.arrayOf(PropTypes.object)
}