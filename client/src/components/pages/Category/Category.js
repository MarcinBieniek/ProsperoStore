import styles from './Category.module.scss';
import ProductSearch from '../../views/ProductSearch/ProductsSearch';
import { useSelector } from 'react-redux';
import { allProducts } from '../../../redux/productsRedux';
import { useParams } from "react-router-dom";
import { useEffect, useState } from 'react';

const Category = () => {

  const products = useSelector(allProducts);
  const category = useParams();

  const selectedCat = category.category.charAt(0).toUpperCase() + category.category.slice(1).toLowerCase().replace("-", " ");

  const [productsByCat, setProductsByCat] = useState();
  console.log('selected', productsByCat)

  useEffect(() => {
    const getItems = () => {
      const categoryItems = products.filter(item => item.category === selectedCat);
      setProductsByCat(categoryItems)
    }
    getItems()
  }, [category])

  return (
    <div>
      <ProductSearch props={productsByCat} name={selectedCat}/>
    </div>
  )
}

export default Category
