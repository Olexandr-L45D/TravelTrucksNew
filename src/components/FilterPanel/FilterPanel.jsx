import css from "./FilterPanel.module.css";
import sprite from "../../images/sprite.svg";
import { useDispatch } from "react-redux";

import { setFilter } from "../../redux/filters/slice";

const FilterPanel = () => {
  const dispatch = useDispatch();
  const handleLocationChange = event => {
    const locationValue = event.target.value;
    dispatch(setFilter({ filterName: "location", value: locationValue })); // Оновлюємо фільтр
  };

  // const handleACChange = event => {
  //   const nameValue = event.target.value;
  //   dispatch(setFilter({ filterName: "AC", value: nameValue })); // Оновлюємо фільтр
  // };

  // const handlePriceChange = event => {
  //   const priceValue = event.target.value;
  //   dispatch(setFilter({ filterName: "price", value: Number(priceValue) })); // Оновлюємо фільтр
  // };

  // const handleRatingChange = event => {
  //   const ratingValue = event.target.value;
  //   dispatch(setFilter({ filterName: "rating", value: Number(ratingValue) })); // Оновлюємо фільтр
  // };

  return (
    <div className={css.item}>
      <div className={css.items}>
        <label className={css.label}>
          Location:
          <input
            className={css.inp}
            type="text"
            onChange={handleLocationChange}
            placeholder="enter location"
          />
        </label>
      </div>
      <h4>Vehicle equipment</h4>
      <div className={css.itemsCont}>
        <div className={css.items}>
          <p className={css.iconCard}>
            <svg className={css.icon}>
              <use href={`${sprite}#icon-ac`} />
            </svg>
            AC
          </p>
        </div>
        <div className={css.items}>
          <p className={css.iconCard}>
            <svg className={css.icon}>
              <use href={`${sprite}#icon-aut`} />
            </svg>
            Automatic
          </p>
        </div>
        <div className={css.items}>
          <p className={css.iconCard}>
            <svg className={css.icon}>
              <use href={`${sprite}#icon-kitch`} />
            </svg>
            kitchen
          </p>
        </div>
      </div>
      <div className={css.itemsCont}>
        <div className={css.items}>
          <p className={css.iconCard}>
            <svg className={css.icon}>
              <use href={`${sprite}#icon-tv`} />
            </svg>
            TV
          </p>
        </div>
        <div className={css.items}>
          <p className={css.iconCard}>
            <svg className={css.icon}>
              <use href={`${sprite}#icon-bathroom`} />
            </svg>
            Bathroom
          </p>
        </div>
        <div className={css.items}>
          <p className={css.iconCard}>
            <svg className={css.icon}>
              <use href={`${sprite}#icon-van`} />
            </svg>
            Van
          </p>
        </div>
      </div>
    </div>
  );
};

export default FilterPanel;

// import { Formik, Form, Field } from "formik";
// import { ErrorMessage } from "formik";
// // import { useDispatch } from "react-redux";
// // import { addContact } from "../../redux/campers/operations";
// import toast, { Toaster } from "react-hot-toast";
// const notify = () => toast("You added a contact.");

// export default function ContactForm() {
//   // const dispatch = useDispatch();
//   const handleSubmit = (values, actions) => {
//     // dispatch(addContact(values));
//     actions.resetForm();
//   };
//   return (
//     <div className={css.item}>
//       <Formik
//         initialValues={{
//           name: " ",
//           number: " ",
//         }}
//         onSubmit={handleSubmit}
//       >
//         <Form>
//           <div className={css.items}>
//             <label className={css.label}>Name</label>
//             <Field
//               className={css.inp}
//               type="text"
//               name="name"
//               placeholder="Enter name..."
//             />
//             <ErrorMessage className={css.messag} name="name" component="span" />
//           </div>
//           <div className={css.items}>
//             <label className={css.label}>Number</label>
//             <Field
//               className={css.inp}
//               type="text"
//               name="number"
//               placeholder="Enter number"
//             />
//             <ErrorMessage
//               className={css.messag}
//               name="number"
//               component="span"
//             />
//           </div>
//           <div className={css.btn}>
//             <button onClick={notify} className={css.addContact} type="submit">
//               Add contact
//             </button>
//             <Toaster />
//           </div>
//         </Form>
//       </Formik>
//     </div>
//   );
// }
