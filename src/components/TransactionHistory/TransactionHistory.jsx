import PropTypes from 'prop-types';
import { Table, Head, Tbody, Transaction, Td } from './TransactionHistory.styled';

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

            <Tbody>
                {items.map(item => {
                    return (
                    <Transaction key={item.id} >
                       <Td>{item.type}</Td>
                       <Td>{item.amount}</Td>
                       <Td>{item.currency}</Td>
                     </Transaction>
                    )
                })}
            </Tbody>
        </Table>
            )
}

TransactionHistory.propTypes = { 
    items: PropTypes.PropTypes.arrayOf(PropTypes.object).isRequired
}