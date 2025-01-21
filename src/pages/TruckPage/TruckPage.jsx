import css from "./TruckPage.module.css";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllTruck } from "../../redux/campers/operations";
import { selectLoading } from "../../redux/campers/selectors";
import AllTruckList from "../../components/AllTruckList/AllTruckList";
import Loader from "../../components/Loader/Loader";
import SearchBoxFiltr from "../../components/SearchBoxFiltr/SearchBoxFiltr";

export default function TruckPage() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoading);
  const [trucks, setTrucks] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await dispatch(fetchAllTruck()).unwrap();
        setTrucks(data);
      } catch (error) {
        if (error.response?.status === 429) {
          // Перевіряємо статус відповіді
          console.error("Rate limit exceeded, retrying...");
          setTimeout(() => {
            fetchData(); // Викликаємо функцію повторно через 5 секунд
          }, 5000);
        } else {
          console.error("Error loading data...", error);
        }
      }
    }

    fetchData(); // Виклик функції
  }, [dispatch]);

  return (
    <div className={css.cartAllPage}>
      <SearchBoxFiltr />
      <div>{isLoading && <Loader />}</div>
      <AllTruckList trucks={trucks} />
    </div>
  );
}
