import styles from './Cart.module.scss';
import Row from 'react-bootstrap/Row';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import DeleteIcon from '@mui/icons-material/Delete';
import Quantity from '../../common/Quantity/Quantity';
import { Container } from 'react-bootstrap';
import PercentIcon from '@mui/icons-material/Percent';

const Cart = () => {
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
      <Row>
        <div className={styles.product}>
          <div className={styles.product__item}>
            <div className={styles.leftColumn}>
              <img 
                src={`${process.env.PUBLIC_URL}/images/colors/unipro-orzech.jpg`} 
                alt="Product image" 
              />
              <div className={styles.info}>
                <h3>UniPro garage gate, 2m x 2,20</h3>
                <p>Color: RAL7016, drive: Moto 600</p>
              </div>
            </div>
            <div className={styles.rightColumn}>
              <div className={styles.delete}>
                <DeleteIcon className={styles.icon}/>
                <span>Delete</span>
              </div>
              <div className={styles.quantity}>
                <h2>Quantity:</h2>
                <Quantity />
              </div>
              <span className={styles.price}>$1234,22</span>
            </div>
          </div>
        </div>
      </Row>
      
      <Row>
        <div className={styles.product}>
          <div className={styles.product__item}>
            <div className={styles.leftColumn}>
              <img 
                src={`${process.env.PUBLIC_URL}/images/colors/unipro-orzech.jpg`} 
                alt="Product image" 
              />
              <div className={styles.info}>
                <h3>UniPro garage gate, 2m x 2,20</h3>
                <p>Color: RAL7016, drive: Moto 600</p>
              </div>
            </div>
            <div className={styles.rightColumn}>
              <div className={styles.delete}>
                <DeleteIcon className={styles.icon}/>
                <span>Delete</span>
              </div>
              <div className={styles.quantity}>
                <h2>Quantity:</h2>
                <Quantity />
              </div>
              <span className={styles.price}>$1234,22</span>
            </div>
          </div>
        </div>
      </Row>

      <Row>
        <div className={styles.product}>
          <div className={styles.product__item}>

            <div className={styles.leftColumn}>
              <img 
                src={`${process.env.PUBLIC_URL}/images/colors/unipro-orzech.jpg`} 
                alt="Product image" 
              />
              <div className={styles.info}>
                <h3>UniPro garage gate, 2m x 2,20</h3>
                <p>Color: RAL7016, drive: Moto 600</p>
              </div>
            </div>

            <div className={styles.rightColumn}>
              <div className={styles.delete}>
                <DeleteIcon className={styles.icon}/>
                <span>Delete</span>
              </div>
              <div className={styles.quantity}>
                <h2>Quantity:</h2>
                <Quantity />
              </div>
              <span className={styles.price}>$1234,22</span>
            </div>

          </div>
        </div>
      </Row>

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
              <span>- $2897</span>
            </div>
            <div className={styles.finalValue}>
              <h3>Price</h3>
              <span>$2222</span>
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
