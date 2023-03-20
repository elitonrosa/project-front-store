import { JSXElementConstructor } from "react";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";

import { getCategories } from "../services/fetchAPI";
import styles from "../styles/components/Categories.module.sass";

interface CategoryProps {
  id: number,
  name: string,
}

function Categories() {
  const { data, isLoading } = useQuery("categories", getCategories);

  return (
    <aside className={styles.aside}>
      {isLoading && <p>Loading...</p>}
      {data && (
        <ul>
          {data?.map((category: CategoryProps) => (
            <li key={category.id}>
              <p>{category.name}</p>
            </li>
          ))}
        </ul>
      )}
    </aside>
  );
}

export default Categories;
