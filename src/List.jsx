function List(){
let items = ['Apple', 'Mango', 'Orange', 'Grapes', 'Banana'];
items = [];
    return(
        <>
        <h1>List Group</h1>
            
            {items.length === 0 ? (<p>No items available</p>) :
            ( <ul className="list-group">
                {items.map((item, id) => <li key={id} >{item} </li> )}
            </ul>  )}
        </>
    );
}
export default List;