import ReactDOM from "react-dom";

import "./Cart.scss";
import CartItem from "../CartItem/CartItem";

import storeItems from "../../data/items.json";
import { useShoppingCart } from "../../context/ShoppingCartContext";
import { formatCurrency } from "../../utilities/formatCurrency";

type CartProps = {
  open: boolean;
  onClose: () => void;
};

const portalElement = document.getElementById("portal")!;

const Cart = ({ open, onClose }: CartProps) => {
  const { cartItems, cartQuantity } = useShoppingCart();

  if (!open) return null;

  //calculating the total cart cost
  const totalCartCost = cartItems.reduce((total, currentCartItem) => {
    const item = storeItems.find((item) => item.id === currentCartItem.id);
    return total + (item?.price || 0) * currentCartItem.quantity;
  }, 0);

  return ReactDOM.createPortal(
    <>
      <div className='overlay'></div>
      <div className='cart'>
        <div className='header'>
          <span className='headerTitle'>Your Cart</span>
          <button className='closeBtn' onClick={onClose}>
            ✖
          </button>
        </div>
        <div className='cartItems'>
          {cartQuantity > 0 ? (
            <>
              {cartItems.map((item) => {
                return <CartItem key={item.id} {...item} />;
              })}
            </>
          ) : (
            <h1 className='noItemAlert'>No Item in the cart</h1>
          )}
        </div>

        {cartQuantity > 0 && (
          <div className='finalTotal'>
            <span className='finalTotalItems'>
              {cartQuantity} total {cartQuantity > 1 ? "items" : "item"}
            </span>
            <span className='finalTotalPrice'>
              Total: {formatCurrency(totalCartCost)}
            </span>
          </div>
        )}
      </div>
    </>,
    portalElement
  );
};

export default Cart;
