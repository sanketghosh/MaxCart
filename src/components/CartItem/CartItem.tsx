import { useShoppingCart } from "../../context/ShoppingCartContext";
import "./CartItem.scss";
import storeItems from "../../data/items.json";
import { formatCurrency } from "../../utilities/formatCurrency";

type CartItemProps = {
  id: number;
  quantity: number;
};

const CartItem = ({ id, quantity }: CartItemProps) => {
  const { removeFromCart } = useShoppingCart();

  const item = storeItems.find((item) => item.id === id);
  if (item == null) return null;

  return (
    <div className='cartItem'>
      <div className='item'>
        <img src={item.imgUrl} alt='' className='itemImg' />
        <div className='itemDetails'>
          <span className='itemName'>
            {item.name}{" "}
            {quantity > 1 && (
              <span className='itemNoInCart'>
                x<span>{quantity}</span>
              </span>
            )}
          </span>
          <span className='itemPrice'>{formatCurrency(item.price)}</span>
        </div>
      </div>

      <div className='buyItemDetails'>
        <span className='totalItemPrice'>
          {formatCurrency(item.price * quantity)}
        </span>
        <button
          className='removeBtn'
          onClick={() => {
            removeFromCart(item.id);
          }}>
          X
        </button>
      </div>
    </div>
  );
};

export default CartItem;
