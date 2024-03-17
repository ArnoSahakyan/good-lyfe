import PropTypes from 'prop-types';
import Slider from "react-slick";
import './Sliders.scss'

Sliders.propTypes = {
  pictures: PropTypes.arrayOf(PropTypes.string)
}

export default function Sliders({ pictures }) {
  const settings = {
    dots: true,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Slider {...settings}>
      {
        pictures.map(pic => {
          return <img key={pic} src={`../../../public/${pic}`} />
        })
      }
    </Slider>
  )
}

