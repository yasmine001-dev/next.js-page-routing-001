import ProductsComponent from "../../components/Products";
import React from "react";

const Index = ({ products }) => {
  return (
    <div>
      <ProductsComponent products={products} />
    </div>
  );
};

export default Index;

export async function getStaticProps() {
  const res = await fetch("https://dummyjson.com/products");
  const data = await res.json();

  return {
    props: {
      products: data.products, 
    },
  };
}