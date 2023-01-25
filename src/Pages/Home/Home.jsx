import Slider from "../../components/Slider/Slider"
import FeatureProductone from "../../components/FeatureProduct/FeatureProductone"
import Categories from "../../components/Categories/Categories";
import Contact from "../../components/Contact/Contact";
const Home = () => {
  return (
    <div className="home">
      <Slider />
      <FeatureProductone type='featured'/>
      <Categories />
      <FeatureProductone type='trending'/>
      <Contact />
    </div>
  )
}

export default Home