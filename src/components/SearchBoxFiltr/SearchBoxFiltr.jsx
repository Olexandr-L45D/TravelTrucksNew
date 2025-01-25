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
  const filter = useSelector(selectStatusFilter);
  const [params, setParams] = useSearchParams();
  const [error, setError] = useState("");

  // Обробка сабміту форми
  const handleSubmit = event => {
    event.preventDefault();
    const locationValue = event.target.elements.owner.value.trim();

    if (!locationValue) {
      setError("Please enter a location.");
      return;
    }

    setError("");
    params.set("owner", locationValue);
    setParams(params);
    dispatch(setFilter({ filterName: "location", value: locationValue }));
  };

  // Обробка вибору чекбоксів // location: "Ukraine, Kyiv"
  const handleOptionClick = useCallback(() => {
    console.log("Dispatching filter: Ukraine, Kyiv");
    dispatch(setFilter({ filterName: "location", value: "Ukraine, Kyiv" }));
  }, [dispatch]);

  const handleReset = () => {
    dispatch(resetFilters());
  };
  if (!filter || !filter.filters) {
    return <p>Loading filters...</p>;
  }

  return (
    <div className={css.item}>
      <h5 className={css.paragraf}>Find truck by location</h5>
      <form onSubmit={handleSubmit}>
        {/* Поле локації */}
        <label className={css.label}>
          Location:
          <input type="text" name="owner" placeholder="Enter location" />
        </label>

        {/* Секція чекбоксів */}
        <h4>Vehicle equipment</h4>
        <div className={css.itemsCont}>
          {[
            { name: "kitchen", icon: "icon-kitch", label: "Kitchen" },
            { name: "AC", icon: "icon-ac", label: "AC" },
            { name: "bathroom", icon: "icon-bathroom", label: "Bathroom" },
            { name: "van", icon: "icon-van", label: "Van" },
            { name: "TV", icon: "icon-tv", label: "TV" },
          ].map(option => (
            <div key={option.name} className={css.items}>
              <p
                className={`${css.iconCard} ${
                  filter.filters[option.name] ? css.active : ""
                }`}
                onClick={() => handleOptionClick(option.name)}
              >
                <svg className={css.icon}>
                  <use href={`${sprite}#${option.icon}`} />
                </svg>
                {option.label}
              </p>
            </div>
          ))}
        </div>

        {/* Кнопки для скидання та сабміту */}
        <button className={css.btnReset} type="button" onClick={handleReset}>
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
