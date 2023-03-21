import { Outlet } from "react-router";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";

import styles from "./styles/App.module.sass";

function App() {
  return (
    <div className={styles.appContainer}>
      <Header />
      <div className={styles.mainContainer}>
        <div>
          <Sidebar />
        </div>
        <div className={styles.mainContent}>
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default App;
