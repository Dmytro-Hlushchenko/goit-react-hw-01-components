import PropTypes from 'prop-types';
import { Table, Head } from './TransactionHistory.styled';

export default function TransactionHistory({items}) { 
    return (
        <Table>
            <Head>
             <tr>
                <th>Type</th>
                <th>Amount</th>
                <th>Currency</th>
             </tr>
            </Head>

            <tbody>
                {items.map(item => {
                    return (
                     <tr key={item.id} >
                       <td>{item.type}</td>
                       <td>{item.amount}</td>
                       <td>{item.currency}</td>
                     </tr>
                    )
                })}
            </tbody>
        </Table>
            )
}

TransactionHistory.propTypes = { 
    items: PropTypes.PropTypes.arrayOf(PropTypes.object).isRequired
}