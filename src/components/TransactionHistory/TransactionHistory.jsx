import PropTypes from 'prop-types';
import { Table, Tbody, Trtag, Titem } from './TransactionHistory.styled';

export const TransactionHistory = ({ items }) => {
  return (
    <Table className="transaction-history">
      <thead>
        <Trtag>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </Trtag>
      </thead>
      <Tbody>
        {items.map(({ id, type, amount, currency }, index) => (
          <Titem key={id} even={index % 2 === 0}>
            <td>{type}</td>
            <td>{amount}</td>
            <td>{currency}</td>
          </Titem>
        ))}
      </Tbody>
    </Table>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.exact({
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    })
  ),
};
