import React from "react";
import CartCard from "./CartCard";
import { RootObject } from "../../types/typeinterface";

function Cart({
  cart,
  handleCount,
}: {
  cart: RootObject[];
  handleCount: (data: string, id: string) => void;
}) {
  const val = cart.map((e: RootObject) => {
    return (
      <>
        <CartCard handleCount={handleCount} key={e._id} value={e} />.{" "}
      </>
    );
  });
  return (
    <>
      <div>{val}</div>
    </>
  );
}

export default Cart;
