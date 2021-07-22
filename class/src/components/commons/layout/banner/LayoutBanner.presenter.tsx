import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styled from '@emotion/styled';
export default function LayoutBannerUI() {
  const settings = {
    dots: true,
    autoplay: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  };

  const Slide = styled(Slider)`
    width: 100%;
    .slick-prev {
      left: 0;
      z-index: 2;
    }
    .slick-next {
      right: 0;
    }
  `;

  return (
    <div style={{ backgroundColor: 'skyblue', height: '200px' }}>
      <Slide {...settings}>
        <div>
          <h3>1</h3>
        </div>
        <div>
          <h3>2</h3>
        </div>
        <div>
          <h3>3</h3>
        </div>
      </Slide>
    </div>
  );
}
