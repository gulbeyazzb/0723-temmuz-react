import { NavLink } from "react-router-dom";

const SideBar = () => {
  return (
    <div className="side-bar">
      <NavLink to="/" exact>
        Ana Sayfa
      </NavLink>
      <NavLink to="/products" exact>
        Ürünler
      </NavLink>
      <NavLink to="/counter" exact>
        Sayaç
      </NavLink>
    </div>
  );
};

export default SideBar;
