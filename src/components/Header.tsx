import InputSearch from "./InputSearch";
import { FaShoppingCart } from "react-icons/fa";
import styles from "../styles/components/Header.module.sass";

function Header() {
  return (
    <header className={ styles.headerWrapper }>
      <div>
        <h1>Front Store</h1>
      </div>
      <InputSearch />
      <div>
        <FaShoppingCart size={30} />
      </div>
    </header>
  );
}

export default Header;
