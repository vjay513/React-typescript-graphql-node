import React, { useState } from "react";
import { FaList } from "react-icons/fa";
import { useQuery } from "@apollo/client";
import { GET_SUBSCRIPTIONS } from "../queries/subscriptionQueries";
import Subscription from "../modal/subscription";

const AddPoolModal: React.FC = () => {
  const [provider, setProvider] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [subscriptionId, setSubscriptionId] = useState<string>("");
  const [status, setStatus] = useState<string>("new");

  const { loading, error, data } = useQuery<{ subscriptions: Subscription[] }>(GET_SUBSCRIPTIONS);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (provider === "" || description === "" || status === "" || subscriptionId === "") {
      return alert("Please fill in all fields");
    }

    setProvider("");
    setDescription("");
    setStatus("new");
    setSubscriptionId("");
  };

  if (loading) return null;
  if (error) return <p>Something Went Wrong 345</p>;

  return (
    <>
      {!loading && !error && (
        <>
          <button
            type="button"
            className="btn btn-primary"
            data-bs-toggle="modal"
            data-bs-target="#addPoolModal"
          >
            <div className="d-flex align-items-center">
              <FaList className="icon" />
              <div>New Subscription Pool</div>
            </div>
          </button>

          <div
            className="modal fade"
            id="addPoolModal"
            aria-labelledby="addoolModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="addPoolModalLabel">
                    New Subscription
                  </h5>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div className="modal-body">
                  <form onSubmit={onSubmit}>
                    <div className="mb-3">
                      <label className="form-label">Name</label>
                      <input
                        type="text"
                        className="form-control"
                        id="name"
                        value={provider}
                        onChange={(e) => setProvider(e.target.value)}
                      />
                    </div>
                    <div className="mb-3">
                      <label className="form-label">Description</label>
                      <textarea
                        className="form-control"
                        id="description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                      ></textarea>
                    </div>
                    <div className="mb-3">
                      <label className="form-label">Status</label>
                      <select
                        id="status"
                        className="form-select"
                        value={status}
                        onChange={(e) => setStatus(e.target.value)}
                      >
                        <option value="new">Not Started</option>
                        <option value="progress">In Progress</option>
                        <option value="completed">Completed</option>
                      </select>
                    </div>

                    <div className="mb-3">
                      <label className="form-label">Subscription</label>
                      <select
                        id="subscriptionId"
                        className="form-select"
                        value={subscriptionId}
                        onChange={(e) => setSubscriptionId(e.target.value)}
                      >
                        <option value="">Select Subscription</option>
                        {data?.subscriptions.map((subscription) => (
                          <option key={subscription.id} value={subscription.id}>
                            {subscription.provider}
                          </option>
                        ))}
                      </select>
                    </div>

                    <button
                      type="submit"
                      data-bs-dismiss="modal"
                      className="btn btn-primary"
                    >
                      Submit
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default AddPoolModal;
