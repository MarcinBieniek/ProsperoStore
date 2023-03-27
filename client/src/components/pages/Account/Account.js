import styles from './Account.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { getOrderByUsername } from '../../../redux/ordersRedux';
import { getUser } from '../../../redux/usersRedux';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useEffect} from 'react';
import { fetchOrders } from '../../../redux/ordersRedux';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import DescriptionIcon from '@mui/icons-material/Description';
import MyLocationIcon from '@mui/icons-material/MyLocation';
import AirplanemodeActiveIcon from '@mui/icons-material/AirplanemodeActive';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import LogoutIcon from '@mui/icons-material/Logout';
import { Link } from 'react-router-dom';

const Account = () => {

  const dispatch = useDispatch()

  useEffect(() => dispatch(fetchOrders()), [dispatch]);
  const username = useSelector(getUser);
  const selectedOrders = useSelector(state => getOrderByUsername(state, username.login));

  console.log('sel orders is', selectedOrders)

  return (
    <Row className={styles.container}>
      <Col md={4}>
        <div className={styles.user}>
          <h1>User: {username.login}</h1>
          <img 
            className={styles.img}
            src={`${process.env.PUBLIC_URL}/images/various/user-template.jpg`} 
            alt="User"
          />
          <Link to="/logout">
            <button>
              <LogoutIcon />
              <span>Logout</span>
            </button>
          </Link>

          <div className={styles.message}>
            <span>Welcome to your user profile. Browse orders history for more details.</span>
          </div>
        </div>
      </Col>
      <Col md={8}>
        <div className={styles.orders}>
          <h1>My orders</h1>
        </div>
       
          
          {selectedOrders.map((order, i) => 
            <div className={styles.data}>
              <div className={styles.order}>
                <Breadcrumb className={styles.breadcrumb}>
                  <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
                  <Breadcrumb.Item href="/account">Orders</Breadcrumb.Item>
                  <Breadcrumb.Item active>ID {i+1}</Breadcrumb.Item>
                </Breadcrumb>
                <div className={styles.header}>
                  <h1>Order ID: {i+1}</h1>
                  <div className={styles.buttons}>
                    <button className={styles.button__invoice}>
                      <DescriptionIcon className={styles.icon}/>
                      <span>Invoice</span>
                    </button>
                    <button className={styles.button__track}>
                      <span>Track order</span>
                      <MyLocationIcon className={styles.icon}/>
                    </button>
                  </div>
                </div>
                <div className={styles.dates}>
                  <div className={styles.order__date}>
                    <span>Order date:</span> <span>{order.date}</span>
                  </div>
                  <div className={styles.delivery__date}>
                    <AirplanemodeActiveIcon className={styles.icon} />
                    <span>Estimated delivery: 2 weeks</span>
                  </div>
                </div>
                <div className={styles.products}>

                  {order.products.map((product, i) => 
                    <div className={styles.product}>
                      <div className={styles.left__side}>
                        <img 
                          src={`${process.env.PUBLIC_URL}${product.productImg}${product.color}.jpeg`} 
                          ald="Product img"
                        />
                        <div className={styles.description}>
                          <h2>No. {i+1} | {product.title}</h2>
                          <div className={styles.details}>
                            <span>{product.category}</span>
                            <span>{product.width} X {product.height}</span>
                            <span>{product.color}</span>
                          </div>
                        </div>
                      </div>
                      <div className={styles.right__side}>
                        <span>${product.price}</span>
                        <span>Qty: {product.amount}</span>
                      </div>
                    </div>
                  )}


                </div>
                <div className={styles.footer}>
                  <div className={styles.payment}>
                    <h2>Total price</h2>
                    <span >$ {order.price}</span>
                    <h2 className={styles.price}>Payment</h2>
                    <span>Visa **56</span>
                    <CreditCardIcon className={styles.icon}/>
                  </div>
                  <div className={styles.address}>
                    <h2>Delivery</h2>
                    <p>Address</p>
                    <span>847 Jewess Bridge Apt. 174</span><br/>
                    <span>London, UK</span><br/>
                    <span>474-796-3919</span><br/>
                  </div>
                </div>
              </div>
            </div>
          )}


        
      </Col>
    </Row>
  )
}

export default Account
