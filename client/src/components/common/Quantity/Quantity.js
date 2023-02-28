import styles from './Quantity.module.scss';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

const Quantity = () => {
  return (
    <div className={styles.quantity}>
      <div className={styles.counter}>
        <RemoveIcon className={styles.icon}/>
          <span>1</span>
        <AddIcon className={styles.icon}/>
      </div>
    </div>
  )
}

export default Quantity
