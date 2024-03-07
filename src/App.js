import React, { lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import About from "./components/About";
import Body from "./components/Body";
import Contact from "./components/Contact";
import Header from "./components/Header";
//import Grocery from "./components/Grocery";
import { Provider } from "react-redux";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import appStore from "./utils/appStore";
import UserContext from "./utils/UserContext";
import Cart from "./components/Cart";

//Chunking / Code splitting / Dynamic bundling / lazy loading / on demand loading

const Grocery = lazy(() => import("./components/Grocery"));

const Footer = () => {
  return (
    <div className="footer bg-pink-100 p-4 mt-4 rounded-3xl">
        <div className="footer-content text-center">
          <p>&copy; 2024 Love foods. All rights reserved.</p>
          <p>Contact: info@lovefoods.com</p>
        </div>
    </div>
  );
};

const AppLayout = () => {
  const [userName, setUserName] = useState();

  //authentication
  useEffect(() => {
    //make an api call and send username and password
    const data = {
      name: "",
    };
    setUserName(data.name);
  }, []);

  return (
    <Provider store={appStore}>
      <UserContext.Provider value={{ loggedInUser: userName, setUserName }}>
        <div className="app">
          <Header />
          <Outlet />
          <Footer />
        </div>
      </UserContext.Provider>
    </Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<h1>LOADING...</h1>}>
            <Grocery />
          </Suspense>
        ),
      },
      {
        path: "/restaurants/:resId",
        element: <RestaurantMenu />,
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
