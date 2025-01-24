import { useSelector } from "react-redux";
import sprite from "../../images/sprite.svg";
import css from "./TruckFeatures.module.css";
import BookingForm from "../BookingForm/BookingForm";

export default function TruckFeatures() {
  const { selectedTruck } = useSelector(state => state.campers);

  return (
    <section className={css.cartBottomDetall}>
      <section className={css.cartComentBloks}>
        <ul className={css.descripBl}>
          <li className={css.textdes}>
            <svg className={css.icon}>
              <use href={`${sprite}#icon-aut`} />
            </svg>
            <strong>Automatic</strong> {selectedTruck.water}
          </li>
          <li className={css.textdes}>
            <svg className={css.icon}>
              <use href={`${sprite}#icon-ac`} />
            </svg>
            <strong>AC</strong> {selectedTruck.AC}
          </li>
          <li className={css.textdes}>
            <svg className={css.icon}>
              <use href={`${sprite}#icon-petrol`} />
            </svg>
            <strong>Petrol</strong> {selectedTruck.engin}
          </li>
          <li className={css.textdes}>
            <svg className={css.icon}>
              <use href={`${sprite}#icon-kitch`} />
            </svg>
            <strong>kitchen</strong> {selectedTruck.kitchen}
          </li>
        </ul>
        <section className={css.textContainers}>
          <div className={css.textTitleVeBlok}>
            <h3 className={css.textTitleVe}>Vehicle details</h3>
          </div>
          <ul className={css.textdesForm}>
            <li className={css.textdeskrip}>
              <p className={css.textTit}>Form</p>
              <p className={css.texBec}>{selectedTruck.form}</p>
            </li>
            <li className={css.textdeskrip}>
              <p className={css.textTit}>Length</p>
              <p className={css.texBec}>{selectedTruck.length}</p>
            </li>
            <li className={css.textdeskrip}>
              <p className={css.textTit}>Width</p>
              <p className={css.texBec}>{selectedTruck.width}</p>
            </li>
            <li className={css.textdeskrip}>
              <p className={css.textTit}>Height</p>
              <p className={css.texBec}> {selectedTruck.height}</p>
            </li>
            <li className={css.textdeskrip}>
              <p className={css.textTit}>Tank</p>
              <p className={css.texBec}>{selectedTruck.tank}</p>
            </li>
            <li className={css.textdeskrip}>
              <p className={css.textTit}>Consumption</p>
              <p className={css.texBec}>{selectedTruck.consumption}</p>
            </li>
          </ul>
        </section>
      </section>

      <section className={css.textContainerses}>
        <h3 className={css.textTitleTit}>Book yoor campervan now</h3>
        <h4 className={css.textTitleTi}>
          Stay connected ! We are alwaays raady to help you.
        </h4>
        <div className={css.blocForm}>
          <BookingForm />
        </div>
      </section>
    </section>
  );
}
