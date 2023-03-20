import { Outlet } from "react-router";
import Categories from "./components/Categories";
import Header from "./components/Header";

import styles from "./styles/App.module.sass";

function App() {
  return (
    <div className={ styles.appContainer }>
      <Header />
      <div className={ styles.mainContainer }>
        <Categories />
        <Outlet />
      </div>
    </div>
  );
}

export default App;
