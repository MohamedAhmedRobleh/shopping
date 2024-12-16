import { Link } from "react-router-dom";
import "../style.css";
const Header = ({cart,setCart}) => {
    return (
        <div className="menu">
           <Link to="/" className="logo">Reactify</Link>
           <div className="links">
            <Link to="/">Home</Link>
            <Link to="/About">About</Link>
            <Link to="/Contact">Contact</Link>
            <Link to="/Cart">Cart</Link>
           </div>       
           <Link to="Cart">
                 <span className="cart">{cart}
                 </span>
            </Link>
         </div>
    )
}

export default Header;