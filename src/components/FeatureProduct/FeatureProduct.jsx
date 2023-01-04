import './FeatureProduct.scss'
import Card from '../Card/Card'

const FeatureProduct = ({type}) => {
    const data = [
        {
            id: 1,
            img:"https://images.pexels.com/photos/1972115/pexels-photo-1972115.jpeg?auto=compress&cs=tinysrgb&w=1600",
            img2:"https://images.pexels.com/photos/1163194/pexels-photo-1163194.jpeg?auto=compress&cs=tinysrgb&w=1600",
            title:" Long Sleeve Grapich T-shirt",
            inNew: true,
            OldPrice: 19,
            Price: 12
        },
        {
            id: 2,
            img:"https://images.pexels.com/photos/1759622/pexels-photo-1759622.jpeg?auto=compress&cs=tinysrgb&w=1600",
            title:" Long Sleeve Grapich T-shirt",
            inNew: true,
            OldPrice: 19,
            Price: 12
        },
        {
            id: 3,
            img:"https://images.pexels.com/photos/1972115/pexels-photo-1972115.jpeg?auto=compress&cs=tinysrgb&w=1600",
            title:" Long Sleeve Grapich T-shirt",
            inNew: true,
            OldPrice: 19,
            Price: 12
        },
        {
            id: 4,
            img:"https://images.pexels.com/photos/2065200/pexels-photo-2065200.jpeg?auto=compress&cs=tinysrgb&w=1600",
           title:" Long Sleeve Grapich T-shirt",
            inNew: true,
            OldPrice: 19,
            Price: 12
        },

    ]
  return (
    <div className='productFeature'>
        <div className="top">
            <h1>{type} Products</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum corrupti corporis repellat minima similique est dolore et ea quisquam, omnis earum nam quo pariatur? Doloribus beatae eum obcaecati provident veniam.</p>
        </div>
        <div className="bottom">
            {data.map(item => (
                <Card  item={item} key={item.key}/>
            ))}
        </div>

    </div>
  )
}

export default FeatureProduct