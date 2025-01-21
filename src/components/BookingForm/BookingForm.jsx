import css from "./BookingForm.module.css";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { reservation } from "../../redux/campers/operations";
import { toast } from "react-toastify";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// reservation - запит на БЕКенд який повертає обєкт з даннними для бронювання (name: " ",email, password)
export default function BookingForm() {
  const dispatch = useDispatch();

  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    bookingDate: Yup.string()
      .test("is-valid-date", "Booking date cannot be in the past", value => {
        if (!value) return false;
        const selectedDate = new Date(value);
        const today = new Date();
        today.setHours(0, 0, 0, 0); // Скидаємо час для порівняння тільки за датою
        return selectedDate >= today; // Дата має бути сьогодні або в майбутньому
      })
      .required("Booking date is required"),
    comment: Yup.string().max(500, "Comment cannot exceed 500 characters"),
  });

  const selectedTruck = useSelector(state => state.campers.selectedTruck);

  const handleSubmit = async (values, actions) => {
    if (!selectedTruck) {
      toast.error("No truck selected for booking.");
      return;
    }
    // const payload = {
    //   ...values, //вводимо name, email, bookingDate, comment
    //   truckId: selectedTruck.id, // ID автівки, яку бронюємо
    // };
    const payload = {
      name: values.name, // Ім'я з форми
      email: values.email, // Email з форми
      bookingDate: values.bookingDate, // Дата бронювання
      comment: values.comment || "", // Коментар (опціональний)
      truckId: selectedTruck?.id, // ID автівки, яку бронюємо
    };

    try {
      await dispatch(reservation(payload)).unwrap(); // Відправка через redux thunk
      toast.success("Vehicle successfully booked!");
      actions.resetForm({
        values: {
          name: "",
          email: "",
          bookingDate: "",
          comment: "",
        },
      }); // Очищення форми після відправки
    } catch (error) {
      toast.error("Failed to book vehicle! Please try again.", error.message);
    }
  };
  return (
    <div className={css.item}>
      <ToastContainer position="top-right" autoClose={3000} />
      <Formik
        initialValues={{
          name: "",
          email: "",
          bookingDate: "",
          comment: "",
        }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ errors, touched }) => (
          <Form>
            <Field
              type="hidden"
              id="truckId"
              name="truckId"
              value={selectedTruck ? selectedTruck.id : ""}
            />
            <div className={css.items}>
              <label className={css.label} htmlFor="name">
                Name
              </label>
              <Field
                className={css.inp}
                type="text"
                id="name"
                name="name"
                placeholder="Enter name..."
              />
              {errors.name && touched.name && <div>{errors.name}</div>}
            </div>

            <div className={css.items}>
              <label className={css.label} htmlFor="email">
                Email
              </label>
              <Field
                className={css.inp}
                type="email"
                id="email"
                name="email"
                placeholder="Enter email..."
              />
              {errors.email && touched.email && <div>{errors.email}</div>}
            </div>

            <div className={css.items}>
              <label className={css.label} htmlFor="bookingDate">
                Booking date
              </label>
              <Field
                className={css.inp}
                type="date"
                id="bookingDate"
                name="bookingDate"
                placeholder="Enter booking date..."
              />
              {errors.bookingDate && touched.bookingDate && (
                <div>{errors.bookingDate}</div>
              )}
            </div>

            <div className={css.items}>
              <label className={css.label} htmlFor="comment">
                Comment
              </label>
              <Field
                className={css.inp}
                as="textarea" // Використовуємо textarea
                id="comment"
                name="comment"
                placeholder="Enter your comment..."
              />
              {errors.comment && touched.comment && <div>{errors.comment}</div>}
            </div>

            <div className={css.buttonSend}>
              <button className={css.btnSend} type="submit">
                Send
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}
