import React from "react";
import ReactDOM from "react-dom/client";

/* 

header -> 
- logo 
- home 
- about

body -> 
- search bar
- restaurant container
    - restaurant card
        - image
        - name, rating, cuisine, time

footer -> 
- copyright
- links
- disclaimer
- address, contact

*/

    const resList = [
        {
          info: {
            id: "619679",
            name: "La Pino'z Pizza",
            cloudinaryImageId: "n8z10pn06a4ks3ej5das",
            locality: "Sector 2",
            areaName: "G B Nagar",
            costForTwo: "₹400 for two",
            cuisines: ["Pizzas", "Pastas", "Italian", "Desserts", "Beverages"],
            avgRating: 3.8,
            parentId: "4961",
            avgRatingString: "3.8",
            totalRatingsString: "1K+",
            
          },
        },
        {
          info: {
            id: "562781",
            name: "The Burger Club",
            cloudinaryImageId: "h4ppdoav5fdi0gsswpab",
            locality: "Ch Nitin Khari Marg",
            areaName: "Sector 141",
            costForTwo: "₹250 for two",
            cuisines: ["American", "Desserts", "Beverages"],
            avgRating: 4.1,
            parentId: "2285",
            avgRatingString: "4.1",
            totalRatingsString: "1K+",
          },
        },
        {
          info: {
            id: "511884",
            name: "Taza Day",
            cloudinaryImageId: "lfdearoe1khcfds1yvta",
            locality: "Knowledge Park",
            areaName: "Greater Noida",
            costForTwo: "₹300 for two",
            cuisines: ["Indian"],
            avgRating: 3.1,
            parentId: "306145",
            avgRatingString: "3.1",
            totalRatingsString: "10+",
            sla: {
              deliveryTime: 39,
              lastMileTravel: 1.4,
              serviceability: "SERVICEABLE",
              slaString: "35-40 mins",
              lastMileTravelString: "1.4 km",
              iconType: "ICON_TYPE_EMPTY",
            },
            availability: {
              nextCloseTime: "2024-02-15 05:30:00",
              opened: true,
            },
            badges: {},
            isOpen: true,
            type: "F",
            badgesV2: {
              entityBadges: {
                imageBased: {},
                textBased: {},
                textExtendedBadges: {},
              },
            },
            aggregatedDiscountInfoV3: {
              header: "20% OFF",
              subHeader: "UPTO ₹50",
            },
            orderabilityCommunication: {
              title: {},
              subTitle: {},
              message: {},
              customIcon: {},
            },
            differentiatedUi: {
              displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              differentiatedUiMediaDetails: {
                mediaType: "ADS_MEDIA_ENUM_IMAGE",
                lottie: {},
                video: {},
              },
            },
            reviewsSummary: {},
            displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            restaurantOfferPresentationInfo: {},
          },
        },
        {
          info: {
            id: "37553",
            name: "Night Food Express",
            cloudinaryImageId: "mkpuwhtxeapb9zhhfq6d",
            locality: "Alpha 1",
            areaName: "Greater Noida",
            costForTwo: "₹350 for two",
            cuisines: ["Indian", "Chinese", "Continental"],
            avgRating: 3.8,
            parentId: "148742",
            avgRatingString: "3.8",
            totalRatingsString: "5K+",
            sla: {
              deliveryTime: 29,
              lastMileTravel: 1,
              serviceability: "SERVICEABLE",
              slaString: "25-30 mins",
              lastMileTravelString: "1.0 km",
              iconType: "ICON_TYPE_EMPTY",
            },
            availability: {
              nextCloseTime: "2024-02-15 04:00:00",
              opened: true,
            },
            badges: {},
            isOpen: true,
            type: "F",
            badgesV2: {
              entityBadges: {
                imageBased: {},
                textBased: {},
                textExtendedBadges: {},
              },
            },
            aggregatedDiscountInfoV3: {
              header: "₹125 OFF",
              subHeader: "ABOVE ₹249",
              discountTag: "FLAT DEAL",
              discountCalloutInfo: {
                message: "Free Delivery",
                logoCtx: {
                  logo: "v1655895371/free_delivery_logo_hqipbo.png",
                },
              },
            },
            orderabilityCommunication: {
              title: {},
              subTitle: {},
              message: {},
              customIcon: {},
            },
            differentiatedUi: {
              displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              differentiatedUiMediaDetails: {
                mediaType: "ADS_MEDIA_ENUM_IMAGE",
                lottie: {},
                video: {},
              },
            },
            reviewsSummary: {},
            displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            restaurantOfferPresentationInfo: {},
          },
        },
        {
          info: {
            id: "622623",
            name: "Smoke House Burger",
            cloudinaryImageId: "p0wdirx7ghmxi6tx6dhi",
            locality: "Knowledge Park",
            areaName: "Greater Noida",
            costForTwo: "₹300 for two",
            cuisines: ["Burgers", "Snacks", "Italian"],
            avgRating: 4,
            parentId: "370551",
            avgRatingString: "4.0",
            totalRatingsString: "500+",
            sla: {
              deliveryTime: 32,
              lastMileTravel: 1.4,
              serviceability: "SERVICEABLE",
              slaString: "30-35 mins",
              lastMileTravelString: "1.4 km",
              iconType: "ICON_TYPE_EMPTY",
            },
            availability: {
              nextCloseTime: "2024-02-15 04:30:00",
              opened: true,
            },
            badges: {},
            isOpen: true,
            type: "F",
            badgesV2: {
              entityBadges: {
                imageBased: {},
                textBased: {},
                textExtendedBadges: {},
              },
            },
            aggregatedDiscountInfoV3: {
              header: "10% OFF",
              subHeader: "UPTO ₹40",
            },
            orderabilityCommunication: {
              title: {},
              subTitle: {},
              message: {},
              customIcon: {},
            },
            differentiatedUi: {
              displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              differentiatedUiMediaDetails: {
                mediaType: "ADS_MEDIA_ENUM_IMAGE",
                lottie: {},
                video: {},
              },
            },
            reviewsSummary: {},
            displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            restaurantOfferPresentationInfo: {},
          },
        }, 
        {
          info: {
            id: "248755",
            name: "Hashtag Foods",
            cloudinaryImageId: "q8elznxehj5bz4ybambc",
            locality: "Alpha 2",
            areaName: "Greater Noida",
            costForTwo: "₹250 for two",
            cuisines: ["Street Food", "Italian", "American", "Desserts", "Beverages"],
            avgRating: 4.1,
            parentId: "10519",
            avgRatingString: "4.1",
            totalRatingsString: "500+",
            sla: {
              deliveryTime: 28,
              lastMileTravel: 1.5,
              serviceability: "SERVICEABLE",
              slaString: "25-30 mins",
              lastMileTravelString: "1.5 km",
              iconType: "ICON_TYPE_EMPTY",
            },
            availability: {
              nextCloseTime: "2024-02-15 05:30:00",
              opened: true,
            },
            badges: {
              textExtendedBadges: [
                {
                  iconId: "guiltfree/GF_Logo_android_3x",
                  shortDescription: "options available",
                  fontColor: "#7E808C",
                },
              ],
            },
            isOpen: true,
            type: "F",
            badgesV2: {
              entityBadges: {
                imageBased: {},
                textBased: {},
                textExtendedBadges: {
                  badgeObject: [
                    {
                      attributes: {
                        description: "",
                        fontColor: "#7E808C",
                        iconId: "guiltfree/GF_Logo_android_3x",
                        shortDescription: "options available",
                      },
                    },
                  ],
                },
              },
            },
            aggregatedDiscountInfoV3: {
              header: "40% OFF",
              subHeader: "UPTO ₹80",
            },
            orderabilityCommunication: {
              title: {},
              subTitle: {},
              message: {},
              customIcon: {},
            },
            differentiatedUi: {
              displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              differentiatedUiMediaDetails: {
                mediaType: "ADS_MEDIA_ENUM_IMAGE",
                lottie: {},
                video: {},
              },
            },
            reviewsSummary: {},
            displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            restaurantOfferPresentationInfo: {},
          },
        }, 
        {
          info: {
            id: "587701",
            name: "Keventers Ice Cream",
            cloudinaryImageId: "763214ca062fe36dfb5ef23c57856126",
            locality: "Alpha 2",
            areaName: "Greater Noida",
            costForTwo: "₹200 for two",
            cuisines: ["Ice Cream", "Desserts"],
            avgRating: 4.3,
            veg: true,
            parentId: "272044",
            avgRatingString: "4.3",
            totalRatingsString: "100+",
            sla: {
              deliveryTime: 24,
              lastMileTravel: 1.5,
              serviceability: "SERVICEABLE",
              slaString: "20-25 mins",
              lastMileTravelString: "1.5 km",
              iconType: "ICON_TYPE_EMPTY",
            },
            availability: {
              nextCloseTime: "2024-02-15 04:00:00",
              opened: true,
            },
            badges: {
              textExtendedBadges: [
                {
                  iconId: "guiltfree/GF_Logo_android_3x",
                  shortDescription: "options available",
                  fontColor: "#7E808C",
                },
              ],
            },
            isOpen: true,
            type: "F",
            badgesV2: {
              entityBadges: {
                imageBased: {},
                textBased: {},
                textExtendedBadges: {
                  badgeObject: [
                    {
                      attributes: {
                        description: "",
                        fontColor: "#7E808C",
                        iconId: "guiltfree/GF_Logo_android_3x",
                        shortDescription: "options available",
                      },
                    },
                  ],
                },
              },
            },
            aggregatedDiscountInfoV3: {
              header: "40% OFF",
              subHeader: "UPTO ₹100",
            },
            orderabilityCommunication: {
              title: {},
              subTitle: {},
              message: {},
              customIcon: {},
            },
            differentiatedUi: {
              displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              differentiatedUiMediaDetails: {
                mediaType: "ADS_MEDIA_ENUM_IMAGE",
                lottie: {},
                video: {},
              },
            },
            reviewsSummary: {},
            displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            restaurantOfferPresentationInfo: {},
          },
        },
        {
          info: {
            id: "385145",
            name: "Momo Shomo",
            cloudinaryImageId: "nwow7xpgtgfu2a4nuqwq",
            locality: "Alpha 1",
            areaName: "Greater Noida",
            costForTwo: "₹300 for two",
            cuisines: [
              "Chinese",
              "Street Food",
              "Tibetan",
              "Asian",
              "Indian",
              "North Eastern",
              "Beverages",
            ],
            avgRating: 4.3,
            parentId: "21859",
            avgRatingString: "4.3",
            totalRatingsString: "1K+",
            sla: {
              deliveryTime: 29,
              lastMileTravel: 1.8,
              serviceability: "SERVICEABLE",
              slaString: "25-30 mins",
              lastMileTravelString: "1.8 km",
              iconType: "ICON_TYPE_EMPTY",
            },
            availability: {
              nextCloseTime: "2024-02-15 05:00:00",
              opened: true,
            },
            badges: {
              textExtendedBadges: [
                {
                  iconId: "guiltfree/GF_Logo_android_3x",
                  shortDescription: "options available",
                  fontColor: "#7E808C",
                },
              ],
            },
            isOpen: true,
            type: "F",
            badgesV2: {
              entityBadges: {
                imageBased: {},
                textBased: {},
                textExtendedBadges: {
                  badgeObject: [
                    {
                      attributes: {
                        description: "",
                        fontColor: "#7E808C",
                        iconId: "guiltfree/GF_Logo_android_3x",
                        shortDescription: "options available",
                      },
                    },
                  ],
                },
              },
            },
            aggregatedDiscountInfoV3: {
              header: "₹125 OFF",
              subHeader: "ABOVE ₹249",
              discountTag: "FLAT DEAL",
            },
            orderabilityCommunication: {
              title: {},
              subTitle: {},
              message: {},
              customIcon: {},
            },
            differentiatedUi: {
              displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              differentiatedUiMediaDetails: {
                mediaType: "ADS_MEDIA_ENUM_IMAGE",
                lottie: {},
                video: {},
              },
            },
            reviewsSummary: {},
            displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            restaurantOfferPresentationInfo: {},
          },
        },
        {
          info: {
            id: "430244",
            name: "The Waffle Co.",
            cloudinaryImageId: "4866e080f03ed46d77faa197b224deba",
            locality: "Alpha 1",
            areaName: "Alpha 1",
            costForTwo: "₹200 for two",
            cuisines: ["Desserts", "Waffle", "Beverages"],
            avgRating: 4.4,
            parentId: "5143",
            avgRatingString: "4.4",
            totalRatingsString: "1K+",  
          },
        },
        {
            info: {
            "id": "511884",
            "name": "Taza Day",
            "cloudinaryImageId": "lfdearoe1khcfds1yvta",
            "locality": "Knowledge Park",
            "areaName": "Greater Noida",
            "costForTwo": "₹300 for two",
            "cuisines": [
              "Indian"
            ],
            "avgRating": 3.1,
            "parentId": "306145",
            "avgRatingString": "3.1",
            "totalRatingsString": "10+",
            },
        }
    ]


const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://png.pngtree.com/png-vector/20230823/ourmid/pngtree-pizza-food-app-icon-with-a-slice-on-it-vector-png-image_6910377.png"
        ></img>
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About us</li>
          <li>Contact us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const RestaurantCard = (props) => {
  const { resData } = props;

  const {cloudinaryImageId, name, cuisines, avgRating, costForTwo} = resData?.info;
  return (
    <div className="res-card"> 
      <img
        className="res-card-logo"
        src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + 
        cloudinaryImageId}
      ></img>
      <h3>{name}</h3>
      <h4>{cuisines.join(', ')}</h4>
      <h4>{avgRating}</h4>
      <h4>{costForTwo}</h4>
    </div>
  );
};

const Body = () => {
  return (
    <div className="body">
      <div className="search-container">
        <div className="search">Search</div>
        <button className="search-btn">Search</button>
        <button>Sort</button>
      </div>

      <div className="res-container">
        {resList.map(restaurant => <RestaurantCard resData={restaurant}/>)}
      </div>
    </div>
  );
};

const Footer = () => {
  return <div className="footer"></div>;
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
      <Footer />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
