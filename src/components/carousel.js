// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'

// import required modules
import { Navigation } from 'swiper'
// import items
import { ourFamily } from '../itemsComponents/aboutItems'

export default function Carousel() {
  return (
    <div className="carousel">
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        {ourFamily.map((item, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="about-ourFamily-img">{item.photo}</div>
              <div className="about-ourFamily-person">{item.name}</div>
              <div className="about-ourFamily-info">{item.info}</div>
            </SwiperSlide>
          )
        })}
      </Swiper>
      <div className="carousel-info">
        {' '}
        <p>
          {' '}
          Life has led me to go in many directions, one of them programming and
          design. I feel that the world is a great canvas where we can express
          our ideas, we still have a lot to go through, but I know that this
          will be incredible.
        </p>
        <br></br>
        <p className="carousel-info-phrase">"More than ideas, dreams"</p>
      </div>
    </div>
  )
}
