// TruckDetails
import { useEffect } from "react";
import sprite from "../../images/sprite.svg";
import css from "./TruckDetails.module.css";
import { findTruckById } from "../../redux/campers/operations";
import { useDispatch, useSelector } from "react-redux";

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
      <div className={css.cartContainer}>
        <div className={css.cartComent}>
          <div className={css.titlesblok}>
            <p className={css.titles}>{selectedTruck.name}</p>
            <div className={css.textPrice}>
              <p>Є {selectedTruck.price}</p>
            </div>
          </div>
          <div className={css.descrip}>
            <p className={css.textTitle}>
              {selectedTruck.rating} <strong>(Revievs)</strong>
            </p>
            <p className={css.textTitle}>
              <strong>Location:</strong> {selectedTruck.location}
            </p>
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
                src={selectedTruck.gallery[1].thumb}
                alt={selectedTruck.name}
              />
            </div>
            <div className={css.imgCard}>
              <img
                className={css.img}
                src={selectedTruck.gallery[2].thumb}
                alt={selectedTruck.name}
              />
            </div>
            <div className={css.imgCard}>
              <img
                className={css.img}
                src={selectedTruck.gallery[2].original}
                alt={selectedTruck.name}
              />
            </div>
          </div>
          <div className={css.textDescr}>
            <p className={css.text}>{selectedTruck.description}</p>
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
              <div className={css.textdesForm}>
                <h3 className={css.textTitleVe}>Vehicle details</h3>
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
              <h3>Book yoor campervan now</h3>
              <p className={css.textTitle}>Name</p>
              <p className={css.textTitle}>Email</p>
              <p className={css.textTitle}>Booking date </p>
              <p className={css.textTitle}>Comment</p>
              <div className={css.buttonIconSearch}>
                <button className={css.btnSearch} type="submit">
                  Send
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TruckDetails;

//             "TV": true,
//             "radio": true,
//             "refrigerator": true,
//             "microwave": true,
//             "gas": true,
//             "water": true
