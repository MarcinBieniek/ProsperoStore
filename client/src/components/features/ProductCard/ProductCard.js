import styles from './ProductCard.module.scss';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import StarIcon from '@mui/icons-material/Star';
import PublishedWithChangesIcon from '@mui/icons-material/PublishedWithChanges';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from 'react-router-dom';

const ProductCard = (props) => {

  return (
    <div className={styles.product}>  
      <div className={styles.widgets}>
        <div className={styles.icons}>
          <FavoriteBorderIcon className={styles.icon}/>
          <PublishedWithChangesIcon className={styles.icon}/>
        </div>
        <div className={styles.info}>
          { 
            props.sale === true 
            ? <span className={styles.sale}>Sale</span> 
            : <span></span>
          }
          { 
            props.top === true 
            ? <span className={styles.top}>Top</span> 
            : <span></span>
          }
        </div>
      </div>
      <Link to={`/product/${props.id}`}>
        <img 
          src={`${process.env.PUBLIC_URL}${props.img}`} 
          alt="product"
        />
        <p>{props.category}</p>
        <h1>{props.title}</h1>
        <div className={styles.stars}>
          <StarIcon className={styles.star} />
          <StarIcon className={styles.star} />
          <StarIcon className={styles.star} />
          <StarIcon className={styles.star} />
          <StarIcon className={styles.star} />
          <span> (2 reviews)</span>
        </div>
      </Link>
      <div className={styles.price}>
        <p>${props.price}</p>
        <button>
          Add 
          <ShoppingCartIcon className={styles.cart__icon}/>
        </button>
      </div>
    </div>
  )
}

export default ProductCard