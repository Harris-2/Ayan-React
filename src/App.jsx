import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap";
import ListPage from "./pages/ListPage";
import AddList from "./pages/AddList";
import EditList from "./pages/EditList";
import { useState } from "react";
import State from "./State";
import City from "./City";
import Profile from "./Profile";

function App() {
  const [items, setItems] = useState([]);
  return (
    <>
      <h1 className="text-center">App page</h1>
      <Profile />

      <Router>
        <div>
          <Routes>
            <Route path="/state" element={<State />} />

            <Route
              path="/list"
              element={<ListPage items={items} setItems={setItems} />}
            />
            <Route
              path="/add"
              element={<AddList setItems={setItems} items={items} />}
            />
            <Route path="/edit/:id" element={<EditList items={items} setItems={setItems} />} />

          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
