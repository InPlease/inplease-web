// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styless
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper';

//assets
import jhornan from '../../../assets/img/people/jhornan.jpg';
import denis from '../../../assets/img/people/denis.jpeg';
import yorman from '../../../assets/img/people/yorman.jpg';

const Carousel = ({ carousel }) => {
  const photo = [
    <img src={jhornan} alt="Our Family" />,
    <img src={yorman} alt="Our Family" />,
    <img src={denis} alt="Our Family" />,
  ];
  return (
    <>
      <Swiper
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper"
      >
        {carousel.map((item, index) => {
          return (
            <SwiperSlide>
              <>
                <div>
                  <div className="carousel-img">{photo[index]}</div>
                  <p className="carousel-person">{item.name}</p>
                  <p className="carousel-rol">{item.rol}</p>
                </div>
                <div className="carousel-content">
                  <p className="carousel-info">{item.info}</p>
                  <p className="carousel-phrase">"{item.phrase}"</p>
                </div>
              </>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
};

export default Carousel;
