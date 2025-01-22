import css from "./BookingForm.module.css";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function BookingForm() {
  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    bookingDate: Yup.date()
      .min(new Date(), "Booking date cannot be in the past")
      .required("Booking date is required"),
    comment: Yup.string().max(200, "Comment cannot exceed 200 characters"),
  });

  const handleSubmit = (values, actions) => {
    toast.success("Booking successful!");
    actions.resetForm();
  };
  return (
    <div className={css.item}>
      <ToastContainer
        position="top-right"
        autoClose={5000} // 5 seconds
        hideProgressBar={false}
        newestOnTop={true}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
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
            <Field type="hidden" id="truckId" name="truckId" />
            <div className={css.formGroup}>
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

            <div className={css.formGroup}>
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

            <div className={css.formGroup}>
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

            <div className={css.formGroup}>
              <label className={css.label} htmlFor="comment">
                Comment
              </label>
              <Field
                className={css.inptextarea}
                as="textarea"
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

//  <ToastContainer position="top-right" autoClose={3000} />;
// const payload = {
//   name: values.name, // Ім'я з форми
//   email: values.email, // Email з форми
//   bookingDate: values.bookingDate, // Дата бронювання
//   comment: values.comment || "", // Коментар (опціональний)
//   truckId: selectedTruck?.id, // ID автівки, яку бронюємо
// };
