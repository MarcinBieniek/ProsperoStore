import styles from './Account.module.scss';
import { useSelector } from 'react-redux';
import { getOrderByUsername } from '../../../redux/ordersRedux';
import { getUser } from '../../../redux/usersRedux';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import PersonIcon from '@mui/icons-material/Person';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import PaymentsIcon from '@mui/icons-material/Payments';
import DeleteIcon from '@mui/icons-material/Delete';
import HourglassBottomIcon from '@mui/icons-material/HourglassBottom';

const Account = () => {

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
          <button>+ Upload new photo</button>
          <div className={styles.message}>
            <span>Upload new avatar. Maximum image size is 1MB.</span>
          </div>
        </div>
      </Col>
      <Col md={8}>
        <div className={styles.data}>
          <h1>Profile details</h1>
          <Tabs
            defaultActiveKey="orders"
            id="usertabs"
            className="mb-3"
            justify
          >
            <Tab eventKey="orders" title="Orders list">
              
              {selectedOrders.map((order, i) => 
                <div className={styles.list__item}>
                  <div className={styles.list__firstLine}>
                    <span>
                      Nr: {i+1}
                    </span>
                    <span>
                      <PersonIcon className={styles.icon}/>
                      User: {order.username}
                    </span>
                    <span>
                      <CalendarMonthIcon className={styles.icon}/>
                      Date: {order.date}
                    </span>
                    <span>
                      <PaymentsIcon className={styles.icon}/>
                      Price: {order.price}
                    </span>
                    <span>
                      <HourglassBottomIcon className={styles.icon}/>
                      In Progress
                    </span>
                  </div>  
                  <div className={styles.list__secondLine}>
                    {order.products.map((product, i) => 
                      <div className={styles.product} key={i}>
                        <span>Id: {i+1} | </span>
                        <span>Category: {product.category} | </span>
                        <span>Product name: {product.title} | </span>
                        <span>Size: {product.width} X {product.height} | </span>
                        <span>Quantity: {product.amount} | </span>
                        <span>Single price: {product.price} </span>
                      </div>
                    )}
                  </div>
                </div>
              )}

            </Tab>
            <Tab eventKey="contact" title="Contact data">
              asd
            </Tab>
          </Tabs>
        </div>
      </Col>
    </Row>
  )
}

export default Account
