import styles from './ImageSlider.module.scss';
import { useState, useRef, useEffect } from 'react';
import { slides } from '../../../simpleData/simpleData';
import SearchIcon from '@mui/icons-material/Search';

const ImageSlider = () => {

  const [index, setIndex] = useState(0);
  const timeoutRef = useRef(null);
  const delay = 7500;

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === slides.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {
      resetTimeout();
    };
  }, [index]);

  return (
    <div className={styles.slideshow}>
      
      <div
        className={styles.slideshowSlider}
        style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
      >
        {slides.map((slide) => (
          <div
            className={styles.slide}
            key={slide.id}
          >
            <img 
              src={`${process.env.PUBLIC_URL}/images/slider/${slide.img}`}
              alt=""
            />
            <div className={styles.info}>
              <h1>{slide.title}</h1>
              <div className={styles.summary}>
                <span>{slide.desc}</span>
                <button>
                  <SearchIcon className={styles.icon}/>
                  {slide.action}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ImageSlider
