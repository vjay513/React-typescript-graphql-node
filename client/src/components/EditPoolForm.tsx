import React, { useState } from "react";
import EditPoolFormProps from "../modal/EditPoolFormProps";

const EditPoolForm: React.FC<EditPoolFormProps> = ({ pool }) => {
  const [name, setName] = useState<string>(pool.name);
  const [description, setDescription] = useState < string > (pool.description);
  const [status, setStatus] =
    useState <
    string >
    (() => {
      switch (pool.status) {
        case "Not Started":
          return "new";
        case "Activated":
          return "progress";
        case "Deactivated":
          return "completed";
        default:
          throw new Error(`Unknown status: ${pool.status}`);
      }
    });

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!name || !description || !status) {
      return alert("Please fill out all fields");
    }

    // Logic to handle form submission
    console.log("Form submitted with:", { name, description, status });
  };

  return (
    <div className="mt-5">
      <h3>Update Subscription Details</h3>
      <form onSubmit={onSubmit}>
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input
            type="text"
            className="form-control"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
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
            <option value="progress">Activated</option>
            <option value="completed">Deactivated</option>
          </select>
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default EditPoolForm;
