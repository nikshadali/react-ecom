import {useState} from 'react'
import './Product.scss';
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import BalanceIcon from "@mui/icons-material/Balance";
import useFetch from '../../components/myhook/useFetch';
import { useDispatch } from 'react-redux';
import { useParams } from "react-router-dom";
import {addToCart, removeToCart} from '../../redux/cartsLice'

const Product = () => {
  const id = useParams().id;
  const dispatch = useDispatch()
  
  const [quantity, setQuantity] = useState(1);
 
  
  const { data, loading, error } = useFetch(`/products/${id}?populate=*`);

    console.log("id => ", data)
  return (
    <div className='product'>
      {loading ? (
        "loading ...."
      ) : error ? ("something going worng") :(
        <>
        <div className="left">
          <div className="images">

          <img src={process.env.REACT_APP_API_UPLOAD + data?.attributes?.img?.data?.attributes?.url} alt="img" />
          <img src={process.env.REACT_APP_API_UPLOAD + data?.attributes?.img2?.data?.attributes?.url} alt="img" />
          </div>
          <div className="mainImage">
          <img src={process.env.REACT_APP_API_UPLOAD + data?.attributes?.img?.data?.attributes?.url} alt="img"/>
          </div>
        </div>
        <div className="right">
        <h1>Title</h1>
        <span className='price'>19.5</span>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum nulla ipsum itaque nemo maxime. Error quos ullam quo nobis voluptatem. Modi dolores nisi adipisci quae quis enim ex repellat dolore.</p>
        <div className="quentity">
          <button onClick={() => setQuantity((prev) => (prev === 1 ? 1 : prev -1))}>-</button>
            {quantity}
          <button onClick={() => setQuantity((prev) =>  prev + 1 )}>+</button>
          </div>
          <button className='add' onClick={() => dispatch(addToCart({
            id: data.id,
            title: data.attributes.title,
            desc: data.attributes.desc,
            price: data.attributes.price,
            img: data.attributes.img.data.attributes.url,
            quantity,
          }))}>
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
        </>
      )}

    </div>
  )
}

export default Product