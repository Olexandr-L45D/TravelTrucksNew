// import css from "./ContactList.module.css";
// import Contact from "../Contact/Contact";
// import { selectOutCampers } from "../../redux/campers/selectors";
import { useSelector } from "react-redux";
import { selectFilteredItems } from "../../redux/selected/selectors";

const TruckList = () => {
  const filteredItems = useSelector(selectFilteredItems);
  console.log("Відфільтровані елементи:", filteredItems); // Перевірка даних
  if (!filteredItems || filteredItems.length === 0) {
    return <p>Немає доступних даних</p>;
  }
  // if (!campers || campers.length === 0) {
  //   return <p>No data available...</p>;
  // }
  return (
    <ul>
      {filteredItems.map(truck => (
        <li key={truck.id}>
          <h4>{truck.name}</h4>
          <p>Ціна: {truck.price}</p>
          <p>Рейтинг: {truck.rating}</p>
          <p>Локація: {truck.location}</p>
        </li>
      ))}
    </ul>
  );
};
export default TruckList;

//  <ul>
//    {filteredItems.map(truck => (
//      <li key={truck.id}>
//        <h4>{truck.name}</h4>
//        <p>Ціна: {truck.price}</p>
//        <p>Рейтинг: {truck.rating}</p>
//        <p>Локація: {truck.location}</p>
//      </li>
//    ))}
//  </ul>;
