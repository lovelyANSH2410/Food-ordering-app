import { useState } from "react";
import { CDN_URL } from "../utils/constants";
import ItemList from "./Itemlist";

const RestaurantCategory = ({ data }) => {
  const [showItems, setShowItems] = useState(false);

  const handleClick = () => {
    setShowItems(!showItems);
  };

  return (
    <div>
      {/*accordian header*/}
      <div className="bg-gray-50 p-4 shadow-lg w-6/12 my-4 m-auto rounded-lg">
        <div
          className=" flex justify-between cursor-pointer"
          onClick={handleClick}
        >
          <span className="text-lg  font-bold">
            {data.title} ({data.itemCards.length})
          </span>
          <span>🔽</span>
        </div>

        {showItems && <ItemList items={data.itemCards} />}
      </div>
      {/*accordian body*/}
    </div>
  );
};

export default RestaurantCategory;
