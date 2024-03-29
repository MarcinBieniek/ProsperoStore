import styles from './SingleProduct.module.scss';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import EmailIcon from '@mui/icons-material/Email';
import { Container } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getProductById } from '../../../redux/productsRedux';
import { useState, useEffect } from 'react';
import {useDispatch} from 'react-redux';
import { addProduct } from '../../../redux/cartRedux';

const SingleProduct = () => {

  useEffect(() => {
    window.scrollTo({top: 0, left: 0, behavior: 'smooth' });
  }, [])

  const dispatch = useDispatch();
  const productId = useParams();
  const product = useSelector(state => getProductById(state, productId.id))

  const [width, setWidth] = useState(product.width);
  const [height, setHeight] = useState(product.height);
  const [color, setColor] = useState(product.color);
  const [order, setOrder] = useState(false);

  // color

  const handleSetColor = (col) => {
    setColor(col)
  }

  // add to cart

  const handleClick = (e) => {
    e.preventDefault();
    dispatch(addProduct({...product, color, height, width}));
    setOrder(true)
  }

  // set timeout for success message

  useEffect(()=>{
    setTimeout(() => {
      setOrder(false)
         }, 5000);
       },
   [order])

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
          <Col lg={6} g-0>
            <div className={styles.product__mainImg}>
              <img 
                src={`${process.env.PUBLIC_URL}${product.productImg}${color}.jpeg`}                                 
                alt="Main photo"
              />
            </div>
          
          </Col>
          <Col lg={6} g-0>
            <div className={styles.product__desc}>
              <h1>{product.title}</h1>
              <h3>Producer: {product.producer}</h3>
              <p>${product.price} (23% VAT)</p>

              {product.category !== "Accessories" &&
                <>
                  <div className={styles.size}>
                    <h2 className={styles.size__text}>Select width: </h2>
                    <select className={styles.select} onChange={(e) => setWidth(e.target.value)}>
                      <option className={styles.option} value={product.width}>{product.width} cm</option>
                      <option className={styles.option} value="260">260 cm</option>
                      <option className={styles.option} value="275">275 cm</option> 
                      <option className={styles.option} value="300">300 cm</option> 
                      <option className={styles.option} value="325">325 cm</option> 
                    </select> 
                  </div>
                  <div className={styles.size}>
                    <h2 className={styles.size__text}>Select height: </h2>
                    <select className={styles.select} onChange={(e) => setHeight(e.target.value)}>
                      <option className={styles.option} value={product.height}>{product.height} cm</option>
                      <option className={styles.option} value="230">230 cm</option>
                      <option className={styles.option} value="237">237 cm</option> 
                      <option className={styles.option} value="250">250 cm</option> 
                      <option className={styles.option} value="325">325 cm</option> 
                    </select> 
                  </div>

                  <div className={styles.colors}>
                    <h2 className={styles.colors__text}>Select color:</h2>

                      {product.availableColors.map((c) => (
                        <button className={styles.color} onClick={() => handleSetColor(c)}>
                          <img 
                            src={`${process.env.PUBLIC_URL}/images/colors/${c}.jpeg`}
                            alt="Main photo"
                          /> 
                        </button>
                      ))}
                  </div>
                </>
              }

              {order &&
                <div className={styles.success}>Product added to cart!</div> 
              }

            </div>

          </Col>
        </Row>
        <Row>
          <Col lg={6}>
            <div className={styles.leftColumn}>
              <div className={styles.leftSide}>
                <SupportAgentIcon className={styles.icon}/>
                <a href="tel:123-456-7890" className={styles.infoBox}>
                  <h3>Need help?</h3>
                  <p>Call us!</p>
                </a>
              </div>
              <div className={styles.rightSide}>
                <EmailIcon className={styles.icon}/>
                <a href="mailto:contact@wp.pl" className={styles.infoBox}>
                  <h3>Need a project?</h3>
                  <p>Send us message!</p>
                </a>
              </div>
            </div>
          </Col>
          <Col lg={6}>
            <div className={styles.rightColumn}>
              <button onClick={handleClick}>
                Add to cart
                <ShoppingCartIcon className={styles.cart__icon}/>
              </button>
              <div className={styles.icons}>
                <FavoriteBorderIcon className={styles.icon}/>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </Container>
  )
}

export default SingleProduct
