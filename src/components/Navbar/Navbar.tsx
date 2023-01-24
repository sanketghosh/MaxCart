import { useState } from "react";
import "./Navbar.scss";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import Cart from "../Cart/Cart";
import { useShoppingCart } from "../../context/ShoppingCartContext";

const navMenuItem = [
  {
    id: 1,
    item: "Home",
    linkPath: "/",
  },
  {
    id: 2,
    item: "Store",
    linkPath: "/store",
  },
  {
    id: 3,
    item: "About",
    linkPath: "/about",
  },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  function openModalHandler() {
    setIsOpen(true);
  }

  function closeModalHandler() {
    setIsOpen(false);
  }

  const { cartQuantity } = useShoppingCart();

  return (
    <>
      <nav className='navBar'>
        <div className='navWrapper'>
          <Link to='/'>
            <span className='brandName'>MaxCart</span>
          </Link>
          <ul className='navMenu'>
            {navMenuItem.map((item) => {
              return (
                <Link to={item.linkPath} key={item.id}>
                  <li className='navMenuItem'>{item.item}</li>
                </Link>
              );
            })}
          </ul>

          {/* in case we implement the cart item is 0 logic*/}
          {/*  {cartQuantity === 0 ? (
            <div className='dummyCartLogo'></div>
          ) : (
            <div className='cartLogo' onClick={openModalHandler}>
              <FaShoppingCart className='cartIcon' />
              <span className='itemsInCart'>{cartQuantity}</span>
            </div>
          )} */}
          <div className='cartLogo' onClick={openModalHandler}>
            <FaShoppingCart className='cartIcon' />
            <span className='itemsInCart'>{cartQuantity}</span>
          </div>
        </div>
      </nav>

      <Cart open={isOpen} onClose={closeModalHandler} />
    </>
  );
};

export default Navbar;
