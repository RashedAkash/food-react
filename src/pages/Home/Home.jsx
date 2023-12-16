import Banner from "../../components/Banner/Banner";
import PopularCat from "./PopularCat";
import Services from "./Services";
import SpecialDish from "./SpecialDish";
import Testimonial from "./Testimonial";



const Home = () => {
  return (
    <div>
      <Banner />
      <PopularCat />
      <SpecialDish />
      <Testimonial />
      <Services />

    </div>
  );
};

export default Home;