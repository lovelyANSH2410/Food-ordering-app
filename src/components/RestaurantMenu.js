import { useState } from "react";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);
  const [showIndex, setShowIndex] = useState();

  if (resInfo === null) {
    return <Shimmer />;
  }

  console.log(resInfo)

  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[0]?.card?.card?.info;

  const { itemCards } =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

  const categories =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.["card"]?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );


  return (
    <div className="text-center">
      <div className="flex justify-between w-6/12 m-auto p-10  bg-white-200 shadow-lg rounded-lg">
        <h1 className="font-bold my-5 text-2xl">{name}</h1>
        <p className=" font-normal my-5 text-xl">
          {cuisines.join(", ")} - {costForTwoMessage}
        </p>
      </div>
      {categories.map((category, index) => (
        <RestaurantCategory //controlled component
          key={category?.card?.card?.title}
          data={category?.card?.card}
          showItems={showIndex === index && true}
          setShowIndex = {() => setShowIndex(index)}
        />
      ))}
    </div>
  );
};

export default RestaurantMenu;
