import styles from './Cart.module.scss';
import Row from 'react-bootstrap/Row';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import { Container } from 'react-bootstrap';
import PercentIcon from '@mui/icons-material/Percent';
import { useSelector } from 'react-redux';
import { getAll, getTotalPrice } from '../../../redux/cartRedux';
import ProductInCart from '../../views/ProductInCart/ProductInCart';

const Cart = () => {

  const products = useSelector(getAll);
  const totalCartPrice = useSelector(getTotalPrice);

  return (
    <Container fluid className={styles.container}>
      <Row>
        <Breadcrumb className={styles.breadcrumb}>
          <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
          <Breadcrumb.Item active>Cart</Breadcrumb.Item>
        </Breadcrumb>
      </Row>
      <Row>
        <h1 className={styles.header}>Products in cart</h1>
      </Row>
      
      {products && products.map(product => 
        <Row>
          <div className={styles.product}>
            <ProductInCart key={product.id} {...product}/>
          </div>
        </Row> 
      )}

      <Row>
        <div className={styles.summary}>
          <div className={styles.discount}>
            <h3>Do you have promo code?</h3>
            <div className={styles.discount__div}>
              <input placeholder="PROSPERO15"></input>
              <button>
                <PercentIcon className={styles.icon} />
                <span>Submit</span>
              </button>
            </div>
          </div>
        
          <div className={styles.price}>
            <div className={styles.discountValue}>
              <h3>Discount</h3>
              <span>- $0</span>
            </div>
            <div className={styles.finalValue}>
              <h3>Total price</h3>
              <span>${totalCartPrice}</span>
            </div>
          </div>
        </div>
      </Row>

      <Row>
        <div className={styles.orderSubmit}>
          <div className={styles.buttons__div}>
            <div className={styles.buttons}>
              <button className={styles.buttonBack}>Back to store</button>
              <button className={styles.buttonOrder}>Order</button>
            </div>
          </div>

        </div>
      </Row>

      <Row>
        
      </Row>

    </Container>
  )
}

export default Cart
