import React from 'react';
import Spinner from "./Spinner";
import { useQuery } from "@apollo/client";
import { GET_POOLS } from "../queries/poolQueries";
import PoolCard from './PoolCard';

const Pools: React.FC = () => {
  const { loading, error, data } = useQuery(GET_POOLS);

  if (loading) return <Spinner />;
  if (error) return <p>Something Went Wrong</p>;

  return (
    <>
      {data.pools.length > 0 ? (
        <div className="row mt-4">
          {data.pools.map((pool: any) => (
            <PoolCard key={pool.id} pool={pool} />
          ))}
        </div>
      ) : (
        <p>No Subscriptions</p>
      )}
    </>
  );
};

export default Pools;
