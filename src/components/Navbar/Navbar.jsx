import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import SearchIcon from "@mui/icons-material/Search";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { Link } from "react-router-dom";
import './Navbar.scss'

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className='wrapper'>
            <div className='left'>
                <div className='item'>
                    <img src="/img/en.png" alt='en'/>
                    <KeyboardArrowDownIcon />
                </div>
                <div className='item'>
                    <span>US</span>
                    <KeyboardArrowDownIcon />
                </div>
                <div className='item'>
                   <Link className="link" to='/products/1'>Women</Link>
                </div>
                <div className='item'>
                   <Link className="link" to='/products/2'>Men</Link>
                </div>
                <div className='item'>
                   <Link className="link" to='/products/3'>Children</Link>
                </div>
                
            </div>
            <div className='center'>
                <Link  className="link" to="/">NAIKSTORE</Link>
            </div>
            <div className='right'>
            <div className='item'>
                   <Link className="link" to='/products/1'>Home</Link>
                </div>
                <div className='item'>
                   <Link className="link" to='/products/1'>About</Link>
                </div>
                <div className='item'>
                   <Link to='/products/1'>Contact</Link>
                </div>
                <div className='item'>
                   <Link className="link" to='/products/1'>Store</Link>
                </div>
                <div className="icons">
                    <SearchIcon />
                    <PersonOutlineOutlinedIcon/>
                    <FavoriteBorderOutlinedIcon/>
                    <div className="iconcart">
                        <ShoppingCartOutlinedIcon/>
                        <span>0</span>

                    </div>

                </div>
            </div>

        </div>

    </div>
  )
}

export default Navbar