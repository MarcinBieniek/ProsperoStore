import Col from 'react-bootstrap/esm/Col';
import Row from 'react-bootstrap/esm/Row';
import styles from './ProductList.module.scss';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import StarIcon from '@mui/icons-material/Star';
import PublishedWithChangesIcon from '@mui/icons-material/PublishedWithChanges';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ProductCard from '../../features/ProductCard/ProductCard';


const ProductList = () => {
  return (
    <> 
      <Row className={styles.container}>
        <Col sm={3}>
          <div className={styles.menu}>
            <p><b>Categories</b></p> 
            <p>Garage gates (4)</p>  
            <p>Industry gates (8)</p> 
            <p>Fences (9)</p> 
            <p>Windows (2)</p>
            <p>Doors (12)</p> 
            <p>Accesories (3)</p>
          </div>  
        </Col>
        <Col sm={9}>
          <Row>
            <Col>    
              <div className={styles.filters}>
                <span>Category > All products</span>
                <div className={styles.filter}>
                  <span className={styles.filter_text}>Sort: </span>
                  <select className={styles.select}>
                    <option className={styles.option} value="newest">Newest</option>
                    <option className={styles.option} value="asc">Price (asc)</option>
                    <option className={styles.option} value="desc">Price (desc)</option> 
                  </select> 
                </div>
              </div>      
            </Col>  
          </Row>  
          <Row xl={4} lg={3} md={2} sm={1} xs={1}>
            <Col>
              <ProductCard />
            </Col>  
            <Col>
              <ProductCard />
            </Col>
            <Col>
              <ProductCard />
            </Col>
            <Col>
              <ProductCard />
            </Col>
            <Col>
              <ProductCard />
            </Col>  
            <Col>
              <ProductCard />
            </Col>
            <Col>
              <ProductCard />
            </Col>
            <Col>
              <ProductCard />
            </Col>
          </Row>
        </Col>
      </Row>    
    </>
  )
}

export default ProductList
