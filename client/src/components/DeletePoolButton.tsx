import React from 'react';
import { FaTrash } from "react-icons/fa";

interface DeletePoolButtonProps {
  poolId: string; 
}

const DeletePoolButton: React.FC<DeletePoolButtonProps> = ({ poolId }) => {
  const deactivate = () => {
    console.log(`Deleting pool with ID: ${poolId}`);
  };

  return (
    <div className="d-flex mt-5 ms-auto">
      <button className="btn btn-danger m-2" onClick={deactivate}>
        <FaTrash className="icon" /> Deactivate Subscription
      </button>
    </div>
  );
};

export default DeletePoolButton;
