import About from '../About/About';
import Carousel from '../Carousel/Carousel';
import ContactStat from '../ContactStat/ContactStat';
import Services from '../Services/Services';

const Home = () => {
  return (
    <div>
      <Carousel></Carousel>
      <About></About>
      <Services></Services>
      <ContactStat></ContactStat>
    </div>
  );
};

export default Home;
