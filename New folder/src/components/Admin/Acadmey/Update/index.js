import React from "react";
import "./index.css";

const Update = () => {
  return (
    <div className="container">
      <h2 className="heading"> Add Acadmey</h2>
      <form>
        <div className="input">
          <input
            placeholder="Enter Academy name"
            type="text"
            className="input_value"
          />
          <input
            placeholder="Enter the contact number"
            type="text"
            className="input_value"
          />
        </div>
        <div className="input">
          <input
            placeholder="Enter the acadmey Image url"
            type="text"
            className="input_value"
          />
          <input
            placeholder="Enter the acadmey email"
            type="text"
            className="input_value"
          />
        </div>
        <div className="input">
          <input
            placeholder="Enter Academy"
            type="text"
            className="input_value"
          />
          <input
            placeholder="Enter Acadmey description"
            type="text"
            className="description "
          />
        </div>
        <div className="btn">
          <button className="button" type="submit">
            Update Academy
          </button>
        </div>
      </form>
    </div>
  );
};

export default Update;
