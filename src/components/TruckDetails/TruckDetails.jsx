import { useEffect } from "react";
import sprite from "../../images/sprite.svg";
import clsx from "clsx";
import css from "./TruckDetails.module.css";
import { GoArrowLeft } from "react-icons/go";
import { findTruckById } from "../../redux/campers/operations";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, Outlet } from "react-router-dom";

const newLinkClass = ({ isActive }) => {
  return clsx(css.link, isActive && css.active);
};

const TruckDetails = ({ id }) => {
  const dispatch = useDispatch();
  const { selectedTruck, loading, error } = useSelector(state => state.campers);

  useEffect(() => {
    dispatch(findTruckById(id)); // Запит на завантаження деталей вантажівки
  }, [dispatch, id]);
  if (loading) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <p>Error: {error.message || error}</p>;
  }
  if (!selectedTruck) {
    return <p>No truck details available</p>;
  }
  if (error?.status === 404) {
    return <p>Truck not found</p>;
  }
  return (
    <div className={css.container}>
      <section className={css.cartContainer}>
        <section className={css.cartComent}>
          <div className={css.titlesblok}>
            <h1 className={css.titles}>{selectedTruck.name}</h1>
          </div>

          <ul className={css.descripBloc}>
            <li className={css.descripBlo}>
              <div className={css.textTitlesis}>
                <svg className={css.iconhed}>
                  <use href={`${sprite}#icon-star`} />
                </svg>
              </div>
              <div className={css.loched}>
                {selectedTruck.rating}
                <strong className={css.loched}>(Revievs)</strong>
              </div>
            </li>
            <li className={css.textTitlesBl}>
              <div className={css.textTitlesis}>
                <svg className={css.iconhed}>
                  <use href={`${sprite}#icon-city`} />
                </svg>
              </div>
              <div className={css.loched}>{selectedTruck.location}</div>
            </li>
          </ul>

          <div className={css.textPriceBl}>
            <h3 className={css.textPrice}>€ {selectedTruck.price}</h3>
          </div>
          <ul className={css.imgCardBloc}>
            {selectedTruck.gallery.map(({ thumb }, index) => (
              <li key={index} className={css.imgCard}>
                <img
                  className={css.img}
                  src={thumb}
                  alt={`${selectedTruck.name} thumbnail`}
                />
                {/* <img
                  className={css.img}
                  src={original}
                  alt={`${selectedTruck.name} original`}
                /> */}
              </li>
            ))}
          </ul>

          <div className={css.textDescr}>
            <p className={css.text}>{selectedTruck.description}</p>
          </div>
          <div className={css.blocTitleContainers}>
            <ul className={css.textTitlesBloLi}>
              <li className={css.textTitles}>
                <NavLink to="features" className={newLinkClass}>
                  Features
                </NavLink>
              </li>
              <li className={css.textTitles}>
                <NavLink to="reviews" className={newLinkClass}>
                  Reviews
                </NavLink>
              </li>
              <li className={css.textLink}>
                <button className={css.buttonIcon}>
                  <GoArrowLeft className={css.icons} />
                  <NavLink to="/catalog">Go to Catalog</NavLink>
                </button>
              </li>
            </ul>
            <Outlet />
          </div>
        </section>
      </section>
    </div>
  );
};

export default TruckDetails;

/* <Link to="features">
  <h3 className={css.comTitles}>Features</h3>
</Link>; */
