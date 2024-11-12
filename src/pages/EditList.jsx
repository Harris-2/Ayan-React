import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function EditList({items, setItems}){
    const {id} = useParams();
    const navigate = useNavigate();
    const itemToEdit = items.find((item) => item.id === parseInt(id));
    const [name, setName] = useState(itemToEdit ? itemToEdit.name : '');

    useEffect(() => {

        if (!itemToEdit) {
            navigate('/');
        }
    }, [itemToEdit, navigate]);

    const handleUpdate = () => {
        const updatedItems = items.map((item) => item.id === parseInt(id) ? {...item, name} : item);
        setItems(updatedItems);
        navigate('/');
    };

    return(
        <>
        <div className="container">
            <h1>Edit Item</h1>
            <input type="text" className="form-control w-25 my-4" value={name} onChange={(e) => setName(e.target.value)} />
            <button className="btn btn-primary" onClick={handleUpdate} >Edit item</button>
        </div>
        </>
    );
}

export default EditList;