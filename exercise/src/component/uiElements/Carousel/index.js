import Slider from "react-slick";
import PropTypes from "prop-types";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Box } from "./styles";
import Arrow from "./Arrow";
import Card from "./Card";
import { Heading, Align } from "../Common";
import useWindowSize from "../../hook/useWindowSize";

const ItemSlide = (props) => {
  const screenSize = useWindowSize();
  const { sliderData } = props;

  const settings = {
    dots: true,
    infinite: true,
    speed: 400,
    slidesToShow: screenSize.width <= 768 ? 1 : 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    centerMode: screenSize.width <= 768 ? true : false,
  };

  return (
    <Box>
      <Align direction="right">
        <Heading isAnimate={true} fontSize={2.5} color="#FFF">
          DONEC NEC JUSTO
        </Heading>
      </Align>
      <br />
      <Slider
        {...settings}
        nextArrow={<Arrow type="next" />}
        prevArrow={<Arrow type="prev" />}
      >
        {sliderData.map((item) => (
          <Card item={item} key={item.id} />
        ))}
      </Slider>
    </Box>
  );
};

ItemSlide.prototype = {
  sliderData: PropTypes.array.isRequired,
};

export default ItemSlide;
