import css from "./SearchBoxFiltr.module.css";
import { useDispatch, useSelector } from "react-redux";
import sprite from "../../images/sprite.svg";
import { resetFilters, setFilter } from "../../redux/filters/slice";
import { selectStatusFilter } from "../../redux/filters/selectors";

import { useSearchParams } from "react-router-dom";
import { useState } from "react";
import { useCallback } from "react";

export default function SearchBoxFiltr() {
  const dispatch = useDispatch();
  const filter = useSelector(selectStatusFilter); // Отримуємо фільтр із Redux
  const [params, setParams] = useSearchParams();
  const [error, setError] = useState("");

  // Обробка форми
  const handleSubmit = event => {
    event.preventDefault();
    const locationValue = event.target.elements.owner.value.trim();
    if (!locationValue) {
      setError("Please enter a location."); // Встановлюємо помилку
      return;
    }

    setError(""); // Скидаємо помилку, якщо введення валідне
    params.set("owner", locationValue);
    setParams(params);
    dispatch(setFilter({ filterName: "location", value: locationValue })); // Оновлюємо Redux-стан
    event.target.reset();
  };

  // Обробка кліку на опцію
  // const handleOptionClick = option => {
  //   dispatch(
  //     setFilter({
  //       filterName: option,
  //       value: !filter?.filters?.[option], // Перевірка на існування `filters`
  //     })
  //   );
  // };
  const handleOptionClick = useCallback(
    option => {
      dispatch(
        setFilter({
          filterName: option,
          value: !filter?.filters?.[option], // Перевірка на існування `filters`
        })
      );
    },
    [dispatch, filter]
  );
  // Зміна місця розташування
  const handleLocationChange = event => {
    const locationValue = event.target.value;
    dispatch(setFilter({ filterName: "location", value: locationValue }));
  };

  // Якщо `filters` не визначений
  // if (!filter || !filter.filters) {
  //   return <p>Loading filters...</p>;
  // }

  if (!filter || Object.keys(filter).length === 0) {
    return <p>Loading filters...</p>;
  }

  // Скидання фільтрів
  const handleReset = () => {
    dispatch(resetFilters());
  };

  return (
    <div className={css.item}>
      <h5 className={css.paragraf}>Find truck by location</h5>
      <form onSubmit={handleSubmit}>
        <label className={css.label}>
          Location:
          <input
            type="text"
            name="owner"
            onChange={handleLocationChange}
            placeholder="Enter location"
          />
        </label>
        <h4>Vehicle equipment</h4>
        <div className={css.itemsCont}>
          <div className={css.items}>
            <p
              className={`${css.iconCard} ${
                filter.filters.water ? css.active : ""
              }`}
              onClick={() => handleOptionClick("water")}
            >
              <svg className={css.icon}>
                <use href={`${sprite}#icon-ac`} />
              </svg>
              AC
            </p>
          </div>
          <div className={css.items}>
            <p
              className={`${css.iconCard} ${
                filter.filters.kitchen ? css.active : ""
              }`}
              onClick={() => handleOptionClick("kitchen")}
            >
              <svg className={css.icon}>
                <use href={`${sprite}#icon-kitch`} />
              </svg>
              Kitchen
            </p>
          </div>
        </div>
        <div className={css.itemsCont}>
          <div className={css.items}>
            <p
              className={`${css.iconCard} ${
                filter.filters.AC ? css.active : ""
              }`}
              onClick={() => handleOptionClick("AC")}
            >
              <svg className={css.icon}>
                <use href={`${sprite}#icon-tv`} />
              </svg>
              TV
            </p>
          </div>
          <div className={css.items}>
            <p
              className={`${css.iconCard} ${
                filter.filters.bathroom ? css.active : ""
              }`}
              onClick={() => handleOptionClick("bathroom")}
            >
              <svg className={css.icon}>
                <use href={`${sprite}#icon-bathroom`} />
              </svg>
              Bathroom
            </p>
          </div>
          <div className={css.items}>
            <p
              className={`${css.iconCard} ${
                filter.filters.van ? css.active : ""
              }`}
              onClick={() => handleOptionClick("van")}
            >
              <svg className={css.icon}>
                <use href={`${sprite}#icon-van`} />
              </svg>
              Van
            </p>
          </div>
        </div>
        <button type="button" onClick={handleReset}>
          Reset Filters
        </button>
        <div className={css.buttonIconSearch}>
          {error && <p className={css.error}>{error}</p>}
          <button className={css.btnSearch} type="submit">
            Search
          </button>
        </div>
      </form>
    </div>
  );
}
