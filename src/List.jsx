function List(){
let items = ['Apple', 'Mango', 'Orange', 'Grapes', 'Banana'];
// items = [];
//  let lists = items.map(list => <li>{list} </li>);
    return(
        <>
        <h1>List Group</h1>
            {/* {lists} */}
            {items.length === 0 ? (<p>No items available</p>) :
            (
            <ul className="list-group">
                {items.map((item, id) => (<li className="list-group-item" key={id} onClick={() => console.log("Clicked")}> {item}  </li>))}
            </ul>
            )}
        </>
    );
}
export default List;