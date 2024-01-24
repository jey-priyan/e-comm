import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './Components/navbar/Navbar';
import ItemDetail from './Components/itemdetail/ItemDetail';
import Cart from './Components/cart/Cart';
import Orders from './Components/order/Orders';
import CheckOut from './Components/checkout/CheckOut';
import HomePage from './Components/home/HomePage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <div>
        <Navbar />
      </div>
      <Routes>
      <Route path="/item/:id" element={<ItemDetail />} />
          <Route path="/cart" element={<Cart/>} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/checkout" element={<CheckOut />} />
          <Route exact path="/" element={<HomePage />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
