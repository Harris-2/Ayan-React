import { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddList({ items, setItems }) {
  const [name, setName] = useState('');
  const navigate = useNavigate();

  const handleAdd = () => {
    if (name.trim()) {
      const newItem = {
        id: Date.now(),
        name,
      };
      setItems([...items, newItem]);
      navigate("/");
    }
  };
  return (
    <>
      <div className="container">
        <h1>Add New Item</h1>
        <input
          type="text"
          className="form-control w-25 my-4"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button className="btn btn-primary" onClick={handleAdd}>
          Add item
        </button>
      </div>
    </>
  );
}

export default AddList;
