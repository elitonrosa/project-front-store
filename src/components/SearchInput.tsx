import { useRef } from "react";
import { useNavigate } from "react-router-dom";

import styles from "../styles/components/SearchInput.module.sass";

function SearchInput() {
  const search = useRef<HTMLInputElement>(null);

  const navigate = useNavigate();

  const handleSearch = () => {
    if (search.current?.value.match(/\S/)) {
      const searchValue = search.current?.value;
      navigate(`/search/${searchValue?.replaceAll(" ", "-")}`);
      search.current !== null && (search.current.value = "");
      return;
    }
    search.current?.focus();
  };

  return (
    <div className={styles.searchWrapper}>
      <input
        type="text"
        placeholder="Pesquise por um produto"
        ref={search}
        onKeyDown={(event) => {
          if (event.key === "Enter") {
            handleSearch();
          }
        }}
      />
      <button type="button" onClick={handleSearch}>
        Search
      </button>
    </div>
  );
}

export default SearchInput;
