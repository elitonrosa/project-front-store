interface ProductProps {
  id: string;
  title: string;
  thumbnail: string;
  price: number;
  original_price: number;

}

function Products({ data }: { data: ProductProps[] | undefined}) {
  if (data?.length === 0) return <h3>Nenhum resultado encontrado</h3>;
  

  return (
    <>
    {data?.map((product) => (
      <div key={product.id}>
        <img src={product.thumbnail} alt={product.title} />
        <h3>{product.title}</h3>
        <p>{product.original_price}</p>
        <p>{product.price}</p>
      </div>
    ))}
    </>
  )
}

export default Products