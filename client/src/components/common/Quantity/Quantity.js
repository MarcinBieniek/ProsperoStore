import styles from './Quantity.module.scss';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateAmount } from '../../../redux/cartRedux';

const Quantity = (props) => {

  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();

  const productId = props.id;

  const handleQuantity = (type) => {
    if(type === "dec") {
      quantity > 1 && setQuantity(quantity - 1)
    } else {
      quantity < 10 && setQuantity(quantity + 1)
    }
  }

  return (
    <div className={styles.quantity}>
      <div className={styles.counter}>
        <RemoveIcon className={styles.icon} onClick={() => handleQuantity("dec")}/>
          <span>{quantity}</span>
        <AddIcon className={styles.icon} onClick={() => handleQuantity("inc")}/>
      </div>
    </div>
  )
}

export default Quantity
