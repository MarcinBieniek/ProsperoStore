import styles from './SpecialOffer.module.scss';
import { useSelector } from 'react-redux';
import { getSaleProducts } from '../../../redux/productsRedux';
import ProductSearch from '../../views/ProductSearch/ProductsSearch';

const SpecialOffer = () => {

  const saledProducts = useSelector(getSaleProducts)
   
  return (
    <div>
      <ProductSearch props={saledProducts} name={"Products on sale"}/>
    </div>
  )
}

export default SpecialOffer
