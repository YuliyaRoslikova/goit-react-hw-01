import s from "./TransactionHistory.module.css";

const TransactionHistory = ({ items }) => {
  return (
    <table className={s.table}>
      <thead>
        <tr className={s.headerRow}>
          <th className={s.headerCell}>Type</th>
          <th className={s.headerCell}>Amount</th>
          <th className={s.headerCell}>Currency</th>
        </tr>
      </thead>

      <tbody className={s.body}>
        {items.map(({ id, type, amount, currency }) => {
          return (
            <tr className={s.row} key={id}>
              <td className={s.cell}>{type}</td>
              <td>{amount}</td>
              <td>{currency}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default TransactionHistory;
