import ProductDetails from "../../../components/ProductDetails";
import React from 'react';

const ProductPage = ({ product }) => {
  return (
    <>
      <ProductDetails product={product} />
    </>
  );
};

export default ProductPage;

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: "blocking",
  };
}

export async function getStaticProps(context) {
  const { params } = context;
  const res = await fetch(`https://dummyjson.com/products/${params.ID}`);

  if (!res.ok) {
    return {
      notFound: true,
    };
  }

  const data = await res.json();

  return {
    props: {
      product: data.product,
    },
  };
}