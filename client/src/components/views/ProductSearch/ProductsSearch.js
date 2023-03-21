import Col from 'react-bootstrap/esm/Col';
import Row from 'react-bootstrap/esm/Row';
import styles from './ProductSearch.module.scss';
import ProductCard from '../../features/ProductCard/ProductCard';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import { useState } from 'react';

const ProductSearch = ({props, name}) => {

  const products = props;

  const [selectedProducts, setSelectedProducts] = useState('')

  const handleChange = (value) => {
    if((value == "none")){
      setSelectedProducts(products);
    } else if ((value === "ascending")){
      const lowestPrice = products.sort((el1,el2) => el1.price.localeCompare(el2.price, undefined, {numeric: true}));
      setSelectedProducts(lowestPrice)
    } else {
      const higherPrice = products.sort((el1,el2) => el2.price.localeCompare(el1.price, undefined, {numeric: true}));
      setSelectedProducts(higherPrice)
    }
  }
    
  return (
    <> 
      <Row className={styles.container}>
        <Col sm={12}>
          <Row>
            <Col>    
              <div className={styles.filters}>
                <Breadcrumb className={styles.breadcrumb}>
                  <Breadcrumb.Item href="/favourite">{name}</Breadcrumb.Item>
                  <Breadcrumb.Item active>Products</Breadcrumb.Item>
                </Breadcrumb>
                <div className={styles.filter}>
                  <span className={styles.filter_text}>Sort: </span>
                  <select 
                    onChange={(e) => handleChange(e.target.value)}
                    className={styles.select}>
                      <option className={styles.option} value="none">Default</option>
                      <option className={styles.option} value="ascending">Price (asc)</option>
                      <option className={styles.option} value="descending">Price (desc)</option> 
                  </select> 
                </div>
              </div>      
            </Col>  
          </Row>  

          { selectedProducts ?

            <Row xl={4} lg={3} md={2} sm={1} xs={1}>
              {selectedProducts.map(product => 
                <Col>
                  <ProductCard 
                    {...product}
                  />
                </Col>
              )}
            </Row>

            :

            <Row xl={4} lg={3} md={2} sm={1} xs={1}>
              {products.map(product => 
                <Col>
                  <ProductCard 
                    {...product}
                  />
                </Col>
              )}
            </Row>
          }
       
        </Col>
      </Row>    
    </>
  )
}

export default ProductSearch
