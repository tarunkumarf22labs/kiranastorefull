import {RootObject} from "../../../types/typeinterface"
export type RouteBodyprops = {
  firstdatafromapi: RootObject[];
  addcart: (val: RootObject) => void;
  cart: RootObject[];
  handleCount: (data: string, id: string) => void;
  curretpage: number;
  handleclick: (id: number) => void;
}