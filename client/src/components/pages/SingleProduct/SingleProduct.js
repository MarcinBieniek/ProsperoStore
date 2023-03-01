import styles from './SingleProduct.module.scss';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import PublishedWithChangesIcon from '@mui/icons-material/PublishedWithChanges';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import EmailIcon from '@mui/icons-material/Email';
import Quantity from '../../common/Quantity/Quantity';
import { Container } from 'react-bootstrap';

const SingleProduct = () => {
  return (
    <Container fluid className={styles.container}>
      <Row>
        <Breadcrumb className={styles.breadcrumb}>
          <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
          <Breadcrumb.Item href="/products/garage-door">Garage Doors</Breadcrumb.Item>
          <Breadcrumb.Item active>Product name</Breadcrumb.Item>
        </Breadcrumb>
      </Row>
      <div className={styles.product__container}>
        <Row>
          <Col lg={6}>
            <div className={styles.product__mainImg}>
              <img 
                src={`${process.env.PUBLIC_URL}/images/colors/unipro-orzech.jpg`}
                alt="Main photo"
              />
            </div>
          
          </Col>
          <Col lg={6}>
            <div className={styles.product__desc}>
              <h1>UniPro garage gate</h1>
              <h3>Producer: Wisniowski</h3>
              <p>$1111.00 (23% VAT)</p>
              <div className={styles.size}>
                <h2 className={styles.size__text}>Select width: </h2>
                <select className={styles.select}>
                  <option className={styles.option} value="1">250 cm</option>
                  <option className={styles.option} value="2">260 cm</option>
                  <option className={styles.option} value="3">275 cm</option> 
                </select> 
              </div>
              <div className={styles.size}>
                <h2 className={styles.size__text}>Select height: </h2>
                <select className={styles.select}>
                  <option className={styles.option} value="1">250 cm</option>
                  <option className={styles.option} value="2">260 cm</option>
                  <option className={styles.option} value="3">275 cm</option> 
                </select> 
              </div>
              <div className={styles.colors}>
                <h2 className={styles.colors__text}>Select color:</h2>
                  <button className={styles.color}>
                    <img 
                      src={`${process.env.PUBLIC_URL}/images/colors/orzech.jpeg`}
                      alt="Main photo"
                    />  
                  </button>
                  <button className={styles.color}>
                    <img 
                      src={`${process.env.PUBLIC_URL}/images/colors/antracyt.jpeg`}
                      alt="Main photo"
                    /> 
                  </button>
                  <button className={styles.color}>
                    <img 
                      src={`${process.env.PUBLIC_URL}/images/colors/siena-kolor.jpeg`}
                      alt="Main photo"
                    /> 
                  </button>
              </div>

              <div className={styles.quantity}>
                <h2>Quantity:</h2>
                <Quantity />
              </div>
              
            </div>

          </Col>
        </Row>
        <Row>
          <Col lg={6}>
            <div className={styles.leftColumn}>
              <div className={styles.leftSide}>
                <SupportAgentIcon className={styles.icon}/>
                <div className={styles.infoBox}>
                  <h3>Need information?</h3>
                  <p>Call us!</p>
                </div>
              </div>
              <div className={styles.rightSide}>
                <EmailIcon className={styles.icon}/>
                <div className={styles.infoBox}>
                  <h3>Need project?</h3>
                  <p>Send us message!</p>
                </div>
              </div>
            </div>
          </Col>
          <Col lg={6}>
            <div className={styles.rightColumn}>
              <button>
                Add to cart
                <ShoppingCartIcon className={styles.cart__icon}/>
              </button>
              <div className={styles.icons}>
                <FavoriteBorderIcon className={styles.icon}/>
                <PublishedWithChangesIcon className={styles.icon}/>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </Container>
  )
}

export default SingleProduct
