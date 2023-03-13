import styles from './ProductInCart.module.scss';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { Link } from 'react-router-dom';
import { deleteProduct, updateAmount, getAll } from '../../../redux/cartRedux';
import { useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';

const ProductInCart = (props) => {

  const dispatch = useDispatch();
  const productId = props.id;

  console.log('product amount', props.amount)

  const [quantity, setQuantity] = useState(1);

  const handleDelete = e => {
    e.preventDefault();
    dispatch(deleteProduct(productId))
  }

  console.log('COMP - productId is', productId)
  console.log('COMP - quantity is', quantity)

  const handleQuantity = (type) => {
    if(type === "dec") {
      quantity > 1 && setQuantity(quantity - 1)
    } else {
      quantity < 10 && setQuantity(quantity + 1)
    }
  }

  const updatePrice = () => {
    dispatch(updateAmount({ quantity: parseInt(quantity), id: productId}))
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
          <div className={styles.counter_div}>
            <div className={styles.counter}>
              <RemoveIcon className={styles.icon} onClick={() => handleQuantity("dec")}/>
                <span>{quantity}</span>
              <AddIcon className={styles.icon} onClick={() => handleQuantity("inc")}/>
            </div>
            <button onClick={() => updatePrice()}>update</button>
          </div>
        </div>
        <span className={styles.price}>${props.price}</span>
      </div>
    </div>
  )
}

export default ProductInCart
