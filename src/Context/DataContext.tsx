import React, { createContext, useState } from "react";
import {
  RootObject,
  Datacontextcreatorinterface,
} from "../types/typeinterface";

export const Datacontextcreator =
  createContext<Datacontextcreatorinterface | null>(null);

function DataContext({ children }: { children: React.ReactNode }) {
  const [cart, setcart] = useState<RootObject[] | []>([]);
  const [firstdatafromapi, setfirstdatafromapi] = useState<RootObject[]>([]);
  const [form, setform] = useState({});
  const [curretpage, setcurrentpage] = useState(1);

  const value: Datacontextcreatorinterface = {
    cart,
    setcart,
    firstdatafromapi,
    setfirstdatafromapi,
    form,
    curretpage,
    setcurrentpage,
    setform,
  };
  return (
    <Datacontextcreator.Provider value={value}>
      {children}
    </Datacontextcreator.Provider>
  );
}

export default DataContext;
