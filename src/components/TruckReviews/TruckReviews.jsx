import css from "./TruckReviews.module.css";
import { useSelector } from "react-redux";
import sprite from "../../images/sprite.svg";
import BookingForm from "../BookingForm/BookingForm";

export default function TruckReviews() {
  const { selectedTruck } = useSelector(state => state.campers);

  return (
    <div className={css.cartBottomDetall}>
      <div className={css.cartComentBloks}>
        <ul className={css.textContainers}>
          <div className={css.reviewBlTitle}>
            <li className={css.textDescr}>
              <p className={css.textT}>
                {selectedTruck.reviews[0].reviewer_name.slice(0, 1)}
              </p>
            </li>
            <div className={css.textDescrBl}>
              <li className={css.textDescr}>
                <p className={css.textN}>
                  {selectedTruck.reviews[0].reviewer_name}
                </p>
              </li>
              <li className={css.textDescr}>
                <p className={css.textTitlesis}>
                  {Array.from({
                    length: selectedTruck.reviews[0].reviewer_rating,
                  }).map((_, index) => (
                    <svg key={index} className={css.iconhed}>
                      <use href={`${sprite}#icon-star`} />
                    </svg>
                  ))}
                </p>
              </li>
            </div>
          </div>
          <li className={css.textDescr}>
            <p className={css.text}>{selectedTruck.reviews[0].comment}</p>
          </li>
        </ul>

        <ul className={css.textContainers}>
          <div className={css.reviewBlTitle}>
            <li className={css.textDescr}>
              <p className={css.textT}>
                {selectedTruck.reviews[1].reviewer_name.charAt(0)}
              </p>
            </li>
            <div className={css.textDescrBl}>
              <li className={css.textDescr}>
                <p className={css.textN}>
                  {selectedTruck.reviews[1].reviewer_name}
                </p>
              </li>
              <li className={css.textDescr}>
                <p className={css.textTitlesis}>
                  {Array.from({
                    length: selectedTruck.reviews[1].reviewer_rating,
                  }).map((_, index) => (
                    <svg key={index} className={css.iconhed}>
                      <use href={`${sprite}#icon-star`} />
                    </svg>
                  ))}
                </p>
              </li>
            </div>
          </div>
          <li className={css.textDescr}>
            <p className={css.text}>{selectedTruck.reviews[1].comment}</p>
          </li>
        </ul>
      </div>

      <div className={css.textContainerses}>
        <h3 className={css.textTitleTit}>Book yoor campervan now</h3>
        <h4 className={css.textTitleTi}>
          Stay connected ! We are alwaays raady to help you.
        </h4>
        <div className={css.blocForm}>
          <BookingForm />
        </div>
      </div>
    </div>
  );
}

// reviews;
// comment;
// reviewer_name;
// reviewer_rating;
