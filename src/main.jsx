import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import "modern-normalize";
import "./index.css";
import "../i18n"; // Імпорт налаштувань i18next для перекладу мови
import App from "./components/App/App";
// 1. Імпортуємо провайдер
import { Provider } from "react-redux";
import { store } from "../src/redux/store";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Suspense fallback={<div>Loading translations...</div>}>
          <App />
        </Suspense>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
