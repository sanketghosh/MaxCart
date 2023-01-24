import "./Store.scss";

import storeItems from "../../data/items.json";
import ItemCard from "../../components/ItemCard/ItemCard";

const Store = () => {
  return (
    <div className="store">
      {storeItems.map((item) => {
        return <ItemCard key={item.id} {...item} />;
      })}
    </div>
  );
};

export default Store;
