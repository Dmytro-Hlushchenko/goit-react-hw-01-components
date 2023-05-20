import PropTypes from 'prop-types';

export default function Transaction({ items }) { 
    return (
        items.map(item => {
            return(
                <tr key={item.id} >
                <td>{item.type}</td>
                <td>{item.amount}</td>
                <td>{item.currency}</td>
            </tr>
            )
        })
         
    );
}