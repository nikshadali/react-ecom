import Slider from "../../components/Slider/Slider"
import FeatureProduct from "../../components/FeatureProduct/FeatureProduct"
import Categories from "../../components/Categories/Categories";
import Contact from "../../components/Contact/Contact";
const Home = () => {
  return (
    <div className="home">
      <Slider />
      <FeatureProduct type='featured'/>
      <Categories />
      <FeatureProduct type='trending'/>
      <Contact />
    </div>
  )
}

export default Home