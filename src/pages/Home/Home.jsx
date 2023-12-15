import Banner from "../../components/Banner/Banner";
import PopularCat from "./PopularCat";
import Services from "./Services";
import Testimonial from "./Testimonial";



const Home = () => {
  return (
    <div>
      <Banner />
      <PopularCat />
      <Testimonial />
      <Services />

    </div>
  );
};

export default Home;