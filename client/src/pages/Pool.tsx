import React from 'react';
import { Link, useParams } from "react-router-dom";
import Spinner from "../components/Spinner";
import SubscriptionInfo from "../components/SubscriptionInfo";
import DeletePoolButton from "../components/DeletePoolButton";
import EditPoolForm from "../components/EditPoolForm";
import { useQuery } from "@apollo/client";
import { GET_POOL } from "../queries/poolQueries";

const Pool: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { loading, error, data } = useQuery(GET_POOL, { variables: { id } });

  if (loading) return <Spinner />;
  if (error) return <p>Something Went Wrong 56</p>;

  return (
    <>
      {!loading && !error && (
        <div className="mx-auto w-75 card p-5">
          <Link to="/" className="btn btn-light btn-sm w-25 d-inline ms-auto">
            Back
          </Link>

          <h1>{data.pool.name}</h1>
          <p>{data.pool.description}</p>

          <h5 className="mt-3">Pool Status</h5>
          <p className="lead">{data.pool.status}</p>

          <SubscriptionInfo subscription={data.pool.subscription} />

          <EditPoolForm pool={data.pool} />

          <DeletePoolButton poolId={data.pool.id} />
        </div>
      )}
    </>
  );
};

export default Pool;
