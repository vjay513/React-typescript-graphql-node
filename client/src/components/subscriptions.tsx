import React from 'react';
import { useQuery } from "@apollo/client";
import Spinner from "./Spinner";
import { GET_SUBSCRIPTIONS } from "../queries/subscriptionQueries";
import Subscription from '../modal/subscription';
import SubscriptionRow from './SubscriptionRow';

const Subscriptions: React.FC = () => {
  const { loading, error, data } = useQuery<{ subscriptions: Subscription[] }>(GET_SUBSCRIPTIONS);

  if (loading) return <Spinner />;
  if (error) return <p>Something Went Wrong</p>;

  return (
    <>
      {!loading && !error && (
        <table className="table table-hover mt-3">
          <thead>
            <tr>
              <th>Service Provider</th>
              <th>Due Date</th>
              <th>Price</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {data?.subscriptions.map((subscription: Subscription) => (
              <SubscriptionRow key={subscription.id} subscription={subscription} />
            ))}
          </tbody>
        </table>
      )}
    </>
  );
};

export default Subscriptions;
