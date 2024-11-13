function List() {
  let items = ["Apple", "Mango", "Orange", "Grapes", "Banana"];
  items = [];
  return (
    <>
      <div className="container">
        <h1>List Group</h1>
        {items.length === 0 ? (
          <p>No items available</p>
        ) : (
          <ul className="list-group">
            {items.map((item, id) => (
              <li className="list-group-item" key={id} >{item} </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
}
export default List;
