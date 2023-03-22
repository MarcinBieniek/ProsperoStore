import Col from 'react-bootstrap/esm/Col';
import Row from 'react-bootstrap/esm/Row';
import styles from './ProductList.module.scss';
import ProductCard from '../../features/ProductCard/ProductCard';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import { useSelector } from 'react-redux';
import { allProducts } from '../../../redux/productsRedux';
import { useState } from 'react';


const ProductList = () => {

  const products = useSelector(allProducts);

  const [selectedProducts, setSelectedProducts] = useState('')

  const filterCategory = (categoryItem) => {
    const result = products.filter((currentCategory) => {
      return currentCategory.category === categoryItem;
    });
    setSelectedProducts(result);
  };

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
        <Col sm={3}>
          <div className={styles.menu}>
            <p><b>Categories</b></p> 
            <p onClick={() => setSelectedProducts(products)}>All products</p> 
            <p onClick={() => filterCategory('Sectional doors')}>Garage gates</p>  
            <p onClick={() => filterCategory('Up-and-over doors')}>Up-and-over doors</p> 
            <p onClick={() => filterCategory('Fences')}>Fences</p> 
            <p onClick={() => filterCategory('Doors')}>Doors</p> 
            <p onClick={() => filterCategory('Accessories')}>Accesories</p>
          </div>  
        </Col>
        <Col sm={9}>
          <Row>
            <Col>    
              <div className={styles.filters}>
                <Breadcrumb className={styles.breadcrumb}>
                  <Breadcrumb.Item href="/products/garage-door">Garage Doors</Breadcrumb.Item>
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

export default ProductList
