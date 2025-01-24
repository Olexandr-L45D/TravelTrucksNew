import css from "./TruckPageFilters.module.css";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllTruck } from "../../redux/campers/operations";
import { selectLoading } from "../../redux/campers/selectors";
import AllTruckList from "../../components/AllTruckList/AllTruckList";
import Loader from "../../components/Loader/Loader";
import SearchBoxFiltr from "../../components/SearchBoxFiltr/SearchBoxFiltr";
import { selectStatusFilter } from "../../redux/filters/selectors";

export default function TruckPageFilters() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoading);
  const filteres = useSelector(selectStatusFilter); // Додано
  const [allTrucks, setAllTrucks] = useState([]); // Всі вантажівки
  const [filteredTrucks, setFilteredTrucks] = useState([]); // Фільтровані вантажівки
  // const trucks = useSelector(state => state.campers.items); // Приклад вибірки з Redux
  const isFetched = useSelector(state => state.campers.isFetched); // Флаг стану

  useEffect(() => {
    async function fetchData() {
      try {
        if (!isFetched) {
          const data = await dispatch(fetchAllTruck()).unwrap();
          setAllTrucks(data); // Зберігаємо всі вантажівки
          setFilteredTrucks(data); // Встановлюємо початковий стан для фільтрації
        }
      } catch (error) {
        if (error.response?.status === 429) {
          console.error("Rate limit exceeded, retrying...");
          setTimeout(() => {
            fetchData(); // Викликаємо функцію повторно через 5 секунд
          }, 5000);
        } else {
          console.error("Error loading data...", error);
        }
      }
    }

    fetchData();
  }, [dispatch, isFetched]);

  // Фільтрація даних
  useEffect(() => {
    if (!filteres || allTrucks.length === 0) return; // Перевіряємо, чи є дані для фільтрації

    const filtered = allTrucks.filter(truck => {
      const matchesLocation = filteres.location
        ? truck.location.toLowerCase().includes(filteres.location.toLowerCase())
        : true;

      const matchesFeatures = Object.keys(filteres)
        .filter(key => key !== "location")
        .every(key => !filteres[key] || truck[key]);

      return matchesLocation && matchesFeatures;
    });

    setFilteredTrucks(filtered);
  }, [filteres, allTrucks]);

  return (
    <div className={css.cartAllPage}>
      <SearchBoxFiltr filters={filteredTrucks} />
      <div>{isLoading && <Loader />}</div>
      <AllTruckList trucks={filteredTrucks} />
    </div>
  );
}
