import { Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { useEffect } from "react";

const HomePage = lazy(() => import("../../pages/HomePage/HomePage"));

const TruckPage = lazy(() => import("../../pages/TruckPage/TruckPage"));
const NotFoundPage = lazy(() => import("../../pages/NotFoundPage"));

import { Layout } from "../Layout/Layout";

// import PrivateRoute from "../../components/PrivateRoute";

export default function App() {
  // const dispatch = useDispatch();
  // const isRefreshing = useSelector(selectIsRefreshing);
  // // запит на ТОКЕН isRefreshing (чи валідний токен?)
  // useEffect(() => {
  //   dispatch(refreshUser());
  // }, [dispatch]);

  return (
    <Layout>
      <Suspense fallback={null}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/catalog" element={<TruckPage />} />

          {/* <Route
            path="/catalog"
            element={
              <PrivateRoute redirectTo="/:id" component={<TruckPage />} />
            }
          /> */}
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </Layout>
  );
}
