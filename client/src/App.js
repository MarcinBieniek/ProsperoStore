import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './styles/global.scss';
import Home from './components/pages/Home/Home';
import Category from './components/pages/Category/Category';
import SingleProduct from './components/pages/SingleProduct/SingleProduct';
import Cart from './components/pages/Cart/Cart';
import Register from './components/pages/Register/Register';
import Login from './components/pages/Login/Login';
import Navbar from './components/views/Navbar/Navbar'
import Favourite from './components/pages/Favourite/Favourite';
import SearchResult from './components/pages/SearchResult/SearchResult';
import SpecialOffer from './components/pages/SpecialOffer/SpecialOffer';
import Footer from './components/views/Footer/Footer';
import { getUser } from './redux/usersRedux';
import { useDispatch, useSelector } from 'react-redux';
import Account from './components/pages/Account/Account';
import Logout from './components/pages/Logout/Logout';
import { API_URL } from './config';
import { useEffect } from 'react';
import { fetchProducts } from './redux/productsRedux';
import { fetchOrders } from './redux/ordersRedux';

const App = () => {

  useEffect(() => {
    window.scrollTo({top: 0, left: 0, behavior: 'smooth' });
  }, [])

  const user = useSelector(getUser)

  const dispatch = useDispatch();

  useEffect(() => dispatch(fetchProducts()), [dispatch]);
  useEffect(() => dispatch(fetchOrders()), [dispatch]);

  const options = {
    method: 'GET',
    credentials: 'include'
  };

  fetch(`${API_URL}auth/user`, options)
    .then((response) => {
      response.json().then((data => {
        console.log('session user is', data.login)
      }))
    })

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products/:category" element={<Category />} />
        <Route path="/product/:id" element={<SingleProduct />} />
        <Route path="/cart" element={<Cart />} />    
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/favourite" element={<Favourite />} />
        <Route path="/search" element={<SearchResult />} />
        <Route path="/sale" element={<SpecialOffer />} />
        <Route path="/user/account" element={<Account />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
