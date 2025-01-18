// UserMenu
import css from "./UserMenu.module.css";
import FilterPanel from "../../components/FilterPanel/FilterPanel";
import SearchBox from "../../components/SearchBox/SearchBox";

export default function UserMenu() {
  // const dispatch = useDispatch();

  return (
    <div className={css.wrapper}>
      <h1 className={css.cartTitle}>FilterPanel</h1>
      <FilterPanel />
      <SearchBox />
    </div>
  );
}
