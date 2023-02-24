import styles from './ProductCard.module.scss';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import StarIcon from '@mui/icons-material/Star';
import PublishedWithChangesIcon from '@mui/icons-material/PublishedWithChanges';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const ProductCard = () => {
  return (
    <div className={styles.product}>  
      <div className={styles.widgets}>
        <div className={styles.icons}>
          <FavoriteBorderIcon className={styles.icon}/>
          <PublishedWithChangesIcon className={styles.icon}/>
        </div>
        <div className={styles.info}>
          <span className={styles.sale}>Sale</span>
          <span className={styles.top}>Top</span>
        </div>
      </div>
      <img 
        src={`${process.env.PUBLIC_URL}/images/products/unipro-product.jpeg`} 
        alt="product"
      />
      <p>Garage gates</p>
      <h1>Wisniowski UniPro</h1>
      <div className={styles.stars}>
        <StarIcon className={styles.star} />
        <StarIcon className={styles.star} />
        <StarIcon className={styles.star} />
        <StarIcon className={styles.star} />
        <StarIcon className={styles.star} />
        <span> (2 reviews)</span>
      </div>
      <div className={styles.price}>
        <p>$1,202.00</p>
        <button>
          Add 
          <ShoppingCartIcon className={styles.cart__icon}/>
        </button>
      </div>
    </div>
  )
}

export default ProductCard
