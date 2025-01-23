// AllTruckList
import { NavLink } from "react-router-dom";
import sprite from "../../images/sprite.svg";
import css from "./AllTruckList.module.css";

export default function AllTruckList({ trucks }) {
  console.log(trucks);

  if (!trucks || trucks.length === 0) {
    return <div>No trucks available</div>; // Відобразіть це, якщо дані ще не завантажені
  }
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
            <li key={id} className={css.cartItem}>
              <article className={css.cartContainer}>
                <figure className={css.imgCard}>
                  <img className={css.img} src={gallery[0].thumb} alt={name} />
                </figure>
                <section className={css.cartComent}>
                  <header className={css.titlesblok}>
                    <h2 className={css.titles}>{name}</h2>
                    <p className={css.textPrice}>€ {price}</p>
                  </header>

                  <section className={css.descripBloc}>
                    <ul className={css.descripList}>
                      <li className={css.descripItem}>
                        <svg className={css.iconhed}>
                          <use href={`${sprite}#icon-star`} />
                        </svg>
                        <span className={css.loched}>
                          {rating}
                          <strong>(Reviews)</strong>
                        </span>
                      </li>
                      <li className={css.descripItem}>
                        <svg className={css.iconhed}>
                          <use href={`${sprite}#icon-city`} />
                        </svg>
                        <span className={css.loched}>{location}</span>
                      </li>
                    </ul>
                  </section>

                  <p className={css.textDescr}>{description}</p>

                  <ul className={css.featuresList}>
                    <li className={css.featuresItem}>
                      <svg className={css.icon}>
                        <use href={`${sprite}#icon-aut`} />
                      </svg>
                      <strong>Automatic</strong> {water}
                    </li>
                    <li className={css.featuresItem}>
                      <svg className={css.icon}>
                        <use href={`${sprite}#icon-petrol`} />
                      </svg>
                      <strong>Petrol</strong> {engin}
                    </li>
                    <li className={css.featuresItem}>
                      <svg className={css.icon}>
                        <use href={`${sprite}#icon-kitch`} />
                      </svg>
                      <strong>Kitchen</strong> {kitchen}
                    </li>
                  </ul>
                  <div className={css.featuresItemAc}>
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
                </section>
              </article>
            </li>
          )
        )}
      </ul>
    </div>
  );
}
