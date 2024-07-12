import React from "react";
import PoolCardProps from "../modal/PoolCardProps";

const PoolCard: React.FC<PoolCardProps> = ({ pool }) => {
  return (
    <div className="col-md-6">
      <div className="card mb-3">
        <div className="card-body">
          <div className="d-flex justify-content-between align-items-center">
            <h5 className="card-title">{pool.name}</h5>
            <a className="btn btn-dark" href={`/pools/${pool.id}`}>
              View
            </a>
          </div>
          <p className="small">
            Status: <strong>{pool.status}</strong>
          </p>
        </div>
      </div>
    </div>
  );
};

export default PoolCard;
