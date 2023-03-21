import { useEffect } from "react";
import { useQuery } from "react-query";
import { useLocation, useParams } from "react-router";

import Products from "../components/Products";
import { getByCategory, getCategories } from "../services/fetchAPI";

import styles from "../styles/routes/Categories.module.sass";

interface CategoryProps {
  id: string;
  name: string;
}

function Categories() {
  const { id } = useParams();

  const { data, refetch, isRefetching, isLoading } = useQuery(
    "category-data",
    () => getByCategory(id),
    { refetchOnWindowFocus: false },
  );

  const { data: categoriesData } = useQuery<CategoryProps[]>("categories", getCategories);

  const getCategoryNameByID = (id: string | undefined): string | undefined => {
    if (typeof id === "string") {
      const category = categoriesData?.find((category) => category.id === id);
      return category?.name;
    }
  };

  useEffect(() => {
    refetch();
  }, [id]);

  if (isLoading || isRefetching)
    return (
      <main className={styles.loading}>
        <h3>Carregando...</h3>
      </main>
    );

  return (
    <main className={styles.main}>
      <h3>Exibindo resultados da categoria: "{getCategoryNameByID(id)}"</h3>
      <Products data={data} />
    </main>
  );
}

export default Categories;
