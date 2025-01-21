// TruckDetails
import { useEffect, useState } from "react";
import sprite from "../../images/sprite.svg";
import css from "./TruckDetails.module.css";
import { findTruckById } from "../../redux/campers/operations";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import BookingForm from "../BookingForm/BookingForm";

const TruckDetails = ({ id }) => {
  const dispatch = useDispatch();
  const { selectedTruck, loading, error } = useSelector(state => state.campers);
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(true);
  };
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
            <p className={css.textPrice}>Є {selectedTruck.price}</p>
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
            <div className={css.textTitles}>
              <Link to="features">
                <div className={css.btnActivClik}>
                  <button
                    className={`${css.btnActiv} ${isActive ? css.active : ""}`}
                    type="submit"
                    onClick={handleClick}
                  >
                    Features
                  </button>
                </div>
              </Link>
            </div>
            <div className={css.textTitles}>
              <Link to="reviews">
                <div className={css.btnActivClik}>
                  <button
                    className={`${css.btnActiv} ${isActive ? css.active : ""}`}
                    type="submit"
                    onClick={handleClick}
                  >
                    Reviews
                  </button>
                </div>
              </Link>
            </div>
          </div>
          <div className={css.descripBl}>
            <div className={css.textdes}>
              <svg className={css.icon}>
                <use href={`${sprite}#icon-aut`} />
              </svg>
              <strong>Automatic</strong> {selectedTruck.water}
            </div>
            <div className={css.textdes}>
              <svg className={css.icon}>
                <use href={`${sprite}#icon-ac`} />
              </svg>
              <strong>AC</strong> {selectedTruck.AC}
            </div>
            <div className={css.textdes}>
              <svg className={css.icon}>
                <use href={`${sprite}#icon-petrol`} />
              </svg>
              <strong>Petrol</strong> {selectedTruck.engin}
            </div>
            <div className={css.textdes}>
              <svg className={css.icon}>
                <use href={`${sprite}#icon-kitch`} />
              </svg>
              <strong>kitchen</strong> {selectedTruck.kitchen}
            </div>
          </div>

          <div className={css.blocBotContainers}>
            <div className={css.textContainers}>
              <div className={css.textTitleVeBlok}>
                <h3 className={css.textTitleVe}>Vehicle details</h3>
              </div>
              <div className={css.textdesForm}>
                <div className={css.textdeskrip}>
                  <p className={css.textTit}>Form</p>
                  <p className={css.texBec}>{selectedTruck.form}</p>
                </div>
                <div className={css.textdeskrip}>
                  <p className={css.textTit}>Length</p>
                  <p className={css.texBec}>{selectedTruck.length}</p>
                </div>
                <div className={css.textdeskrip}>
                  <p className={css.textTit}>Width</p>
                  <p className={css.texBec}>{selectedTruck.width}</p>
                </div>
                <div className={css.textdeskrip}>
                  <p className={css.textTit}>Height</p>
                  <p className={css.texBec}> {selectedTruck.height}</p>
                </div>
                <div className={css.textdeskrip}>
                  <p className={css.textTit}>Tank</p>
                  <p className={css.texBec}>{selectedTruck.tank}</p>
                </div>
                <div className={css.textdeskrip}>
                  <p className={css.textTit}>Consumption</p>
                  <p className={css.texBec}>{selectedTruck.consumption}</p>
                </div>
              </div>
            </div>
            <div className={css.textContainerses}>
              <h3 className={css.textTitleTit}>Book yoor campervan now</h3>
              <h4 className={css.textTitleTi}>
                Stay connected ! We are alwaays raady to help you.
              </h4>
              <div className={css.blocForm}>
                <BookingForm />
                <div className={css.status}>
                  {selectedTruck.isBooked ? (
                    <p className={css.booked}>This vehicle is already booked</p>
                  ) : (
                    <p className={css.available}>Available for booking</p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TruckDetails;
