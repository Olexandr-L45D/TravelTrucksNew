import css from "./SearchBox.module.css";
import { useDispatch, useSelector } from "react-redux";
// import { selecFilter, changeFilter } from '../../redux/filtersSlice'
import { setChangeFilter } from "../../redux/filters/slice";
import { selectStatusFilter } from "../../redux/filters/selectors";
// import { selectFilteredItems } from "../../redux/selected/selectors";
// import { setFilter } from "../../redux/campers/slice";

import { useSearchParams } from "react-router-dom";

export default function SearchBox() {
  const dispatch = useDispatch();
  const filter = useSelector(selectStatusFilter);
  const [params, setParams] = useSearchParams();

  const handleSubmit = event => {
    event.preventDefault();
    params.set("owner", event.target.elements.owner.value);
    setParams(params);
    event.target.reset();
  };

  const handleFilterChange = e => dispatch(setChangeFilter(e.target.value));

  return (
    <div className={css.item}>
      <h5 className={css.paragraf}>Finde truck by name</h5>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="owner"
          value={filter}
          onChange={handleFilterChange}
        />
        <button className={css.btn} type="submit">
          Search
        </button>
      </form>
    </div>
  );
}

// Оновлюємо фільтр за назвою
// dispatch(setFilter({ filterName: "price", value: 5000 }));

// const filter = useSelector(selectStatusFilter);
//  dispatch(setFilter({ filterName: "name", value: "Road Bear" }));
