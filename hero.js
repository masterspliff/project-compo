import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Hero = () => {
  return (
    <div className="hero relative">
      <Carousel 
        autoPlay 
        interval={5000}
        infiniteLoop 
        showIndicators={false} 
        showStatus={false} 
        showArrows={false} 
        showThumbs={false}
      >
        <div>
          <img src="/img/slideshow/fb1.jpeg" className="object-cover w-full h-full" />
        </div>
        <div>
          <img src="/img/slideshow/fb2.jpeg" className="object-cover w-full h-full" />
        </div>
        <div>
          <img src="/img/slideshow/fb3.jpeg" className="object-cover w-full h-full" />
        </div>
      </Carousel>
      <div className="backdrop-filter absolute inset-0 flex items-center justify-center text-white text-center px-4">
        <div>
          <h1 className="text-8xl font-bold ">Welcome to Composhield</h1>
        </div>
      </div>
    </div>
  );
}

export default Hero;
