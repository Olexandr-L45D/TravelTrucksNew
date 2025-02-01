import { useSelector } from "react-redux";
import sprite from "../../images/sprite.svg";
import css from "./TruckFeatures.module.css";
import BookingForm from "../BookingForm/BookingForm";
import { useTranslation } from "react-i18next";

export default function TruckFeatures() {
  const { selectedTruck } = useSelector(state => state.campers);
  const { t } = useTranslation();

  return (
    <section className={css.cartBottomDetall}>
      <section className={css.cartComentBloks}>
        <ul className={css.descripBl}>
          <li className={css.textdes}>
            <svg className={css.icon}>
              <use href={`${sprite}#icon-aut`} />
            </svg>
            <strong>
              {selectedTruck.transmission.charAt(0).toUpperCase() +
                selectedTruck.transmission.slice(1)}
            </strong>
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
            <strong>
              {selectedTruck.engine.charAt(0).toUpperCase() +
                selectedTruck.engine.slice(1)}
            </strong>
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
              <p className={css.texBec}>
                {selectedTruck.length.replace(/(\d)(m)$/, "$1 $2")}
              </p>
            </li>
            <li className={css.textdeskrip}>
              <p className={css.textTit}>Width</p>
              <p className={css.texBec}>
                {selectedTruck.width.replace(/(\d)(m)$/, "$1 $2")}
              </p>
              {/* Цей код знайде останню цифру перед "m" і вставить перед нею пробіл  */}
            </li>
            <li className={css.textdeskrip}>
              <p className={css.textTit}>Height</p>
              <p className={css.texBec}>
                {selectedTruck.height.replace(/(\d)(m)$/, "$1 $2")}
              </p>
            </li>
            <li className={css.textdeskrip}>
              <p className={css.textTit}>Tank</p>
              <p className={css.texBec}>
                {selectedTruck.tank.replace(/(\d)(l)$/, "$1 $2")}
              </p>
            </li>
            <li className={css.textdeskrip}>
              <p className={css.textTit}>Consumption</p>
              <p className={css.texBec}>{selectedTruck.consumption}</p>
            </li>
          </ul>
        </section>
      </section>

      <section className={css.textContainerses}>
        <h3 className={css.textTitleTit}>{t("navigation.bokTitleFm")}</h3>
        <h4 className={css.textTitleTi}>{t("navigation.bokTitleFmText")}</h4>
        <div className={css.blocForm}>
          <BookingForm />
        </div>
      </section>
    </section>
  );
}
