import styles from './Navbar.module.scss';
import PublishedWithChangesIcon from '@mui/icons-material/PublishedWithChanges';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SearchIcon from '@mui/icons-material/Search';
import { Link } from 'react-router-dom';

const Navbar = () => {
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

      <div className={styles.mainBar}>
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
          <form>
            <input 
              type="text" 
              placeholder="Search product here..." 
              name="search" 
            />
            <button type="submit"><SearchIcon /></button>
          </form>
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
            <div className={styles.cart}>
              <span className={styles.amount}>0</span>
              <span>$0.00</span>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.menu__bar}>
        <div className={styles.menu__dropdown}>
          ASD
        </div>
        <div className={styles.menu__buttons}>
          <span>FLAT 50% OFF</span>
          <span>20% OFF</span>
          <span>UP TO 45% OFF</span>
          <span>DISCOUNT</span>
        </div>
      </div>
    </div>
  )
}

export default Navbar
