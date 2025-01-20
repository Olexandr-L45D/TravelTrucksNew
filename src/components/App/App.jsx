import { Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { useEffect } from "react";

const HomePage = lazy(() => import("../../pages/HomePage/HomePage"));

const TruckPageFilters = lazy(() =>
  import("../../pages/TruckPageFilters/TruckPageFilters")
);
// const TruckPage = lazy(() => import("../../pages/TruckPage/TruckPage"));
const TruckDetalsPage = lazy(() =>
  import("../../pages/TruckDetalsPage/TruckDetalsPage")
);
const NotFoundPage = lazy(() => import("../../pages/NotFoundPage"));

import { Layout } from "../Layout/Layout";

export default function App() {
  return (
    <Layout>
      <Suspense fallback={null}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/catalog" element={<TruckPageFilters />} />
          <Route path="/catalog/:id" element={<TruckDetalsPage />} />

          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </Layout>
  );
}

/* <Route path="features" element={<TruckFeatures />} /> */
// <Route path="reviews" element={<TruckReviews />} />
/* <Route path="/catalog" element={<TruckPage />} />; */
