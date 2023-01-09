import {useState} from 'react'
import './Product.scss';
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import BalanceIcon from "@mui/icons-material/Balance";

const Product = () => {
    const [selectimg, setSelectimg] = useState(0)
    const [quentity, setQuentity] = useState(1)
  const images = [
    "https://images.pexels.com/photos/12179285/pexels-photo-12179285.jpeg?auto=compress&cs=tinysrgb&w=1600",
    "https://images.pexels.com/photos/12179283/pexels-photo-12179283.jpeg?auto=compress&cs=tinysrgb&w=1600",
  ]

  return (
    <div className='product'>
      <div className="left">
        <div className="images">
          <img src={images[0]} alt="img" onClick={e => setSelectimg(0)}/>
          <img src={images[1]} alt="img" onClick={e => setSelectimg(1)} />
        </div>
        <div className="mainImage">
        <img src={images[selectimg]} alt="img" />
        </div>
      </div>
      <div className="right">
        <h1>Title</h1>
        <span className='price'>19.5</span>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum nulla ipsum itaque nemo maxime. Error quos ullam quo nobis voluptatem. Modi dolores nisi adipisci quae quis enim ex repellat dolore.</p>
        <div className="quentity">
          <button onClick={() => setQuentity((prev) => (prev === 1 ? 1 : prev -1))}>-</button>
            {quentity}
          <button onClick={() => setQuentity((prev) =>  prev + 1 )}>+</button>
          </div>
          <button className='add'>
            <AddShoppingCartIcon /> ADD TO CARD
          </button>
          <div className="links">
            <div className="item">
              <FavoriteBorderIcon /> ADD TO WISHLIST
            </div>
            <div className="item">
              <BalanceIcon /> ADD TO WISHLIST
            </div>
          </div>
          <div className="info">
          <span>Vendor: Polo</span>
              <span>Product Type: T-Shirt</span>
              <span>Tag: T-Shirt, Women, Top</span>
          </div>
          <hr />
          
            <div className="info">
              <span>DESCRIPTION</span>
              <hr />
              <span>ADDITIONAL INFORMATION</span>
              <hr />
              <span>FAQ</span>
            
        </div>
      </div>

    </div>
  )
}

export default Product