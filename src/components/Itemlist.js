import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/constants";
import { addItem } from "../utils/cartSlice";

function ItemList({ items }) {
  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    dispatch(addItem(item));
  };

  return (
    <div>
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className="m-2 p-2 border-gray-200 border-b-2 text-left flex justify-between"
        >
          <div className="w-9/12">
            <div className="py-4">
              <span className="font-semibold">{item.card.info.name}</span>
              <span>
                - ₹
                {item.card.info.price
                  ? item.card.info.price / 100
                  : item.card.info.defaultPrice / 100}
              </span>
            </div>
            <div>
              <p className="text-xs">{item.card.info.description}</p>
            </div>
          </div>
          <div className="w-2/12">
            <button
              className="bg-white absolute shadow-md mx-12 px-4 py-1 rounded-lg text-green-600 text-md font-semibold"
              onClick={() => handleAddItem(item)}
            >
              Add
            </button>
            <img
              src={CDN_URL + item.card.info.imageId}
              className="rounded-2xl"
            ></img>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ItemList;
