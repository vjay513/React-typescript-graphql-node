import React from 'react';
import { FaMoneyCheck } from "react-icons/fa";
import SubscriptionRowProps from '../modal/SubscriptionRow';

const SubscriptionRow: React.FC<SubscriptionRowProps> = ({ subscription }) => {
  return (
    <tr>
      <td>{subscription.provider}</td>
      <td>{subscription.due}</td>
      <td>{subscription.price}</td>
      <td>
        <button className="btn btn-danger btn-sm">
          <FaMoneyCheck />
        </button>
      </td>
    </tr>
  );
};

export default SubscriptionRow;
