import { Col, Container, Row } from 'react-bootstrap';
import styles from './Footer.module.scss';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import MailIcon from '@mui/icons-material/Mail';

const Footer = () => {
  return (
    <Container fluid className={styles.container}>
      <Row className={styles.footer}>
        <Col md={5}>
          <div className={styles.contact}>
            <h1>Contac us</h1>
            <p>Prospero Bramy</p>
            <div className={styles.address}>
              <LocationOnIcon className={styles.icon} />
              <p>Ul. Dąbrowskiego 4, 43-180 Orzesze</p>
            </div>
            <div className={styles.phone}>
              <PhoneIcon className={styles.icon} />
              <span> (+48) 123 456 789</span>
            </div>
            <div className={styles.email}>
              <MailIcon className={styles.icon} />
              <p>kontakt@bramyslask.pl</p>
            </div>
            <div className={styles.socialmedia}>
              <FacebookIcon className={styles.icon} />
              <InstagramIcon className={styles.icon} />
              <TwitterIcon className={styles.icon} />
            </div>
          </div>
          
        </Col>
        <Col md={5}>
          <div className={styles.info}>
            <div className={styles.menu}>
              <h1>Menu</h1>
              <p>Categories</p>
              <p>Cart</p>
              <p>Special Offers</p>
              <p>Favourite</p>
              <p>Contact</p>
            </div>
            <div className={styles.policy}>
              <h1>Information</h1>
              <p>About Us</p>
              <p>Delivery</p>
              <p>Privacy Policy</p>
              <p>Guarantee</p>
              <p>Regulations</p>
            </div>
          </div>
        </Col>
        <Col md={2}>
          <div className={styles.payment}>
            <h1>Payment</h1>
            
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default Footer
