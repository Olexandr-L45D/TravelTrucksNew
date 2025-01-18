import css from "./TruckPage.module.css";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import TruckList from "../../components/TruckList/TruckList";
import { fetchAllTruck } from "../../redux/campers/operations";
import { selectLoading } from "../../redux/campers/selectors";
import AllTruckList from "../../components/AllTruckList/AllTruckList";

export default function TruckPage() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoading);
  const [trucks, setTrucks] = useState([]);

  // useEffect(() => {
  //   dispatch(fetchAllTruck()); // Завантажуємо дані без локального стану
  // }, [dispatch]);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await dispatch(fetchAllTruck()).unwrap();
        setTrucks(data);
      } catch (error) {
        console.error("Помилка завантаження даних:", error);
      }
    }
    fetchData();
  }, [dispatch]);

  return (
    <div className={css.cartPage}>
      <h1 className={css.cartTitle}>Your All Panel</h1>
      <div>{isLoading && "Request in progress..."}</div>
      <AllTruckList trucks={trucks} />
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
