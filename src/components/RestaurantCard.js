import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;

  const { cloudinaryImageId, name, cuisines, avgRating, costForTwo } =
    resData?.info;
  return (
    <div className="res-card m-4 p-4 w-[340px] bg-green-200 rounded-3xl shadow-md hover:bg-green-300 duration-500 hover:scale-105">
      <img
        className="res-card-logo rounded-3xl"
        src={CDN_URL + cloudinaryImageId}
      ></img>
      <h3 className="font-bold py-4 text-lg">{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>✳️{avgRating}</h4>
      <h4>{costForTwo}</h4>
    </div>
  );
};

//Higher order component
//Restaurant Card -> input -> RestaurantCard recommended

export const withRecommendedLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label className="p-3 rounded-2xl ml-4 absolute bg-green-200 font-semibold">
          Recommended✨
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
