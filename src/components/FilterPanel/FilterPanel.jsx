import css from "./FilterPanel.module.css";
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

import { useDispatch } from "react-redux";

import { setFilter } from "../../redux/campers/slice";

const FilterPanel = () => {
  const dispatch = useDispatch();

  const handleNameChange = event => {
    const nameValue = event.target.value;
    dispatch(setFilter({ filterName: "name", value: nameValue })); // Оновлюємо фільтр
  };

  const handlePriceChange = event => {
    const priceValue = event.target.value;
    dispatch(setFilter({ filterName: "price", value: Number(priceValue) })); // Оновлюємо фільтр
  };

  const handleRatingChange = event => {
    const ratingValue = event.target.value;
    dispatch(setFilter({ filterName: "rating", value: Number(ratingValue) })); // Оновлюємо фільтр
  };

  const handleLocationChange = event => {
    const locationValue = event.target.value;
    dispatch(setFilter({ filterName: "location", value: locationValue })); // Оновлюємо фільтр
  };

  return (
    <div className={css.item}>
      <div className={css.items}>
        <label className={css.label}>
          Name:
          <input
            className={css.inp}
            type="text"
            onChange={handleNameChange}
            placeholder="Введіть ім'я"
          />
        </label>
      </div>
      <div className={css.items}>
        <label className={css.label}>
          Price:
          <input
            className={css.inp}
            type="number"
            onChange={handlePriceChange}
            placeholder="Введіть ціну"
          />
        </label>
      </div>
      <div className={css.items}>
        <label className={css.label}>
          Rating (мін):
          <input
            className={css.inp}
            type="number"
            step="0.1"
            onChange={handleRatingChange}
            placeholder="Введіть рейтинг"
          />
        </label>
      </div>
      <div className={css.items}>
        <label className={css.label}>
          Location:
          <input
            className={css.inp}
            type="text"
            onChange={handleLocationChange}
            placeholder="Введіть локацію"
          />
        </label>
      </div>
    </div>
  );
};

export default FilterPanel;
