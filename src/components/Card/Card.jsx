import {Link} from 'react-router-dom'
import './Card.scss'
const Card = ({item}) => {
  return (
    <Link to={`/product/${item.id}`} className="link">
    <div className='card'>
    <div className="image">
      {item.isNew && <span>New Session</span>}
      <img src={item.img} className='mainImage'/>
      <img src={item.img2} className='secondImage'/>
    </div>
    <h2>{item.title}</h2>
    <div className="prices">
      <h3>{item. OldPrice}</h3>
      <h3>{item.Price}</h3>
    </div>

    </div>
    </Link>
  )
}

export default Card