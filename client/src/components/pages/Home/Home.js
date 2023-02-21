import styles from './Home.module.scss'

import { useSelector } from 'react-redux';

const Home = () => {

  const products = useSelector(state => state.products);
  console.log('products:', products)

  return (
    <div>
      Home
    </div>
  )
}

export default Home
