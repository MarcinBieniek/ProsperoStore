import styles from './SearchResult.module.scss';
import { useSelector } from 'react-redux';
import { searchInputValue } from '../../../redux/searchRedux';
import { allProducts } from '../../../redux/productsRedux';
import ProductSearch from '../../views/ProductSearch/ProductsSearch';

const SearchResult = () => {

  const search = useSelector(searchInputValue);

  const filteredSearch = useSelector(allProducts).filter(product => 
    product.title.toLowerCase().includes(search.toLowerCase()) ||
    product.desc.toLowerCase().includes(search.toLowerCase()) 
  )

  return (
    <div className={styles.container}>

      { search === ''
        ? <div>Search page is empty.</div>
        
        :

        <div>
          { filteredSearch.length === 0
            ? <div>Item not found. Please try again.</div>
            :
            <div>
              <ProductSearch props={filteredSearch} name={"Search results"}/>
            </div>
          }
        </div>
      }

    </div>
  )
}

export default SearchResult