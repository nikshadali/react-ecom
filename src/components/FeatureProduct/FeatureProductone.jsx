import './FeatureProduct.scss'
import Card from '../Card/Card'


import useFetch from '../myhook/useFetch';




const FeatureProductone = ({type}) => {
   const {data, error, loading} = useFetch(`/products?populate=*`)
   
return (
    <div className='productFeature'>
        <div className="top">
            <h1>{type} Products</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum corrupti corporis repellat minima similique est dolore et ea quisquam, omnis earum nam quo pariatur? Doloribus beatae eum obcaecati provident veniam.</p>
        </div>
        <div className="bottom">
            { error ? "there is somegthing going wrong"
            :loading ? "loading..." : data.map(item => (
                <Card  item={item} key={item.key}/>
            ))}
        </div>

    </div>
  )
}

export default FeatureProductone