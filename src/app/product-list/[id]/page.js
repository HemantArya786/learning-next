"use client";
import { useParams } from "next/navigation";

const ProductById = () => {
  const { id } = useParams();

  return (
    <div>
      this page has some id , that we will show here :{JSON.stringify(id)}
    </div>
  );
};

export default ProductById;
