import React from "react";
import { Link } from "react-router-dom";
import { Cardtypes } from "./types/Cardtypes";

function Card({
  value,
  handleDelete,
  handleModal,
  click,
  id,
  setclick,
}: Cardtypes) {
  const { img, title, _id } = value;

  function handleDeletecardfunc() {
    handleDelete(_id);
  }

  function handleClick(index: number) {
    setclick(index);
  }
  return (
    <article className="p-6 rounded-lg shadow-lg bg-white w-fulls">
      <div className="p-6 rounded-lg shadow-lg bg-white w-full disabled:text-purple-300 flex justify-between items-center ">
        <Link to={`store/${_id}`}>
          <img src={img} className="w-12" />
          <h1>{title}</h1>
        </Link>
        <button
          className="text-4 cursor-pointer"
          onClick={() => handleClick(id)}
        >
          click
        </button>
      </div>

      {click === id ? (
        <>
          <br />
          <Edit
            handleDeletecardfunc={handleDeletecardfunc}
            handleModal={() => handleModal(value)}
          />
        </>
      ) : (
        ""
      )}
    </article>
  );
}

function Edit({
  handleDeletecardfunc,
  handleModal,
}: {
  handleDeletecardfunc: () => void;
  handleModal: () => void;
}) {
  return (
    <>
      <button className="p-4 . bg-red-400 mr-4" onClick={handleModal}>
        Edit
      </button>
      <button className="p-4 . bg-blue-400" onClick={handleDeletecardfunc}>
        Delete
      </button>
    </>
  );
}

export default Card;
