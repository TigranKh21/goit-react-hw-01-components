import { TransactionElement } from './TransactionElement';

export const TransactionHistory = ({ tableData }) => {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>TYPE</th>
            <th>AMOUNT</th>
            <th>CURRENCY</th>
          </tr>
        </thead>

        <tbody>
          {tableData.map(({ id, type, amount, currency }) => (
            <TransactionElement
              key={id}
              type={type}
              amount={amount}
              currency={currency}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};
