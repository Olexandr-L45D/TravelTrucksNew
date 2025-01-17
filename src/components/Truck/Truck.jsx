import css from "./Contact.module.css";
import { BsFillPersonFill } from "react-icons/bs";

// import { useDispatch } from "react-redux";
// import { deleteContact } from "../../redux/campers/operations";
import { Toaster } from "react-hot-toast";
// import { resetFilters, setFilter } from "../../redux/campers/slice";
// const notify = () => toast('You Delete a contact.');

export default function Truck({ truck = {} }) {
  // const dispatch = useDispatch();
  // Оновлюємо фільтр за назвою
  // dispatch(setFilter({ filterName: "name", value: "Road Bear" }));
  // Оновлюємо фільтр за ціною
  // dispatch(setFilter({ filterName: "price", value: 5000 }));
  const handleKlick = () => {
    // dispatch(deleteContact(contact.id));
    // dispatch(resetFilters());
  };

  return (
    <div className={css.item}>
      <div className={css.itemText}>
        <p className={css.text}>
          <BsFillPersonFill />
          {truck.name}
        </p>
        <p className={css.text}>{truck.price}</p>
        <p className={css.text}>{truck.rating}</p>
        <p className={css.text}>{truck.location}</p>
      </div>
      <button className={css.btn} onClick={handleKlick}>
        Cklik
      </button>
      <Toaster />
    </div>
  );
}

// const MyComponent = () => {
//     // 2. Отримуємо посилання на функцію відправки екшенів
//     const dispatch = useDispatch();
//     // 3. Функція селектор стану (належить слайсу тому що отримує частинку слайсу)
//     const items = useSelector(deleteContact);
// };

// export default function Contact({ obj: { id, name, number }, onDelete }) - old Exemple!
