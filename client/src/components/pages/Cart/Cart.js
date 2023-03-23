import styles from './Cart.module.scss';
import Row from 'react-bootstrap/Row';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import { Container } from 'react-bootstrap';
import PercentIcon from '@mui/icons-material/Percent';
import { useSelector } from 'react-redux';
import { getAll, getTotalPrice } from '../../../redux/cartRedux';
import ProductInCart from '../../views/ProductInCart/ProductInCart';
import axios from 'axios';
import { API_URL } from '../../../config';
import { getUser } from '../../../redux/usersRedux';
import Modal from 'react-bootstrap/Modal';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const Cart = () => {

  const products = useSelector(getAll);
  const totalCartPrice = useSelector(getTotalPrice);
  const user = useSelector(getUser);
  const date = new Date().toLocaleDateString();
  console.log('date is', date)

  // Send order to DB
  const payload = {
    products: products,
    username: user.login,
    date: date,
    price: totalCartPrice
  }

  const sendOrder = e => {
    e.preventDefault()

    axios
      .post(`${API_URL}orders/`, payload)
      .then(response => {
        setShow(true)
        console.log('res is', response)
      })
  }

  // Order send prompt
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);

  return (
    <>
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
                <Link to="/">
                  <button className={styles.buttonBack}>Back to store</button>
                </Link>
                <button className={styles.buttonOrder} onClick={sendOrder}>Order</button>
              </div>
            </div>

          </div>
        </Row>

      </Container>

      <Modal 
        show={show} 
        onHide={handleClose}
        aria-labelledby="contained-modal-title-vcenter"
        centered
        className={styles.modal}
      >
      <Modal.Header closeButton>
        <Modal.Title>Order successfully send!</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <span>Thank You for purchase. </span><br/>
        <span>Visit your user page and check orders history.</span>
      </Modal.Body>
      <Modal.Footer>
        <button variant="primary" onClick={handleClose}>
          <Link to="/user/account">
            User Page
          </Link>
        </button>
        <button onClick={handleClose}>
          Close
        </button>
      </Modal.Footer>
      </Modal>
    </>
  )
}

export default Cart
