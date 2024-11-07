import { Link } from "react-router-dom";

function ListPage(){
    let items = ['Apple', 'Mango', 'Orange'];
    return(
        <>
        <div className="continer mt-5">
            <div className="text-end me-2">
                <Link to='/add' className="btn btn-primary" >Add new </Link>
            </div>
        <h1>List Page</h1>
        <ul className="list-group">
            {items.map((item) => <li className="list-group-item">{item} </li> )}
        </ul>
        </div>
        </>
    );
}

export default ListPage;