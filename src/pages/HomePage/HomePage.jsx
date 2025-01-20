import { Link } from "react-router-dom";
import css from "./HomePage.module.css";

export default function HomePage() {
  return (
    <div className={css.background}>
      <div className={css.card}>
        <h1 className={css.cartTitle}>Campers of your dreams</h1>
        <h3 className={css.cartText}>
          You can find everything uoy want in our catalog
        </h3>
        <div className={css.cartBtn}>
          <Link to="/catalog">
            <div className={css.buttonIconSearch}>
              <button className={css.btnSearch} type="submit">
                View Now
              </button>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
