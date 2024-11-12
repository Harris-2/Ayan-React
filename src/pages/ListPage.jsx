import { Link } from "react-router-dom";

function ListPage({items, setItems}){

    const handleDelete = (id) => {
        const updatedItems =  items.filter(item => item.id !== id );
        setItems(updatedItems);
    };

    return(
        <>
        <div className="container mt-5">
            <div className="d-flex justify-content-between">
                <h1>List Group</h1>
                <div>
                    <Link to='/add' className="btn btn-primary" >Add new </Link>
                </div>
            </div>
            <ul className="list-group">
                {items.length === 0 ? ( <li className="list-group-item">No items available</li> ) : (
            items.map(item => <li className="list-group-item d-flex justify-content-between fs-4 border border-dark" key={item.id}> {item.name}
                <Link to={`/edit/${item.id}`} className="btn btn-info">Edit</Link>
                <button className="btn btn-danger" onClick={() => handleDelete(item.id)}>Delete</button> </li> )
                )}
            </ul>
        </div>
        </>
    );
}

export default ListPage;