import Container from 'react-bootstrap/Container';
import CategoriesSection from '../../views/CategoriesSection/CategoriesSection';
import Features from '../../views/Features/Features';
import ProductsList from '../ProductList/ProductsList';

const Home = () => {
  return (
    <Container fluid> 
      <CategoriesSection />
      <Features />
      <ProductsList />
      footer
    </Container>
  )
}

export default Home
