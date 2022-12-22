import React, { useState } from "react";
import { Textboxtype } from "./types/Textboxtype";
import PropTypes from "prop-types";
function Textbox({ handletextChange }: Textboxtype) {
  const [text, settext] = useState("");
  function handleinputchange(e: React.ChangeEvent<HTMLInputElement>) {
    settext(e.target.value);
    handletextChange(e.target.value);
  }
  return (
    <div>
      <input
        type="text"
        className="w-full outline-black border-2 border-black p-4"
        placeholder="search"
        value={text}
        onChange={(e) => handleinputchange(e)}
      />
    </div>
  );
}

Textbox.propTypes = {
  input: PropTypes.string,
  handletextChange: PropTypes.func,
};

Textbox.defaultProps = {
  input: "default",
  handletextChange: (e: React.ChangeEvent<HTMLInputElement>) => e.target.value,
};

export default Textbox;
