import { useShoppingCart } from "../../context/ShoppingCartContext";
import { formatCurrency } from "../../utilities/formatCurrency";
import ChangeItemNumber from "../ChangeItemNumber/ChangeItemNumber";
import "./ItemCard.scss";

type ItemCardProps = {
  id: number;
  imgUrl: string;
  name: string;
  price: number;
};

const ItemCard = ({ id, imgUrl, name, price }: ItemCardProps) => {
  const { getItemQuantity, increaseCartQuantity, removeFromCart } =
    useShoppingCart();

  let quantity = getItemQuantity(id);

  // add to cart handler
  function addToCartHandler() {
    increaseCartQuantity(id);
  }

  // remove all item from cart handler
  function removeAllFromCartHandler() {
    removeFromCart(id);
  }

  return (
    <div className='itemCard'>
      <img src={imgUrl} alt='product image' className='itemImg' />
      <div className='itemDetails'>
        <span className='itemName'>{name}</span>
        <span className='itemPrice'>{formatCurrency(price)}</span>
      </div>
      {quantity === 0 ? (
        <button className='addToCartBtn' onClick={addToCartHandler}>
          + Add to cart
        </button>
      ) : (
        <div className='addRemoveCartItem'>
          <ChangeItemNumber quantity={quantity} id={id} />
          <button className='removeItemBtn' onClick={removeAllFromCartHandler}>
            Remove
          </button>
        </div>
      )}
    </div>
  );
};

export default ItemCard;
