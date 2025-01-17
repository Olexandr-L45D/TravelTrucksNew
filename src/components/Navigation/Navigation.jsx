import { NavLink } from "react-router-dom";
import clsx from "clsx";
import css from "./Navigation.module.css";

const newLinkClass = ({ isActive }) => {
  return clsx(css.link, isActive && css.active);
};

export const Navigation = () => {
  return (
    <div className={css.container}>
      <h3 className={css.title}>TravelTrucks</h3>
      <div className={css.card}>
        <nav className={css.nav}>
          <NavLink to="/" className={newLinkClass}>
            Home
          </NavLink>
          <NavLink to="/catalog" className={newLinkClass}>
            Catalog
          </NavLink>
        </nav>
      </div>
    </div>
  );
};
