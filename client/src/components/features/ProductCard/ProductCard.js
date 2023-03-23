import styles from './ProductCard.module.scss';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import StarIcon from '@mui/icons-material/Star';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import DoneIcon from '@mui/icons-material/Done';
import { Link } from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import { addProduct } from '../../../redux/cartRedux';
import { addFavourite, deleteFavourite } from '../../../redux/favouriteRedux';
import { useState } from 'react';
import { getUser } from '../../../redux/usersRedux';
import Modal from 'react-bootstrap/Modal';
import clsx from 'clsx';

const ProductCard = (props) => {

  const dispatch = useDispatch();
  const user = useSelector(getUser);

  const [show, setShow] = useState(false);
  const [favIsActive, setFavIsActive] = useState(false);

  const handleAddToCart = (e) => {
    e.preventDefault();
    dispatch(addProduct(props));
  }

  const handleAddToFavourite = (e) => {
    e.preventDefault();

    if (favIsActive === false) {
      dispatch(addFavourite(props));
      setFavIsActive(!favIsActive)
    } else {
      dispatch(deleteFavourite(props.id));
      setFavIsActive(!favIsActive)
    }
  }

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
    <div className={styles.product}>  
      <div className={styles.widgets}>
        <div className={styles.icons}>

          {user
            ?
              <FavoriteBorderIcon className={clsx(styles.icon, favIsActive && styles.active )} onClick={handleAddToFavourite}/>
            :
              <FavoriteBorderIcon className={styles.icon} onClick={handleShow}/>
          }

        </div>
          <div className={styles.info}>
            { 
              props.sale === true 
              ? <span className={styles.sale}>Sale</span> 
              : <span></span>
            }
            { 
              props.top === true 
              ? <span className={styles.top}>Top</span> 
              : <span></span>
            }
          </div>
        </div>
        <Link to={`/product/${props.id}`}>
          <img 
            src={`${process.env.PUBLIC_URL}${props.productImg}${props.color}.jpeg`} 
            alt="product"
          />
          <p>{props.category}</p>
          <h1>{props.title}</h1>
          <div className={styles.stars}>
            <StarIcon className={styles.star} />
            <StarIcon className={styles.star} />
            <StarIcon className={styles.star} />
            <StarIcon className={styles.star} />
            <StarIcon className={styles.star} />
            <span> (2 reviews)</span>
          </div>
        </Link>
        <div className={styles.price}>
          <p>${props.price}</p>
          <div className={styles.submit}>
            <DoneIcon className={styles.done__icon} />
            <button onClick={handleAddToCart}>
              Add 
              <ShoppingCartIcon className={styles.cart__icon}/>
            </button>
          </div>
        </div>
      </div>
      
      <Modal 
        show={show} 
        onHide={handleClose}
        aria-labelledby="contained-modal-title-vcenter"
        centered
        className={styles.modal}
      >
      <Modal.Header closeButton>
        <Modal.Title>Please login</Modal.Title>
      </Modal.Header>
      <Modal.Body>This option is available only for logged users.</Modal.Body>
      <Modal.Footer>
        <button variant="primary" onClick={handleClose}>
          <Link to="/register">
            Register
          </Link>
        </button>
        <button variant="primary" onClick={handleClose}>
          <Link to="/login">
            Login
          </Link>
        </button>
        <button onClick={handleClose}>
          Close
        </button>
      </Modal.Footer>
    </Modal>
  </>
  )
}

export default ProductCard
