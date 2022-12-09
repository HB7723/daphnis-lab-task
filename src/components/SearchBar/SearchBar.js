import React from "react";

import "./SearchBar.css";

const SearchBar = () => {
  return (
    <>
      <section className="search-bar">
        <div className="search-bar__path-name">
          Medical Darpan {">"} Search {">"}{" "}
          <span className="search-bar__path-name-active">FabiFlu Tablet</span>
        </div>

        <div>
          <input type="search" className="search-bar__search" />
          <button className="search-bar__button font-inter">Search</button>
        </div>

        <h1 className="search-bar__results">Paracetamol (128 Products)</h1>
      </section>
    </>
  );
};

export default SearchBar;
