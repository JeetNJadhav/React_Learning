import { Carousel } from "./components/Carousel";
import { SLIDES } from "./constants";

const CarouselPage = () => {
  return (
    <>
      <h2>Carousel Page</h2>
      <div>
        <Carousel slides={SLIDES} />
      </div>
    </>
  );
};

export default CarouselPage;
