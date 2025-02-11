import React from "react";

function ProductList() {
    const products = [
        { id: 1, name: "Puma", price: "$699" },
        { id: 2, name: "Nike", price: "$1200" },
        { id: 3, name: "Addidas", price: "$199" },
      ];

  return (
    <div>
      <h2>Product List</h2>
      <ol>
        {products.map((product) => (
          <li key={product.id}>
            {product.name} - Price: {product.price}
          </li>
        ))}
      </ol>
    </div>
  );
}

export default ProductList;