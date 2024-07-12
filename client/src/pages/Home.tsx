import React from 'react';
import Pool from "../components/pools";
import AddSubscriptionModal from '../components/AddSubscriptionModal';
import AddPoolModal from '../components/AddPoolModal';
import Subscriptions from '../components/subscriptions';

const Home: React.FC = () => {
  return (
    <>
      <div className="d-flex gap-3 mb-4">
        <AddSubscriptionModal />
        <AddPoolModal />
      </div>
      <Pool />
      <hr />
      <Subscriptions />
    </>
  );
};

export default Home;
