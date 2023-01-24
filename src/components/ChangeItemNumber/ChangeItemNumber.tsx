import { useShoppingCart } from "../../context/ShoppingCartContext";
import "./ChangeItemNumber.scss";

type ChangeItemNumberProps = {
  quantity: number;
  id: number;
};

const ChangeItemNumber = ({ quantity, id }: ChangeItemNumberProps) => {
  const { increaseCartQuantity, decreaseCartQuantity, getItemQuantity } =
    useShoppingCart();

  // decrease cart item handler
  function decreaseCartItemsHandler() {
    decreaseCartQuantity(id);
  }

  // increase cart item handler
  function increaseCartItemHandler() {
    increaseCartQuantity(id);
  }

  return (
    <div className='changeItemNumber'>
      <button className='decreaseItem' onClick={decreaseCartItemsHandler}>
        -
      </button>
      <span className='itemsInCart'>
        <span className='itemNumber'>{quantity}</span> in cart
      </span>
      <button className='increaseItem' onClick={increaseCartItemHandler}>
        +
      </button>
    </div>
  );
};

export default ChangeItemNumber;
