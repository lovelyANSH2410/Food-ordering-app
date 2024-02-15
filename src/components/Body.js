import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";

const Body = () => {
    return (
      <div className="body">
        <div className="search-container">
          <div className="search">Search</div>
          <button className="search-btn">Search</button>
        </div>
  
        <div className="res-container">
          {resList.map((restaurant, index) => (
            <RestaurantCard key={restaurant.info.id} resData={restaurant} />
          ))}
        </div>
      </div>
    );
  };

export default Body;