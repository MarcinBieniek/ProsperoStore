import styles from './ProductInCart.module.scss';
import DeleteIcon from '@mui/icons-material/Delete';
import Quantity from '../../common/Quantity/Quantity';
import { Link } from 'react-router-dom';
import { deleteProduct } from '../../../redux/cartRedux';
import { useDispatch } from 'react-redux';

const ProductInCart = (props) => {

  const dispatch = useDispatch();
  const productId = props.id;

  console.log(productId)
  console.log('props is', props)

  const handleDelete = e => {
    e.preventDefault();
    dispatch(deleteProduct(productId))
  }

  return (
    <div className={styles.product__item}>

      <Link to={`/product/${props.id}`} className={styles.link}>
        <div className={styles.leftColumn}>
          <img 
            src={`${process.env.PUBLIC_URL}${props.img}`} 
            alt="Product image" 
          />
          <div className={styles.info}>
            <h3>{props.title}, {props.width} cm x {props.height} cm</h3>
            <p>Color: {props.color}</p>
          </div>
        </div>
      </Link>

      <div className={styles.rightColumn}>
        <div className={styles.delete} onClick={handleDelete}>
          <DeleteIcon className={styles.icon}/>
          <span>Delete</span>
        </div>
        <div className={styles.quantity}>
          <h2>Quantity:</h2>
          <Quantity />
        </div>
        <span className={styles.price}>${props.price}</span>
      </div>
    </div>
  )
}

export default ProductInCart
