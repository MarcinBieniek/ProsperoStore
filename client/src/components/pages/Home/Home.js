import Container from 'react-bootstrap/Container';
import HeroSection from '../../views/HeroSection/HeroSection';
import Features from '../../views/Features/Features';
import ProductsList from '../ProductList/ProductsList';

const Home = () => {

  return (
    <Container fluid> 
      <HeroSection />
      <Features />
      <ProductsList />
    </Container>
  )
}

export default Home
