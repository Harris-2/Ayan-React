import { useState } from "react";

function State() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="container text-center">
        <h1 className="mt-5">State in React</h1>
        <div className="d-flex justify-content-evenly">
          <button
            className="btn btn-danger my-5" 
            onClick={() => setCount(count - 1)}>
            <i className="fa fa-subtract"></i>
          </button>

          <p className="h2 mt-5">{count} </p>

          <button
            className="btn btn-dark my-5"
            onClick={() => setCount(count + 1)}>
            <i className="fa fa-add"></i>
          </button>
        </div>
      </div>
    </>
  );
}

export default State;
