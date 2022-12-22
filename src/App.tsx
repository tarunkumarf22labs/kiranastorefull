import React, { useContext, useEffect, useState } from "react";
import Navbar from "./Components/routes/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RouteBody from "./Components/routes/Route";
import { Datacontextcreator } from "./Context/DataContext";
import { RootObject, Datacontextcreatorinterface } from "./types/typeinterface";
import { fetchapi } from "./utils/hook/useFetchhook";

function App() {
  const contextData =
    useContext<Datacontextcreatorinterface | null>(Datacontextcreator);
  if (!contextData) return null;
  const {
    cart,
    setcart,
    form,
    firstdatafromapi,
    setfirstdatafromapi,
    curretpage,
    setcurrentpage,
  } = contextData;
  const postperpage = 3;
  const lastpostindex = curretpage * postperpage;
  const fistpageIndex = lastpostindex - postperpage;

  function addcart(data: RootObject) {
    if (cart?.find((e: { _id: string }) => e._id === data._id)) {
      return;
    }
    setcart((prev) => [...prev, { ...data, count: 1 }]);
  }

  async function dataFetch() {
    let val = await fetchapi();
    setfirstdatafromapi(val.data);
    // settotalpage(val.count);
  }

  function handleCount(val: string, id: string) {
    let exist = cart ? cart?.find((e: RootObject) => e._id === id) : cart;

    if (exist && val === "+") {
      setcart(
        cart.map((x: RootObject) => {
          return x._id === id ? { ...exist!, count: exist!.count + 1 } : x;
        })
      );
    } else if (val === "-") {
      setcart(
        cart.map((x: RootObject) => {
          return x._id === id ? { ...exist!, count: exist!.count - 1 } : x;
        })
      );
      if (exist!.count === 1) {
        setcart(cart!.filter((e: { _id: string }) => e._id !== id));
        return;
      }
    }
  }

  useEffect(() => {
    dataFetch();
  }, [form]);

  const currentval = firstdatafromapi.slice(fistpageIndex, lastpostindex);
  return (
    <div>
      <Router>
        <Navbar />
        <RouteBody
          firstdatafromapi={currentval}
          addcart={addcart}
          cart={cart}
          handleCount={handleCount}
          handleclick={(e: number) => setcurrentpage(e)}
          curretpage={curretpage}
        />
      </Router>
    </div>
  );
}

export default App;
