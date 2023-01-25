import './Cart.scss';
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import { useSelector, useDispatch } from 'react-redux';
import { removeItem, resetCard } from '../../redux/cartsLice';
import { loadStripe } from "@stripe/stripe-js";
import { makeReq } from '../../makeReq';
const Cart = () => {
   
  
            const data = useSelector((state) => state.cart.products)
            const dispatch = useDispatch()

            const totalprice = () => {
                let total = 0;
                data.forEach(item => {
                    total += item.quantity * item.price
                })
                return total.toFixed(2)
            }
            console.log(data)
            const stripePromise = loadStripe('pk_test_51MTgyUGFVINGBBG1w4SqcNiXoiSrUV27FvPKVBEfFh1gWiLx755TFnWaYGDMQuHS35yNHC2x2PB2jIvODwFjn0xZ00TcEr7p84');

            const handlePayment = async () => {
                try {
                  const stripe = await stripePromise;
                  const res = await makeReq.post("/orders", {
                    data,
                  });
                  await stripe.redirectToCheckout({
                    sessionId: res.data.stripeSession.id,
                  });
            
                } catch (err) {
                  console.log(err);
                }
              };
  return (
    <div className='cart'>
        <h1>Product in Your Cart</h1>
        {data?.map(item => (
           
            <div className="item">
                <img src={item.img} alt="img" />
                <div className="detail">
                    <h1>{item.title}</h1>
                    <p>{item.desc?. substring(0,100)}</p>
                    <div className="price">
                        {item.quantity} x {item.price}
                    </div>
                </div>
                <DeleteOutlinedIcon  className='delete'   onClick={() => dispatch(removeItem(item.id))}/>
            </div>
        ))}
        <div className="total">
            <span>Total</span>
            <span>{totalprice()}</span>
        </div>
        <button onClick={handlePayment}>PROCEED TO CHECKOUT</button>
      <span className="reset" onClick={() => dispatch(resetCard())}>
        Reset Cart
      </span>
    </div>
  )
}

export default Cart