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
  const [filters, setFilters] = useState(null); // Ініціалізуємо стан
  const [allTrucks, setAllTrucks] = useState([]);
  const [filteredTrucks, setFilteredTrucks] = useState([]);
  // const trucks = useSelector(state => state.campers.trucks);
  //   const status = useSelector(state => state.campers.status);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await dispatch(fetchAllTruck()).unwrap();
        setAllTrucks(data);
        setFilteredTrucks(data); // Встановлюємо початковий стан
      } catch (error) {
        console.error("Error loading data...:", error);
      }
    }
    fetchData();
  }, [dispatch]);
  // юзефект до початкового стану фільтра setFilters(data)

  useEffect(() => {
    const loadData = async () => {
      try {
        const trucks = await dispatch(fetchAllTruck());

        setFilters(trucks);
      } catch (err) {
        console.error(err);
      }
    };
    loadData();
  }, [dispatch]);
  // Логіка фільтрації
  useEffect(() => {
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
      <SearchBoxFiltr filters={filters} />
      <div>{isLoading && <Loader />}</div>
      <AllTruckList trucks={filteredTrucks} />
    </div>
  );
}
