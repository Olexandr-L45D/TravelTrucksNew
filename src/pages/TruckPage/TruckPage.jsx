import css from "./TruckPage.module.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import TruckList from "../../components/TruckList/TruckList";
import FilterPanel from "../../components/FilterPanel/FilterPanel";
import { fetchAllTruck } from "../../redux/campers/operations";
import { selectLoading } from "../../redux/campers/selectors";
import SearchBox from "../../components/SearchBox/SearchBox";

export default function TruckPage() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoading);

  useEffect(() => {
    dispatch(fetchAllTruck()); // Завантажуємо дані без локального стану
  }, [dispatch]);

  return (
    <div className={css.cartPage}>
      <h1 className={css.cartTitle}>Your FilterPanel Card </h1>
      <FilterPanel />
      <div>{isLoading && "Request in progress..."}</div>
      <SearchBox />
      <TruckList />
    </div>
  );
}

// const [campers, setProduct] = useState([]);
// useEffect(() => {
//   async function fetchData() {
//     try {
//       const data = await dispatch(fetchAllTruck()).unwrap();
//       setProduct(data);
//     } catch (error) {
//       console.error("Помилка завантаження даних:", error);
//     }
//   }
//   fetchData();
// }, [dispatch]);
// campers.length > 0 && <ContactList campers={campers} />;
