import styles from './SearchForm.module.scss';
import SearchIcon from '@mui/icons-material/Search';
import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import { updateSearchString, searchInputValue } from '../../../redux/searchRedux';
import { useNavigate } from "react-router-dom";

const SearchForm = () => {

  useEffect(() => {
    dispatch(updateSearchString(''));
  }, [])

  const search = useSelector(searchInputValue);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [searchValue, setSearchValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateSearchString(searchValue));
    setSearchValue('');
    navigate("/search");
  }

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          placeholder="Search product here..." 
          name="search" 
          onChange={(e) => setSearchValue(e.target.value)}
          value={searchValue}
        />
        <button type="submit"><SearchIcon /></button>
      </form>
    </div>
  )
}

export default SearchForm
