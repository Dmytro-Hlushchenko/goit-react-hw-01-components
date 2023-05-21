import PropTypes from 'prop-types';
import { Table, Head, Transaction, Td } from './TransactionHistory.styled';

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
                    <Transaction color={changeColor()}  key={item.id} >
                       <Td>{item.type}</Td>
                       <Td>{item.amount}</Td>
                       <Td>{item.currency}</Td>
                     </Transaction>
                    )
                })}
            </tbody>
        </Table>
            )
}

TransactionHistory.propTypes = { 
    items: PropTypes.PropTypes.arrayOf(PropTypes.object).isRequired
}

    var changeColor = (function() {
  let color1 = 'transperent';
  let color2 = 'grey';
  let previousColor = '';
        return function () {
            let random = Math.floor(Math.random() * 2);
            let newColor = random === 0 ? color1 : color2;
            while (newColor === previousColor) {
            random = Math.floor(Math.random() * 2);
            newColor = random === 0 ? color1 : color2;
            }
    previousColor = newColor;
    return newColor;
  };
})();