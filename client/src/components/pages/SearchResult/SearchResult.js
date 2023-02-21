import styles from './SearchResult.module.scss';
import { useSelector } from 'react-redux';
import { searchInputValue } from '../../../redux/searchRedux';
import { allProducts } from '../../../redux/productsRedux';

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
            Result is:
            {filteredSearch.map(product => (
              <div key={product.id}>
                <h1>{product.title}</h1>
                <p>{product.desc}</p>
              </div>
            ))}
          </div>
        }
      </div>
    }
    </div>
  )
}

export default SearchResult