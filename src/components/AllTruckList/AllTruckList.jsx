// AllTruckList
import { Link, useLocation } from "react-router-dom";
import css from "./AllTruckList.module.css";

export default function AllTruckList({ trucks }) {
  const location = useLocation();
  return (
    <div className={css.container}>
      <ul className={css.list}>
        {trucks.map(truck => (
          <li key={truck.id}>
            <Link to={`/campers/${truck.id}`} state={location}>
              <h4 className={css.titles}>{truck.name}</h4>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

// const AllTruckList = ({ trucks }) => {
//   if (!trucks || trucks.length === 0) {
//     return <p>Немає доступних даних</p>;
//   }

//   return (
//     <ul>
//       {trucks.map(truck => (
//         <li key={truck.id}>
//           <h4>{truck.name}</h4>
//           <p>Ціна: {truck.price}</p>
//           <p>Рейтинг: {truck.rating}</p>
//           <p>Локація: {truck.location}</p>
//         </li>
//       ))}
//     </ul>
//   );
// };

// export default AllTruckList;
