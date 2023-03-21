import { useEffect } from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router";

import Products from "../components/Products";
import { searchByQuery } from "../services/fetchAPI";

import styles from "../styles/routes/Search.module.sass";

function Search() {
  const { search } = useParams();

  const { data, refetch, isRefetching, isLoading } = useQuery(
    "search",
    () => searchByQuery(search),
    { refetchOnWindowFocus: false },
  );

  useEffect(() => {
    refetch();
  }, [search]);

  if (isLoading || isRefetching)
    return (
      <main className={styles.loading}>
        <h3>Carregando...</h3>
      </main>
    );

  return (
    <main className={styles.main}>
      <h3>Exibindo resultados da busca: "{search?.replaceAll("-", " ")}"</h3>
      <Products data={data} />
    </main>
  );
}

export default Search;
