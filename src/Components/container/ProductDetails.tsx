import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  Datacontextcreatorinterface,
  RootObject,
} from "../../types/typeinterface";

function ProductDetails({ addCart }: { addCart: (val: RootObject) => void }) {
  const dummyobj = {
    img: "",
    title: "",
    description: "",
  };
  const { id } = useParams();
  const [value, setvalue] = useState<RootObject | null>(null);
  async function fetchProduct() {
    const data = await fetch(
      `https://kiranastore-upload-backend-f22labs.onrender.com/products/${id}`
    );
    const value = await data.json();

    setvalue(value.result);
  }
  useEffect(() => {
    fetchProduct();
  }, []);

  function handleChange() {
    if (Object.keys(value!).length === 0) return;
    addCart(value!);
  }
  return (
    <div className="p-6  w-full min-h-screen flex">
      <div className="w-fit">
        <img className="" src={value?.img} alt="" />
      </div>
      <div className="p-8">
        <h1>{value?.title}</h1>
        <h2>description:</h2>
        <p>{value?.description}</p>
        <button
          onClick={handleChange}
          className="border-2 border-black px-4 py-2 mt-4"
        >
          addtocart
        </button>
      </div>
    </div>
  );
}

export default ProductDetails;
