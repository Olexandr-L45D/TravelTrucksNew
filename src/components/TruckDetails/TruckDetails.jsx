// TruckDetails
import { useEffect } from "react";
import sprite from "../../images/sprite.svg";
import css from "./TruckDetails.module.css";
import { findTruckById } from "../../redux/campers/operations";
import { useDispatch, useSelector } from "react-redux";
import { Link, Outlet } from "react-router-dom";

const TruckDetails = ({ id }) => {
  const dispatch = useDispatch();
  const { selectedTruck, loading, error } = useSelector(state => state.campers);
  // const [isActive, setIsActive] = useState(false);

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
      <div className={css.cartContainer}>
        <div className={css.cartComent}>
          <div className={css.titlesblok}>
            <p className={css.titles}>{selectedTruck.name}</p>
          </div>

          <div className={css.descripBloc}>
            <div className={css.descripBlo}>
              <div className={css.textTitlesis}>
                <svg className={css.iconhed}>
                  <use href={`${sprite}#icon-star`} />
                </svg>
              </div>
              <div className={css.loched}>
                {selectedTruck.rating}
                <strong className={css.loched}>(Revievs)</strong>
              </div>
            </div>
            <div className={css.textTitlesBl}>
              <div className={css.textTitlesis}>
                <svg className={css.iconhed}>
                  <use href={`${sprite}#icon-city`} />
                </svg>
              </div>
              <div className={css.loched}>{selectedTruck.location}</div>
            </div>
          </div>

          <div className={css.textPriceBl}>
            <p className={css.textPrice}>&euro {selectedTruck.price}</p>
          </div>
          <div className={css.imgCardBloc}>
            <div className={css.imgCard}>
              <img
                className={css.img}
                src={selectedTruck.gallery[0].thumb}
                alt={selectedTruck.name}
              />
            </div>
            <div className={css.imgCard}>
              <img
                className={css.img}
                src={selectedTruck.gallery[0].original}
                alt={selectedTruck.name}
              />
            </div>
            <div className={css.imgCard}>
              <img
                className={css.img}
                src={selectedTruck.gallery[1].thumb}
                alt={selectedTruck.name}
              />
            </div>
            <div className={css.imgCard}>
              <img
                className={css.img}
                src={selectedTruck.gallery[1].original}
                alt={selectedTruck.name}
              />
            </div>
          </div>
          <div className={css.textDescr}>
            <p className={css.text}>{selectedTruck.description}</p>
          </div>
          <div className={css.blocTitleContainers}>
            <ul className={css.textTitlesBloLi}>
              <li className={css.textTitles}>
                <Link to="features">
                  <h3 className={css.comTitles}>Features</h3>
                </Link>
              </li>
              <li className={css.textTitles}>
                <Link to="reviews">
                  <h3 className={css.comTitles}>Reviews</h3>
                </Link>
              </li>
            </ul>
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TruckDetails;
