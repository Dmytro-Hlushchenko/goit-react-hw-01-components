import Transaction from "components/Transaction/"

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