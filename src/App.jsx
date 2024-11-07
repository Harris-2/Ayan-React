import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import ListPage from './pages/ListPage.jsx';
import AddList from './pages/AddList.jsx';

function App() {
  const [items, setItems] = useState([]);

  return (
    <>
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<ListPage />} items={items} setItems={setItems} />
          <Route path='/add' element={<AddList />} items={items} setItems={setItems} />
        </Routes>
      </div>
    </Router>
    </>
  )
}

export default App
