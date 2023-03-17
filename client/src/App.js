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
import CompareProducts from './components/pages/CompareProducts/CompareProducts';
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

const App = () => {

  useEffect(() => {
    window.scrollTo({top: 0, left: 0, behavior: 'smooth' });
  }, [])

  const user = useSelector(getUser)
  console.log('local user is', user)

  const dispatch = useDispatch();

  useEffect(() => dispatch(fetchProducts()), [dispatch])

  const options = {
    method: 'GET',
    credentials: 'include'
  };

  fetch(`${API_URL}auth/user`, options)
    .then((response) => {
      response.json().then((data => {
        console.log('session user is', data)
      }))
    })

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
        <Route path="/logout" element={<Logout />} />
        <Route path="/favourite" element={<Favourite />} />
        <Route path="/compare" element={<CompareProducts />} />
        <Route path="/search" element={<SearchResult />} />
        <Route path="/sale" element={<SpecialOffer />} />
        <Route path="/user/account" element={<Account />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
