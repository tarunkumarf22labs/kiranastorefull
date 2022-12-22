export interface RootObject {
  category: {
    quality: string;
  };
  _id: string;
  title: string;
  price: number;
  description: string;
  img: string;
  userId: string;
  __v: number;
  count: number;
}

export interface Datacontextcreatorinterface {
  cart: RootObject[] | [];
  setcart: React.Dispatch<React.SetStateAction<RootObject[] | []>>;
  firstdatafromapi: RootObject[];
  setfirstdatafromapi: React.Dispatch<React.SetStateAction<RootObject[]>>;
  form: {};
  curretpage: number;
  setcurrentpage: React.Dispatch<React.SetStateAction<number>>;
  setform: React.Dispatch<React.SetStateAction<{}>>;
}
