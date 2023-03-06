import styles from './Navbar.module.scss';
import PublishedWithChangesIcon from '@mui/icons-material/PublishedWithChanges';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from 'react-router-dom';
import SearchForm from '../../features/SearchForm/SearchForm';
import React, { useState, useEffect } from 'react';
import clsx from 'clsx';
import { useSelector } from 'react-redux';
import { getAll, getCount, getTotalPrice } from '../../../redux/cartRedux';

const Navbar = () => {

  const cartItemsNumber = useSelector(getCount);
  const totalCartPrice = useSelector(getTotalPrice);

  const [stickyClass, setStickyClass] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', stickNavbar);
    return () => window.removeEventListener('scroll', stickNavbar)
  }, []);

  const stickNavbar = () => {
    if (window !== undefined) {
      let windowHeight = window.scrollY;
      windowHeight > 170 ? setStickyClass(true) : setStickyClass('');
    }
  };

  return (
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
          <div className={styles.icons}>
            <PublishedWithChangesIcon className={styles.icon}/>
            <Link to="/compare">
              <p>Compare Products</p>
            </Link>
          </div>
          <div className={styles.icons}>
            <FavoriteBorderIcon className={styles.icon}/>
            <Link to="/favourite">
              <p>Favourite Products</p>
            </Link>
          </div>
          <div className={styles.icons}>
            <PersonOutlineIcon className={styles.icon}/>
            <div className={styles.register}>
              <Link to="/register">
                <span>Reqister</span>
              </Link>
              <Link to="/login">
                <span>Login</span>
              </Link>
            </div>
          </div>
          <div className={styles.icons}>
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

      <div className={styles.mobileSearch}>
        <SearchForm />
      </div>

      <div className={styles.menu__bar}>
        <div className={styles.menu__dropdown}>
          MENU
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
  )
}

export default Navbar
