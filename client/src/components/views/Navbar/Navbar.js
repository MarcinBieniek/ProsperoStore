import styles from './Navbar.module.scss';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from 'react-router-dom';
import SearchForm from '../../features/SearchForm/SearchForm';
import { useState, useEffect } from 'react';
import clsx from 'clsx';
import { useSelector } from 'react-redux';
import { getCount, getTotalPrice } from '../../../redux/cartRedux';
import { getUser } from '../../../redux/usersRedux';
import Modal from 'react-bootstrap/Modal';
import { getFavNumber } from '../../../redux/favouriteRedux';

const Navbar = () => {

  const user = useSelector(getUser);
  const favourite = useSelector(getFavNumber);
  const cartItemsNumber = useSelector(getCount);
  const totalCartPrice = useSelector(getTotalPrice);

  const [stickyClass, setStickyClass] = useState(false);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    window.addEventListener('scroll', stickNavbar);
    return () => window.removeEventListener('scroll', stickNavbar)
  }, []);

  const stickNavbar = () => {
    if (window !== undefined) {
      let windowHeight = window.scrollY;
      windowHeight > 100 ? setStickyClass(true) : setStickyClass('');
    }
  };

  return (
    <>
      <div className={styles.container}>

        <div className={styles.messageBar}>
          <div className={styles.messageBar__left}>
            <p>Safe and secure shipping to all UE countries</p>
          </div>
          <div className={styles.messageBar__right}>
            <p>Phone: (+48) 123 456 789</p>
          </div>
        </div>

        <div className={clsx(styles.mainBar, stickyClass && styles.sticky)}>
          <div className={styles.mainBar__logo}>
            <Link to="/">
              <img 
                className={styles.image}
                src={`${process.env.PUBLIC_URL}/images/various/prospero-logo.png`} 
                alt="logo"
              />
            </Link>
          </div>
          <div className={styles.mainBar__search}>
            <SearchForm />
          </div>
          
          <div className={styles.mainBar__features}>

            {user 
              ?
                <div className={styles.icons}>
                  <Link to="/favourite" className={styles.icons__box}>
                    <div className={styles.icon__box}>
                      <FavoriteBorderIcon className={styles.icon}/>
                      {favourite ? <span className={styles.span}>{favourite}</span> : <div/>}
                    </div>

                    <p>Favourite Products</p>
                  </Link>
                </div>
              :
                <div className={styles.icons}>
                  <div onClick={handleShow} className={styles.icons__box}>
                    <FavoriteBorderIcon className={styles.icon}/>
                    <p>Favourite Products</p>
                  </div>
                </div>
            }

            <div className={styles.icons}>
              <div className={styles.icons__box}>
                <Link to={user ? "/user/account" : "/register" }>
                  <PersonOutlineIcon className={styles.icon}/>
                </Link>
                <div className={styles.register}>
                  { user 
                  ? 
                    <Link to="/user/account">
                      <span>My account</span>
                    </Link>
                  :
                    <Link to="/register">
                      <span>Reqister</span>
                    </Link>
                  }
                  { user
                  ?
                    <Link to="/logout">
                      <span>Logout</span>
                    </Link>
                  :
                    <Link to="/login">
                      <span>Login</span>
                    </Link>
                  }
                </div>
              </div>
            </div>

            <div className={styles.icons}>
              <div className={styles.icons__box}>
                <Link to="/cart">
                  <ShoppingCartIcon className={styles.icon__cart}/>
                </Link>
                <Link to="/cart">
                <div className={styles.cart}>
                  <span className={styles.amount}>{cartItemsNumber}</span>
                  <span>${totalCartPrice}</span>
                </div>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.mobileSearch}>
          <SearchForm />
        </div>

        <div className={styles.menu__bar}>
          <div className={styles.menu__dropdown}>
            <div className={styles.dropdown}>
              <button className={styles.button}>MENU</button>
              <div className={styles.content}>
                <a href="#">PRODUCTS</a>
                <a href="#">COMPANY</a>
                <a href="#">CONTACT</a>
              </div>
            </div>
          </div>
          <div className={styles.menu__buttons}>
            <Link to="/sale">
              <span>FLAT 50% OFF</span>
            </Link>
            <Link to="/sale">
              <span>20% OFF</span>
            </Link>
            <Link to="/sale">
              <span>UP TO 45% OFF</span>
            </Link>
            <Link to="/sale">
              <span>DISCOUNT</span>
            </Link>
          </div>
        </div>
      </div>

      <Modal 
        show={show} 
        onHide={handleClose}
        aria-labelledby="contained-modal-title-vcenter"
        centered
        className={styles.modal}
      >
        <Modal.Header closeButton>
          <Modal.Title>Please login</Modal.Title>
        </Modal.Header>
        <Modal.Body>This option is available only for logged users.</Modal.Body>
        <Modal.Footer>
          <button variant="primary" onClick={handleClose}>
            <Link to="/register">
              Register
            </Link>
          </button>
          <button variant="primary" onClick={handleClose}>
            <Link to="/login">
              Login
            </Link>
          </button>
          <button onClick={handleClose}>
            Close
          </button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default Navbar
