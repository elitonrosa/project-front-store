import InputSearch from "./SearchInput";
import { FaShoppingCart } from "react-icons/fa";
import styles from "../styles/components/Header.module.sass";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className={styles.headerWrapper}>
      <div>
        <Link to="/">
          <h1>Front Store</h1>
        </Link>
      </div>
      <InputSearch />
      <div>
        <FaShoppingCart size={30} />
      </div>
    </header>
  );
}

export default Header;
