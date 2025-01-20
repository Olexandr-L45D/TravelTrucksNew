// AllTruckList
import { NavLink } from "react-router-dom";
import sprite from "../../images/sprite.svg";
import css from "./AllTruckList.module.css";

export default function AllTruckList({ trucks }) {
  console.log(trucks);

  if (!trucks || trucks.length === 0) {
    return <div>No trucks available</div>; // Відобразіть це, якщо дані ще не завантажені
  }
  // export default function AllTruckList({ filteredTrucks }) {
  //   if (!filteredTrucks || filteredTrucks.length === 0) {
  //     return <div>No trucks available</div>; // Відобразіть це, якщо дані ще не завантажені
  //   }
  return (
    <div className={css.container}>
      <ul className={css.list}>
        {trucks.map(
          ({
            name,
            id,
            location,
            price,
            rating,
            gallery,
            description,
            water,
            engin,
            kitchen,
            AC,
          }) => (
            <li key={id}>
              <div className={css.cartContainer}>
                <div className={css.imgCard}>
                  <img className={css.img} src={gallery[0].thumb} alt={name} />
                </div>
                <div className={css.cartComent}>
                  <div className={css.titlesblok}>
                    <p className={css.titles}>{name}</p>

                    <div className={css.textPrice}>
                      <p>Є {price}</p>
                    </div>
                  </div>

                  <div className={css.descripBloc}>
                    <div className={css.loched}>
                      <svg className={css.iconhed}>
                        <use href={`${sprite}#icon-star`} />
                      </svg>
                      {rating} <strong className={css.loched}>(Revievs)</strong>
                    </div>
                    <div className={css.textTitlesBl}>
                      <div className={css.textTitles}>
                        <svg className={css.iconhed}>
                          <use href={`${sprite}#icon-city`} />
                        </svg>
                      </div>
                      <div className={css.loched}>{location}</div>
                    </div>
                  </div>

                  <div className={css.textDescr}>
                    <p className={css.text}>{description}</p>
                  </div>
                  <div className={css.descrip}>
                    <div className={css.textdes}>
                      <svg className={css.icon}>
                        <use href={`${sprite}#icon-aut`} />
                      </svg>
                      <strong>Automatic</strong> {water}
                    </div>
                    <div className={css.textdes}>
                      <svg className={css.icon}>
                        <use href={`${sprite}#icon-petrol`} />
                      </svg>
                      <strong>Petrol</strong> {engin}
                    </div>
                    <div className={css.textdes}>
                      <svg className={css.icon}>
                        <use href={`${sprite}#icon-kitch`} />
                      </svg>
                      <strong>kitchen</strong> {kitchen}
                    </div>
                  </div>
                  <div className={css.textdesAc}>
                    <svg className={css.icon}>
                      <use href={`${sprite}#icon-ac`} />
                    </svg>
                    <strong>AC</strong> {AC}
                  </div>
                  <button className={css.buttonIconShowe}>
                    <NavLink className={css.btnShowe} to={`/catalog/${id}`}>
                      Show more
                    </NavLink>
                  </button>
                </div>
              </div>
            </li>
          )
        )}
      </ul>
    </div>
  );
}
