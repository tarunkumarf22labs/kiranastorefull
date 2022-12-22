import React, { useEffect, useState } from "react";
import { useRoutes } from "react-router-dom";
import Cart from "../cart/Cart";
import Home from "../container/Home";
import ProductDetails from "../container/ProductDetails";
import { RootObject } from "../../types/typeinterface";
import {RouteBodyprops} from "./types/Routetype"

export default function RouteBody({
  firstdatafromapi,
  addcart,
  cart,
  handleCount,
  curretpage,
  handleclick,
}: RouteBodyprops) {
  let routes = useRoutes([
    {
      path: "/",
      element: (
        <Home
          data={firstdatafromapi}
          curretpage={curretpage}
          handleclick={handleclick}
        />
      ),
    },
    {
      path: "store/:id",
      element: <ProductDetails addCart={(val: RootObject) => addcart(val)} />,
    },
    {
      path: "cart",
      element: (
        <Cart
          cart={cart}
          handleCount={(data: string, id: string) => handleCount(data, id)}
        />
      ),
    },
    // ...
  ]);

  return routes;
}
