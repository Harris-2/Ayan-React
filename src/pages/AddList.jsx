import { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddList({items, setItems}){

    const [name, setName] = useState('');

    const navigate = useNavigate();

    const handleAdd = () =>{
        const newItem = {
            id: Date.now(), name,
        };

        setItems([...items, newItem]);
        navigate('/');
    }

    return(
        <>
        <div className="container">
            <div>
            <h1>Add List Page</h1>
                <input type="text" value={name} className="form-control w-25 mt-4" placeholder="Enter item" onChange={(e) => setName(e.target.value)} />
            </div>
            <button onClick={handleAdd} className="btn btn-primary btn-sm mt-4">Add item</button>
        </div>
        </>
    );
}

export default AddList;