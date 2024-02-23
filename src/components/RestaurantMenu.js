import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);

  if (resInfo === null) {
    return <Shimmer />;
  }

  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[2]?.card?.card?.info;

  const { itemCards } =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

  const categories =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.["card"]?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  console.log(categories);

  return (
    <div className="text-center">
      <div className="flex justify-between w-6/12 m-auto p-10  bg-white-200 shadow-lg rounded-lg">
      <h1 className="font-bold my-5 text-2xl">{name}</h1>
      <p className=" font-normal my-5 text-xl">
        {cuisines.join(", ")} - {costForTwoMessage}
      </p>
      </div>
      {categories.map((category) => (
        <RestaurantCategory key={category?.card?.card?.title} data={category?.card?.card} />
      ))}
    </div>
  );
};

export default RestaurantMenu;
