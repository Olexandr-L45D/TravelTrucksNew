// UserMenu
import css from "./UserMenu.module.css";

export default function UserMenu() {
  // const dispatch = useDispatch();

  return (
    <div className={css.wrapper}>
      <p className={css.username}>Welcome</p>
      <button
        className={css.button}
        // onClick={() => dispatch(logOut())}
        type="button"
      >
        Logout
      </button>
    </div>
  );
}
