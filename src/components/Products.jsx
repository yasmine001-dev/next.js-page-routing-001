import Image from "next/image";
import Link from "next/link";

const ProductsComponent = ({ products }) => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>ID</th>
          <th>Image</th>
          <th>Title</th>
          <th>Category</th>
          <th>Price</th>
          <th>Rating</th>
          <th>Details</th>
        </tr>
      </thead>

      <tbody>
        {products.map((p) => (
          <tr key={p.id}>
            <td>{p.id}</td>
            <td>
              <Image src={p.thumbnail} width={50} height={50} alt={p.title} />
            </td>
            <td>{p.title}</td>

            <td>{p.category}</td>
            <td>${p.price}</td>
            <td>{p.rating}</td>

            <td>
              <Link className="btn btn-dark" href={`/products/${p.id}`}>
                See Details
              </Link>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ProductsComponent;
