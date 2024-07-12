import React from 'react';
import { FaCalendarDay, FaCcPaypal, FaStore } from "react-icons/fa";
import SubscriptionInfoProps from '../modal/subscriptionInfo';

const SubscriptionInfo: React.FC<SubscriptionInfoProps> = ({ subscription }) => {
  return (
    <>
      <h5 className="mt-5">Subscription Information</h5>
      <ul className="list-group">
        <li className="list-group-item">
          <FaStore className="icon" /> {subscription.provider}
        </li>
        <li className="list-group-item">
          <FaCalendarDay className="icon" /> {subscription.due}
        </li>
        <li className="list-group-item">
          <FaCcPaypal className="icon" /> {subscription.price}
        </li>
      </ul>
    </>
  );
};

export default SubscriptionInfo;
