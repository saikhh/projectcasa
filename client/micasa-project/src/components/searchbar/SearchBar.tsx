import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import "./searchbar.scss";

function SearchBar() {
  const [searchTerm, setSearchTerm] = useState("");
  //   const [filteredData,setFiltereddata]=useState(data);
  const handleSearchSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        border: "1px solid #ccc",
        borderRadius: "5px",
        padding: "5px",
        backgroundColor: "white",
      }}
    >
      <input
        type="text"
        placeholder="Search..."
        onChange={handleSearchSubmit}
        style={{ border: "none", outline: "none", flexGrow: 1 }}
      />
      <button type="submit">
        {" "}
        <FaSearch style={{ marginRight: "10px" }} />
      </button>
    </div>
  );
}

export default SearchBar;
