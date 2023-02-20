import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './styles/global.scss';
import Home from './components/pages/Home/Home';
import ProductList from './components/pages/ProductList/ProductsList';
import SingleProduct from './components/pages/SingleProduct/SingleProduct';
import Cart from './components/pages/Cart/Cart';
import Register from './components/pages/Register/Register';
import Login from './components/pages/Login/Login';
import Navbar from './components/views/Navbar/Navbar'
import Favourite from './components/pages/Favourite/Favourite';
import CompareProducts from './components/pages/CompareProducts/CompareProducts'

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products/:category" element={<ProductList />} />
        <Route path="/product/:id" element={<SingleProduct />} />
        <Route path="/cart" element={<Cart />} />    
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/favourite" element={<Favourite />} />
        <Route path="/compare" element={<CompareProducts />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
