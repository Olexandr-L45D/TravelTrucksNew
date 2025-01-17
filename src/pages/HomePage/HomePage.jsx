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
        <p>
          <Link to="/catalog">View Now</Link>
        </p>
      </div>
    </div>
  );
}

//  <div>
//       <button onClick={onClickBack} className={css.buttonIcon}>
//         <GoArrowLeft className={css.icon} />{" "}
//         <NavLink to={location.state ?? "/"}>Go back</NavLink>{" "}
//       </button>
//       <div className={css.detailsCart}>
//         <div className={css.cartImagBut}>
//            <img src={`https://image.tmdb.org/t/p/w200/${detail.poster_path}`} alt={detail.title} />
//         </div>
//         <div className={css.cartCont}>
//           <div className={css.cartTitle}>
//             <h3 className={css.comTitle}>{detail.title}</h3>
//             <p className={css.comDate}>({detail.release_date})</p>
//           </div>
//           <div className={css.cartComent}>
//             <h4 className={css.comTitles}> User Score : </h4>
//             <p className={css.comIte}>({detail.vote_average}%)</p>
//           </div>
//           <div className={css.cartComent}>
//             <h4 className={css.comTitlesOv}> Overview : </h4>
//             <p className={css.comItes}>{detail.overview}</p>
//           </div>
//           <div className={css.cartComent}>
//             <h4 className={css.comTitles}> Status : </h4>
//             <p className={css.comIte}>{detail.status}</p>
//           </div>
//         </div>
//       </div>
//       <section className={css.cartSection}>
//         <h2>Additional information</h2>
//         <ul>
//           <li>
//             <Link to="cast">
//               {" "}
//               <h3 className={css.comTitles}>Cast</h3>{" "}
//             </Link>
//           </li>
//           <li>
//             <Link to="reviews">
//               <h3 className={css.comTitles}>Reviews</h3>{" "}
//             </Link>
//           </li>
//           <li>
//             <p className={css.com}>
//               {" "}
//               Plese use this link to go Home <Link to="/">back to home</Link>
//             </p>
//           </li>
//         </ul>
//         <Outlet />
//       </section>
//       <Suspense fallback={<div>LOADING DetailsVideo...</div>}>
//         <Outlet />
//       </Suspense>
//     </div>
//   ); */}
