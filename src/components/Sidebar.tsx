import { useQuery } from "react-query";
import { Link } from "react-router-dom";

import { getCategories } from "../services/fetchAPI";

import styles from "../styles/components/Sidebar.module.sass";

interface CategoryProps {
  id: number;
  name: string;
}

function Sidebar() {
  const { data, isLoading } = useQuery("categories", getCategories);

  return (
    <aside className={styles.aside}>
      <h3>Categorias</h3>
      <hr />
      {isLoading && <p>Loading...</p>}
      {data && (
        <ul>
          {data?.map((category: CategoryProps) => (
            <li key={category.id}>
              <Link to={`/categories/${category.id}`}>
                {category.name}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </aside>
  );
}

export default Sidebar;
