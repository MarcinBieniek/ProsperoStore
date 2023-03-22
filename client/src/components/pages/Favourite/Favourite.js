import ProductSearch from '../../views/ProductSearch/ProductsSearch';
import { useSelector } from 'react-redux';
import { getAll } from '../../../redux/favouriteRedux';

const Favourite = () => {

  const favProducts = useSelector(getAll);
  
  return (
    <div>
      <ProductSearch props={favProducts} name={"Favourite"}/>
    </div>
  )
}

export default Favourite
