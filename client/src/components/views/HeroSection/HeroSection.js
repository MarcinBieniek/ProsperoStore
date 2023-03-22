import styles from './HeroSection.module.scss';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { motion } from 'framer-motion';
import ImageSlider from '../../features/ImageSlider/ImageSlider';
import { Link } from 'react-router-dom';

const HeroSection = () => {

  return (
      <Row className={styles.container}>
        <Col md={6} >
          <motion.div
            initial={{ x: -15 }}
            whileInView={{ x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className={styles.slider}>
              <ImageSlider />
            </div>
          </motion.div>
        </Col>

        <Col md={6} className={styles.categories}>
          <Row className={styles.categories__row}>
            <Col md={6}>
              <motion.div
                initial={{ x: 15 }}
                whileInView={{ x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <Link to="/products/sectional-doors">
                  <div className={styles.category}>
                    <img 
                      src={`${process.env.PUBLIC_URL}/images/categories/unipro-category.jpg`} 
                      alt="UniPro garage door"
                    />
                    <div className={styles.text}>
                      <p className={styles.paragraph}>Category</p>
                      <h1 className={styles.headerOne}>Home garage doors</h1>      
                      <button>More</button>
                    </div>
                    <div className={styles.darkLayer}></div>
                  </div>
                </Link>
              </motion.div>
            </Col>
            <Col md={6}>
              <motion.div
                initial={{ x: 15 }}
                whileInView={{ x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <Link to="/products/sectional-doors">
                  <div className={styles.category}>
                    <img 
                      src={`${process.env.PUBLIC_URL}/images/categories/makropro-category.jpg`} 
                      alt="MakroPro garage door"
                    />
                    <div className={styles.text}>
                      <p className={styles.paragraph}>Category</p>
                      <h1 className={styles.headerOne}>Industry gates</h1>
                      <button>More</button>
                    </div>
                    <div className={styles.darkLayer}></div>
                  </div>
                </Link>
              </motion.div>
            </Col>
          </Row>
          <Row className={styles.categories__row}>
            <Col md={6}>
              <motion.div
                initial={{ x: 15 }}
                whileInView={{ x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <Link to="/products/fences">
                  <div className={styles.category}>
                    <img 
                      src={`${process.env.PUBLIC_URL}/images/categories/fences-category.jpg`} 
                      alt="UniPro garage door"
                    />
                    <div className={styles.text}>
                      <p className={styles.paragraph}>Category</p>
                      <h1 className={styles.headerOne}>Modern fences</h1>
                      <button>More</button>
                    </div>
                    <div className={styles.darkLayer}></div>
                  </div>
                </Link>
              </motion.div>
            </Col>
            <Col md={6}>
              <motion.div
                initial={{ x: 15 }}
                whileInView={{ x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <Link to="/products/doors">
                  <div className={styles.category}>
                    <img 
                      src={`${process.env.PUBLIC_URL}/images/categories/doors-category.jpg`} 
                      alt="Wisniowski doors"
                    />
                    <div className={styles.text}>
                      <p className={styles.paragraph}>Category</p>
                      <h1 className={styles.headerOne}>Warm doors</h1>
                      <button>More</button>
                    </div>
                    <div className={styles.darkLayer}></div>
                  </div>
                </Link>
              </motion.div>
            </Col>
          </Row>
        </Col>
      </Row>
  )
}

export default HeroSection
