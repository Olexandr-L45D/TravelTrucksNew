import css from "./TruckReviews.module.css";
import { useSelector } from "react-redux";
import BookingForm from "../BookingForm/BookingForm";

export default function TruckReviews() {
  const { selectedTruck } = useSelector(state => state.campers);

  return (
    <div className={css.cartBottomDetall}>
      <div className={css.cartComentBloks}>
        <div className={css.textContainers}>
          <div className={css.textDescr}>
            <p className={css.text}>{selectedTruck.description}</p>
          </div>
        </div>

        <div className={css.textContainers}>
          <div className={css.textDescr}>
            <p className={css.text}>{selectedTruck.description[0]}</p>
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
        </div>
      </div>
    </div>
  );
}
