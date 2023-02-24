import Col from 'react-bootstrap/esm/Col';
import Row from 'react-bootstrap/esm/Row';
import styles from './Features.module.scss';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import HighlightAltIcon from '@mui/icons-material/HighlightAlt';

const Features = () => {
  return (
    <Row className={styles.container}>
      <Col xs={6} sm={6} md={6} lg={3}>
        <div className={styles.feature}>
          <div className={styles.feature__icons}>
            <SupportAgentIcon className={styles.icon}/>
          </div>
          <div className={styles.feature__desc}>
            <h1>Technical support</h1>
            <span>We do our best to make you happy</span>
          </div>
        </div>
      </Col>
      <Col xs={6} sm={6} md={6} lg={3}>
        <div className={styles.feature}>
          <div className={styles.feature__icons}>
            <LocalShippingIcon className={styles.icon}/>
          </div>
          <div className={styles.feature__desc}>
            <h1>Free delivery</h1>
            <span>For $2500 orders and more</span>
          </div>
        </div>
      </Col>
      <Col xs={6} sm={6} md={6} lg={3}>
        <div className={styles.feature}>
          <div className={styles.feature__icons}>
            <WorkspacePremiumIcon className={styles.icon}/>
          </div>
          <div className={styles.feature__desc}>
            <h1>5 years quarantee</h1>
            <span>For garage doors with Metro drive</span>
          </div>
        </div>
      </Col>
      <Col xs={6} sm={6} md={6} lg={3}>
        <div className={styles.feature}>
          <div className={styles.feature__icons}>
            <HighlightAltIcon className={styles.icon}/>
          </div>
          <div className={styles.feature__desc}>
            <h1>Create visualisation</h1>
            <span>See your product before purchuase</span>
          </div>
        </div>
      </Col>
    </Row>
  )
}

export default Features
