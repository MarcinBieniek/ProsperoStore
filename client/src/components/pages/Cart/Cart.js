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
import { useEffect } from 'react';

const Cart = () => {

  useEffect(() => {
    window.scrollTo({top: 0, left: 0, behavior: 'smooth' });
  }, [])

  const products = useSelector(getAll);
  const totalCartPrice = useSelector(getTotalPrice);
  const user = useSelector(getUser);
  const date = new Date().toLocaleDateString();

  console.log('user is', user)

  // Send order to DB
  
  const payload = {
    products: products,
    username: user?.login,
    date: date,
    price: totalCartPrice
  }

  const sendOrder = e => {
    e.preventDefault()

    axios
      .post(`${API_URL}orders/`, payload)
      .then(response => {
        setShowSend(true)
        console.log('res is', response)
      })
  }

  // Order sent prompt
  const [showSend, setShowSend] = useState(false);

  // Order error promt
  const [error, setError] = useState(false);

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
                {user !== null
                
                ? 
                
                <button className={styles.buttonOrder} onClick={sendOrder}>Send order</button>

                :

                <button className={styles.buttonOrder} onClick={()=>setError(true)}>Send order</button>

                }
              </div>
            </div>

          </div>
        </Row>

      </Container>

      <Modal 
        show={showSend} 
        onHide={showSend}
        aria-labelledby="contained-modal-title-vcenter"
        centered
        className={styles.modal}
      >
        <Modal.Header>
          <Modal.Title>Order successfully send!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <span>Thank You for purchase. </span><br/>
          <span>Visit your user page and check orders history.</span>
        </Modal.Body>
        <Modal.Footer>
          <button variant="primary" onClick={()=>setShowSend(false)}>
            <Link to="/user/account">
              User Page
            </Link>
          </button>
          <button onClick={()=>setShowSend(false)}>
            Close
          </button>
        </Modal.Footer>
      </Modal>

      <Modal 
        show={error} 
        onHide={error}
        aria-labelledby="contained-modal-title-vcenter"
        centered
        className={styles.modal}
      >
        <Modal.Header>
          <Modal.Title>Please login</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <span>This option is available only for logged users.</span><br/>
          <span>Register or login to proceed.</span>
        </Modal.Body>
        <Modal.Footer>
          <button variant="primary" onClick={()=>setError(false)}>
            <Link to="/register">
              Register
            </Link>
          </button>
          <button variant="primary"onClick={()=>setError(false)}>
            <Link to="/login">
              Login
            </Link>
          </button>
          <button onClick={()=>setError(false)}>
            Close
          </button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default Cart
