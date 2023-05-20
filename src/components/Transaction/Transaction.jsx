export default function Transaction({ items }) { 
    return (
        items.map(item => {
            return(
            <tr>
                <td>{item.type}</td>
                <td>{item.amount}</td>
                <td>{item.currency}</td>
            </tr>
            )
        })
         
    );
}