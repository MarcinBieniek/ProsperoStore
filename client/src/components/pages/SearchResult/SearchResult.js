import styles from './SearchResult.module.scss';
import { useSelector } from 'react-redux';
import { searchInputValue } from '../../../redux/searchRedux';
import { allProducts } from '../../../redux/productsRedux';
import ProductSearch from '../../views/ProductSearch/ProductsSearch';
import ManageSearchIcon from '@mui/icons-material/ManageSearch';
import SearchOffIcon from '@mui/icons-material/SearchOff';

const SearchResult = () => {

  const search = useSelector(searchInputValue);

  const filteredSearch = useSelector(allProducts).filter(product => 
    product.title.toLowerCase().includes(search.toLowerCase()) ||
    product.desc.toLowerCase().includes(search.toLowerCase()) 
  )

  return (
    <div className={styles.container}>

      { search === ''
        ? <div className={styles.message}>
            <span>Search page is empty.</span>
            <span>Type product name.</span>
            <ManageSearchIcon className={styles.icon}/>
          </div>
        
        :

        <div>
          { filteredSearch.length === 0
            ? 
              <div className={styles.message}>
                <span>Item not found.</span>
                <span>Please try again.</span>
                <SearchOffIcon className={styles.icon}/>
              </div>
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