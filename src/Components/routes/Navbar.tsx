import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { Datacontextcreator } from "../../Context/DataContext";
import {
  Datacontextcreatorinterface,
} from "../../types/typeinterface";

function Navbar() {
  const contextData = useContext<Datacontextcreatorinterface | null>(
    Datacontextcreator
  );
  if (!contextData) return null;
  const { cart } = contextData;
  return (
    <header>
      <nav className="w-full flex justify-between p-4 border-b-2 border-black ">
        <div className="logo">
          <NavLink to="/"> Kirana store</NavLink>
        </div>
        <div className="links">
          <NavLink to="/cart">cart{cart.length}</NavLink>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
