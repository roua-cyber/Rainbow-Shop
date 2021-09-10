import "./Navbar.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import logorose from "./logorosee.png";

const Navbar = ({ click }) => {
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  const getCartCount = () => {
    return cartItems.reduce((qty, item) => Number(item.qty) + qty, 0);
  };

  return (
    <>
      {/* <div class="strip"> */}
      {/* An exceptional experience every time */}
      {/* </div> */}

      <nav className="navbar">
        <div
          className="navbar__logo"
          style={{ display: "flex", margin: "0px" }}
        >
          <img src={logorose} alt="Logo" style={{ width: "130px" }} />

          <Link
            style={{
              display: "flex",
              listStyle: " none",
              alignItems: "center",
              color: "rgb(253,170,170)",
              fontFamily: "Rampart One",
              fontSize: "1.7rem",
              textDecoration: "none",
            }}
            to="/"
          >
            RainbowShop
          </Link>
        </div>

        <ul className="navbar__links">
          <li>
            <Link to="/">Shop</Link>
          </li>
          <li>
            <Link to="/feed">Your Account </Link>
          </li>
          <li>
            <Link to="/cart" className="cart__link">
              <i className="fas fa-shopping-cart"></i>
              <span>
                Cart <span className="cartlogo__badge">{getCartCount()}</span>
              </span>
            </Link>
          </li>
        </ul>

        <div className="hamburger__menu" onClick={click}>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
