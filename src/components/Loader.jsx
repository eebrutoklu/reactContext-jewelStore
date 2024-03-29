import React from "react";

const Loader = () => {
  return (
    <div className="d-flex gap-2 text-success opacity-75">
      <div className="spinner-border" role="status"></div>
      <h3>Loading...</h3>
    </div>
  );
};

export default Loader;
