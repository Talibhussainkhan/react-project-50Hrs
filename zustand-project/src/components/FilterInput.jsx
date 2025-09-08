import { useState } from "react";

const SearchFilter = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const fruits = ["Apple", "Banana", "Orange", "Mango", "Grapes", "Pineapple"];

  // jab input field empty hoti hai included("") empty string milti to true return karta hai
  // q ke empty "" available hoti hai sab main
  const filteredFruits = fruits.filter((fruit) =>
    fruit.toLowerCase().includes(searchTerm.toLowerCase())
  );
  

  return (
    <div style={{ padding: "20px" }}>
      <input
        type="text"
        placeholder="Search fruit..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{
          padding: "8px",
          width: "200px",
          marginBottom: "10px",
          border: "1px solid #ccc",
          borderRadius: "5px",
        }}
      />

      <ul>
        {filteredFruits.length > 0 ? (
          filteredFruits.map((fruit, index) => <li key={index}>{fruit}</li>)
        ) : (
          <li>No results found</li>
        )}
      </ul>
    </div>
  );
};

export default SearchFilter;
