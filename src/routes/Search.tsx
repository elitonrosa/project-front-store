import { useEffect } from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router";
import { searchByQuery } from "../services/fetchAPI";

interface ProductProps {
  id: string;
  title: string;
  thumbnail: string;
  price: number;
  original_price: number;
}

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

  if (isLoading || isRefetching) return <h3>Carregando...</h3>;

  return (
    <main>
      {data?.map((product: ProductProps) => (
        <div key={product.id}>
          <h3>{product.title}</h3>
          <p>{product.original_price}</p>
          <p>{product.price}</p>
        </div>
      ))}
    </main>
  );
}

export default Search;
