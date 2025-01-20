// BookingForm
import css from "./BookingForm.module.css";
import { Formik, Form, Field } from "formik";
import { useDispatch } from "react-redux";
import { reservation } from "../../redux/campers/operations";
// reservation - запит на БЕКенд який повертає обєкт з даннними для бронювання (name: " ",email, password)

export default function BookingForm() {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    console.log(values);
    dispatch(reservation(values));
    actions.resetForm();
  };
  return (
    <div className={css.item}>
      <Formik
        initialValues={{
          name: "",
          email: "",
          bookingdate: "",
          comment: "",
        }}
        onSubmit={handleSubmit}
      >
        <Form>
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
          </div>

          <div className={css.items}>
            <label className={css.label} htmlFor="bookingdate">
              Booking date
            </label>
            <Field
              className={css.inp}
              type="text"
              id="bookingdate"
              name="bookingdate"
              placeholder="Enter booking date..."
            />
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
          </div>

          <div className={css.buttonSend}>
            <button className={css.btnSend} type="submit">
              Send
            </button>
          </div>
        </Form>
      </Formik>
    </div>
  );
}
