import React, { useRef } from "react";

import styles from "../styles/components/InputSearch.module.sass";

function InputSearch() {
  const search = useRef<HTMLInputElement>(null);

  const handleSearch = () => {
    console.log(search.current?.value);
  };

  return (
    <div className={ styles.searchWrapper }>
      <input type="text" placeholder="Pesquise por um produto" ref={search} />
      <button type="button" onClick={handleSearch}>Search</button>
    </div>
  );
}

export default InputSearch;
